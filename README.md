# Render math into an image

Uses [mathjax](https://www.mathjax.org/) and [svg2img](https://www.npmjs.com/package/svg2img) to render LaTeX or (TBD) [ASCIIMath](http://asciimath.org/) into an SVG or PNG image.

Example:

```js
let mathrender = require('./mathjaxConvert.js')

// TODO support http://asciimath.org/

// input document
let latex = 'F : \\mathcal(C) \\to \\matcal(C)'

let svg = mathrender.latexToSVG(latex) // string
let png = mathrender.latexToPNG(latex) // buffer

// write to filesystem
require('fs').writeFileSync('output.png', png)
```

## TODO

- [ ] support Ascii Math
- [ ] use this? https://github.com/mathjax/MathJax-node
- [ ] check this https://github.com/pkra/mathjax-node-svg2png
    - which uses this https://www.npmjs.com/package/svg2png