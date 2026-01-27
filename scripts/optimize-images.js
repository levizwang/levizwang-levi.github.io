
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'src/images/optics');

async function optimizeImages() {
  console.log('Scanning for non-WebP images in:', IMAGES_DIR);
  
  // Find jpg, jpeg, png files (case insensitive)
  const files = await glob('*.{jpg,jpeg,png,JPG,JPEG,PNG}', { cwd: IMAGES_DIR });

  if (files.length === 0) {
    console.log('No images found needing conversion.');
    return;
  }

  console.log(`Found ${files.length} images to optimize...`);

  let convertedCount = 0;

  for (const file of files) {
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const newName = `${name}.webp`;
    const inputPath = path.join(IMAGES_DIR, file);
    const outputPath = path.join(IMAGES_DIR, newName);

    // Skip if WebP version already exists (optional, but here we assume we want to replace or ensure conversion)
    // If we want to force re-conversion, we just overwrite.
    
    console.log(`Converting ${file} -> ${newName}`);
    
    try {
      await sharp(inputPath)
        .resize(1920, null, { withoutEnlargement: true }) // Resize to max width 1920px
        .webp({ quality: 85, effort: 6 }) // High quality, high compression effort
        .withMetadata() // Keep EXIF
        .toFile(outputPath);
      
      // Delete original file to keep directory clean
      fs.unlinkSync(inputPath);
      convertedCount++;
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }

  console.log(`Optimization complete. Converted ${convertedCount} images.`);
}

optimizeImages();
