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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [randomMovie, setRandomMovie] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // Add this state\n    const languageMapping = {\n        \"en-US\": \"English\"\n    };\n    const getRandomMovie = ()=>{\n        fetchRandomMovie();\n    };\n    const fetchRandomMovie = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8000/api/get_random_movie/\").then((response)=>{\n            const results = response.data.results;\n            const randomIndex = Math.floor(Math.random() * results.length);\n            setIsModalVisible(true);\n            setRandomMovie(results[randomIndex]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\"\n        },\n        className: \"jsx-ee93cc13464ca59d\" + \" \" + \"container-fluid bg-cover min-vh-100 d-flex flex-column justify-content-center align-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getRandomMovie,\n                className: \"jsx-ee93cc13464ca59d\" + \" \" + \"btn btn-custom p-2 mt-5 mb-1 btn-lg\",\n                children: \"Get Random Movie\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this),\n            isModalVisible && randomMovie && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ee93cc13464ca59d\" + \" \" + \"movie-modal d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-ee93cc13464ca59d\" + \" \" + \"modal-dialog modal-dialog-centered\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-ee93cc13464ca59d\" + \" \" + \"modal-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-ee93cc13464ca59d\" + \" \" + \"modal-header\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"jsx-ee93cc13464ca59d\",\n                                    children: \"Your Random Movie Is:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-ee93cc13464ca59d\" + \" \" + \"modal-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"2rem\",\n                                            fontWeight: \"bolder\"\n                                        },\n                                        className: \"jsx-ee93cc13464ca59d\" + \" \" + \"text-center mb-4\",\n                                        children: randomMovie.titleText.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 3\n                                    }, this),\n                                    randomMovie.releaseYear && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-ee93cc13464ca59d\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"jsx-ee93cc13464ca59d\",\n                                                children: [\n                                                    \"Genre: \",\n                                                    randomMovie.genres.genres[0].text\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 5\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"jsx-ee93cc13464ca59d\",\n                                                children: [\n                                                    \"Runtime: \",\n                                                    Math.floor(randomMovie.runtime.seconds / 3600),\n                                                    \" hours \",\n                                                    Math.floor(randomMovie.runtime.seconds % 3600 / 60),\n                                                    \" minutes\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 5\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 5\n                                    }, this),\n                                    randomMovie.primaryImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-ee93cc13464ca59d\" + \" \" + \"d-flex justify-content-center mb-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: randomMovie.primaryImage.url,\n                                            alt: \"Movie Poster\",\n                                            style: {\n                                                maxWidth: \"200px\",\n                                                height: \"300px\"\n                                            },\n                                            className: \"jsx-ee93cc13464ca59d\" + \" \" + \"img-fluid\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 7\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 5\n                                    }, this),\n                                    randomMovie.primaryImage && randomMovie.primaryImage.caption && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-ee93cc13464ca59d\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"jsx-ee93cc13464ca59d\" + \" \" + \"text-center\",\n                                                children: randomMovie.primaryImage.caption.plainText\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 5\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"jsx-ee93cc13464ca59d\",\n                                                children: [\n                                                    \"Description: \",\n                                                    randomMovie.plot.plotText.plainText\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 5\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"jsx-ee93cc13464ca59d\",\n                                                children: [\n                                                    \"Language: \",\n                                                    languageMapping[randomMovie.plot.language.id]\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 5\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-ee93cc13464ca59d\" + \" \" + \"modal-footer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setIsModalVisible(false),\n                                            className: \"jsx-ee93cc13464ca59d\" + \" \" + \"btn btn-custom\",\n                                            children: \"Close\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 9\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-ee93cc13464ca59d\" + \" \" + \"d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"img-fluid\",\n                    src: _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"MovieMixer Logo\",\n                    width: 200,\n                    height: 200\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 89,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/dashboard\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-ee93cc13464ca59d\" + \" \" + \"btn btn-custom mt-4 m-2\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 98,\n                    columnNumber: 48\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/login\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-ee93cc13464ca59d\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 99,\n                    columnNumber: 44\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/register\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-ee93cc13464ca59d\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Sign Up-It's Free!\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 100,\n                    columnNumber: 47\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-ee93cc13464ca59d\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ee93cc13464ca59d\",\n                children: \".btn-custom.jsx-ee93cc13464ca59d{background-color:#1f5d57;color:#cbb26a}.text-custom.jsx-ee93cc13464ca59d{color:#cbb26a;font-size:18px;font-weight:bold}.movie-modal.jsx-ee93cc13464ca59d{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;z-index:1000}.modal-content.jsx-ee93cc13464ca59d{background-color:white;padding:10px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:0px 0px 10px rgba(0,0,0,.5);-moz-box-shadow:0px 0px 10px rgba(0,0,0,.5);box-shadow:0px 0px 10px rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.modal-header.jsx-ee93cc13464ca59d{margin-bottom:5px}.modal-footer.jsx-ee93cc13464ca59d{margin-top:5px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.movie-modal.jsx-ee93cc13464ca59d{background-color:#1f5d57;color:#cbb26a;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-top:20px;text-align:center;width:80%;max-width:600px;height:auto}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"xIgm7xwBMrYNIIyCiJ8PkQD9tV0=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YzswQkFDYiw0RUFBQ3pCLG1EQUFLQTtvQkFBQ3VELFdBQVU7b0JBQ2ZYLEtBQUszQyxrRUFBY0E7b0JBQ25CNkMsS0FBSTtvQkFDSlUsT0FBTztvQkFDUFIsUUFBUTs7Ozs7Ozs7Ozs7MEJBS2QsOERBQUNqRCxrREFBSUE7Z0JBQUMwRCxNQUFLO2dCQUFhQyxjQUFjOzBCQUFDLDRFQUFDQzs4REFBWTs4QkFBMEI7Ozs7Ozs7Ozs7OzBCQUM5RSw4REFBQzVELGtEQUFJQTtnQkFBQzBELE1BQUs7Z0JBQVNDLGNBQWM7MEJBQUMsNEVBQUNDOzhEQUFZOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBQ3JFLDhEQUFDNUQsa0RBQUlBO2dCQUFDMEQsTUFBSztnQkFBWUMsY0FBYzswQkFBQyw0RUFBQ0M7OERBQVk7OEJBQXFCOzs7Ozs7Ozs7OzswQkFFMUUsOERBQUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQThETDtHQTVKc0J4RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBNb3ZpZU1peGVyTG9nbyBmcm9tIFwiLi4vaW1hZ2VzL01vdmllTWl4ZXJMb2dvLnBuZ1wiO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgW3JhbmRvbU1vdmllLCBzZXRSYW5kb21Nb3ZpZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEFkZCB0aGlzIHN0YXRlXG4gIGNvbnN0IGxhbmd1YWdlTWFwcGluZyA9IHtcbiAgICAnZW4tVVMnOiAnRW5nbGlzaCcsXG4gIH07XG5cbiAgY29uc3QgZ2V0UmFuZG9tTW92aWUgPSAoKSA9PiB7XG4gICAgZmV0Y2hSYW5kb21Nb3ZpZSgpO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoUmFuZG9tTW92aWUgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldF9yYW5kb21fbW92aWUvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHJlc3BvbnNlLmRhdGEucmVzdWx0cztcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXN1bHRzLmxlbmd0aCk7XG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpO1xuICAgICAgICBzZXRSYW5kb21Nb3ZpZShyZXN1bHRzW3JhbmRvbUluZGV4XSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgYmctY292ZXIgbWluLXZoLTEwMCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vaWQvMTc3Mjc0NzE3L3Bob3RvL2Fic3RyYWN0LW11bHRpbWVkaWEtYmFja2dyb3VuZC1jb21wb3NlZC1vZi1tYW55LWltYWdlcy13aXRoLWNvcHkuanBnP3M9NjEyeDYxMiZ3PTAmaz0yMCZjPVYwRzRaLWdsTkt6dUkxWnZRTU9iaTNfMFB1eFVIT3F6dXI3ZDVMWEIyOVU9XCIpJyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIC8vIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgIC8vIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIC8vIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgLy8ganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgLy8gYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfX0+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWN1c3RvbSBwLTIgbXQtNSBtYi0xIGJ0bi1sZ1wiIG9uQ2xpY2s9IHtnZXRSYW5kb21Nb3ZpZX0+R2V0IFJhbmRvbSBNb3ZpZTwvYnV0dG9uPlxuICAgICAgICBcbiAgICAgICAge2lzTW9kYWxWaXNpYmxlICYmIHJhbmRvbU1vdmllICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLW1vZGFsIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgyPllvdXIgUmFuZG9tIE1vdmllIElzOjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6ICdib2xkZXInIH19PntyYW5kb21Nb3ZpZS50aXRsZVRleHQudGV4dH08L3A+XG4gIFxuICB7cmFuZG9tTW92aWUucmVsZWFzZVllYXIgJiYgKFxuICAgIDxkaXY+XG4gICAgey8qIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5ZZWFyIG9mIFJlbGVhc2U6IHtyYW5kb21Nb3ZpZS5yZWxlYXNlWWVhci55ZWFyfTwvcD4gKi99XG4gICAgPHA+R2VucmU6IHtyYW5kb21Nb3ZpZS5nZW5yZXMuZ2VucmVzWzBdLnRleHR9PC9wPlxuICAgIDxwPlJ1bnRpbWU6IHtNYXRoLmZsb29yKHJhbmRvbU1vdmllLnJ1bnRpbWUuc2Vjb25kcyAvIDM2MDApfSBob3VycyB7TWF0aC5mbG9vcigocmFuZG9tTW92aWUucnVudGltZS5zZWNvbmRzICUgMzYwMCkgLyA2MCl9IG1pbnV0ZXM8L3A+XG4gICAgPC9kaXY+XG4gICl9XG4gIFxuICB7cmFuZG9tTW92aWUucHJpbWFyeUltYWdlICYmIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIj5cbiAgICAgIDxpbWcgc3JjPXtyYW5kb21Nb3ZpZS5wcmltYXJ5SW1hZ2UudXJsfSBhbHQ9XCJNb3ZpZSBQb3N0ZXJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzdHlsZT17eyBtYXhXaWR0aDogJzIwMHB4JywgaGVpZ2h0OiAnMzAwcHgnIH19IC8+XG4gICAgPC9kaXY+XG4gICl9XG4gIFxuICB7cmFuZG9tTW92aWUucHJpbWFyeUltYWdlICYmIHJhbmRvbU1vdmllLnByaW1hcnlJbWFnZS5jYXB0aW9uICYmIChcbiAgICA8ZGl2PlxuICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3JhbmRvbU1vdmllLnByaW1hcnlJbWFnZS5jYXB0aW9uLnBsYWluVGV4dH08L3A+XG4gICAgPHA+RGVzY3JpcHRpb246IHtyYW5kb21Nb3ZpZS5wbG90LnBsb3RUZXh0LnBsYWluVGV4dH08L3A+XG4gICAgPHA+TGFuZ3VhZ2U6IHtsYW5ndWFnZU1hcHBpbmdbcmFuZG9tTW92aWUucGxvdC5sYW5ndWFnZS5pZF19PC9wPlxuICAgIDwvZGl2PlxuICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b21cIiBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSl9PkNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pfVxuIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgc3JjPXtNb3ZpZU1peGVyTG9nb31cbiAgICAgICAgICAgICAgYWx0PVwiTW92aWVNaXhlciBMb2dvXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcblxuICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiIGxlZ2FjeUJlaGF2aW9yPjxhIGNsYXNzTmFtZT1cImJ0biBidG4tY3VzdG9tIG10LTQgbS0yXCI+RGFzaGJvYXJkPC9hPjwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGxlZ2FjeUJlaGF2aW9yPjxhIGNsYXNzTmFtZT1cImJ0biBidG4tY3VzdG9tIG0tMlwiPkxvZ2luPC9hPjwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIGxlZ2FjeUJlaGF2aW9yPjxhIGNsYXNzTmFtZT1cImJ0biBidG4tY3VzdG9tIG0tMlwiPlNpZ24gVXAtSXQncyBGcmVlITwvYT48L0xpbms+XG5cbiAgICAgIDxicj48L2JyPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YC5idG4tY3VzdG9te1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUY1RDU3O1xuICAgICAgICBjb2xvcjogI0NCQjI2QTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnRleHQtY3VzdG9tIHtcbiAgICAgICAgY29sb3I6ICNDQkIyNkE7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAubW92aWUtbW9kYWwge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDsgICAgICAgIFxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgfVxuICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICBcbiAgICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IC8qIEFkZCBzcGFjZSBiZWxvdyBoZWFkZXIgKi9cbiAgICAgIH1cbiAgXG4gICAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4OyAvKiBBZGQgc3BhY2UgYWJvdmUgZm9vdGVyICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubW92aWUtbW9kYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUY1RDU3OyAvKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3IgKi9cbiAgICAgICAgY29sb3I6ICNDQkIyNkE7IC8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xuICAgICAgICBwYWRkaW5nOiAyMHB4OyAvKiBBZGQgc29tZSBwYWRkaW5nIGZvciBzcGFjaW5nICovXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogQWRkIHJvdW5kZWQgY29ybmVycyAqL1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGQgc3BhY2luZyBmcm9tIHRoZSBidXR0b24gKi9cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIHRleHQgKi9cbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWF4LXdpZHRoOjYwMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gIFxuICAgICAgXG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgXG4gICAgPC9kaXY+XG4gICk7XG4gIH0iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiTW92aWVNaXhlckxvZ28iLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUGFnZSIsInJhbmRvbU1vdmllIiwic2V0UmFuZG9tTW92aWUiLCJpc01vZGFsVmlzaWJsZSIsInNldElzTW9kYWxWaXNpYmxlIiwibGFuZ3VhZ2VNYXBwaW5nIiwiZ2V0UmFuZG9tTW92aWUiLCJmZXRjaFJhbmRvbU1vdmllIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicmVzdWx0cyIsImRhdGEiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsInAiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0aXRsZVRleHQiLCJ0ZXh0IiwicmVsZWFzZVllYXIiLCJnZW5yZXMiLCJydW50aW1lIiwic2Vjb25kcyIsInByaW1hcnlJbWFnZSIsImltZyIsInNyYyIsInVybCIsImFsdCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiY2FwdGlvbiIsInBsYWluVGV4dCIsInBsb3QiLCJwbG90VGV4dCIsImxhbmd1YWdlIiwiaWQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});