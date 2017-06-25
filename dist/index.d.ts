export declare namespace MathQuillLoader {
    /**
     * Sets up mathquill. When done returns the `window.MathQuill` object.
     * @param callback
     */
    function loadMathQuill(callback: (mathquill: IMathQuill) => any): void;
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
        edit: (mathField) => any;
        upOutOf: (mathField) => any;
        moveOutOf: (dir, mathField) => any;
    };
}
export interface BaseMethods {
    revert: () => HTMLElement;
    reflow: () => void;
    el: () => HTMLElement;
    latex: (latex?: string) => void | string;
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
