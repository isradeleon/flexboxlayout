var fs = require('fs') 
/**
 * BASE CSS CODE
 */
var baseCss = fs.readFileSync('flexboxlayout.css').toString()

/**
 * CSS COMPRESSOR
 */
var csso = require('csso')

/**
 * AUTOPREFIXER
 */
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

postcss([ autoprefixer ]).process(baseCss,{from: undefined}).then(result => {
    result.warnings().forEach(warn => {
      console.warn(warn.toString())
    })
    
    var minifiedCss = csso.minify(result.css).css
    fs.writeFileSync('production/flexboxlayout.min.css', minifiedCss)
    
    console.log('Flexboxlayout is ready.')
})