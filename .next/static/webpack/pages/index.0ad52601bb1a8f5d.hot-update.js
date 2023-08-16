"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [randomMovie, setRandomMovie] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const getRandomMovie = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/get_random_movie/\").then((response)=>{\n            setRandomMovie(response.data);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary p-2 mt-5\",\n                onClick: getRandomMovie,\n                children: \"Get Random Movie\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 105\n            }, this),\n            randomMovie && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movie-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Title: \",\n                            randomMovie.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Release Date: \",\n                            randomMovie.release_date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-column justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"img-fluid\",\n                    src: _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"MovieMixer Logo\",\n                    width: 200,\n                    height: 200\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/dashboard\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"btn btn-secondary m-2\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 53,\n                    columnNumber: 48\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/login\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"btn btn-secondary m-2\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 44\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/register\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"btn btn-secondary m-2\",\n                    children: \"Sign Up-It's Free!\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 47\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"BQwLk3Fa2YIpp0/BRIhI7sIlk/8=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDMkI7QUFDWjtBQUNiO0FBQ1A7QUFFWCxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1LLGlCQUFpQjtRQUNyQkosaURBQVMsQ0FBQywrQ0FDUE0sSUFBSSxDQUFDQyxDQUFBQTtZQUNKSixlQUFlSSxTQUFTQyxJQUFJO1FBQzlCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtJQUNKO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLE9BQU87WUFDVkMsaUJBQWlCO1lBQ2pCQyxnQkFBZ0I7WUFDaEJDLG9CQUFvQjtZQUNwQkMsV0FBVztZQUNYQyxTQUFTO1lBQ1RDLGVBQWU7WUFDZkMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1FBQ2Q7OzBCQUVJLDhEQUFDQztnQkFBT0MsV0FBVTtnQkFBMkJDLFNBQVVwQjswQkFBZ0I7Ozs7OzswQkFBeUIsOERBQUNxQjs7Ozs7WUFFaEd2Qiw2QkFDQyw4REFBQ1U7Z0JBQUlXLFdBQVU7O2tDQUNiLDhEQUFDRzs7NEJBQUc7NEJBQVF4QixZQUFZeUIsS0FBSzs7Ozs7OztrQ0FDN0IsOERBQUNDOzs0QkFBRTs0QkFBZTFCLFlBQVkyQixZQUFZOzs7Ozs7Ozs7Ozs7OzBCQU85Qyw4REFBQ2pCO2dCQUFJVyxXQUFXOzBCQUNkLDRFQUFDMUIsbURBQUtBO29CQUFDMEIsV0FBVTtvQkFDZk8sS0FBS2hDLGtFQUFjQTtvQkFDbkJpQyxLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFROzs7Ozs7Ozs7OzswQkFHWiw4REFBQ3JDLGtEQUFJQTtnQkFBQ3NDLE1BQUs7Z0JBQWFDLGNBQWM7MEJBQUMsNEVBQUNDO29CQUFFYixXQUFVOzhCQUF3Qjs7Ozs7Ozs7Ozs7MEJBQzVFLDhEQUFDM0Isa0RBQUlBO2dCQUFDc0MsTUFBSztnQkFBU0MsY0FBYzswQkFBQyw0RUFBQ0M7b0JBQUViLFdBQVU7OEJBQXdCOzs7Ozs7Ozs7OzswQkFDeEUsOERBQUMzQixrREFBSUE7Z0JBQUNzQyxNQUFLO2dCQUFZQyxjQUFjOzBCQUFDLDRFQUFDQztvQkFBRWIsV0FBVTs4QkFBd0I7Ozs7Ozs7Ozs7OzBCQUU3RSw4REFBQ2M7Ozs7Ozs7Ozs7O0FBSUw7R0FyRHNCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTW92aWVNaXhlckxvZ28gZnJvbSBcIi4uL2ltYWdlcy9Nb3ZpZU1peGVyTG9nby5wbmdcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtyYW5kb21Nb3ZpZSwgc2V0UmFuZG9tTW92aWVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZ2V0UmFuZG9tTW92aWUgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldF9yYW5kb21fbW92aWUvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2V0UmFuZG9tTW92aWUocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzE3NzI3NDcxNy9waG90by9hYnN0cmFjdC1tdWx0aW1lZGlhLWJhY2tncm91bmQtY29tcG9zZWQtb2YtbWFueS1pbWFnZXMtd2l0aC1jb3B5LmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz1WMEc0Wi1nbE5LenVJMVp2UU1PYmkzXzBQdXhVSE9xenVyN2Q1TFhCMjlVPVwiKScsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH19PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHAtMiBtdC01XCIgb25DbGljaz0ge2dldFJhbmRvbU1vdmllfT5HZXQgUmFuZG9tIE1vdmllPC9idXR0b24+PGhyPjwvaHI+XG4gICAgICAgIFxuICAgICAgICB7cmFuZG9tTW92aWUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW5mb1wiPlxuICAgICAgICAgICAgPGgyPlRpdGxlOiB7cmFuZG9tTW92aWUudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxwPlJlbGVhc2UgRGF0ZToge3JhbmRvbU1vdmllLnJlbGVhc2VfZGF0ZX08L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJ30+XG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICBzcmM9e01vdmllTWl4ZXJMb2dvfVxuICAgICAgICAgICAgYWx0PVwiTW92aWVNaXhlciBMb2dvXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIiBsZWdhY3lCZWhhdmlvcj48YSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBtLTJcIj5EYXNoYm9hcmQ8L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbS0yXCI+TG9naW48L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCIgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbS0yXCI+U2lnbiBVcC1JdCdzIEZyZWUhPC9hPjwvTGluaz5cblxuICAgICAgPGJyPjwvYnI+XG4gICAgICB7LyogPExpbmsgaHJlZj1cIi9hYm91dFwiIGxlZ2FjeUJlaGF2aW9yPjxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPkFib3V0PC9hPjwvTGluaz4gKi99XG4gICAgPC9kaXY+XG4gICk7XG4gIH0iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiTW92aWVNaXhlckxvZ28iLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUGFnZSIsInJhbmRvbU1vdmllIiwic2V0UmFuZG9tTW92aWUiLCJnZXRSYW5kb21Nb3ZpZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJociIsImgyIiwidGl0bGUiLCJwIiwicmVsZWFzZV9kYXRlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});