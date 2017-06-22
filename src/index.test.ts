import {MathQuillLoader} from './index';
import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('Index', () => {

  it('should be able fetch mathquill', () => {
    MathQuillLoader.loadMathQuill(mathquill => {
      expect(mathquill).to.exist;
    });
  });

});

