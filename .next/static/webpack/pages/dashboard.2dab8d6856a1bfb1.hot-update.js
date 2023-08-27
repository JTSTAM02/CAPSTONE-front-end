"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/TopRatedMovies.js":
/*!******************************************!*\
  !*** ./src/components/TopRatedMovies.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TopRatedMovies() {\n    _s();\n    const [topMovies, setTopMovies] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchTopMovies();\n    }, []);\n    function fetchTopMovies() {\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:8000/api/get_top_movies/\").then((response)=>{\n            const results = response.data.results;\n            setTopMovies(results);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-b129f894a9c54ce4\" + \" \" + \"text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"jsx-b129f894a9c54ce4\",\n                children: \"Highest Rated Movies\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"jsx-b129f894a9c54ce4\" + \" \" + \"movie-grid\",\n                children: topMovies.slice(1, 9).map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-b129f894a9c54ce4\" + \" \" + \"movie-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-b129f894a9c54ce4\" + \" \" + \"movie-content text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        style: {\n                                            maxWidth: \"150px\",\n                                            maxHeight: \"200px\"\n                                        },\n                                        src: movie.primaryImage.url,\n                                        alt: movie.titleText.text,\n                                        className: \"jsx-b129f894a9c54ce4\" + \" \" + \"img-fluid\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"jsx-b129f894a9c54ce4\",\n                                        children: movie.titleText.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-b129f894a9c54ce4\" + \" \" + \"movie-hover-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-b129f894a9c54ce4\",\n                                        children: [\n                                            \"Release Year: \",\n                                            movie.releaseYear.year\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-b129f894a9c54ce4\",\n                                        children: [\n                                            \"Current Rating by App Users: \",\n                                            movie.ratingsSummary.aggregateRating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleAddToWatchlist(movie),\n                                        className: \"jsx-b129f894a9c54ce4\" + \" \" + \"btn btn-custom\",\n                                        children: \"Add To Watchlist\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, movie._id, true, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b129f894a9c54ce4\",\n                children: \".btn-custom.jsx-b129f894a9c54ce4{background-color:#1f5d57;color:#cbb26a}.movie-grid.jsx-b129f894a9c54ce4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:10px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:10px}.movie-item.jsx-b129f894a9c54ce4{-webkit-box-flex:0;-webkit-flex:0 1 -webkit-calc(25% - 10px);-moz-box-flex:0;-ms-flex:0 1 calc(25% - 10px);flex:0 1 -webkit-calc(25% - 10px);flex:0 1 -moz-calc(25% - 10px);flex:0 1 calc(25% - 10px);background-color:black;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;text-align:center;-webkit-box-shadow:0px 0px 5px rgba(0,0,0,.2);-moz-box-shadow:0px 0px 5px rgba(0,0,0,.2);box-shadow:0px 0px 5px rgba(0,0,0,.2);overflow:hidden;-webkit-transition:overflow.3s;-moz-transition:overflow.3s;-o-transition:overflow.3s;transition:overflow.3s}.movie-content.jsx-b129f894a9c54ce4{position:relative}.movie-hover-content.jsx-b129f894a9c54ce4{display:none;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.8);color:white;padding:10px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:opacity.3s;-moz-transition:opacity.3s;-o-transition:opacity.3s;transition:opacity.3s}.movie-item.jsx-b129f894a9c54ce4:hover .movie-hover-content.jsx-b129f894a9c54ce4{display:block}.movie-item.jsx-b129f894a9c54ce4 img.jsx-b129f894a9c54ce4{margin-bottom:10px;width:100%;height:auto;max-height:200px}@media(max-width:768px){.movie-item.jsx-b129f894a9c54ce4{overflow:visible}}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(TopRatedMovies, \"WpDBzS7P5QqxzNX1jwSnsZCZZ+s=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useGlobalState\n    ];\n});\n_c = TopRatedMovies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopRatedMovies);\nvar _c;\n$RefreshReg$(_c, \"TopRatedMovies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub3BSYXRlZE1vdmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ3dCO0FBQ007QUFHeEQsU0FBU007O0lBQ1AsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxFQUFFUSxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHTCxvRUFBY0E7SUFHMUNILGdEQUFTQSxDQUFDO1FBQ1JTO0lBQ0YsR0FBRyxFQUFFO0lBR0wsU0FBU0E7UUFDUFIsaURBQ00sQ0FBQyw2Q0FDSlUsSUFBSSxDQUFDQyxDQUFBQTtZQUNKLE1BQU1DLFVBQVVELFNBQVNFLElBQUksQ0FBQ0QsT0FBTztZQUNyQ1AsYUFBYU87UUFDZixHQUNDRSxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQ0E7UUFDaEI7SUFDSjtJQUVBLHFCQUNFLDhEQUFDRTtrREFBYzs7MEJBQ2IsOERBQUNDOzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswREFBYTswQkFDWGYsVUFBVWdCLEtBQUssQ0FBQyxHQUFHLEdBQUdDLEdBQUcsQ0FBQ0MsQ0FBQUEsc0JBQ3pCLDhEQUFDQztrRUFBYTs7MENBQ1osOERBQUNOOzBFQUFjOztrREFDYiw4REFBQ087d0NBRUNDLE9BQU87NENBQUVDLFVBQVU7NENBQVNDLFdBQVc7d0NBQVE7d0NBQy9DQyxLQUFLTixNQUFNTyxZQUFZLENBQUNDLEdBQUc7d0NBQzNCQyxLQUFLVCxNQUFNVSxTQUFTLENBQUNDLElBQUk7a0ZBSGY7Ozs7OztrREFLWiw4REFBQ0M7O2tEQUFJWixNQUFNVSxTQUFTLENBQUNDLElBQUk7Ozs7Ozs7Ozs7OzswQ0FFM0IsOERBQUNoQjswRUFBYzs7a0RBQ2IsOERBQUNrQjs7OzRDQUFFOzRDQUFlYixNQUFNYyxXQUFXLENBQUNDLElBQUk7Ozs7Ozs7a0RBQ3hDLDhEQUFDRjs7OzRDQUFFOzRDQUE4QmIsTUFBTWdCLGNBQWMsQ0FBQ0MsZUFBZTs7Ozs7OztrREFDckUsOERBQUNDO3dDQUFrQ0MsU0FBUyxJQUFNQyxxQkFBcUJwQjtrRkFBckQ7a0RBQTZEOzs7Ozs7Ozs7Ozs7O3VCQWJuREEsTUFBTXFCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZuRDtHQTdHU3hDOztRQUVxQkQsZ0VBQWNBOzs7S0FGbkNDO0FBK0dULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RvcFJhdGVkTW92aWVzLmpzPzQ0NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSAnLi4vc2VydmljZXMvYXV0aC5oZWFkZXJzJztcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5cblxuZnVuY3Rpb24gVG9wUmF0ZWRNb3ZpZXMoKSB7XG4gIGNvbnN0IFt0b3BNb3ZpZXMsIHNldFRvcE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFRvcE1vdmllcygpO1xuICB9LCBbXSk7XG5cblxuICBmdW5jdGlvbiBmZXRjaFRvcE1vdmllcygpIHtcbiAgICBheGlvc1xuICAgICAgLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXRfdG9wX21vdmllcy8nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gcmVzcG9uc2UuZGF0YS5yZXN1bHRzO1xuICAgICAgICBzZXRUb3BNb3ZpZXMocmVzdWx0cyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgIDxoMj5IaWdoZXN0IFJhdGVkIE1vdmllczwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPSdtb3ZpZS1ncmlkJz5cbiAgICAgICAge3RvcE1vdmllcy5zbGljZSgxLCA5KS5tYXAobW92aWUgPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21vdmllLWl0ZW0nIGtleT17bW92aWUuX2lkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZS1jb250ZW50IHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTUwcHgnLCBtYXhIZWlnaHQ6ICcyMDBweCcgfX1cbiAgICAgICAgICAgICAgICBzcmM9e21vdmllLnByaW1hcnlJbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgYWx0PXttb3ZpZS50aXRsZVRleHQudGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGg1Pnttb3ZpZS50aXRsZVRleHQudGV4dH08L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWUtaG92ZXItY29udGVudCc+XG4gICAgICAgICAgICAgIDxwPlJlbGVhc2UgWWVhcjoge21vdmllLnJlbGVhc2VZZWFyLnllYXJ9PC9wPlxuICAgICAgICAgICAgICA8cD5DdXJyZW50IFJhdGluZyBieSBBcHAgVXNlcnM6IHttb3ZpZS5yYXRpbmdzU3VtbWFyeS5hZ2dyZWdhdGVSYXRpbmd9PC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tY3VzdG9tXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9XYXRjaGxpc3QobW92aWUpfT5BZGQgVG8gV2F0Y2hsaXN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG5cbi5idG4tY3VzdG9te1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUY1RDU3O1xuICBjb2xvcjogI0NCQjI2QTtcbn1cbiAgICAgICAgLm1vdmllLWdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vdmllLWl0ZW0ge1xuICAgICAgICAgIGZsZXg6IDAgMSBjYWxjKDI1JSAtIDEwcHgpOyAvKiBGb3VyIGl0ZW1zIGluIGEgcm93LCBzdWJ0cmFjdGluZyBnYXAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG92ZXJmbG93IDAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICAubW92aWUtY29udGVudCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vdmllLWhvdmVyLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vdmllLWl0ZW06aG92ZXIgLm1vdmllLWhvdmVyLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vdmllLWl0ZW0gaW1nIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5tb3ZpZS1pdGVtIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiBTaG93IG92ZXJmbG93IGNvbnRlbnQgKi9cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFJhdGVkTW92aWVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImF1dGhIZWFkZXIiLCJ1c2VHbG9iYWxTdGF0ZSIsIlRvcFJhdGVkTW92aWVzIiwidG9wTW92aWVzIiwic2V0VG9wTW92aWVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImZldGNoVG9wTW92aWVzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicmVzdWx0cyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgyIiwidWwiLCJzbGljZSIsIm1hcCIsIm1vdmllIiwibGkiLCJpbWciLCJzdHlsZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwic3JjIiwicHJpbWFyeUltYWdlIiwidXJsIiwiYWx0IiwidGl0bGVUZXh0IiwidGV4dCIsImg1IiwicCIsInJlbGVhc2VZZWFyIiwieWVhciIsInJhdGluZ3NTdW1tYXJ5IiwiYWdncmVnYXRlUmF0aW5nIiwiYnV0dG9uIiwib25DbGljayIsImhhbmRsZUFkZFRvV2F0Y2hsaXN0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TopRatedMovies.js\n"));

/***/ })

});