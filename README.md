# Mystique - FFXIV Venue Website

A sleek, professional website template for Mystique, a high-class brothel and nightclub roleplay venue in Final Fantasy XIV.

## Features

- **Elegant Black & Crimson Design** - Sophisticated color scheme with smooth animations
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Staff Modal System** - Click staff cards to view detailed bios in elegant modals
- **Smooth Scrolling** - Professional navigation with scroll animations
- **Discord Integration** - Easy-to-update Discord widget placeholder
- **SEO Friendly** - Proper HTML5 semantic structure

## Setup Instructions

### GitHub Pages Deployment

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `mystique-venue` or `ffxiv-mystique`
   - Make it **Public**
   - Don't initialize with README (you'll upload these files)

2. **Upload Files**
   - Click "uploading an existing file"
   - Upload all three files: `index.html`, `styles.css`, `script.js`
   - Commit the files

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main`, folder: `/ (root)`
   - Click Save

4. **Your Site is Live!**
   - Your site will be available at: `https://yourusername.github.io/repo-name/`
   - It may take a few minutes to deploy

### Optional: Custom Domain

If you want a custom domain like `mystique-venue.com`:
1. Purchase a domain from a registrar
2. In your repo Settings → Pages, add your custom domain
3. Follow GitHub's DNS configuration instructions

## Customization Guide

### Changing Colors

In `styles.css`, modify the color variables at the top:

```css
:root {
    --crimson: #8b0000;        /* Main crimson color */
    --crimson-light: #a82828;  /* Lighter crimson for hover states */
    --crimson-dark: #5a0000;   /* Darker crimson accents */
    --gold: #d4af37;           /* Gold accent color */
}
```

### Adding Your Images

Replace the placeholder images in `index.html`:

**Hero Background:**
```html
<!-- Line 26 in index.html -->
background: url('YOUR_IMAGE_URL_HERE') center/cover;
```

**Staff Photos:**
```html
<!-- Lines 167, 177, 187, 197 in index.html -->
<img src="YOUR_STAFF_IMAGE_URL" alt="Staff Name">
```

**Tips for Images:**
- Upload images to your GitHub repo and reference them as `./images/filename.jpg`
- Or use a free image host like Imgur
- Recommended sizes:
  - Hero background: 1920x1080px
  - Staff portraits: 400x600px minimum

### Updating Content

**Venue Information** (Lines 33-37):
```html
<p>Crystal Datacenter • Balmung</p>
<p>Open Fridays & Saturdays • 8pm - 12am EST</p>
```

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
