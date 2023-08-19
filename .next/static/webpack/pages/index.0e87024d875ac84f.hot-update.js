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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [randomMovie, setRandomMovie] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // Add this state\n    const languageMapping = {\n        \"en-US\": \"English\"\n    };\n    const getRandomMovie = ()=>{\n        fetchRandomMovie();\n    };\n    const fetchRandomMovie = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8000/api/get_random_movie/\").then((response)=>{\n            const results = response.data.results;\n            const randomIndex = Math.floor(Math.random() * results.length);\n            setIsModalVisible(true);\n            setRandomMovie(results[randomIndex]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        className: \"jsx-eac3efcf76579709\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getRandomMovie,\n                className: \"jsx-eac3efcf76579709\" + \" \" + \"btn btn-custom p-2 mt-5 mb-1 btn-lg\",\n                children: \"Get Random Movie\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this),\n            isModalVisible && randomMovie && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-eac3efcf76579709\" + \" \" + \"movie-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-eac3efcf76579709\" + \" \" + \"modal-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-eac3efcf76579709\" + \" \" + \"modal-header\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"jsx-eac3efcf76579709\",\n                                children: \"Your Random Movie Is:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-eac3efcf76579709\" + \" \" + \"modal-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        fontSize: \"2rem\",\n                                        fontWeight: \"bolder\"\n                                    },\n                                    className: \"jsx-eac3efcf76579709\" + \" \" + \"text-center mb-4\",\n                                    children: randomMovie.titleText.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 3\n                                }, this),\n                                randomMovie.releaseYear && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-eac3efcf76579709\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-eac3efcf76579709\" + \" \" + \"mb-2\",\n                                            children: [\n                                                \"Year of Release: \",\n                                                randomMovie.releaseYear.year\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-eac3efcf76579709\",\n                                            children: [\n                                                \"Genre: \",\n                                                randomMovie.genres.genres[0].text\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-eac3efcf76579709\",\n                                            children: [\n                                                \"Runtime: \",\n                                                Math.floor(randomMovie.runtime.seconds / 3600),\n                                                \" hours \",\n                                                Math.floor(randomMovie.runtime.seconds % 3600 / 60),\n                                                \" minutes\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 5\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 5\n                                }, this),\n                                randomMovie.primaryImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-eac3efcf76579709\" + \" \" + \"d-flex justify-content-center mb-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: randomMovie.primaryImage.url,\n                                        alt: \"Movie Poster\",\n                                        style: {\n                                            maxWidth: \"200px\",\n                                            height: \"auto\"\n                                        },\n                                        className: \"jsx-eac3efcf76579709\" + \" \" + \"img-fluid\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 7\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 5\n                                }, this),\n                                randomMovie.primaryImage && randomMovie.primaryImage.caption && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-eac3efcf76579709\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-eac3efcf76579709\" + \" \" + \"text-center italicized\",\n                                            children: randomMovie.primaryImage.caption.plainText\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-eac3efcf76579709\",\n                                            children: [\n                                                \"Description: \",\n                                                randomMovie.plot.plotText.plainText\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-eac3efcf76579709\",\n                                            children: [\n                                                \"Main Language: \",\n                                                languageMapping[randomMovie.plot.language.id]\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 5\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 5\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-eac3efcf76579709\" + \" \" + \"modal-footer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsModalVisible(false),\n                                className: \"jsx-eac3efcf76579709\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-eac3efcf76579709\" + \" \" + \"d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"img-fluid\",\n                    src: _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"MovieMixer Logo\",\n                    width: 200,\n                    height: 200\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/dashboard\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-eac3efcf76579709\" + \" \" + \"btn btn-custom mt-4 m-2\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 96,\n                    columnNumber: 48\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/login\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-eac3efcf76579709\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 97,\n                    columnNumber: 44\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/register\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-eac3efcf76579709\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Sign Up-It's Free!\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 98,\n                    columnNumber: 47\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-eac3efcf76579709\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"eac3efcf76579709\",\n                children: \".btn-custom.jsx-eac3efcf76579709{background-color:#1f5d57;color:#cbb26a}.text-custom.jsx-eac3efcf76579709{color:#cbb26a;font-size:18px;font-weight:bold}.movie-modal.jsx-eac3efcf76579709{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;z-index:1000}.modal-content.jsx-eac3efcf76579709{background-color:white;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:0px 0px 10px rgba(0,0,0,.5);-moz-box-shadow:0px 0px 10px rgba(0,0,0,.5);box-shadow:0px 0px 10px rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.modal-header.jsx-eac3efcf76579709{margin-bottom:10px}.modal-footer.jsx-eac3efcf76579709{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.movie-info.jsx-eac3efcf76579709{background-color:#1f5d57;color:#cbb26a;padding:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;margin-top:20px;text-align:center;width:80%;max-width:600px;height:auto}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"xIgm7xwBMrYNIIyCiJ8PkQD9tV0=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YztzQ0FDZiw0RUFBQ1U7Z0NBQU9DLFNBQVMsSUFBTTVCLGtCQUFrQjs7MENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTS9DLDhEQUFDaUI7MERBQWM7MEJBQ2IsNEVBQUN6QixtREFBS0E7b0JBQUM2RCxXQUFVO29CQUNmWCxLQUFLakQsa0VBQWNBO29CQUNuQm1ELEtBQUk7b0JBQ0pVLE9BQU87b0JBQ1BSLFFBQVE7Ozs7Ozs7Ozs7OzBCQUtkLDhEQUFDdkQsa0RBQUlBO2dCQUFDZ0UsTUFBSztnQkFBYUMsY0FBYzswQkFBQyw0RUFBQ0M7OERBQVk7OEJBQTBCOzs7Ozs7Ozs7OzswQkFDOUUsOERBQUNsRSxrREFBSUE7Z0JBQUNnRSxNQUFLO2dCQUFTQyxjQUFjOzBCQUFDLDRFQUFDQzs4REFBWTs4QkFBcUI7Ozs7Ozs7Ozs7OzBCQUNyRSw4REFBQ2xFLGtEQUFJQTtnQkFBQ2dFLE1BQUs7Z0JBQVlDLGNBQWM7MEJBQUMsNEVBQUNDOzhEQUFZOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBRTFFLDhEQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REw7R0ExSnNCOUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTW92aWVNaXhlckxvZ28gZnJvbSBcIi4uL2ltYWdlcy9Nb3ZpZU1peGVyTG9nby5wbmdcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtyYW5kb21Nb3ZpZSwgc2V0UmFuZG9tTW92aWVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBBZGQgdGhpcyBzdGF0ZVxuICBjb25zdCBsYW5ndWFnZU1hcHBpbmcgPSB7XG4gICAgJ2VuLVVTJzogJ0VuZ2xpc2gnLFxuICB9O1xuXG4gIGNvbnN0IGdldFJhbmRvbU1vdmllID0gKCkgPT4ge1xuICAgIGZldGNoUmFuZG9tTW92aWUoKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFJhbmRvbU1vdmllID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXRfcmFuZG9tX21vdmllLycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXNwb25zZS5kYXRhLnJlc3VsdHM7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzdWx0cy5sZW5ndGgpO1xuICAgICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcbiAgICAgICAgc2V0UmFuZG9tTW92aWUocmVzdWx0c1tyYW5kb21JbmRleF0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzE3NzI3NDcxNy9waG90by9hYnN0cmFjdC1tdWx0aW1lZGlhLWJhY2tncm91bmQtY29tcG9zZWQtb2YtbWFueS1pbWFnZXMtd2l0aC1jb3B5LmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz1WMEc0Wi1nbE5LenVJMVp2UU1PYmkzXzBQdXhVSE9xenVyN2Q1TFhCMjlVPVwiKScsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH19PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b20gcC0yIG10LTUgbWItMSBidG4tbGdcIiBvbkNsaWNrPSB7Z2V0UmFuZG9tTW92aWV9PkdldCBSYW5kb20gTW92aWU8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIHtpc01vZGFsVmlzaWJsZSAmJiByYW5kb21Nb3ZpZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgyPllvdXIgUmFuZG9tIE1vdmllIElzOjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6ICdib2xkZXInIH19PntyYW5kb21Nb3ZpZS50aXRsZVRleHQudGV4dH08L3A+XG4gIFxuICB7cmFuZG9tTW92aWUucmVsZWFzZVllYXIgJiYgKFxuICAgIDxkaXY+XG4gICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPlllYXIgb2YgUmVsZWFzZToge3JhbmRvbU1vdmllLnJlbGVhc2VZZWFyLnllYXJ9PC9wPlxuICAgIDxwPkdlbnJlOiB7cmFuZG9tTW92aWUuZ2VucmVzLmdlbnJlc1swXS50ZXh0fTwvcD5cbiAgICA8cD5SdW50aW1lOiB7TWF0aC5mbG9vcihyYW5kb21Nb3ZpZS5ydW50aW1lLnNlY29uZHMgLyAzNjAwKX0gaG91cnMge01hdGguZmxvb3IoKHJhbmRvbU1vdmllLnJ1bnRpbWUuc2Vjb25kcyAlIDM2MDApIC8gNjApfSBtaW51dGVzPC9wPlxuICAgIDwvZGl2PlxuICApfVxuICBcbiAge3JhbmRvbU1vdmllLnByaW1hcnlJbWFnZSAmJiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0zXCI+XG4gICAgICA8aW1nIHNyYz17cmFuZG9tTW92aWUucHJpbWFyeUltYWdlLnVybH0gYWx0PVwiTW92aWUgUG9zdGVyXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3R5bGU9e3sgbWF4V2lkdGg6ICcyMDBweCcsIGhlaWdodDogJ2F1dG8nIH19IC8+XG4gICAgPC9kaXY+XG4gICl9XG4gIFxuICB7cmFuZG9tTW92aWUucHJpbWFyeUltYWdlICYmIHJhbmRvbU1vdmllLnByaW1hcnlJbWFnZS5jYXB0aW9uICYmIChcbiAgICA8ZGl2PlxuICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGl0YWxpY2l6ZWRcIj57cmFuZG9tTW92aWUucHJpbWFyeUltYWdlLmNhcHRpb24ucGxhaW5UZXh0fTwvcD5cbiAgICA8cD5EZXNjcmlwdGlvbjoge3JhbmRvbU1vdmllLnBsb3QucGxvdFRleHQucGxhaW5UZXh0fTwvcD5cbiAgICA8cD5NYWluIExhbmd1YWdlOiB7bGFuZ3VhZ2VNYXBwaW5nW3JhbmRvbU1vdmllLnBsb3QubGFuZ3VhZ2UuaWRdfTwvcD5cbiAgICA8L2Rpdj5cbiAgKX1cbjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKX1cbiBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICAgIHNyYz17TW92aWVNaXhlckxvZ299XG4gICAgICAgICAgICAgIGFsdD1cIk1vdmllTWl4ZXIgTG9nb1wiXG4gICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIiBsZWdhY3lCZWhhdmlvcj48YSBjbGFzc05hbWU9XCJidG4gYnRuLWN1c3RvbSBtdC00IG0tMlwiPkRhc2hib2FyZDwvYT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBsZWdhY3lCZWhhdmlvcj48YSBjbGFzc05hbWU9XCJidG4gYnRuLWN1c3RvbSBtLTJcIj5Mb2dpbjwvYT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIiBsZWdhY3lCZWhhdmlvcj48YSBjbGFzc05hbWU9XCJidG4gYnRuLWN1c3RvbSBtLTJcIj5TaWduIFVwLUl0J3MgRnJlZSE8L2E+PC9MaW5rPlxuXG4gICAgICA8YnI+PC9icj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2AuYnRuLWN1c3RvbXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFGNUQ1NztcbiAgICAgICAgY29sb3I6ICNDQkIyNkE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50ZXh0LWN1c3RvbSB7XG4gICAgICAgIGNvbG9yOiAjQ0JCMjZBO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLm1vdmllLW1vZGFsIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7ICAgICAgICBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIH1cbiAgICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogQWRkIHNwYWNlIGJlbG93IGhlYWRlciAqL1xuICAgICAgfVxuICBcbiAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGQgc3BhY2UgYWJvdmUgZm9vdGVyICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubW92aWUtaW5mbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjVENTc7IC8qIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciAqL1xuICAgICAgICBjb2xvcjogI0NCQjI2QTsgLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7IC8qIEFkZCBzb21lIHBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogQWRkIHJvdW5kZWQgY29ybmVycyAqL1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBBZGQgc3BhY2luZyBmcm9tIHRoZSBidXR0b24gKi9cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIHRleHQgKi9cbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICBcbiAgICAgIFxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIFxuICAgIDwvZGl2PlxuICApO1xuICB9Il0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIk1vdmllTWl4ZXJMb2dvIiwidXNlU3RhdGUiLCJheGlvcyIsIlBhZ2UiLCJyYW5kb21Nb3ZpZSIsInNldFJhbmRvbU1vdmllIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsImxhbmd1YWdlTWFwcGluZyIsImdldFJhbmRvbU1vdmllIiwiZmV0Y2hSYW5kb21Nb3ZpZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJkYXRhIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsInAiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0aXRsZVRleHQiLCJ0ZXh0IiwicmVsZWFzZVllYXIiLCJ5ZWFyIiwiZ2VucmVzIiwicnVudGltZSIsInNlY29uZHMiLCJwcmltYXJ5SW1hZ2UiLCJpbWciLCJzcmMiLCJ1cmwiLCJhbHQiLCJtYXhXaWR0aCIsImhlaWdodCIsImNhcHRpb24iLCJwbGFpblRleHQiLCJwbG90IiwicGxvdFRleHQiLCJsYW5ndWFnZSIsImlkIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});