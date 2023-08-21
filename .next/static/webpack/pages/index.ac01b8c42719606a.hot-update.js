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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/MovieMixerLogo.png */ \"./src/images/MovieMixerLogo.png\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [randomMovie, setRandomMovie] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // Add this state\n    const languageMapping = {\n        \"en-US\": \"English\"\n    };\n    const getRandomMovie = ()=>{\n        fetchRandomMovie();\n    };\n    const fetchRandomMovie = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:8000/api/get_random_movie/\").then((response)=>{\n            const results = response.data.results;\n            const randomIndex = Math.floor(Math.random() * results.length);\n            setIsModalVisible(true);\n            setRandomMovie(results[randomIndex]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"container-fluid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getRandomMovie,\n                className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"btn btn-custom p-2 mt-5 mb-1 btn-lg\",\n                children: \"Get Random Movie\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this),\n            isModalVisible && randomMovie && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"movie-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"modal-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"modal-header\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"jsx-856bfaf6c662eb1d\",\n                                children: \"Your Random Movie Is:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"modal-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        fontSize: \"2rem\",\n                                        fontWeight: \"bolder\"\n                                    },\n                                    className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"text-center mb-4\",\n                                    children: randomMovie.titleText.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 3\n                                }, this),\n                                randomMovie.releaseYear && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-856bfaf6c662eb1d\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"mb-2\",\n                                            children: [\n                                                \"Year of Release: \",\n                                                randomMovie.releaseYear.year\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-856bfaf6c662eb1d\",\n                                            children: [\n                                                \"Genre: \",\n                                                randomMovie.genres.genres[0].text\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-856bfaf6c662eb1d\",\n                                            children: [\n                                                \"Runtime: \",\n                                                Math.floor(randomMovie.runtime.seconds / 3600),\n                                                \" hours \",\n                                                Math.floor(randomMovie.runtime.seconds % 3600 / 60),\n                                                \" minutes\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 5\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 5\n                                }, this),\n                                randomMovie.primaryImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"d-flex justify-content-center mb-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: randomMovie.primaryImage.url,\n                                        alt: \"Movie Poster\",\n                                        style: {\n                                            maxWidth: \"200px\",\n                                            height: \"auto\"\n                                        },\n                                        className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"img-fluid\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 7\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 5\n                                }, this),\n                                randomMovie.primaryImage && randomMovie.primaryImage.caption && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-856bfaf6c662eb1d\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"text-center italicized\",\n                                            children: randomMovie.primaryImage.caption.plainText\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-856bfaf6c662eb1d\",\n                                            children: [\n                                                \"Description: \",\n                                                randomMovie.plot.plotText.plainText\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 5\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"jsx-856bfaf6c662eb1d\",\n                                            children: [\n                                                \"Language: \",\n                                                languageMapping[randomMovie.plot.language.id]\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 5\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 5\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"modal-footer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsModalVisible(false),\n                                className: \"jsx-856bfaf6c662eb1d\",\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"d-flex justify-content-center align-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"img-fluid\",\n                    src: _images_MovieMixerLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"MovieMixer Logo\",\n                    width: 200,\n                    height: 200\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/dashboard\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"btn btn-custom mt-4 m-2\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 96,\n                    columnNumber: 48\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/login\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 97,\n                    columnNumber: 44\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/register\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-856bfaf6c662eb1d\" + \" \" + \"btn btn-custom m-2\",\n                    children: \"Sign Up-It's Free!\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                    lineNumber: 98,\n                    columnNumber: 47\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                className: \"jsx-856bfaf6c662eb1d\"\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"856bfaf6c662eb1d\",\n                children: \".btn-custom.jsx-856bfaf6c662eb1d{background-color:#1f5d57;color:#cbb26a}.text-custom.jsx-856bfaf6c662eb1d{color:#cbb26a;font-size:18px;font-weight:bold}.movie-modal.jsx-856bfaf6c662eb1d{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;z-index:1000}.modal-content.jsx-856bfaf6c662eb1d{background-color:white;padding:10px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:0px 0px 10px rgba(0,0,0,.5);-moz-box-shadow:0px 0px 10px rgba(0,0,0,.5);box-shadow:0px 0px 10px rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.modal-header.jsx-856bfaf6c662eb1d{margin-bottom:5px}.modal-footer.jsx-856bfaf6c662eb1d{margin-top:5px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.movie-info.jsx-856bfaf6c662eb1d{background-color:#1f5d57;color:#cbb26a;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-top:2px;text-align:center;width:80%;max-width:600px;height:auto}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"xIgm7xwBMrYNIIyCiJ8PkQD9tV0=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztzRUFBYztzQ0FDZiw0RUFBQ1U7Z0NBQU9DLFNBQVMsSUFBTTVCLGtCQUFrQjs7MENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTS9DLDhEQUFDaUI7MERBQWM7MEJBQ2IsNEVBQUN6QixtREFBS0E7b0JBQUM2RCxXQUFVO29CQUNmWCxLQUFLakQsa0VBQWNBO29CQUNuQm1ELEtBQUk7b0JBQ0pVLE9BQU87b0JBQ1BSLFFBQVE7Ozs7Ozs7Ozs7OzBCQUtkLDhEQUFDdkQsa0RBQUlBO2dCQUFDZ0UsTUFBSztnQkFBYUMsY0FBYzswQkFBQyw0RUFBQ0M7OERBQVk7OEJBQTBCOzs7Ozs7Ozs7OzswQkFDOUUsOERBQUNsRSxrREFBSUE7Z0JBQUNnRSxNQUFLO2dCQUFTQyxjQUFjOzBCQUFDLDRFQUFDQzs4REFBWTs4QkFBcUI7Ozs7Ozs7Ozs7OzBCQUNyRSw4REFBQ2xFLGtEQUFJQTtnQkFBQ2dFLE1BQUs7Z0JBQVlDLGNBQWM7MEJBQUMsNEVBQUNDOzhEQUFZOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBRTFFLDhEQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REw7R0ExSnNCOUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTW92aWVNaXhlckxvZ28gZnJvbSBcIi4uL2ltYWdlcy9Nb3ZpZU1peGVyTG9nby5wbmdcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtyYW5kb21Nb3ZpZSwgc2V0UmFuZG9tTW92aWVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBBZGQgdGhpcyBzdGF0ZVxuICBjb25zdCBsYW5ndWFnZU1hcHBpbmcgPSB7XG4gICAgJ2VuLVVTJzogJ0VuZ2xpc2gnLFxuICB9O1xuXG4gIGNvbnN0IGdldFJhbmRvbU1vdmllID0gKCkgPT4ge1xuICAgIGZldGNoUmFuZG9tTW92aWUoKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFJhbmRvbU1vdmllID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXRfcmFuZG9tX21vdmllLycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXNwb25zZS5kYXRhLnJlc3VsdHM7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzdWx0cy5sZW5ndGgpO1xuICAgICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTtcbiAgICAgICAgc2V0UmFuZG9tTW92aWUocmVzdWx0c1tyYW5kb21JbmRleF0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzE3NzI3NDcxNy9waG90by9hYnN0cmFjdC1tdWx0aW1lZGlhLWJhY2tncm91bmQtY29tcG9zZWQtb2YtbWFueS1pbWFnZXMtd2l0aC1jb3B5LmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz1WMEc0Wi1nbE5LenVJMVp2UU1PYmkzXzBQdXhVSE9xenVyN2Q1TFhCMjlVPVwiKScsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH19PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b20gcC0yIG10LTUgbWItMSBidG4tbGdcIiBvbkNsaWNrPSB7Z2V0UmFuZG9tTW92aWV9PkdldCBSYW5kb20gTW92aWU8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIHtpc01vZGFsVmlzaWJsZSAmJiByYW5kb21Nb3ZpZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgyPllvdXIgUmFuZG9tIE1vdmllIElzOjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGZvbnRXZWlnaHQ6ICdib2xkZXInIH19PntyYW5kb21Nb3ZpZS50aXRsZVRleHQudGV4dH08L3A+XG4gIFxuICB7cmFuZG9tTW92aWUucmVsZWFzZVllYXIgJiYgKFxuICAgIDxkaXY+XG4gICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPlllYXIgb2YgUmVsZWFzZToge3JhbmRvbU1vdmllLnJlbGVhc2VZZWFyLnllYXJ9PC9wPlxuICAgIDxwPkdlbnJlOiB7cmFuZG9tTW92aWUuZ2VucmVzLmdlbnJlc1swXS50ZXh0fTwvcD5cbiAgICA8cD5SdW50aW1lOiB7TWF0aC5mbG9vcihyYW5kb21Nb3ZpZS5ydW50aW1lLnNlY29uZHMgLyAzNjAwKX0gaG91cnMge01hdGguZmxvb3IoKHJhbmRvbU1vdmllLnJ1bnRpbWUuc2Vjb25kcyAlIDM2MDApIC8gNjApfSBtaW51dGVzPC9wPlxuICAgIDwvZGl2PlxuICApfVxuICBcbiAge3JhbmRvbU1vdmllLnByaW1hcnlJbWFnZSAmJiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0zXCI+XG4gICAgICA8aW1nIHNyYz17cmFuZG9tTW92aWUucHJpbWFyeUltYWdlLnVybH0gYWx0PVwiTW92aWUgUG9zdGVyXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3R5bGU9e3sgbWF4V2lkdGg6ICcyMDBweCcsIGhlaWdodDogJ2F1dG8nIH19IC8+XG4gICAgPC9kaXY+XG4gICl9XG4gIFxuICB7cmFuZG9tTW92aWUucHJpbWFyeUltYWdlICYmIHJhbmRvbU1vdmllLnByaW1hcnlJbWFnZS5jYXB0aW9uICYmIChcbiAgICA8ZGl2PlxuICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGl0YWxpY2l6ZWRcIj57cmFuZG9tTW92aWUucHJpbWFyeUltYWdlLmNhcHRpb24ucGxhaW5UZXh0fTwvcD5cbiAgICA8cD5EZXNjcmlwdGlvbjoge3JhbmRvbU1vdmllLnBsb3QucGxvdFRleHQucGxhaW5UZXh0fTwvcD5cbiAgICA8cD5MYW5ndWFnZToge2xhbmd1YWdlTWFwcGluZ1tyYW5kb21Nb3ZpZS5wbG90Lmxhbmd1YWdlLmlkXX08L3A+XG4gICAgPC9kaXY+XG4gICl9XG48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKX0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbil9XG4gXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICBzcmM9e01vdmllTWl4ZXJMb2dvfVxuICAgICAgICAgICAgICBhbHQ9XCJNb3ZpZU1peGVyIExvZ29cIlxuICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCIgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b20gbXQtNCBtLTJcIj5EYXNoYm9hcmQ8L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b20gbS0yXCI+TG9naW48L2E+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCIgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jdXN0b20gbS0yXCI+U2lnbiBVcC1JdCdzIEZyZWUhPC9hPjwvTGluaz5cblxuICAgICAgPGJyPjwvYnI+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgLmJ0bi1jdXN0b217XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjVENTc7XG4gICAgICAgIGNvbG9yOiAjQ0JCMjZBO1xuICAgICAgfVxuICAgICAgXG4gICAgICAudGV4dC1jdXN0b20ge1xuICAgICAgICBjb2xvcjogI0NCQjI2QTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5tb3ZpZS1tb2RhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwOyAgICAgICAgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICB9XG4gICAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gIFxuICAgICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDsgLyogQWRkIHNwYWNlIGJlbG93IGhlYWRlciAqL1xuICAgICAgfVxuICBcbiAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7IC8qIEFkZCBzcGFjZSBhYm92ZSBmb290ZXIgKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5tb3ZpZS1pbmZvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFGNUQ1NzsgLyogU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXG4gICAgICAgIGNvbG9yOiAjQ0JCMjZBOyAvKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cbiAgICAgICAgcGFkZGluZzogMjBweDsgLyogQWRkIHNvbWUgcGFkZGluZyBmb3Igc3BhY2luZyAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIEFkZCByb3VuZGVkIGNvcm5lcnMgKi9cbiAgICAgICAgbWFyZ2luLXRvcDogMnB4OyAvKiBBZGQgc3BhY2luZyBmcm9tIHRoZSBidXR0b24gKi9cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIHRleHQgKi9cbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICBcbiAgICAgIFxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIFxuICAgIDwvZGl2PlxuICApO1xuICB9Il0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIk1vdmllTWl4ZXJMb2dvIiwidXNlU3RhdGUiLCJheGlvcyIsIlBhZ2UiLCJyYW5kb21Nb3ZpZSIsInNldFJhbmRvbU1vdmllIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsImxhbmd1YWdlTWFwcGluZyIsImdldFJhbmRvbU1vdmllIiwiZmV0Y2hSYW5kb21Nb3ZpZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJkYXRhIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsInAiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0aXRsZVRleHQiLCJ0ZXh0IiwicmVsZWFzZVllYXIiLCJ5ZWFyIiwiZ2VucmVzIiwicnVudGltZSIsInNlY29uZHMiLCJwcmltYXJ5SW1hZ2UiLCJpbWciLCJzcmMiLCJ1cmwiLCJhbHQiLCJtYXhXaWR0aCIsImhlaWdodCIsImNhcHRpb24iLCJwbGFpblRleHQiLCJwbG90IiwicGxvdFRleHQiLCJsYW5ndWFnZSIsImlkIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});