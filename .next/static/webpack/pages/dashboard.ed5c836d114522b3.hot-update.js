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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_TopRatedMovies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/components/TopRatedMovies */ \"./src/components/TopRatedMovies.js\");\n/* harmony import */ var _src_components_CommunityReviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/components/CommunityReviews */ \"./src/components/CommunityReviews.js\");\n/* harmony import */ var _src_components_LoggedInNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/components/LoggedInNavbar */ \"./src/components/LoggedInNavbar.js\");\n/* harmony import */ var _src_images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../src/images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    //----------------------------------Community Reviews Upcoming-------------------------------------------------------------------------------------\n    // const [communityReviews, setCommunityReviews] = useState([]);\n    // useEffect(() => {\n    //     fetchCommunityReviews();\n    //   }, []);\n    //   const fetchCommunityReviews = async () => {\n    //     try {\n    //       const response = await axios.get('/api/get_community_reviews');\n    //       setCommunityReviews(response.data.reviews);\n    //     } catch (error) {\n    //       console.error('Error fetching community reviews:', error);\n    //     }\n    //   };\n    const [topMovies, setTopMovies] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_10__.useGlobalState)();\n    //----------------------------------Retrieve User Data for Login-------------------------------------------------------------------------------------\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Function to retrieve user data from local storage\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80\")',\n            // backgroundImage: 'url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfUQqtN62oKB4gl6rzhNfOqwxX-Q74bUxZ0oTopsz1CM0DkLk0RhBlOYKbvGsGA4ojN0&usqp=CAU\")',\n            // backgroundImage: 'url(\"https://t4.ftcdn.net/jpg/02/71/50/69/360_F_271506927_WWFfd92jDIIDx6DgMflakU14o5jRPgBm.jpg\")',\n            // backgroundImage: 'url(\"https://st.depositphotos.com/1007879/3004/v/450/depositphotos_30049933-stock-illustration-blank-photo-video-template.jpg\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"bottom 50px\",\n            minHeight: \"100vh\"\n        },\n        className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"container-fluid text-center bg-cover d-flex flex-column justify-content-center align-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_LoggedInNavbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"text-center text-white mt-5\",\n                children: \"Movie Mixer Community\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"text-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"col\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_TopRatedMovies__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"col d-flex flex-column align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"logo-container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                        className: \"img-fluid\",\n                                        src: _src_images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        alt: \"MovieMixer Logo\",\n                                        width: 300,\n                                        height: 300\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"form-link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        href: \"/form\",\n                                        children: \"Find Your Movie Here!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"7113c3fd5adddeeb\",\n                children: '.logo-container.jsx-7113c3fd5adddeeb{margin-top:53px;margin-left:80px;margin-bottom:20px}.container-fluid.jsx-7113c3fd5adddeeb{min-height:100vh;margin-top:50px;margin-bottom:20px;background-color:#000;background-image:url(\"your-image-url-here\");-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center;background-repeat:no-repeat;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}@media(min-width:769px){.container-fluid.jsx-7113c3fd5adddeeb{-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain}}.form-link.jsx-7113c3fd5adddeeb{margin-left:80px;font-size:40px;color:white;text-decoration:underline;-webkit-transition:color.3s;-moz-transition:color.3s;-o-transition:color.3s;transition:color.3s}.form-link.jsx-7113c3fd5adddeeb:hover{color:#cbb26a}'\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"WpDBzS7P5QqxzNX1jwSnsZCZZ+s=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_10__.useGlobalState\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1M7QUFDSTtBQUNBO0FBQ0o7QUFDL0I7QUFDRTtBQUNJO0FBQ3dCO0FBRzNELFNBQVNXOztJQUNQLG1KQUFtSjtJQUNuSixnRUFBZ0U7SUFFaEUsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixZQUFZO0lBRVosZ0RBQWdEO0lBQ2hELFlBQVk7SUFDWix3RUFBd0U7SUFDeEUsb0RBQW9EO0lBQ3BELHdCQUF3QjtJQUN4QixtRUFBbUU7SUFDbkUsUUFBUTtJQUNSLE9BQU87SUFFUCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUU3QyxNQUFNLEVBQUVZLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdMLHFFQUFjQTtJQUUxQyxxSkFBcUo7SUFDckpULGdEQUFTQSxDQUFDO1FBQ1Isb0RBQW9EO1FBQ3BELE1BQU1lLDBCQUEwQjtZQUM5QixNQUFNQyxXQUFXQyxhQUFhQyxPQUFPLENBQUM7WUFDdEMsSUFBSUYsVUFBVTtnQkFDWixNQUFNRyxPQUFPWCxzREFBU0EsQ0FBQ1E7Z0JBQ3ZCSSxRQUFRQyxHQUFHLENBQUMsY0FBY0Y7Z0JBQzFCTCxTQUFTO29CQUNQUSxNQUFNO29CQUNOQyxTQUFTSjtnQkFDWDtZQUNGO1FBQ0Y7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFHTCxxQkFDRSw4REFBQ1M7UUFBa0hDLE9BQU87WUFDeEhDLGlCQUFpQjtZQUNqQixrS0FBa0s7WUFDbEssdUhBQXVIO1lBQ3ZILHNKQUFzSjtZQUN0SkMsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJDLFdBQVc7UUFDYjtrREFSZTs7MEJBU2IsOERBQUN6QixzRUFBa0JBOzs7OzswQkFFbkIsOERBQUMwQjswREFBYTswQkFBOEI7Ozs7OzswQkFDNUMsOERBQUNOOzBEQUFjOzBCQUNiLDRFQUFDQTs4REFBYzs7c0NBQ2IsOERBQUNBO3NFQUFjO3NDQUNiLDRFQUFDdEIsc0VBQWNBOzs7Ozs7Ozs7O3NDQUVqQiw4REFBQ3NCO3NFQUFjOzs4Q0FDYiw4REFBQ0E7OEVBQWM7OENBQ2IsNEVBQUNqQixtREFBS0E7d0NBQUN3QixXQUFVO3dDQUNmQyxLQUFLM0Isc0VBQWNBO3dDQUNuQjRCLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7OzhDQUdaLDhEQUFDWDs4RUFBYzs4Q0FDYiw0RUFBQ2xCLGtEQUFJQTt3Q0FDSDhCLE1BQUs7a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0Q3QjtHQXhIUzFCOztRQW1CcUJELGlFQUFjQTs7O0tBbkJuQ0M7QUF5SFQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcz9mZThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvcFJhdGVkTW92aWVzIGZyb20gJy9zcmMvY29tcG9uZW50cy9Ub3BSYXRlZE1vdmllcyc7XG5pbXBvcnQgQ29tbXVuaXR5UmV2aWV3cyBmcm9tICcvc3JjL2NvbXBvbmVudHMvQ29tbXVuaXR5UmV2aWV3cyc7XG5pbXBvcnQgTG9nZ2VkSW5OYXZpZ2F0aW9uIGZyb20gJy9zcmMvY29tcG9uZW50cy9Mb2dnZWRJbk5hdmJhcic7XG5pbXBvcnQgTW92aWVNaXhlckxvZ28gZnJvbSBcIi9zcmMvaW1hZ2VzL01vdmllTWl4ZXJMb2dvLnBuZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vLi4vY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5cblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db21tdW5pdHkgUmV2aWV3cyBVcGNvbWluZy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gY29uc3QgW2NvbW11bml0eVJldmlld3MsIHNldENvbW11bml0eVJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBmZXRjaENvbW11bml0eVJldmlld3MoKTtcbiAgLy8gICB9LCBbXSk7XG5cbiAgLy8gICBjb25zdCBmZXRjaENvbW11bml0eVJldmlld3MgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgICB0cnkge1xuICAvLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXRfY29tbXVuaXR5X3Jldmlld3MnKTtcbiAgLy8gICAgICAgc2V0Q29tbXVuaXR5UmV2aWV3cyhyZXNwb25zZS5kYXRhLnJldmlld3MpO1xuICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29tbXVuaXR5IHJldmlld3M6JywgZXJyb3IpO1xuICAvLyAgICAgfVxuICAvLyAgIH07XG5cbiAgY29uc3QgW3RvcE1vdmllcywgc2V0VG9wTW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1SZXRyaWV2ZSBVc2VyIERhdGEgZm9yIExvZ2luLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZ1bmN0aW9uIHRvIHJldHJpZXZlIHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zdCBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICBjb25zdCB1c2VyID0gand0RGVjb2RlKHVzZXJEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YTonLCB1c2VyKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXG4gICAgICAgICAgcGF5bG9hZDogdXNlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIH0sIFtdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkIHRleHQtY2VudGVyIGJnLWNvdmVyIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg5NTk5ODQ5OTI3LTJlZTkxY2VkZTNiYT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE5IeDhiVzkyYVdVbE1qQmlZV05yWjNKdmRXNWtmR1Z1ZkRCOGZEQjhmSHd3Jnc9MTAwMCZxPTgwXCIpJyxcbiAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1RiZlVRcXRONjJvS0I0Z2w2cnpoTmZPcXd4WC1RNzRiVXhaMG9Ub3BzejFDTTBEa0xrMFJoQmxPWUtidkdzR0E0b2pOMCZ1c3FwPUNBVVwiKScsXG4gICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJodHRwczovL3Q0LmZ0Y2RuLm5ldC9qcGcvMDIvNzEvNTAvNjkvMzYwX0ZfMjcxNTA2OTI3X1dXRmZkOTJqRElJRHg2RGdNZmxha1UxNG81alJQZ0JtLmpwZ1wiKScsXG4gICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJodHRwczovL3N0LmRlcG9zaXRwaG90b3MuY29tLzEwMDc4NzkvMzAwNC92LzQ1MC9kZXBvc2l0cGhvdG9zXzMwMDQ5OTMzLXN0b2NrLWlsbHVzdHJhdGlvbi1ibGFuay1waG90by12aWRlby10ZW1wbGF0ZS5qcGdcIiknLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gNTBweCcsXG4gICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgfX0+XG4gICAgICA8TG9nZ2VkSW5OYXZpZ2F0aW9uIC8+XG5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtd2hpdGUgbXQtNSc+TW92aWUgTWl4ZXIgQ29tbXVuaXR5PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XG4gICAgICAgICAgICA8VG9wUmF0ZWRNb3ZpZXMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICBzcmM9e01vdmllTWl4ZXJMb2dvfVxuICAgICAgICAgICAgICAgIGFsdD1cIk1vdmllTWl4ZXIgTG9nb1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH0gLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1saW5rJz5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPScvZm9ybSc+RmluZCBZb3VyIE1vdmllIEhlcmUhPC9MaW5rPlxuICAgICAgICAgICAgICB7LyogPENvbW11bml0eVJldmlld3MgcmV2aWV3cz17Y29tbXVuaXR5UmV2aWV3c30vPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4ubG9nby1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1M3B4O1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0gICAgIFxuXG5cbi5jb250YWluZXItZmx1aWQge1xuICAvKiBTZXQgbWluLWhlaWdodCB0byBhY2NvbW1vZGF0ZSBpbml0aWFsIGNvbnRlbnQgKi9cbiAgbWluLWhlaWdodDogMTAwdmg7IFxuICAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwieW91ci1pbWFnZS11cmwtaGVyZVwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxufVxuXG5cblxuICAgICAgLmZvcm0tbGluayB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gICAgICB9XG4gICAgICAuZm9ybS1saW5rOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNDQkIyNkE7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9wUmF0ZWRNb3ZpZXMiLCJDb21tdW5pdHlSZXZpZXdzIiwiTG9nZ2VkSW5OYXZpZ2F0aW9uIiwiTW92aWVNaXhlckxvZ28iLCJMaW5rIiwiSW1hZ2UiLCJqd3REZWNvZGUiLCJ1c2VHbG9iYWxTdGF0ZSIsIkRhc2hib2FyZCIsInRvcE1vdmllcyIsInNldFRvcE1vdmllcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsInVzZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBheWxvYWQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWluSGVpZ2h0IiwiaDEiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});