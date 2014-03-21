$(document).ready(function(){
	

	
var cont = document.getElementById('canv');
var cont2 = document.getElementById('canv2');
var context = cont.getContext('2d');
var context2 = cont2.getContext('2d');

			context.beginPath();
			context.arc(50, 15, 10, 0, 2 * Math.PI, false);
			context.fillStyle = prettyRaCo();
			context.strokeStyle = prettyRaCo();
			context.stroke();
			context.fill();

function clearRect(){
		context.clearRect(0,0,1900,1600);
	
}

var x = 5;
var y = 20;
var freq = 500;
var dotAmt = 900;
var sensitivity = 0;
var count = 0;
var ballSize = 0;
var frameTime = 2000;
var frameCount = 0;
var barCount = 0;
var barString = "";


//lets get it goin
var id = setInterval(function(){
paint(dotAmt);
},freq);

console.dir(id);
console.log("hi");

context.fillStyle = "red";

//PAINT FUNCTION BABY!!!!
function paint(dotAmount){
	console.log("paaaint");
	
	if(count >= sensitivity)
	{clearRect();
		count = 0;
		}
		
	context.save();
	var lingrad = context.createLinearGradient(0,0,900,600);
	
		//for(var i =0;i<100;i++)
		lingrad.addColorStop(.5, prettyRaCo());
		lingrad.addColorStop(1, prettyRaCo());
	    lingrad.addColorStop(0.2, '#fff');
	    lingrad.addColorStop(0.5, prettyRaCo());
	    lingrad.addColorStop(1, '#fff');
		
		context2.fillStyle = lingrad;
	    
		context2.fillRect(0,0,900,600);

		for(var i =0;i<dotAmount;i++)
		{
			var num = Math.floor(Math.random()*900);
			var num2 = Math.floor(Math.random()*600);
			//if(num%5 == 0)
			var rotate = Math.floor(Math.random()*180);
			context.rotate(Math.PI *(180/rotate));
			context.fillStyle = prettyRaCo();

			context.fillRect(num-(x/2),num2-(y/2),x,y);
			
			
			if(i%(dotAmount/20)==0) //there shall be 20 CRICLES on the screen
			{
			context.beginPath();
			context.arc(num, num2, ballSize, 0, 2 * Math.PI, false);
			context.fillStyle = prettyRaCo();
			context.strokeStyle = prettyRaCo();
			context.lineWidth = ballSize/3;
			
			//if(dotAmt >100000)
			//$('#thing').text("<p id='thing'>that'll take a sec.</p>");
			context.stroke();
			context.fill();
			
	
			}
			//$('#alert').text("");

			/*if(i%(dotAmount/32)==0)  //DRAW TRIANGLE THING SORTA SUX
			{
			    context.beginPath();
				context.moveTo(400+num*1.3,400+num2*1.3);
				context.lineTo(num/2,num2/2);
				context.lineTo(num2/2,num/2);
				context.fill();
			}*/
			//reset rotation for next paint jorb
			context.rotate(-Math.PI *(180/rotate));

		}
		context.restore();
		count++;
		frameCount++;
		
		$('#hi').css('color',prettyRaCo());

	}
	
	//FIREFOX???
	
	
$('img').mouseenter(function(){
move('img').rotate(Math.floor(Math.random()*360)).end();
console.log("hi");
	$(this).animate({
    top: "-=10"
  },2000);
	
});

$( "#canv2" ).click(function() {
  $( "img" ).animate({
    left: "+=50"
  }, 5000, function() {
    // Animation complete.
  });
});



document.getElementById('width').addEventListener('change', function() {
    x = this.value;
    $('#lab').text(this.value+" pixels fat"); 
});



document.getElementById('height').addEventListener('change', function() {
    y = this.value;
        $('#lab2').text(this.value+ " pixels tall"); 
});



document.getElementById('freq').addEventListener('change', function() {
	$(this).css('color', 'black');
    freq = this.value;
    	if (freq == 0)
    	{clearInterval(id);
    	paint(dotAmt);
    		$('#lab3').css('color','red');
    	    $('#lab3').text("pause");
    	}
    	else
    	{
    	  $('#lab3').css('color','black');
    $('#lab3').text("every "+ (1400-freq) + " milliseconds");
    clearInterval(id);
	id = setInterval(function(){
		paint(dotAmt);
		},1400-freq);
		
		}
});

document.getElementById('dotAmt').addEventListener('change', function() {
    dotAmt = this.value;
    
    $('#lab4').text("make "+ (dotAmt) + " things at a time please");
    clearInterval(id);
	id = setInterval(function(){
		paint(dotAmt);
		},1400-freq);
});

document.getElementById('sens').addEventListener('change', function() {
    sensitivity = this.value;
    $('#lab5').text("remember "+ (this.value) + " frames");
    clearInterval(id);
	id = setInterval(function(){
		paint(dotAmt);
		},1400-freq);
});
setInterval(function(){

if( barCount < 20)
{barCount++;
barString += ".";
$('title').text(barString);	
$('title').attr('color','blue');	
}
else
{
barCount = 0;
barString = "";
}
	
},5000);


document.getElementById('ballSize').addEventListener('change', function() {
    ballSize = this.value;
    $('#lab6').text("circle radius = "+this.value+" pixels"); 
});

//color the framw
$('#canv').css('border-color',prettyRaCo());



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

function prettyRaCo2(){
	
	var num = Math.floor(Math.random()*256);
	var str = prettyRaCo();

	//var str = str.split
	
	
	
	
}



	
});