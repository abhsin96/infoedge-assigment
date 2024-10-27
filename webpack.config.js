const path = require("path");

module.exports = {
  // Other webpack configurations...

  resolve: {
    fallback: {
      process: require.resolve("process/browser"),
      path: require.resolve("path-browserify"),
    },
  },

  // Other webpack configurations...
};
