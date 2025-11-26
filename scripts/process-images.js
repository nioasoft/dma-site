const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ARTIFACTS_DIR = '/Users/asafbenatia/.gemini/antigravity/brain/71fd9b63-93b6-4b40-8ea0-b67b27b9c647';
const PUBLIC_DIR = path.join(__dirname, '../public');

async function processImages() {
    try {
        const files = fs.readdirSync(ARTIFACTS_DIR);
        const pngFiles = files.filter(file => file.endsWith('.png'));

        if (pngFiles.length === 0) {
            console.log('No PNG files found in artifacts directory.');
            return;
        }

        console.log(`Found ${pngFiles.length} PNG files to process.`);

        for (const file of pngFiles) {
            const inputPath = path.join(ARTIFACTS_DIR, file);
            // Remove timestamp/hash from filename if present, or just use the base name
            // The tool generates names like "name_timestamp.png". We want "name.webp"
            // But wait, the tool output said "security_cameras_guide_1764075371402.png"
            // I should probably strip the timestamp.

            // Map generated filenames to target WebP filenames
            const nameMapping = {
                'security_cameras_guide': 'blog-cameras.webp',
                'smart_home_mistakes': 'blog-smart-home.webp',
                'wifi_problems_solved': 'blog-wifi.webp',
                'fiber_optics_explained': 'blog-cables.webp',
                'hidden_audio_systems': 'blog-audio.webp',
                'access_control_trends': 'blog-access.webp',
                'lighting_control_benefits': 'blog-lighting.webp',
                'meeting_room_av': 'blog-meeting.webp',
                'blog_server_room': 'blog-server.webp',
                'blog_outdoor_cinema': 'blog-outdoor.webp',
                'blog_intercom_system': 'blog-intercom.webp',
                'blog_smart_energy': 'blog-energy.webp'
            };

            let outputFilename = null;

            // Find matching key in mapping
            for (const [key, value] of Object.entries(nameMapping)) {
                if (file.startsWith(key)) {
                    outputFilename = value;
                    break;
                }
            }

            if (!outputFilename) {
                console.log(`Skipping ${file} - no mapping found.`);
                continue;
            }

            const outputPath = path.join(PUBLIC_DIR, outputFilename);

            console.log(`Converting ${file} to ${outputFilename}...`);

            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`Saved to ${outputPath}`);
        }

        console.log('All images processed successfully.');

    } catch (error) {
        console.error('Error processing images:', error);
    }
}

processImages();
