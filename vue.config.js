const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  assetsDir: "assets",
  pages: {
    index: {
      entry: "src/scripts/main.ts",
      template: "src/public/index.html",
      title: "",
    },
  },
  configureWebpack: {
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
  devServer: {
    port: 8080,
  },
};
