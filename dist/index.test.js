"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var chai = require("chai");
var expect = chai.expect;
describe('Index', function () {
    it('should be able fetch mathquill', function () {
        index_1.MathQuillLoader.loadMathQuill({}, function (mathquill) {
            expect(mathquill).to.exist;
        });
    });
});
