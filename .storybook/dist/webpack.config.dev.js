"use strict";

var path = require('path');

module.exports = function (_ref) {
  var config = _ref.config;
  // a bunch of other rules here
  config.resolve.modules = [path.resolve(__dirname, "..", "src"), "node_modules"]; // Alternately, for an alias:

  config.resolve.alias = {
    "@/homepage": path.resolve(__dirname, "../src/homepage"),
    "@/home": path.resolve(__dirname, "../src/home"),
    "@/homesList": path.resolve(__dirname, "../src/homesList"),
    "@/addHome": path.resolve(__dirname, "../src/addHome"),
    "@/editHome": path.resolve(__dirname, "../src/editHome"),
    "@/compare": path.resolve(__dirname, "../src/compare"),
    "@/shared": path.resolve(__dirname, "../src/shared"),
    "@/state": path.resolve(__dirname, "../src/state"),
    "@/pages": path.resolve(__dirname, "../src/pages")
  };
  return config;
};