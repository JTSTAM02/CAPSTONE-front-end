"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [randomMovie, setRandomMovie] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // Add this state\n    const getRandomMovie = ()=>{\n        fetchRandomMovie();\n    };\n    const fetchRandomMovie = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8000/api/get_random_movie/\").then((response)=>{\n            const results = response.data.results;\n            const randomIndex = Math.floor(Math.random() * results.length);\n            setIsModalVisible(true); // Show the modal when random movie is fetched\n            setRandomMovie(results[randomIndex]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        className: \"jsx-ce6fa70f6a67bbc3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getRandomMovie,\n                className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"btn btn-custom p-2 mt-5 mb-1 btn-lg\",\n                children: \"Get Random Movie\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            isModalVisible && randomMovie && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"movie-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"modal-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"modal-header\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"jsx-ce6fa70f6a67bbc3\",\n                                children: \"Your Random Movie Is:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"modal-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        display: \"flex\",\n                                        fontSize: \"100px\",\n                                        fontWeight: \"bold\"\n                                    },\n                                    className: \"jsx-ce6fa70f6a67bbc3\",\n                                    children: randomMovie.titleText.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-ce6fa70f6a67bbc3\",\n                                    children: [\n                                        \"Year of Release: \",\n                                        randomMovie.releaseYear.year\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: randomMovie.primaryImage.url,\n                                    alt: \"Movie Poster\",\n                                    style: {\n                                        maxWidth: \"200px\",\n                                        maxHeight: \"200px\"\n                                    },\n                                    className: \"jsx-ce6fa70f6a67bbc3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-ce6fa70f6a67bbc3\",\n                                    children: randomMovie.primaryImage.caption.plainText\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"modal-footer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsModalVisible(false),\n                                className: \"jsx-ce6fa70f6a67bbc3\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"img-fluid\",\n                    src: _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"MovieMixer Logo\",\n                    width: 200,\n                    height: 200\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/dashboard\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"btn btn-custom mt-4 m-2\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 74,\n                    columnNumber: 48\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/login\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 44\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/register\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Sign Up-It's Free!\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 76,\n                    columnNumber: 47\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-ce6fa70f6a67bbc3\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ce6fa70f6a67bbc3\",\n                children: \".btn-custom.jsx-ce6fa70f6a67bbc3{background-color:#1f5d57;color:#cbb26a}.text-custom.jsx-ce6fa70f6a67bbc3{color:#cbb26a;font-size:18px;font-weight:bold}.movie-modal.jsx-ce6fa70f6a67bbc3{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;z-index:1000}.modal-content.jsx-ce6fa70f6a67bbc3{background-color:white;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:0px 0px 10px rgba(0,0,0,.5);-moz-box-shadow:0px 0px 10px rgba(0,0,0,.5);box-shadow:0px 0px 10px rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.modal-header.jsx-ce6fa70f6a67bbc3{margin-bottom:10px}.modal-footer.jsx-ce6fa70f6a67bbc3{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.movie-info.jsx-ce6fa70f6a67bbc3{background-color:#1f5d57;color:#cbb26a;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;margin-top:20px;text-align:center;width:80%;max-width:600px;height:auto}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"xIgm7xwBMrYNIIyCiJ8PkQD9tV0=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDMkI7QUFDWjtBQUViO0FBQ1A7QUFFWCxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUMsUUFBUSxpQkFBaUI7SUFHOUUsTUFBTU8saUJBQWlCO1FBQ3JCQztJQUNGO0lBRUEsTUFBTUEsbUJBQW1CO1FBQ3ZCUCxpREFBUyxDQUFDLCtDQUNQUyxJQUFJLENBQUNDLENBQUFBO1lBQ0osTUFBTUMsVUFBVUQsU0FBU0UsSUFBSSxDQUFDRCxPQUFPO1lBQ3JDLE1BQU1FLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLTCxRQUFRTSxNQUFNO1lBQzdEWixrQkFBa0IsT0FBTyw4Q0FBOEM7WUFDdkVGLGVBQWVRLE9BQU8sQ0FBQ0UsWUFBWTtRQUNyQyxHQUNDSyxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQ0E7UUFDaEI7SUFDSjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxPQUFPO1lBQ1ZDLGlCQUFpQjtZQUNqQkMsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJDLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGdCQUFnQjtZQUNoQkMsWUFBWTtRQUNkOzs7MEJBRUksOERBQUNDO2dCQUF1REMsU0FBVTFCOzBEQUFoRDswQkFBZ0U7Ozs7OztZQUVqRkYsa0JBQWtCRiw2QkFDakIsOERBQUNtQjswREFBYzswQkFDYiw0RUFBQ0E7OERBQWM7O3NDQUNiLDhEQUFDQTtzRUFBYztzQ0FDZiw0RUFBQ1k7OzBDQUFHOzs7Ozs7Ozs7OztzQ0FFViw4REFBQ1o7c0VBQWM7OzhDQUNiLDhEQUFDYTtvQ0FBRVosT0FBTzt3Q0FBRUssU0FBUzt3Q0FBUVEsVUFBVTt3Q0FBU0MsWUFBWTtvQ0FBTTs7OENBQUlsQyxZQUFZbUMsU0FBUyxDQUFDQyxJQUFJOzs7Ozs7OENBQ2hHLDhEQUFDSjs7O3dDQUFFO3dDQUFrQmhDLFlBQVlxQyxXQUFXLENBQUNDLElBQUk7Ozs7Ozs7OENBQ2pELDhEQUFDQztvQ0FBSUMsS0FBS3hDLFlBQVl5QyxZQUFZLENBQUNDLEdBQUc7b0NBQUVDLEtBQUk7b0NBQWV2QixPQUFPO3dDQUFDd0IsVUFBVTt3Q0FBU0MsV0FBVztvQ0FBTzs7Ozs7Ozs4Q0FDeEcsOERBQUNiOzs4Q0FBR2hDLFlBQVl5QyxZQUFZLENBQUNLLE9BQU8sQ0FBQ0MsU0FBUzs7Ozs7Ozs7Ozs7O3NDQUVoRCw4REFBQzVCO3NFQUFjO3NDQUNmLDRFQUFDVTtnQ0FBT0MsU0FBUyxJQUFNM0Isa0JBQWtCOzswQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNL0MsOERBQUNnQjswREFBYzswQkFDYiw0RUFBQ3hCLG1EQUFLQTtvQkFBQ3FELFdBQVU7b0JBQ2ZSLEtBQUs1QyxrRUFBY0E7b0JBQ25CK0MsS0FBSTtvQkFDSk0sT0FBTztvQkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7MEJBS2QsOERBQUN4RCxrREFBSUE7Z0JBQUN5RCxNQUFLO2dCQUFhQyxjQUFjOzBCQUFDLDRFQUFDQzs4REFBWTs4QkFBMEI7Ozs7Ozs7Ozs7OzBCQUM5RSw4REFBQzNELGtEQUFJQTtnQkFBQ3lELE1BQUs7Z0JBQVNDLGNBQWM7MEJBQUMsNEVBQUNDOzhEQUFZOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBQ3JFLDhEQUFDM0Qsa0RBQUlBO2dCQUFDeUQsTUFBSztnQkFBWUMsY0FBYzswQkFBQyw0RUFBQ0M7OERBQVk7OEJBQXFCOzs7Ozs7Ozs7OzswQkFFMUUsOERBQUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQThETDtHQW5Jc0J2RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBNb3ZpZU1peGVyTG9nbyBmcm9tIFwiLi4vaW1hZ2VzL01vdmllTWl4ZXJMb2dvLnBuZ1wiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbcmFuZG9tTW92aWUsIHNldFJhbmRvbU1vdmllXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gQWRkIHRoaXMgc3RhdGVcblxuXG4gIGNvbnN0IGdldFJhbmRvbU1vdmllID0gKCkgPT4ge1xuICAgIGZldGNoUmFuZG9tTW92aWUoKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFJhbmRvbU1vdmllID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXRfcmFuZG9tX21vdmllLycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXNwb25zZS5kYXRhLnJlc3VsdHM7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzdWx0cy5sZW5ndGgpO1xuICAgICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTsgLy8gU2hvdyB0aGUgbW9kYWwgd2hlbiByYW5kb20gbW92aWUgaXMgZmV0Y2hlZFxuICAgICAgICBzZXRSYW5kb21Nb3ZpZShyZXN1bHRzW3JhbmRvbUluZGV4XSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzE3NzI3NDcxNy9waG90by9hYnN0cmFjdC1tdWx0aW1lZGlhLWJhY2tncm91bmQtY29tcG9zZWQtb2YtbWFueS1pbWFnZXMtd2l0aC1jb3B5LmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz1WMEc0Wi1nbE5LenVJMVp2UU1PYmkzXzBQdXhVSE9xenVyN2Q1TFhCMjlVPVwiKScsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH19PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b20gcC0yIG10LTUgbWItMSBidG4tbGdcIiBvbkNsaWNrPSB7Z2V0UmFuZG9tTW92aWV9PkdldCBSYW5kb20gTW92aWU8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIHtpc01vZGFsVmlzaWJsZSAmJiByYW5kb21Nb3ZpZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgyPllvdXIgUmFuZG9tIE1vdmllIElzOjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZm9udFNpemU6IFwiMTAwcHhcIiwgZm9udFdlaWdodDogJ2JvbGQnfX0+e3JhbmRvbU1vdmllLnRpdGxlVGV4dC50ZXh0fTwvcD5cbiAgICAgICAgICA8cD5ZZWFyIG9mIFJlbGVhc2U6IHtyYW5kb21Nb3ZpZS5yZWxlYXNlWWVhci55ZWFyfTwvcD5cbiAgICAgICAgICA8aW1nIHNyYz17cmFuZG9tTW92aWUucHJpbWFyeUltYWdlLnVybH0gYWx0PVwiTW92aWUgUG9zdGVyXCIgc3R5bGU9e3ttYXhXaWR0aDogJzIwMHB4JywgbWF4SGVpZ2h0OiAnMjAwcHgnfX0+PC9pbWc+XG4gICAgICAgICAgPHA+e3JhbmRvbU1vdmllLnByaW1hcnlJbWFnZS5jYXB0aW9uLnBsYWluVGV4dH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKX0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbil9XG4gXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICBzcmM9e01vdmllTWl4ZXJMb2dvfVxuICAgICAgICAgICAgICBhbHQ9XCJNb3ZpZU1peGVyIExvZ29cIlxuICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCIgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b20gbXQtNCBtLTJcIj5EYXNoYm9hcmQ8L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b20gbS0yXCI+TG9naW48L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCIgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b20gbS0yXCI+U2lnbiBVcC1JdCdzIEZyZWUhPC9hPjwvTGluaz5cblxuICAgICAgPGJyPjwvYnI+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgLmJ0bi1jdXN0b217XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjVENTc7XG4gICAgICAgIGNvbG9yOiAjQ0JCMjZBO1xuICAgICAgfVxuICAgICAgXG4gICAgICAudGV4dC1jdXN0b20ge1xuICAgICAgICBjb2xvcjogI0NCQjI2QTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5tb3ZpZS1tb2RhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgfVxuICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICBcbiAgICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBBZGQgc3BhY2UgYmVsb3cgaGVhZGVyICovXG4gICAgICB9XG4gIFxuICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IC8qIEFkZCBzcGFjZSBhYm92ZSBmb290ZXIgKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5tb3ZpZS1pbmZvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFGNUQ1NzsgLyogU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXG4gICAgICAgIGNvbG9yOiAjQ0JCMjZBOyAvKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cbiAgICAgICAgcGFkZGluZzogMjBweDsgLyogQWRkIHNvbWUgcGFkZGluZyBmb3Igc3BhY2luZyAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBBZGQgcm91bmRlZCBjb3JuZXJzICovXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IC8qIEFkZCBzcGFjaW5nIGZyb20gdGhlIGJ1dHRvbiAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgdGV4dCAqL1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gIFxuICAgICAgXG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgXG4gICAgPC9kaXY+XG4gICk7XG4gIH0iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiTW92aWVNaXhlckxvZ28iLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUGFnZSIsInJhbmRvbU1vdmllIiwic2V0UmFuZG9tTW92aWUiLCJpc01vZGFsVmlzaWJsZSIsInNldElzTW9kYWxWaXNpYmxlIiwiZ2V0UmFuZG9tTW92aWUiLCJmZXRjaFJhbmRvbU1vdmllIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicmVzdWx0cyIsImRhdGEiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYnV0dG9uIiwib25DbGljayIsImgyIiwicCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRpdGxlVGV4dCIsInRleHQiLCJyZWxlYXNlWWVhciIsInllYXIiLCJpbWciLCJzcmMiLCJwcmltYXJ5SW1hZ2UiLCJ1cmwiLCJhbHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNhcHRpb24iLCJwbGFpblRleHQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});