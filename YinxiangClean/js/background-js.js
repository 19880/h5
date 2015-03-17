chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.getSelected(null, function(tab) {
		  chrome.tabs.sendRequest(tab.id, {"hope":"EClean"}, function(response) {});
	});
});