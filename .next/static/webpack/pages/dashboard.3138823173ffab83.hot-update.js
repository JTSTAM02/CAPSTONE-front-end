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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_TopRatedMovies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/components/TopRatedMovies */ \"./src/components/TopRatedMovies.js\");\n/* harmony import */ var _src_components_CommunityReviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/components/CommunityReviews */ \"./src/components/CommunityReviews.js\");\n/* harmony import */ var _src_components_LoggedInNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/components/LoggedInNavbar */ \"./src/components/LoggedInNavbar.js\");\n/* harmony import */ var _src_images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../src/images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    //----------------------------------Community Reviews Upcoming-------------------------------------------------------------------------------------\n    // const [communityReviews, setCommunityReviews] = useState([]);\n    // useEffect(() => {\n    //     fetchCommunityReviews();\n    //   }, []);\n    //   const fetchCommunityReviews = async () => {\n    //     try {\n    //       const response = await axios.get('/api/get_community_reviews');\n    //       setCommunityReviews(response.data.reviews);\n    //     } catch (error) {\n    //       console.error('Error fetching community reviews:', error);\n    //     }\n    //   };\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_10__.useGlobalState)();\n    //----------------------------------Retrieve User Data for Login-------------------------------------------------------------------------------------\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Function to retrieve user data from local storage\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80\")',\n            // backgroundImage: 'url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfUQqtN62oKB4gl6rzhNfOqwxX-Q74bUxZ0oTopsz1CM0DkLk0RhBlOYKbvGsGA4ojN0&usqp=CAU\")',\n            // backgroundImage: 'url(\"https://t4.ftcdn.net/jpg/02/71/50/69/360_F_271506927_WWFfd92jDIIDx6DgMflakU14o5jRPgBm.jpg\")',\n            // backgroundImage: 'url(\"https://st.depositphotos.com/1007879/3004/v/450/depositphotos_30049933-stock-illustration-blank-photo-video-template.jpg\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\"\n        },\n        className: \"jsx-2d05e35246f7434\" + \" \" + \"container-fluid text-center bg-cover d-flex flex-column justify-content-center align-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_LoggedInNavbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-2d05e35246f7434\" + \" \" + \"text-center text-white mt-5\",\n                children: \"Movie Mixer Community\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-2d05e35246f7434\" + \" \" + \"dashboard-content text-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-2d05e35246f7434\" + \" \" + \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-2d05e35246f7434\" + \" \" + \"col\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_TopRatedMovies__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-2d05e35246f7434\" + \" \" + \"col d-flex flex-column align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-2d05e35246f7434\" + \" \" + \"logo-container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                        className: \"img-fluid\",\n                                        src: _src_images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        alt: \"MovieMixer Logo\",\n                                        width: 300,\n                                        height: 300\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-2d05e35246f7434\" + \" \" + \"form-link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        href: \"/form\",\n                                        children: \"Find Your Movie Here!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"2d05e35246f7434\",\n                children: \".logo-container.jsx-2d05e35246f7434{margin-top:53px;margin-left:80px;margin-bottom:20px}.container-fluid.jsx-2d05e35246f7434{margin-top:50px;margin-bottom:20px}.form-link.jsx-2d05e35246f7434{margin-left:80px;font-size:40px;color:white;text-decoration:underline;-webkit-transition:color.3s;-moz-transition:color.3s;-o-transition:color.3s;transition:color.3s}.form-link.jsx-2d05e35246f7434:hover{color:#cbb26a}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"KdCZHTfh7Nvnuc11Zxcd64wd9Q8=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_10__.useGlobalState\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1M7QUFDSTtBQUNBO0FBQ0o7QUFDL0I7QUFDRTtBQUNJO0FBQ3dCO0FBRzNELFNBQVNXOztJQUNQLG1KQUFtSjtJQUNuSixnRUFBZ0U7SUFFaEUsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixZQUFZO0lBRVosZ0RBQWdEO0lBQ2hELFlBQVk7SUFDWix3RUFBd0U7SUFDeEUsb0RBQW9EO0lBQ3BELHdCQUF3QjtJQUN4QixtRUFBbUU7SUFDbkUsUUFBUTtJQUNSLE9BQU87SUFHUCxNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdILHFFQUFjQTtJQUUxQyxxSkFBcUo7SUFDckpULGdEQUFTQSxDQUFDO1FBQ1Isb0RBQW9EO1FBQ3BELE1BQU1hLDBCQUEwQjtZQUM5QixNQUFNQyxXQUFXQyxhQUFhQyxPQUFPLENBQUM7WUFDdEMsSUFBSUYsVUFBVTtnQkFDWixNQUFNRyxPQUFPVCxzREFBU0EsQ0FBQ007Z0JBQ3ZCSSxRQUFRQyxHQUFHLENBQUMsY0FBY0Y7Z0JBQzFCTCxTQUFTO29CQUNQUSxNQUFNO29CQUNOQyxTQUFTSjtnQkFDWDtZQUNGO1FBQ0Y7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFHTCxxQkFDRSw4REFBQ1M7UUFBa0hDLE9BQU87WUFDeEhDLGlCQUFpQjtZQUNqQixrS0FBa0s7WUFDbEssdUhBQXVIO1lBQ3ZILHNKQUFzSjtZQUN0SkMsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJDLFdBQVc7UUFDYjtpREFSZTs7MEJBU2IsOERBQUN2QixzRUFBa0JBOzs7OzswQkFFbkIsOERBQUN3Qjt5REFBYTswQkFBOEI7Ozs7OzswQkFDNUMsOERBQUNOO3lEQUFjOzBCQUNiLDRFQUFDQTs2REFBYzs7c0NBQ2IsOERBQUNBO3FFQUFjO3NDQUNiLDRFQUFDcEIsc0VBQWNBOzs7Ozs7Ozs7O3NDQUVqQiw4REFBQ29CO3FFQUFjOzs4Q0FDYiw4REFBQ0E7NkVBQWM7OENBQ2IsNEVBQUNmLG1EQUFLQTt3Q0FBQ3NCLFdBQVU7d0NBQ2ZDLEtBQUt6QixzRUFBY0E7d0NBQ25CMEIsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7OENBR1osOERBQUNYOzZFQUFjOzhDQUNiLDRFQUFDaEIsa0RBQUlBO3dDQUNINEIsTUFBSztrREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQzdCO0dBcEdTeEI7O1FBa0JxQkQsaUVBQWNBOzs7S0FsQm5DQztBQXFHVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzP2ZlOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9wUmF0ZWRNb3ZpZXMgZnJvbSAnL3NyYy9jb21wb25lbnRzL1RvcFJhdGVkTW92aWVzJztcbmltcG9ydCBDb21tdW5pdHlSZXZpZXdzIGZyb20gJy9zcmMvY29tcG9uZW50cy9Db21tdW5pdHlSZXZpZXdzJztcbmltcG9ydCBMb2dnZWRJbk5hdmlnYXRpb24gZnJvbSAnL3NyYy9jb21wb25lbnRzL0xvZ2dlZEluTmF2YmFyJztcbmltcG9ydCBNb3ZpZU1peGVyTG9nbyBmcm9tIFwiL3NyYy9pbWFnZXMvTW92aWVNaXhlckxvZ28ucG5nXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tICcuLi8uLi9jb250ZXh0L0dsb2JhbFN0YXRlJztcblxuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbW11bml0eSBSZXZpZXdzIFVwY29taW5nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBjb25zdCBbY29tbXVuaXR5UmV2aWV3cywgc2V0Q29tbXVuaXR5UmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGZldGNoQ29tbXVuaXR5UmV2aWV3cygpO1xuICAvLyAgIH0sIFtdKTtcblxuICAvLyAgIGNvbnN0IGZldGNoQ29tbXVuaXR5UmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldF9jb21tdW5pdHlfcmV2aWV3cycpO1xuICAvLyAgICAgICBzZXRDb21tdW5pdHlSZXZpZXdzKHJlc3BvbnNlLmRhdGEucmV2aWV3cyk7XG4gIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjb21tdW5pdHkgcmV2aWV3czonLCBlcnJvcik7XG4gIC8vICAgICB9XG4gIC8vICAgfTtcblxuXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVJldHJpZXZlIFVzZXIgRGF0YSBmb3IgTG9naW4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRnVuY3Rpb24gdG8gcmV0cmlldmUgdXNlciBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IGdldFVzZXJGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBqd3REZWNvZGUodXNlckRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBkYXRhOicsIHVzZXIpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcbiAgICAgICAgICBwYXlsb2FkOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgfSwgW10pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQgdGV4dC1jZW50ZXIgYmctY292ZXIgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0ODk1OTk4NDk5MjctMmVlOTFjZWRlM2JhP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4elpXRnlZMmg4Tkh4OGJXOTJhV1VsTWpCaVlXTnJaM0p2ZFc1a2ZHVnVmREI4ZkRCOGZId3cmdz0xMDAwJnE9ODBcIiknLFxuICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiAndXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVGJmVVFxdE42Mm9LQjRnbDZyemhOZk9xd3hYLVE3NGJVeFowb1RvcHN6MUNNMERrTGswUmhCbE9ZS2J2R3NHQTRvak4wJnVzcXA9Q0FVXCIpJyxcbiAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vdDQuZnRjZG4ubmV0L2pwZy8wMi83MS81MC82OS8zNjBfRl8yNzE1MDY5MjdfV1dGZmQ5MmpESUlEeDZEZ01mbGFrVTE0bzVqUlBnQm0uanBnXCIpJyxcbiAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vc3QuZGVwb3NpdHBob3Rvcy5jb20vMTAwNzg3OS8zMDA0L3YvNDUwL2RlcG9zaXRwaG90b3NfMzAwNDk5MzMtc3RvY2staWxsdXN0cmF0aW9uLWJsYW5rLXBob3RvLXZpZGVvLXRlbXBsYXRlLmpwZ1wiKScsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgfX0+XG4gICAgICA8TG9nZ2VkSW5OYXZpZ2F0aW9uIC8+XG5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtd2hpdGUgbXQtNSc+TW92aWUgTWl4ZXIgQ29tbXVuaXR5PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXNoYm9hcmQtY29udGVudCB0ZXh0LXdoaXRlJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XG4gICAgICAgICAgICA8VG9wUmF0ZWRNb3ZpZXMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICBzcmM9e01vdmllTWl4ZXJMb2dvfVxuICAgICAgICAgICAgICAgIGFsdD1cIk1vdmllTWl4ZXIgTG9nb1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH0gLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1saW5rJz5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPScvZm9ybSc+RmluZCBZb3VyIE1vdmllIEhlcmUhPC9MaW5rPlxuICAgICAgICAgICAgICB7LyogPENvbW11bml0eVJldmlld3MgcmV2aWV3cz17Y29tbXVuaXR5UmV2aWV3c30vPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4ubG9nby1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1M3B4O1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0gICAgIFxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuXG4gICAgICAuZm9ybS1saW5rIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICAgIH1cbiAgICAgIC5mb3JtLWxpbms6aG92ZXIge1xuICAgICAgICBjb2xvcjogI0NCQjI2QTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb3BSYXRlZE1vdmllcyIsIkNvbW11bml0eVJldmlld3MiLCJMb2dnZWRJbk5hdmlnYXRpb24iLCJNb3ZpZU1peGVyTG9nbyIsIkxpbmsiLCJJbWFnZSIsImp3dERlY29kZSIsInVzZUdsb2JhbFN0YXRlIiwiRGFzaGJvYXJkIiwic3RhdGUiLCJkaXNwYXRjaCIsImdldFVzZXJGcm9tTG9jYWxTdG9yYWdlIiwidXNlckRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJoMSIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});