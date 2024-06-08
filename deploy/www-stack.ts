import {
  RemovalPolicy,
  aws_certificatemanager as ACM,
  aws_cloudfront as CF,
  aws_cloudfront_origins as CFO,
  aws_route53 as R53,
  aws_route53_targets as R53T,
  aws_s3 as S3,
  aws_s3_deployment as S3_DEPLOY,
  Stack,
  StackProps
} from "aws-cdk-lib";
import { type Construct } from "constructs";
import { CONFIG } from "./config.js";

export class WwwStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new S3.Bucket(this, "WwwBucket", {
      bucketName: CONFIG.DOMAIN_NAME,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      // TODO make bucket private--oai not working?
      // publicReadAccess: false,
      // blockPublicAccess: S3.BlockPublicAccess.BLOCK_ALL,
      publicReadAccess: true,
      blockPublicAccess: new S3.BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        restrictPublicBuckets: false,
        ignorePublicAcls: false
      }),
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html",
    });

    const oai = new CF.OriginAccessIdentity(this, 'WwwOai');

    bucket.grantRead(oai);

    const cert = ACM.Certificate.fromCertificateArn(this, "WwwCert", CONFIG.CERT_ARN);

    const dist = new CF.Distribution(this, "WwwDist", {
      domainNames: [CONFIG.DOMAIN_NAME],
      certificate: cert,
      defaultBehavior: {
        origin: new CFO.S3Origin(bucket, {
          originAccessIdentity: oai,
        }),
        viewerProtocolPolicy: CF.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
    });

    const deploy = new S3_DEPLOY.BucketDeployment(this, "WwwDeploy", {
      sources: [S3_DEPLOY.Source.asset("./out")],
      destinationBucket: bucket,
      distribution: dist,
    });

    const zone = R53.HostedZone.fromHostedZoneAttributes(this, "WwwZone", {
      hostedZoneId: CONFIG.ZONE_ID,
      zoneName: CONFIG.DOMAIN_NAME
    });

    const record = new R53.ARecord(this, 'WwwRecord', {
      zone: zone,
      target: R53.RecordTarget.fromAlias(new R53T.CloudFrontTarget(dist)),
    });
  }
}