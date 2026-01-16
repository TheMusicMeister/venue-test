// Update asset paths in HTML files for production build
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const htmlFiles = ['index.html', '404.html'];

htmlFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Update CSS path to minified version
        content = content.replace(
            'assets/css/styles.css',
            'assets/css/styles.min.css'
        );

        // Update JS path to minified version
        content = content.replace(
            'assets/js/script.js',
            'assets/js/script.min.js'
        );

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Updated paths in ${file}`);
    }
});

console.log('✓ Build complete! Files are in the dist/ directory');
