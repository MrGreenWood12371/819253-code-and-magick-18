'use strict';

var WIZARDS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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
