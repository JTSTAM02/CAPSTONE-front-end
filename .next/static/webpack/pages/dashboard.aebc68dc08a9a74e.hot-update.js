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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navigation */ \"./src/components/Navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [watchList, setWatchList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [movieToAdd, setMovieToAdd] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleAddMovie = ()=>{\n        if (movieToAdd.trim() === \" \") return;\n        if (watchList.some((movie)=>movie.title === movieToAdd)) {\n            alert(\"Movie is already in the watchlist.\");\n            setMovieToAdd(\"\");\n            return;\n        }\n        setWatchList([\n            ...watchList,\n            {\n                title: movieToAdd\n            }\n        ]);\n        setMovieToAdd(\"\");\n    };\n    const handleRemoveMovie = (title)=>{\n        const updatedWatchList = watchList.filter((movie)=>movie.title !== title);\n        setWatchList(updatedWatchList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"flex-start\",\n                    alignItems: \"flex-start\",\n                    width: \"100%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"watchlist\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"My Watchlist\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: watchList.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            movie.title,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleRemoveMovie(movie.title),\n                                                children: \"Remove\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, movie.title, true, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            margin: \"0 20px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Enter movie title\",\n                                value: movieToAdd,\n                                onChange: (e)=>setMovieToAdd(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleAddMovie,\n                                children: \"Add Movie\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 41,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/form\",\n                children: \"Find Your Movie Here:\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 65,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"hDOSB3a+MtON7bs24/CowjbxsGI=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ3FCO0FBQ0w7QUFDUTtBQUdyRCxTQUFTTTs7SUFDTCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVMsaUJBQWlCO1FBQ25CLElBQUdGLFdBQVdHLElBQUksT0FBTyxLQUFLO1FBRTlCLElBQUlMLFVBQVVNLElBQUksQ0FBQ0MsQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxLQUFLTixhQUFhO1lBQ3JETyxNQUFNO1lBQ05OLGNBQWM7WUFDZDtRQUNSO1FBRUFGLGFBQWE7ZUFBSUQ7WUFBVztnQkFBRVEsT0FBT047WUFBVztTQUFFO1FBQ2xEQyxjQUFjO0lBQ2Q7SUFFQSxNQUFNTyxvQkFBb0IsQ0FBQ0Y7UUFDdkIsTUFBTUcsbUJBQW1CWCxVQUFVWSxNQUFNLENBQUNMLENBQUFBLFFBQVNBLE1BQU1DLEtBQUssS0FBS0E7UUFDbkVQLGFBQWFVO0lBQ2Y7SUFHRixxQkFDSSw4REFBQ0U7UUFBSUMsT0FBTztZQUNSQyxpQkFBaUI7WUFDakJDLGdCQUFnQjtZQUNoQkMsb0JBQW9CO1lBQ3BCQyxXQUFXO1lBQ1hDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxnQkFBZ0I7WUFDaEJDLFlBQVk7UUFDZDs7MEJBQ1YsOERBQUNUO2dCQUFJQyxPQUFPO29CQUFFSyxTQUFTO29CQUFRRSxnQkFBZ0I7b0JBQWNDLFlBQVk7b0JBQWNDLE9BQU87Z0JBQU87O2tDQUMvRiw4REFBQ1Y7d0JBQUlXLFdBQVU7OzBDQUNiLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FDRTFCLFVBQVUyQixHQUFHLENBQUNwQixDQUFBQSxzQkFDYiw4REFBQ3FCOzs0Q0FDRXJCLE1BQU1DLEtBQUs7MERBQ1osOERBQUNxQjtnREFBT0MsU0FBUyxJQUFNcEIsa0JBQWtCSCxNQUFNQyxLQUFLOzBEQUFHOzs7Ozs7O3VDQUZoREQsTUFBTUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPMUIsOERBQUNLO3dCQUFJQyxPQUFPOzRCQUFFaUIsUUFBUTt3QkFBUzs7MENBQzdCLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBT2pDO2dDQUNQa0MsVUFBVSxDQUFDQyxJQUFNbEMsY0FBY2tDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBDQUUvQyw4REFBQ047Z0NBQU9DLFNBQVMxQjswQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHN0IsOERBQUNOLDhEQUFVQTs7Ozs7MEJBQ1gsOERBQUNELDBEQUFNQTs7Ozs7MEJBQ1QsOERBQUNKLGtEQUFJQTtnQkFBQzhDLE1BQUs7MEJBQVE7Ozs7Ozs7Ozs7OztBQUk3QjtHQTlEU3hDO0tBQUFBO0FBZ0VULCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanM/ZmU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5cblxuZnVuY3Rpb24gUGFnZSgpIHtcbiAgICBjb25zdCBbd2F0Y2hMaXN0LCBzZXRXYXRjaExpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttb3ZpZVRvQWRkLCBzZXRNb3ZpZVRvQWRkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgaGFuZGxlQWRkTW92aWUgPSAoKSA9PiB7XG4gICAgICAgIGlmKG1vdmllVG9BZGQudHJpbSgpID09PSBcIiBcIikgcmV0dXJuO1xuXG4gICAgICAgIGlmICh3YXRjaExpc3Quc29tZShtb3ZpZSA9PiBtb3ZpZS50aXRsZSA9PT0gbW92aWVUb0FkZCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiTW92aWUgaXMgYWxyZWFkeSBpbiB0aGUgd2F0Y2hsaXN0LlwiKTtcbiAgICAgICAgICAgIHNldE1vdmllVG9BZGQoXCJcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0V2F0Y2hMaXN0KFsuLi53YXRjaExpc3QsIHsgdGl0bGU6IG1vdmllVG9BZGQgfV0pO1xuICAgIHNldE1vdmllVG9BZGQoXCJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZU1vdmllID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRXYXRjaExpc3QgPSB3YXRjaExpc3QuZmlsdGVyKG1vdmllID0+IG1vdmllLnRpdGxlICE9PSB0aXRsZSk7XG4gICAgICAgIHNldFdhdGNoTGlzdCh1cGRhdGVkV2F0Y2hMaXN0KTtcbiAgICAgIH07XG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9pZC8xNzcyNzQ3MTcvcGhvdG8vYWJzdHJhY3QtbXVsdGltZWRpYS1iYWNrZ3JvdW5kLWNvbXBvc2VkLW9mLW1hbnktaW1hZ2VzLXdpdGgtY29weS5qcGc/cz02MTJ4NjEyJnc9MCZrPTIwJmM9VjBHNFotZ2xOS3p1STFadlFNT2JpM18wUHV4VUhPcXp1cjdkNUxYQjI5VT1cIiknLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9fT5cbjxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLCBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdGNobGlzdFwiPlxuICAgICAgICA8aDI+TXkgV2F0Y2hsaXN0PC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt3YXRjaExpc3QubWFwKG1vdmllID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e21vdmllLnRpdGxlfT5cbiAgICAgICAgICAgICAge21vdmllLnRpdGxlfVxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZU1vdmllKG1vdmllLnRpdGxlKX0+UmVtb3ZlPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzAgMjBweCcgfX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG1vdmllIHRpdGxlXCJcbiAgICAgICAgICB2YWx1ZT17bW92aWVUb0FkZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1vdmllVG9BZGQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZE1vdmllfT5BZGQgTW92aWU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Zvcm1cIj5GaW5kIFlvdXIgTW92aWUgSGVyZTo8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UiXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJOYXZpZ2F0aW9uIiwiUGFnZSIsIndhdGNoTGlzdCIsInNldFdhdGNoTGlzdCIsIm1vdmllVG9BZGQiLCJzZXRNb3ZpZVRvQWRkIiwiaGFuZGxlQWRkTW92aWUiLCJ0cmltIiwic29tZSIsIm1vdmllIiwidGl0bGUiLCJhbGVydCIsImhhbmRsZVJlbW92ZU1vdmllIiwidXBkYXRlZFdhdGNoTGlzdCIsImZpbHRlciIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIndpZHRoIiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsIm1hcCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsIm1hcmdpbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});