// Generate favicons from lipstick_kiss.png using Sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImage = path.join(__dirname, 'assets/images/lipstick_kiss.png');
const outputDir = path.join(__dirname, 'assets/images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function generateFavicons() {
    try {
        console.log('Generating favicons from lipstick_kiss.png...');

        // Generate 192x192 favicon
        await sharp(inputImage)
            .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toFile(path.join(outputDir, 'favicon-192.png'));
        console.log('✓ Created favicon-192.png');

        // Generate 512x512 favicon
        await sharp(inputImage)
            .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toFile(path.join(outputDir, 'favicon-512.png'));
        console.log('✓ Created favicon-512.png');

        // Generate 180x180 Apple touch icon
        await sharp(inputImage)
            .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toFile(path.join(outputDir, 'apple-touch-icon.png'));
        console.log('✓ Created apple-touch-icon.png');

        console.log('\n✓ All favicons generated successfully!');
        console.log('Files created in assets/images/');
    } catch (error) {
        console.error('Error generating favicons:', error);
        process.exit(1);
    }
}

generateFavicons();
