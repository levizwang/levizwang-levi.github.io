
# Optics Photo Workflow

这份文档描述了如何向 Optics 相册添加新照片。

## 1. 准备照片
将你的原始照片（支持 JPG, PNG 格式）放入此目录：`src/images/optics`。
*建议：使用高分辨率的图片，脚本会自动进行压缩优化。*

## 2. 格式转换与优化
运行以下命令，将图片转换为 WebP 格式并进行压缩，同时保留 EXIF 信息：
```bash
npm run optimize-images
```
*注意：此操作会将原 JPG/PNG 文件替换为 WebP 文件。*

## 3. 提取 EXIF 数据
运行以下命令，自动提取所有图片的 EXIF 参数（相机、光圈、快门等）：
```bash
npm run generate-exif
```
这会更新 `src/data/optics-exif.json` 文件。

## 4. 注册照片
打开 `src/data/optics.ts` 文件，添加新的图片条目：

```typescript
// 1. 引入图片
import newPhoto from '@/images/optics/New_Photo.webp';

// 2. 添加到数组
{
  id: 'unique_id',
  url: newPhoto,
  ...exifData['New_Photo.webp'], // 自动填充 EXIF 参数
  category: 'Nature',            // 分类
  location: 'Place Name',        // 地点
  title: 'Photo Title',          // 标题
  story: 'Description...'        // 描述
},
```

完成！
