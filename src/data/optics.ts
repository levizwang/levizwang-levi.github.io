import { Photo } from '@/types/optics';

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
    category: 'Nature',
    camera: 'Digital',
    lens: 'Standard',
    iso: 'Auto',
    aperture: 'f/2.8',
    shutter: '1/60s',
    location: 'Home',
    title: 'Yuanbao In Bed',
    story: 'A cozy moment captured at home.'
  },
  {
    id: '2',
    url: fountain,
    category: 'Urban',
    camera: 'Digital',
    lens: 'Wide',
    iso: '100',
    aperture: 'f/8',
    shutter: '1/200s',
    location: 'City Park',
    title: 'Fountain',
    story: 'Water dancing in the city light.'
  },
  {
    id: '3',
    url: olympicTower,
    category: 'Urban',
    camera: 'Digital',
    lens: 'Telephoto',
    iso: '200',
    aperture: 'f/5.6',
    shutter: '1/500s',
    location: 'Olympic Park',
    title: 'Olympic Tower',
    story: 'A towering structure against the sky.'
  },
  {
    id: '4',
    url: olympicForestSunflower1,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Macro',
    iso: '100',
    aperture: 'f/4',
    shutter: '1/400s',
    location: 'Olympic Forest Park',
    title: 'Sunflower Bloom',
    story: 'Bright yellow petals facing the sun.'
  },
  {
    id: '5',
    url: olympicForestSunflower2,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Macro',
    iso: '100',
    aperture: 'f/4',
    shutter: '1/400s',
    location: 'Olympic Forest Park',
    title: 'Sunflower Field',
    story: 'A field of golden sunflowers.'
  },
  {
    id: '6',
    url: olympicForestWhiteFlower1,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Macro',
    iso: '200',
    aperture: 'f/2.8',
    shutter: '1/1000s',
    location: 'Olympic Forest Park',
    title: 'White Blossom',
    story: 'Delicate white flowers in bloom.'
  },
  {
    id: '7',
    url: olympicForestAutumnLeaves,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Standard',
    iso: '400',
    aperture: 'f/4',
    shutter: '1/250s',
    location: 'Olympic Forest Park',
    title: 'Autumn Leaves',
    story: 'The colors of fall.'
  },
  {
    id: '8',
    url: olympicForestAutumnLeaves2,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Standard',
    iso: '400',
    aperture: 'f/4',
    shutter: '1/250s',
    location: 'Olympic Forest Park',
    title: 'Golden Canopy',
    story: 'Sunlight filtering through autumn leaves.'
  },
  {
    id: '9',
    url: olympicForestPinkGrass1,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Standard',
    iso: '200',
    aperture: 'f/2.8',
    shutter: '1/500s',
    location: 'Olympic Forest Park',
    title: 'Pink Muhly Grass',
    story: 'Soft pink waves in the breeze.'
  },
  {
    id: '10',
    url: olympicForestGinkgo,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Standard',
    iso: '200',
    aperture: 'f/5.6',
    shutter: '1/320s',
    location: 'Olympic Forest Park',
    title: 'Ginkgo Avenue',
    story: 'Golden ginkgo leaves covering the path.'
  },
  {
    id: '11',
    url: horohiraBridge,
    category: 'Urban',
    camera: 'Digital',
    lens: 'Wide',
    iso: '100',
    aperture: 'f/8',
    shutter: '1/125s',
    location: 'Sapporo',
    title: 'Horohira Bridge',
    story: 'Architecture spanning the water.'
  },
  {
    id: '12',
    url: chengjiangLake1,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Wide',
    iso: '100',
    aperture: 'f/11',
    shutter: '1/60s',
    location: 'Chengjiang',
    title: 'Chengjiang Lake',
    story: 'Serene waters and distant mountains.'
  },
  {
    id: '13',
    url: chengjiangLakeside,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Wide',
    iso: '100',
    aperture: 'f/8',
    shutter: '1/200s',
    location: 'Chengjiang',
    title: 'Lakeside View',
    story: 'Peaceful moments by the lake.'
  },
  {
    id: '14',
    url: chengjiangLakeside2,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Standard',
    iso: '200',
    aperture: 'f/5.6',
    shutter: '1/250s',
    location: 'Chengjiang',
    title: 'Water\'s Edge',
    story: 'Where the water meets the land.'
  },
  {
    id: '15',
    url: baiwangMountain,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Wide',
    iso: '100',
    aperture: 'f/8',
    shutter: '1/125s',
    location: 'Baiwang Mountain',
    title: 'Baiwang Mountain',
    story: 'A view from the top.'
  },
  {
    id: '16',
    url: baiwangMountainNight,
    category: 'Urban',
    camera: 'Digital',
    lens: 'Standard',
    iso: '1600',
    aperture: 'f/2.8',
    shutter: '1/30s',
    location: 'Baiwang Mountain',
    title: 'Baiwang Night',
    story: 'City lights seen from the mountain.'
  },
  {
    id: '17',
    url: snowPlow,
    category: 'Street',
    camera: 'Digital',
    lens: 'Standard',
    iso: '400',
    aperture: 'f/4',
    shutter: '1/500s',
    location: 'City Streets',
    title: 'Snow Plow',
    story: 'Clearing the way in winter.'
  },
  {
    id: '18',
    url: snowAmusementPark,
    category: 'Urban',
    camera: 'Digital',
    lens: 'Wide',
    iso: '200',
    aperture: 'f/5.6',
    shutter: '1/250s',
    location: 'Amusement Park',
    title: 'Snowy Park',
    story: 'A winter wonderland in the amusement park.'
  },
  {
    id: '19',
    url: catInSnow,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Telephoto',
    iso: '400',
    aperture: 'f/2.8',
    shutter: '1/1000s',
    location: 'Outdoors',
    title: 'Cat in Snow',
    story: 'A cat exploring the snowy landscape.'
  },
  {
    id: '20',
    url: longmaMountainHydrangea1,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Macro',
    iso: '200',
    aperture: 'f/2.8',
    shutter: '1/400s',
    location: 'Longma Mountain',
    title: 'Hydrangea',
    story: 'Vibrant hydrangeas in bloom.'
  },
  {
    id: '21',
    url: longmaMountainMoss1,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Macro',
    iso: '400',
    aperture: 'f/2.8',
    shutter: '1/100s',
    location: 'Longma Mountain',
    title: 'Mountain Moss',
    story: 'Detailed texture of moss.'
  },
  {
    id: '22',
    url: longmaMountainWindmill,
    category: 'Nature',
    camera: 'Digital',
    lens: 'Wide',
    iso: '100',
    aperture: 'f/8',
    shutter: '1/500s',
    location: 'Longma Mountain',
    title: 'Windmill',
    story: 'Windmill turning in the mountain breeze.'
  }
];
