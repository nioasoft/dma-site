const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'DMA_LOGO.png');
const outputPath = path.join(__dirname, 'public', 'logo.webp');

sharp(inputPath)
    .toFormat('webp')
    .toFile(outputPath)
    .then(info => {
        console.log('Logo converted successfully:', info);
    })
    .catch(err => {
        console.error('Error converting logo:', err);
    });
