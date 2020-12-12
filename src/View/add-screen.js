import {
  $stationContainer,
  $lineContainer,
  $sectionContainer,
  $subwaySectionContainer,
  setButtonOption,
} from './input.js';

export const addStationScreen = (value) => {
  const $stationTbody = $stationContainer.querySelector('table > tbody');
  const $stationTr = document.createElement('tr');
  $stationTr.innerHTML = `
    <td>${value}</td>
    <td><button class="station-delete-button">삭제</button></td>
  `;
  setButtonOption(value, $stationTr.querySelector('button'));
  $stationTbody.appendChild($stationTr);
};

export const addStationSelectOption = ($lastStop, station) => {
  const $optionLastStopStation = document.createElement('option');
  $optionLastStopStation.textContent = station;
  $lastStop.appendChild($optionLastStopStation);
};

export const addLineScreen = (line) => {
  const $lineTbody = $lineContainer.querySelector('table > tbody');
  const $lineTr = document.createElement('tr');
  $lineTr.innerHTML = `
    <td>${line.lineName}</td>
    <td>${line.station[0]}</td>
    <td>${line.station[line.station.length - 1]}</td>
    <td><button class="line-delete-button">삭제</button></td>
  `;
  setButtonOption(line.lineName, $lineTr.querySelector('button'));
  $lineTbody.appendChild($lineTr);
};

export const addSectionButton = (line) => {
  const $sectionButtonContainer = $sectionContainer.querySelector(
    '#section-select-button',
  );
  const $sectionButton = document.createElement('button');
  $sectionButton.className = 'section-line-menu-button';
  $sectionButton.textContent = line;
  setButtonOption(line, $sectionButton);
  $sectionButtonContainer.appendChild($sectionButton);
};

export const addSectionScreen = (line) => {
  const $sectionTbody = $sectionContainer.querySelector('table > tbody');
  for (let i = 0; i < line.station.length; i++) {
    const $sectionTr = document.createElement('tr');
    $sectionTr.innerHTML = `
      <td>${i}</td>
      <td>${line.station[i]}</td>
      <td><button class="section-delete-button">노선에서 삭제</button></td>
    `;
    $sectionTr.dataset.line = line.lineName;
    $sectionTr.style.display = 'none';
    const sectionData = {line: line.lineName, station: line.station[i]};
    setButtonOption(sectionData, $sectionTr.querySelector('button'));
    $sectionTbody.appendChild($sectionTr);
  }
};

export const addLineTitle = (line) => {
  const $lineTitle = $subwaySectionContainer.querySelector('h2');
  $lineTitle.textContent = `${line} 관리`;
};
