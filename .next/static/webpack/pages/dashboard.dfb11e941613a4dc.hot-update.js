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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_TopRatedMovies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/components/TopRatedMovies */ \"./src/components/TopRatedMovies.js\");\n/* harmony import */ var _src_components_CommunityReviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/components/CommunityReviews */ \"./src/components/CommunityReviews.js\");\n/* harmony import */ var _src_components_LoggedInNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/components/LoggedInNavbar */ \"./src/components/LoggedInNavbar.js\");\n/* harmony import */ var _src_images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../src/images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/GlobalState */ \"./src/context/GlobalState.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    //----------------------------------Community Reviews Upcoming-------------------------------------------------------------------------------------\n    // const [communityReviews, setCommunityReviews] = useState([]);\n    // useEffect(() => {\n    //     fetchCommunityReviews();\n    //   }, []);\n    //   const fetchCommunityReviews = async () => {\n    //     try {\n    //       const response = await axios.get('/api/get_community_reviews');\n    //       setCommunityReviews(response.data.reviews);\n    //     } catch (error) {\n    //       console.error('Error fetching community reviews:', error);\n    //     }\n    //   };\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_10__.useGlobalState)();\n    //----------------------------------Retrieve User Data for Login-------------------------------------------------------------------------------------\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Function to retrieve user data from local storage\n        const getUserFromLocalStorage = ()=>{\n            const userData = localStorage.getItem(\"user\");\n            if (userData) {\n                const user = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(userData);\n                console.log(\"User data:\", user);\n                dispatch({\n                    type: \"SET_USER\",\n                    payload: user\n                });\n            }\n        };\n        getUserFromLocalStorage();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80\")',\n            // backgroundImage: 'url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfUQqtN62oKB4gl6rzhNfOqwxX-Q74bUxZ0oTopsz1CM0DkLk0RhBlOYKbvGsGA4ojN0&usqp=CAU\")',\n            // backgroundImage: 'url(\"https://t4.ftcdn.net/jpg/02/71/50/69/360_F_271506927_WWFfd92jDIIDx6DgMflakU14o5jRPgBm.jpg\")',\n            // backgroundImage: 'url(\"https://st.depositphotos.com/1007879/3004/v/450/depositphotos_30049933-stock-illustration-blank-photo-video-template.jpg\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        className: \"jsx-141eb1f6e856fa94\" + \" \" + \"container-fluid text-center bg-cover d-flex flex-column justify-content-center align-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_LoggedInNavbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 64,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-141eb1f6e856fa94\" + \" \" + \"text-center text-white\",\n                children: \"Movie Mixer Community\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 66,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-141eb1f6e856fa94\" + \" \" + \"dashboard-content text-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-141eb1f6e856fa94\" + \" \" + \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-141eb1f6e856fa94\" + \" \" + \"col\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_TopRatedMovies__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-141eb1f6e856fa94\" + \" \" + \"col d-flex flex-column align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-141eb1f6e856fa94\" + \" \" + \"logo-container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                        className: \"img-fluid\",\n                                        src: _src_images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        alt: \"MovieMixer Logo\",\n                                        width: 300,\n                                        height: 300\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 9\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-141eb1f6e856fa94\" + \" \" + \"form-link\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        href: \"/form\",\n                                        children: \"Find Your Movie Here!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"141eb1f6e856fa94\",\n                children: \".logo-container.jsx-141eb1f6e856fa94{margin-top:53px;margin-left:80px;margin-bottom:20px}.container-fluid.jsx-141eb1f6e856fa94{margin-top:50px;margin-bottom:20px}.form-link.jsx-141eb1f6e856fa94{margin-left:80px;font-size:40px;color:white;text-decoration:underline;-webkit-transition:color.3s;-moz-transition:color.3s;-o-transition:color.3s;transition:color.3s}.form-link.jsx-141eb1f6e856fa94:hover{color:#cbb26a}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/dashboard/index.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"KKAVvU+1cWIjObqvWFCOi3eo1C8=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_10__.useGlobalState\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1M7QUFDSTtBQUNBO0FBQ0o7QUFDL0I7QUFDRTtBQUNJO0FBQ3dCO0FBRzNELFNBQVNXOztJQUNQLG1KQUFtSjtJQUNqSixnRUFBZ0U7SUFFaEUsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixZQUFZO0lBRVosZ0RBQWdEO0lBQ2hELFlBQVk7SUFDWix3RUFBd0U7SUFDeEUsb0RBQW9EO0lBQ3BELHdCQUF3QjtJQUN4QixtRUFBbUU7SUFDbkUsUUFBUTtJQUNSLE9BQU87SUFHVCxNQUFNLEVBQUNDLEtBQUssRUFBRUMsUUFBUSxFQUFDLEdBQUdILHFFQUFjQTtJQUUxQyxxSkFBcUo7SUFDbkpULGdEQUFTQSxDQUFDO1FBQ1Isb0RBQW9EO1FBQ3BELE1BQU1hLDBCQUEwQjtZQUM5QixNQUFNQyxXQUFXQyxhQUFhQyxPQUFPLENBQUM7WUFDdEMsSUFBSUYsVUFBVTtnQkFDWixNQUFNRyxPQUFPVCxzREFBU0EsQ0FBQ007Z0JBQ3ZCSSxRQUFRQyxHQUFHLENBQUMsY0FBY0Y7Z0JBQzFCTCxTQUFTO29CQUNMUSxNQUFNO29CQUNOQyxTQUFTSjtnQkFDYjtZQUNGO1FBQ0Y7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFHSCxxQkFDSSw4REFBQ1M7UUFBa0hDLE9BQU87WUFDeEhDLGlCQUFpQjtZQUNqQixrS0FBa0s7WUFDbEssdUhBQXVIO1lBQ3JILHNKQUFzSjtZQUN0SkMsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJDLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGdCQUFnQjtZQUNoQkMsWUFBWTtRQUNaO2tEQVpXOzswQkFhYiw4REFBQzNCLHNFQUFrQkE7Ozs7OzBCQUViLDhEQUFDNEI7MERBQWE7MEJBQXlCOzs7Ozs7MEJBQy9DLDhEQUFDVjswREFBYzswQkFDZiw0RUFBQ0E7OERBQWM7O3NDQUNYLDhEQUFDQTtzRUFBYztzQ0FDZiw0RUFBQ3BCLHNFQUFjQTs7Ozs7Ozs7OztzQ0FFZiw4REFBQ29CO3NFQUFjOzs4Q0FDZiw4REFBQ0E7OEVBQWM7OENBQ25CLDRFQUFDZixtREFBS0E7d0NBQUMwQixXQUFVO3dDQUNiQyxLQUFLN0Isc0VBQWNBO3dDQUNuQjhCLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7OzhDQUdSLDhEQUFDZjs4RUFBYzs4Q0FDYiw0RUFBQ2hCLGtEQUFJQTt3Q0FDTGdDLE1BQUs7a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0J2QjtHQXRHSzVCOztRQWtCbUJELGlFQUFjQTs7O0tBbEJqQ0M7QUF1R1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcz9mZThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvcFJhdGVkTW92aWVzIGZyb20gJy9zcmMvY29tcG9uZW50cy9Ub3BSYXRlZE1vdmllcyc7XG5pbXBvcnQgQ29tbXVuaXR5UmV2aWV3cyBmcm9tICcvc3JjL2NvbXBvbmVudHMvQ29tbXVuaXR5UmV2aWV3cyc7XG5pbXBvcnQgTG9nZ2VkSW5OYXZpZ2F0aW9uIGZyb20gJy9zcmMvY29tcG9uZW50cy9Mb2dnZWRJbk5hdmJhcic7XG5pbXBvcnQgTW92aWVNaXhlckxvZ28gZnJvbSBcIi9zcmMvaW1hZ2VzL01vdmllTWl4ZXJMb2dvLnBuZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCB7IHVzZUdsb2JhbFN0YXRlIH0gZnJvbSAnLi4vLi4vY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5cblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db21tdW5pdHkgUmV2aWV3cyBVcGNvbWluZy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBjb25zdCBbY29tbXVuaXR5UmV2aWV3cywgc2V0Q29tbXVuaXR5UmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBmZXRjaENvbW11bml0eVJldmlld3MoKTtcbiAgICAvLyAgIH0sIFtdKTtcblxuICAgIC8vICAgY29uc3QgZmV0Y2hDb21tdW5pdHlSZXZpZXdzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldF9jb21tdW5pdHlfcmV2aWV3cycpO1xuICAgIC8vICAgICAgIHNldENvbW11bml0eVJldmlld3MocmVzcG9uc2UuZGF0YS5yZXZpZXdzKTtcbiAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjb21tdW5pdHkgcmV2aWV3czonLCBlcnJvcik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH07XG4gIFxuXG4gIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlR2xvYmFsU3RhdGUoKTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tUmV0cmlldmUgVXNlciBEYXRhIGZvciBMb2dpbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGdW5jdGlvbiB0byByZXRyaWV2ZSB1c2VyIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgY29uc3QgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IGp3dERlY29kZSh1c2VyRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGE6JywgdXNlcik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXG4gICAgICAgICAgICBwYXlsb2FkOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgZ2V0VXNlckZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQgdGV4dC1jZW50ZXIgYmctY292ZXIgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJyBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg5NTk5ODQ5OTI3LTJlZTkxY2VkZTNiYT9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE5IeDhiVzkyYVdVbE1qQmlZV05yWjNKdmRXNWtmR1Z1ZkRCOGZEQjhmSHd3Jnc9MTAwMCZxPTgwXCIpJyxcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUYmZVUXF0TjYyb0tCNGdsNnJ6aE5mT3F3eFgtUTc0YlV4WjBvVG9wc3oxQ00wRGtMazBSaEJsT1lLYnZHc0dBNG9qTjAmdXNxcD1DQVVcIiknLFxuICAgICAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vdDQuZnRjZG4ubmV0L2pwZy8wMi83MS81MC82OS8zNjBfRl8yNzE1MDY5MjdfV1dGZmQ5MmpESUlEeDZEZ01mbGFrVTE0bzVqUlBnQm0uanBnXCIpJyxcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vc3QuZGVwb3NpdHBob3Rvcy5jb20vMTAwNzg3OS8zMDA0L3YvNDUwL2RlcG9zaXRwaG90b3NfMzAwNDk5MzMtc3RvY2staWxsdXN0cmF0aW9uLWJsYW5rLXBob3RvLXZpZGVvLXRlbXBsYXRlLmpwZ1wiKScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLCAgICAgICAgICBcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgIDxMb2dnZWRJbk5hdmlnYXRpb24gLz5cblxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtd2hpdGUnPk1vdmllIE1peGVyIENvbW11bml0eTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXNoYm9hcmQtY29udGVudCB0ZXh0LXdoaXRlJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cbiAgICAgICAgICAgIDxUb3BSYXRlZE1vdmllcyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgIHNyYz17TW92aWVNaXhlckxvZ299XG4gICAgICAgICAgICBhbHQ9XCJNb3ZpZU1peGVyIExvZ29cIlxuICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgIGhlaWdodD17MzAwfSAvPlxuXG4gICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1saW5rJz5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj0nL2Zvcm0nPkZpbmQgWW91ciBNb3ZpZSBIZXJlITwvTGluaz5cbiAgICAgICAgICAgICAgICB7LyogPENvbW11bml0eVJldmlld3MgcmV2aWV3cz17Y29tbXVuaXR5UmV2aWV3c30vPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuLmxvZ28tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNTNweDtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59ICAgICBcblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4gICAgICAuZm9ybS1saW5rIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICAgIH1cbiAgICAgIC5mb3JtLWxpbms6aG92ZXIge1xuICAgICAgICBjb2xvcjogI0NCQjI2QTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgfVxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9wUmF0ZWRNb3ZpZXMiLCJDb21tdW5pdHlSZXZpZXdzIiwiTG9nZ2VkSW5OYXZpZ2F0aW9uIiwiTW92aWVNaXhlckxvZ28iLCJMaW5rIiwiSW1hZ2UiLCJqd3REZWNvZGUiLCJ1c2VHbG9iYWxTdGF0ZSIsIkRhc2hib2FyZCIsInN0YXRlIiwiZGlzcGF0Y2giLCJnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSIsInVzZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBheWxvYWQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoMSIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});