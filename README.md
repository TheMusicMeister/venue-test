# Mystique - FFXIV Venue Website

![Build Status](https://github.com/TheMusicMeister/venue-test/actions/workflows/deploy.yml/badge.svg)

A sleek, professional website template for Mystique, a high-class brothel and nightclub roleplay venue in Final Fantasy XIV.

## Features

- **Elegant Black & Crimson Design** - Sophisticated color scheme with smooth animations
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Staff Modal System** - Click staff cards to view detailed bios in elegant modals
- **Smooth Scrolling** - Professional navigation with scroll animations
- **Discord Integration** - Easy-to-update Discord widget placeholder
- **SEO Optimized** - Meta tags, Open Graph, favicons, robots.txt, and sitemap
- **Automated Build Pipeline** - GitHub Actions auto-deploys minified assets
- **Performance Optimized** - Minified CSS/JS for faster load times

## Project Structure

```
venue-test/
├── index.html              # Main HTML file
├── 404.html               # Custom 404 error page
├── robots.txt             # SEO crawler configuration
├── sitemap.xml            # Sitemap for search engines
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript for navigation and modals
│   └── images/
│       ├── lipstick_kiss.png
│       ├── favicon-192.png
│       ├── favicon-512.png
│       └── apple-touch-icon.png
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment workflow
├── package.json           # NPM dependencies and scripts
├── update-paths.js        # Build script to update asset paths
└── generate-favicons.js   # Script to generate favicons

```

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheMusicMeister/venue-test.git
   cd venue-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate favicons** (one-time setup)
   ```bash
   npm run generate:favicons
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   This will open Firefox automatically with live reload enabled. Edit any file and the browser will refresh automatically.

### GitHub Pages Deployment (Automated)

The site automatically deploys to GitHub Pages via GitHub Actions whenever you push to the `main` branch.

**Initial Setup:**

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Wait for deployment**
   - Check the "Actions" tab to see build progress
   - Your site will be live at: `https://themusicmeister.github.io/venue-test/`
   - First deployment takes 5-10 minutes

The GitHub Actions workflow will:
- Install dependencies
- Generate favicons
- Minify CSS and JavaScript
- Optimize images
- Deploy to GitHub Pages automatically

### Manual Build (Optional)

If you want to build locally without deploying:

```bash
npm run build
```

This creates a `dist/` folder with:
- Minified CSS (~50-70% smaller)
- Minified JavaScript (~30-40% smaller)
- Optimized images
- All HTML files with updated paths

### Optional: Custom Domain

If you want a custom domain like `mystique-venue.com`:
1. Purchase a domain from a registrar
2. In your repo Settings → Pages, add your custom domain
3. Follow GitHub's DNS configuration instructions

## NPM Scripts

- `npm run dev` - Start development server with live reload (Firefox)
- `npm start` - Alias for `npm run dev`
- `npm run build` - Build production-ready files to `dist/`
- `npm run generate:favicons` - Generate favicons from lipstick_kiss.png
- `npm run clean` - Remove dist/ directory

## Customization Guide

### Changing Colors

In [`assets/css/styles.css`](assets/css/styles.css), modify the color variables at the top:

```css
:root {
    --crimson: #8b0000;        /* Main crimson color */
    --crimson-light: #a82828;  /* Lighter crimson for hover states */
    --crimson-dark: #5a0000;   /* Darker crimson accents */
    --gold: #d4af37;           /* Gold accent color */
}
```

### Adding Your Images

Replace the placeholder images in [`index.html`](index.html):

**Staff Photos:**
- Add your images to `assets/images/`
- Update image paths in the HTML (around lines 141, 150, 159, 168 for cards)
- Update modal images (around lines 294, 310, 326, 342)

**Tips for Images:**
- Keep images in `assets/images/` folder
- Recommended sizes:
  - Staff card portraits: 300x400px
  - Modal portraits: 400x500px
  - Try to keep file sizes under 500KB for performance

### Updating Content

**Venue Information:**
Update the hero section in [`index.html`](index.html) (around lines 68-71)

**Staff Members:**
Each staff member has two sections:
1. The card (around line 167)
2. The modal (around line 249)

To add more staff:
- Copy an existing staff card section
- Copy an existing modal section
- Update the `onclick="openModal('staff5')"` and `id="staff5"` with new numbers
- Update the content

**Events:**
Edit the events section (around line 213) to add your upcoming events.

**Discord Link:**
Update line 239 with your Discord invite link:
```html
<a href="YOUR_DISCORD_INVITE_LINK" class="discord-button" target="_blank">
```

### Adding More Staff Members

1. **Add a new card** in the staff grid section:
```html
<div class="staff-card" onclick="openModal('staff5')">
    <div class="staff-image">
        <img src="YOUR_IMAGE_URL" alt="Name">
    </div>
    <div class="staff-info">
        <h3>Character Name</h3>
        <p class="staff-role">Role</p>
    </div>
</div>
```

2. **Add a corresponding modal:**
```html
<div id="staff5" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeModal('staff5')">&times;</span>
        <div class="modal-body">
            <img src="YOUR_IMAGE_URL" alt="Name">
            <div class="modal-info">
                <h2>Character Name</h2>
                <p class="modal-role">Role</p>
                <p class="modal-bio">Bio here...</p>
                <p><strong>Specialties:</strong> List here</p>
                <p><strong>Availability:</strong> Schedule here</p>
            </div>
        </div>
    </div>
</div>
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Tips for FFXIV Venue Sites

- Keep content updates in the events section
- Update operating hours prominently
- Make Discord link easy to find
- Use high-quality screenshots from FFXIV
- Consider adding a photo gallery section
- Keep rules clear and visible

## Need Help?

Common issues:
- **Images not showing:** Make sure URLs are correct and images are publicly accessible
- **CSS not loading:** Check that `styles.css` is in the same folder as `index.html`
- **Modals not working:** Ensure `script.js` is in the same folder

## License

Free to use and modify for your FFXIV venue!

---

**Made for Mystique** - A Final Fantasy XIV Roleplay Venue
