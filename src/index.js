import Station from './Model/station.js';
import {hideScreen} from './View/hide-screen.js';
import {showScreen} from './View/show-screen.js';
import {addStationScreen} from './View/add-screen.js';
import {removeStationScreen} from './View/remove-screen.js';
import {$stationAddInput} from './View/input.js';
import {isInputValid} from './Controller/valid.js';
import {
  setLocalStorage,
  removeLocalStorage,
  getLocalStorage,
} from './Controller/local-storage.js';

const stationInstance = new Station();

export function onChangeScreen(e) {
  hideScreen();
  showScreen(e);
}

export function onAddStation() {
  if (isInputValid($stationAddInput.value, stationInstance.stations)) {
    setLocalStorage('station', $stationAddInput.value);
    stationInstance.addStation($stationAddInput.value);
    addStationScreen($stationAddInput.value);
  }
  $stationAddInput.value = '';
}

export function onRemoveStation(e) {
  const removeConfirm = confirm('정말로 삭제하시겠습니까?');
  if (removeConfirm) {
    removeLocalStorage('station', e.target.dataset.station);
    stationInstance.removeStation(e.target.dataset.station);
    removeStationScreen(e.target);
  }
}

export const loadStation = () => {
  if (!isStationLoaded()) {
    stationInstance.loadStation();
    stationInstance.stations.forEach((station) => addStationScreen(station));
  }
};

const isStationLoaded = () => {
  const localStation = JSON.stringify(getLocalStorage('station'));
  const serverStation = JSON.stringify(stationInstance.stations);

  return localStation === serverStation;
};
