# The Phoenix Agency GitHub Pages Site

The Phoenix Agency website is a GitHub Pages static website repository that automatically deploys HTML, CSS, and JavaScript files to https://thephoenixagency.github.io/. This repository uses GitHub's built-in Pages deployment system without requiring complex build processes.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Repository Setup
- This is a minimal GitHub Pages repository with automatic deployment
- No build system or dependencies required for basic HTML/CSS/JavaScript development
- Files pushed to the main branch automatically deploy via GitHub Pages workflow
- Current structure: README.md, LICENSE, and any web files you create

### Basic Development Workflow
- Create HTML files directly in the repository root (index.html for homepage)
- Add CSS files in root or organize in subdirectories (css/, styles/, etc.)
- Add JavaScript files in root or organize in subdirectories (js/, scripts/, etc.)
- Test locally using Python's built-in web server: `python3 -m http.server 8080`
- Access local site at http://localhost:8080
- **NEVER CANCEL** local server processes - they run indefinitely until stopped

### Local Development and Testing
- Start local server: `cd /path/to/repo && python3 -m http.server 8080`
- **VALIDATION REQUIREMENT**: Always test your changes locally before committing
- Test in browser by navigating to http://localhost:8080
- Stop server with Ctrl+C or stop_bash tool when using async mode

## Validation and Quality Assurance

### Manual Testing Scenarios
**CRITICAL**: After making any changes, you MUST validate functionality by:
1. **Basic HTML Structure**: Create or modify HTML files and verify they load without errors
2. **CSS Styling**: Ensure stylesheets load and apply correctly
3. **JavaScript Functionality**: Test that scripts execute and console shows no errors
4. **Cross-page Navigation**: If multiple pages exist, test navigation links
5. **Responsive Design**: Check layout on different screen sizes if responsive design is implemented
6. **Browser Console**: Always check browser console for JavaScript errors

### Automated Testing Tools
- **HTML Validation**: `npm install --no-save html-validate && npx html-validate *.html` (takes ~10 seconds)
- **JavaScript Linting**: 
  - Install: `npm install --no-save eslint` (takes ~15 seconds)
  - Create config: `echo 'export default [{ rules: { "no-unused-vars": "error", "no-console": "warn" } }];' > eslint.config.js`
  - Run: `npx eslint *.js`
- **CSS Validation**: Use online validators or install css-lint tools as needed
- **Playwright Testing**: Use browser automation tools to test user workflows

### End-to-End Testing with Playwright
- Start local server: `python3 -m http.server 8081 &`
- Navigate to pages: Use playwright-browser_navigate to http://localhost:8081/filename.html
- Take screenshots: Use playwright-browser_take_screenshot to verify visual output
- Test interactions: Click elements, fill forms, verify functionality
- **Always take screenshots** when making visual changes to include in PR descriptions

## Common Development Tasks

### Creating a New Page
1. Create HTML file: `touch newpage.html`
2. Add basic HTML structure with DOCTYPE, head, and body
3. Test locally: `python3 -m http.server 8080` and visit http://localhost:8080/newpage.html
4. Validate HTML: `npx html-validate newpage.html`
5. Commit changes - automatic deployment to GitHub Pages occurs

### Adding Styles
1. Create CSS file: `mkdir -p css && touch css/style.css`
2. Link in HTML: `<link rel="stylesheet" href="css/style.css">`
3. Test locally to ensure styles load correctly
4. Commit changes

### Adding Interactivity
1. Create JavaScript file: `mkdir -p js && touch js/script.js`
2. Include in HTML: `<script src="js/script.js"></script>`
3. Test functionality in browser console
4. Validate with ESLint: `npx eslint js/script.js` (requires eslint.config.js file)
5. Commit changes

## GitHub Pages Deployment

### Deployment Process
- **Automatic**: Pushes to main branch trigger GitHub Pages deployment
- **Timing**: Deployment typically takes 5-10 minutes after push
- **No build required**: Static files deploy directly
- **Access**: Site available at https://thephoenixagency.github.io/

### Deployment Validation
- After pushing changes, wait 5-10 minutes for deployment
- Verify live site reflects your changes
- Check GitHub Actions tab for deployment status
- Test functionality on live site, not just local development

## Directory Structure Recommendations

### Organized Structure
```
/
├── index.html          # Homepage (required for GitHub Pages)
├── about.html          # Additional pages as needed
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Responsive design styles
├── js/
│   ├── main.js         # Main JavaScript
│   └── utils.js        # Utility functions
├── images/
│   └── *.png, *.jpg    # Image assets
├── fonts/              # Custom fonts if needed
├── README.md
└── LICENSE
```

### File Naming Conventions
- Use lowercase filenames with hyphens for spaces: `about-us.html`
- Keep filenames descriptive and web-safe
- Organize assets in subdirectories (css/, js/, images/)

## Development Environment

### Available Tools
- **Node.js**: v20.19.5 - Available for npm package management
- **npm**: v10.8.2 - For installing development tools
- **Python**: 3.x - For local web server
- **Git**: For version control
- **ESLint**: Install with `npm install --no-save eslint`
- **HTML Validate**: Install with `npm install --no-save html-validate`

### Package Management
- **No package.json required** for basic static sites
- Install development tools temporarily: `npm install --no-save <package>`
- Avoid committing node_modules - add to .gitignore if using npm regularly

## Troubleshooting

### Common Issues
- **404 on GitHub Pages**: Ensure index.html exists in repository root
- **CSS not loading**: Check file paths are relative and correct
- **JavaScript errors**: Check browser console for syntax errors
- **Local server not accessible**: Ensure firewall allows localhost connections on chosen port

### GitHub Pages Specific
- **Custom domains**: Configure in repository settings, not in code
- **HTTPS**: Automatically provided by GitHub Pages
- **Branch deployment**: Ensure main branch is selected in Pages settings

## File Templates

### Basic HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - The Phoenix Agency</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <nav><!-- Navigation --></nav>
    </header>
    <main>
        <!-- Main content -->
    </main>
    <footer>
        <!-- Footer content -->
    </footer>
    <script src="js/main.js"></script>
</body>
</html>
```

### Basic CSS Reset
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}
```

## Performance and SEO

### Optimization
- Minimize HTTP requests by combining CSS/JS files when possible
- Optimize images for web (compress, appropriate formats)
- Use semantic HTML for better SEO
- Include meta descriptions and proper title tags
- Test page load speeds and optimize as needed

### SEO Best Practices
- Use proper heading hierarchy (h1, h2, h3, etc.)
- Include alt attributes on images
- Add meta description tags
- Use descriptive URLs and filenames
- Ensure mobile responsiveness

## Security Considerations

### GitHub Pages Security
- No server-side processing - inherently secure for static content
- HTTPS provided automatically
- Be cautious with third-party JavaScript libraries
- Validate user inputs if using client-side forms
- Avoid hardcoding sensitive information in client-side code

Remember: This is a static site deployment - no server-side processing, databases, or complex build systems are involved. Focus on clean, accessible HTML, CSS, and JavaScript for the best results.