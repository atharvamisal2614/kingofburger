const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'categories');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.png') || file.endsWith('.jpg')) {
    const filePath = path.join(dir, file);
    const tempPath = path.join(dir, 'temp_' + file);
    
    // Resize to 128x128 and aggressively compress
    sharp(filePath)
      .resize(128, 128)
      .jpeg({ quality: 60, progressive: true })
      .toFile(tempPath)
      .then(() => {
        fs.renameSync(tempPath, filePath);
        console.log(`Compressed ${file}`);
      })
      .catch(err => console.error(`Error compressing ${file}:`, err));
  }
});
