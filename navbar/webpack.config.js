const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (env, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "navbar",
    webpackConfigEnv: env,
    argv,
    outputSystemJS: true, // ✅ OpenMRS-compatible
  });

  return merge(defaultConfig, {
    devServer: {
      port: 9001,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },

    output: {
      filename: "navbar.js",
      publicPath: "/",
    },

    // 🔥 REQUIRED FIX for React 17 + Carbon + ESM (.mjs)
    resolve: {
      extensions: [".js", ".jsx", ".mjs"],
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false, // 🔥 FIXES react/jsx-runtime error
          },
        },
      ],
    },
  });
};
