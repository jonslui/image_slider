import createImageSlider from './image_slider';

const contentContainer = document.getElementById('content');
const imageArray = [['images/cat.jpg', 'Cat'],
  ['images/cat2.jpg', 'Cat 2'], ['images/cat3.jpg', 'Cat 3']];

createImageSlider(imageArray, contentContainer, false);
