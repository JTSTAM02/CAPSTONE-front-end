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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst availableSymbols = [];\nfor(let i = 0; i <= 99; i++){\n    if (i === 9) {\n        availableSymbols.push(\"&\");\n    } else {\n        availableSymbols.push(String.fromCharCode(0x2460 + i));\n    }\n}\nconst QAForm = ()=>{\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isFirstSlide, setIsFirstSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedAnswer, setSelectedAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userAnswers, setUserAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedFirstSlide = localStorage.getItem(\"isFirstSlide\");\n        if (storedFirstSlide !== null) {\n            setIsFirstSlide(JSON.parse(storedFirstSlide));\n        }\n    }, []);\n    const handleAnswerClick = (answer)=>{\n        setAnswers([\n            ...answers,\n            answer\n        ]);\n        handleNextQuestion();\n    };\n    const QAForm = {\n        \"questions\": [\n            \"All Questions are optional. Feel free to answer all of them, or as many as you want. Once you have chosen your answer, please click Next.\",\n            \"What kind of mood are you in?\",\n            \"What genre of movie would you like to watch?\",\n            \"What decade of movie would you like to watch?\",\n            \"About How Long do you want to watch a movie?\",\n            \"What rating(s) movie would you like to see?\",\n            \"Finally, do you want to watch movies that have won any special awards?\"\n        ],\n        \"answers\": [\n            [],\n            [\n                \"Happy\",\n                \"Sad\",\n                \"Excited\",\n                \"Calm\"\n            ],\n            [\n                \"Action\",\n                \"Comedy\",\n                \"Drama\",\n                \"Sci-Fi\",\n                \"Superhero\"\n            ],\n            [\n                \"1950s\",\n                \"1960s\",\n                \"1970s\",\n                \"1980s\",\n                \"1990s\",\n                \"2000s\",\n                \"2010s\",\n                \"2020s\"\n            ],\n            [\n                \"Less than 1 hour\",\n                \"1-2 hours\",\n                \"2-3 hours\",\n                \"No preference\"\n            ],\n            [\n                \"G\",\n                \"PG\",\n                \"PG-13\",\n                \"R\"\n            ],\n            [\n                \"Yes\",\n                \"No\"\n            ]\n        ],\n        \"render\": function() {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"card-title\",\n                        children: this.questions[currentQuestion]\n                    }, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"answers\",\n                        children: this.answers[currentQuestion].map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"answer-button \".concat(selectedAnswer === answer ? \"selected\" : \"\"),\n                                onClick: ()=>setSelectedAnswer(answer),\n                                children: answer\n                            }, index, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-circle\",\n                        onClick: handleNextQuestion,\n                        children: currentQuestion === QAForm.questions.length - 1 ? \"Restart\" : \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    const handleNextQuestion = ()=>{\n        if (currentQuestion < QAForm.questions.length - 1) {\n            setUserAnswers([\n                ...userAnswers,\n                selectedAnswer\n            ]);\n            setSelectedAnswer(\"\");\n            setCurrentQuestion(currentQuestion + 1);\n        } else {\n            setCurrentQuestion(0); // Restart the form if all questions are answered\n            setUserAnswers([]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: 'url(\"https://media.istockphoto.com/id/177274717/photo/abstract-multimedia-background-composed-of-many-images-with-copy.jpg?s=612x612&w=0&k=20&c=V0G4Z-glNKzuI1ZvQMObi3_0PuxUHOqzur7d5LXB29U=\")',\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            minHeight: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: QAForm.render()\n        }, void 0, false, {\n            fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n            lineNumber: 94,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QAForm, \"ex7s6bFTKatUr4vbmapWO2PVc7o=\");\n_c = QAForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QAForm);\nvar _c;\n$RefreshReg$(_c, \"QAForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQUlwQjtHQXZGTXJDO0tBQUFBO0FBeUZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9mb3JtL2luZGV4LmpzPzM3MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYXZhaWxhYmxlU3ltYm9scyA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPD0gOTk7IGkrKykge1xuICBpZiAoaSA9PT0gOSkge1xuICAgIGF2YWlsYWJsZVN5bWJvbHMucHVzaChcIiZcIik7XG4gIH0gZWxzZSB7XG4gICAgYXZhaWxhYmxlU3ltYm9scy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyNDYwICsgaSkpO1xuICB9XG59XG5cbmNvbnN0IFFBRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNGaXJzdFNsaWRlLCBzZXRJc0ZpcnN0U2xpZGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEFuc3dlciwgc2V0U2VsZWN0ZWRBbnN3ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlckFuc3dlcnMsIHNldFVzZXJBbnN3ZXJzXT11c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRGaXJzdFNsaWRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0ZpcnN0U2xpZGVcIik7XG4gICAgaWYgKHN0b3JlZEZpcnN0U2xpZGUgIT09IG51bGwpIHtcbiAgICAgIHNldElzRmlyc3RTbGlkZShKU09OLnBhcnNlKHN0b3JlZEZpcnN0U2xpZGUpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVBbnN3ZXJDbGljayA9IChhbnN3ZXIpID0+IHtcbiAgICBzZXRBbnN3ZXJzKFsuLi5hbnN3ZXJzLCBhbnN3ZXJdKTtcbiAgICBoYW5kbGVOZXh0UXVlc3Rpb24oKTtcbiAgICB9O1xuXG4gIGNvbnN0IFFBRm9ybSA9IHtcbiAgICBcInF1ZXN0aW9uc1wiOiBbXCJBbGwgUXVlc3Rpb25zIGFyZSBvcHRpb25hbC4gRmVlbCBmcmVlIHRvIGFuc3dlciBhbGwgb2YgdGhlbSwgb3IgYXMgbWFueSBhcyB5b3Ugd2FudC4gT25jZSB5b3UgaGF2ZSBjaG9zZW4geW91ciBhbnN3ZXIsIHBsZWFzZSBjbGljayBOZXh0LlwiLFwiV2hhdCBraW5kIG9mIG1vb2QgYXJlIHlvdSBpbj9cIixcbiAgICAgXCJXaGF0IGdlbnJlIG9mIG1vdmllIHdvdWxkIHlvdSBsaWtlIHRvIHdhdGNoP1wiLFxuICAgICAgXCJXaGF0IGRlY2FkZSBvZiBtb3ZpZSB3b3VsZCB5b3UgbGlrZSB0byB3YXRjaD9cIixcbiAgICAgICBcIkFib3V0IEhvdyBMb25nIGRvIHlvdSB3YW50IHRvIHdhdGNoIGEgbW92aWU/XCIsXG4gICAgICAgIFwiV2hhdCByYXRpbmcocykgbW92aWUgd291bGQgeW91IGxpa2UgdG8gc2VlP1wiLFxuICAgICAgICAgXCJGaW5hbGx5LCBkbyB5b3Ugd2FudCB0byB3YXRjaCBtb3ZpZXMgdGhhdCBoYXZlIHdvbiBhbnkgc3BlY2lhbCBhd2FyZHM/XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJhbnN3ZXJzXCI6IFtcbiAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgW1wiSGFwcHlcIiwgXCJTYWRcIiwgXCJFeGNpdGVkXCIsIFwiQ2FsbVwiXSxcbiAgICAgICAgICAgIFtcIkFjdGlvblwiLCBcIkNvbWVkeVwiLCBcIkRyYW1hXCIsIFwiU2NpLUZpXCIsIFwiU3VwZXJoZXJvXCJdLFxuICAgICAgICAgICAgW1wiMTk1MHNcIiwgXCIxOTYwc1wiLCBcIjE5NzBzXCIsIFwiMTk4MHNcIiwgXCIxOTkwc1wiLCBcIjIwMDBzXCIsIFwiMjAxMHNcIiwgXCIyMDIwc1wiXSxcbiAgICAgICAgICAgIFtcIkxlc3MgdGhhbiAxIGhvdXJcIiwgXCIxLTIgaG91cnNcIiwgXCIyLTMgaG91cnNcIiwgXCJObyBwcmVmZXJlbmNlXCJdLFxuICAgICAgICAgICAgW1wiR1wiLCBcIlBHXCIsIFwiUEctMTNcIiwgXCJSXCJdLFxuICAgICAgICAgICAgW1wiWWVzXCIsIFwiTm9cIl1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwicmVuZGVyXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt0aGlzLnF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2Vyc1wiPlxuICAgICAgICAgIHt0aGlzLmFuc3dlcnNbY3VycmVudFF1ZXN0aW9uXS5tYXAoKGFuc3dlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYW5zd2VyLWJ1dHRvbiAke3NlbGVjdGVkQW5zd2VyID09PSBhbnN3ZXIgPyAnc2VsZWN0ZWQnIDogJyd9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRBbnN3ZXIoYW5zd2VyKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Fuc3dlcn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWNpcmNsZVwiIG9uQ2xpY2s9e2hhbmRsZU5leHRRdWVzdGlvbn0+XG4gICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uID09PSBRQUZvcm0ucXVlc3Rpb25zLmxlbmd0aCAtIDEgPyBcIlJlc3RhcnRcIiA6IFwiTmV4dFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cbiAgY29uc3QgaGFuZGxlTmV4dFF1ZXN0aW9uID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50UXVlc3Rpb24gPCBRQUZvcm0ucXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldFVzZXJBbnN3ZXJzKFsuLi51c2VyQW5zd2Vycywgc2VsZWN0ZWRBbnN3ZXJdKTtcbiAgICAgIHNldFNlbGVjdGVkQW5zd2VyKCcnKTtcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKDApOyAvLyBSZXN0YXJ0IHRoZSBmb3JtIGlmIGFsbCBxdWVzdGlvbnMgYXJlIGFuc3dlcmVkXG4gICAgICBzZXRVc2VyQW5zd2VycyhbXSk7XG4gICAgfVxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL2lkLzE3NzI3NDcxNy9waG90by9hYnN0cmFjdC1tdWx0aW1lZGlhLWJhY2tncm91bmQtY29tcG9zZWQtb2YtbWFueS1pbWFnZXMtd2l0aC1jb3B5LmpwZz9zPTYxMng2MTImdz0wJms9MjAmYz1WMEc0Wi1nbE5LenVJMVp2UU1PYmkzXzBQdXhVSE9xenVyN2Q1TFhCMjlVPVwiKScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICB9fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAge1FBRm9ybS5yZW5kZXIoKX1cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFFBRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF2YWlsYWJsZVN5bWJvbHMiLCJpIiwicHVzaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIlFBRm9ybSIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsImlzRmlyc3RTbGlkZSIsInNldElzRmlyc3RTbGlkZSIsInNlbGVjdGVkQW5zd2VyIiwic2V0U2VsZWN0ZWRBbnN3ZXIiLCJ1c2VyQW5zd2VycyIsInNldFVzZXJBbnN3ZXJzIiwic3RvcmVkRmlyc3RTbGlkZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJoYW5kbGVBbnN3ZXJDbGljayIsImFuc3dlciIsInNldEFuc3dlcnMiLCJhbnN3ZXJzIiwiaGFuZGxlTmV4dFF1ZXN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJxdWVzdGlvbnMiLCJtYXAiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsZW5ndGgiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/form/index.js\n"));

/***/ })

});