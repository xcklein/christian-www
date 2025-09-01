import { App, Tags } from 'aws-cdk-lib';
import { CertStack, WwwStack, ZoneStack } from './stacks/index.js';

const app = new App();

const account = app.node.getContext('account');
const region = app.node.getContext('region');

const env = {
  account: account,
  region: region,
};

const domain = {
  name: 'christian.gg',
  subdomains: ['www'],
};

const zoneStack = new ZoneStack(app, 'ZoneStack', {
  env,
  domain,
});

const certStack = new CertStack(app, 'CertStack', {
  crossRegionReferences: true,
  env: {
    ...env,
    region: 'us-east-1', // cert must be us-east-1
  },
  domain,
  zone: zoneStack.zone,
});

new WwwStack(app, 'WwwStack', {
  crossRegionReferences: true,
  env,
  domain,
  zone: zoneStack.zone,
  cert: certStack.cert,
});

Tags.of(app).add('eng:system', 'christian-www');
Tags.of(app).add('eng:repo', 'https://github.com/xcklein/christian-www');

app.synth();
