# Flow Utilities

![npm version](https://img.shields.io/npm/v/@ptmrio/flow-utilities)
![license](https://img.shields.io/npm/l/@ptmrio/flow-utilities)

Flow Utilities is a lightweight SCSS/CSS library that provides flexible grid layout classes. It's designed to work both as a standalone solution and alongside Bootstrap, offering an intuitive way to create responsive grid layouts with minimal effort.

## Features

- Flexible grid system for both horizontal and vertical layouts
- Responsive classes for different screen sizes
- Gap utilities for easy spacing
- Compatible with Bootstrap
- Lightweight and easy to integrate

## Installation

You can install Flow Utilities via npm:

```bash
npm install @ptmrio/flow-utilities
```

## Usage

### SCSS

Import in your main SCSS file:

```scss
@import '~@ptmrio/flow-utilities/src/flow-utilities';
```

### CSS

You can also use the pre-compiled CSS. In your HTML file:

```html
<link rel="stylesheet" href="path/to/node_modules/@ptmrio/flow-utilities/src/flow-utilities.min.css">
```

Or import in your CSS:

```css
@import '~@ptmrio/flow-utilities/src/flow-utilities.min.css';
```

## Classes

### Basic Classes

- `.flow`: Creates a vertical grid layout
- `.flow-h`: Creates a horizontal grid layout

### Column Classes

- `.flow-h-{n}-cols`: Creates a grid with n columns (2-12)
- `.flow-h-even-cols`: Creates a grid with evenly distributed columns

### Responsive Classes

- `.flow-h-{breakpoint}-{n}-cols`: Sets number of columns for specific breakpoints
- `.flow-h-{breakpoint}-even-cols`: Sets even columns for specific breakpoints

Breakpoints: `sm`, `md`, `lg`, `xl`, `xxl`

### Gap Classes

- `.gap-{n}`: Sets gap size (0-12), based on --spacer custom property

## Examples

### Horizontal Layout

```html
<div class="flow-h flow-h-3-cols flow-h-md-4-cols gap-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>
```

This creates a 3-column layout that changes to 4 columns on medium-sized screens and up, with a gap of 3 units between items.

### Vertical Layout

```html
<div class="flow gap-3">
  <div>Section 1</div>
  <div>Section 2</div>
  <div>Section 3</div>
</div>
```

This creates a vertical layout with a gap of 3 units between each section.

## Bootstrap Compatibility

Flow Utilities is designed to work alongside Bootstrap. When Bootstrap is present, it uses Bootstrap's breakpoints and spacing scale. When used standalone, it defines its own breakpoints and spacing scale.

## Browser Support

Flow Utilities supports all modern browsers and IE11+.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

ptmr.io Petermeir Web Solutions

## Support

If you encounter any problems or have any questions, please open an issue on the [GitHub repository](https://github.com/ptmrio/flow-utilities).