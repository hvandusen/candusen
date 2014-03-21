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

 function prettyRaCo2(whiteness)
        {
            var key =  Math.floor(Math.random()*6);
            var text = "rgb(";
            var num =  Math.floor(Math.random()*256);
            whiteness = whiteness%255;
            if(key ==0)
            text= text+ "0,255,"+whiteness+")";
             if(key ==1)
            text= text+ "0,"+whiteness+",255)";
             if(key ==2)    
            text= text+ "255, 0,"+whiteness+")";
             if(key ==3)
            text= text+ "255,"+whiteness+",0)";
             if(key ==4)        
            text= text+ whiteness+",255,0)";
             if(key ==5)        
            text= text+ whiteness+",0,255)";
            return text;
        }   
 
        
function num(range){
  return Math.floor(Math.random()*range);
}
function numH(){
  return Math.floor(Math.random()*view.size.height);
}
function numW(){
  return Math.floor(Math.random()*view.size.width);
}