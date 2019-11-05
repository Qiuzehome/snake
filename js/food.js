var Newfood = null;
var num=-1;
function getfood(x,y) {
	var Newfood = document.createElement("div");
	box.appendChild(Newfood);
//	var x = parseInt(Math.random() * 6) * 100;
//	var y = parseInt(Math.random() * 6) * 100;
	Newfood.id = "food";
	food.style.left = x + "px";
	food.style.top = y + "px";
	food.style.backgroundColor = "red";
	num++
		document.getElementById("num").text=num;
		
}