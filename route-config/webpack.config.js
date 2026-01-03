const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (env, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "root-config",
    webpackConfigEnv: env,
    argv,
  });

  return merge(defaultConfig, {
    entry: {
      "root-config": "./src/root-config.js",
    },
    devServer: {
      port: 9000,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    output: {
      filename: "root-config.js",
      publicPath: "/",
    },
  });
};
