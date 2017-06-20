import * as $ from 'jquery'

declare var MathQuill;

export namespace MathQuillLoader {
  export function loadMathQuill(callback: (mathquill: IMathQuill) => any): void {

    console.log('loading!');

    loadCss('https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.css');
    loadJs('https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.js', callback);

  }
}

function loadCss(url: string): void {
  const cssId = 'mathquill';  // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId)) {
    const head  = document.getElementsByTagName('head')[0];
    const link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
  }
}

function loadJs(url: string, callback: (mathquill: IMathQuill) => any): void {
  if (!MathQuill) {
    $.getScript( url, function( data, textStatus, jqxhr ) {
      console.log( data ); // Data returned
      console.log( textStatus ); // Success
      console.log( jqxhr.status ); // 200
      console.log( "Load was performed." );
      console.log(MathQuillLoader);
      callback(MathQuill);
    });
  } else {
    callback(MathQuill);
  }
}

export interface IMathQuill {
  StaticMath: (htmlElement: HTMLElement) => void;
  MathField: (htmlElement: HTMLElement, config?: IMathQuill) => void;
  getInterface: (version: 1 | 2) => IMathQuill;
  noConflict: () => IMathQuill;
  config: (MathQuillConfig) => void;
}

export interface MathQuillConfig {
  spaceBehavesLikeTab: boolean,
  leftRightIntoCmdGoes: 'up' | 'down',
  restrictMismatchedBrackets: boolean,
  sumStartsWithNEquals: boolean,
  supSubsRequireOperand: boolean,
  charsThatBreakOutOfSupSub: string,
  autoSubscriptNumerals: boolean,
  autoCommands: string,
  autoOperatorNames: string,
  substituteTextArea: () => HTMLElement;
  handlers: {
    edit: (mathField) => any;
    upOutOf: (mathField) => any;
    moveOutOf: (dir, mathField) => any;
  }
}
