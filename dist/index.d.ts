export declare namespace MathQuillLoader {
    /**
     * Sets up mathquill. When done returns the `window.MathQuill` object.
     * @param callback
     */
    function loadMathQuill(callback: (mathquill: IMathQuill) => any): void;
}
export interface IMathQuill {
    StaticMath: (htmlElement: HTMLElement) => void;
    MathField: (htmlElement: HTMLElement, config?: IMathQuill) => void;
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
