var DEFAULT_CANVAS_WIDTH = 1000;
var DEFAULT_CANVAS_HEIGHT = 1000;

var $container = $('#container');

// var lionImage = new Image();
// lionImage.onload = function() {
//   var lion = new Kinetic.Image({
//     image: lionImage,
//     x: 280,
//     y: 30
//   });
//   lion_layer.add(lion);
//   background_layer.add(rect);
//   stage.add(background_layer);
//   stage.add(lion_layer);
// }
// lionImage.src = 'lion.png'

function writeMessage(message) {
  text.setText(message);
  background_layer.draw();
}
var stage = new Kinetic.Stage({
  container: 'container',
  width: DEFAULT_CANVAS_WIDTH,
  height: DEFAULT_CANVAS_HEIGHT
});

var lion_layer = new Kinetic.Layer();
var background_layer = new Kinetic.Layer();

var rect = new Kinetic.Rect({
  x: 0,
  y: 0,
  width: stage.getWidth(),
  height: stage.getHeight(),
  fill: 'green',
});

var text = new Kinetic.Text({
  x: 10,
  y: 10,
  fontFamily: 'Calibri',
  fontSize: 24,
  text: '',
  fill: 'black'
});

var rect2 = new Kinetic.Rect({
  x: 250,
  y: 250,
  width: 500,
  height: 500,
  fill: 'red',
});

rect2.on('mouseout', function() {
  writeMessage('Mouseout rect2');
});

rect2.on('mousemove', function() {
  writeMessage('Mouseon rect2');
});
background_layer.add(rect);
background_layer.add(rect2);
background_layer.add(text);
stage.add(background_layer);

$(window).resize(function() {
  resize();
});

function resize(){
  var scalePercentage = $container.width() / DEFAULT_CANVAS_WIDTH;

  stage.setAttr('scaleX', scalePercentage);
  stage.setAttr('scaleY', scalePercentage);
  stage.setAttr('width', DEFAULT_CANVAS_WIDTH * scalePercentage);
  stage.setAttr('height', DEFAULT_CANVAS_HEIGHT * scalePercentage);
  stage.draw();
}