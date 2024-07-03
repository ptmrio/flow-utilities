const sass = require('sass');
const fs = require('fs-extra');
const CleanCSS = require('clean-css');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const mainFile = path.join(srcDir, 'flow-utilities.scss');

// Compile SCSS to CSS
const result = sass.renderSync({
  file: mainFile,
  outputStyle: 'expanded'
});

// Write unminified CSS
fs.writeFileSync(path.join(srcDir, 'flow-utilities.css'), result.css);

// Minify and write CSS
const minified = new CleanCSS().minify(result.css);
fs.writeFileSync(path.join(srcDir, 'flow-utilities.min.css'), minified.styles);

console.log('Build completed successfully!');