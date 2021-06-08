import createImageSlider from './image_slider';

const contentContainer = document.getElementById('content');
const imageArray = [['images/cat.jpg', 'Cat'],
  ['images/cat2.jpg', 'Cat 2']];

createImageSlider(imageArray, contentContainer);
