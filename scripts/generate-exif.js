
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import exifr from 'exifr';

const IMAGES_DIR = path.join(process.cwd(), 'src/images/optics');
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/optics-exif.json');

// 辅助函数：格式化快门速度
function formatShutterSpeed(exposureTime) {
  if (!exposureTime) return null;
  if (exposureTime >= 1) {
    return `${exposureTime}s`;
  }
  const denominator = Math.round(1 / exposureTime);
  return `1/${denominator}s`;
}

// 辅助函数：格式化光圈
function formatAperture(fNumber) {
  if (!fNumber) return null;
  return `f/${fNumber}`;
}

async function generateExifData() {
  console.log('Scanning images in:', IMAGES_DIR);
  
  // 查找所有 jpg/jpeg/png 文件
  const files = await glob('*.{jpg,jpeg,png,JPG,JPEG,PNG}', { cwd: IMAGES_DIR });
  
  const exifData = {};

  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    try {
      // 解析 EXIF
      const output = await exifr.parse(filePath, {
        tiff: true,
        exif: true,
        gps: false,
        // 明确需要提取的标签，以提高性能和准确性
        pick: ['Make', 'Model', 'LensModel', 'ISO', 'FNumber', 'ExposureTime', 'FocalLength']
      });

      if (output) {
        // 构建符合 Photo 接口的数据
        // 注意：这里我们生成部分数据，将在 optics.ts 中与手动数据合并
        const data = {
            // 简单的相机型号处理，例如 "Canon EOS R6" -> "Canon EOS R6"
            camera: output.Model || output.Make || 'Unknown Camera',
            // 镜头信息
            lens: output.LensModel || 'Unknown Lens',
            // ISO
            iso: output.ISO ? String(output.ISO) : 'Auto',
            // 光圈
            aperture: formatAperture(output.FNumber) || 'Unknown',
            // 快门
            shutter: formatShutterSpeed(output.ExposureTime) || 'Unknown',
            // 焦距 (可选，目前 optics.ts 没用到，但可以存着)
            focalLength: output.FocalLength ? `${output.FocalLength}mm` : undefined
        };
        
        exifData[file] = data;
        console.log(`Processed ${file}:`, data);
      } else {
        console.warn(`No EXIF data found for ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  // 写入 JSON 文件
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(exifData, null, 2));
  console.log(`Generated EXIF data for ${Object.keys(exifData).length} images to ${OUTPUT_FILE}`);
}

generateExifData();
