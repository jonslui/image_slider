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

function populateSelectorContainer(container, HTMLcollection, arrayLength) {
  for (let i = 0; i < arrayLength; i += 1) {
    const selector = document.createElement('a');
    selector.setAttribute('class', 'selector');
    selector.innerHTML = '◯';
    container.appendChild(selector);

    selector.addEventListener('click', () => {
      // find index of currently displayed image
      let j = 0;
      while (HTMLcollection[j].style.display !== '') {
        j += 1;
      }

      HTMLcollection[j].style.display = 'none';
      HTMLcollection[i].style.display = '';
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

  leftButton.addEventListener('click', () => {
    lastImage(imageHTMLCollection);
  });
  rightButton.addEventListener('click', () => {
    nextImage(imageHTMLCollection);
  });

  populateSelectorContainer(selectorContainer, imageHTMLCollection, array.length);

  sliderContainer.appendChild(imageContainer);
  sliderContainer.appendChild(leftButton);
  sliderContainer.appendChild(selectorContainer);
  sliderContainer.appendChild(rightButton);

  // Automatically flip to the next image every 5000 seconds
  setInterval(() => nextImage(imageHTMLCollection), 5000);

  container.appendChild(sliderContainer);
}

export default createImageSlider;
