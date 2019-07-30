import * as $ from 'jquery'


export namespace MathQuillLoader {

  /**
   * Sets up mathquill. When done returns the `window.MathQuill` object.
   * @param callback
   */
  export function loadMathQuill(callback: (mathquill: IMathQuill) => any): void {
    loadCss(`mathquill/mathquill.css`);
    loadJs(`mathquill/mathquill.min.js`, callback);
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
  MathField: (htmlElement: HTMLElement, config?: MathQuillConfig) => MathFieldMethods;
  getInterface: (version: 1 | 2) => IMathQuill;
  noConflict: () => IMathQuill;
  config: (MathQuillConfig) => void;
  getLatexMathParser: () => LatexMathParser;
}

export interface LatexMathParser extends Parser {
  commandToBlock: (cmd: any) => any,
  joinBlocks: (blocks: any[]) => any,
}

export interface Parser {
  parse: (stream: string) => any,
}

export interface MathQuillConfig {
  spaceBehavesLikeTab?: boolean,
  leftRightIntoCmdGoes?: 'up' | 'down',
  restrictMismatchedBrackets?: boolean,
  sumStartsWithNEquals?: boolean,
  supSubsRequireOperand?: boolean,
  charsThatBreakOutOfSupSub?: string,
  autoSubscriptNumerals?: boolean,
  autoCommands?: string,
  autoOperatorNames?: string,
  substituteTextArea?: () => HTMLElement;
  handlers?: {
    edit?: (mathField) => any;
    enter?: (mathField) => any;
    upOutOf?: (mathField) => any;
    moveOutOf?: (dir, mathField) => any;
  }
}

export interface BaseMethods {
  revert: () => HTMLElement;
  reflow: () => void;
  el: () => HTMLElement;
  latex: (latex?: string) => any;
}

export interface MathFieldMethods extends BaseMethods {
  focus: () => this;
  blur: () => this;
  write: (latex: string) => this;
  cmd: (latex: string) => this;
  select: () => this;
  clearSelection: () => this;
  moveToLeftEnd: () => this;
  moveToRightEnd: () => this;
  movetoDirEnd: (direction: this) => this;
  keystroke: (keys: string) => this;
  typedText: (text: string) => this;
  config: (config: MathQuillConfig) => this;
  dropEmbedded: (pageX, pageY, options) => this;

  html: () => any;
}
