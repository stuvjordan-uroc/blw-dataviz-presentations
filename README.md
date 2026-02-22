# BLW Data Visualization Presentations

A collection of RevealJS presentations built with Vite for fast development and easy deployment to GitHub Pages.

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

   This will open your browser to the landing page. Navigate to any presentation to edit and see live changes.

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder, ready for GitHub Pages deployment.

## Project Structure

```
/
├── shared/               # Shared processed resources
│   ├── styles/          # Common CSS (theme.css, common.css)
│   └── components/      # Reusable JS components
├── public/              # Static assets (served as-is by Vite)
│   └── assets/          # Images, fonts, etc.
│       └── img/
├── slides/              # All presentation directories
│   └── pres-YYYYMMDD-name/
│       └── index.html   # Presentation slides
├── index.html           # Landing page
├── vite.config.js       # Vite configuration
└── package.json
```

## Adding a New Presentation

1. Create a new folder: `slides/pres-YYYYMMDD-description/`
2. Create `index.html` inside (copy from existing presentation)
3. Update relative paths to go up two levels: `../../node_modules/`, `../../shared/`
4. Add the presentation to `vite.config.js`:
   ```js
   input: {
     main: resolve(__dirname, 'index.html'),
     'slides/pres-20260225-harley': resolve(__dirname, 'slides/pres-20260225-harley/index.html'),
     'slides/pres-new-name': resolve(__dirname, 'slides/pres-new-name/index.html'), // Add this
   }
   ```
5. Add a link to `index.html` landing page with path `/slides/pres-new-name/`

## Using Shared Styles

All presentations automatically include:

- `shared/styles/theme.css` - RevealJS theme customization
- `shared/styles/common.css` - Utility classes and common components

Available utility classes:

- `.two-columns` - Two-column layout
- `.highlight-box` (`.info`, `.warning`, `.success`) - Styled boxes
- `.text-center`, `.text-left`, `.text-right` - Text alignment
- `.no-border`, `.shadow` - Image utilities

## Deployment to GitHub Pages

### Option 1: Manual Deployment

```bash
npm run build
# Upload dist/ folder contents to gh-pages branch
```

### Option 2: Automated with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Development Tips

- **Hot reload works instantly** - Edit any presentation and see changes live
- **Direct URLs** - Navigate directly to `/slides/pres-name/` during development
- **Static assets** - Put images, fonts, etc. in `public/assets/` and reference with absolute paths: `/assets/img/logo.webp`
- **Shared styles** - CSS in `shared/styles/` is processed by Vite (minified, optimized)
- **Custom styles** - Add presentation-specific styles in the `<style>` tag of each presentation

## RevealJS Features

All presentations include:

- **Fragments** - Use `class="fragment"` for step-by-step reveals
- **Code highlighting** - Use `<pre><code>` blocks
- **Speaker notes** - Press `S` to open speaker view
- **Navigation** - Arrow keys or swipe gestures
- **Slide numbers** - Enabled by default

## Resources

- [RevealJS Documentation](https://revealjs.com/)
- [Vite Documentation](https://vitejs.dev/)
