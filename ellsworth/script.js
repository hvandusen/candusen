var red;
var yellow;
var blue;
var green;
var orange;
var purple;
var path;




function onMouseMove(event) {
drawShape();

}
$(window).on("touchstart", function(ev) {
drawShape();
//alert('please just use a computer ;(');
});


function drawShape(){
project.activeLayer.removeChildren();
  path = new Path();
  	  makePoint(red);
  	  makePoint(orange);
      makePoint(yellow);
      makePoint(blue);
      makePoint(purple);
      makePoint(green);
      number = num(3);
      if(number == 0)
      path.fillColor = 'red';
      else if(number == 1)
      path.fillColor = 'blue';
      else 
      path.fillColor = 'green';
      //path.fillColor = Math.floor(Math.random()*3)-1 == 1 ? 'red' : 'blue';
      //path.simplify(5);
      path.smooth();
      path.scale(.5);
      
      temp = num(2);
      if(temp ==0) 
      path.removeSegment(num(6));
      if(temp ==1)
      {
	     path.removeSegment(num(6));
	     path.removeSegment(num(5));
      }
	  if(temp ==2)
	        {
	     path.removeSegment(num(6));
	     path.removeSegment(num(5));
		 path.removeSegment(num(4));
      }
      path.closed = true;	
	
	
}


function onMouseDrag(event) {
      var items = project.layers[0]._children;      
      for (var i = 6; i < items.length; i++) {
      var rgb = items[i]._style._values.fillColor._canvasStyle;
      var color = prettyDecoder(rgb);
      }
}

function onMouseDown(event) {
      var test = red.hitTest(event.point);
      console.log(test);
}

function makePoint(box){
loc = box.bounds;
console.dir(loc);
//console.log(loc._owner * Point.random+box.position);
//path.add(loc._owner * Point.random+box.position);
path.add(new Point(num(loc._width)+loc._x,num(loc._height)+loc._y));
	
}


$(document).ready(function(){

var p = new Point(0,0);
var s = new Size(view.size.width/3,view.size.height/2);

 red = new Shape.Rectangle(p,s);
 p += [s.width,0];

 orange = new Shape.Rectangle(p,s);
 p += [s.width,0];


yellow = new Shape.Rectangle(p,s);
 
 p -= [s.width*2,-s.height];

green = new Shape.Rectangle(p,s);
  p += [s.width,0];

purple = new Shape.Rectangle(p,s);
  p += [s.width,0];

blue = new Shape.Rectangle(p,s);
  


  


});