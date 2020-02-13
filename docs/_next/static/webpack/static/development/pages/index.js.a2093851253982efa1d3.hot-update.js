webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/home/ronin/Documentos/Projetos/eja-luzdosaber/components/Header.js";





var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.selected = '';
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var elementsSelected = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(this).getElementsByClassName('selected');

      for (var index = 0; index < elementsSelected.length; index++) {
        var element = elementsSelected[index];
        element.classList.remove('selected');
        console.log(element.classList);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-777053600" + " " + "d-flex row main-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-777053600" + " " + "col-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-777053600" + " " + "row logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-777053600" + " " + "hidden-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "LUZ DO SABER - PORTAL"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/logo_eja.png",
        alt: "Logo Sol Luz do Saber",
        className: "jsx-777053600" + " " + "logo-eja",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-777053600" + " " + "col-sm-8 nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-777053600" + " " + "row search-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-777053600" + " " + "search-bar-itens search-input-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "search",
        id: "search",
        placeholder: "O QUE VOC\xCA PROCURA?",
        className: "jsx-777053600" + " " + "search-input form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: "https://luz-do-saber-staging.herokuapp.com/#/",
        target: "_blank",
        className: "jsx-777053600" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-777053600" + " " + "btn search-input btn-font-light form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Editar")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-777053600" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-777053600" + " " + "btn search-input btn-font-dark form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Instalar"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-777053600" + " " + "hamburguer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "menu-hamburguer",
        type: "checkbox",
        className: "jsx-777053600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "menu-hamburguer",
        className: "jsx-777053600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-777053600" + " " + "menu-hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-777053600" + " " + "hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-777053600" + " " + "row menu-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-777053600" + " " + "col-sm menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-777053600" + " " + ("inicio " + (this.props.selected === "inicio" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-777053600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "In\xEDcio"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-777053600" + " " + "software disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "software")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-777053600" + " " + "download disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-777053600" + " " + "tutorial disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Tutorial")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-777053600" + " " + "forum disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "F\xF3rum")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-777053600" + " " + "creditos disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Cr\xE9ditos")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-777053600" + " " + ("contato " + (this.props.selected === "contact" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-777053600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Contato"))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "777053600",
        __self: this
      }, "@media (min-width:1200px){.hamburguer-container.jsx-777053600>input.jsx-777053600,.hamburguer-container.jsx-777053600>label.jsx-777053600{display:none;}.main-nav.jsx-777053600{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-777053600{visibility:hidden;position:absolute;}.nav-search.jsx-777053600{font-family:'Itim',cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.search-bar.jsx-777053600{position:absolute;right:70px;top:50px;}.menu.jsx-777053600{position:absolute;bottom:-17px;}.menu.jsx-777053600 li.jsx-777053600{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;border:1px solid #F0F0F0;margin-left:1px;}.menu.jsx-777053600 li.jsx-777053600:hover{cursor:pointer;}.menu.jsx-777053600 li.jsx-777053600 a.jsx-777053600{color:#333;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-777053600 .inicio.jsx-777053600{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-777053600 .inicio.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .software.jsx-777053600{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-777053600 .software.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .download.jsx-777053600{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-777053600 .download.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .tutorial.jsx-777053600{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-777053600 .tutorial.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .forum.jsx-777053600{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-777053600 .forum.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .creditos.jsx-777053600{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-777053600 .creditos.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .contato.jsx-777053600{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-777053600 .contato.jsx-777053600:hover{background:#FFB151;color:#fff;}.selected.jsx-777053600{background:#FFB151;}.disabled.jsx-777053600{background:#d3d3d3;color:#fff;border-top:3px solid #d3d3d3;}.logo-eja.jsx-777053600{padding:20px;max-width:100%;}button.jsx-777053600,input.jsx-777053600{top:6px;left:7px;}}@media (min-width:320px) and (max-width:1199px){.hamburguer-container.jsx-777053600>input.jsx-777053600{display:none;}.hamburguer-container.jsx-777053600{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.menu-hamburguer.jsx-777053600{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.hamburguer.jsx-777053600{position:absolute;display:block;width:30px;height:2px;top:28px;right:15px;background:#000;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out;}.hamburguer.jsx-777053600:before,.hamburguer.jsx-777053600:after{background:#000;content:'';display:block;width:30px;height:2px;position:absolute;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out;}.hamburguer.jsx-777053600:before{top:-10px;}.hamburguer.jsx-777053600:after{bottom:-10px;}input.jsx-777053600:checked~label.jsx-777053600 .hamburguer.jsx-777053600{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}input.jsx-777053600:checked~label.jsx-777053600 .hamburguer.jsx-777053600:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:0;}input.jsx-777053600:checked~label.jsx-777053600 .hamburguer.jsx-777053600:after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);bottom:0;}input.jsx-777053600:checked~.menu-container.jsx-777053600{-webkit-transform:translateX(300px);-ms-transform:translateX(300px);transform:translateX(300px);}.main-nav.jsx-777053600{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-777053600{visibility:hidden;position:absolute;}.nav-search.jsx-777053600{font-family:'Itim',cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:10;}.search-bar.jsx-777053600{display:none;position:absolute;right:70px;top:50px;}.search-bar-itens.jsx-777053600:first-child{display:none;}.menu-container.jsx-777053600{position:fixed;background:rgb(92,183,204);background:linear-gradient(90deg,rgba(92,183,204,0.9) 49%,rgba(48,142,163,0.9) 100%,rgba(9,9,121,0.9) 100%);top:0;left:-300px;width:300px;height:100%;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;}.menu.jsx-777053600{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu.jsx-777053600 li.jsx-777053600{display:block;padding:10px;width:60%;font-size:1em;text-align:center;margin:15px;color:#fff;font-weight:bold;}.menu.jsx-777053600 li.jsx-777053600:hover{cursor:pointer;}.menu.jsx-777053600 li.jsx-777053600 a.jsx-777053600{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-777053600 .inicio.jsx-777053600{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-777053600 .inicio.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .software.jsx-777053600{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-777053600 .software.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .download.jsx-777053600{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-777053600 .download.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .tutorial.jsx-777053600{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-777053600 .tutorial.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .forum.jsx-777053600{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-777053600 .forum.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .creditos.jsx-777053600{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-777053600 .creditos.jsx-777053600:hover{background:#FFB151;color:#fff;}.menu.jsx-777053600 .contato.jsx-777053600{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-777053600 .contato.jsx-777053600:hover{background:#FFB151;color:#fff;}.selected.jsx-777053600{background:#FFB151;}.logo-eja.jsx-777053600{padding:20px;max-width:100%;}button.jsx-777053600,input.jsx-777053600{top:6px;left:7px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvbmluL0RvY3VtZW50b3MvUHJvamV0b3MvZWphLWx1emRvc2FiZXIvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUY0QixBQUswQyxBQUdnQixBQUlYLEFBSVUsQUFNVixBQU1BLEFBS0csQUFTTSxBQUVULEFBRXNCLEFBQ0osQUFDTSxBQUNKLEFBQ0ksQUFDSixBQUNJLEFBQ0osQUFDQyxBQUNKLEFBQ08sQUFDSixBQUNHLEFBQ0osQUFHbEIsQUFJQSxBQUtOLEFBS0wsQUFZSyxBQUdFLEFBU0EsQUFTRyxBQVlGLEFBVU4sQUFJRyxBQUlXLEFBSUEsQUFLQSxBQUtJLEFBU0MsQUFJWCxBQUlVLEFBT2YsQUFNQSxBQUdFLEFBY0csQUFRSixBQVVhLEFBRVQsQUFFc0IsQUFDSixBQUNNLEFBQ0osQUFDSSxBQUNKLEFBQ0ksQUFDSixBQUNDLEFBQ0osQUFDTyxBQUNKLEFBQ0csQUFDSixBQUdsQixBQUlOLEFBSUwsUUF6S0MsQUEwS0EsRUFuSGIsQ0F4RjJDLEFBZ0xBLEVBdE4zQyxBQW1FbUIsQUFnQm5CLEFBK0NBLEFBMENzQixBQU10QixBQTJEbUIsQ0FsQ0YsQ0F2S2UsQUFrRG5CLEFBU0EsQUFzRmtCLEFBK0JDLENBaEdqQixDQTVDZixBQTBLQSxDQTNPc0IsQUFVUCxBQU1FLEFBaUZDLEFBeURJLEFBa0NMLENBMUptQyxBQUVFLEFBRUEsQUFFQSxBQUVILEFBRUcsQUFFRCxBQUlyRCxBQUdtQyxBQTZKaUIsQUFFRSxBQUVBLEFBRUEsQUFFSCxBQUVHLEFBRUQsQUFJckQsRUE3TWlCLEdBMkRHLEFBU0EsR0FyRkgsQUEwR0MsQUFnREQsQUF1Q0gsQ0F4SWQsQUEwS0EsQ0E1TmEsQUFzQjZFLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELEFBb0tDLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELENBM0x4QyxBQUVFLEFBRUEsQUFFQSxBQUVILEFBRUcsQUFFRCxBQVFyQixBQTRKb0IsQUFFRSxBQUVBLEFBRUEsQUFFSCxBQUVHLEFBRUQsQ0E3TXRELEFBcUplLENBcEVBLEVBNUVDLEVBckJoQixBQTBKQSxDQTJDa0IsQ0ExTGxCLEVBcUVzQixBQVNBLENBcUJQLENBd0RGLEFBUXNHLENBNUVwRyxHQTVFSyxLQWlKcEIsQUErQnNCLENBdkZQLEVBWkYsSUFsQkUsQUFTQSxDQXBDZixFQXhCeUQsQUFnTEEsQ0F2TG5DLENBNkVQLEFBWU8sTUE5Qk4sQUFTQSxBQTRHQSxFQXZLMkUsQUFFRSxBQUVBLEFBRUEsQUFFSCxBQUVHLEFBRUQsRUFvS0MsQUFFRSxBQUVBLEFBRUEsQUFFSCxBQUVHLEFBRUQsQ0F2SDFFLENBdkVzQyxBQWdMQSxLQXRMN0IsQ0EyRGQsQUFTQSxBQXNCZ0IsQUFzRmhCLEdBMUVmLEFBSVUsQUFLRyxNQWhDa0IsQUE0Qi9CLEVBL0NBLEFBU0EsQUErRnVCLEFBYUYsQ0FqRXJCLEdBSUEsS0F4STBCLEFBMEpBLElBcklOLElBaUxwQixZQWhMQSxFQS9CNkIsQUEwSkEsb0JBbEM3QixLQXZIQSxBQTBKQSxFQXlCVSxFQXZFVixJQXdFZ0IsWUFDQSxXQTVLVyxBQTBKQSxDQW1CWCxLQVdXLE9BVEksOERBQy9CLHdCQS9LQSxBQTBKZSxNQThCSSxLQTdCbkIsb0RBOEIwQiw4RUFDMUIiLCJmaWxlIjoiL2hvbWUvcm9uaW4vRG9jdW1lbnRvcy9Qcm9qZXRvcy9lamEtbHV6ZG9zYWJlci9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAnJztcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IGVsZW1lbnRzU2VsZWN0ZWQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50c1NlbGVjdGVkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzU2VsZWN0ZWRbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZC1mbGV4IHJvdyBtYWluLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGlkZGVuLXRpdGxlXCI+TFVaIERPIFNBQkVSIC0gUE9SVEFMPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLWVqYVwiIHNyYz1cInN0YXRpYy9sb2dvX2VqYS5wbmdcIiBhbHQ9XCJMb2dvIFNvbCBMdXogZG8gU2FiZXJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTggbmF2LXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgc2VhcmNoLWlucHV0LWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0IGZvcm0taW5wdXQtZm9udFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIGlkPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJPIFFVRSBWT0PDiiBQUk9DVVJBP1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgYnRuLWNvbnRhaW5lciBzaGFkb3ctc21cIiBhY3Rpb249XCJodHRwczovL2x1ei1kby1zYWJlci1zdGFnaW5nLmhlcm9rdWFwcC5jb20vIy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBzZWFyY2gtaW5wdXQgYnRuLWZvbnQtbGlnaHQgZm9ybS1pbnB1dC1mb250XCI+RWRpdGFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgYnRuLWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBzZWFyY2gtaW5wdXQgYnRuLWZvbnQtZGFyayBmb3JtLWlucHV0LWZvbnRcIj5JbnN0YWxhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJtZW51LWhhbWJ1cmd1ZXJcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lbnUtaGFtYnVyZ3VlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1oYW1idXJndWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWVudS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sLXNtIG1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wiaW5pY2lvIFwiICsgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPT09IFwiaW5pY2lvXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkluw61jaW88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb2Z0d2FyZSBkaXNhYmxlZFwiPnNvZnR3YXJlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkb3dubG9hZCBkaXNhYmxlZFwiPkRvd25sb2FkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0dXRvcmlhbCBkaXNhYmxlZFwiPlR1dG9yaWFsPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb3J1bSBkaXNhYmxlZFwiPkbDs3J1bTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3JlZGl0b3MgZGlzYWJsZWRcIj5DcsOpZGl0b3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJjb250YXRvIFwiICsgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPT09IFwiY29udGFjdFwiID8gXCJzZWxlY3RlZFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0JyBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGF0bzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciA+IGlucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyID4gbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWFpbi1uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZGVuLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdi1zZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMEYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpOmhvdmVyIHsgY3Vyc29yOiBwb2ludGVyOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpIGEgeyBjb2xvcjojMzMzOyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZGlzcGxheTpibG9jazsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuaW5pY2lvIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmluaWNpbzpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuc29mdHdhcmUgeyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuc29mdHdhcmU6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbDpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuZm9ydW0geyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuZm9ydW06aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNvbnRhdG86aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkIxNTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2QzZDNkMzsgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkM2QzZDM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvLWVqYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiwgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICogICBNRU5VIEhBTUJVUkdVRVJcbiAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3Vlci1jb250YWluZXIgPiBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudS1oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3VlcjpiZWZvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3VlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3VlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0xMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmd1ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJndWVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJndWVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICogICBNRU5VIEhBTUJVUkdVRVJcbiAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYWluLW5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRkZW4tdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2LXNlYXJjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VhcmNoLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC1iYXItaXRlbnM6Zmlyc3QtY2hpbGQgeyAvKiBCQVJSQSBERSBQRVNRVUlTQSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoOTIsMTgzLDIwNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDkyLDE4MywyMDQsMC45KSA0OSUsIHJnYmEoNDgsMTQyLDE2MywwLjkpIDEwMCUsIHJnYmEoOSw5LDEyMSwwLjkpIDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAuZXhwYW5kZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpOmhvdmVyIHsgY3Vyc29yOiBwb2ludGVyOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpIGEgeyBjb2xvcjojZmZmOyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZGlzcGxheTpibG9jazsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuaW5pY2lvIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuaW5pY2lvOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5zb2Z0d2FyZSB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5kb3dubG9hZCB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLnR1dG9yaWFsOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5mb3J1bSB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmZvcnVtOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jcmVkaXRvcyB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuY29udGF0bzpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGQjE1MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmxvZ28tZWphIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiwgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApXG4gICAgfVxuICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/ronin/Documentos/Projetos/eja-luzdosaber/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.a2093851253982efa1d3.hot-update.js.map