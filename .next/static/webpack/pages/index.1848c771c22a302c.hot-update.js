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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [randomMovie, setRandomMovie] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // Add this state\n    const getRandomMovie = ()=>{\n        fetchRandomMovie();\n    };\n    const fetchRandomMovie = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8000/api/get_random_movie/\").then((response)=>{\n            const results = response.data.results;\n            const randomIndex = Math.floor(Math.random() * results.length);\n            setIsModalVisible(true); // Show the modal when random movie is fetched\n            setRandomMovie(results[randomIndex]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        className: \"jsx-5a82c0e4a4ff1829\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getRandomMovie,\n                className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"btn btn-custom p-2 mt-5 mb-1 btn-lg\",\n                children: \"Get Random Movie\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this),\n            isModalVisible && randomMovie && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"movie-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"modal-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"modal-header\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"jsx-5a82c0e4a4ff1829\",\n                                children: \"Your Random Movie Is:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"modal-body\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-5a82c0e4a4ff1829\",\n                                children: randomMovie.titleText.text\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"modal-footer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsModalVisible(false),\n                                className: \"jsx-5a82c0e4a4ff1829\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"text-custom text-left m-2\",\n                children: \"Find Modern Movies\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 15\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"flex-column justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"img-fluid\",\n                    src: _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"MovieMixer Logo\",\n                    width: 200,\n                    height: 200\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"text-custom m-2\",\n                children: \"Rediscover Classical Favorites\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"text-custom m-2\",\n                children: \"Get Personalized Recommendations\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/dashboard\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"btn btn-custom mt-4 m-2\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 74,\n                    columnNumber: 48\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/login\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 44\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/register\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Sign Up-It's Free!\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 76,\n                    columnNumber: 47\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-5a82c0e4a4ff1829\" + \" \" + \"text-custom m-2\",\n                children: \"Save and Share with Your Network\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-5a82c0e4a4ff1829\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"5a82c0e4a4ff1829\",\n                children: \".btn-custom.jsx-5a82c0e4a4ff1829{background-color:#1f5d57;color:#cbb26a}.text-left.jsx-5a82c0e4a4ff1829{text-align:left}.text-custom.jsx-5a82c0e4a4ff1829{color:#cbb26a;font-size:18px;font-weight:bold}.movie-modal.jsx-5a82c0e4a4ff1829{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;z-index:1000}.modal-content.jsx-5a82c0e4a4ff1829{background-color:white;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:0px 0px 10px rgba(0,0,0,.5);-moz-box-shadow:0px 0px 10px rgba(0,0,0,.5);box-shadow:0px 0px 10px rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.modal-header.jsx-5a82c0e4a4ff1829{margin-bottom:10px}.modal-footer.jsx-5a82c0e4a4ff1829{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.movie-info.jsx-5a82c0e4a4ff1829{background-color:#1f5d57;color:#cbb26a;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;margin-top:20px;text-align:center;width:80%;max-width:600px;height:auto}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"xIgm7xwBMrYNIIyCiJ8PkQD9tV0=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDMkI7QUFDWjtBQUNiO0FBQ1A7QUFFWCxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUMsUUFBUSxpQkFBaUI7SUFHOUUsTUFBTU8saUJBQWlCO1FBQ3JCQztJQUNGO0lBRUEsTUFBTUEsbUJBQW1CO1FBQ3ZCUCxpREFBUyxDQUFDLCtDQUNQUyxJQUFJLENBQUNDLENBQUFBO1lBQ0osTUFBTUMsVUFBVUQsU0FBU0UsSUFBSSxDQUFDRCxPQUFPO1lBQ3JDLE1BQU1FLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLTCxRQUFRTSxNQUFNO1lBQzdEWixrQkFBa0IsT0FBTyw4Q0FBOEM7WUFDdkVGLGVBQWVRLE9BQU8sQ0FBQ0UsWUFBWTtRQUNyQyxHQUNDSyxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQ0E7UUFDaEI7SUFDSjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxPQUFPO1lBQ1ZDLGlCQUFpQjtZQUNqQkMsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJDLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGdCQUFnQjtZQUNoQkMsWUFBWTtRQUNkOzs7MEJBRUksOERBQUNDO2dCQUF1REMsU0FBVTFCOzBEQUFoRDswQkFBZ0U7Ozs7OztZQUVqRkYsa0JBQWtCRiw2QkFDakIsOERBQUNtQjswREFBYzswQkFDYiw0RUFBQ0E7OERBQWM7O3NDQUNiLDhEQUFDQTtzRUFBYztzQ0FDZiw0RUFBQ1k7OzBDQUFHOzs7Ozs7Ozs7OztzQ0FFViw4REFBQ1o7c0VBQWM7c0NBQ2IsNEVBQUNhOzswQ0FBR2hDLFlBQVlpQyxTQUFTLENBQUNDLElBQUk7Ozs7Ozs7Ozs7O3NDQUVoQyw4REFBQ2Y7c0VBQWM7c0NBQ2YsNEVBQUNVO2dDQUFPQyxTQUFTLElBQU0zQixrQkFBa0I7OzBDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUszQyw4REFBQzZCOzBEQUFZOzBCQUE0Qjs7Ozs7OzBCQUUvQyw4REFBQ2I7MERBQWU7MEJBQ2QsNEVBQUN4QixtREFBS0E7b0JBQUN3QyxXQUFVO29CQUNmQyxLQUFLeEMsa0VBQWNBO29CQUNuQnlDLEtBQUk7b0JBQ0pDLE9BQU87b0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDUDswREFBWTswQkFBa0I7Ozs7OzswQkFFL0IsOERBQUNBOzBEQUFZOzBCQUFrQjs7Ozs7OzBCQUcvQiw4REFBQ3RDLGtEQUFJQTtnQkFBQzhDLE1BQUs7Z0JBQWFDLGNBQWM7MEJBQUMsNEVBQUNDOzhEQUFZOzhCQUEwQjs7Ozs7Ozs7Ozs7MEJBQzlFLDhEQUFDaEQsa0RBQUlBO2dCQUFDOEMsTUFBSztnQkFBU0MsY0FBYzswQkFBQyw0RUFBQ0M7OERBQVk7OEJBQXFCOzs7Ozs7Ozs7OzswQkFDckUsOERBQUNoRCxrREFBSUE7Z0JBQUM4QyxNQUFLO2dCQUFZQyxjQUFjOzBCQUFDLDRFQUFDQzs4REFBWTs4QkFBcUI7Ozs7Ozs7Ozs7OzBCQUN4RSw4REFBQ1Y7MERBQVk7MEJBQWtCOzs7Ozs7MEJBRWpDLDhEQUFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUw7R0F4SXNCNUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTW92aWVNaXhlckxvZ28gZnJvbSBcIi4uL2ltYWdlcy9Nb3ZpZU1peGVyTG9nby5wbmdcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtyYW5kb21Nb3ZpZSwgc2V0UmFuZG9tTW92aWVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBBZGQgdGhpcyBzdGF0ZVxuXG5cbiAgY29uc3QgZ2V0UmFuZG9tTW92aWUgPSAoKSA9PiB7XG4gICAgZmV0Y2hSYW5kb21Nb3ZpZSgpO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoUmFuZG9tTW92aWUgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldF9yYW5kb21fbW92aWUvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHJlc3BvbnNlLmRhdGEucmVzdWx0cztcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXN1bHRzLmxlbmd0aCk7XG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpOyAvLyBTaG93IHRoZSBtb2RhbCB3aGVuIHJhbmRvbSBtb3ZpZSBpcyBmZXRjaGVkXG4gICAgICAgIHNldFJhbmRvbU1vdmllKHJlc3VsdHNbcmFuZG9tSW5kZXhdKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vaWQvMTc3Mjc0NzE3L3Bob3RvL2Fic3RyYWN0LW11bHRpbWVkaWEtYmFja2dyb3VuZC1jb21wb3NlZC1vZi1tYW55LWltYWdlcy13aXRoLWNvcHkuanBnP3M9NjEyeDYxMiZ3PTAmaz0yMCZjPVYwRzRaLWdsTkt6dUkxWnZRTU9iaTNfMFB1eFVIT3F6dXI3ZDVMWEIyOVU9XCIpJyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfX0+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWN1c3RvbSBwLTIgbXQtNSBtYi0xIGJ0bi1sZ1wiIG9uQ2xpY2s9IHtnZXRSYW5kb21Nb3ZpZX0+R2V0IFJhbmRvbSBNb3ZpZTwvYnV0dG9uPlxuICAgICAgICBcbiAgICAgICAge2lzTW9kYWxWaXNpYmxlICYmIHJhbmRvbU1vdmllICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDI+WW91ciBSYW5kb20gTW92aWUgSXM6PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPHA+e3JhbmRvbU1vdmllLnRpdGxlVGV4dC50ZXh0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKX1cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20gdGV4dC1sZWZ0IG0tMlwiPkZpbmQgTW9kZXJuIE1vdmllczwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJ30+XG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICBzcmM9e01vdmllTWl4ZXJMb2dvfVxuICAgICAgICAgICAgYWx0PVwiTW92aWVNaXhlciBMb2dvXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jdXN0b20gbS0yXCI+UmVkaXNjb3ZlciBDbGFzc2ljYWwgRmF2b3JpdGVzPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY3VzdG9tIG0tMlwiPkdldCBQZXJzb25hbGl6ZWQgUmVjb21tZW5kYXRpb25zPC9wPlxuXG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIiBsZWdhY3lCZWhhdmlvcj48YSBjbGFzc05hbWU9XCJidG4gYnRuLWN1c3RvbSBtdC00IG0tMlwiPkRhc2hib2FyZDwvYT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBsZWdhY3lCZWhhdmlvcj48YSBjbGFzc05hbWU9XCJidG4gYnRuLWN1c3RvbSBtLTJcIj5Mb2dpbjwvYT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIiBsZWdhY3lCZWhhdmlvcj48YSBjbGFzc05hbWU9XCJidG4gYnRuLWN1c3RvbSBtLTJcIj5TaWduIFVwLUl0J3MgRnJlZSE8L2E+PC9MaW5rPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbSBtLTJcIj5TYXZlIGFuZCBTaGFyZSB3aXRoIFlvdXIgTmV0d29yazwvcD5cblxuICAgICAgPGJyPjwvYnI+XG4gICAgICB7LyogPExpbmsgaHJlZj1cIi9hYm91dFwiIGxlZ2FjeUJlaGF2aW9yPjxhIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPkFib3V0PC9hPjwvTGluaz4gKi99XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgLmJ0bi1jdXN0b217XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjVENTc7XG4gICAgICAgIGNvbG9yOiAjQ0JCMjZBO1xuICAgICAgfVxuICAgICAgLnRleHQtbGVmdHtcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0XG4gICAgICB9XG4gICAgICAudGV4dC1jdXN0b20ge1xuICAgICAgICBjb2xvcjogI0NCQjI2QTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5tb3ZpZS1tb2RhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgfVxuICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBEaXNwbGF5IHRoZSBjb250ZW50IGluIGEgY29sdW1uIGxheW91dCAqL1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgY29udGVudCBob3Jpem9udGFsbHkgKi9cbiAgICAgIH1cbiAgXG4gICAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogQWRkIHNwYWNlIGJlbG93IGhlYWRlciAqL1xuICAgICAgfVxuICBcbiAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGQgc3BhY2UgYWJvdmUgZm9vdGVyICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubW92aWUtaW5mbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjVENTc7IC8qIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciAqL1xuICAgICAgICBjb2xvcjogI0NCQjI2QTsgLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7IC8qIEFkZCBzb21lIHBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogQWRkIHJvdW5kZWQgY29ybmVycyAqL1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGQgc3BhY2luZyBmcm9tIHRoZSBidXR0b24gKi9cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIHRleHQgKi9cbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICBcbiAgICAgIFxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIFxuICAgIDwvZGl2PlxuICApO1xuICB9Il0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIk1vdmllTWl4ZXJMb2dvIiwidXNlU3RhdGUiLCJheGlvcyIsIlBhZ2UiLCJyYW5kb21Nb3ZpZSIsInNldFJhbmRvbU1vdmllIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsImdldFJhbmRvbU1vdmllIiwiZmV0Y2hSYW5kb21Nb3ZpZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJkYXRhIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsInAiLCJ0aXRsZVRleHQiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});