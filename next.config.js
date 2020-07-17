const path = require('path')
const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
// const withSass = require("@zeit/next-sass");

const plugins = [
  // [withCSS, {}],
  // [withSass, {}],
];

const nextConfiguration = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  //   exportPathMap: function () {
  //     return {
  //       "/": { page: "/home" },
  //       "/privacy_policy.html": { page: "/policy" },
  //     };
  //   },
};

module.exports = withPlugins([...plugins], nextConfiguration);
