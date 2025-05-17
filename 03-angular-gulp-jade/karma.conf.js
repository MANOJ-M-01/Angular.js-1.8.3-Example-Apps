module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: ["dist/**/*.js", "test/**/*.spec.js"],
    exclude: [],
    preprocessors: {},
    reporters: ["progress"],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
  });
};
