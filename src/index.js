import {hideScreen} from './View/hide-screen.js';
import {showScreen} from './View/show-screen.js';
import {addStationScreen} from './View/add-screen.js';
import {$stationAddInput} from './View/input.js';

export function onChangeScreen(e) {
  hideScreen();
  showScreen(e);
}

export function onAddStation() {
  setLocalStorage('station');
  addStationScreen($stationAddInput.value);
}

export function onRemoveStation(e) {
  console.log(e.target.dataset.station);
}

const setLocalStorage = (key) => {
  const localStorageValue = getLocalStorage(key);
  if (localStorageValue === null) {
    return localStorage.setItem(key, JSON.stringify([$stationAddInput.value]));
  }

  return localStorage.setItem(
    key,
    JSON.stringify([...localStorageValue, $stationAddInput.value]),
  );
};

const getLocalStorage = (key) => {
  const localStorageValue = JSON.parse(localStorage.getItem(key));

  return localStorageValue;
};
