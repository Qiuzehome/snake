var foodx;
var foody;
var food;
var box=document.getElementById('box');
onload = function() {
	newfood();
}
function newfood(){
	/*食物*/
	foodx = parseInt(Math.random() * 20);
	foody = parseInt(Math.random() * 20);
	
	food= document.createElement('div');
	box.appendChild(food);
	food.id='food';
	food.style.left=foodx*25+'px';
	food.style.top=foody*25+'px';
	/*身体*/
	for(var i = 0; i < snakeobj.length; i++) {
	
		snake= document.createElement('div');
		box.appendChild(snake);
		snake.id = 'snake';
		snake.style.left=snakeobj[i].snakex*25 +'px';
		snake.style.top=snakeobj[i].snakey*25 +'px';

	}
}
