import { Photo } from '@/types/optics';
import exifDataRaw from './optics-exif.json';

const exifData = exifDataRaw as Record<string, any>;

// Re-export imports
import yuanbaoInBed from '@/images/optics/Yuanbao_In_Bed.jpg';
import fountain from '@/images/optics/Fountain.jpg';
import olympicTower from '@/images/optics/Olympic_Tower.jpg';
import olympicForestSunflower1 from '@/images/optics/Olympic_Forest_Sunflower_1.jpg';
import olympicForestSunflower2 from '@/images/optics/Olympic_Forest_Sunflower_2.jpg';
import olympicForestWhiteFlower1 from '@/images/optics/Olympic_Forest_White_Flower_1.jpg';
import olympicForestAutumnLeaves from '@/images/optics/Olympic_Forest_Autumn_Leaves.jpg';
import olympicForestAutumnLeaves2 from '@/images/optics/Olympic_Forest_Autumn_Leaves_2.jpg';
import olympicForestPinkGrass1 from '@/images/optics/Olympic_Forest_Pink_Grass_1.jpg';
import olympicForestGinkgo from '@/images/optics/Olympic_Forest_Ginkgo.jpg';
import horohiraBridge from '@/images/optics/Horohira_Bridge.jpg';
import chengjiangLake1 from '@/images/optics/Chengjiang_Lake_1.jpg';
import chengjiangLakeside from '@/images/optics/Chengjiang_Lakeside.jpg';
import chengjiangLakeside2 from '@/images/optics/Chengjiang_Lakeside_2.jpg';
import baiwangMountain from '@/images/optics/Baiwang_Mountain.jpg';
import baiwangMountainNight from '@/images/optics/Baiwang_Mountain_Night.jpg';
import snowPlow from '@/images/optics/Snow_Plow.jpg';
import snowAmusementPark from '@/images/optics/Snow_Amusement_Park.jpg';
import catInSnow from '@/images/optics/Cat_In_Snow.jpg';
import longmaMountainHydrangea1 from '@/images/optics/Longma_Mountain_Hydrangea_1.jpg';
import longmaMountainMoss1 from '@/images/optics/Longma_Mountain_Moss_1.jpg';
import longmaMountainWindmill from '@/images/optics/Longma_Mountain_Windmill.jpg';

