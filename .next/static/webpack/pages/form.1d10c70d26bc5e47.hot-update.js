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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst availableSymbols = [];\nfor(let i = 0; i <= 99; i++){\n    if (i === 9) {\n        availableSymbols.push(\"&\");\n    } else {\n        availableSymbols.push(String.fromCharCode(0x2460 + i));\n    }\n}\nconst QAForm = ()=>{\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isFirstSlide, setIsFirstSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [answers, setAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedFirstSlide = localStorage.getItem(\"isFirstSlide\");\n        if (storedFirstSlide !== null) {\n            setIsFirstSlide(JSON.parse(storedFirstSlide));\n        }\n    }, []);\n    const handleAnswerClick = (answer)=>{\n        setAnswers([\n            ...answers,\n            answer\n        ]);\n        handleNextQuestion();\n    };\n    const handleNextQuestion = ()=>{\n        if (currentQuestion < QAForm.questions.length - 1) {\n            setCurrentQuestion(currentQuestion + 1);\n        } else {\n            setCurrentQuestion(0); // Restart the form if all questions are answered\n            setAnswers([]);\n        }\n    };\n    const QAForm = {\n        \"questions\": [\n            \"All Questions are optional. Feel free to answer all of them, or as many as you want. Once you have clicked your chosen answer, please press Next.\",\n            \"What kind of mood are you in?\",\n            \"What genre of movie would you like to watch?\",\n            \"What decade of movie would you like to watch?\",\n            \"About How Long do you want to watch a movie?\",\n            \"What rating(s) movie would you like to see?\",\n            \"Finally, do you want to watch movies that have won any special awards?\"\n        ],\n        \"answers\": [\n            [],\n            [\n                \"Happy\",\n                \"Sad\",\n                \"Excited\",\n                \"Calm\"\n            ],\n            [\n                \"Action\",\n                \"Comedy\",\n                \"Drama\",\n                \"Sci-Fi\",\n                \"Superhero\"\n            ],\n            [\n                \"1950s\",\n                \"1960s\",\n                \"1970s\",\n                \"1980s\",\n                \"1990s\",\n                \"2000s\",\n                \"2010s\",\n                \"2020s\"\n            ],\n            [\n                \"Less than 1 hour\",\n                \"1-2 hours\",\n                \"2-3 hours\",\n                \"No preference\"\n            ],\n            [\n                \"G\",\n                \"PG\",\n                \"PG-13\",\n                \"R\"\n            ],\n            [\n                \"Yes\",\n                \"No\"\n            ]\n        ],\n        \"render\": function() {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"card-title\",\n                        children: this.questions[currentQuestion]\n                    }, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"answers\",\n                        children: this.answers[currentQuestion].map((answer, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"anwer-button\",\n                                onClick: ()=>handleAnswerClick(answer),\n                                children: answer\n                            }, index, false, {\n                                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-circle\",\n                        onClick: handleNextQuestion,\n                        children: currentQuestion === QAForm.questions.length - 1 ? \"Restart\" : \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: QAForm.render()\n    }, void 0, false, {\n        fileName: \"/Users/tylerstamm/Documents/Capstone/CAPSTONE-front-end/src/pages/form/index.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QAForm, \"DcW3Dn/wGWrh1n7w8jZ9agHIlK8=\");\n_c = QAForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QAForm);\nvar _c;\n$RefreshReg$(_c, \"QAForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZm9ybS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1FLG1CQUFtQixFQUFFO0FBQzNCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxLQUFLLElBQUlBLElBQUs7SUFDNUIsSUFBSUEsTUFBTSxHQUFHO1FBQ1hELGlCQUFpQkUsSUFBSSxDQUFDO0lBQ3hCLE9BQU87UUFDTEYsaUJBQWlCRSxJQUFJLENBQUNDLE9BQU9DLFlBQVksQ0FBQyxTQUFTSDtJQUNyRDtBQUNGO0FBRUEsTUFBTUksU0FBUzs7SUFDYixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxtQkFBbUJDLGFBQWFDLE9BQU8sQ0FBQztRQUM5QyxJQUFJRixxQkFBcUIsTUFBTTtZQUM3QkgsZ0JBQWdCTSxLQUFLQyxLQUFLLENBQUNKO1FBQzdCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssb0JBQW9CLENBQUNDO1FBQ3pCUCxXQUFXO2VBQUlEO1lBQVNRO1NBQU87UUFDL0JDO0lBQ0E7SUFFQSxNQUFNQSxxQkFBcUI7UUFDdkIsSUFBSWIsa0JBQWtCRCxPQUFPZSxTQUFTLENBQUNDLE1BQU0sR0FBRyxHQUFHO1lBQ2pEZCxtQkFBbUJELGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0xDLG1CQUFtQixJQUFJLGlEQUFpRDtZQUN4RUksV0FBVyxFQUFFO1FBQ2Y7SUFDRjtJQUVKLE1BQU1OLFNBQVM7UUFDYixhQUFhO1lBQUM7WUFBb0o7WUFDaks7WUFDQztZQUNDO1lBQ0M7WUFDQztTQUNBO1FBQ0QsV0FBVztZQUNQLEVBQUU7WUFDRjtnQkFBQztnQkFBUztnQkFBTztnQkFBVzthQUFPO1lBQ25DO2dCQUFDO2dCQUFVO2dCQUFVO2dCQUFTO2dCQUFVO2FBQVk7WUFDcEQ7Z0JBQUM7Z0JBQVM7Z0JBQVM7Z0JBQVM7Z0JBQVM7Z0JBQVM7Z0JBQVM7Z0JBQVM7YUFBUTtZQUN4RTtnQkFBQztnQkFBb0I7Z0JBQWE7Z0JBQWE7YUFBZ0I7WUFDL0Q7Z0JBQUM7Z0JBQUs7Z0JBQU07Z0JBQVM7YUFBSTtZQUN6QjtnQkFBQztnQkFBTzthQUFLO1NBQ2Q7UUFDRCxVQUFVO1lBQ2QscUJBQ0UsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFjLElBQUksQ0FBQ0gsU0FBUyxDQUFDZCxnQkFBZ0I7Ozs7OztrQ0FDM0QsOERBQUNnQjt3QkFBSUMsV0FBVTtrQ0FBVyxJQUFJLENBQUNiLE9BQU8sQ0FBQ0osZ0JBQWdCLENBQUNtQixHQUFHLENBQUMsQ0FBQ1AsUUFBUVEsc0JBQ25FLDhEQUFDQztnQ0FBbUJKLFdBQVU7Z0NBQWVLLFNBQVMsSUFBTVgsa0JBQWtCQzswQ0FBVUE7K0JBQTNFUTs7Ozs7Ozs7OztrQ0FHZiw4REFBQ0M7d0JBQU9KLFdBQVU7d0JBQWFLLFNBQVNUO2tDQUNyQ2Isb0JBQW9CRCxPQUFPZSxTQUFTLENBQUNDLE1BQU0sR0FBRyxJQUFJLFlBQVk7Ozs7Ozs7Ozs7OztRQUl2RTtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1psQixPQUFPd0IsTUFBTTs7Ozs7O0FBR3BCO0dBaEVNeEI7S0FBQUE7QUFrRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zvcm0vaW5kZXguanM/MzcxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhdmFpbGFibGVTeW1ib2xzID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8PSA5OTsgaSsrKSB7XG4gIGlmIChpID09PSA5KSB7XG4gICAgYXZhaWxhYmxlU3ltYm9scy5wdXNoKFwiJlwiKTtcbiAgfSBlbHNlIHtcbiAgICBhdmFpbGFibGVTeW1ib2xzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgweDI0NjAgKyBpKSk7XG4gIH1cbn1cblxuY29uc3QgUUFGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0ZpcnN0U2xpZGUsIHNldElzRmlyc3RTbGlkZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Fuc3dlcnMsIHNldEFuc3dlcnNdID0gdXNlU3RhdGUodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZEZpcnN0U2xpZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzRmlyc3RTbGlkZVwiKTtcbiAgICBpZiAoc3RvcmVkRmlyc3RTbGlkZSAhPT0gbnVsbCkge1xuICAgICAgc2V0SXNGaXJzdFNsaWRlKEpTT04ucGFyc2Uoc3RvcmVkRmlyc3RTbGlkZSkpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUFuc3dlckNsaWNrID0gKGFuc3dlcikgPT4ge1xuICAgIHNldEFuc3dlcnMoWy4uLmFuc3dlcnMsIGFuc3dlcl0pO1xuICAgIGhhbmRsZU5leHRRdWVzdGlvbigpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVOZXh0UXVlc3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UXVlc3Rpb24gPCBRQUZvcm0ucXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBzZXRDdXJyZW50UXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKDApOyAvLyBSZXN0YXJ0IHRoZSBmb3JtIGlmIGFsbCBxdWVzdGlvbnMgYXJlIGFuc3dlcmVkXG4gICAgICAgICAgc2V0QW5zd2VycyhbXSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgY29uc3QgUUFGb3JtID0ge1xuICAgIFwicXVlc3Rpb25zXCI6IFtcIkFsbCBRdWVzdGlvbnMgYXJlIG9wdGlvbmFsLiBGZWVsIGZyZWUgdG8gYW5zd2VyIGFsbCBvZiB0aGVtLCBvciBhcyBtYW55IGFzIHlvdSB3YW50LiBPbmNlIHlvdSBoYXZlIGNsaWNrZWQgeW91ciBjaG9zZW4gYW5zd2VyLCBwbGVhc2UgcHJlc3MgTmV4dC5cIixcIldoYXQga2luZCBvZiBtb29kIGFyZSB5b3UgaW4/XCIsXG4gICAgIFwiV2hhdCBnZW5yZSBvZiBtb3ZpZSB3b3VsZCB5b3UgbGlrZSB0byB3YXRjaD9cIixcbiAgICAgIFwiV2hhdCBkZWNhZGUgb2YgbW92aWUgd291bGQgeW91IGxpa2UgdG8gd2F0Y2g/XCIsXG4gICAgICAgXCJBYm91dCBIb3cgTG9uZyBkbyB5b3Ugd2FudCB0byB3YXRjaCBhIG1vdmllP1wiLFxuICAgICAgICBcIldoYXQgcmF0aW5nKHMpIG1vdmllIHdvdWxkIHlvdSBsaWtlIHRvIHNlZT9cIixcbiAgICAgICAgIFwiRmluYWxseSwgZG8geW91IHdhbnQgdG8gd2F0Y2ggbW92aWVzIHRoYXQgaGF2ZSB3b24gYW55IHNwZWNpYWwgYXdhcmRzP1wiXG4gICAgICAgIF0sXG4gICAgICAgIFwiYW5zd2Vyc1wiOiBbXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgIFtcIkhhcHB5XCIsIFwiU2FkXCIsIFwiRXhjaXRlZFwiLCBcIkNhbG1cIl0sXG4gICAgICAgICAgICBbXCJBY3Rpb25cIiwgXCJDb21lZHlcIiwgXCJEcmFtYVwiLCBcIlNjaS1GaVwiLCBcIlN1cGVyaGVyb1wiXSxcbiAgICAgICAgICAgIFtcIjE5NTBzXCIsIFwiMTk2MHNcIiwgXCIxOTcwc1wiLCBcIjE5ODBzXCIsIFwiMTk5MHNcIiwgXCIyMDAwc1wiLCBcIjIwMTBzXCIsIFwiMjAyMHNcIl0sXG4gICAgICAgICAgICBbXCJMZXNzIHRoYW4gMSBob3VyXCIsIFwiMS0yIGhvdXJzXCIsIFwiMi0zIGhvdXJzXCIsIFwiTm8gcHJlZmVyZW5jZVwiXSxcbiAgICAgICAgICAgIFtcIkdcIiwgXCJQR1wiLCBcIlBHLTEzXCIsIFwiUlwiXSxcbiAgICAgICAgICAgIFtcIlllc1wiLCBcIk5vXCJdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJlbmRlclwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt0aGlzLnF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJzXCI+e3RoaXMuYW5zd2Vyc1tjdXJyZW50UXVlc3Rpb25dLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2Fud2VyLWJ1dHRvbicgb25DbGljaz17KCkgPT4gaGFuZGxlQW5zd2VyQ2xpY2soYW5zd2VyKX0+e2Fuc3dlcn08L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1jaXJjbGVcIiBvbkNsaWNrPXtoYW5kbGVOZXh0UXVlc3Rpb259PlxuICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbiA9PT0gUUFGb3JtLnF1ZXN0aW9ucy5sZW5ndGggLSAxID8gXCJSZXN0YXJ0XCIgOiBcIk5leHRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICB7UUFGb3JtLnJlbmRlcigpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUUFGb3JtO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXZhaWxhYmxlU3ltYm9scyIsImkiLCJwdXNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiUUFGb3JtIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwiaXNGaXJzdFNsaWRlIiwic2V0SXNGaXJzdFNsaWRlIiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJzdG9yZWRGaXJzdFNsaWRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImhhbmRsZUFuc3dlckNsaWNrIiwiYW5zd2VyIiwiaGFuZGxlTmV4dFF1ZXN0aW9uIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/form/index.js\n"));

/***/ })

});