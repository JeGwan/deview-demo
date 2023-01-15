"use strict";
var _a;
exports.__esModule = true;
exports.IS_BROWSER = exports.IS_DEV = exports.PHASE = void 0;
exports.PHASE = (_a = process.env.PHASE) !== null && _a !== void 0 ? _a : 'development';
exports.IS_DEV = exports.PHASE === 'development';
exports.IS_BROWSER = typeof window !== 'undefined';
