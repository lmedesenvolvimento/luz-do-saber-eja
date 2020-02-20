webpackHotUpdate("static/development/pages/contact.js",{

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
    } // menuExpander() {
    //     let menu = ReactDOM.findDOMNode(this).getElementsByClassName('menu-container');
    //     if (menu[0].classList.contains('expanded')) {
    //         menu[0].classList.remove('expanded');
    //     } else {
    //         menu[0].classList.add('expanded');
    //     }
    // }

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-3810325829" + " " + "d-flex row main-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3810325829" + " " + "col-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3810325829" + " " + "row logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-3810325829" + " " + "hidden-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "LUZ DO SABER - PORTAL"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/logo_eja.png",
        alt: "Logo Sol Luz do Saber",
        className: "jsx-3810325829" + " " + "logo-eja",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3810325829" + " " + "col-sm-8 nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3810325829" + " " + "row search-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3810325829" + " " + "search-bar-itens search-input-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "search",
        id: "search",
        placeholder: "O QUE VOC\xCA PROCURA?",
        className: "jsx-3810325829" + " " + "search-input form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: "https://luz-do-saber-staging.herokuapp.com/#/",
        target: "_blank",
        className: "jsx-3810325829" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-3810325829" + " " + "btn search-input btn-font-light form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Editar")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3810325829" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-3810325829" + " " + "btn search-input btn-font-dark form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Instalar"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3810325829" + " " + "hamburguer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "menu-hamburguer",
        type: "checkbox",
        className: "jsx-3810325829",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "menu-hamburguer",
        className: "jsx-3810325829",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.menuExpander();
        },
        className: "jsx-3810325829" + " " + "menu-hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3810325829" + " " + "hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3810325829" + " " + "row menu-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3810325829" + " " + "col-sm menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3810325829" + " " + ("inicio " + (this.props.selected === "inicio" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3810325829",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "In\xEDcio"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3810325829" + " " + "software disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "software")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3810325829" + " " + "download disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3810325829" + " " + "tutorial disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Tutorial")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3810325829" + " " + "forum disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "F\xF3rum")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3810325829" + " " + "creditos disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Cr\xE9ditos")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-3810325829" + " " + ("contato " + (this.props.selected === "contact" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3810325829",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Contato"))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3810325829",
        __self: this
      }, "@media (min-width:1200px){.hamburguer-container.jsx-3810325829>input.jsx-3810325829,.hamburguer-container.jsx-3810325829>label.jsx-3810325829{display:none;}.main-nav.jsx-3810325829{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-3810325829{visibility:hidden;position:absolute;}.nav-search.jsx-3810325829{font-family:'Itim',cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.search-bar.jsx-3810325829{position:absolute;right:70px;top:50px;}.menu.jsx-3810325829{position:absolute;bottom:-17px;}.menu.jsx-3810325829 li.jsx-3810325829{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;border:1px solid #F0F0F0;margin-left:1px;}.menu.jsx-3810325829 li.jsx-3810325829:hover{cursor:pointer;}.menu.jsx-3810325829 li.jsx-3810325829 a.jsx-3810325829{color:#333;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-3810325829 .inicio.jsx-3810325829{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-3810325829 .inicio.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .software.jsx-3810325829{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-3810325829 .software.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .download.jsx-3810325829{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-3810325829 .download.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .tutorial.jsx-3810325829{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-3810325829 .tutorial.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .forum.jsx-3810325829{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-3810325829 .forum.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .creditos.jsx-3810325829{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-3810325829 .creditos.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .contato.jsx-3810325829{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-3810325829 .contato.jsx-3810325829:hover{background:#FFB151;color:#fff;}.selected.jsx-3810325829{background:#FFB151;}.disabled.jsx-3810325829{background:#d3d3d3;color:#fff;border-top:3px solid #d3d3d3;}.logo-eja.jsx-3810325829{padding:20px;max-width:100%;}button.jsx-3810325829,input.jsx-3810325829{top:6px;left:7px;}}@media (min-width:320px) and (max-width:1199px){.hamburguer-container.jsx-3810325829>input.jsx-3810325829{display:none;}.hamburguer-container.jsx-3810325829{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.menu-hamburguer.jsx-3810325829{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.hamburguer.jsx-3810325829{position:absolute;display:block;width:30px;height:2px;top:28px;right:15px;background:#000;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out;}.hamburguer.jsx-3810325829:before,.hamburguer.jsx-3810325829:after{background:#000;content:'';display:block;width:30px;height:2px;position:absolute;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out;}.hamburguer.jsx-3810325829:before{top:-10px;}.hamburguer.jsx-3810325829:after{bottom:-10px;}input.jsx-3810325829:checked~label.jsx-3810325829 .hamburguer.jsx-3810325829{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}input.jsx-3810325829:checked~label.jsx-3810325829 .hamburguer.jsx-3810325829:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:0;}input.jsx-3810325829:checked~label.jsx-3810325829 .hamburguer.jsx-3810325829:after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);bottom:0;}.main-nav.jsx-3810325829{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-3810325829{visibility:hidden;position:absolute;}.nav-search.jsx-3810325829{font-family:'Itim',cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:10;}.search-bar.jsx-3810325829{display:none;position:absolute;right:70px;top:50px;}.search-bar-itens.jsx-3810325829:first-child{display:none;}.menu-container.jsx-3810325829{position:fixed;background:rgb(92,183,204);background:linear-gradient(90deg,rgba(92,183,204,0.9) 49%,rgba(48,142,163,0.9) 100%,rgba(9,9,121,0.9) 100%);top:0;left:-300px;width:300px;height:100%;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;}.menu.jsx-3810325829{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu.jsx-3810325829 li.jsx-3810325829{display:block;padding:10px;width:60%;font-size:1em;text-align:center;margin:15px;color:#fff;font-weight:bold;}.menu.jsx-3810325829 li.jsx-3810325829:hover{cursor:pointer;}.menu.jsx-3810325829 li.jsx-3810325829 a.jsx-3810325829{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-3810325829 .inicio.jsx-3810325829{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-3810325829 .inicio.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .software.jsx-3810325829{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-3810325829 .software.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .download.jsx-3810325829{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-3810325829 .download.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .tutorial.jsx-3810325829{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-3810325829 .tutorial.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .forum.jsx-3810325829{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-3810325829 .forum.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .creditos.jsx-3810325829{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-3810325829 .creditos.jsx-3810325829:hover{background:#FFB151;color:#fff;}.menu.jsx-3810325829 .contato.jsx-3810325829{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-3810325829 .contato.jsx-3810325829:hover{background:#FFB151;color:#fff;}.selected.jsx-3810325829{background:#FFB151;}.logo-eja.jsx-3810325829{padding:20px;max-width:100%;}button.jsx-3810325829,input.jsx-3810325829{top:6px;left:7px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvbmluL0RvY3VtZW50b3MvUHJvamV0b3MvZWphLWx1emRvc2FiZXIvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkY0QixBQUswQyxBQUdnQixBQUlYLEFBSVUsQUFNVixBQU1BLEFBS0csQUFTTSxBQUVULEFBRXNCLEFBQ0osQUFDTSxBQUNKLEFBQ0ksQUFDSixBQUNJLEFBQ0osQUFDQyxBQUNKLEFBQ08sQUFDSixBQUNHLEFBQ0osQUFHbEIsQUFJQSxBQUtOLEFBS0wsQUFtQkssQUFHRSxBQVNBLEFBU0csQUFZRixBQVVOLEFBSUcsQUFJVyxBQUlBLEFBS0EsQUFjSyxBQUlYLEFBSVUsQUFPZixBQU1BLEFBR0UsQUFjRyxBQVFKLEFBVWEsQUFFVCxBQUVzQixBQUNKLEFBQ00sQUFDSixBQUNJLEFBQ0osQUFDSSxBQUNKLEFBQ0MsQUFDSixBQUNPLEFBQ0osQUFDRyxBQUNKLEFBR2xCLEFBSU4sQUFJTCxRQWhMQyxBQWlMQSxFQW5IYixDQS9GMkMsQUF1TEEsRUE3TjNDLEFBbUVtQixBQXVCbkIsQUErQ0EsQUEwQ3NCLEFBTXRCLEFBMkRtQixDQWxDRixDQTlLZSxBQXlEbkIsQUFTQSxBQXNGa0IsQUErQkMsQ0FoR2pCLENBbkRmLEFBaUxBLENBbFBzQixBQVVQLEFBTUUsQUF3RkMsQUF5REksQUFrQ0wsQ0FqS21DLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELEFBSXJELEFBR21DLEFBb0tpQixBQUVFLEFBRUEsQUFFQSxBQUVILEFBRUcsQUFFRCxBQUlyRCxFQXBOaUIsR0FrRUcsQUFTQSxHQTVGSCxBQWlIQyxBQWdERCxBQXVDSCxDQS9JZCxBQWlMQSxDQW5PYSxBQXNCNkUsQUFFRSxBQUVBLEFBRUEsQUFFSCxBQUVHLEFBRUQsQUEyS0MsQUFFRSxBQUVBLEFBRUEsQUFFSCxBQUVHLEFBRUQsQ0FsTXhDLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELEFBUXJCLEFBbUtvQixBQUVFLEFBRUEsQUFFQSxBQUVILEFBRUcsQUFFRCxDQXBOdEQsQUE0SmUsQ0FwRUEsRUFuRkMsRUFyQmhCLEFBaUtBLENBMkNrQixDQWpNbEIsRUE0RXNCLEFBU0EsQ0FxQlAsQ0F3REYsQUFRc0csQ0E1RXBHLEdBbkZLLEtBd0pwQixBQStCc0IsQ0F2RlAsRUFaRixJQWxCRSxBQVNBLENBM0NmLEVBeEJ5RCxBQXVMQSxDQTlMbkMsQ0FvRlAsQUFZTyxNQTlCTixBQVNBLEFBNEdBLEVBOUsyRSxBQUVFLEFBRUEsQUFFQSxBQUVILEFBRUcsQUFFRCxFQTJLQyxBQUVFLEFBRUEsQUFFQSxBQUVILEFBRUcsQUFFRCxDQXZIMUUsQ0E5RXNDLEFBdUxBLEtBN0w3QixDQWtFZCxBQVNBLEFBc0JnQixBQXNGaEIsR0ExRWYsQUFJVSxBQUtHLE1BaENrQixBQTRCL0IsRUEvQ0EsQUFTQSxBQStGdUIsQUFhRixDQWpFckIsUUEzSTBCLEFBaUtBLElBNUlOLElBd0xwQixZQXZMQSxFQS9CNkIsQUFpS0Esb0JBbEM3QixLQTlIQSxBQWlLQSxFQXlCVSxFQXZFVixJQXdFZ0IsWUFDQSxXQW5MVyxBQWlLQSxDQW1CWCxLQVdXLE9BVEksOERBQy9CLHdCQXRMQSxBQWlLZSxNQThCSSxLQTdCbkIsb0RBOEIwQiw4RUFDMUIiLCJmaWxlIjoiL2hvbWUvcm9uaW4vRG9jdW1lbnRvcy9Qcm9qZXRvcy9lamEtbHV6ZG9zYWJlci9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAnJztcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IGVsZW1lbnRzU2VsZWN0ZWQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50c1NlbGVjdGVkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzU2VsZWN0ZWRbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWVudUV4cGFuZGVyKCkge1xuICAgIC8vICAgICBsZXQgbWVudSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgIC8vICAgICBpZiAobWVudVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAvLyAgICAgICAgIG1lbnVbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIG1lbnVbMF0uY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImQtZmxleCByb3cgbWFpbi1uYXZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhpZGRlbi10aXRsZVwiPkxVWiBETyBTQUJFUiAtIFBPUlRBTDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nby1lamFcIiBzcmM9XCJzdGF0aWMvbG9nb19lamEucG5nXCIgYWx0PVwiTG9nbyBTb2wgTHV6IGRvIFNhYmVyXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IG5hdi1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc2VhcmNoLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLWl0ZW5zIHNlYXJjaC1pbnB1dC1jb250YWluZXIgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dCBmb3JtLWlucHV0LWZvbnRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIiBpZD1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiTyBRVUUgVk9Dw4ogUFJPQ1VSQT9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLWl0ZW5zIGJ0bi1jb250YWluZXIgc2hhZG93LXNtXCIgYWN0aW9uPVwiaHR0cHM6Ly9sdXotZG8tc2FiZXItc3RhZ2luZy5oZXJva3VhcHAuY29tLyMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gc2VhcmNoLWlucHV0IGJ0bi1mb250LWxpZ2h0IGZvcm0taW5wdXQtZm9udFwiPkVkaXRhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyLWl0ZW5zIGJ0bi1jb250YWluZXIgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gc2VhcmNoLWlucHV0IGJ0bi1mb250LWRhcmsgZm9ybS1pbnB1dC1mb250XCI+SW5zdGFsYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJndWVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibWVudS1oYW1idXJndWVyXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZW51LWhhbWJ1cmd1ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaGFtYnVyZ3VlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMubWVudUV4cGFuZGVyKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJndWVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbC1zbSBtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcImluaWNpbyBcIiArICh0aGlzLnByb3BzLnNlbGVjdGVkID09PSBcImluaWNpb1wiID8gXCJzZWxlY3RlZFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5JbsOtY2lvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29mdHdhcmUgZGlzYWJsZWRcIj5zb2Z0d2FyZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZG93bmxvYWQgZGlzYWJsZWRcIj5Eb3dubG9hZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHV0b3JpYWwgZGlzYWJsZWRcIj5UdXRvcmlhbDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9ydW0gZGlzYWJsZWRcIj5Gw7NydW08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNyZWRpdG9zIGRpc2FibGVkXCI+Q3LDqWRpdG9zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wiY29udGF0byBcIiArICh0aGlzLnByb3BzLnNlbGVjdGVkID09PSBcImNvbnRhY3RcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCcgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNvbnRhdG88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3Vlci1jb250YWluZXIgPiBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciA+IGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1haW4tbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGRlbi10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXYtc2VhcmNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0l0aW0nLCBjdXJzaXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjBGMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSBsaTpob3ZlciB7IGN1cnNvcjogcG9pbnRlcjsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSBsaSBhIHsgY29sb3I6IzMzMzsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IGRpc3BsYXk6YmxvY2s7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmluaWNpbyB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5pbmljaW86aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5kb3dubG9hZCB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5kb3dubG9hZDpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAudHV0b3JpYWwgeyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAudHV0b3JpYWw6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmZvcnVtIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmZvcnVtOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jcmVkaXRvcyB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jcmVkaXRvczpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuY29udGF0byB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jb250YXRvOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZCMTUxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7IGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZDNkM2QzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubG9nby1lamEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDU1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24sIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgTUVOVSBIQU1CVVJHVUVSXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC5oYW1idXJndWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhbWJ1cmd1ZXItY29udGFpbmVyID4gaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3Vlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUtaGFtYnVyZ3VlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3VlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhbWJ1cmd1ZXI6YmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhbWJ1cmd1ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhbWJ1cmd1ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3VlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiBsYWJlbCAuaGFtYnVyZ3VlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgfiBsYWJlbCAuaGFtYnVyZ3VlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5tZW51LWNvbnRhaW5lciB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqICAgTUVOVSBIQU1CVVJHVUVSXG4gICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFpbi1uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZGVuLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdi1zZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtYmFyLWl0ZW5zOmZpcnN0LWNoaWxkIHsgLyogQkFSUkEgREUgUEVTUVVJU0EgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDkyLDE4MywyMDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg5MiwxODMsMjA0LDAuOSkgNDklLCByZ2JhKDQ4LDE0MiwxNjMsMC45KSAxMDAlLCByZ2JhKDksOSwxMjEsMC45KSAxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSBsaTpob3ZlciB7IGN1cnNvcjogcG9pbnRlcjsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSBsaSBhIHsgY29sb3I6I2ZmZjsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IGRpc3BsYXk6YmxvY2s7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmluaWNpbyB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmluaWNpbzpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuc29mdHdhcmUgeyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5zb2Z0d2FyZTpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuZG93bmxvYWQgeyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5kb3dubG9hZDpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAudHV0b3JpYWwgeyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbDpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuZm9ydW0geyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5mb3J1bTpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuY3JlZGl0b3MgeyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jcmVkaXRvczpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuY29udGF0byB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNvbnRhdG86aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkIxNTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvLWVqYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24sIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/home/ronin/Documentos/Projetos/eja-luzdosaber/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=contact.js.b615acaeb82460d31c26.hot-update.js.map