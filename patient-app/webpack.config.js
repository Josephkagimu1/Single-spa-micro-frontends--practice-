const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "patient-app",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 9002, // 👈 MUST be unique
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};
