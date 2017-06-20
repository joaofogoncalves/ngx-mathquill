"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hwrld_1 = require("hwrld");
const $ = require("jquery");
hwrld_1.HelloWorld.sayHello();
var logJquery;
(function (logJquery_1) {
    function logJquery() {
        console.log($, $.ajax);
    }
    logJquery_1.logJquery = logJquery;
})(logJquery = exports.logJquery || (exports.logJquery = {}));
