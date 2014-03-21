$(document).ready(function(){

var audio = new webkitAudioContext();
var osc = audio.createOscillator();
var gain = audio.createGainNode();
var hum = false;
gain.connect(audio.destination);
osc.type = 0;
osc.connect(gain);



$('body').click(function(){

		if(!hum)
		{
		hum = true;
		osc.start();
		}
		else
		{hum = false;gain.gain.value = 0;}

});
var context = $('#myCanvas')[0].getContext("2d");
console.dir(context);
var size = 30;
var count = -4;
var rect = {
	x:count*100,
	y:0,
	h:size,
	w:size
}
d(rect);
setInterval(function(){
	
	drawSquare(context);
	if(hum)
	{gain.gain.value = num(1000)*.0005;
	osc.frequency.value = range+num(100);
	}
},20);
var i = 0;

var countDirection = 1;
var flip = false;
var color = prettyRaCo();
var hold = false;
var range = 400;
function drawSquare(context){
i++;
	if(flip)
	context.fillStyle = color;
	else
	context.fillStyle = prettyRaCo();
	context.fillRect(rect.x,rect.y,rect.w,rect.h);
	if(flip)
		context.fillStyle = prettyRaCo();
	else
		context.fillStyle = "white";
		context.fillRect(rect.x+1,rect.y+1,rect.w-2,rect.h-2);
	
	rect.x += 10;
	rect.y+=10;
	
	//l(i);
	//per tube
	if(i>140)
	{	
		count+= countDirection;
		 
		rect.x = count*100;
		rect.y=0;
		i=0;
		color = prettyRaCo();
		flip = !flip;
		range = num(1000);
	}
	if(count ==14)
	{
	count = 13;
		countDirection *= -1;
//		flip = !flip;
		
	}
		if(count== -7)
	{
		count = -7;
		countDirection *= -1;
				flip = !flip;
		
	}
}

});





function d(obj){
	
	console.dir(obj);
	
}

function l(obj){
console.log(obj);

}