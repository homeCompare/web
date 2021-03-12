"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowOnMedium = exports.HideOnMedium = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  height: inherit;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  height: inherit;\n  justify-content: flex-end;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * this solution isnt good as we still render unused DOM.
 * TODO: look for a way to manage it with hooks.
 */
var HideOnMedium = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.media('md', "\n    display: none;\n  ");
});

exports.HideOnMedium = HideOnMedium;

var ShowOnMedium = _styledComponents["default"].div(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.media('md', "\n    display: flex;\n    flex: 1;\n  ");
});

exports.ShowOnMedium = ShowOnMedium;