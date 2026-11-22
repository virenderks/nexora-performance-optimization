# NEXORA – Performance Optimization

//Week 4 Frontend Development Internship Project//

## Project Overview

NEXORA is a responsive, single-page productivity SaaS landing page built using HTML, CSS, and vanilla JavaScript.

This project focuses on improving website performance by optimizing CSS and JavaScript files while maintaining the original design, responsiveness, accessibility, and functionality.

## Features

- Responsive landing page design
- Mobile navigation menu
- Keyboard accessibility
- Escape key support for closing the mobile menu
- Accessible navigation using ARIA attributes
- Reduced-motion support
- Minified CSS and JavaScript files
- Optimized navigation JavaScript

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Chrome Lighthouse

## Project Structure

```text
Week-4-Performance-Optimization/
│
├── index.html
├── style.css
├── style.min.css
├── script.js
├── script.min.js
├── README.md
└── PERFORMANCE-REPORT.md
```

## Performance Optimization Techniques

1. **CSS Minification:** Created `style.min.css` by removing unnecessary whitespace and formatting from the original stylesheet.
2. **JavaScript Minification:** Created `script.min.js` to reduce the JavaScript file size.
3. **JavaScript Optimization:** Improved mobile navigation code using a reusable `setMenuOpen()` function.
4. **Deferred JavaScript:** Preserved the `defer` attribute to avoid blocking HTML parsing.
5. **Optimized Asset Loading:** Updated `index.html` to load minified CSS and JavaScript files.

## Before and After Performance Results

| Metric | Before | After |
| --- | ---: | ---: |
| Performance Score | 100/100 | 100/100 |
| First Contentful Paint | 0.9 s | 0.9 s |
| Largest Contentful Paint | 1.0 s | 1.0 s |
| Total Blocking Time | 90 ms | 110 ms |
| Speed Index | 0.9 s | 0.9 s |
| Cumulative Layout Shift | 0 | 0 |

## File Size Comparison

| File | Original Size | Minified Size |
| --- | ---: | ---: |
| CSS | 13 KB | 8 KB |
| JavaScript | 2 KB | 1 KB |
| Combined | 15 KB | 9 KB |

The combined CSS and JavaScript file size decreased by approximately 40%.

## Testing

The following tests were completed successfully:

- Mobile menu opens and closes.
- Navigation links close the mobile menu.
- Escape key closes the mobile menu.
- Keyboard focus returns to the menu button.
- Desktop navigation works correctly.
- Responsive layout works correctly.
- Website design remains unchanged after optimization.
- Final Lighthouse Performance score: 100/100.

## Conclusion

The NEXORA landing page was optimized by minifying CSS and JavaScript files and improving the mobile navigation code.

The combined file size was reduced from approximately 15 KB to 9 KB. The Lighthouse Performance score remained 100/100, and all functionality tests passed.

//Internship Task: Week 4 – Frontend Performance Optimization//
