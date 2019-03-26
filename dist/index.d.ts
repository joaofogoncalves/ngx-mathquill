export declare namespace MathQuillLoader {
    /**
     * Sets up mathquill. When done returns the `window.MathQuill` object.
     * @param callback
     */
    function loadMathQuill(callback: (mathquill: IMathQuill) => any): void;
}
export interface IMathQuill {
    StaticMath: (htmlElement: HTMLElement) => BaseMethods;
    MathField: (htmlElement: HTMLElement, config?: MathQuillConfig) => MathFieldMethods;
    getInterface: (version: 1 | 2) => IMathQuill;
    noConflict: () => IMathQuill;
    config: (MathQuillConfig: any) => void;
}
export interface MathQuillConfig {
    spaceBehavesLikeTab?: boolean;
    leftRightIntoCmdGoes?: 'up' | 'down';
    restrictMismatchedBrackets?: boolean;
    sumStartsWithNEquals?: boolean;
    supSubsRequireOperand?: boolean;
    charsThatBreakOutOfSupSub?: string;
    autoSubscriptNumerals?: boolean;
    autoCommands?: string;
    autoOperatorNames?: string;
    substituteTextArea?: () => HTMLElement;
    handlers?: {
        edit?: (mathField: any) => any;
        enter?: (mathField: any) => any;
        upOutOf?: (mathField: any) => any;
        moveOutOf?: (dir: any, mathField: any) => any;
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
    dropEmbedded: (pageX: any, pageY: any, options: any) => this;
    html: () => any;
}
