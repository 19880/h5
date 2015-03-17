(function(){
	var Webp2Png = function(){
		var $imgs = $('img[data-src]');
		//console.log($imgs);
		for( var i=0; i < $imgs.length; i++ ){
			// console.log($imgs[i]);
			var $img = $($imgs[i]);
			var _datasrc = $img.attr('data-src');
			// console.log(_datasrc);
			$img.attr('src', _datasrc);
		}
	}
	

	chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
		switch(request.hope){
			case "Webp2Png":
				Webp2Png();
				break;
		}
		sendResponse({}); // Send nothing..
	});
})();