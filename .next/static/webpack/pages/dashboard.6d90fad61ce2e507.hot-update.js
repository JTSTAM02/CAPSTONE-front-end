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

/***/ "./src/pages/dashboard/index.js":
/*!**************************************!*\
  !*** ./src/pages/dashboard/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navigation */ \"./src/components/Navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [watchList, setWatchList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [movieToAdd, setMovieToAdd] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleAddMovie = ()=>{\n        if (movieToAdd.trim() === \" \") return;\n        if (watchList.some((movie)=>movie.title === movieToAdd)) {\n            alert(\"Movie is already in the watchlist.\");\n            setMovieToAdd(\"\");\n            return;\n        }\n        setWatchList([\n            ...watchList,\n            {\n                title: movieToAdd\n            }\n        ]);\n        setMovieToAdd(\"\");\n    };\n    const handleRemoveMovie = (title)=>{\n        const updatedWatchList = watchList.filter((movie)=>movie.title !== title);\n        setWatchList(updatedWatchList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"flex-start\",\n                    width: \"80%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"watchlist\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-white\",\n                            children: \"My Watchlist\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter movie title\",\n                            value: movieToAdd,\n                            onChange: (e)=>setMovieToAdd(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleAddMovie,\n                            children: \"Add Movie\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: watchList.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        movie.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleRemoveMovie(movie.title),\n                                            children: \"Remove\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, movie.title, true, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 41,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/form\",\n                children: \"Find Your Movie Here:\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 63,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"hDOSB3a+MtON7bs24/CowjbxsGI=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ3FCO0FBQ0w7QUFDUTtBQUdyRCxTQUFTTTs7SUFDTCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVMsaUJBQWlCO1FBQ25CLElBQUdGLFdBQVdHLElBQUksT0FBTyxLQUFLO1FBRTlCLElBQUlMLFVBQVVNLElBQUksQ0FBQ0MsQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxLQUFLTixhQUFhO1lBQ3JETyxNQUFNO1lBQ05OLGNBQWM7WUFDZDtRQUNSO1FBRUFGLGFBQWE7ZUFBSUQ7WUFBVztnQkFBRVEsT0FBT047WUFBVztTQUFFO1FBQ2xEQyxjQUFjO0lBQ2Q7SUFFQSxNQUFNTyxvQkFBb0IsQ0FBQ0Y7UUFDdkIsTUFBTUcsbUJBQW1CWCxVQUFVWSxNQUFNLENBQUNMLENBQUFBLFFBQVNBLE1BQU1DLEtBQUssS0FBS0E7UUFDbkVQLGFBQWFVO0lBQ2Y7SUFHRixxQkFDSSw4REFBQ0U7UUFBSUMsT0FBTztZQUNSQyxpQkFBaUI7WUFDakJDLGdCQUFnQjtZQUNoQkMsb0JBQW9CO1lBQ3BCQyxXQUFXO1lBQ1hDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxnQkFBZ0I7WUFDaEJDLFlBQVk7UUFDZDs7MEJBQ1YsOERBQUNUO2dCQUFJQyxPQUFPO29CQUFFSyxTQUFTO29CQUFRRSxnQkFBZ0I7b0JBQWNDLFlBQVk7b0JBQWNDLE9BQU87Z0JBQU07MEJBQzlGLDRFQUFDVjtvQkFBSVcsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFhOzs7Ozs7c0NBQzNCLDhEQUFDRTs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsT0FBTzNCOzRCQUNQNEIsVUFBVSxDQUFDQyxJQUFNNUIsY0FBYzRCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O3NDQUUvQyw4REFBQ0k7NEJBQU9DLFNBQVM5QjtzQ0FBZ0I7Ozs7OztzQ0FDakMsOERBQUMrQjtzQ0FDRW5DLFVBQVVvQyxHQUFHLENBQUM3QixDQUFBQSxzQkFDYiw4REFBQzhCOzt3Q0FDRTlCLE1BQU1DLEtBQUs7c0RBQ1osOERBQUN5Qjs0Q0FBT0MsU0FBUyxJQUFNeEIsa0JBQWtCSCxNQUFNQyxLQUFLO3NEQUFHOzs7Ozs7O21DQUZoREQsTUFBTUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFwQiw4REFBQ1YsOERBQVVBOzs7OzswQkFDWCw4REFBQ0QsMERBQU1BOzs7OzswQkFDVCw4REFBQ0osa0RBQUlBO2dCQUFDNkMsTUFBSzswQkFBUTs7Ozs7Ozs7Ozs7O0FBSTdCO0dBNURTdkM7S0FBQUE7QUE4RFQsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcz9mZThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcblxuXG5mdW5jdGlvbiBQYWdlKCkge1xuICAgIGNvbnN0IFt3YXRjaExpc3QsIHNldFdhdGNoTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW21vdmllVG9BZGQsIHNldE1vdmllVG9BZGRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBoYW5kbGVBZGRNb3ZpZSA9ICgpID0+IHtcbiAgICAgICAgaWYobW92aWVUb0FkZC50cmltKCkgPT09IFwiIFwiKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHdhdGNoTGlzdC5zb21lKG1vdmllID0+IG1vdmllLnRpdGxlID09PSBtb3ZpZVRvQWRkKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJNb3ZpZSBpcyBhbHJlYWR5IGluIHRoZSB3YXRjaGxpc3QuXCIpO1xuICAgICAgICAgICAgc2V0TW92aWVUb0FkZChcIlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRXYXRjaExpc3QoWy4uLndhdGNoTGlzdCwgeyB0aXRsZTogbW92aWVUb0FkZCB9XSk7XG4gICAgc2V0TW92aWVUb0FkZChcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlTW92aWUgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZFdhdGNoTGlzdCA9IHdhdGNoTGlzdC5maWx0ZXIobW92aWUgPT4gbW92aWUudGl0bGUgIT09IHRpdGxlKTtcbiAgICAgICAgc2V0V2F0Y2hMaXN0KHVwZGF0ZWRXYXRjaExpc3QpO1xuICAgICAgfTtcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzE3NzI3NDcxNy9waG90by9hYnN0cmFjdC1tdWx0aW1lZGlhLWJhY2tncm91bmQtY29tcG9zZWQtb2YtbWFueS1pbWFnZXMtd2l0aC1jb3B5LmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz1WMEc0Wi1nbE5LenVJMVp2UU1PYmkzXzBQdXhVSE9xenVyN2Q1TFhCMjlVPVwiKScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIH19PlxuPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0Jywgd2lkdGg6ICc4MCUnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXRjaGxpc3RcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5NeSBXYXRjaGxpc3Q8L2gyPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtb3ZpZSB0aXRsZVwiXG4gICAgICAgICAgdmFsdWU9e21vdmllVG9BZGR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNb3ZpZVRvQWRkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz4gICAgICAgICAgICAgXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkTW92aWV9PkFkZCBNb3ZpZTwvYnV0dG9uPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3dhdGNoTGlzdC5tYXAobW92aWUgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17bW92aWUudGl0bGV9PlxuICAgICAgICAgICAgICB7bW92aWUudGl0bGV9XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlTW92aWUobW92aWUudGl0bGUpfT5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Zvcm1cIj5GaW5kIFlvdXIgTW92aWUgSGVyZTo8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UiXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJOYXZpZ2F0aW9uIiwiUGFnZSIsIndhdGNoTGlzdCIsInNldFdhdGNoTGlzdCIsIm1vdmllVG9BZGQiLCJzZXRNb3ZpZVRvQWRkIiwiaGFuZGxlQWRkTW92aWUiLCJ0cmltIiwic29tZSIsIm1vdmllIiwidGl0bGUiLCJhbGVydCIsImhhbmRsZVJlbW92ZU1vdmllIiwidXBkYXRlZFdhdGNoTGlzdCIsImZpbHRlciIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIndpZHRoIiwiY2xhc3NOYW1lIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibWFwIiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});