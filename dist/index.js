"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var MathQuillLoader;
(function (MathQuillLoader) {
    /**
     * Sets up mathquill. When done returns the `window.MathQuill` object.
     * @param callback
     */
    function loadMathQuill(callback) {
        loadCss("mathquill/mathquill.css");
        loadJs("mathquill/mathquill.min.js", callback);
    }
    MathQuillLoader.loadMathQuill = loadMathQuill;
})(MathQuillLoader = exports.MathQuillLoader || (exports.MathQuillLoader = {}));
function loadCss(url) {
    var cssId = 'mathquill'; // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.media = 'all';
        head.appendChild(link);
    }
}
function loadJs(url, callback) {
    if (!window.MathQuill) {
        $.getScript(url, function (data, textStatus, jqxhr) {
            /*      console.log( data ); // Data returned
                  console.log( textStatus ); // Success
                  console.log( jqxhr.status ); // 200*/
            callback(window.MathQuill);
        });
    }
    else {
        callback(window.MathQuill);
    }
}
//# sourceMappingURL=index.js.map