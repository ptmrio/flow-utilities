const sass = require('sass');
const fs = require('fs-extra');
const CleanCSS = require('clean-css');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const files = [
  'flow-utilities.scss',
  'flow-utilities-bootstrap.scss',
  'flow-utilities-tailwindcss.scss'
];

files.forEach(file => {
  const inputFile = path.join(srcDir, file);
  const outputName = path.parse(file).name;

  // Compile SCSS to CSS
  const result = sass.renderSync({
    file: inputFile,
    outputStyle: 'expanded'
  });

  // Write unminified CSS
  const unminifiedOutput = path.join(srcDir, `${outputName}.css`);
  fs.writeFileSync(unminifiedOutput, result.css);
  console.log(`Unminified CSS written to ${unminifiedOutput}`);

  // Minify and write CSS
  const minified = new CleanCSS().minify(result.css);
  const minifiedOutput = path.join(srcDir, `${outputName}.min.css`);
  fs.writeFileSync(minifiedOutput, minified.styles);
  console.log(`Minified CSS written to ${minifiedOutput}`);
});

console.log('Build completed successfully!');