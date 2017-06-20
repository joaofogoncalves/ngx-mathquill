import * as $ from 'jquery'

export namespace MathQuill {
  function loadMathQuill() {
    loadCss('https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.css');
    loadJs('https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.css');
  }
}

function loadCss(url: string) {
  var cssId = 'mathquill';  // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId)) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
  }
}

function loadJs(url: string) {
  $.getScript( url, function( data, textStatus, jqxhr ) {
    console.log( data ); // Data returned
    console.log( textStatus ); // Success
    console.log( jqxhr.status ); // 200
    console.log( "Load was performed." );
  });
}
