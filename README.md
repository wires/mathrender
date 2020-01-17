# Render Latex into an image

This code mainly tries to turn LaTeX into SVG/PNG, with the intention of running a Telegram bot.

In particular diagrams would be nice to draw, but...

- While the `amscd` package is supported, the `tikz` package is not
- MathJax itself probably won't ever support `tikz` ([#41](https://github.com/mathjax/MathJax/issues/41)).
- This is based on [`mathjax-full`](https://npm.im/mathjax-full)

Uses [mathjax](https://www.mathjax.org/) and [svg2img](https://www.npmjs.com/package/svg2img) to render LaTeX or (TBD) [ASCIIMath](http://asciimath.org/) into an SVG or PNG image.

Example:

```js
let mathrender = require('mathrender')

// input document
let latex = 'F : \\mathcal(C) \\to \\mathcal(C)'

let svg = mathrender.latexToSVG(latex) // string
let png = mathrender.latexToPNG(latex) // Buffer

// write to filesystem
require('fs').writeFileSync('output.png', png)
```

## TODO

- [ ] enabled support for ASCII Math ?
- [ ] use this? https://github.com/mathjax/MathJax-node
- [ ] check this https://github.com/pkra/mathjax-node-svg2png
    - which uses this https://www.npmjs.com/package/svg2png
- [ ] Tikz compiled to WebAssembly [tikzjax.com](http://tikzjax.com)
- [ ] MathJax issues about tikz [#2156](https://github.com/mathjax/MathJax/issues/2156), [#41](https://github.com/mathjax/MathJax/issues/41)