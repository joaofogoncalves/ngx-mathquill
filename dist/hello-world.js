"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
var HelloWorld;
(function (HelloWorld) {
    function sayHello() {
        console.log('hi');
    }
    HelloWorld.sayHello = sayHello;
    function sayGoodbye() {
        console.log('goodbye');
    }
    HelloWorld.sayGoodbye = sayGoodbye;
    function logJquery() {
        console.log($.ajax);
    }
    HelloWorld.logJquery = logJquery;
})(HelloWorld = exports.HelloWorld || (exports.HelloWorld = {}));
