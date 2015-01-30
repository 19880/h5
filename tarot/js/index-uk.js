jQuery(function($){
	
	$(".pages").addClass("in");
	$(".tips").addClass("intip");
	$(".pages p").click(function(){
		$(".loading").addClass("out");
		setTimeout(jumpToDecode, 3000);
	});
	
	jumpToDecode = function(){
		$(".loading").removeClass("out");
		var urls = [
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203181862&idx=1&sn=89198435306d611ffb8fa2185062cb77#rd", 
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183297&idx=1&sn=233b22b40028eb4c62b0bc2e68350d87#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183358&idx=1&sn=2a2525e4ace97b17369a71a30f404404#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183416&idx=1&sn=4e8937b8e3b0f7bda733fc6cfa05ae1b#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183454&idx=1&sn=5af59abc2a86d1c1ea616856ffe1f9df#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183454&idx=1&sn=5af59abc2a86d1c1ea616856ffe1f9df#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183547&idx=1&sn=447a7edad8043b1b288a513bb2898af4#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183568&idx=1&sn=a9fc7ccf1fec38c29c589689e057a242#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183593&idx=1&sn=b7e2d1414ee0dae048ffa4f990f9a03d#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183633&idx=1&sn=6791e7b5bf281619a8645daf63da89ea#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183674&idx=1&sn=164582fd77281785f3775fb2f99594a4#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183728&idx=1&sn=a22ae3e8398df78d48746db3d7211489#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203182277&idx=1&sn=7a60a4cc9851ff67ad7236a6762ead67#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203182368&idx=1&sn=81b444efa5bda46b95ba4ac3bba8b943#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203182563&idx=1&sn=ab00e67cbe8e5522d07004114a679a86#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203182642&idx=1&sn=4d8dced68302621168b534ea88131b26#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203182792&idx=1&sn=8e79db00a0a7523ff5c8992dd5e86254#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203182867&idx=1&sn=1ebf045e2302da34734bf9380f7d7e63#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203182938&idx=1&sn=24ccb6c21eb2f60b0ba75e01094b939c#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203182975&idx=1&sn=9aaf4c0fee18cb234206fae720d82a90#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183004&idx=1&sn=c185a391fae24c839cd99275d14a709d#rd",
		"http://mp.weixin.qq.com/s?__biz=MjM5MTgzMzA4MA==&mid=203183056&idx=1&sn=5dab5c4a562b9d1da724972bb837f331#rd"
		];
		var jumpTo = urls[parseInt(Math.random() * urls.length)];
		window.location = jumpTo;
	}
});

