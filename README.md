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

If you call the loader multiple times, it will just return
the already initialized `window.MathQuill` object.

## Note

Still in development, check back in a few weeks to find
a more stable release.

## Credits

Thanks to [how-to-write-a-typescript-library.com](http://how-to-write-a-typescript-library.com)
for a to-the-point tutorial on how to get started with a typescript library.
