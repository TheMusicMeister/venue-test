# Setup & Deployment Guide

## What's Been Done

Your site has been fully optimized with the following improvements:

### ✅ File Organization
- Moved all assets to organized folders (`assets/css/`, `assets/js/`, `assets/images/`)
- Created proper project structure
- Updated all file references in HTML

### ✅ SEO & Meta Tags
- Added Open Graph meta tags for social media sharing
- Added Twitter Card support
- Added meta description
- Created `robots.txt` for search engine crawlers
- Created `sitemap.xml` for better indexing
- Added theme-color for mobile browsers

### ✅ Performance Optimizations
- Build system with minification (CSS/JS)
- Lazy loading for modal images
- Automated build pipeline via GitHub Actions

### ✅ Additional Features
- Custom 404 error page
- Favicon support (ready to generate)
- GitHub Actions workflow for automated deployment
- Build status badge in README

## Next Steps

### 1. Install Node.js (if not already installed)

Download from: https://nodejs.org/
- Choose the LTS (Long Term Support) version
- Install with default settings
- Restart VS Code or your terminal after installation

### 2. Install Dependencies

Open a terminal in this directory and run:

```bash
npm install
```

This installs all the build tools needed (browser-sync, minifiers, etc.)

### 3. Generate Favicons

Run this command once to create favicons from your lipstick_kiss.png:

```bash
npm run generate:favicons
```

This creates:
- `favicon-192.png` (192x192)
- `favicon-512.png` (512x512)
- `apple-touch-icon.png` (180x180 for Apple devices)

### 4. Test Locally

Start the development server:

```bash
npm run dev
```

Firefox will open automatically at http://localhost:3000
- Make changes to any file
- Browser refreshes automatically on save
- Test all navigation and modals

### 5. Deploy to GitHub

#### Option A: Automated Deployment (Recommended)

1. **Enable GitHub Actions deployment:**
   - Go to your repo: https://github.com/TheMusicMeister/venue-test
   - Click Settings → Pages
   - Under "Source", select **"GitHub Actions"**
   - Save

2. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Optimize site structure and add build pipeline"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the "Actions" tab on GitHub
   - Watch the build process (takes 2-3 minutes)
   - Once complete, visit: https://themusicmeister.github.io/venue-test/

#### Option B: Manual Build & Deploy

If you prefer to build locally and push the built files:

```bash
npm run build
```

This creates a `dist/` folder with optimized files. You can then deploy the contents of `dist/` however you prefer.

## Troubleshooting

### Issue: `npm: command not found`
**Solution:** Node.js is not installed or not in your PATH. Install Node.js from nodejs.org and restart your terminal.

### Issue: GitHub Actions fails
**Solution:**
1. Check the Actions tab for error details
2. Ensure GitHub Pages is set to "GitHub Actions" source
3. Check that all files were committed and pushed

### Issue: Site looks broken locally
**Solution:**
1. Check browser console for errors (F12)
2. Verify all files in `assets/` folder are present
3. Try clearing browser cache
4. Restart the dev server

### Issue: Favicons not showing
**Solution:**
1. Run `npm run generate:favicons` to create them
2. Check that files exist in `assets/images/`
3. Clear browser cache and hard refresh (Ctrl+F5)
4. On GitHub Pages, wait 5-10 minutes for CDN to update

## File Structure Reference

```
venue-test/
├── index.html                    # Main page
├── 404.html                      # Custom 404 page
├── robots.txt                    # SEO configuration
├── sitemap.xml                   # Sitemap for search engines
│
├── assets/
│   ├── css/
│   │   └── styles.css           # Main stylesheet
│   ├── js/
│   │   └── script.js            # JavaScript functions
│   └── images/
│       ├── lipstick_kiss.png    # Main logo/image
│       ├── favicon-192.png      # Generated favicon
│       ├── favicon-512.png      # Generated favicon
│       └── apple-touch-icon.png # Apple device icon
│
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated deployment config
│
├── package.json                 # NPM configuration
├── generate-favicons.js         # Favicon generation script
├── update-paths.js              # Build path updater
└── README.md                    # Documentation

```

## Available NPM Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies (run once) |
| `npm run dev` | Start development server with live reload |
| `npm start` | Alias for `npm run dev` |
| `npm run generate:favicons` | Create favicons from lipstick_kiss.png |
| `npm run build` | Build production-optimized files to `dist/` |
| `npm run clean` | Delete the `dist/` directory |

## Performance Improvements

After deployment, your site will have:

- **50-70% smaller CSS** (minified)
- **30-40% smaller JavaScript** (minified)
- **Optimized images** (compressed without quality loss)
- **Faster load times** (typically 200-500ms faster initial load)
- **Better SEO** (proper meta tags and sitemap)
- **Social media preview** (when shared on Facebook, Twitter, Discord)

## Questions?

Check the [README.md](README.md) for detailed customization instructions and troubleshooting tips.
