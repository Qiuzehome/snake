//var snake = document.getElementById('snake');
var newbody_location;
var snake;
var snakeobj = [{
	snakex: 0,
	snakey: 0
}]
var time;
document.addEventListener('keypress', function(e) {

	switch(e.key) {
		case 'a':
			clearInterval(time);
			movex(-1);
			break;
		case 'd':
			clearInterval(time);
			movex(1);
			break;
		case 'w':
			clearInterval(time);
			movey(-1);
			break;
		case 's':
			clearInterval(time);
			movey(1);
			break;
	}

})

function movex(speed) {

	time = setInterval(
		function() {
			if(snakeobj[0].snakex >= 0 && snakeobj[0].snakex <= 20) {
				snakeobj[0].snakex += speed;
				
				snake.style.left = snakeobj[0].snakex * 25 + 'px';
				bodymove(snakeobj[0].snakex-speed,snakeobj[0].snakey);
				console.log(snakeobj[0].snakex)
				if(snakeobj[0].snakex < 0 || snakeobj[0].snakex >= 19) {
					clearInterval(time);
					alert('GameOver');
					location.reload();
				}
			}
			eat();
		}, 300

	)

}

function movey(speed) {

	time = setInterval(
		function() {
			if(snakeobj[0].snakey >= 0 && snakeobj[0].snakey <= 20) {
				snakeobj[0].snakey += speed;
				snake.style.top = snakeobj[0].snakey * 25 + 'px';
				bodymove(snakeobj[0].snakex,snakeobj[0].snakey-speed);
				if(snakeobj[0].snakey < 0 || snakeobj[0].snakey >= 19) {
					clearInterval(time);
					alert('GameOver');
					location.reload();
				}
			}
			eat();
		}, 300

	)

}

function eat() {
	if(snakeobj[0].snakex == foodx && snakeobj[0].snakey == foody) {
		box.removeChild(food);
		newfood();

	}
}

function bodymove(x,y) {

	for(var i = 0; i < snakeobj.length - 1; i++) {
		newbody_location = {
			snakex: x,
			snakey: y
		}
		snakeobj.push(newbody_location);
		snakeobj[i + 1] = snakeobj[i]
		console.log('这是' + snakeobj);
	}
}