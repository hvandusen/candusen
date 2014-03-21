$(document).ready(function(){

var context = new webkitAudioContext();
var source = context.createBufferSource();             
var oscillator;
var oscillator2;
var gainNode = context.createGainNode();
gainNode.gain.value = 0.05;
var isPlaying = 0;
var path = 0;
var pathArray = [];
var count = 0;
var context2;

//-------------------------






//--------------------------

var tuna = new Tuna(context);
var source = context.createBufferSource();
var clips = {};

//CONVOLVER "PLUGIN"
var chorus = new tuna.Convolver({
            highCut: 18050,                         //20 to 22050
            lowCut: 650,                             //20 to 22050
            dryLevel: 2,                            //0 to 1+
            wetLevel: .5 ,                            //0 to 1+
            level: 0.9,                               //0 to 1+, adjusts total output of both wet and dry
            //impulse: "02 Harvest.mp3",    //the path to your impulse response
            impulse: "02 Me And You 1.mp3",    //the path to your impulse response
            bypass: 0
        });

//OVERDRIVE PLUGIN  
var overdrive = new tuna.Overdrive({
                    outputGain: 0.9,         //0 to 1+
                    drive: 0.7,              //0 to 1
                    curveAmount: .5,          //0 to 1
                    algorithmIndex: 2,       //0 to 5, selects one of our drive algorithms
                    bypass: 0
                });


function osc(){
	oscillator = context.createOscillator();
	//var wt = context.createWaveTable(real, imag);
	//oscillator.setWaveTable(wt);
	oscillator2  = context.createOscillator();

	oscillator.start(0);
	oscillator2.start(0);
	

 	oscillator.connect(overdrive.input);
	oscillator2.connect(overdrive.input);
	//overdrive.connect(context.destination);
	overdrive.connect(gainNode);
	
	gainNode.connect(context.destination);
	
	
}
//START THE SYNTH STUFF
	$('#button3').click(function(){
	
	if(isPlaying == 0)
	{
	osc();
	init();
console.log("synth started");
	}
	else
	{
	$('#prompt').css("visibility","visible");
		$('#prompt').text("you have to turn it off first");
	}
	
	$('#prompt2').css("visibility","visible");
});


function oscEnd(osc1,osc2){
	
	isPlaying=0;
	osc1.disconnect();
	osc1 = context.createOscillator();
	osc2.disconnect(0);
	osc2 = context.createOscillator();
	//osc1.disconnect();
	//osc2.disconnect();

	
	
	
}

//STOP THE SYNTH STUFF
	$('#button4').click(function(){
	oscEnd(oscillator,oscillator2);

	$('#prompt').text("very cool");
	$('#prompt2').css("visibility","hidden");
});


// VOLUME HANDLER
document.getElementById('volume').addEventListener('change', function() {
    gainNode.gain.value = this.value;
});

document.getElementById('distort').addEventListener('change', function() {
	
    overdrive.algorithmIndex = this.value;
    console.log(overdrive.algorithmIndex);
});

document.getElementById('distortion').addEventListener('change', function() {
	
    overdrive.curveAmount = this.value;
    console.log(curveAmount);
});

$("button").prop('disabled', false);


//GET LOCAL AUDIO FILES, GET BUFFER OBJECT
	var assets = new AbbeyLoad( [{
	             'neil': '02 Harvest.mp3',
	             'hi': '02 Me And You 1.mp3'   }], 	
	             function (buffers) {
					 clips = buffers;
					 console.dir(buffers);
	         });   

//PLAY A BUFFERER
function play(clip, outNode){
	source.buffer = clip;
	source.loop = false;
 	source.connect(outNode.input);
 	outNode.connect(gainNode);
	gainNode.connect(context.destination);
	source.start(0);
	
}


$('#button').click(function(){
           play(clips.neil,overdrive);
	
});

$('#button2').click(function(){
	source.stop(0);
});

$('#myCanvas').click(function(){
	//getPathArray();
	path = 1;
	
});

$('#visual').click(function(){
if(isPlaying == 1)
	{$('#prompt').css("visibility","visible");
		$('#prompt').text("you have to turn it off first");}

playArray(pathArray,context2);

	
});


function playArray(arr,cont){
		console.dir(arr);
		cont.fillStyle = "yellow";
		if(isPlaying == 0)
		{
		oscEnd(oscillator,oscillator2);
		osc();
			var index = 1;
			var play = function playNotes(){
			oscillator.frequency.value = arr[index-1]*.4+250;
			oscillator2.frequency.value = arr[index]+250;

			context2.fillRect(arr[index],arr[index-1],10,10);
			//context2.fillRect(0,0,100,100);
			index = index+2;

			///AT THE END
			if(index == arr.length)
				{
				oscEnd(oscillator,oscillator2);	
				context2.clearRect(0,0,650,650);
				pathArray = [];
				//drawPath(context2,arr);
				
				
				}
			}
			setInterval(play,20);
			//if(index == 5000)
			//alert();
		}	
	}

function init(){
isPlaying = 1;

		function makeTone(canvas,message) {
			var context = canvas.getContext('2d');
			context.clearRect(0,0,canvas.width,canvas.height);
			context.font = '15pt Calibri';
			context.fillStyle = 'black';
			context.font = 'italic 25pt Calibri';
			var click = "click on meeeeee";
			context.fillText(message,20,40);
			context.fillText(click,20,600);
		}
		
		function getMousePos(canvas,evt) {
			var rect = canvas.getBoundingClientRect(); 
			return {
				x: evt.clientX - rect.left,
				y: evt.clientY - rect.top
			};
		}
				
		var canvas = document.getElementById('myCanvas');
		var canvas2 = document.getElementById('visual');
		var context = canvas.getContext('2d');
		context2 = canvas2.getContext('2d');		

		canvas.addEventListener('mousemove', function(evt) {
		var mousePos = getMousePos(canvas, evt);
		oscillator.frequency.value = mousePos.x*.4+250;
		oscillator2.frequency.value = mousePos.y+250;
		
		context.fillStyle = "blue";
		var mess = "Click me to remember your sylings!!";
		context.fillText(mess,250,450); 

		function drawPath(ctx, pathArr)
		{	
			ctx.font = 'italic 25pt Calibri';
			ctx.fillStyle = "black";
			ctx.fillText("click me to remember what used to be!",10,600);
			ctx.beginPath();
			ctx.strokeStyle = prettyRaCo();
			num = Math.floor(Math.random()*40);
			ctx.lineWidth = num;
			ctx.moveTo(pathArr[i-1],pathArr[i]);
			for (var i = 2; i<pathArr.length;i=i+2)
				ctx.lineTo(pathArr[i-1],pathArr[i]);
			
			ctx.stroke();
		}
		
	//	throttle(function(evt){
		if(path>0 && count<=3000)
		{pathArray[count-1] = mousePos.x;
		pathArray[count]  = mousePos.y;	
		count = count+ 2;
		//console.log(count);
		}
		
		var s = "";	
		for(var i = 0; i<pathArray.length;i++)
			s+= (pathArray[i]+" , ");		
		
		//var message = mousePos.xMath.round(mousePos.y);	OBJECT WITH AN X AND A Y!
		var message = "osc 1: "+Math.round(oscillator.frequency.value)+" hz"+ 
		"  osc 2: "+Math.round(oscillator2.frequency.value)+" hz";
			makeTone(canvas, message);
			
		var sprinkle = Math.floor(Math.random() * 10);
		
		context.fillStyle= prettyRaCo();

					for(var i=0;i<sprinkle;i++){
					
			var posX = Math.floor(Math.random() * 200);		
			var posY = Math.floor(Math.random() * 200);		
			var size = Math.floor(Math.random() * 70);
			context.fillRect(mousePos.x-100+posX,mousePos.y-100+posY,size,size);
			
			
			}
			
			drawPath(context2,pathArray);
		}, false);



			function prettyRaCo()
	{
		var key =  Math.floor(Math.random()*6);
		var text = "rgb(";
		var num =  Math.floor(Math.random()*256);
		
		if(key ==0)
		text= text+ "0,255,"+num+")";
		
		 if(key ==1)
		text= text+ "0,"+num+",255)";

		 if(key ==2)	
		text= text+ "255, 0,"+num+")";

		 if(key ==3)
		text= text+ "255,"+num+",0)";

		 if(key ==4)		
		text= text+ num+",255,0)";

		 if(key ==5)		
		text= text+ num+",0,255)";
		
		return text;
	}	


}


});