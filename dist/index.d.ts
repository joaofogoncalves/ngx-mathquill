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
    focus: () => void;
    blur: () => void;
    write: (latex: string) => void;
    cmd: (latex: string) => void;
    select: () => void;
    clearSelection: () => void;
    moveToLeftEnd: () => void;
    moveToRightEnd: () => void;
    movetoDirEnd: (direction: any) => void;
    keystroke: (keys: string) => void;
    typedText: (text: string) => void;
    config: (config: MathQuillConfig) => void;
    dropEmbedded: (pageX, pageY, options) => void;
}
