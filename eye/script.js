//this is my first site on github ;))

var window = project.view.bounds;
var center = new Point(400,200);
//create shapes based on screen size
var outerShape = new Path.Circle(
	new Point(0,window.height/4)+center,
	new Size(window.width*.65,(window.height*.65))
	);
	
var middleShape = new Path.Circle(
	new Point(window.width/4,window.height/4)+center,
	new Size(window.width*.40,(window.height*.40))
	);

var innerShape = new Path.Circle(
	new Point(window.width/2.8,window.height/3.5)+center,
	new Size(window.width*.18,window.height*.2)
	);

var frameSpeed = 2;
//gets incremented every frame up to 255, then reset
var step = 0;
var stringOuter ="";
var stringMiddle ="";
var stringInner ="";

//initialize the outer shape's colors. each shape is based on r,g,b of outer shape
var r=255;
var g = 0;
var b = 0;

//Can be one of six phases(3 choose 2 combinations of r,g, and b)
var phase = 0;

//adjust inner and outer circles
function onMouseMove(event){
	innerShape.position.x+= event.delta.x/1.5;
	outerShape.position.x-= event.delta.x;
	//console.dir(shape.bounds);
	center+= event.delta/10;
}

//shift the current colors about the eye
function onMouseDown(event){
	temp = r;
	r=b;
	b=g;
	g=temp;
	phase+=2
}

//calling next color actually updates the color strings
function onFrame(event){
	if(event.count%frameSpeed==0)
		{
		nextColor();
		outerShape.fillColor = stringOuter;
		middleShape.fillColor = stringMiddle;
		innerShape.fillColor = stringInner;
	}
}

//gets the next color, updates the color strings for each shape
function nextColor(){
	switch(phase%6){
		case 0:
		g++;
		break;
		case 1:
		r--;
		break;
		case 2:
		b++;
		break;
		case 3:
		g--;
		break;
		case 4:
		r++;
		break;
		case 5:
		b--;
	}
	//colors are flipped
	stringOuter = "rgb("+r+","+g+","+b+")";
	stringMiddle = "rgb("+b+","+r+","+g+")";
	stringInner = "rgb("+g+","+b+","+r+")";
	step++;
	//keeps track of which phase we're in
	if(step == 255)
	{
		phase++;
		step = 0;	
	}
}
