import {
  aws_certificatemanager as ACM,
  aws_route53 as R53,
  Stack,
  type StackProps
} from "aws-cdk-lib";
import { type Construct } from "constructs";
import { CONFIG } from "./config.js";

export class CertStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const zone = R53.HostedZone.fromHostedZoneAttributes(this, "WwwZone", {
      hostedZoneId: CONFIG.ZONE_ID,
      zoneName: CONFIG.DOMAIN_NAME
    });

    const cert = new ACM.Certificate(this, "WwwCert", {
      domainName: `*.${CONFIG.DOMAIN_NAME}`,
      subjectAlternativeNames: [CONFIG.DOMAIN_NAME],
      validation: ACM.CertificateValidation.fromDns(zone),
    });
  }
}