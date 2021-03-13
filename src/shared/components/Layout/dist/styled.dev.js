"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  direction: ltr;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].main(_templateObject());

exports.Container = Container;

var Content = _styledComponents["default"].main(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.defaultSizer;
});
/**
 *   ${({theme}) => theme.media('md', `
    flex-direction: row;
  `)}
 */


exports.Content = Content;