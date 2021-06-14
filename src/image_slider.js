/* eslint-disable no-param-reassign */
function populateSlider(image, container, index) {
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

  container.appendChild(element);
}

// HTMLcollection is a collection of the clickable selector circles
function updateSelectorDisplay(HTMLcollection, index, isDisplayed) {
  if (isDisplayed === false) {
    HTMLcollection[index].innerHTML = '○';
  } else {
    HTMLcollection[index].innerHTML = '●';
  }
}

// images and selectors are HTMLcollections
function nextImage(images, selectors) {
  let i = 0;
  updateSelectorDisplay(selectors, i, false);

  while (images[i].style.display !== '') {
    i += 1;
    updateSelectorDisplay(selectors, i, false);
  }

  images[i].style.display = 'none';

  if (i === images.length - 1) {
    images[0].style.display = '';
    updateSelectorDisplay(selectors, 0, true);
  } else {
    images[i + 1].style.display = '';
    updateSelectorDisplay(selectors, i + 1, true);
  }
}

// images and selectors are HTMLcollections
function lastImage(images, selectors) {
  let i = 0;
  updateSelectorDisplay(selectors, i, false);

  while (images[i].style.display !== '') {
    i += 1;
    updateSelectorDisplay(selectors, i, false);
  }

  images[i].style.display = 'none';

  if (i === 0) {
    images[images.length - 1].style.display = '';
    updateSelectorDisplay(selectors, selectors.length - 1, true);
  } else {
    images[i - 1].style.display = '';
    updateSelectorDisplay(selectors, i - 1, true);
  }
}

function populateSelectorContainer(container, HTMLcollection, arrayLength) {
  for (let i = 0; i < arrayLength; i += 1) {
    const selector = document.createElement('a');
    selector.setAttribute('class', 'selector');

    if (i === 0) {
      selector.innerHTML = '●';
    } else {
      selector.innerHTML = '○';
    }

    container.appendChild(selector);
  }
}

function addSelectorEventListeners(images, selectors) {
  for (let i = 0; i < selectors.length; i += 1) {
    selectors[i].addEventListener('click', () => {
      for (let j = 0; j < selectors.length; j += 1) {
        selectors[j].innerHTML = '○';
        images[j].style.display = 'none';
      }

      selectors[i].innerHTML = '●';
      images[i].style.display = '';
    });
  }
}

function createImageSlider(array, container) {
  const sliderContainer = document.createElement('div');
  sliderContainer.setAttribute('class', 'sliderContainer');

  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'imageContainer');

  const leftButton = document.createElement('a');
  leftButton.setAttribute('class', 'lastPhotoButton');
  leftButton.innerHTML = '<';

  const rightButton = document.createElement('a');
  rightButton.setAttribute('class', 'nextPhotoButton');
  rightButton.innerHTML = '>';

  const selectorContainer = document.createElement('div');
  selectorContainer.setAttribute('class', 'selectorContainer');

  array.forEach((image, index) => populateSlider(image, imageContainer, index));

  // On button click: pass array of pointers to images to function and currently visible image
  const imageHTMLCollection = sliderContainer.getElementsByClassName('image');

  populateSelectorContainer(selectorContainer, imageHTMLCollection, array.length);

  const selectorHTMLcollection = selectorContainer.getElementsByClassName('selector');
  addSelectorEventListeners(imageHTMLCollection, selectorHTMLcollection);

  leftButton.addEventListener('click', () => {
    lastImage(imageHTMLCollection, selectorHTMLcollection);
  });
  rightButton.addEventListener('click', () => {
    nextImage(imageHTMLCollection, selectorHTMLcollection);
  });

  sliderContainer.appendChild(imageContainer);
  sliderContainer.appendChild(leftButton);
  sliderContainer.appendChild(selectorContainer);
  sliderContainer.appendChild(rightButton);

  // Automatically flip to the next image every 5000 seconds
  setInterval(() => nextImage(imageHTMLCollection, selectorHTMLcollection), 5000);

  container.appendChild(sliderContainer);
}

export default createImageSlider;
