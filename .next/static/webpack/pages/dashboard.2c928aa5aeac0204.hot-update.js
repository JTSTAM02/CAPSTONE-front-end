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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_TopRatedMovies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/components/TopRatedMovies */ \"./src/components/TopRatedMovies.js\");\n/* harmony import */ var _src_components_CommunityReviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/components/CommunityReviews */ \"./src/components/CommunityReviews.js\");\n/* harmony import */ var _src_components_LoggedInNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/components/LoggedInNavbar */ \"./src/components/LoggedInNavbar.js\");\n/* harmony import */ var _src_images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../src/images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    //----------------------------------Community Reviews Upcoming-------------------------------------------------------------------------------------\n    // const [communityReviews, setCommunityReviews] = useState([]);\n    // useEffect(() => {\n    //     fetchCommunityReviews();\n    //   }, []);\n    //   const fetchCommunityReviews = async () => {\n    //     try {\n    //       const response = await axios.get('/api/get_community_reviews');\n    //       setCommunityReviews(response.data.reviews);\n    //     } catch (error) {\n    //       console.error('Error fetching community reviews:', error);\n    //     }\n    //   };\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_10__.useGlobalState)();\n    //----------------------------------Retrieve User Data for Login-------------------------------------------------------------------------------------\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Function to retrieve user data from local storage\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80\")',\n            // backgroundImage: 'url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfUQqtN62oKB4gl6rzhNfOqwxX-Q74bUxZ0oTopsz1CM0DkLk0RhBlOYKbvGsGA4ojN0&usqp=CAU\")',\n            // backgroundImage: 'url(\"https://t4.ftcdn.net/jpg/02/71/50/69/360_F_271506927_WWFfd92jDIIDx6DgMflakU14o5jRPgBm.jpg\")',\n            // backgroundImage: 'url(\"https://st.depositphotos.com/1007879/3004/v/450/depositphotos_30049933-stock-illustration-blank-photo-video-template.jpg\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\"\n        },\n        className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"container-fluid text-center bg-cover d-flex flex-column justify-content-center align-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_LoggedInNavbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"text-center text-white mt-5\",\n                children: \"Movie Mixer Community\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"text-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"col\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_TopRatedMovies__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"text-center justify-content-center d-flex align-items-center\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"col d-flex flex-column align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"logo-container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                        className: \"img-fluid\",\n                                        src: _src_images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        alt: \"MovieMixer Logo\",\n                                        width: 300,\n                                        height: 300\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-7113c3fd5adddeeb\" + \" \" + \"form-link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        href: \"/form\",\n                                        children: \"Find Your Movie Here!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"7113c3fd5adddeeb\",\n                children: '.logo-container.jsx-7113c3fd5adddeeb{margin-top:53px;margin-left:80px;margin-bottom:20px}.container-fluid.jsx-7113c3fd5adddeeb{min-height:100vh;margin-top:50px;margin-bottom:20px;background-color:#000;background-image:url(\"your-image-url-here\");-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center;background-repeat:no-repeat;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}@media(min-width:769px){.container-fluid.jsx-7113c3fd5adddeeb{-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain}}.form-link.jsx-7113c3fd5adddeeb{margin-left:80px;font-size:40px;color:white;text-decoration:underline;-webkit-transition:color.3s;-moz-transition:color.3s;-o-transition:color.3s;transition:color.3s}.form-link.jsx-7113c3fd5adddeeb:hover{color:#cbb26a}'\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"KdCZHTfh7Nvnuc11Zxcd64wd9Q8=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_10__.useGlobalState\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1M7QUFDSTtBQUNBO0FBQ0o7QUFDL0I7QUFDRTtBQUNJO0FBQ3dCO0FBRzNELFNBQVNXOztJQUNQLG1KQUFtSjtJQUNuSixnRUFBZ0U7SUFFaEUsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixZQUFZO0lBRVosZ0RBQWdEO0lBQ2hELFlBQVk7SUFDWix3RUFBd0U7SUFDeEUsb0RBQW9EO0lBQ3BELHdCQUF3QjtJQUN4QixtRUFBbUU7SUFDbkUsUUFBUTtJQUNSLE9BQU87SUFHUCxNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdILHFFQUFjQTtJQUUxQyxxSkFBcUo7SUFDckpULGdEQUFTQSxDQUFDO1FBQ1Isb0RBQW9EO1FBQ3BELE1BQU1hLDBCQUEwQjtZQUM5QixNQUFNQyxXQUFXQyxhQUFhQyxPQUFPLENBQUM7WUFDdEMsSUFBSUYsVUFBVTtnQkFDWixNQUFNRyxPQUFPVCxzREFBU0EsQ0FBQ007Z0JBQ3ZCSSxRQUFRQyxHQUFHLENBQUMsY0FBY0Y7Z0JBQzFCTCxTQUFTO29CQUNQUSxNQUFNO29CQUNOQyxTQUFTSjtnQkFDWDtZQUNGO1FBQ0Y7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFHTCxxQkFDRSw4REFBQ1M7UUFBa0hDLE9BQU87WUFDeEhDLGlCQUFpQjtZQUNqQixrS0FBa0s7WUFDbEssdUhBQXVIO1lBQ3ZILHNKQUFzSjtZQUN0SkMsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJDLFdBQVc7UUFDYjtrREFSZTs7MEJBU2IsOERBQUN2QixzRUFBa0JBOzs7OzswQkFFbkIsOERBQUN3QjswREFBYTswQkFBOEI7Ozs7OzswQkFDNUMsOERBQUNOOzBEQUFjOzBCQUNiLDRFQUFDQTs4REFBYzs7c0NBQ2IsOERBQUNBO3NFQUFjO3NDQUNiLDRFQUFDcEIsc0VBQWNBO2dDQUFFMkIsV0FBVTs7Ozs7Ozs7Ozs7c0NBRTdCLDhEQUFDUDtzRUFBYzs7OENBQ2IsOERBQUNBOzhFQUFjOzhDQUNiLDRFQUFDZixtREFBS0E7d0NBQUNzQixXQUFVO3dDQUNmQyxLQUFLekIsc0VBQWNBO3dDQUNuQjBCLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7OzhDQUdaLDhEQUFDWDs4RUFBYzs4Q0FDYiw0RUFBQ2hCLGtEQUFJQTt3Q0FDSDRCLE1BQUs7a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0Q3QjtHQXZIU3hCOztRQWtCcUJELGlFQUFjQTs7O0tBbEJuQ0M7QUF3SFQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcz9mZThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvcFJhdGVkTW92aWVzIGZyb20gJy9zcmMvY29tcG9uZW50cy9Ub3BSYXRlZE1vdmllcyc7XG5pbXBvcnQgQ29tbXVuaXR5UmV2aWV3cyBmcm9tICcvc3JjL2NvbXBvbmVudHMvQ29tbXVuaXR5UmV2aWV3cyc7XG5pbXBvcnQgTG9nZ2VkSW5OYXZpZ2F0aW9uIGZyb20gJy9zcmMvY29tcG9uZW50cy9Mb2dnZWRJbk5hdmJhcic7XG5pbXBvcnQgTW92aWVNaXhlckxvZ28gZnJvbSBcIi9zcmMvaW1hZ2VzL01vdmllTWl4ZXJMb2dvLnBuZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vLi4vY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5cblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db21tdW5pdHkgUmV2aWV3cyBVcGNvbWluZy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gY29uc3QgW2NvbW11bml0eVJldmlld3MsIHNldENvbW11bml0eVJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBmZXRjaENvbW11bml0eVJldmlld3MoKTtcbiAgLy8gICB9LCBbXSk7XG5cbiAgLy8gICBjb25zdCBmZXRjaENvbW11bml0eVJldmlld3MgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgICB0cnkge1xuICAvLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXRfY29tbXVuaXR5X3Jldmlld3MnKTtcbiAgLy8gICAgICAgc2V0Q29tbXVuaXR5UmV2aWV3cyhyZXNwb25zZS5kYXRhLnJldmlld3MpO1xuICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29tbXVuaXR5IHJldmlld3M6JywgZXJyb3IpO1xuICAvLyAgICAgfVxuICAvLyAgIH07XG5cblxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlR2xvYmFsU3RhdGUoKTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1SZXRyaWV2ZSBVc2VyIERhdGEgZm9yIExvZ2luLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZ1bmN0aW9uIHRvIHJldHJpZXZlIHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zdCBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICBjb25zdCB1c2VyID0gand0RGVjb2RlKHVzZXJEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YTonLCB1c2VyKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXG4gICAgICAgICAgcGF5bG9hZDogdXNlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIH0sIFtdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkIHRleHQtY2VudGVyIGJnLWNvdmVyIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg5NTk5ODQ5OTI3LTJlZTkxY2VkZTNiYT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE5IeDhiVzkyYVdVbE1qQmlZV05yWjNKdmRXNWtmR1Z1ZkRCOGZEQjhmSHd3Jnc9MTAwMCZxPTgwXCIpJyxcbiAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1RiZlVRcXRONjJvS0I0Z2w2cnpoTmZPcXd4WC1RNzRiVXhaMG9Ub3BzejFDTTBEa0xrMFJoQmxPWUtidkdzR0E0b2pOMCZ1c3FwPUNBVVwiKScsXG4gICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJodHRwczovL3Q0LmZ0Y2RuLm5ldC9qcGcvMDIvNzEvNTAvNjkvMzYwX0ZfMjcxNTA2OTI3X1dXRmZkOTJqRElJRHg2RGdNZmxha1UxNG81alJQZ0JtLmpwZ1wiKScsXG4gICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJodHRwczovL3N0LmRlcG9zaXRwaG90b3MuY29tLzEwMDc4NzkvMzAwNC92LzQ1MC9kZXBvc2l0cGhvdG9zXzMwMDQ5OTMzLXN0b2NrLWlsbHVzdHJhdGlvbi1ibGFuay1waG90by12aWRlby10ZW1wbGF0ZS5qcGdcIiknLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIH19PlxuICAgICAgPExvZ2dlZEluTmF2aWdhdGlvbiAvPlxuXG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIG10LTUnPk1vdmllIE1peGVyIENvbW11bml0eTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxuICAgICAgICAgICAgPFRvcFJhdGVkTW92aWVzICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICAgICAgc3JjPXtNb3ZpZU1peGVyTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9XCJNb3ZpZU1peGVyIExvZ29cIlxuICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9IC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tbGluayc+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj0nL2Zvcm0nPkZpbmQgWW91ciBNb3ZpZSBIZXJlITwvTGluaz5cbiAgICAgICAgICAgICAgey8qIDxDb21tdW5pdHlSZXZpZXdzIHJldmlld3M9e2NvbW11bml0eVJldmlld3N9Lz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuLmxvZ28tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTNweDtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59ICAgICBcblxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgLyogU2V0IG1pbi1oZWlnaHQgdG8gYWNjb21tb2RhdGUgaW5pdGlhbCBjb250ZW50ICovXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyBcbiAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInlvdXItaW1hZ2UtdXJsLWhlcmVcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIH1cbn1cblxuXG5cbiAgICAgIC5mb3JtLWxpbmsge1xuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICAgICAgfVxuICAgICAgLmZvcm0tbGluazpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjQ0JCMjZBO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRvcFJhdGVkTW92aWVzIiwiQ29tbXVuaXR5UmV2aWV3cyIsIkxvZ2dlZEluTmF2aWdhdGlvbiIsIk1vdmllTWl4ZXJMb2dvIiwiTGluayIsIkltYWdlIiwiand0RGVjb2RlIiwidXNlR2xvYmFsU3RhdGUiLCJEYXNoYm9hcmQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UiLCJ1c2VyRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm1pbkhlaWdodCIsImgxIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});