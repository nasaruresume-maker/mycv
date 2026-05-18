# Responsive Resume CSS Installation Guide

## Step 1: Save the CSS File
Copy `responsive-resume.css` into your project's `css/` folder.

## Step 2: Link the CSS
Add this line after your existing stylesheet in the `<head>` section:

```html
<link href="css/styles.css" rel="stylesheet" />
<link href="css/responsive-resume.css" rel="stylesheet" />
```

## Step 3: Move Scroll Button
Move this button from `<head>` to just before `</body>`:

```html
<button id="scrollToTopBtn" style="display:none;">↑</button>
```

## Step 4: Use Responsive Buttons
Replace inline button styles with:

```html
<a href="..." class="responsive-btn" target="_blank">Resume as PDF</a>
```

## Features Included
- Mobile-first responsive layout
- Prevents horizontal scrolling
- Responsive heading and typography
- Flexible contact info and social icons
- Responsive skills icons
- Certificate gallery adapts to all screen sizes
- Full-width buttons on mobile
- Improved lightbox sizing
