var clicked = false;
var r,g,b;
r= 255; g = 0; b= 0;
var phase = 1;
var count = 0;0
var color = "";
var size = 60;
var dragCount=0;
tool.minDistance =0;
function onMouseMove(event) {
//ropeShape(event.point);

	      //tri(event);
}

function nextColor(phase){
   switch(phase) {
      case 1:
        {b++;}
        break;
    case 2:
        {r--;}
        break;
    case 3:
        {g++;}
        break;
    case 4:
        {b--;}
        break;
    case 5:
        {r++;}
        break;
    case 6:
        {g--;}    
   }
   return "rgb("+r+","+g+","+b+")";
   
   }


tool.fixedDistance = 20;

$('body').click(function(){
	clicked = !clicked;
	project.activeLayer.removeChildren()
	key = new Path();
});

//$('body').css('background-color',prettyRaCo());
//$('canvas').css('background-color',prettyRaCo());

function onMouseDrag(event) {
	clicked = !clicked;
dragCount+=5;
size = dragCount%200 +20; 
ropeShape(event.point);
line = new Path.Line(new Point(size,0) - new Point(0,0));
}

var line = new Path.Line(new Point(size,0) - new Point(0,0));
console.dir(line);
var pathTest =  new Point(100,0) - new Point(0,0);
pathTest.strokeColor = 'black';

function onMouseMove(event) {
ropeShape(event.point);

}

var ms = new Point(500,500);
var pt  = ms + (40,40);
var rot = num(180);
var key = new Path();
key.strokeCap='round';

	var rotation = 36;
function ropeShape(mouse){
	if(clicked)
	line = new Path.Line(new Point(size,0) - new Point(0,0));
	var finalShape = new Path();
	var sides = num(2)+3;
	var lastRot = 0;
	for(var i = 0;i<4;i++)
	{	var ms = new Point(mouse);	
		var pt  = ms + (line.segments[0].point-line.segments[1].point);
		line.rotate(rot);
		if(clicked == true)
		rot+= .25;
		finalShape.add(pt);	
	}
	finalShape.closed = true;
	key.segments = finalShape.segments;
	key.position = [size,size];
	key.strokeColor = 'black';
	key.closed = true;
	if(clicked == true)
	rot-=2;	
	finalShape.strokeWidth = 1;
	finalShape.fillColor = prettyRaCo();
}



$(document).ready(function(){


});