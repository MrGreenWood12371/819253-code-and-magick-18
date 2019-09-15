'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var GAP = 30;
var barHeight = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50 + BAR_WIDTH;

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function getMaxElement(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

function getColorSaturation() {
  return Math.random() * 100;
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 120, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 110, 10, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 30);
  ctx.fillText('Список результатов:', 130, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (BAR_GAP * i), CLOUD_Y + 70);
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_GAP * i), CLOUD_HEIGHT - CLOUD_Y);
    ctx.fillStyle = 'hsl(240, ' + getColorSaturation() + '%, 50%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_GAP * i), CLOUD_HEIGHT - CLOUD_Y - barHeight - 10, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }
};
