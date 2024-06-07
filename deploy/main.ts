import { App } from "aws-cdk-lib";
import { CONFIG } from "./config.js";
import { WwwStack } from "./www-stack.js";
import { ZoneStack } from "./zone-stack.js";
import { CertStack } from "./cert-stack.js";

const app = new App();

new ZoneStack(app, "ZoneStack", {
  description: "CK zone",
  env: {
    account: CONFIG.AWS_ACCOUNT,
    region: CONFIG.AWS_REGION
  }
});

new CertStack(app, "CertStack", {
  description: "CK zone",
  env: {
    account: CONFIG.AWS_ACCOUNT,
    region: 'us-east-1'
  }
});

new WwwStack(app, "WwwStack", {
  description: "CK www site",
  env: {
    account: CONFIG.AWS_ACCOUNT,
    region: CONFIG.AWS_REGION
  }
});

app.synth();