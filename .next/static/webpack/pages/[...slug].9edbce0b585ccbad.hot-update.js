"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...slug]",{

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/Navbar */ \"./components/navbar/Navbar.js\");\n/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/Footer */ \"./components/footer/Footer.js\");\nvar _this = undefined;\n\n\n\nvar Layout = function(props) {\n    console.log(props.menu);\n    var returnHTML = null;\n    if (props.page.__typename === \"CategoryTree\") {\n        returnHTML = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                props.page.__typename,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: props.page.content_heading\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cooki\\\\Documents\\\\GitHub\\\\BakingSheet\\\\components\\\\layout\\\\Layout.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    dangerouslySetInnerHTML: {\n                        __html: props.page.description\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cooki\\\\Documents\\\\GitHub\\\\BakingSheet\\\\components\\\\layout\\\\Layout.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this),\n                props.children\n            ]\n        }, void 0, true);\n    }\n    if (props.page.__typename === \"CmsPage\") {\n        returnHTML = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                props.page.__typename,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: props.page.content_heading\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cooki\\\\Documents\\\\GitHub\\\\BakingSheet\\\\components\\\\layout\\\\Layout.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    dangerouslySetInnerHTML: {\n                        __html: props.page.content\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cooki\\\\Documents\\\\GitHub\\\\BakingSheet\\\\components\\\\layout\\\\Layout.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                props.children\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cooki\\\\Documents\\\\GitHub\\\\BakingSheet\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: returnHTML\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cooki\\\\Documents\\\\GitHub\\\\BakingSheet\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cooki\\\\Documents\\\\GitHub\\\\BakingSheet\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBc0M7QUFDQTtBQUV0QyxJQUFNRSxNQUFNLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsQ0FBQztJQUN4QixJQUFJQyxVQUFVLEdBQUcsSUFBSTtJQUNyQixJQUFHSixLQUFLLENBQUNLLElBQUksQ0FBQ0MsVUFBVSxLQUFLLGNBQWMsRUFBRTtRQUMzQ0YsVUFBVSxpQkFDUjs7Z0JBQ0dKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxVQUFVOzhCQUN0Qiw4REFBQ0MsSUFBRTs4QkFBRVAsS0FBSyxDQUFDSyxJQUFJLENBQUNHLGVBQWU7Ozs7O3lCQUFNOzhCQUNyQyw4REFBQ0MsS0FBRztvQkFBQ0MsdUJBQXVCLEVBQUU7d0JBQUVDLE1BQU0sRUFBRVgsS0FBSyxDQUFDSyxJQUFJLENBQUNPLFdBQVc7cUJBQUU7Ozs7O3lCQUFRO2dCQUN2RVosS0FBSyxDQUFDYSxRQUFROzt3QkFDZCxDQUNIO0tBQ0g7SUFDRCxJQUFHYixLQUFLLENBQUNLLElBQUksQ0FBQ0MsVUFBVSxLQUFLLFNBQVMsRUFBRTtRQUN0Q0YsVUFBVSxpQkFDUjs7Z0JBQ0dKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxVQUFVOzhCQUN0Qiw4REFBQ0MsSUFBRTs4QkFBRVAsS0FBSyxDQUFDSyxJQUFJLENBQUNHLGVBQWU7Ozs7O3lCQUFNOzhCQUNyQyw4REFBQ0MsS0FBRztvQkFBQ0MsdUJBQXVCLEVBQUU7d0JBQUVDLE1BQU0sRUFBRVgsS0FBSyxDQUFDSyxJQUFJLENBQUNTLE9BQU87cUJBQUU7Ozs7O3lCQUFRO2dCQUNuRWQsS0FBSyxDQUFDYSxRQUFROzt3QkFDZCxDQUNIO0tBQ0g7SUFDRCxxQkFDRTs7MEJBQ0UsOERBQUNoQixzREFBTTs7OztxQkFBRzswQkFDViw4REFBQ2tCLE1BQUk7MEJBQ0ZYLFVBQVU7Ozs7O3FCQUNOOzBCQUNQLDhEQUFDTixzREFBTTs7OztxQkFBRzs7b0JBQ1QsQ0FDSDtDQUNIO0FBaENLQyxLQUFBQSxNQUFNO0FBa0NaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzP2MwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vbmF2YmFyL05hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9mb290ZXIvRm9vdGVyXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5tZW51KTtcclxuICBsZXQgcmV0dXJuSFRNTCA9IG51bGw7XHJcbiAgaWYocHJvcHMucGFnZS5fX3R5cGVuYW1lID09PSBcIkNhdGVnb3J5VHJlZVwiKSB7XHJcbiAgICByZXR1cm5IVE1MID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtwcm9wcy5wYWdlLl9fdHlwZW5hbWV9XHJcbiAgICAgICAgPGgxPntwcm9wcy5wYWdlLmNvbnRlbnRfaGVhZGluZ308L2gxPlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5wYWdlLmRlc2NyaXB0aW9uIH19PjwvZGl2PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZihwcm9wcy5wYWdlLl9fdHlwZW5hbWUgPT09IFwiQ21zUGFnZVwiKSB7XHJcbiAgICByZXR1cm5IVE1MID0gKFxyXG4gICAgICA8PiAgICAgICAgXHJcbiAgICAgICAge3Byb3BzLnBhZ2UuX190eXBlbmFtZX1cclxuICAgICAgICA8aDE+e3Byb3BzLnBhZ2UuY29udGVudF9oZWFkaW5nfTwvaDE+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLnBhZ2UuY29udGVudCB9fT48L2Rpdj5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAge3JldHVybkhUTUx9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuXHJcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJGb290ZXIiLCJMYXlvdXQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtZW51IiwicmV0dXJuSFRNTCIsInBhZ2UiLCJfX3R5cGVuYW1lIiwiaDEiLCJjb250ZW50X2hlYWRpbmciLCJkaXYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwiY2hpbGRyZW4iLCJjb250ZW50IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Layout.js\n"));

/***/ })

});