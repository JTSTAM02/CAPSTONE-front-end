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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navigation */ \"./src/components/Navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [watchList, setWatchList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [movieToAdd, setMovieToAdd] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const savedWatchList = localStorage.getItem(\"watchList\");\n        if (savedWatchList) {\n            setWatchList(JSON.parse(savedWatchList));\n        }\n    }, []);\n    const handleAddMovie = ()=>{\n        if (movieToAdd.trim() === \" \") return;\n        if (watchList.some((movie)=>movie.title === movieToAdd)) {\n            alert(\"Movie is already in the watchlist.\");\n            setMovieToAdd(\"\");\n            return;\n        }\n        setWatchList([\n            ...watchList,\n            {\n                title: movieToAdd\n            }\n        ]);\n        setMovieToAdd(\"\");\n    };\n    const handleRemoveMovie = (title)=>{\n        const updatedWatchList = watchList.filter((movie)=>movie.title !== title);\n        setWatchList(updatedWatchList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"center\",\n                    width: \"80%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"watchlist\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-white\",\n                            children: \"My Watchlist\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter movie title\",\n                            value: movieToAdd,\n                            onChange: (e)=>setMovieToAdd(e.target.value),\n                            onKeyDown: (e)=>{\n                                if (e.key === \"Enter\") {\n                                    handleAddMovie();\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleAddMovie,\n                            children: \"Add Movie\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            style: {\n                                marginTop: \"10px\"\n                            },\n                            children: watchList.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        movie.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleRemoveMovie(movie.title),\n                                            children: \"Remove\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, movie.title, true, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 49,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/form\",\n                children: \"Find Your Movie Here:\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 76,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"41Hm6xkvEeFUoWkuOsEqpt2++HM=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ3FCO0FBQ0w7QUFDUTtBQUdyRCxTQUFTTTs7SUFDTCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFHN0NDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVEsaUJBQWlCQyxhQUFhQyxPQUFPLENBQUM7UUFDNUMsSUFBSUYsZ0JBQWdCO1lBQ2xCSCxhQUFhTSxLQUFLQyxLQUFLLENBQUNKO1FBQzFCO0lBQ0YsR0FBRyxFQUFFO0lBRVAsTUFBTUssaUJBQWlCO1FBQ25CLElBQUdQLFdBQVdRLElBQUksT0FBTyxLQUFLO1FBRTlCLElBQUlWLFVBQVVXLElBQUksQ0FBQ0MsQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxLQUFLWCxhQUFhO1lBQ3JEWSxNQUFNO1lBQ05YLGNBQWM7WUFDZDtRQUNSO1FBRUFGLGFBQWE7ZUFBSUQ7WUFBVztnQkFBRWEsT0FBT1g7WUFBVztTQUFFO1FBQ2xEQyxjQUFjO0lBQ2Q7SUFFQSxNQUFNWSxvQkFBb0IsQ0FBQ0Y7UUFDdkIsTUFBTUcsbUJBQW1CaEIsVUFBVWlCLE1BQU0sQ0FBQ0wsQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxLQUFLQTtRQUNuRVosYUFBYWU7SUFDZjtJQUdGLHFCQUNJLDhEQUFDRTtRQUFJQyxPQUFPO1lBQ1JDLGlCQUFpQjtZQUNqQkMsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJDLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGdCQUFnQjtZQUNoQkMsWUFBWTtRQUNkOzswQkFDViw4REFBQ1Q7Z0JBQUlDLE9BQU87b0JBQUVLLFNBQVM7b0JBQVFFLGdCQUFnQjtvQkFBY0MsWUFBWTtvQkFBVUMsT0FBTztnQkFBTTswQkFDMUYsNEVBQUNWO29CQUFJVyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQWE7Ozs7OztzQ0FDM0IsOERBQUNFOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxPQUFPaEM7NEJBQ1BpQyxVQUFVLENBQUNDLElBQU1qQyxjQUFjaUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUM3Q0ksV0FBVyxDQUFDRjtnQ0FDVixJQUFHQSxFQUFFRyxHQUFHLEtBQUssU0FBUTtvQ0FDakI5QjtnQ0FDSjs0QkFDRjs7Ozs7O3NDQUVGLDhEQUFDK0I7NEJBQU9DLFNBQVNoQztzQ0FBZ0I7Ozs7OztzQ0FDakMsOERBQUNpQzs0QkFBR3ZCLE9BQU87Z0NBQUV3QixXQUFXOzRCQUFNO3NDQUMzQjNDLFVBQVU0QyxHQUFHLENBQUNoQyxDQUFBQSxzQkFDYiw4REFBQ2lDOzt3Q0FDRWpDLE1BQU1DLEtBQUs7c0RBQ1osOERBQUMyQjs0Q0FBT0MsU0FBUyxJQUFNMUIsa0JBQWtCSCxNQUFNQyxLQUFLO3NEQUFHOzs7Ozs7O21DQUZoREQsTUFBTUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFwQiw4REFBQ2YsOERBQVVBOzs7OzswQkFDWCw4REFBQ0QsMERBQU1BOzs7OzswQkFDVCw4REFBQ0osa0RBQUlBO2dCQUFDcUQsTUFBSzswQkFBUTs7Ozs7Ozs7Ozs7O0FBSTdCO0dBekVTL0M7S0FBQUE7QUEyRVQsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcz9mZThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcblxuXG5mdW5jdGlvbiBQYWdlKCkge1xuICAgIGNvbnN0IFt3YXRjaExpc3QsIHNldFdhdGNoTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW21vdmllVG9BZGQsIHNldE1vdmllVG9BZGRdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVkV2F0Y2hMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3YXRjaExpc3RcIik7XG4gICAgICAgIGlmIChzYXZlZFdhdGNoTGlzdCkge1xuICAgICAgICAgIHNldFdhdGNoTGlzdChKU09OLnBhcnNlKHNhdmVkV2F0Y2hMaXN0KSk7XG4gICAgICAgIH1cbiAgICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUFkZE1vdmllID0gKCkgPT4ge1xuICAgICAgICBpZihtb3ZpZVRvQWRkLnRyaW0oKSA9PT0gXCIgXCIpIHJldHVybjtcblxuICAgICAgICBpZiAod2F0Y2hMaXN0LnNvbWUobW92aWUgPT4gbW92aWUudGl0bGUgPT09IG1vdmllVG9BZGQpKSB7XG4gICAgICAgICAgICBhbGVydChcIk1vdmllIGlzIGFscmVhZHkgaW4gdGhlIHdhdGNobGlzdC5cIik7XG4gICAgICAgICAgICBzZXRNb3ZpZVRvQWRkKFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFdhdGNoTGlzdChbLi4ud2F0Y2hMaXN0LCB7IHRpdGxlOiBtb3ZpZVRvQWRkIH1dKTtcbiAgICBzZXRNb3ZpZVRvQWRkKFwiXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVSZW1vdmVNb3ZpZSA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkV2F0Y2hMaXN0ID0gd2F0Y2hMaXN0LmZpbHRlcihtb3ZpZSA9PiBtb3ZpZS50aXRsZSAhPT0gdGl0bGUpO1xuICAgICAgICBzZXRXYXRjaExpc3QodXBkYXRlZFdhdGNoTGlzdCk7XG4gICAgICB9O1xuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vaWQvMTc3Mjc0NzE3L3Bob3RvL2Fic3RyYWN0LW11bHRpbWVkaWEtYmFja2dyb3VuZC1jb21wb3NlZC1vZi1tYW55LWltYWdlcy13aXRoLWNvcHkuanBnP3M9NjEyeDYxMiZ3PTAmaz0yMCZjPVYwRzRaLWdsTkt6dUkxWnZRTU9iaTNfMFB1eFVIT3F6dXI3ZDVMWEIyOVU9XCIpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgfX0+XG48ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHdpZHRoOiAnODAlJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F0Y2hsaXN0XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+TXkgV2F0Y2hsaXN0PC9oMj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbW92aWUgdGl0bGVcIlxuICAgICAgICAgIHZhbHVlPXttb3ZpZVRvQWRkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TW92aWVUb0FkZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgICAgIGhhbmRsZUFkZE1vdmllKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz4gICAgICAgICAgICAgXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkTW92aWV9PkFkZCBNb3ZpZTwvYnV0dG9uPlxuICAgICAgICA8dWwgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCd9fT5cbiAgICAgICAgICB7d2F0Y2hMaXN0Lm1hcChtb3ZpZSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXttb3ZpZS50aXRsZX0+XG4gICAgICAgICAgICAgIHttb3ZpZS50aXRsZX1cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVNb3ZpZShtb3ZpZS50aXRsZSl9PlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9ybVwiPkZpbmQgWW91ciBNb3ZpZSBIZXJlOjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZSJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWRlciIsIk5hdmlnYXRpb24iLCJQYWdlIiwid2F0Y2hMaXN0Iiwic2V0V2F0Y2hMaXN0IiwibW92aWVUb0FkZCIsInNldE1vdmllVG9BZGQiLCJzYXZlZFdhdGNoTGlzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJoYW5kbGVBZGRNb3ZpZSIsInRyaW0iLCJzb21lIiwibW92aWUiLCJ0aXRsZSIsImFsZXJ0IiwiaGFuZGxlUmVtb3ZlTW92aWUiLCJ1cGRhdGVkV2F0Y2hMaXN0IiwiZmlsdGVyIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJjbGFzc05hbWUiLCJoMiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbktleURvd24iLCJrZXkiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXJnaW5Ub3AiLCJtYXAiLCJsaSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});