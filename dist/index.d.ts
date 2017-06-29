export declare namespace MathQuillLoader {
    /**
     * Sets up mathquill. When done returns the `window.MathQuill` object.
     * @param callback
     */
    function loadMathQuill(options: MqLoadingOptions, callback: (mathquill: IMathQuill) => any): void;
}
export interface MqLoadingOptions {
    mode?: 'dev' | 'prod';
}
export interface IMathQuill {
    StaticMath: (htmlElement: HTMLElement) => BaseMethods;
    MathField: (htmlElement: HTMLElement, config?: IMathQuill) => MathFieldMethods;
    getInterface: (version: 1 | 2) => IMathQuill;
    noConflict: () => IMathQuill;
    config: (MathQuillConfig) => void;
}
export interface MathQuillConfig {
    spaceBehavesLikeTab: boolean;
    leftRightIntoCmdGoes: 'up' | 'down';
    restrictMismatchedBrackets: boolean;
    sumStartsWithNEquals: boolean;
    supSubsRequireOperand: boolean;
    charsThatBreakOutOfSupSub: string;
    autoSubscriptNumerals: boolean;
    autoCommands: string;
    autoOperatorNames: string;
    substituteTextArea: () => HTMLElement;
    handlers: {
        edit: (mathField) => this;
        upOutOf: (mathField) => this;
        moveOutOf: (dir, mathField) => this;
    };
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
