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
    key: "menuExpander",
    value: function menuExpander() {
      var menu = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(this).getElementsByClassName('menu-container');

      if (menu[0].classList.contains('expanded')) {
        menu[0].classList.remove('expanded');
      } else {
        menu[0].classList.add('expanded');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-1722798735" + " " + "d-flex row main-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1722798735" + " " + "col-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1722798735" + " " + "row logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-1722798735" + " " + "hidden-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "LUZ DO SABER - PORTAL"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/logo_eja.png",
        alt: "Logo Sol Luz do Saber",
        className: "jsx-1722798735" + " " + "logo-eja",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1722798735" + " " + "col-sm-8 nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1722798735" + " " + "row search-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1722798735" + " " + "search-bar-itens search-input-container shadow-sm",
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
        className: "jsx-1722798735" + " " + "search-input form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: "https://luz-do-saber-staging.herokuapp.com/#/",
        target: "_blank",
        className: "jsx-1722798735" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-1722798735" + " " + "btn search-input btn-font-light form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Editar")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1722798735" + " " + "search-bar-itens btn-container shadow-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "jsx-1722798735" + " " + "btn search-input btn-font-dark form-input-font",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Instalar"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1722798735" + " " + "hamburguer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "menu-hamburguer",
        type: "checkbox",
        className: "jsx-1722798735",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "menu-hamburguer",
        className: "jsx-1722798735",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.menuExpander();
        },
        className: "jsx-1722798735" + " " + "menu-hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-1722798735" + " " + "hamburguer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1722798735" + " " + "row menu-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1722798735" + " " + "col-sm menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1722798735" + " " + ("inicio " + (this.props.selected === "inicio" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-1722798735",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "In\xEDcio"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1722798735" + " " + "software disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "software")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1722798735" + " " + "download disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1722798735" + " " + "tutorial disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Tutorial")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1722798735" + " " + "forum disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "F\xF3rum")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1722798735" + " " + "creditos disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Cr\xE9ditos")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-1722798735" + " " + ("contato " + (this.props.selected === "contact" ? "selected" : "") || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-1722798735",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Contato")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1722798735",
        __self: this
      }, "@media (min-width:1200px){.hamburguer-container.jsx-1722798735{display:none;}.main-nav.jsx-1722798735{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-1722798735{visibility:hidden;position:absolute;}.nav-search.jsx-1722798735{font-family:'Itim',cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.search-bar.jsx-1722798735{position:absolute;right:70px;top:50px;}.menu.jsx-1722798735{position:absolute;bottom:-17px;}.menu.jsx-1722798735 li.jsx-1722798735{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;border:1px solid #F0F0F0;margin-left:1px;}.menu.jsx-1722798735 li.jsx-1722798735:hover{cursor:pointer;}.menu.jsx-1722798735 li.jsx-1722798735 a.jsx-1722798735{color:#333;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-1722798735 .inicio.jsx-1722798735{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-1722798735 .inicio.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .software.jsx-1722798735{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-1722798735 .software.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .download.jsx-1722798735{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-1722798735 .download.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .tutorial.jsx-1722798735{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-1722798735 .tutorial.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .forum.jsx-1722798735{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-1722798735 .forum.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .creditos.jsx-1722798735{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-1722798735 .creditos.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .contato.jsx-1722798735{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-1722798735 .contato.jsx-1722798735:hover{background:#FFB151;color:#fff;}.selected.jsx-1722798735{background:#FFB151;}.disabled.jsx-1722798735{background:#d3d3d3;color:#fff;border-top:3px solid #d3d3d3;}.logo-eja.jsx-1722798735{padding:20px;max-width:100%;}button.jsx-1722798735,input.jsx-1722798735{top:6px;left:7px;}}@media (min-width:320px) and (max-width:1199px){.hamburguer-container.jsx-1722798735>input.jsx-1722798735{display:none;}.hamburguer-container.jsx-1722798735{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.menu-hamburguer.jsx-1722798735{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.hamburguer.jsx-1722798735{position:absolute;display:block;width:30px;height:2px;top:28px;right:15px;background:#000;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out;}.hamburguer.jsx-1722798735:before,.hamburguer.jsx-1722798735:after{background:#000;content:'';display:block;width:30px;height:2px;position:absolute;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out;}.hamburguer.jsx-1722798735:before{top:-10px;}.hamburguer.jsx-1722798735:after{bottom:-10px;}input.jsx-1722798735:checked~label.jsx-1722798735 .hamburguer.jsx-1722798735{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}input.jsx-1722798735:checked~label.jsx-1722798735 .hamburguer.jsx-1722798735:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:0;}input.jsx-1722798735:checked~label.jsx-1722798735 .hamburguer.jsx-1722798735:after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);bottom:0;}.main-nav.jsx-1722798735{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-1722798735{visibility:hidden;position:absolute;}.nav-search.jsx-1722798735{font-family:'Itim',cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:10;}.search-bar.jsx-1722798735{display:none;position:absolute;right:70px;top:50px;}.search-bar-itens.jsx-1722798735:first-child{display:none;}.menu-container.jsx-1722798735{position:fixed;background:rgb(92,183,204);background:linear-gradient(90deg,rgba(92,183,204,0.9) 49%,rgba(48,142,163,0.9) 100%,rgba(9,9,121,0.9) 100%);top:0;left:-300px;width:300px;height:100%;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;}.expanded.jsx-1722798735{-webkit-transform:translateX(300px);-ms-transform:translateX(300px);transform:translateX(300px);}.menu.jsx-1722798735{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu.jsx-1722798735 li.jsx-1722798735{display:block;padding:10px;width:60%;font-size:1em;text-align:center;margin:15px;color:#fff;font-weight:bold;}.menu.jsx-1722798735 li.jsx-1722798735:hover{cursor:pointer;}.menu.jsx-1722798735 li.jsx-1722798735 a.jsx-1722798735{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-1722798735 .inicio.jsx-1722798735{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-1722798735 .inicio.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .software.jsx-1722798735{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-1722798735 .software.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .download.jsx-1722798735{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-1722798735 .download.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .tutorial.jsx-1722798735{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-1722798735 .tutorial.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .forum.jsx-1722798735{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-1722798735 .forum.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .creditos.jsx-1722798735{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-1722798735 .creditos.jsx-1722798735:hover{background:#FFB151;color:#fff;}.menu.jsx-1722798735 .contato.jsx-1722798735{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-1722798735 .contato.jsx-1722798735:hover{background:#FFB151;color:#fff;}.selected.jsx-1722798735{background:#FFB151;}.logo-eja.jsx-1722798735{padding:20px;max-width:100%;}button.jsx-1722798735,input.jsx-1722798735{top:6px;left:7px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvbmluL0RvY3VtZW50b3MvUHJvamV0b3MvZWphLWx1emRvc2FiZXIvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkY0QixBQUkwQyxBQUdnQixBQUlYLEFBSVUsQUFNVixBQU1BLEFBS0csQUFTTSxBQUVULEFBRXNCLEFBQ0osQUFDTSxBQUNKLEFBQ0ksQUFDSixBQUNJLEFBQ0osQUFDQyxBQUNKLEFBQ08sQUFDSixBQUNHLEFBQ0osQUFHbEIsQUFJQSxBQUtOLEFBS0wsQUFtQkssQUFHRSxBQVNBLEFBU0csQUFZRixBQVVOLEFBSUcsQUFJVyxBQUlBLEFBS0EsQUFVSyxBQUlYLEFBSVUsQUFPZixBQU1BLEFBSUUsQUFXYSxBQUdWLEFBUUosQUFVYSxBQUVULEFBRXNCLEFBQ0osQUFDTSxBQUNKLEFBQ0ksQUFDSixBQUNJLEFBQ0osQUFDQyxBQUNKLEFBQ08sQUFDSixBQUNHLEFBQ0osQUFHbEIsQUFJTixBQUlMLFFBN0tDLEFBOEtBLEVBaEhiLENBL0YyQyxBQW9MQSxFQTFOM0MsQUFtRW1CLEFBdUJuQixBQStDQSxBQXNDc0IsQUFNdEIsQUE0RG1CLENBbENGLENBM0tlLEFBeURuQixBQVNBLEFBbUZrQixBQStCQyxDQTdGakIsQ0FuRGYsQUE4S0EsQ0EvT3NCLEFBVVAsQUFNRSxBQXdGQyxBQXFESSxBQW1DTCxDQTlKbUMsQUFFRSxBQUVBLEFBRUEsQUFFSCxBQUVHLEFBRUQsQUFJckQsQUFHbUMsQUFpS2lCLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELEFBSXJELEVBak5pQixHQWtFRyxBQVNBLEdBNUZILEFBaUhDLEFBNENELEFBd0NILENBNUlkLEFBOEtBLENBaE9hLEFBc0I2RSxBQUVFLEFBRUEsQUFFQSxBQUVILEFBRUcsQUFFRCxBQXdLQyxBQUVFLEFBRUEsQUFFQSxBQUVILEFBRUcsQUFFRCxDQS9MeEMsQUFFRSxBQUVBLEFBRUEsQUFFSCxBQUVHLEFBRUQsQUFRckIsQUFnS29CLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELENBak50RCxBQXdKZSxDQWhFQSxFQW5GQyxFQXJCaEIsQUE2SkEsQ0E0Q2tCLENBOUxsQixFQTRFc0IsQUFTQSxDQXFCUCxDQW9ERixBQVNzRyxDQXpFcEcsR0FuRkssS0FvSnBCLEFBZ0NzQixDQXBGUCxFQVpGLElBbEJFLEFBU0EsQ0EzQ2YsRUF4QnlELEFBb0xBLENBM0xuQyxDQW9GUCxBQVlPLE1BOUJOLEFBU0EsQUF5R0EsRUEzSzJFLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELEVBd0tDLEFBRUUsQUFFQSxBQUVBLEFBRUgsQUFFRyxBQUVELENBcEgxRSxDQTlFc0MsQUFvTEEsS0ExTDdCLENBa0VkLEFBU0EsQUFzQmdCLEFBbUZoQixHQXZFZixBQUlVLEFBS0csTUFoQ2tCLEFBNEIvQixFQS9DQSxBQVNBLEFBNEZ1QixBQWFGLENBOURyQixHQTZDQSxLQXhMMEIsQUE2SkEsSUF4SU4sSUFxTHBCLFlBcExBLEVBL0I2QixBQTZKQSxvQkE5QjdCLEtBOUhBLEFBNkpBLEVBMEJVLEVBcEVWLElBcUVnQixZQUNBLFdBaExXLEFBNkpBLENBb0JYLEtBV1csT0FUSSw4REFDL0Isd0JBbkxBLEFBNkplLE1BK0JJLEtBOUJuQixvREErQjBCLDhFQUMxQiIsImZpbGUiOiIvaG9tZS9yb25pbi9Eb2N1bWVudG9zL1Byb2pldG9zL2VqYS1sdXpkb3NhYmVyL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICcnO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgZWxlbWVudHNTZWxlY3RlZCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzU2VsZWN0ZWQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNTZWxlY3RlZFtpbmRleF07XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmNsYXNzTGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZW51RXhwYW5kZXIoKSB7XG4gICAgICAgIGxldCBtZW51ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudS1jb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChtZW51WzBdLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgbWVudVswXS5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudVswXS5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZC1mbGV4IHJvdyBtYWluLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGlkZGVuLXRpdGxlXCI+TFVaIERPIFNBQkVSIC0gUE9SVEFMPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLWVqYVwiIHNyYz1cInN0YXRpYy9sb2dvX2VqYS5wbmdcIiBhbHQ9XCJMb2dvIFNvbCBMdXogZG8gU2FiZXJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTggbmF2LXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgc2VhcmNoLWlucHV0LWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0IGZvcm0taW5wdXQtZm9udFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIGlkPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJPIFFVRSBWT0PDiiBQUk9DVVJBP1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgYnRuLWNvbnRhaW5lciBzaGFkb3ctc21cIiBhY3Rpb249XCJodHRwczovL2x1ei1kby1zYWJlci1zdGFnaW5nLmhlcm9rdWFwcC5jb20vIy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBzZWFyY2gtaW5wdXQgYnRuLWZvbnQtbGlnaHQgZm9ybS1pbnB1dC1mb250XCI+RWRpdGFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXItaXRlbnMgYnRuLWNvbnRhaW5lciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBzZWFyY2gtaW5wdXQgYnRuLWZvbnQtZGFyayBmb3JtLWlucHV0LWZvbnRcIj5JbnN0YWxhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJtZW51LWhhbWJ1cmd1ZXJcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lbnUtaGFtYnVyZ3VlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1oYW1idXJndWVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5tZW51RXhwYW5kZXIoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmd1ZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWVudS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wtc20gbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcImluaWNpbyBcIiArICh0aGlzLnByb3BzLnNlbGVjdGVkID09PSBcImluaWNpb1wiID8gXCJzZWxlY3RlZFwiIDogXCJcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SW7DrWNpbzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29mdHdhcmUgZGlzYWJsZWRcIj5zb2Z0d2FyZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZG93bmxvYWQgZGlzYWJsZWRcIj5Eb3dubG9hZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidHV0b3JpYWwgZGlzYWJsZWRcIj5UdXRvcmlhbDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZm9ydW0gZGlzYWJsZWRcIj5Gw7NydW08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNyZWRpdG9zIGRpc2FibGVkXCI+Q3LDqWRpdG9zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcImNvbnRhdG8gXCIgKyAodGhpcy5wcm9wcy5zZWxlY3RlZCA9PT0gXCJjb250YWN0XCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCcgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGF0bzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3Vlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWFpbi1uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZGVuLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdi1zZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSXRpbScsIGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMEYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpOmhvdmVyIHsgY3Vyc29yOiBwb2ludGVyOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpIGEgeyBjb2xvcjojMzMzOyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZGlzcGxheTpibG9jazsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuaW5pY2lvIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmluaWNpbzpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuc29mdHdhcmUgeyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuc29mdHdhcmU6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgyNCwgNjUsIDEwOSwgMC4xNSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbDpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuZm9ydW0geyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoMjQsIDY1LCAxMDksIDAuMTUpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuZm9ydW06aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI0LCA2NSwgMTA5LCAwLjE1KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNvbnRhdG86aG92ZXIgeyBiYWNrZ3JvdW5kOiAjRkZCMTUxOyBjb2xvcjogI2ZmZjsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkIxNTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2QzZDNkMzsgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkM2QzZDM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvLWVqYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiwgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICogICBNRU5VIEhBTUJVUkdVRVJcbiAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLmhhbWJ1cmd1ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3Vlci1jb250YWluZXIgPiBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudS1oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3VlcjpiZWZvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3VlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFtYnVyZ3VlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oYW1idXJndWVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0xMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLmhhbWJ1cmd1ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJndWVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5oYW1idXJndWVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICogICBNRU5VIEhBTUJVUkdVRVJcbiAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYWluLW5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRkZW4tdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2LXNlYXJjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VhcmNoLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC1iYXItaXRlbnM6Zmlyc3QtY2hpbGQgeyAvKiBCQVJSQSBERSBQRVNRVUlTQSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig5MiwxODMsMjA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoOTIsMTgzLDIwNCwwLjkpIDQ5JSwgcmdiYSg0OCwxNDIsMTYzLDAuOSkgMTAwJSwgcmdiYSg5LDksMTIxLDAuOSkgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0zMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpOmhvdmVyIHsgY3Vyc29yOiBwb2ludGVyOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IGxpIGEgeyBjb2xvcjojZmZmOyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZGlzcGxheTpibG9jazsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuaW5pY2lvIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuaW5pY2lvOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5zb2Z0d2FyZSB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLnNvZnR3YXJlOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5kb3dubG9hZCB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmRvd25sb2FkOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC50dXRvcmlhbCB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLnR1dG9yaWFsOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5mb3J1bSB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmZvcnVtOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jcmVkaXRvcyB7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1lbnUgLmNyZWRpdG9zOmhvdmVyIHsgYmFja2dyb3VuZDogI0ZGQjE1MTsgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZW51IC5jb250YXRvIHsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubWVudSAuY29udGF0bzpob3ZlciB7IGJhY2tncm91bmQ6ICNGRkIxNTE7IGNvbG9yOiAjZmZmOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGQjE1MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmxvZ28tZWphIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiwgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApXG4gICAgfVxuICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/ronin/Documentos/Projetos/eja-luzdosaber/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.7ca7a52ab7ab07ebb7cf.hot-update.js.map