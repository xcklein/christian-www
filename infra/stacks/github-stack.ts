import { App, aws_iam as IAM, Stack, StackProps } from 'aws-cdk-lib';

export class GithubStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const user = 'xcklein';
    const repo = 'christian-www';

    const oicp = new IAM.OpenIdConnectProvider(this, 'Oicp', {
      url: 'https://token.actions.githubusercontent.com',
      clientIds: ['sts.amazonaws.com'],
    });

    const role = new IAM.Role(this, 'Role', {
      assumedBy: new IAM.WebIdentityPrincipal(oicp.openIdConnectProviderArn, {
        StringLike: {
          'token.actions.githubusercontent.com:sub': `repo:${user}/${repo}:*`,
        },
      }),
    });

    role.addToPolicy(
      new IAM.PolicyStatement({
        effect: IAM.Effect.ALLOW,
        actions: ['ssm:GetParameter'],
        resources: [`arn:aws:ssm:*:${this.account}:parameter/cdk-bootstrap/*`],
      }),
    );
  }
}
