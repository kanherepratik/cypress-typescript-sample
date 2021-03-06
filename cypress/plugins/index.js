// plugins file
const webpack = require("@cypress/webpack-preprocessor");

module.exports = (on, config) => {
  const options = {
    webpackOptions: require("../../webpack.config"),
    watchOptions: {},
  };
  on("file:preprocessor", getWepPackWithFileChange(options));
};

function getWepPackWithFileChange(options) {
  const webPackPreProcessor = webpack(options);
  return function (file) {
    file.outputPath = file.outputPath.replace(".ts", ".js");
    return webPackPreProcessor(file);
  };
}
