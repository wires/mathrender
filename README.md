# Render math into an image

Uses `mathJax` and `svg2img` to render LaTeX or (TBD) AsciiMath into an SVG or PNG image.

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