export const photos: Photo[] = [
  {
    id: '1',
    url: yuanbaoInBed,
    ...exifData['Yuanbao_In_Bed.jpg'],
    category: 'Nature',
    location: 'Home',
    title: 'Yuanbao In Bed',
    story: 'A cozy moment captured at home.'
  },
  {
    id: '2',
    url: fountain,
    ...exifData['Fountain.jpg'],
    category: 'Urban',
    location: 'City Park',
    title: 'Fountain',
    story: 'Water dancing in the city light.'
  },
  {
    id: '3',
    url: olympicTower,
    ...exifData['Olympic_Tower.jpg'],
    category: 'Urban',
    location: 'Olympic Park',
    title: 'Olympic Tower',
    story: 'A towering structure against the sky.'
  },
  {
    id: '4',
    url: olympicForestSunflower1,
    ...exifData['Olympic_Forest_Sunflower_1.jpg'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Sunflower Bloom',
    story: 'Bright yellow petals facing the sun.'
  },
  {
    id: '5',
    url: olympicForestSunflower2,
    ...exifData['Olympic_Forest_Sunflower_2.jpg'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Sunflower Field',
    story: 'A field of golden sunflowers.'
  },
  {
    id: '6',
    url: olympicForestWhiteFlower1,
    ...exifData['Olympic_Forest_White_Flower_1.jpg'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'White Blossom',
    story: 'Delicate white flowers in bloom.'
  },
  {
    id: '7',
    url: olympicForestAutumnLeaves,
    ...exifData['Olympic_Forest_Autumn_Leaves.jpg'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Autumn Leaves',
    story: 'The colors of fall.'
  },
  {
    id: '8',
    url: olympicForestAutumnLeaves2,
    ...exifData['Olympic_Forest_Autumn_Leaves_2.jpg'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Golden Canopy',
    story: 'Sunlight filtering through autumn leaves.'
  },
  {
    id: '9',
    url: olympicForestPinkGrass1,
    ...exifData['Olympic_Forest_Pink_Grass_1.jpg'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Pink Muhly Grass',
    story: 'Soft pink waves in the breeze.'
  },
  {
    id: '10',
    url: olympicForestGinkgo,
    ...exifData['Olympic_Forest_Ginkgo.jpg'],
    category: 'Nature',
    location: 'Olympic Forest Park',
    title: 'Ginkgo Avenue',
    story: 'Golden ginkgo leaves covering the path.'
  },
  {
    id: '11',
    url: horohiraBridge,
    ...exifData['Horohira_Bridge.jpg'],
    category: 'Urban',
    location: 'Sapporo',
    title: 'Horohira Bridge',
    story: 'Architecture spanning the water.'
  },
  {
    id: '12',
    url: chengjiangLake1,
    ...exifData['Chengjiang_Lake_1.jpg'],
    category: 'Nature',
    location: 'Chengjiang',
    title: 'Chengjiang Lake',
    story: 'Serene waters and distant mountains.'
  },
  {
    id: '13',
    url: chengjiangLakeside,
    ...exifData['Chengjiang_Lakeside.jpg'],
    category: 'Nature',
    location: 'Chengjiang',
    title: 'Lakeside View',
    story: 'Peaceful moments by the lake.'
  },
  {
    id: '14',
    url: chengjiangLakeside2,
    ...exifData['Chengjiang_Lakeside_2.jpg'],
    category: 'Nature',
    location: 'Chengjiang',
    title: 'Water\'s Edge',
    story: 'Where the water meets the land.'
  },
  {
    id: '15',
    url: baiwangMountain,
    ...exifData['Baiwang_Mountain.jpg'],
    category: 'Nature',
    location: 'Baiwang Mountain',
    title: 'Baiwang Mountain',
    story: 'A view from the top.'
  },
  {
    id: '16',
    url: baiwangMountainNight,
    ...exifData['Baiwang_Mountain_Night.jpg'],
    category: 'Urban',
    location: 'Baiwang Mountain',
    title: 'Baiwang Night',
    story: 'City lights seen from the mountain.'
  },
  {
    id: '17',
    url: snowPlow,
    ...exifData['Snow_Plow.jpg'],
    category: 'Street',
    location: 'City Streets',
    title: 'Snow Plow',
    story: 'Clearing the way in winter.'
  },
  {
    id: '18',
    url: snowAmusementPark,
    ...exifData['Snow_Amusement_Park.jpg'],
    category: 'Urban',
    location: 'Amusement Park',
    title: 'Snowy Park',
    story: 'A winter wonderland in the amusement park.'
  },
  {
    id: '19',
    url: catInSnow,
    ...exifData['Cat_In_Snow.jpg'],
    category: 'Nature',
    location: 'Outdoors',
    title: 'Cat in Snow',
    story: 'A cat exploring the snowy landscape.'
  },
  {
    id: '20',
    url: longmaMountainHydrangea1,
    ...exifData['Longma_Mountain_Hydrangea_1.jpg'],
    category: 'Nature',
    location: 'Longma Mountain',
    title: 'Hydrangea',
    story: 'Vibrant hydrangeas in bloom.'
  },
  {
    id: '21',
    url: longmaMountainMoss1,
    ...exifData['Longma_Mountain_Moss_1.jpg'],
    category: 'Nature',
    location: 'Longma Mountain',
    title: 'Mountain Moss',
    story: 'Detailed texture of moss.'
  },
  {
    id: '22',
    url: longmaMountainWindmill,
    ...exifData['Longma_Mountain_Windmill.jpg'],
    category: 'Nature',
    location: 'Longma Mountain',
    title: 'Windmill',
    story: 'Windmill turning in the mountain breeze.'
  },
];
