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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TopRatedMovies() {\n    _s();\n    const [topMovies, setTopMovies] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchTopMovies();\n    }, []);\n    const handleAddToWatchlist = async (movieId)=>{\n        const token = localStorage.getItem(\"access_token\");\n        const headers = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        const data = {\n            title: movieId.titleText.text,\n            release_year: movie.releaseYear.year + \"-01-01\",\n            description: movie.plot.plotText.plainText,\n            image: movie.primaryImage.url,\n            user_id: state.user.user_id,\n            userRating: movie.ratingsSummary.aggregateRating,\n            trailerLink: trailers,\n            added_at: new Date(),\n            alphabetic_id: String(movieId)\n        };\n        console.log(data);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://127.0.0.1:8000/api/add_to_watchlist/\", data, {\n                headers\n            });\n            console.log(response);\n            fetchDataToWatchlist();\n            localStorage.setItem(\"watchList\", JSON.stringify(response.data));\n        } catch (error) {\n            console.error(error);\n        }\n        ;\n    };\n    function fetchTopMovies() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/get_top_movies/\").then((response)=>{\n            const results = response.data.results;\n            setTopMovies(results);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"top-rated-movies text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"jsx-ea2507d0cd5ed3c7\",\n                children: \"Highest Rated Movies\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"movie-grid\",\n                children: topMovies.slice(1, 9).map((movie1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"movie-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"movie-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        style: {\n                                            maxWidth: \"200px\",\n                                            maxHeight: \"200px\"\n                                        },\n                                        src: movie1.primaryImage.url,\n                                        alt: movie1.titleText.text,\n                                        className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"img-fluid\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"jsx-ea2507d0cd5ed3c7\",\n                                        children: movie1.titleText.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"movie-hover-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-ea2507d0cd5ed3c7\",\n                                        children: [\n                                            \"Release Year: \",\n                                            movie1.releaseYear.year\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-ea2507d0cd5ed3c7\",\n                                        children: [\n                                            \"Current Rating by App Users: \",\n                                            movie1.ratingsSummary.aggregateRating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleAddToWatchlist(movie1),\n                                        className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"btn btn-custom\",\n                                        children: \"Add To Watchlist\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, movie1._id, true, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ea2507d0cd5ed3c7\",\n                children: \".btn-custom.jsx-ea2507d0cd5ed3c7{background-color:#1f5d57;color:#cbb26a}.top-rated-movies.jsx-ea2507d0cd5ed3c7{}.movie-grid.jsx-ea2507d0cd5ed3c7{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;list-style:none;padding:0;margin:0}.movie-item.jsx-ea2507d0cd5ed3c7{position:relative;border:10px solid transparent;padding:0px;background-color:black;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;text-align:center;-webkit-box-shadow:0px 0px 5px rgba(0,0,0,.2);-moz-box-shadow:0px 0px 5px rgba(0,0,0,.2);box-shadow:0px 0px 5px rgba(0,0,0,.2)}.movie-content.jsx-ea2507d0cd5ed3c7{position:relative}.movie-hover-content.jsx-ea2507d0cd5ed3c7{display:none;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.8);color:white;padding:10px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:opacity.3s;-moz-transition:opacity.3s;-o-transition:opacity.3s;transition:opacity.3s}.movie-item.jsx-ea2507d0cd5ed3c7:hover .movie-hover-content.jsx-ea2507d0cd5ed3c7{display:block}.movie-item.jsx-ea2507d0cd5ed3c7 img.jsx-ea2507d0cd5ed3c7{margin-bottom:10px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(TopRatedMovies, \"dXsQZ+sPI8bl1rn4PKgW8faXb2Y=\");\n_c = TopRatedMovies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopRatedMovies);\nvar _c;\n$RefreshReg$(_c, \"TopRatedMovies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub3BSYXRlZE1vdmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDd0I7QUFFbEQsU0FBU0s7O0lBQ1AsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1JNO0lBQ0YsR0FBRyxFQUFFO0lBR0wsTUFBTUMsdUJBQXVCLE9BQU9DO1FBQ2xDLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUNuQyxNQUFNQyxVQUFVVixrRUFBVUE7UUFFMUIsTUFBTVcsT0FBTztZQUNYQyxPQUFPTixRQUFRTyxTQUFTLENBQUNDLElBQUk7WUFDN0JDLGNBQWNDLE1BQU1DLFdBQVcsQ0FBQ0MsSUFBSSxHQUFHO1lBQ3ZDQyxhQUFhSCxNQUFNSSxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsU0FBUztZQUMxQ0MsT0FBT1AsTUFBTVEsWUFBWSxDQUFDQyxHQUFHO1lBQzdCQyxTQUFTQyxNQUFNQyxJQUFJLENBQUNGLE9BQU87WUFDM0JHLFlBQVliLE1BQU1jLGNBQWMsQ0FBQ0MsZUFBZTtZQUNoREMsYUFBYUM7WUFDYkMsVUFBVSxJQUFJQztZQUNkQyxlQUFlQyxPQUFPL0I7UUFDeEI7UUFDQWdDLFFBQVFDLEdBQUcsQ0FBQzVCO1FBQ1osSUFBSTtZQUNGLE1BQU02QixXQUFXLE1BQU16QyxrREFBVSxDQUFDLCtDQUErQ1ksTUFBTTtnQkFBRUQ7WUFBUTtZQUMvRjRCLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDWkU7WUFBOEJsQyxhQUFhbUMsT0FBTyxDQUFDLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ0wsU0FBUzdCLElBQUk7UUFDOUYsRUFDQSxPQUFNbUMsT0FBTztZQUNYUixRQUFRUSxLQUFLLENBQUNBO1FBQ2hCOztJQUNKO0lBS0EsU0FBUzFDO1FBQ1BMLGlEQUNNLENBQUMsNkNBQ0ppRCxJQUFJLENBQUNSLENBQUFBO1lBQ0osTUFBTVMsVUFBVVQsU0FBUzdCLElBQUksQ0FBQ3NDLE9BQU87WUFDckM5QyxhQUFhOEM7UUFDZixHQUNDQyxLQUFLLENBQUNKLENBQUFBO1lBQ0xSLFFBQVFRLEtBQUssQ0FBQ0E7UUFDaEI7SUFDSjtJQUdBLHFCQUNFLDhEQUFDSztrREFBYzs7MEJBQ2IsOERBQUNDOzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswREFBYTswQkFDWG5ELFVBQVVvRCxLQUFLLENBQUMsR0FBRyxHQUFHQyxHQUFHLENBQUN2QyxDQUFBQSx1QkFDekIsOERBQUN3QztrRUFBYTs7MENBQ1osOERBQUNMOzBFQUFjOztrREFDYiw4REFBQ007d0NBRUNDLE9BQU87NENBQUVDLFVBQVU7NENBQVNDLFdBQVc7d0NBQVE7d0NBQy9DQyxLQUFLN0MsT0FBTVEsWUFBWSxDQUFDQyxHQUFHO3dDQUMzQnFDLEtBQUs5QyxPQUFNSCxTQUFTLENBQUNDLElBQUk7a0ZBSGY7Ozs7OztrREFLWiw4REFBQ2lEOztrREFBSS9DLE9BQU1ILFNBQVMsQ0FBQ0MsSUFBSTs7Ozs7Ozs7Ozs7OzBDQUUzQiw4REFBQ3FDOzBFQUFjOztrREFDYiw4REFBQ2E7Ozs0Q0FBRTs0Q0FBZWhELE9BQU1DLFdBQVcsQ0FBQ0MsSUFBSTs7Ozs7OztrREFDeEMsOERBQUM4Qzs7OzRDQUFFOzRDQUE4QmhELE9BQU1jLGNBQWMsQ0FBQ0MsZUFBZTs7Ozs7OztrREFDckUsOERBQUNrQzt3Q0FBa0NDLFNBQVMsSUFBTTdELHFCQUFxQlc7a0ZBQXJEO2tEQUE2RDs7Ozs7Ozs7Ozs7Ozt1QkFibkRBLE9BQU1tRCxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRFbkQ7R0FuSVNsRTtLQUFBQTtBQXFJVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub3BSYXRlZE1vdmllcy5qcz80NDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gJy4uL3NlcnZpY2VzL2F1dGguaGVhZGVycyc7XG5cbmZ1bmN0aW9uIFRvcFJhdGVkTW92aWVzKCkge1xuICBjb25zdCBbdG9wTW92aWVzLCBzZXRUb3BNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hUb3BNb3ZpZXMoKTtcbiAgfSwgW10pO1xuXG5cbiAgY29uc3QgaGFuZGxlQWRkVG9XYXRjaGxpc3QgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBhdXRoSGVhZGVyKClcblxuICAgIGNvbnN0IGRhdGEgPSB7ICAgLy9hbGwgZGF0YSBuZWVkZWQgZm9yIGRhdGFiYXNlXG4gICAgICB0aXRsZTogbW92aWVJZC50aXRsZVRleHQudGV4dCxcbiAgICAgIHJlbGVhc2VfeWVhcjogbW92aWUucmVsZWFzZVllYXIueWVhciArIFwiLTAxLTAxXCIsXG4gICAgICBkZXNjcmlwdGlvbjogbW92aWUucGxvdC5wbG90VGV4dC5wbGFpblRleHQsXG4gICAgICBpbWFnZTogbW92aWUucHJpbWFyeUltYWdlLnVybCxcbiAgICAgIHVzZXJfaWQ6IHN0YXRlLnVzZXIudXNlcl9pZCxcbiAgICAgIHVzZXJSYXRpbmc6IG1vdmllLnJhdGluZ3NTdW1tYXJ5LmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICAgIHRyYWlsZXJMaW5rOiB0cmFpbGVycyxcbiAgICAgIGFkZGVkX2F0OiBuZXcgRGF0ZSgpLFxuICAgICAgYWxwaGFiZXRpY19pZDogU3RyaW5nKG1vdmllSWQpLCAvL0FQSSdzIG1vdmllIElEIGZvciB0aGUgbW92aWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9hZGRfdG9fd2F0Y2hsaXN0LycsIGRhdGEsIHsgaGVhZGVycyB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGZldGNoRGF0YVRvV2F0Y2hsaXN0KCkgOyAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3YXRjaExpc3QnLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICB9XG4gICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH07XG4gIH07XG5cblxuXG5cbiAgZnVuY3Rpb24gZmV0Y2hUb3BNb3ZpZXMoKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0X3RvcF9tb3ZpZXMvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHJlc3BvbnNlLmRhdGEucmVzdWx0cztcbiAgICAgICAgc2V0VG9wTW92aWVzKHJlc3VsdHMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wLXJhdGVkLW1vdmllcyB0ZXh0LWNlbnRlcic+XG4gICAgICA8aDI+SGlnaGVzdCBSYXRlZCBNb3ZpZXM8L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT0nbW92aWUtZ3JpZCc+XG4gICAgICAgIHt0b3BNb3ZpZXMuc2xpY2UoMSwgOSkubWFwKG1vdmllID0+IChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtb3ZpZS1pdGVtJyBrZXk9e21vdmllLl9pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWUtY29udGVudCc+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ltZy1mbHVpZCdcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzIwMHB4JywgbWF4SGVpZ2h0OiAnMjAwcHgnIH19XG4gICAgICAgICAgICAgICAgc3JjPXttb3ZpZS5wcmltYXJ5SW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgIGFsdD17bW92aWUudGl0bGVUZXh0LnRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxoNT57bW92aWUudGl0bGVUZXh0LnRleHR9PC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllLWhvdmVyLWNvbnRlbnQnPlxuICAgICAgICAgICAgICA8cD5SZWxlYXNlIFllYXI6IHttb3ZpZS5yZWxlYXNlWWVhci55ZWFyfTwvcD5cbiAgICAgICAgICAgICAgPHA+Q3VycmVudCBSYXRpbmcgYnkgQXBwIFVzZXJzOiB7bW92aWUucmF0aW5nc1N1bW1hcnkuYWdncmVnYXRlUmF0aW5nfTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWN1c3RvbVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvV2F0Y2hsaXN0KG1vdmllKX0+QWRkIFRvIFdhdGNobGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4uYnRuLWN1c3RvbXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGNUQ1NztcbiAgY29sb3I6ICNDQkIyNkE7XG59XG5cbiAgICAgICAgLnRvcC1yYXRlZC1tb3ZpZXMge1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vdmllLWdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb3ZpZS1pdGVtIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb3ZpZS1jb250ZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAubW92aWUtaG92ZXItY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICAubW92aWUtaXRlbTpob3ZlciAubW92aWUtaG92ZXItY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubW92aWUtaXRlbSBpbWcge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wUmF0ZWRNb3ZpZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiYXV0aEhlYWRlciIsIlRvcFJhdGVkTW92aWVzIiwidG9wTW92aWVzIiwic2V0VG9wTW92aWVzIiwiZmV0Y2hUb3BNb3ZpZXMiLCJoYW5kbGVBZGRUb1dhdGNobGlzdCIsIm1vdmllSWQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoZWFkZXJzIiwiZGF0YSIsInRpdGxlIiwidGl0bGVUZXh0IiwidGV4dCIsInJlbGVhc2VfeWVhciIsIm1vdmllIiwicmVsZWFzZVllYXIiLCJ5ZWFyIiwiZGVzY3JpcHRpb24iLCJwbG90IiwicGxvdFRleHQiLCJwbGFpblRleHQiLCJpbWFnZSIsInByaW1hcnlJbWFnZSIsInVybCIsInVzZXJfaWQiLCJzdGF0ZSIsInVzZXIiLCJ1c2VyUmF0aW5nIiwicmF0aW5nc1N1bW1hcnkiLCJhZ2dyZWdhdGVSYXRpbmciLCJ0cmFpbGVyTGluayIsInRyYWlsZXJzIiwiYWRkZWRfYXQiLCJEYXRlIiwiYWxwaGFiZXRpY19pZCIsIlN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJmZXRjaERhdGFUb1dhdGNobGlzdCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJnZXQiLCJ0aGVuIiwicmVzdWx0cyIsImNhdGNoIiwiZGl2IiwiaDIiLCJ1bCIsInNsaWNlIiwibWFwIiwibGkiLCJpbWciLCJzdHlsZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwic3JjIiwiYWx0IiwiaDUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TopRatedMovies.js\n"));

/***/ })

});