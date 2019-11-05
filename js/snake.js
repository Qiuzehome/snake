var snake = document.getElementById("snake");
var time = null;
var time1 = null;
var movetype = null;
var snakebody=[{x:0,y:0},{x:1,y:0}];


document.addEventListener('keypress', function(e) {
	switch(e.key) {
		case 'd':

			clearInterval(time);
			clearInterval(time1);

			move1(8);

			break;

		case 'a':

			clearInterval(time);
			clearInterval(time1);
			move1(-8);

			break;

		case 's':

			clearInterval(time1);
			clearInterval(time);
			move2(8);

			break;

		case 'w':

			clearInterval(time1);
			clearInterval(time);
			move2(-8);

			break;
	}
})

function move1(speed1) {
	clearInterval(time);
	movetype = 1;
	time = setInterval(function() {

		snake.style.left = speed1 + snake.offsetLeft + "px";
		var objx = snake.offsetLeft;
		var objy = snake.offsetTop;

		newfood();
		if(snake.offsetLeft >= 575 || snake.offsetLeft <= 0) {
			clearInterval(time);
		}
	}, 10)
}

function move2(speed2) {
	clearInterval(time1);
	movetype = 2;
	time1 = setInterval(function() {

		snake.style.top = speed2 + snake.offsetTop + "px";
		var objx = snake.offsetLeft;
		var objy = snake.offsetTop;

		newfood();
		if(snake.offsetTop >= 575 || snake.offsetTop <= 0) {
			clearInterval(time1);
		}
	}, 10)
}

function snake_body(){
//	var snake=document.getElementById('snake')
//	console.log(snakebody.length);
	for (var i=0;i<snakebody.length;i++) {
		console.log(i)
		var newbody=document.createElement('div');
		box.appendChild(newbody);
		newbody.id='snake';
		snake.style.top=snakebody[i].y*25+'px';
		snake.style.left=snakebody[i].x+25+'px';
	}
}
//function snake1() {
//	this.body = [{
//			x: 0,
//			y: 0
//		},
//		{
//			x: 1,
//			y: 0
//		},
//		{
//			x: 2,
//			y: 0
//		}
//	];

//	function snakebody1() {
//		for(var i=0;i<this.body.length;i++){
//		var snakebody = document.createElement("div");
//		snakebody.id = "snake";
//		snakebody.style.position = "absolute";
//		}
//		//		console.log(this.body[0].x);
//		for(var i = 0; i < this.body.length; i++) {
//
//		}
//	}
//}