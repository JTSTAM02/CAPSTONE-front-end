"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/form",{

/***/ "./src/pages/form/index.js":
/*!*********************************!*\
  !*** ./src/pages/form/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_FinalRecommendation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FinalRecommendation */ \"./src/components/FinalRecommendation.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navigation */ \"./src/components/Navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst QAForm = ()=>{\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isFirstSlide, setIsFirstSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userAnswers, setUserAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [recommendedMovie, setRecommendedMovie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showRecommendation, setShowRecommendation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [randomMovie, setRandomMovie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedFirstSlide = localStorage.getItem(\"isFirstSlide\");\n        if (storedFirstSlide !== null) {\n            setIsFirstSlide(JSON.parse(storedFirstSlide));\n        }\n    }, []);\n    const questions = [\n        \"All Questions are optional. Feel free to answer all of them, or as many as you want. Once you have chosen your answer, please click Next.\",\n        \"What kind of mood are you in?\",\n        \"What genre of movie would you like to watch?\",\n        \"What decade of movie would you like to watch?\",\n        \"About How long do you want to watch a movie?\",\n        \"What rating movie would you like to see?\",\n        \"Finally, do you want to watch movies that have won any special awards?\"\n    ];\n    const answers = [\n        [],\n        [\n            \"Happy\",\n            \"Sad\",\n            \"Excited\",\n            \"Calm\",\n            \"Bored\"\n        ],\n        [\n            \"Action\",\n            \"Comedy\",\n            \"Drama\",\n            \"Sci-Fi\",\n            \"Superhero\",\n            \"Horror\"\n        ],\n        [\n            \"1950s\",\n            \"1960s\",\n            \"1970s\",\n            \"1980s\",\n            \"1990s\",\n            \"2000s\",\n            \"2010s\",\n            \"2020s\"\n        ],\n        [\n            \"Less than 90 minutes\",\n            \"About 2 hours\",\n            \"2-3 hours\",\n            \"Longer than 3 Hours\",\n            \"No preference\"\n        ],\n        [\n            \"G\",\n            \"PG\",\n            \"PG-13\",\n            \"R\"\n        ],\n        [\n            \"Yes\",\n            \"No\",\n            \"No Preference\"\n        ]\n    ];\n    const getRandomMovie = ()=>{\n        fetchRandomMovie();\n    };\n    const fetchRandomMovie = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api/get_random_movie/\").then((response)=>{\n            const results = response.data.results;\n            const randomIndex = Math.floor(Math.random() * results.length);\n            setIsModalVisible(true); // Show the modal when random movie is fetched\n            setRandomMovie(results[randomIndex]);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    const handleAnswerClick = (answer)=>{\n        setSelectedAnswer(answer);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (selectedAnswer !== \"\") {\n            handleNextQuestion();\n        }\n    }, [\n        selectedAnswer\n    ]);\n    const handleNextQuestion = async ()=>{\n        if (currentQuestion < questions.length - 1) {\n            setUserAnswers([\n                ...userAnswers,\n                selectedAnswer\n            ]);\n            setSelectedAnswer(\"\");\n            setCurrentQuestion(currentQuestion + 1);\n        } else {\n            setCurrentQuestion(0);\n            setUserAnswers([]);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"api/get-movie-recommendation\", {\n                answers: userAnswers\n            });\n            const recommendedMovie = response.data.recommendedMovie;\n            setRecommendedMovie(recommendedMovie);\n            setShowRecommendation(true);\n        }\n    };\n    const handleGetYourMovie = ()=>{\n        setShowRecommendation(true);\n        setIsModalVisible(true);\n    };\n    // const handleNextQuestion = () => {\n    //     if (selectedAnswer !== '') {\n    //       setUserAnswers([...userAnswers, selectedAnswer]); // Update the userAnswers here\n    //       setSelectedAnswer('');\n    //       if (currentQuestion < questions.length - 1) {\n    //         setCurrentQuestion(currentQuestion + 1);\n    //       } else {\n    //         // Call your API here with userAnswers\n    //         fetchMovieRecommendation(userAnswers);\n    //       }\n    //     }\n    //   };\n    //   const fetchMovieRecommendation = async (answers) => {\n    //     try {\n    //       const response = await axios.post('api/get-movie-recommendation', { answers });\n    //       const recommendedMovie = response.data.recommendedMovie;\n    //       setRecommendedMovie(recommendedMovie);\n    //       setShowRecommendation(true);\n    //     } catch (error) {\n    //       console.error('Error fetching movie recommendation:', error);\n    //     }\n    //   };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            color: \"white\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                lineNumber: 133,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    style: {\n                        padding: \"10px\",\n                        textAlign: \"center\",\n                        backgroundColor: \"#1F5D57\",\n                        color: \"#CBB26A\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"card-title\",\n                            children: questions[currentQuestion]\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"answers\",\n                            style: {\n                                display: \"flex\",\n                                flexDirection: \"column\",\n                                alignItems: \"center\"\n                            },\n                            children: answers[currentQuestion].map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        width: \"200px\",\n                                        padding: \"5px\",\n                                        margin: \"4px\",\n                                        backgroundColor: \"#CBB26A\"\n                                    },\n                                    className: \"answer-button \".concat(selectedAnswer === answer ? \"selected\" : \"\"),\n                                    onClick: ()=>handleAnswerClick(answer),\n                                    children: answer\n                                }, index, false, {\n                                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                                    lineNumber: 140,\n                                    columnNumber: 21\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                            lineNumber: 149,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-circle\",\n                            style: {\n                                backgroundColor: \"#CBB26A\",\n                                width: \"120px\",\n                                padding: \"10px\",\n                                margin: \"0 auto\",\n                                display: \"block\",\n                                border: \"solid #CBB26A\"\n                            },\n                            onClick: handleNextQuestion,\n                            children: currentQuestion === questions.length - 1 ? \"Get Your Movie\" : \"Next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                            lineNumber: 150,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                lineNumber: 135,\n                columnNumber: 1\n            }, undefined),\n            isModalVisible && showRecommendation && recommendedMovie && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movie-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"modal-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"modal-header\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Your Random Movie Is:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                                lineNumber: 162,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                            lineNumber: 161,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"modal-body\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: recommendedMovie.titleText.text\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                                lineNumber: 165,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                            lineNumber: 164,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"modal-footer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsModalVisible(false),\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                                lineNumber: 168,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                            lineNumber: 167,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                    lineNumber: 160,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                lineNumber: 159,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QAForm, \"Arkdwhwa+56ygLwZOQNwa3BDvyk=\");\n_c = QAForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QAForm);\nvar _c;\n$RefreshReg$(_c, \"QAForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCQzs4Q0FFaENBO21DQUpJcUI7Ozs7Ozs7Ozs7c0NBUWYsOERBQUNLOzs7OztzQ0FDRCw4REFBQ0o7NEJBQU9QLFdBQVU7NEJBQ2hCVixPQUFPO2dDQUFFYSxpQkFBaUI7Z0NBQVdLLE9BQU87Z0NBQVNQLFNBQVM7Z0NBQVFRLFFBQVE7Z0NBQVVkLFNBQVM7Z0NBQVNpQixRQUFROzRCQUFnQjs0QkFDbElGLFNBQVN4QjtzQ0FDUnhDLG9CQUFvQnFCLFVBQVVhLE1BQU0sR0FBRyxJQUFJLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLcEV0QixrQkFBa0JGLHNCQUFzQkYsa0NBQ3ZDLDhEQUFDbUM7Z0JBQUlXLFdBQVU7MEJBQ2IsNEVBQUNYO29CQUFJVyxXQUFVOztzQ0FDYiw4REFBQ1g7NEJBQUlXLFdBQVU7c0NBQ2IsNEVBQUNJOzBDQUFHOzs7Ozs7Ozs7OztzQ0FFTiw4REFBQ2Y7NEJBQUlXLFdBQVU7c0NBQ2IsNEVBQUNhOzBDQUFHM0QsaUJBQWlCNEQsU0FBUyxDQUFDQyxJQUFJOzs7Ozs7Ozs7OztzQ0FFckMsOERBQUMxQjs0QkFBSVcsV0FBVTtzQ0FDYiw0RUFBQ087Z0NBQU9HLFNBQVMsSUFBTW5ELGtCQUFrQjswQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDL0Q7R0ExTU1kO0tBQUFBO0FBNE1OLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9mb3JtL2luZGV4LmpzPzM3MTciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBGaW5hbFJlY29tbWVuZGF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmluYWxSZWNvbW1lbmRhdGlvbic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5jb25zdCBRQUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzRmlyc3RTbGlkZSwgc2V0SXNGaXJzdFNsaWRlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2VsZWN0ZWRBbnN3ZXIsIHNldFNlbGVjdGVkQW5zd2VyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VzZXJBbnN3ZXJzLCBzZXRVc2VyQW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZWNvbW1lbmRlZE1vdmllLCBzZXRSZWNvbW1lbmRlZE1vdmllXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvd1JlY29tbWVuZGF0aW9uLCBzZXRTaG93UmVjb21tZW5kYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JhbmRvbU1vdmllLCBzZXRSYW5kb21Nb3ZpZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZEZpcnN0U2xpZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzRmlyc3RTbGlkZVwiKTtcbiAgICBpZiAoc3RvcmVkRmlyc3RTbGlkZSAhPT0gbnVsbCkge1xuICAgICAgc2V0SXNGaXJzdFNsaWRlKEpTT04ucGFyc2Uoc3RvcmVkRmlyc3RTbGlkZSkpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHF1ZXN0aW9ucyA9IFtcbiAgICBcIkFsbCBRdWVzdGlvbnMgYXJlIG9wdGlvbmFsLiBGZWVsIGZyZWUgdG8gYW5zd2VyIGFsbCBvZiB0aGVtLCBvciBhcyBtYW55IGFzIHlvdSB3YW50LiBPbmNlIHlvdSBoYXZlIGNob3NlbiB5b3VyIGFuc3dlciwgcGxlYXNlIGNsaWNrIE5leHQuXCIsXG4gICAgXCJXaGF0IGtpbmQgb2YgbW9vZCBhcmUgeW91IGluP1wiLFxuICAgIFwiV2hhdCBnZW5yZSBvZiBtb3ZpZSB3b3VsZCB5b3UgbGlrZSB0byB3YXRjaD9cIixcbiAgICBcIldoYXQgZGVjYWRlIG9mIG1vdmllIHdvdWxkIHlvdSBsaWtlIHRvIHdhdGNoP1wiLFxuICAgIFwiQWJvdXQgSG93IGxvbmcgZG8geW91IHdhbnQgdG8gd2F0Y2ggYSBtb3ZpZT9cIixcbiAgICBcIldoYXQgcmF0aW5nIG1vdmllIHdvdWxkIHlvdSBsaWtlIHRvIHNlZT9cIixcbiAgICBcIkZpbmFsbHksIGRvIHlvdSB3YW50IHRvIHdhdGNoIG1vdmllcyB0aGF0IGhhdmUgd29uIGFueSBzcGVjaWFsIGF3YXJkcz9cIlxuICBdO1xuXG4gIGNvbnN0IGFuc3dlcnMgPSBbXG4gICAgW10sXG4gICAgW1wiSGFwcHlcIiwgXCJTYWRcIiwgXCJFeGNpdGVkXCIsIFwiQ2FsbVwiLCBcIkJvcmVkXCJdLFxuICAgIFtcIkFjdGlvblwiLCBcIkNvbWVkeVwiLCBcIkRyYW1hXCIsIFwiU2NpLUZpXCIsIFwiU3VwZXJoZXJvXCIsIFwiSG9ycm9yXCJdLFxuICAgIFtcIjE5NTBzXCIsIFwiMTk2MHNcIiwgXCIxOTcwc1wiLCBcIjE5ODBzXCIsIFwiMTk5MHNcIiwgXCIyMDAwc1wiLCBcIjIwMTBzXCIsIFwiMjAyMHNcIl0sXG4gICAgW1wiTGVzcyB0aGFuIDkwIG1pbnV0ZXNcIiwgXCJBYm91dCAyIGhvdXJzXCIsIFwiMi0zIGhvdXJzXCIsXCJMb25nZXIgdGhhbiAzIEhvdXJzXCIsIFwiTm8gcHJlZmVyZW5jZVwiXSxcbiAgICBbXCJHXCIsIFwiUEdcIiwgXCJQRy0xM1wiLCBcIlJcIl0sXG4gICAgW1wiWWVzXCIsIFwiTm9cIiwgXCJObyBQcmVmZXJlbmNlXCJdXG4gIF07XG5cbiAgY29uc3QgZ2V0UmFuZG9tTW92aWUgPSAoKSA9PiB7XG4gICAgZmV0Y2hSYW5kb21Nb3ZpZSgpO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoUmFuZG9tTW92aWUgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldF9yYW5kb21fbW92aWUvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHJlc3BvbnNlLmRhdGEucmVzdWx0cztcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXN1bHRzLmxlbmd0aCk7XG4gICAgICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpOyAvLyBTaG93IHRoZSBtb2RhbCB3aGVuIHJhbmRvbSBtb3ZpZSBpcyBmZXRjaGVkXG4gICAgICAgIHNldFJhbmRvbU1vdmllKHJlc3VsdHNbcmFuZG9tSW5kZXhdKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFuc3dlckNsaWNrID0gKGFuc3dlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkQW5zd2VyKGFuc3dlcik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRBbnN3ZXIgIT09ICcnKSB7XG4gICAgICBoYW5kbGVOZXh0UXVlc3Rpb24oKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZEFuc3dlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHRRdWVzdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoY3VycmVudFF1ZXN0aW9uIDwgcXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldFVzZXJBbnN3ZXJzKFsuLi51c2VyQW5zd2Vycywgc2VsZWN0ZWRBbnN3ZXJdKTtcbiAgICAgIHNldFNlbGVjdGVkQW5zd2VyKCcnKTtcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKDApO1xuICAgICAgc2V0VXNlckFuc3dlcnMoW10pO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnYXBpL2dldC1tb3ZpZS1yZWNvbW1lbmRhdGlvbicsIHthbnN3ZXJzOiB1c2VyQW5zd2Vyc30pO1xuICAgIGNvbnN0IHJlY29tbWVuZGVkTW92aWUgPSByZXNwb25zZS5kYXRhLnJlY29tbWVuZGVkTW92aWU7XG5cbiAgICBzZXRSZWNvbW1lbmRlZE1vdmllKHJlY29tbWVuZGVkTW92aWUpO1xuICAgIHNldFNob3dSZWNvbW1lbmRhdGlvbih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlR2V0WW91ck1vdmllID0gKCkgPT4ge1xuICAgIHNldFNob3dSZWNvbW1lbmRhdGlvbih0cnVlKTtcbiAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKVxuICB9O1xuXG4vLyBjb25zdCBoYW5kbGVOZXh0UXVlc3Rpb24gPSAoKSA9PiB7XG4vLyAgICAgaWYgKHNlbGVjdGVkQW5zd2VyICE9PSAnJykge1xuLy8gICAgICAgc2V0VXNlckFuc3dlcnMoWy4uLnVzZXJBbnN3ZXJzLCBzZWxlY3RlZEFuc3dlcl0pOyAvLyBVcGRhdGUgdGhlIHVzZXJBbnN3ZXJzIGhlcmVcbi8vICAgICAgIHNldFNlbGVjdGVkQW5zd2VyKCcnKTtcbi8vICAgICAgIGlmIChjdXJyZW50UXVlc3Rpb24gPCBxdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xuLy8gICAgICAgICBzZXRDdXJyZW50UXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uICsgMSk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAvLyBDYWxsIHlvdXIgQVBJIGhlcmUgd2l0aCB1c2VyQW5zd2Vyc1xuLy8gICAgICAgICBmZXRjaE1vdmllUmVjb21tZW5kYXRpb24odXNlckFuc3dlcnMpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfTtcbiAgXG4vLyAgIGNvbnN0IGZldGNoTW92aWVSZWNvbW1lbmRhdGlvbiA9IGFzeW5jIChhbnN3ZXJzKSA9PiB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnYXBpL2dldC1tb3ZpZS1yZWNvbW1lbmRhdGlvbicsIHsgYW5zd2VycyB9KTtcbi8vICAgICAgIGNvbnN0IHJlY29tbWVuZGVkTW92aWUgPSByZXNwb25zZS5kYXRhLnJlY29tbWVuZGVkTW92aWU7XG4gIFxuLy8gICAgICAgc2V0UmVjb21tZW5kZWRNb3ZpZShyZWNvbW1lbmRlZE1vdmllKTtcbi8vICAgICAgIHNldFNob3dSZWNvbW1lbmRhdGlvbih0cnVlKTtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbW92aWUgcmVjb21tZW5kYXRpb246JywgZXJyb3IpO1xuLy8gICAgIH1cbi8vICAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzE3NzI3NDcxNy9waG90by9hYnN0cmFjdC1tdWx0aW1lZGlhLWJhY2tncm91bmQtY29tcG9zZWQtb2YtbWFueS1pbWFnZXMtd2l0aC1jb3B5LmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz1WMEc0Wi1nbE5LenVJMVp2UU1PYmkzXzBQdXhVSE9xenVyN2Q1TFhCMjlVPVwiKScsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICB9fT5cblxuPE5hdmlnYXRpb24gLz5cblxuPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIsIHRleHRBbGlnbjogJ2NlbnRlcicsIGJhY2tncm91bmRDb2xvcjogJyMxRjVENTcnLCBjb2xvcjogJyNDQkIyNkEnIH19PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJzXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICB7YW5zd2Vyc1tjdXJyZW50UXVlc3Rpb25dLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBwYWRkaW5nOiBcIjVweFwiLCBtYXJnaW46IFwiNHB4XCIsIGJhY2tncm91bmRDb2xvcjogJyNDQkIyNkEnIH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFuc3dlci1idXR0b24gJHtzZWxlY3RlZEFuc3dlciA9PT0gYW5zd2VyID8gJ3NlbGVjdGVkJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFuc3dlckNsaWNrKGFuc3dlcil9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWNpcmNsZVwiXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjQ0JCMjZBJywgd2lkdGg6ICcxMjBweCcsIHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luOiAnMCBhdXRvJywgZGlzcGxheTogJ2Jsb2NrJywgYm9yZGVyOiBcInNvbGlkICNDQkIyNkFcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dFF1ZXN0aW9ufT5cbiAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gPT09IHF1ZXN0aW9ucy5sZW5ndGggLSAxID8gXCJHZXQgWW91ciBNb3ZpZVwiIDogXCJOZXh0XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc01vZGFsVmlzaWJsZSAmJiBzaG93UmVjb21tZW5kYXRpb24gJiYgcmVjb21tZW5kZWRNb3ZpZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtaW5mb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgyPllvdXIgUmFuZG9tIE1vdmllIElzOjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICA8cD57cmVjb21tZW5kZWRNb3ZpZS50aXRsZVRleHQudGV4dH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNNb2RhbFZpc2libGUoZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIsIHRleHRBbGlnbjogJ2NlbnRlcicsIGJhY2tncm91bmRDb2xvcjogJyMxRjVENTcnLFxuICAgICAgICBjb2xvcjogJyNDQkIyNkEnIH19PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJzXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIHthbnN3ZXJzW2N1cnJlbnRRdWVzdGlvbl0ubWFwKChhbnN3ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIHBhZGRpbmc6IFwiNXB4XCIsIG1hcmdpbjogXCI0cHhcIiwgYmFja2dyb3VuZENvbG9yOiAnI0NCQjI2QScgfX1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFuc3dlci1idXR0b24gJHtzZWxlY3RlZEFuc3dlciA9PT0gYW5zd2VyID8gJ3NlbGVjdGVkJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyQ2xpY2soYW5zd2VyKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthbnN3ZXJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tY2lyY2xlXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjQ0JCMjZBJywgd2lkdGg6ICcxMjBweCcsXG4gICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBib3JkZXI6IFwic29saWQgI0NCQjI2QVwiLFxuICAgICAgICB9fSAqL31cbiAgICAgICAgICB7Lyogb25DbGljaz17aGFuZGxlTmV4dFF1ZXN0aW9ufT5cbiAgICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gPT09IHF1ZXN0aW9ucy5sZW5ndGggLSAxID8gXCJSZXN0YXJ0XCIgOiBcIk5leHRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93UmVjb21tZW5kYXRpb24gJiYgcmVjb21tZW5kZWRNb3ZpZSAmJiAoXG4gICAgICAgIDxkaXY+ICovfVxuICAgICAgICB7LyogPEZpbmFsUmVjb21tZW5kYXRpb24gcmVjb21tZW5kZWRNb3ZpZT17cmVjb21tZW5kZWRNb3ZpZX0gLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgb25DbGljaz17aGFuZGxlR2V0WW91ck1vdmllfT5HZXQgWW91ciBNb3ZpZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUUFGb3JtO1xuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkZpbmFsUmVjb21tZW5kYXRpb24iLCJOYXZpZ2F0aW9uIiwiTGluayIsIlFBRm9ybSIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsImlzRmlyc3RTbGlkZSIsInNldElzRmlyc3RTbGlkZSIsInNlbGVjdGVkQW5zd2VyIiwic2V0U2VsZWN0ZWRBbnN3ZXIiLCJ1c2VyQW5zd2VycyIsInNldFVzZXJBbnN3ZXJzIiwicmVjb21tZW5kZWRNb3ZpZSIsInNldFJlY29tbWVuZGVkTW92aWUiLCJzaG93UmVjb21tZW5kYXRpb24iLCJzZXRTaG93UmVjb21tZW5kYXRpb24iLCJpc01vZGFsVmlzaWJsZSIsInNldElzTW9kYWxWaXNpYmxlIiwicmFuZG9tTW92aWUiLCJzZXRSYW5kb21Nb3ZpZSIsInN0b3JlZEZpcnN0U2xpZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicXVlc3Rpb25zIiwiYW5zd2VycyIsImdldFJhbmRvbU1vdmllIiwiZmV0Y2hSYW5kb21Nb3ZpZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJkYXRhIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUFuc3dlckNsaWNrIiwiYW5zd2VyIiwiaGFuZGxlTmV4dFF1ZXN0aW9uIiwicG9zdCIsImhhbmRsZUdldFlvdXJNb3ZpZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiY2xhc3NOYW1lIiwicGFkZGluZyIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsImgyIiwibWFwIiwiaW5kZXgiLCJidXR0b24iLCJ3aWR0aCIsIm1hcmdpbiIsIm9uQ2xpY2siLCJiciIsImJvcmRlciIsInAiLCJ0aXRsZVRleHQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/form/index.js\n"));

/***/ })

});