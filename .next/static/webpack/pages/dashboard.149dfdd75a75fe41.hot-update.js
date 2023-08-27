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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TopRatedMovies() {\n    _s();\n    const [topMovies, setTopMovies] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchTopMovies();\n    }, []);\n    const handleAddToWatchlist = async (movieId)=>{\n        const token = localStorage.getItem(\"access_token\");\n        const headers = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        const data = {\n            title: movie.titleText.text,\n            release_year: movie.releaseYear.year + \"-01-01\",\n            description: movie.plot.plotText.plainText,\n            image: movie.primaryImage.url,\n            user_id: state.user.user_id,\n            userRating: movie.ratingsSummary.aggregateRating,\n            trailerLink: trailers,\n            added_at: new Date(),\n            alphabetic_id: String(movieId)\n        };\n        console.log(data);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://127.0.0.1:8000/api/add_to_watchlist/\", data, {\n                headers\n            });\n            console.log(response);\n            fetchDataToWatchlist();\n            localStorage.setItem(\"watchList\", JSON.stringify(response.data));\n        } catch (error) {\n            console.error(error);\n        }\n        ;\n    };\n    function fetchTopMovies() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/get_top_movies/\").then((response)=>{\n            const results = response.data.results;\n            setTopMovies(results);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"top-rated-movies text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"jsx-ea2507d0cd5ed3c7\",\n                children: \"Highest Rated Movies\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"movie-grid\",\n                children: topMovies.slice(1, 9).map((movie1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"movie-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"movie-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        style: {\n                                            maxWidth: \"200px\",\n                                            maxHeight: \"200px\"\n                                        },\n                                        src: movie1.primaryImage.url,\n                                        alt: movie1.titleText.text,\n                                        className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"img-fluid\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"jsx-ea2507d0cd5ed3c7\",\n                                        children: movie1.titleText.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"movie-hover-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-ea2507d0cd5ed3c7\",\n                                        children: [\n                                            \"Release Year: \",\n                                            movie1.releaseYear.year\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-ea2507d0cd5ed3c7\",\n                                        children: [\n                                            \"Current Rating by App Users: \",\n                                            movie1.ratingsSummary.aggregateRating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleAddToWatchlist(movie1),\n                                        className: \"jsx-ea2507d0cd5ed3c7\" + \" \" + \"btn btn-custom\",\n                                        children: \"Add To Watchlist\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, movie1._id, true, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ea2507d0cd5ed3c7\",\n                children: \".btn-custom.jsx-ea2507d0cd5ed3c7{background-color:#1f5d57;color:#cbb26a}.top-rated-movies.jsx-ea2507d0cd5ed3c7{}.movie-grid.jsx-ea2507d0cd5ed3c7{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;list-style:none;padding:0;margin:0}.movie-item.jsx-ea2507d0cd5ed3c7{position:relative;border:10px solid transparent;padding:0px;background-color:black;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;text-align:center;-webkit-box-shadow:0px 0px 5px rgba(0,0,0,.2);-moz-box-shadow:0px 0px 5px rgba(0,0,0,.2);box-shadow:0px 0px 5px rgba(0,0,0,.2)}.movie-content.jsx-ea2507d0cd5ed3c7{position:relative}.movie-hover-content.jsx-ea2507d0cd5ed3c7{display:none;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.8);color:white;padding:10px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:opacity.3s;-moz-transition:opacity.3s;-o-transition:opacity.3s;transition:opacity.3s}.movie-item.jsx-ea2507d0cd5ed3c7:hover .movie-hover-content.jsx-ea2507d0cd5ed3c7{display:block}.movie-item.jsx-ea2507d0cd5ed3c7 img.jsx-ea2507d0cd5ed3c7{margin-bottom:10px}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/components/TopRatedMovies.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(TopRatedMovies, \"dXsQZ+sPI8bl1rn4PKgW8faXb2Y=\");\n_c = TopRatedMovies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopRatedMovies);\nvar _c;\n$RefreshReg$(_c, \"TopRatedMovies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub3BSYXRlZE1vdmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDd0I7QUFFbEQsU0FBU0s7O0lBQ1AsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1JNO0lBQ0YsR0FBRyxFQUFFO0lBR0wsTUFBTUMsdUJBQXVCLE9BQU9DO1FBQ2xDLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztRQUNuQyxNQUFNQyxVQUFVVixrRUFBVUE7UUFFMUIsTUFBTVcsT0FBTztZQUNYQyxPQUFPQyxNQUFNQyxTQUFTLENBQUNDLElBQUk7WUFDM0JDLGNBQWNILE1BQU1JLFdBQVcsQ0FBQ0MsSUFBSSxHQUFHO1lBQ3ZDQyxhQUFhTixNQUFNTyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsU0FBUztZQUMxQ0MsT0FBT1YsTUFBTVcsWUFBWSxDQUFDQyxHQUFHO1lBQzdCQyxTQUFTQyxNQUFNQyxJQUFJLENBQUNGLE9BQU87WUFDM0JHLFlBQVloQixNQUFNaUIsY0FBYyxDQUFDQyxlQUFlO1lBQ2hEQyxhQUFhQztZQUNiQyxVQUFVLElBQUlDO1lBQ2RDLGVBQWVDLE9BQU8vQjtRQUN4QjtRQUNBZ0MsUUFBUUMsR0FBRyxDQUFDNUI7UUFDWixJQUFJO1lBQ0YsTUFBTTZCLFdBQVcsTUFBTXpDLGtEQUFVLENBQUMsK0NBQStDWSxNQUFNO2dCQUFFRDtZQUFRO1lBQy9GNEIsUUFBUUMsR0FBRyxDQUFDQztZQUNaRTtZQUE4QmxDLGFBQWFtQyxPQUFPLENBQUMsYUFBYUMsS0FBS0MsU0FBUyxDQUFDTCxTQUFTN0IsSUFBSTtRQUM5RixFQUNBLE9BQU1tQyxPQUFPO1lBQ1hSLFFBQVFRLEtBQUssQ0FBQ0E7UUFDaEI7O0lBQ0o7SUFLQSxTQUFTMUM7UUFDUEwsaURBQ00sQ0FBQyw2Q0FDSmlELElBQUksQ0FBQ1IsQ0FBQUE7WUFDSixNQUFNUyxVQUFVVCxTQUFTN0IsSUFBSSxDQUFDc0MsT0FBTztZQUNyQzlDLGFBQWE4QztRQUNmLEdBQ0NDLEtBQUssQ0FBQ0osQ0FBQUE7WUFDTFIsUUFBUVEsS0FBSyxDQUFDQTtRQUNoQjtJQUNKO0lBR0EscUJBQ0UsOERBQUNLO2tEQUFjOzswQkFDYiw4REFBQ0M7OzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBEQUFhOzBCQUNYbkQsVUFBVW9ELEtBQUssQ0FBQyxHQUFHLEdBQUdDLEdBQUcsQ0FBQzFDLENBQUFBLHVCQUN6Qiw4REFBQzJDO2tFQUFhOzswQ0FDWiw4REFBQ0w7MEVBQWM7O2tEQUNiLDhEQUFDTTt3Q0FFQ0MsT0FBTzs0Q0FBRUMsVUFBVTs0Q0FBU0MsV0FBVzt3Q0FBUTt3Q0FDL0NDLEtBQUtoRCxPQUFNVyxZQUFZLENBQUNDLEdBQUc7d0NBQzNCcUMsS0FBS2pELE9BQU1DLFNBQVMsQ0FBQ0MsSUFBSTtrRkFIZjs7Ozs7O2tEQUtaLDhEQUFDZ0Q7O2tEQUFJbEQsT0FBTUMsU0FBUyxDQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7MENBRTNCLDhEQUFDb0M7MEVBQWM7O2tEQUNiLDhEQUFDYTs7OzRDQUFFOzRDQUFlbkQsT0FBTUksV0FBVyxDQUFDQyxJQUFJOzs7Ozs7O2tEQUN4Qyw4REFBQzhDOzs7NENBQUU7NENBQThCbkQsT0FBTWlCLGNBQWMsQ0FBQ0MsZUFBZTs7Ozs7OztrREFDckUsOERBQUNrQzt3Q0FBa0NDLFNBQVMsSUFBTTdELHFCQUFxQlE7a0ZBQXJEO2tEQUE2RDs7Ozs7Ozs7Ozs7Ozt1QkFibkRBLE9BQU1zRCxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRFbkQ7R0FuSVNsRTtLQUFBQTtBQXFJVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub3BSYXRlZE1vdmllcy5qcz80NDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gJy4uL3NlcnZpY2VzL2F1dGguaGVhZGVycyc7XG5cbmZ1bmN0aW9uIFRvcFJhdGVkTW92aWVzKCkge1xuICBjb25zdCBbdG9wTW92aWVzLCBzZXRUb3BNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hUb3BNb3ZpZXMoKTtcbiAgfSwgW10pO1xuXG5cbiAgY29uc3QgaGFuZGxlQWRkVG9XYXRjaGxpc3QgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBhdXRoSGVhZGVyKClcblxuICAgIGNvbnN0IGRhdGEgPSB7ICAgLy9hbGwgZGF0YSBuZWVkZWQgZm9yIGRhdGFiYXNlXG4gICAgICB0aXRsZTogbW92aWUudGl0bGVUZXh0LnRleHQsXG4gICAgICByZWxlYXNlX3llYXI6IG1vdmllLnJlbGVhc2VZZWFyLnllYXIgKyBcIi0wMS0wMVwiLFxuICAgICAgZGVzY3JpcHRpb246IG1vdmllLnBsb3QucGxvdFRleHQucGxhaW5UZXh0LFxuICAgICAgaW1hZ2U6IG1vdmllLnByaW1hcnlJbWFnZS51cmwsXG4gICAgICB1c2VyX2lkOiBzdGF0ZS51c2VyLnVzZXJfaWQsXG4gICAgICB1c2VyUmF0aW5nOiBtb3ZpZS5yYXRpbmdzU3VtbWFyeS5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgICB0cmFpbGVyTGluazogdHJhaWxlcnMsXG4gICAgICBhZGRlZF9hdDogbmV3IERhdGUoKSxcbiAgICAgIGFscGhhYmV0aWNfaWQ6IFN0cmluZyhtb3ZpZUlkKSwgLy9BUEkncyBtb3ZpZSBJRCBmb3IgdGhlIG1vdmllXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYWRkX3RvX3dhdGNobGlzdC8nLCBkYXRhLCB7IGhlYWRlcnMgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBmZXRjaERhdGFUb1dhdGNobGlzdCgpIDsgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2F0Y2hMaXN0JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgfVxuICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9O1xuICB9O1xuXG5cblxuXG4gIGZ1bmN0aW9uIGZldGNoVG9wTW92aWVzKCkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldF90b3BfbW92aWVzLycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXNwb25zZS5kYXRhLnJlc3VsdHM7XG4gICAgICAgIHNldFRvcE1vdmllcyhyZXN1bHRzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3RvcC1yYXRlZC1tb3ZpZXMgdGV4dC1jZW50ZXInPlxuICAgICAgPGgyPkhpZ2hlc3QgUmF0ZWQgTW92aWVzPC9oMj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J21vdmllLWdyaWQnPlxuICAgICAgICB7dG9wTW92aWVzLnNsaWNlKDEsIDkpLm1hcChtb3ZpZSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbW92aWUtaXRlbScga2V5PXttb3ZpZS5faWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vdmllLWNvbnRlbnQnPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctZmx1aWQnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcyMDBweCcsIG1heEhlaWdodDogJzIwMHB4JyB9fVxuICAgICAgICAgICAgICAgIHNyYz17bW92aWUucHJpbWFyeUltYWdlLnVybH1cbiAgICAgICAgICAgICAgICBhbHQ9e21vdmllLnRpdGxlVGV4dC50ZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aDU+e21vdmllLnRpdGxlVGV4dC50ZXh0fTwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb3ZpZS1ob3Zlci1jb250ZW50Jz5cbiAgICAgICAgICAgICAgPHA+UmVsZWFzZSBZZWFyOiB7bW92aWUucmVsZWFzZVllYXIueWVhcn08L3A+XG4gICAgICAgICAgICAgIDxwPkN1cnJlbnQgUmF0aW5nIGJ5IEFwcCBVc2Vyczoge21vdmllLnJhdGluZ3NTdW1tYXJ5LmFnZ3JlZ2F0ZVJhdGluZ308L3A+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b21cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb1dhdGNobGlzdChtb3ZpZSl9PkFkZCBUbyBXYXRjaGxpc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuLmJ0bi1jdXN0b217XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjVENTc7XG4gIGNvbG9yOiAjQ0JCMjZBO1xufVxuXG4gICAgICAgIC50b3AtcmF0ZWQtbW92aWVzIHtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb3ZpZS1ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubW92aWUtaXRlbSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICAubW92aWUtY29udGVudCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vdmllLWhvdmVyLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vdmllLWl0ZW06aG92ZXIgLm1vdmllLWhvdmVyLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vdmllLWl0ZW0gaW1nIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFJhdGVkTW92aWVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImF1dGhIZWFkZXIiLCJUb3BSYXRlZE1vdmllcyIsInRvcE1vdmllcyIsInNldFRvcE1vdmllcyIsImZldGNoVG9wTW92aWVzIiwiaGFuZGxlQWRkVG9XYXRjaGxpc3QiLCJtb3ZpZUlkIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsImRhdGEiLCJ0aXRsZSIsIm1vdmllIiwidGl0bGVUZXh0IiwidGV4dCIsInJlbGVhc2VfeWVhciIsInJlbGVhc2VZZWFyIiwieWVhciIsImRlc2NyaXB0aW9uIiwicGxvdCIsInBsb3RUZXh0IiwicGxhaW5UZXh0IiwiaW1hZ2UiLCJwcmltYXJ5SW1hZ2UiLCJ1cmwiLCJ1c2VyX2lkIiwic3RhdGUiLCJ1c2VyIiwidXNlclJhdGluZyIsInJhdGluZ3NTdW1tYXJ5IiwiYWdncmVnYXRlUmF0aW5nIiwidHJhaWxlckxpbmsiLCJ0cmFpbGVycyIsImFkZGVkX2F0IiwiRGF0ZSIsImFscGhhYmV0aWNfaWQiLCJTdHJpbmciLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJwb3N0IiwiZmV0Y2hEYXRhVG9XYXRjaGxpc3QiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiZ2V0IiwidGhlbiIsInJlc3VsdHMiLCJjYXRjaCIsImRpdiIsImgyIiwidWwiLCJzbGljZSIsIm1hcCIsImxpIiwiaW1nIiwic3R5bGUiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInNyYyIsImFsdCIsImg1IiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TopRatedMovies.js\n"));

/***/ })

});