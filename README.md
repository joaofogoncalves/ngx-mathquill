# Mathquill-Typescript

Thin typescript wrapper around Mathquill. It
offers types (of course) and an easier installation
than the original mathquill library if you're
using `npm`.


## Installation

```
npm install mathquill-typescript
```

## Usage

```
import {MathQuillLoader} from 'mathquill-typescript';
MathQuillLoader.loadMathQuill(mathquill => {

  // do what you want here
  // for example:
  console.log(mathquill.getInterface(2));

});
```

## Note

Still in development, check back in a few weeks to find
a more stable release.
