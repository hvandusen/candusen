
//var url = 'http://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png';
//var raster = new Raster('dinner');
//raster.position = project.view.center;

/*raster.onLoad= function(){
	for(var i =0;i<raster.width;i=i+5){
	for(var j =0;j<raster.height;j=j+5){
	
	pix = raster.getPixel(i,j)
	console.dir(pix);
	x = Shape.Rectangle(new Point(i*3,j*3), new Size(9,9));
	x.fillColor = pix;
	
	}
	}
};*/
var p = new Path();
var length = 60;
function onMouseMove(event) {
      //var path = new Path.Circle({
      //  center: event.point,
      //  radius: num(55)-35,
      //  fillColor: prettyRaCo(),
      //  visible:true
      //});
      p.lineTo(event.point);
      //p.insert(0, new Point(event.point));
      p.strokeColor = prettyRaCo();
      p.strokeWidth = num(50);
      if(p._segments.length>length)
{      p.removeSegment(0); console.log('cool');}
};

function onMouseDrag(event) {

}

function onMouseDown(event) {
	if(p.closed)
	p.closed = false;
	else
	p.closed = true;
	console.dir(p);
	p.simplify();
}


$(document).ready(function(){

var p = new Point(0,0);
var s = new Size(view.size.width/3,view.size.height/2);

});