function draw()
{
  var canvas = document.querySelector('canvas').getContext('2d');
  // First square
  canvas.fillRect(10, 10, 50, 50);
  // Second square
  canvas.fillRect(100, 100, 100, 100);
}

window.onload = draw;