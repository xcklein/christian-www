import { aws_route53 as R53, Stack, type StackProps } from 'aws-cdk-lib';
import { type Construct } from 'constructs';

export interface ZoneStackProps extends StackProps {
  domain: {
    name: string;
  };
}

export class ZoneStack extends Stack {
  readonly zone: R53.HostedZone;

  constructor(scope: Construct, id: string, props: ZoneStackProps) {
    super(scope, id, props);

    this.zone = new R53.HostedZone(this, 'WwwZone', {
      zoneName: props.domain.name,
    });
  }
}
