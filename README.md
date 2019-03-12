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
Work is in progress to fork Mathquill and remove this dependency

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

Or in `.angular.json`:
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
npm install ngx-mathquill
```

## Usage

```
import {MathQuillLoader} from 'ngx-mathquill';
MathQuillLoader.loadMathQuill(mathquill => {

  // do what you want here
  // for example:
  console.log(mathquill.getInterface(2));

});
```

If you call the loader multiple times, it will just return
the already initialized `window.MathQuill` object.

## Angular assets
```
"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**/*",
    "input": "./node_modules/ngx-mathquill/mathquill/",
    "output": "./mathquill/"
  }
],
```

## Credits

Thanks to [JayendharPrakash/mathquill-typescript](https://github.com/JayendharPrakash/mathquill-typescript)
