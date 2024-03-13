console.log("Test Yandex panorama v21.1");
var x0=55.790927;
var y0=49.114453;
var x1=55.797391;
var y1=49.105993;
var player1;
ymaps.ready(init);
function init(){
	console.log("init:called");
	ymaps.panorama.locate([x0,y0]).done(
	function(panoramas){
		console.log("panoramas:"+panoramas);
		console.log("panoramas[0]"+panoramas[0]);
		var player= new ymaps.panorama.Player("player",panoramas[0],{direction:[180,15]});
	player1=player;
},
	function() {}
	);
	}
	function onClickNext(){
		console.log("Clicked:Next");
		player1.moveTo([x1,y1]);
	}
