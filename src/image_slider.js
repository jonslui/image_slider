function populateSlider(image, container, index) {
  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'imageContainer');

  const imageSRC = image[0];
  const imageALT = image[1];
  const element = document.createElement('img');
  element.setAttribute('class', 'image');
  element.setAttribute('alt', imageALT);
  element.id = index;
  element.src = imageSRC;

  if (index !== 0) {
    element.style.display = 'none';
  }

  imageContainer.appendChild(element);
  container.appendChild(imageContainer);
}

function nextImage(HTMLcollection) {
  let i = 0;

  while (HTMLcollection[i].style.display !== '') {
    i += 1;
  }

  HTMLcollection[i].style.display = 'none';

  if (i === HTMLcollection.length - 1) {
    HTMLcollection[0].style.display = '';
  } else {
    HTMLcollection[i + 1].style.display = '';
  }
}

function lastImage(HTMLcollection) {
  let i = 0;

  while (HTMLcollection[i].style.display !== '') {
    i += 1;
  }

  HTMLcollection[i].style.display = 'none';

  if (i === 0) {
    HTMLcollection[HTMLcollection.length - 1].style.display = '';
  } else {
    HTMLcollection[i - 1].style.display = '';
  }
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
  array.forEach((image, index) => populateSlider(image, sliderContainer, index));
  sliderContainer.appendChild(rightButton);

  // On button click: pass array of pointers to images to function and currently visible image
  const imageHTMLCollection = sliderContainer.getElementsByClassName('image');
  leftButton.addEventListener('click', () => {
    lastImage(imageHTMLCollection);
  });
  rightButton.addEventListener('click', () => {
    nextImage(imageHTMLCollection);
  });

  container.appendChild(sliderContainer);
}

export default createImageSlider;
