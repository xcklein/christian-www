import {
  aws_certificatemanager as ACM,
  aws_cloudfront as CF,
  aws_cloudfront_origins as CFO,
  aws_route53 as R53,
  aws_route53_targets as R53T,
  RemovalPolicy,
  aws_s3 as S3,
  aws_s3_deployment as S3_DEPLOY,
  Stack,
  type StackProps,
} from 'aws-cdk-lib';
import { type Construct } from 'constructs';

export interface WwwStackProps extends StackProps {
  domain: {
    name: string;
    subdomains: string[];
  };
  zone: R53.IHostedZone;
  cert: ACM.ICertificate;
}

export class WwwStack extends Stack {
  constructor(scope: Construct, id: string, props: WwwStackProps) {
    super(scope, id, props);

    const bucket = new S3.Bucket(this, 'WwwBucket', {
      bucketName: props.domain.name,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      publicReadAccess: false,
      blockPublicAccess: S3.BlockPublicAccess.BLOCK_ALL,
    });

    const oai = new CF.OriginAccessIdentity(this, 'WwwOai');

    bucket.grantRead(oai);

    const func = new CF.Function(this, 'WwwFunction', {
      runtime: CF.FunctionRuntime.JS_2_0,
      code: CF.FunctionCode.fromFile({
        filePath: './infra/functions/viewer-request.js',
      }),
    });

    const dist = new CF.Distribution(this, 'WwwDist', {
      domainNames: [
        props.domain.name,
        ...props.domain.subdomains.map((s) => `${s}.${props.domain.name}`),
      ],
      certificate: props.cert,
      defaultBehavior: {
        origin: new CFO.S3Origin(bucket, {
          originAccessIdentity: oai,
        }),
        viewerProtocolPolicy: CF.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        functionAssociations: [
          {
            eventType: CF.FunctionEventType.VIEWER_REQUEST,
            function: func,
          },
        ],
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/404.html',
        },
      ],
    });

    const deploy = new S3_DEPLOY.BucketDeployment(this, 'WwwDeploy', {
      sources: [S3_DEPLOY.Source.asset('./out')],
      destinationBucket: bucket,
      distribution: dist,
    });

    const record = new R53.ARecord(this, 'WwwRecord', {
      recordName: props.domain.name,
      zone: props.zone,
      target: R53.RecordTarget.fromAlias(new R53T.CloudFrontTarget(dist)),
    });

    for (const sub of props.domain.subdomains) {
      new R53.ARecord(this, `WwwRecord-${sub}`, {
        recordName: `${sub}.${props.domain.name}`,
        zone: props.zone,
        target: R53.RecordTarget.fromAlias(
          new R53T.Route53RecordTarget(record),
        ),
      });
    }
  }
}
