var x1 = parseInt(Math.random() * 6) * 100;
var y1 = parseInt(Math.random() * 6) * 100;
var box = document.getElementById("box");

onload = function() {
	snake_body();
	getfood(x1, y1);

}

function newfood() {
	var top = snake.offsetTop - food.offsetTop;
	var left = snake.offsetLeft - food.offsetLeft;

	if((top < "25" && top > "-25") && ("-25" < left && left < "25")) {

		box.removeChild(food);
		var x = parseInt(Math.random() * 6) * 100;
		var y = parseInt(Math.random() * 6) * 100;
		getfood(x, y);
		
//		snakebody(objx,objy);
		
	}
		
}
function grow(){
	var newbody=document.createElement('div');
	box.appendChild(newbody);
	box.id='newbody';
	newbody.style.left=x+'px';
	newbody.style.top=y+'px';
	
}
