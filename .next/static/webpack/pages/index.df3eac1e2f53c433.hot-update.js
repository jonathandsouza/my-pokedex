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

/***/ "./src/libs/packages/search/context/providers.tsx":
/*!********************************************************!*\
  !*** ./src/libs/packages/search/context/providers.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Provider: function() { return /* binding */ Provider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_graph_ql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/graph-ql */ \"./src/libs/graph-ql/index.ts\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ \"./src/libs/packages/search/context/context.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Provider = (param)=>{\n    let { children } = param;\n    _s();\n    const { loading, error, data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useLazyQuery)(_libs_graph_ql__WEBPACK_IMPORTED_MODULE_1__.QUERIES.GET_ALL_POKEMON, {\n        variables: {\n            offset: 93,\n            take: 10\n        }\n    });\n    var _data_pokemons;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_2__.Context.Provider, {\n        value: {\n            pokemons: (_data_pokemons = data === null || data === void 0 ? void 0 : data.pokemons) !== null && _data_pokemons !== void 0 ? _data_pokemons : [],\n            isLoading: loading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/jonathan/code/bol/mini project/my-pokedex/src/libs/packages/search/context/providers.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Provider, \"bA0GI1QxLyM9woNisbckGhN0ZgE=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useLazyQuery\n    ];\n});\n_c = Provider;\n\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9wYWNrYWdlcy9zZWFyY2gvY29udGV4dC9wcm92aWRlcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ047QUFDb0I7QUFNeEQsTUFBTUcsV0FBVztRQUFDLEVBQUVDLFFBQVEsRUFBaUI7O0lBQzVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFHTCw0REFBWUEsQ0FBQ0YsbURBQU9BLENBQUNRLGVBQWUsRUFBRTtRQUN0RUMsV0FBVztZQUNWQyxRQUFRO1lBQ1JDLE1BQU07UUFDUDtJQUNEO1FBS2FKO0lBSGIscUJBQ0MsOERBQUNOLDZDQUFPQSxDQUFDRSxRQUFRO1FBQ2hCUyxPQUFPO1lBQ05DLFVBQVVOLENBQUFBLGlCQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1NLFFBQVEsY0FBZE4sNEJBQUFBLGlCQUFrQixFQUFFO1lBQzlCTyxXQUFXVDtRQUNaO2tCQUVDRDs7Ozs7O0FBR0o7R0FsQk1EOztRQUM0QkQsd0RBQVlBOzs7S0FEeENDO0FBb0JjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWJzL3BhY2thZ2VzL3NlYXJjaC9jb250ZXh0L3Byb3ZpZGVycy50c3g/MTk4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRVUVSSUVTIH0gZnJvbSBcIkAvbGlicy9ncmFwaC1xbFwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7IHVzZUxhenlRdWVyeSwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxudHlwZSBQcm92aWRlclByb3BzID0ge1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm92aWRlclByb3BzKSA9PiB7XG5cdGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZUxhenlRdWVyeShRVUVSSUVTLkdFVF9BTExfUE9LRU1PTiwge1xuXHRcdHZhcmlhYmxlczoge1xuXHRcdFx0b2Zmc2V0OiA5Myxcblx0XHRcdHRha2U6IDEwLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PENvbnRleHQuUHJvdmlkZXJcblx0XHRcdHZhbHVlPXt7XG5cdFx0XHRcdHBva2Vtb25zOiBkYXRhPy5wb2tlbW9ucyA/PyBbXSxcblx0XHRcdFx0aXNMb2FkaW5nOiBsb2FkaW5nLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9Db250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IHsgUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJRVUVSSUVTIiwiQ29udGV4dCIsInVzZUxhenlRdWVyeSIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiR0VUX0FMTF9QT0tFTU9OIiwidmFyaWFibGVzIiwib2Zmc2V0IiwidGFrZSIsInZhbHVlIiwicG9rZW1vbnMiLCJpc0xvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/packages/search/context/providers.tsx\n"));

/***/ })

});