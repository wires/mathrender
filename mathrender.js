const mathjax = require('mathjax-full/js/mathjax.js').mathjax;
const TeX = require('mathjax-full/js/input/tex.js').TeX;
const SVG = require('mathjax-full/js/output/svg.js').SVG;
const liteAdaptor = require('mathjax-full/js/adaptors/liteAdaptor.js').liteAdaptor;
const RegisterHTMLHandler = require('mathjax-full/js/handlers/html.js').RegisterHTMLHandler;
const AllPackages = require('mathjax-full/js/input/tex/AllPackages.js').AllPackages;


let packages = 'base, autoload, require, ams, newcommand'.split(/\s*,\s*/)
let outputFn = ext => `formula.${ext}`
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX({packages});
const svg = new SVG({fontCache: 'none'})

let ex = 32; // 1ex is how many pixels
let w = 80;  // container has width w in em units

// let inputDoc = 'a^n + b^n = c^n \\oplus \\mathcal{C}'
function latexToSVG(inputDoc) {
    const html = mathjax.document('', {InputJax: tex, OutputJax: svg});
    const node = html.convert(inputDoc, {
        // display: true,
        em: 2 * ex,
        ex: ex,
        containerWidth: w * (2 * ex)
    });
    
    const svgOutput = adaptor.innerHTML(node)
    return svgOutput    
}

let svg2img = require("svg2img")

function latexToPNG(inputDoc) {
    let svg = latexToSVG(inputDoc);
    return new Promise((reject,resolve) => {
        svg2img(svg, function(error, buffer) {
            if(error) reject(error)
            else resolve(buffer)
        })
    })
}

module.exports = { latexToSVG, latexToPNG }