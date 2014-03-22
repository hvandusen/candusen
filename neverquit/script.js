var red;
var yellow;
var blue;
var green;
var orange;
var purple;

function onMouseMove(event) {
      var path = new Path.Circle({
        center: event.point,
        radius: num(25)-15,
        fillColor: prettyRaCo()
      });

}

function moveParticles(particle,color){
var box;
if(color == 'red') box = red;
else if(color == 'yellow') box = yellow;
else if(color == 'orange') box = orange;
else if(color == 'purple') box = purple;
else if(color == 'blue') box = blue;
else if(color == 'green') box = green;

var pt = new Point(box.bounds._x+box.bounds.width/2,box.bounds._y+box.bounds.height/2);
var vector = pt-particle.position; 
        if(!!!box.hitTest(particle.position))
        {
          particle.position += vector.normalize(4);
        }
        if (vector.length<45)
        { 

          particle.position += [num(200)-100,num(200)-100];
        }
        else
        {
          particle.position += vector.normalize(4);

        }

}

function onMouseDrag(event) {
      var items = project.layers[0]._children;      
      for (var i = 6; i < items.length; i++) {
        console.dir(items[i]);
      var rgb = items[i]._style._values.fillColor._canvasStyle;
      var color = prettyDecoder(rgb);
      moveParticles(items[i],color);
      }
}

function onMouseDown(event) {
      var test = red.hitTest(event.point);
      console.dir(test);
}


$(document).ready(function(){

var p = new Point(0,0);
var s = new Size(view.size.width/3,view.size.height/2);

 red = new Shape.Rectangle(p,s);
 red.strokeColor = 'red';
 p += [s.width,0];

console.dir(s);
 orange = new Shape.Rectangle(p,s);
 orange.strokeColor = 'orange';
 p += [s.width,0];


yellow = new Shape.Rectangle(p,s);
  yellow.strokeColor = 'yellow';
 
 p -= [s.width*2,-s.height];

green = new Shape.Rectangle(p,s);
  green.strokeColor = 'green';
  p += [s.width,0];

purple = new Shape.Rectangle(p,s);
  purple.strokeColor = 'purple';
  p += [s.width,0];

blue = new Shape.Rectangle(p,s);
  blue.strokeColor = 'blue';

});
