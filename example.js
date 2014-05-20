function writeMessage(message) {
  text.setText(message);
  layer.draw();
}

function loadImages(sources, callback) {
  var assetDir = 'file:///Users/synthresin/codes/kinetic_js_test/';
  var images = {};
  var loadedImages = 0;
  var numImages = 0;
  for(var src in sources) {
    numImages++;
  }
  for(var src in sources) {
    images[src] = new Image();
    images[src].onload = function() {
      if(++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = assetDir + sources[src];
  }
}

function buildStage(images) {
  var monkey = new Kinetic.Image({
    image: images.monkey,
    x: 120,
    y: 50
  });

  var lion = new Kinetic.Image({
    image: images.lion,
    x: 280,
    y: 30
  });

  monkey.on('mouseover', function() {
    writeMessage('mouseover monkey');
  });

  monkey.on('mouseout', function() {
    writeMessage('');
  });

  lion.on('mouseover', function() {
    writeMessage('mouseover lion');
  });

  lion.on('mouseout', function() {
    writeMessage('');
  });

  layer.add(monkey);
  layer.add(lion);
  layer.add(text);
  stage.add(layer);
  
  // in order to ignore transparent pixels in an image when detecting
  // events, we first need to cache the image
  lion.cache();
  
  // next, we need to redraw the hit graph using the cached image
  lion.drawHitFromCache();
  
  // finally, we need to redraw the layer hit graph
  layer.drawHit();
}

var stage = new Kinetic.Stage({
  container: 'container',
  width: 578,
  height: 200
});

var layer = new Kinetic.Layer();
           
var text = new Kinetic.Text({
  x: 10,
  y: 10,
  fontFamily: 'Calibri',
  fontSize: 24,
  text: '',
  fill: 'black'
});

var sources = {
  lion: 'lion.png',
  monkey: 'monkey.png'
};
 
loadImages(sources, buildStage);