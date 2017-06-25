## Important Note

Still in development, check back in a few weeks to find
a more stable and useful release.

## Description

Thin typescript wrapper around Mathquill. It
offers types (of course) and an easier installation
than the original mathquill library if you're
using `npm`.

## Installation

Step 1)
Get jquery


You need to have jquery "globally" installed for this
library to work (like most jquery-dependent libraries).
For example you can add it in `<head>` of your html.
Or in webpack write configure something like this:

```
var webpack = require("webpack");

    ...

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
```

Or in `.angular-cli.json`:
```
{
  ...
  "apps": [
    {
      ...
      "scripts": [
        "../node_modules/jquery/dist/jquery.js"
      ],
   ...
```

Step 2)
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


## Credits

Thanks to [how-to-write-a-typescript-library.com](http://how-to-write-a-typescript-library.com)
for a to-the-point tutorial on how to get started with a typescript library.
