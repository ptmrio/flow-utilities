# Flow Utilities

![npm version](https://img.shields.io/npm/v/@ptmrio/flow-utilities)
![license](https://img.shields.io/npm/l/@ptmrio/flow-utilities)

Flow Utilities is a lightweight SCSS/CSS library that provides flexible grid layout classes. It's designed to work both as a standalone solution and alongside Bootstrap, offering an intuitive way to create responsive grid layouts with minimal effort. It replaces the need for margin and padding classes by providing gap utilities for easy spacing between elements.

## Features

- Flexible grid system for both horizontal and vertical layouts
- Responsive classes for different screen sizes
- Gap utilities for easy spacing
- Compatible with Bootstrap
- Lightweight and easy to integrate

## Installation

You can install Flow Utilities via npm or yarn:

```bash
npm install @ptmrio/flow-utilities
```

```bash
yarn add @ptmrio/flow-utilities
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

- `.flow-h-{breakpoint}-{n}-cols`: Sets the number of columns for specific breakpoints
- `.flow-h-{breakpoint}-even-cols`: Sets even columns for specific breakpoints

Breakpoints: `sm`, `md`, `lg`, `xl`, `xxl`

### Gap Classes

- `.gap-{n}`: Sets gap size (0-12), based on --spacer custom property
- `.gap-{breakpoint}-{n}`: Sets gap size for specific breakpoints

## Examples

### Example 1: Basic Horizontal Layout

```html
<div class="flow-h flow-h-3-cols gap-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

**What it accomplishes:** This creates a 3-column horizontal layout with a gap of 1rem between each column.

### Example 2: Responsive Horizontal Layout

```html
<div class="flow-h flow-h-2-cols flow-h-md-4-cols gap-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>
```

**What it accomplishes:** This creates a 2-column layout that changes to 4 columns on medium-sized screens and up, with a gap of 1rem between items.

### Example 3: Basic Vertical Layout

```html
<div class="flow gap-3">
  <div>Section 1</div>
  <div>Section 2</div>
  <div>Section 3</div>
</div>
```

**What it accomplishes:** This creates a vertical layout with a gap of 1rem between each section.

### Example 4: Evenly Distributed Columns

```html
<div class="flow-h flow-h-even-cols gap-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>
```

**What it accomplishes:** This creates a horizontal layout with columns that are evenly distributed across the available space, with a gap of 3 units between columns.

**Note:** The `.flow-h-even-cols` class is useful when you want to distribute columns evenly across the available space. Use regular `display: flex;` for standard horizontal sections that don't need even distribution. The `.flow-h-even-cols` class is not responsive and doesn't support breakpoints.

### Example 5: Responsive Vertical Layout with Gaps

```html
<div class="flow gap-3 gap-lg-5">
  <div>Section 1</div>
  <div>Section 2</div>
  <div>Section 3</div>
</div>
```

**What it accomplishes:** This creates a vertical layout with different gap sizes for different screen sizes: a gap of 1rem units on medium screens and a gap of 3rem on large screens.

### Example 6: Vertical Layout for Content Sections

```html
<div class="flow gap-2">
  <div>Header</div>
  <div>Main Content</div>
  <div>Footer</div>
</div>
```

**What it accomplishes:** This creates a vertical layout useful for separating content sections like header, main content, and footer, with a gap of 0.5rem between each section.

## Bootstrap Compatibility

Flow Utilities is designed to work alongside Bootstrap. When Bootstrap is present, it uses Bootstrap's breakpoints and spacing scale. When used standalone, it defines its own breakpoints and spacing scale. You may override the default spacing scale by setting the `--spacer` custom property. You can also customize the breakpoints by setting the `$grid-breakpoints` in either your own SCSS import or Bootstrap's `_variables.scss`.

## Browser Support

Flow Utilities supports all modern browsers and IE11+.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

ptmr.io - Petermeir Web Solutions

## Support

If you encounter any problems or have any questions, please open an issue on the [GitHub repository](https://github.com/ptmrio/flow-utilities).