//Redirect from Valve's version of gamehighlightplayer.js to our stub file. We need this to prevent errors.
browser.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {cancel: details.url.indexOf("gamehighlightplayer.js") != -1};
    },
    {urls: ["*://*.steamstatic.com/*"]},
    ["blocking"]);


browser.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
		 chrome.tabs.create({
			url: 'welcome/page.html'
		});
  
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

