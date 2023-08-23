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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navigation */ \"./src/components/Navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [watchList, setWatchList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [movieToAdd, setMovieToAdd] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const savedWatchList = localStorage.getItem(\"watchList\");\n        if (savedWatchList) {\n            setWatchList(JSON.parse(savedWatchList));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        localStorage.setItem(\"watchList\", JSON.stringify(watchList));\n    }, [\n        watchList\n    ]);\n    const handleAddMovie = ()=>{\n        if (movieToAdd.trim() === \" \") return;\n        if (watchList.some((movie)=>movie.title === movieToAdd)) {\n            alert(\"Movie is already in the watchlist.\");\n            setMovieToAdd(\"\");\n            return;\n        }\n        setWatchList([\n            ...watchList,\n            {\n                title: movieToAdd\n            }\n        ]);\n        setMovieToAdd(\"\");\n    };\n    const handleRemoveMovie = (title)=>{\n        const updatedWatchList = watchList.filter((movie)=>movie.title !== title);\n        setWatchList(updatedWatchList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                justifyContent: \"flex-start\",\n                alignItems: \"center\",\n                width: \"80%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"watchlist-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"watchlist-heading\",\n                        children: \"My Watchlist\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"watchlist-grid\",\n                        children: watchList.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"watchlist-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"movie-title\",\n                                        children: movie.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleRemoveMovie(movie.title),\n                                        children: \"Remove\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, movie.title, true, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/form\",\n                        children: \"Find Your Movie Here:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"ZVBV+70GtReG1QrqXHTar2AybN8=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ3FCO0FBQ0w7QUFDUTtBQUdyRCxTQUFTTTs7SUFDTCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFHN0NDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVEsaUJBQWlCQyxhQUFhQyxPQUFPLENBQUM7UUFDNUMsSUFBSUYsZ0JBQWdCO1lBQ2xCSCxhQUFhTSxLQUFLQyxLQUFLLENBQUNKO1FBQzFCO0lBQ0YsR0FBRyxFQUFFO0lBRUxSLGdEQUFTQSxDQUFDO1FBQ1JTLGFBQWFJLE9BQU8sQ0FBQyxhQUFhRixLQUFLRyxTQUFTLENBQUNWO0lBQ25ELEdBQUc7UUFBQ0E7S0FBVTtJQUVoQixNQUFNVyxpQkFBaUI7UUFDbkIsSUFBR1QsV0FBV1UsSUFBSSxPQUFPLEtBQUs7UUFFOUIsSUFBSVosVUFBVWEsSUFBSSxDQUFDQyxDQUFBQSxRQUFTQSxNQUFNQyxLQUFLLEtBQUtiLGFBQWE7WUFDckRjLE1BQU07WUFDTmIsY0FBYztZQUNkO1FBQ1I7UUFFQUYsYUFBYTtlQUFJRDtZQUFXO2dCQUFFZSxPQUFPYjtZQUFXO1NBQUU7UUFDbERDLGNBQWM7SUFDZDtJQUVBLE1BQU1jLG9CQUFvQixDQUFDRjtRQUN2QixNQUFNRyxtQkFBbUJsQixVQUFVbUIsTUFBTSxDQUFDTCxDQUFBQSxRQUFTQSxNQUFNQyxLQUFLLEtBQUtBO1FBQ25FZCxhQUFhaUI7SUFDZjtJQUdGLHFCQUNJLDhEQUFDRTtRQUFJQyxPQUFPO1lBQ1JDLGlCQUFpQjtZQUNqQkMsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJDLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGdCQUFnQjtZQUNoQkMsWUFBWTtRQUNkO2tCQUNGLDRFQUFDVDtZQUFJQyxPQUFPO2dCQUFFSyxTQUFTO2dCQUFRRSxnQkFBZ0I7Z0JBQWNDLFlBQVk7Z0JBQVVDLE9BQU87WUFBTTtzQkFDaEcsNEVBQUNWO2dCQUFJVyxXQUFVOztrQ0FDakIsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFvQjs7Ozs7O2tDQUNsQyw4REFBQ1g7d0JBQUlXLFdBQVU7a0NBQ1ovQixVQUFVaUMsR0FBRyxDQUFDLENBQUNuQixzQkFDZCw4REFBQ007Z0NBQXNCVyxXQUFVOztrREFDL0IsOERBQUNYO3dDQUFJVyxXQUFVO2tEQUFlakIsTUFBTUMsS0FBSzs7Ozs7O2tEQUN6Qyw4REFBQ21CO3dDQUFPQyxTQUFTLElBQU1sQixrQkFBa0JILE1BQU1DLEtBQUs7a0RBQUc7Ozs7Ozs7K0JBRi9DRCxNQUFNQyxLQUFLOzs7Ozs7Ozs7O2tDQStCbkIsOERBQUNqQiw4REFBVUE7Ozs7O2tDQUNYLDhEQUFDRCwwREFBTUE7Ozs7O2tDQUNULDhEQUFDSixrREFBSUE7d0JBQUMyQyxNQUFLO2tDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0dBekZTckM7S0FBQUE7QUEyRlQsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcz9mZThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcblxuXG5mdW5jdGlvbiBQYWdlKCkge1xuICAgIGNvbnN0IFt3YXRjaExpc3QsIHNldFdhdGNoTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW21vdmllVG9BZGQsIHNldE1vdmllVG9BZGRdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVkV2F0Y2hMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3YXRjaExpc3RcIik7XG4gICAgICAgIGlmIChzYXZlZFdhdGNoTGlzdCkge1xuICAgICAgICAgIHNldFdhdGNoTGlzdChKU09OLnBhcnNlKHNhdmVkV2F0Y2hMaXN0KSk7XG4gICAgICAgIH1cbiAgICAgIH0sIFtdKTtcblxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3YXRjaExpc3RcIiwgSlNPTi5zdHJpbmdpZnkod2F0Y2hMaXN0KSk7XG4gICAgICB9LCBbd2F0Y2hMaXN0XSk7XG5cbiAgICBjb25zdCBoYW5kbGVBZGRNb3ZpZSA9ICgpID0+IHtcbiAgICAgICAgaWYobW92aWVUb0FkZC50cmltKCkgPT09IFwiIFwiKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHdhdGNoTGlzdC5zb21lKG1vdmllID0+IG1vdmllLnRpdGxlID09PSBtb3ZpZVRvQWRkKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJNb3ZpZSBpcyBhbHJlYWR5IGluIHRoZSB3YXRjaGxpc3QuXCIpO1xuICAgICAgICAgICAgc2V0TW92aWVUb0FkZChcIlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRXYXRjaExpc3QoWy4uLndhdGNoTGlzdCwgeyB0aXRsZTogbW92aWVUb0FkZCB9XSk7XG4gICAgc2V0TW92aWVUb0FkZChcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlTW92aWUgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZFdhdGNoTGlzdCA9IHdhdGNoTGlzdC5maWx0ZXIobW92aWUgPT4gbW92aWUudGl0bGUgIT09IHRpdGxlKTtcbiAgICAgICAgc2V0V2F0Y2hMaXN0KHVwZGF0ZWRXYXRjaExpc3QpO1xuICAgICAgfTtcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzE3NzI3NDcxNy9waG90by9hYnN0cmFjdC1tdWx0aW1lZGlhLWJhY2tncm91bmQtY29tcG9zZWQtb2YtbWFueS1pbWFnZXMtd2l0aC1jb3B5LmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz1WMEc0Wi1nbE5LenVJMVp2UU1PYmkzXzBQdXhVSE9xenVyN2Q1TFhCMjlVPVwiKScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHdpZHRoOiAnODAlJyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXRjaGxpc3QtY29udGFpbmVyXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwid2F0Y2hsaXN0LWhlYWRpbmdcIj5NeSBXYXRjaGxpc3Q8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXRjaGxpc3QtZ3JpZFwiPlxuICAgICAgICB7d2F0Y2hMaXN0Lm1hcCgobW92aWUpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17bW92aWUudGl0bGV9IGNsYXNzTmFtZT1cIndhdGNobGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLXRpdGxlXCI+e21vdmllLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVNb3ZpZShtb3ZpZS50aXRsZSl9PlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3YXRjaGxpc3RcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5NeSBXYXRjaGxpc3Q8L2gyPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtb3ZpZSB0aXRsZVwiXG4gICAgICAgICAgdmFsdWU9e21vdmllVG9BZGR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNb3ZpZVRvQWRkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgICAgICAgICAgaGFuZGxlQWRkTW92aWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPiAgICAgICAgICAgICBcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRNb3ZpZX0+QWRkIE1vdmllPC9idXR0b24+XG4gICAgICAgIDx1bCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4J319PlxuICAgICAgICAgIHt3YXRjaExpc3QubWFwKG1vdmllID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e21vdmllLnRpdGxlfT5cbiAgICAgICAgICAgICAge21vdmllLnRpdGxlfVxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZU1vdmllKG1vdmllLnRpdGxlKX0+UmVtb3ZlPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9ybVwiPkZpbmQgWW91ciBNb3ZpZSBIZXJlOjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG48L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UiXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJOYXZpZ2F0aW9uIiwiUGFnZSIsIndhdGNoTGlzdCIsInNldFdhdGNoTGlzdCIsIm1vdmllVG9BZGQiLCJzZXRNb3ZpZVRvQWRkIiwic2F2ZWRXYXRjaExpc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUFkZE1vdmllIiwidHJpbSIsInNvbWUiLCJtb3ZpZSIsInRpdGxlIiwiYWxlcnQiLCJoYW5kbGVSZW1vdmVNb3ZpZSIsInVwZGF0ZWRXYXRjaExpc3QiLCJmaWx0ZXIiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});