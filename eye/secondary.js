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
        
  function prettyDecoder(rgbString){
   var colors = rgbString.split(",");


   r = colors[0].substr(4);
   g = colors[1];
   b = colors[2].split(")")[0];
     
   
	if(r == 0 && b == 255)
		return "blue"; //
			
	
	if(r == 0 && g == 255)
		return "green";//greenList.push(bit); //
			

	if(g == 0 && r == 255)
		return "orange";
	if(g == 0 && b == 255)	
		return "purple";
	if(b == 0 && r == 255)	
		return "red";
	if(b == 0 && g == 255)	
	return "yellow";	
  
	  
  }   
       console.log(prettyDecoder('rgb(0,55,255)')); 
        
        
function num(range){
  return Math.floor(Math.random()*range);
}
function numH(){
  return Math.floor(Math.random()*view.size.height);
}
function numW(){
  return Math.floor(Math.random()*view.size.width);
}