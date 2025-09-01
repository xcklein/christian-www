import { CopyBlock, vs2015 } from '@/components/code-blocks';
import { Text } from '@/components/material';
import Link from 'next/link';

export function PostStaticWebsite() {
  const ts1 = `export const CONFIG = {
  AWS_ACCOUNT: "1234567890", // your AWS account ID
  AWS_REGION: "us-east-2", // your desired region

  DOMAIN_NAME: "mydomain.com", // your purchased domain
  DOMAIN_SUBDOMAINS: [ "www" ], // the subdomains you wish to use

  ZONE_ID: "TODO", // the deployed hosted zone ID
  CERT_ARN: "TODO" // the deployed certificate ARN
};`;
  const ts2 = `export class ZoneStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const zone = new R53.HostedZone(this, 'MyZone', {
      zoneName: CONFIG.DOMAIN_NAME,
    });
  }
}`;
  const ts3 = `const app = new App();

new ZoneStack(app, "ZoneStack", {
  env: {
    account: CONFIG.AWS_ACCOUNT,
    region: CONFIG.AWS_REGION
  }
});`;
  const ts4 = `export class CertStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const zone = R53.HostedZone.fromHostedZoneAttributes(this, "MyZone", {
      hostedZoneId: CONFIG.ZONE_ID,
      zoneName: CONFIG.DOMAIN_NAME
    });

    const cert = new ACM.Certificate(this, "MyCert", {
      domainName: \`*.\${CONFIG.DOMAIN_NAME}\`,
      subjectAlternativeNames: [CONFIG.DOMAIN_NAME],
      validation: ACM.CertificateValidation.fromDns(zone),
    });
  }
}`;
  const ts5 = `const app = new App();

new CertStack(app, "CertStack", {
  env: {
    account: CONFIG.AWS_ACCOUNT,
    region: 'us-east-1'
  }
});`;
  const ts6 = `export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new S3.Bucket(this, "MyBucket", {
      bucketName: CONFIG.DOMAIN_NAME,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      publicReadAccess: true,
      blockPublicAccess: new S3.BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        restrictPublicBuckets: false,
        ignorePublicAcls: false,
      }),
      websiteIndexDocument: "index.html",
    });
  }
}`;
  const ts7 = `const cert = ACM.Certificate.fromCertificateArn(this, "MyCert", CONFIG.CERT_ARN);

const dist = new CF.Distribution(this, "MyDistribution", {
  domainNames: [CONFIG.DOMAIN_NAME, ...CONFIG.DOMAIN_SUBDOMAINS.map(s => \`\${s}.\${CONFIG.DOMAIN_NAME}\`)],
  certificate: cert,
  defaultBehavior: {
    origin: new CFO.S3Origin(bucket),
    viewerProtocolPolicy: CF.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
  },
});`;
  const ts8 = `const deploy = new S3_DEPLOY.BucketDeployment(this, "MyDeployment", {
  sources: [S3_DEPLOY.Source.asset("./out")],
  destinationBucket: bucket,
  distribution: dist,
});`;
  const ts9 = `const zone = R53.HostedZone.fromHostedZoneAttributes(this, "MyZone", {
  hostedZoneId: CONFIG.ZONE_ID,
  zoneName: CONFIG.DOMAIN_NAME
});

const record = new R53.ARecord(this, "MyRecord", {
  recordName: CONFIG.DOMAIN_NAME,
  zone: zone,
  target: R53.RecordTarget.fromAlias(new R53T.CloudFrontTarget(dist)),
});

for (const sub of CONFIG.DOMAIN_SUBDOMAINS) {
  new R53.ARecord(this, \`MyRecord-\${sub}\`, {
    recordName: \`\${sub}.\${CONFIG.DOMAIN_NAME}\`,
    zone: zone,
    target: R53.RecordTarget.fromAlias(new R53T.Route53RecordTarget(record)),
  });
}`;
  const ts10 = `import {
  RemovalPolicy,
  aws_certificatemanager as ACM,
  aws_cloudfront as CF,
  aws_route53 as R53,
  aws_route53_targets as R53T,
  aws_s3 as S3,
  aws_s3_deployment as S3_DEPLOY,
  Stack,
  type StackProps
} from "aws-cdk-lib";
import { type Construct } from "constructs";
import { CONFIG } from "./config.js";

export class WwwStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new S3.Bucket(this, "MyBucket", {
      bucketName: CONFIG.DOMAIN_NAME,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      publicReadAccess: true,
      blockPublicAccess: new S3.BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        restrictPublicBuckets: false,
        ignorePublicAcls: false,
      }),
      websiteIndexDocument: "index.html",
    });

    const cert = ACM.Certificate.fromCertificateArn(this, "MyCert", CONFIG.CERT_ARN);

    const dist = new CF.Distribution(this, "MyDistribution", {
      domainNames: [CONFIG.DOMAIN_NAME, ...CONFIG.DOMAIN_SUBDOMAINS.map(s => \`\${s}.\${CONFIG.DOMAIN_NAME}\`)],
      certificate: cert,
      defaultBehavior: {
        origin: new CFO.S3Origin(bucket),
        viewerProtocolPolicy: CF.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
    });

    const deploy = new S3_DEPLOY.BucketDeployment(this, "MyDeployment", {
      sources: [S3_DEPLOY.Source.asset("./out")],
      destinationBucket: bucket,
      distribution: dist,
    });

    const zone = R53.HostedZone.fromHostedZoneAttributes(this, "MyZone", {
      hostedZoneId: CONFIG.ZONE_ID,
      zoneName: CONFIG.DOMAIN_NAME
    });

    const record = new R53.ARecord(this, "MyRecord", {
      recordName: CONFIG.DOMAIN_NAME,
      zone: zone,
      target: R53.RecordTarget.fromAlias(new R53T.CloudFrontTarget(dist)),
    });

    for (const sub of CONFIG.DOMAIN_SUBDOMAINS) {
      new R53.ARecord(this, \`MyRecord-\${sub}\`, {
        recordName: \`\${sub}.\${CONFIG.DOMAIN_NAME}\`,
        zone: zone,
        target: R53.RecordTarget.fromAlias(new R53T.Route53RecordTarget(record)),
      });
    }
  }
}`;
  const ts11 = `const app = new App();

new WwwStack(app, "WwwStack", {
  env: {
    account: CONFIG.AWS_ACCOUNT,
    region: CONFIG.AWS_REGION
  }
});`;
  const ts12 = `const bucket = new S3.Bucket(this, "MyBucket", {
  bucketName: CONFIG.DOMAIN_NAME,
  removalPolicy: RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
  publicReadAccess: false, // new
  blockPublicAccess: S3.BlockPublicAccess.BLOCK_ALL, // new
});`;
  const ts13 = `const oai = new CF.OriginAccessIdentity(this, 'MyOai');

bucket.grantRead(oai);`;
  const ts14 = `const dist = new CF.Distribution(this, "MyDist", {
  domainNames: [CONFIG.DOMAIN_NAME, ...CONFIG.DOMAIN_SUBDOMAINS.map(s => \`\${s}.\${CONFIG.DOMAIN_NAME}\`)],
  certificate: cert,
  defaultBehavior: {
    origin: new CFO.S3Origin(bucket, {
      originAccessIdentity: oai, // new
    }),
    viewerProtocolPolicy: CF.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
  },
  defaultRootObject: "index.html", // new
});`;
  const js1 = `"use strict";

async function handler(event) {
  const request = event.request;
  const uri = request.uri;

  if (uri.endsWith("/")) {
    request.uri += "index.html";
  }
  else if (!uri.includes(".")) {
      request.uri += "/index.html";
  }

  return request;
}`;
  const ts15 = `const func = new CF.Function(this, "MyFunction", {
  runtime: CF.FunctionRuntime.JS_2_0,
  code: CF.FunctionCode.fromFile({ filePath: "./deploy/viewer-request.js" })
});

const dist = new CF.Distribution(this, "MyDist", {
  domainNames: [CONFIG.DOMAIN_NAME, ...CONFIG.DOMAIN_SUBDOMAINS.map(s => \`\${s}.\${CONFIG.DOMAIN_NAME}\`)],
  certificate: cert,
  defaultBehavior: {
    origin: new CFO.S3Origin(bucket, {
      originAccessIdentity: oai,
    }),
    viewerProtocolPolicy: CF.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    functionAssociations: [ // new
      {
        eventType: CF.FunctionEventType.VIEWER_REQUEST,
        function: func
      }
    ]
  },
  defaultRootObject: "index.html",
});`;
  const ts16 = `import {
  RemovalPolicy,
  aws_certificatemanager as ACM,
  aws_cloudfront as CF,
  aws_cloudfront_origins as CFO,
  aws_route53 as R53,
  aws_route53_targets as R53T,
  aws_s3 as S3,
  aws_s3_deployment as S3_DEPLOY,
  Stack,
  type StackProps
} from "aws-cdk-lib";
import { type Construct } from "constructs";
import { CONFIG } from "./config.js";

export class WwwStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new S3.Bucket(this, "MyBucket", {
      bucketName: CONFIG.DOMAIN_NAME,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      publicReadAccess: false,
      blockPublicAccess: S3.BlockPublicAccess.BLOCK_ALL,
    });

    const oai = new CF.OriginAccessIdentity(this, 'MyOai');

    bucket.grantRead(oai);

    const func = new CF.Function(this, "MyFunction", {
      runtime: CF.FunctionRuntime.JS_2_0,
      code: CF.FunctionCode.fromFile({ filePath: "./deploy/viewer-request.js" })
    });

    const cert = ACM.Certificate.fromCertificateArn(this, "MyCert", CONFIG.CERT_ARN);

    const dist = new CF.Distribution(this, "MyDist", {
      domainNames: [CONFIG.DOMAIN_NAME, ...CONFIG.DOMAIN_SUBDOMAINS.map(s => \`\${s}.\${CONFIG.DOMAIN_NAME}\`)],
      certificate: cert,
      defaultBehavior: {
        origin: new CFO.S3Origin(bucket, {
          originAccessIdentity: oai,
        }),
        viewerProtocolPolicy: CF.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        functionAssociations: [
          {
            eventType: CF.FunctionEventType.VIEWER_REQUEST,
            function: func
          }
        ]
      },
      defaultRootObject: "index.html",
    });

    const deploy = new S3_DEPLOY.BucketDeployment(this, "MyDeploy", {
      sources: [S3_DEPLOY.Source.asset("./out")],
      destinationBucket: bucket,
      distribution: dist,
    });

    const zone = R53.HostedZone.fromHostedZoneAttributes(this, "MyZone", {
      hostedZoneId: CONFIG.ZONE_ID,
      zoneName: CONFIG.DOMAIN_NAME
    });

    const record = new R53.ARecord(this, 'MyRecord', {
      recordName: CONFIG.DOMAIN_NAME,
      zone: zone,
      target: R53.RecordTarget.fromAlias(new R53T.CloudFrontTarget(dist)),
    });

    for (const sub of CONFIG.DOMAIN_SUBDOMAINS) {
      new R53.ARecord(this, \`MyRecord-\${sub}\`, {
        recordName: \`\${sub}.\${CONFIG.DOMAIN_NAME}\`,
        zone: zone,
        target: R53.RecordTarget.fromAlias(new R53T.Route53RecordTarget(record)),
      });
    }
  }
}`;
  const ts17 = `import { App } from "aws-cdk-lib";
import { CONFIG } from "./config.js";
import { WwwStack } from "./www-stack.js";
import { ZoneStack } from "./zone-stack.js";
import { CertStack } from "./cert-stack.js";

const app = new App();

new ZoneStack(app, "ZoneStack", {
  env: {
    account: CONFIG.AWS_ACCOUNT,
    region: CONFIG.AWS_REGION
  }
});

new CertStack(app, "CertStack", {
  env: {
    account: CONFIG.AWS_ACCOUNT,
    region: 'us-east-1'
  }
});

new WwwStack(app, "WwwStack", {
  env: {
    account: CONFIG.AWS_ACCOUNT,
    region: CONFIG.AWS_REGION
  }
});

app.synth();`;

  return (
    <div className="flex flex-col gap-4">
      <Text>
        So you purchased a domain on GoDaddy, Squarespace, etc., and their
        in-house website builder just isn&apos;t enough. You want to host the
        website yourself. How do you go about that?
      </Text>
      <Text>
        Well, look no further. Here is how to host your own static website in
        AWS via CDK.
      </Text>
      <Text>
        Before we add any constructs, lets create a config file with some static
        values. These will be the only values specific to a particular domain.
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts1}
      />
      <Text>
        Alright, now lets gets started with our stacks. We will have 3 in this
        example. First is the ZoneStack.
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts2}
      />
      <Text>
        The hosted zone is the first AWS construct web traffic will hit. This is
        also what will enable us to take over hosting from whichever provider we
        purchased the domain from.
      </Text>
      <Text>Usage in the deploy file looks like this:</Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts3}
      />
      <Text>
        We pass the region in, but it does not really matter since Route 53 is
        global.
      </Text>
      <Text>
        Once we deploy ZoneStack, we will want to copy the hosted zone ID from
        Route 53 and paste it into our config.
      </Text>
      <Text>
        We can now take over hosting from our domain provider by finding the 4
        Name Servers of the hosted zone. These are found in the hosted zone
        details in your AWS console. They will look something like{' '}
        <code>ns-1234.awsdns-01.com</code>. Once found, navigate to the name
        servers settings in your domain provider&apos;s client (probably under
        DNS settings) and add the 4 AWS name servers. This may require enabling
        &quot;custom nameservers&quot; or something similar.
      </Text>
      <Text>Next is the certificate, which is again its own stack.</Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts4}
      />
      <Text>
        We are using DNS certification validation, which can take a while on
        first deploy--up to 30 minutes. This is an alternative to email
        validation, which is faster, on average, but requires human intervention
        mid-deploy. DNS validation, while often slower, is fully automated.
      </Text>
      <Text>Deploy file usage looks like so:</Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts5}
      />
      <Text>
        Notice that the region is hardcoded to <code>us-east-1</code>. Web
        certificates must be in this region.
      </Text>
      <Text>
        Once we deploy CertStack, we will want to get the certificate ARN from
        Certificate Manager just like how we got the hosted zone ID and paste it
        into our config.
      </Text>
      <Text>Now for the meatier WwwStack. This will be shown in parts.</Text>
      <Text>
        First we add a bucket. For now, it will be a public static webhosting
        bucket.
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts6}
      />
      <Text>
        Next, we need to fetch our certificate and create a cloudfront
        distribution.
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts7}
      />
      <Text>Then we need to create a bucket deployment.</Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts8}
      />
      <Text>
        Here <code>./out</code> is the output directory of your static site.
        Adjust as needed for your environment.
      </Text>
      <Text>
        To tie it all together we create A Records in the hosted zone for our
        Cloudfront distribution.
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts9}
      />
      <Text>
        All together the stack looks like this, and should successfully deploy
        your website to your custom domain.
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts10}
      />
      <Text>Deploy file usage looks like:</Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts11}
      />
      <Text>
        At this point, you could be done, but perhaps you want your bucket to be
        private. This is possible, but requires some extra boilerplate.
      </Text>
      <Text>First, lets make the bucket private.</Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts12}
      />
      <Text>
        Notice we also remove the index document property. This turns off static
        website hosting mode and makes this a &quot;normal&quot; bucket.
      </Text>
      <Text>
        Next, we will add a new identity for incoming Cloudfront requests. We
        grant this identity read access on the bucket.
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts13}
      />
      <Text>
        Then we update our Cloudfront distribution to use this identity. We also
        leverage <code>defaultRootObject</code> to handle our index document
        since we removed it from S3.
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts14}
      />
      <Text>
        With these changes, alone, your website should be functional with a
        private S3 bucket.
      </Text>
      <Text>
        However, depending on your web framework, refreshing a non-root page or
        navigating to a non-root page from outside of your site may result in
        error responses. This is because Cloudfront does not natively know how
        to convert URL requests to S3 paths. We can solve this with a simple
        Cloudfront function.
      </Text>
      <Text>
        First, lets create a new JS script, viewer-request.js. This will append{' '}
        <code>index.html</code> to all requests. The URL in the user&apos;s
        browser will not change.
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={js1}
      />
      <Text>
        Now we need to reference it in our CDK as a Cloudfront function and
        apply it to our Cloudfront distribution.
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts15}
      />
      <Text>And that&apos;s it. Once again, the full code is here:</Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts16}
      />
      <Text>
        For completeness&apos;s sake, here is the full deploy file. You may also
        view the full deploy directory for this website{' '}
        <Link
          href="https://github.com/xcklein/christian-www/tree/main/deploy"
          className="text-palette-blue"
        >
          here
        </Link>
        .
      </Text>
      <CopyBlock
        language="ts"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={ts17}
      />
      <Text>
        Getting to this point required me to comb through a variety of different
        guides and ChatGPT requests, so I hope this single, comprehensive guide
        is helpful to someone.
      </Text>
      <Text>Good luck, and happy coding!</Text>
    </div>
  );
}
