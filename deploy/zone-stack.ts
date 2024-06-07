import {
  aws_certificatemanager as ACM,
  aws_route53 as R53,
  Stack,
  StackProps
} from "aws-cdk-lib";
import { type Construct } from "constructs";
import { CONFIG } from "./config.js";

export class ZoneStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const zone = new R53.HostedZone(this, 'WwwZone', {
      zoneName: CONFIG.DOMAIN_NAME,
    });
  }
}