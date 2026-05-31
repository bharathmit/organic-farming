# Template System Guide

This guide explains how to use the reusable header and footer template system for creating new pages.

## Overview

The header and footer are automatically injected into every page using `js/template.js`. This means:
- ✅ Update header/footer in ONE place, affects ALL pages
- ✅ No code duplication across pages
- ✅ Language toggle, menu, and footer links are consistent
- ✅ Easy to add new pages without worrying about navigation

## How It Works

### 1. Files Involved

- `js/template.js` - Contains header and footer HTML templates + initialization logic
- `css/style.css` - Styles for header and footer
- Individual pages - Just contain the main content

### 2. Creating a New Page

#### Step 1: Copy the Template
Copy `template-page-example.html` and rename it to your new page name:
```bash
cp template-page-example.html my-new-page.html
```

#### Step 2: Update Page Content
Edit the new page with:
- Page title in `<title>` tag
- Page heading in `<h1>` tag
- Page content in `<main>` section

#### Step 3: Add Language Support
Always use this pattern for bilingual content:
```html
<h1>
  <span class="lang-en">English Title</span>
  <span class="lang-ta">Tamil Title</span>
</h1>

<p>
  <span class="lang-en">English content here</span>
  <span class="lang-ta">Tamil content here</span>
</p>
```

### 3. Minimum Required Elements

Every new page must have:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page Title</title>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>" />
  <style>
    .lang-ta { display: none; }
    body.tamil .lang-en { display: none; }
    body.tamil .lang-ta { display: inline; }
    
    main { margin-top: 100px; padding: 2rem 0; }
  </style>
</head>
<body>

<main class="container">
  <!-- Your content here -->
</main>

<script src="js/template.js"></script>
</body>
</html>
```

## Key Features

### 1. Automatic Header Injection
The header is automatically added to the top of every page with:
- Logo and branding
- Navigation menu
- Language toggle buttons (EN / தமிழ்)
- Dropdown menus
- Mobile responsive hamburger menu

### 2. Automatic Footer Injection
The footer is automatically added to the bottom with:
- Quick links
- Information links
- Contact information
- Copyright notice
- Both English and Tamil versions

### 3. Language Persistence
- User's language choice is saved in browser's `localStorage`
- Language preference persists across all pages
- No need to re-select language when navigating

### 4. Menu Updates
The menu in `template.js` includes all pages and links:
```javascript
const headerTemplate = `...
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="products.html">Products</a>
  ...
`;
```

To add your new page to the menu:
1. Open `js/template.js`
2. Find the `headerTemplate` section
3. Add your link in the appropriate menu section:
```html
<li><a href="my-new-page.html">
  <span class="lang-en">My New Page</span>
  <span class="lang-ta">என்னுடைய புதிய பக்கம்</span>
</a></li>
```

## Example: Creating a Blog Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog</title>
  <link rel="stylesheet" href="css/style.css" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>" />
  <style>
    .lang-ta { display: none; }
    body.tamil .lang-en { display: none; }
    body.tamil .lang-ta { display: inline; }

    main { margin-top: 100px; padding: 2rem 0; }
    .blog-card { background: #fff; border: 1px solid #ddd; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; }
  </style>
</head>
<body>

<main class="container">
  <h1>
    <span class="lang-en">Our Blog</span>
    <span class="lang-ta">எங்கள் வலைப்பதிவு</span>
  </h1>

  <div class="blog-card">
    <h2>
      <span class="lang-en">Sustainable Farming Tips</span>
      <span class="lang-ta">நிலையான விவசாய குறிப்புகள்</span>
    </h2>
    <p>
      <span class="lang-en">Content here...</span>
      <span class="lang-ta">இங்கே உள்ளடக்கம்...</span>
    </p>
  </div>
</main>

<script src="js/template.js"></script>
</body>
</html>
```

## Customizing the Header/Footer

### Modifying the Header
1. Open `js/template.js`
2. Find the `headerTemplate` constant
3. Update the HTML as needed
4. Changes apply to ALL pages automatically

### Modifying the Footer
1. Open `js/template.js`
2. Find the `footerTemplate` constant
3. Update the HTML as needed
4. Changes apply to ALL pages automatically

### Adding New Menu Items
To add a new page to the navigation menu:

1. Create your new page using the template
2. Open `js/template.js`
3. Find the `<ul class="nav-links">` section
4. Add your new link:
```html
<li><a href="your-page.html">
  <span class="lang-en">Page Name</span>
  <span class="lang-ta">Tamil Name</span>
</a></li>
```

## CSS Classes for Styling

Use these classes when creating content:

- `.lang-en` - Shows when English is selected
- `.lang-ta` - Shows when Tamil is selected
- `.container` - Max-width container
- Standard classes from `style.css` for buttons, cards, etc.

## Troubleshooting

### Header/Footer Not Showing
- Make sure `<script src="js/template.js"></script>` is at the end of your HTML
- Check browser console for JavaScript errors
- Clear browser cache and reload

### Language Not Switching
- Check if `.lang-ta` and `.lang-en` CSS rules are included
- Verify that text is wrapped in correct span tags
- Try clearing localStorage: Open DevTools → Application → Clear Storage

### Active Menu Link Not Highlighting
The active link is determined by the current page filename. If the link doesn't highlight:
- Check that the `href` matches your actual filename
- Verify the filename matches the href in the menu

## Files Structure

```
organic-farming/
├── js/
│   ├── main.js                    # Page-specific scripts
│   └── template.js                # Header/Footer template
├── css/
│   └── style.css                  # All styles
├── index.html                     # Home page
├── about.html                     # About page
├── products.html                  # Products page
├── template-page-example.html     # Use as template for new pages
└── TEMPLATE-GUIDE.md              # This file
```

## Best Practices

1. **Always use language pairs**: Every text should have both English and Tamil versions
2. **Keep styles separate**: Use CSS classes instead of inline styles when possible
3. **Test on mobile**: Always test your page on mobile devices
4. **Update menu**: When adding new pages, update the menu in `template.js`
5. **Use template file**: Always start from `template-page-example.html` for consistency

## Tips

- The header has a fixed position, so use `margin-top: 100px;` on main content
- On mobile (≤768px), use `margin-top: 80px;`
- Use semantic HTML (`<main>`, `<section>`, etc.)
- Keep file names lowercase with hyphens (e.g., `my-new-page.html`)

---

For questions or updates, refer to the code comments in `js/template.js`
