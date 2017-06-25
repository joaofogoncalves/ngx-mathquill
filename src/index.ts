import * as $ from 'jquery'

export namespace MathQuillLoader {

  /**
   * Sets up mathquill. When done returns the `window.MathQuill` object.
   * @param callback
   */
  export function loadMathQuill(options: MqLoadingOptions, callback: (mathquill: IMathQuill) => any): void {
    const minString = options.mode === 'dev' ? '' : '.min';
    loadCss(`https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill${minString}.css`);
    loadJs(`https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill${minString}.js`, callback);

    //loadCss('https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.css');
    //loadJs('https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.js', callback);

  }
}

export interface MqLoadingOptions {
  mode?: 'dev' | 'prod'
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
  if (!(<any>window).MathQuill) {
    $.getScript( url, function( data, textStatus, jqxhr ) {
/*      console.log( data ); // Data returned
      console.log( textStatus ); // Success
      console.log( jqxhr.status ); // 200*/
      callback((<any>window).MathQuill);
    });
  } else {
    callback((<any>window).MathQuill);
  }
}

export interface IMathQuill {
  StaticMath: (htmlElement: HTMLElement) => BaseMethods;
  MathField: (htmlElement: HTMLElement, config?: IMathQuill) => MathFieldMethods;
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

export interface BaseMethods {
  revert: () => HTMLElement;
  reflow: () => void;
  el: () => HTMLElement;
  latex: (latex?: string) => any;
}

export interface MathFieldMethods extends BaseMethods {
  focus: () => any;
  blur: () => any;
  write: (latex: string) => any;
  cmd: (latex: string) => any;
  select: () => any;
  clearSelection: () => any;
  moveToLeftEnd: () => any;
  moveToRightEnd: () => any;
  movetoDirEnd: (direction: any) => any;
  keystroke: (keys: string) => any;
  typedText: (text: string) => any;
  config: (config: MathQuillConfig) => any;
  dropEmbedded: (pageX, pageY, options) => any;

  html: () => any;
}
