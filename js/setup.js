'use strict';

var WIZARDS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var setupCloseButton = document.querySelector('.setup-close');

var userDialog = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function setupClose() {
  var coat = document.querySelector('.wizard-coat');
  var eyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
  setupCloseButton.removeEventListener('click', onSetupClosePress);
  setupCloseButton.removeEventListener('keydown', onSetupCloseEnterPress);
  coat.removeEventListener('click', onWizardCoatClick);
  eyes.removeEventListener('click', onWizardEyesClick);
  fireball.removeEventListener('click', onWizardFireballClick);
}

function onSetupClosePress() {
  setupClose();
}

function changeCoatColor(color) {
  var coatInput = document.querySelector('input[name="coat-color"]');
  var coat = document.querySelector('.wizard-coat');
  coat.setAttribute('style', 'fill: ' + color);
  coatInput.setAttribute('value', color);
}

function changeEyesColor(color) {
  var eyesInput = document.querySelector('input[name="eyes-color"]');
  var eyes = document.querySelector('.wizard-eyes');
  eyes.setAttribute('style', 'fill: ' + color);
  eyesInput.setAttribute('value', color);
}

function changeFireballColor(color) {
  var fireballInput = document.querySelector('input[name="fireball-color"]');
  var fireball = document.querySelector('.setup-fireball-wrap');
  fireball.style.background = color;
  fireballInput.setAttribute('value', color);
}

function onWizardCoatClick() {
  changeCoatColor(COAT_COLORS[getRandomNumber(COAT_COLORS)]);
}

function onWizardEyesClick() {
  changeEyesColor(EYES_COLORS[getRandomNumber(EYES_COLORS)]);
}

function onWizardFireballClick() {
  changeFireballColor(FIREBALL_COLORS[getRandomNumber(FIREBALL_COLORS)]);
}

function onSetupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    setupClose();
  }
}

function onSetupCloseEnterPress(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupClose();
  }
}

function openSetup() {
  var coat = document.querySelector('.wizard-coat');
  var eyes = document.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  userDialog.classList.remove('hidden');
  setupCloseButton.addEventListener('click', onSetupClosePress);
  document.addEventListener('keydown', onSetupEscPress);
  setupCloseButton.addEventListener('keydown', onSetupCloseEnterPress);
  coat.addEventListener('click', onWizardCoatClick);
  eyes.addEventListener('click', onWizardEyesClick);
  fireball.addEventListener('click', onWizardFireballClick);
}

function onSetupOpenPress() {
  openSetup();
}

function onSetupOpenEnterPress(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetup();
  }
}

setupOpenButton.addEventListener('click', onSetupOpenPress);
setupOpenButton.addEventListener('keydown', onSetupOpenEnterPress);

function getRandomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getWizards(names, surnames, coatColors, eyesColors) {
  var wizards = [];

  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    wizards.push({
      name: names[getRandomNumber(names)] + ' ' + surnames[getRandomNumber(surnames)],
      coatColor: coatColors[getRandomNumber(coatColors)],
      eyesColor: eyesColors[getRandomNumber(eyesColors)]
    });
  }
  return wizards;
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARDS_NUMBER; i++) {
  fragment.appendChild(renderWizard(getWizards(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS)[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


