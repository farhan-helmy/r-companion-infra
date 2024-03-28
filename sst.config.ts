import { SSTConfig } from "sst";
import { MyStack } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "r-companion-infra",
      region: "ap-southeast-1",
      profile: "sk8jx"
    };
  },
  stacks(app) {
    app.stack(MyStack);
  }
} satisfies SSTConfig;
