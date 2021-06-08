function populateSlider(image, container) {
  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'imageContainer');

  const imageSRC = image[0];
  const imageALT = image[1];
  const element = document.createElement('img');
  element.setAttribute('class', 'image');
  element.setAttribute('alt', imageALT);
  element.src = imageSRC;

  imageContainer.appendChild(element);
  container.appendChild(imageContainer);
}

function createImageSlider(array, container) {
  const sliderContainer = document.createElement('div');
  sliderContainer.setAttribute('class', 'sliderContainer');
  // buttons to move images
  const leftButton = document.createElement('a');
  leftButton.setAttribute('class', 'nextPhotoButton');
  const rightButton = document.createElement('b');
  rightButton.setAttribute('class', 'nextPhotoButton');

  sliderContainer.appendChild(leftButton);
  array.forEach((image) => populateSlider(image, sliderContainer));
  sliderContainer.appendChild(rightButton);

  container.appendChild(sliderContainer);
}

export default createImageSlider;
