import {
  aws_certificatemanager as ACM,
  aws_route53 as R53,
  Stack,
  type StackProps,
} from 'aws-cdk-lib';
import { type Construct } from 'constructs';

export interface CertStackProps extends StackProps {
  domain: {
    name: string;
  };
  zone: R53.IHostedZone;
}

export class CertStack extends Stack {
  readonly cert: ACM.Certificate;

  constructor(scope: Construct, id: string, props: CertStackProps) {
    super(scope, id, props);

    this.cert = new ACM.Certificate(this, 'WwwCert', {
      domainName: `*.${props.domain.name}`,
      subjectAlternativeNames: [props.domain.name],
      validation: ACM.CertificateValidation.fromDns(props.zone),
    });
  }
}
