# NEXORA – Frontend Performance Optimization Report

**Internship Task:** Week 4 – Performance Optimization  
**Project:** NEXORA Responsive Landing Page  
**Technology:** HTML, CSS and JavaScript  
**Testing Tool:** Google Chrome Lighthouse

## 1. Objective

The objective of this task was to analyze website performance, identify possible bottlenecks, apply suitable optimization techniques, and compare performance before and after optimization.

The main goal was to reduce file sizes and maintain the website's existing design, responsiveness, accessibility, and functionality.

## 2. Project Overview

NEXORA is a responsive productivity SaaS landing page developed using HTML, CSS, and vanilla JavaScript.

The existing Week 1 landing page was reused for this task.

The initial Lighthouse Performance score was already 100/100. Therefore, the focus was on reducing asset sizes and improving code maintainability rather than claiming an increase in the performance score.

## 3. Initial Performance Analysis

The website was tested using Chrome Lighthouse in Mobile mode.

Initial results:

| Metric | Before Optimization |
| --- | ---: |
| Performance Score | 100/100 |
| First Contentful Paint (FCP) | 0.9 s |
| Largest Contentful Paint (LCP) | 1.0 s |
| Total Blocking Time (TBT) | 90 ms |
| Speed Index | 0.9 s |
| Cumulative Layout Shift (CLS) | 0 |

The initial Lighthouse report also highlighted CSS minification as an opportunity.

## 4. Optimization Techniques Implemented

### 4.1 CSS Minification

The original `style.css` file was minified to create `style.min.css`.

Unnecessary whitespace and formatting characters were removed to reduce the stylesheet size.

### 4.2 JavaScript Minification

The optimized `script.js` file was minified to create `script.min.js`.

This reduced the JavaScript file size while preserving its functionality.

### 4.3 JavaScript Code Optimization

The mobile navigation JavaScript was improved using a reusable `setMenuOpen()` function.

This reduced repeated code and kept the navigation state and accessibility attributes synchronized.

### 4.4 Deferred JavaScript Loading

The `defer` attribute was retained in the script reference.

This allows the browser to parse the HTML before executing the external JavaScript file.

### 4.5 Optimized File References

The HTML file was updated to load:

- `style.min.css`
- `script.min.js`

The original readable CSS and JavaScript files were retained for future editing.

## 5. File Size Comparison

| File | Original Size | Optimized Size |
| --- | ---: | ---: |
| CSS | 13 KB | 8 KB |
| JavaScript | 2 KB | 1 KB |
| Combined | 15 KB | 9 KB |

The combined file size was reduced by approximately 6 KB.

This represents an approximate reduction of 40%.

*Note: These percentages are calculated from the rounded file sizes measured during the task.*

## 6. Final Performance Analysis

After applying the optimizations, Lighthouse was run again using Mobile mode.

Final results:

| Metric | Before | After |
| --- | ---: | ---: |
| Performance Score | 100/100 | 100/100 |
| FCP | 0.9 s | 0.9 s |
| LCP | 1.0 s | 1.0 s |
| TBT | 90 ms | 110 ms |
| Speed Index | 0.9 s | 0.9 s |
| CLS | 0 | 0 |

### Result Analysis

The Lighthouse Performance score remained 100/100.

FCP, LCP, Speed Index, and CLS remained unchanged.

TBT increased from 90 ms to 110 ms, a difference of 20 ms. Small variations can occur between Lighthouse runs due to browser and system conditions.

The results show that the website maintained its excellent Lighthouse score while the combined CSS and JavaScript file size was reduced.

## 7. Optimization Opportunities Not Applied

**Image Lazy Loading:** The website does not use image assets. Its dashboard illustration is created using HTML and CSS, so lazy loading was not applicable.

**Code Splitting:** The project uses a small vanilla JavaScript file. Code splitting was not necessary.

**Browser Caching:** Cache-control headers generally need to be configured through the hosting platform or server.

**DOM Reduction:** The existing HTML structure was already simple and semantic. No unnecessary DOM changes were required.

## 8. Functional Testing

The following tests were successfully completed:

1. Mobile navigation opens correctly.
2. Mobile navigation closes when the button is clicked again.
3. Clicking a navigation link closes the menu.
4. Pressing Escape closes the menu.
5. Keyboard focus returns to the menu button after pressing Escape.
6. Switching to desktop layout closes the mobile menu.
7. Desktop navigation works correctly.
8. The website design remains consistent after optimization.
9. Final Lighthouse Performance score is 100/100.

## 9. Challenges Faced

The main challenge was that the original website already had a perfect Lighthouse Performance score.

Therefore, improving the score further was not possible.

The focus was shifted towards reducing CSS and JavaScript file sizes while maintaining the existing website experience.

Another small challenge was viewing minified files in VS Code because they appear as long single lines. This was handled using the Word Wrap feature.

## 10. Conclusion

The NEXORA landing page was successfully optimized using CSS minification, JavaScript minification, and cleaner navigation code.

The combined CSS and JavaScript file size decreased from approximately 15 KB to 9 KB, representing an approximate 40% reduction.

The final Lighthouse Performance score remained 100/100, and all functional tests passed.

This task provided practical experience in website performance analysis, asset optimization, JavaScript improvement, and performance testing.

//Project Status: Completed//

//Internship Task: Week 4 – Frontend Performance Optimization//
