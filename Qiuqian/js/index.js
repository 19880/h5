new Image().src="decode.png";
new Image().src="234.png";
var start, showDecode, jumpToDecode, lastTime, lastAcc, isStarted = false;

start = function() {
	isStarted = true;
	$('.decode').hide();
	$('.result').show();
	setTimeout(showDecode, 3000);
}

showDecode = function(){
	$('.result').hide();
	$('.decode').show();
	setTimeout(jumpToDecode, 3000);
}

jumpToDecode = function(){
    /*
	var urls = [
	];
	var jumpTo = urls[parseInt(Math.random() * urls.length)];
	*/
	
	window.location = 'qian/index.htm';
}

$('.do').click(start);

//鎽囦竴鎽�
$(window).on('deviceorientation', function(e) {
	if (isStarted) {
		return true;
	}
	if (!lastAcc) {
		lastAcc = e;
		return true;
	}
	var speed = e.alpha + e.beta + e.gamma - lastAcc.alpha - lastAcc.beta - lastAcc.gamma;
	if (Math.abs(speed) > 50) {
		start();
	}
	lastAcc = e;
});






