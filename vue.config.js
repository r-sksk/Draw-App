const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  productionSourceMap: false,
  assetsDir: "assets",
  pages: {
    index: {
      entry: "src/scripts/main.ts",
      template: "src/public/index.html",
      title: "",
    },
  },
  configureWebpack: {
    output: {
      filename: "main.js",
      chunkFilename: "libraries.js",
    },
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/scripts"),
        "@img": path.join(__dirname, "src/images"),
      },
    },
    plugins: [
      new CopyPlugin([
        {
          from: path.join(__dirname, "src/public"),
          to: path.join(__dirname, "dist"),
          toType: "dir",
        },
      ]),
    ],
  },
  css: {
    sourceMap: false,
    extract: {
      filename: "main.css",
    },
  },
  devServer: {
    port: 8080,
  },
};
