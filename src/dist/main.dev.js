"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bus = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _App = _interopRequireDefault(require("./App.vue"));

var _routes = _interopRequireDefault(require("./routes"));

require("./statics/core.scss");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _vueFontawesome = require("@fortawesome/vue-fontawesome");

var _bootstrapVue = _interopRequireDefault(require("bootstrap-vue/dist/bootstrap-vue.esm"));

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

var _vuenes = _interopRequireDefault(require("vuenes.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bus = new _vue["default"]();
exports.bus = bus;

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faBars, _freeSolidSvgIcons.faInfo, _freeSolidSvgIcons.faHighlighter, _freeSolidSvgIcons.faPlus, _freeSolidSvgIcons.faMinus, _freeBrandsSvgIcons.faLinkedin, _freeBrandsSvgIcons.faGithubSquare, _freeBrandsSvgIcons.faFacebookSquare);

_vue["default"].use(_vueRouter["default"], _bootstrapVue["default"]);

_vue["default"].component('font-awesome-icon', _vueFontawesome.FontAwesomeIcon);

_vue["default"].config.productionTip = false;

_vue["default"].use(_vuenes["default"]);

new _vue["default"]({
  router: _routes["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');