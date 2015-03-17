(function(){
	var _conf = {
		'www.babyou.com':{
			container:'.ArticleDetail'
		},
		'www.searchome.net':{
			container:'.Context',
			saveimgs: true
		},
		'www.psycofe.com':{
			dels:'#page_route,#articleHeader,h3,dl,.pageSeparator,#commentBox'
		},
		'exhouse.pixnet.net':{
			saveimgs: true
		},
		'www.fundesign.tv':{
			saveimgs: true	
		}
	}

	var EClean = function(){
		var _c = _conf[document.location.hostname];
		var $p = $('#evernote_clearly__reformat').contents();
		var $pc = $p.find('.page_content');

		function _Dels(elem){
			$p.find(elem).remove();
		}

		_Dels('#articleHeader');
		if(_c){
			if(_c.container){
				var $c = $(_c.container);
				$pc.html($c.html());
			}
			
			if(!_c.saveimgs)
				_Dels('img');

			if(_c.dels)
				_Dels(_c.dels);
		} else {
			_Dels('img');
		}
		_Dels('.pageSeparator');
	}
	

	chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
		switch(request.hope){
			case "EClean":
				EClean();
				break;
		}
		sendResponse({}); // Send nothing..
	});
})();