import {onChangeScreen, onAddStation} from '../index.js';

export const $screenButton = document.body.querySelectorAll('#app > button');
export const $stationContainer = document.body.querySelector('#station');
export const $lineContainer = document.body.querySelector('#line');
export const $sectionContainer = document.body.querySelector('#subway-section');
export const $mapContainer = document.body.querySelector('#map-section');
export const $stationAddInput = document.body.querySelector(
  '#station-name-input',
);
export const $stationAddButton = document.body.querySelector(
  '#station-add-button',
);

$screenButton.forEach((button) =>
  button.addEventListener('click', onChangeScreen),
);

$stationAddButton.addEventListener('click', onAddStation);
