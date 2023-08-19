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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [randomMovie, setRandomMovie] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // Add this state\n    const getRandomMovie = ()=>{\n        fetchRandomMovie();\n    };\n    const fetchRandomMovie = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8000/api/get_random_movie/\").then((response)=>{\n            const results = response.data.results;\n            const randomIndex = Math.floor(Math.random() * results.length);\n            setIsModalVisible(true); // Show the modal when random movie is fetched\n            setRandomMovie(results[randomIndex]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        className: \"jsx-ce6fa70f6a67bbc3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getRandomMovie,\n                className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"btn btn-custom p-2 mt-5 mb-1 btn-lg\",\n                children: \"Get Random Movie\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            isModalVisible && randomMovie && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"movie-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"modal-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"modal-header\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"jsx-ce6fa70f6a67bbc3\",\n                                children: \"Your Random Movie Is:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"modal-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-ce6fa70f6a67bbc3\",\n                                    children: randomMovie.titleText.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-ce6fa70f6a67bbc3\",\n                                    children: [\n                                        \"Year of Release: \",\n                                        randomMovie.releaseYear.year\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: randomMovie.primaryImage.url,\n                                    alt: \"Movie Poster\",\n                                    style: {\n                                        maxWidth: \"200px\",\n                                        maxHeight: \"200px\"\n                                    },\n                                    className: \"jsx-ce6fa70f6a67bbc3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-ce6fa70f6a67bbc3\",\n                                    children: randomMovie.primaryImage.caption.plainText\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 11\n                                }, this),\n                                \" #Caption\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"modal-footer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsModalVisible(false),\n                                className: \"jsx-ce6fa70f6a67bbc3\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"img-fluid\",\n                    src: _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"MovieMixer Logo\",\n                    width: 200,\n                    height: 200\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/dashboard\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"btn btn-custom mt-4 m-2\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 74,\n                    columnNumber: 48\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/login\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 44\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/register\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-ce6fa70f6a67bbc3\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Sign Up-It's Free!\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 76,\n                    columnNumber: 47\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-ce6fa70f6a67bbc3\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ce6fa70f6a67bbc3\",\n                children: \".btn-custom.jsx-ce6fa70f6a67bbc3{background-color:#1f5d57;color:#cbb26a}.text-custom.jsx-ce6fa70f6a67bbc3{color:#cbb26a;font-size:18px;font-weight:bold}.movie-modal.jsx-ce6fa70f6a67bbc3{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;z-index:1000}.modal-content.jsx-ce6fa70f6a67bbc3{background-color:white;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:0px 0px 10px rgba(0,0,0,.5);-moz-box-shadow:0px 0px 10px rgba(0,0,0,.5);box-shadow:0px 0px 10px rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.modal-header.jsx-ce6fa70f6a67bbc3{margin-bottom:10px}.modal-footer.jsx-ce6fa70f6a67bbc3{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.movie-info.jsx-ce6fa70f6a67bbc3{background-color:#1f5d57;color:#cbb26a;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;margin-top:20px;text-align:center;width:80%;max-width:600px;height:auto}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"xIgm7xwBMrYNIIyCiJ8PkQD9tV0=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDMkI7QUFDWjtBQUViO0FBQ1A7QUFFWCxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUMsUUFBUSxpQkFBaUI7SUFHOUUsTUFBTU8saUJBQWlCO1FBQ3JCQztJQUNGO0lBRUEsTUFBTUEsbUJBQW1CO1FBQ3ZCUCxpREFBUyxDQUFDLCtDQUNQUyxJQUFJLENBQUNDLENBQUFBO1lBQ0osTUFBTUMsVUFBVUQsU0FBU0UsSUFBSSxDQUFDRCxPQUFPO1lBQ3JDLE1BQU1FLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLTCxRQUFRTSxNQUFNO1lBQzdEWixrQkFBa0IsT0FBTyw4Q0FBOEM7WUFDdkVGLGVBQWVRLE9BQU8sQ0FBQ0UsWUFBWTtRQUNyQyxHQUNDSyxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQ0E7UUFDaEI7SUFDSjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxPQUFPO1lBQ1ZDLGlCQUFpQjtZQUNqQkMsZ0JBQWdCO1lBQ2hCQyxvQkFBb0I7WUFDcEJDLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLGdCQUFnQjtZQUNoQkMsWUFBWTtRQUNkOzs7MEJBRUksOERBQUNDO2dCQUF1REMsU0FBVTFCOzBEQUFoRDswQkFBZ0U7Ozs7OztZQUVqRkYsa0JBQWtCRiw2QkFDakIsOERBQUNtQjswREFBYzswQkFDYiw0RUFBQ0E7OERBQWM7O3NDQUNiLDhEQUFDQTtzRUFBYztzQ0FDZiw0RUFBQ1k7OzBDQUFHOzs7Ozs7Ozs7OztzQ0FFViw4REFBQ1o7c0VBQWM7OzhDQUNiLDhEQUFDYTs7OENBQUdoQyxZQUFZaUMsU0FBUyxDQUFDQyxJQUFJOzs7Ozs7OENBQzlCLDhEQUFDRjs7O3dDQUFFO3dDQUFrQmhDLFlBQVltQyxXQUFXLENBQUNDLElBQUk7Ozs7Ozs7OENBQ2pELDhEQUFDQztvQ0FBSUMsS0FBS3RDLFlBQVl1QyxZQUFZLENBQUNDLEdBQUc7b0NBQUVDLEtBQUk7b0NBQWVyQixPQUFPO3dDQUFDc0IsVUFBVTt3Q0FBU0MsV0FBVztvQ0FBTzs7Ozs7Ozs4Q0FDeEcsOERBQUNYOzs4Q0FBR2hDLFlBQVl1QyxZQUFZLENBQUNLLE9BQU8sQ0FBQ0MsU0FBUzs7Ozs7O2dDQUFLOzs7Ozs7O3NDQUVyRCw4REFBQzFCO3NFQUFjO3NDQUNmLDRFQUFDVTtnQ0FBT0MsU0FBUyxJQUFNM0Isa0JBQWtCOzswQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNL0MsOERBQUNnQjswREFBYzswQkFDYiw0RUFBQ3hCLG1EQUFLQTtvQkFBQ21ELFdBQVU7b0JBQ2ZSLEtBQUsxQyxrRUFBY0E7b0JBQ25CNkMsS0FBSTtvQkFDSk0sT0FBTztvQkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7MEJBS2QsOERBQUN0RCxrREFBSUE7Z0JBQUN1RCxNQUFLO2dCQUFhQyxjQUFjOzBCQUFDLDRFQUFDQzs4REFBWTs4QkFBMEI7Ozs7Ozs7Ozs7OzBCQUM5RSw4REFBQ3pELGtEQUFJQTtnQkFBQ3VELE1BQUs7Z0JBQVNDLGNBQWM7MEJBQUMsNEVBQUNDOzhEQUFZOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBQ3JFLDhEQUFDekQsa0RBQUlBO2dCQUFDdUQsTUFBSztnQkFBWUMsY0FBYzswQkFBQyw0RUFBQ0M7OERBQVk7OEJBQXFCOzs7Ozs7Ozs7OzswQkFFMUUsOERBQUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQThETDtHQW5Jc0JyRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBNb3ZpZU1peGVyTG9nbyBmcm9tIFwiLi4vaW1hZ2VzL01vdmllTWl4ZXJMb2dvLnBuZ1wiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbcmFuZG9tTW92aWUsIHNldFJhbmRvbU1vdmllXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gQWRkIHRoaXMgc3RhdGVcblxuXG4gIGNvbnN0IGdldFJhbmRvbU1vdmllID0gKCkgPT4ge1xuICAgIGZldGNoUmFuZG9tTW92aWUoKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFJhbmRvbU1vdmllID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXRfcmFuZG9tX21vdmllLycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXNwb25zZS5kYXRhLnJlc3VsdHM7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzdWx0cy5sZW5ndGgpO1xuICAgICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTsgLy8gU2hvdyB0aGUgbW9kYWwgd2hlbiByYW5kb20gbW92aWUgaXMgZmV0Y2hlZFxuICAgICAgICBzZXRSYW5kb21Nb3ZpZShyZXN1bHRzW3JhbmRvbUluZGV4XSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzE3NzI3NDcxNy9waG90by9hYnN0cmFjdC1tdWx0aW1lZGlhLWJhY2tncm91bmQtY29tcG9zZWQtb2YtbWFueS1pbWFnZXMtd2l0aC1jb3B5LmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz1WMEc0Wi1nbE5LenVJMVp2UU1PYmkzXzBQdXhVSE9xenVyN2Q1TFhCMjlVPVwiKScsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH19PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b20gcC0yIG10LTUgbWItMSBidG4tbGdcIiBvbkNsaWNrPSB7Z2V0UmFuZG9tTW92aWV9PkdldCBSYW5kb20gTW92aWU8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIHtpc01vZGFsVmlzaWJsZSAmJiByYW5kb21Nb3ZpZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgyPllvdXIgUmFuZG9tIE1vdmllIElzOjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgIDxwPntyYW5kb21Nb3ZpZS50aXRsZVRleHQudGV4dH08L3A+XG4gICAgICAgICAgPHA+WWVhciBvZiBSZWxlYXNlOiB7cmFuZG9tTW92aWUucmVsZWFzZVllYXIueWVhcn08L3A+XG4gICAgICAgICAgPGltZyBzcmM9e3JhbmRvbU1vdmllLnByaW1hcnlJbWFnZS51cmx9IGFsdD1cIk1vdmllIFBvc3RlclwiIHN0eWxlPXt7bWF4V2lkdGg6ICcyMDBweCcsIG1heEhlaWdodDogJzIwMHB4J319PjwvaW1nPlxuICAgICAgICAgIDxwPntyYW5kb21Nb3ZpZS5wcmltYXJ5SW1hZ2UuY2FwdGlvbi5wbGFpblRleHR9PC9wPiAjQ2FwdGlvblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSl9PkNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pfVxuIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgc3JjPXtNb3ZpZU1peGVyTG9nb31cbiAgICAgICAgICAgICAgYWx0PVwiTW92aWVNaXhlciBMb2dvXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcblxuICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiIGxlZ2FjeUJlaGF2aW9yPjxhIGNsYXNzTmFtZT1cImJ0biBidG4tY3VzdG9tIG10LTQgbS0yXCI+RGFzaGJvYXJkPC9hPjwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGxlZ2FjeUJlaGF2aW9yPjxhIGNsYXNzTmFtZT1cImJ0biBidG4tY3VzdG9tIG0tMlwiPkxvZ2luPC9hPjwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIGxlZ2FjeUJlaGF2aW9yPjxhIGNsYXNzTmFtZT1cImJ0biBidG4tY3VzdG9tIG0tMlwiPlNpZ24gVXAtSXQncyBGcmVlITwvYT48L0xpbms+XG5cbiAgICAgIDxicj48L2JyPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YC5idG4tY3VzdG9te1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUY1RDU3O1xuICAgICAgICBjb2xvcjogI0NCQjI2QTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnRleHQtY3VzdG9tIHtcbiAgICAgICAgY29sb3I6ICNDQkIyNkE7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAubW92aWUtbW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIH1cbiAgICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogQWRkIHNwYWNlIGJlbG93IGhlYWRlciAqL1xuICAgICAgfVxuICBcbiAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGQgc3BhY2UgYWJvdmUgZm9vdGVyICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubW92aWUtaW5mbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjVENTc7IC8qIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciAqL1xuICAgICAgICBjb2xvcjogI0NCQjI2QTsgLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7IC8qIEFkZCBzb21lIHBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogQWRkIHJvdW5kZWQgY29ybmVycyAqL1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGQgc3BhY2luZyBmcm9tIHRoZSBidXR0b24gKi9cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIHRleHQgKi9cbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICBcbiAgICAgIFxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIFxuICAgIDwvZGl2PlxuICApO1xuICB9Il0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIk1vdmllTWl4ZXJMb2dvIiwidXNlU3RhdGUiLCJheGlvcyIsIlBhZ2UiLCJyYW5kb21Nb3ZpZSIsInNldFJhbmRvbU1vdmllIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsImdldFJhbmRvbU1vdmllIiwiZmV0Y2hSYW5kb21Nb3ZpZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJkYXRhIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsInAiLCJ0aXRsZVRleHQiLCJ0ZXh0IiwicmVsZWFzZVllYXIiLCJ5ZWFyIiwiaW1nIiwic3JjIiwicHJpbWFyeUltYWdlIiwidXJsIiwiYWx0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjYXB0aW9uIiwicGxhaW5UZXh0IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});