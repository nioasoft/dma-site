const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

fs.readdir(publicDir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach((file, index) => {
        if (path.extname(file).toLowerCase() === '.png') {
            const filePath = path.join(publicDir, file);
            const outputFilePath = path.join(publicDir, path.basename(file, '.png') + '.webp');

            sharp(filePath)
                .toFormat('webp')
                .toFile(outputFilePath)
                .then(() => {
                    console.log(`Converted ${file} to WebP`);
                    // Optional: Remove original file
                    // fs.unlinkSync(filePath);
                })
                .catch(err => {
                    console.error(`Error converting ${file}:`, err);
                });
        }
    });
});
