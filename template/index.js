import { readFileSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { argv } from "node:process";

const __dirname = resolve();

const template = {
  dev: resolve(__dirname, "template/dev.txt"),
  prod: resolve(__dirname, "template/prod.txt"),
};
const output = resolve(__dirname, "dist/tampermonkey-demo.umd.cjs");

const build = env => {
  if (env === "dev") {
    if (existsSync(template.dev)) {
      let res = readFileSync(template.dev).toString();
      res = res.replace("{{file}}", `file:///${output}`);
      writeFileSync(resolve(__dirname, "dev.js"), res);
    }
  } else if (env === "prod") {
    if (existsSync(template.prod)) {
      let res = readFileSync(template.prod).toString();
      res = res.replace("{{file}}", readFileSync(output).toString());
      writeFileSync(resolve(__dirname, "prod.js"), res);
    }
  } else {
    // ...
  }
};

const env = argv[2];
if (!["dev", "prod"].includes(env)) {
  throw new Error(`Invalid env: ${env}`);
}

build(env);
