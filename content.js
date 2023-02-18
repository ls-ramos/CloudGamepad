chrome.storage.sync.get([
	"axes",
	"buttons",
	"disableCloudGamepad"
], function(settings) {
	
	if(settings.disableCloudGamepad) return;

	const injScript = document.createElement("script");
	injScript.src = chrome.runtime.getURL('cloudgamepad.js');
	injScript.onload = function () {
		console.log("Script loaded! sending event now")
		window.dispatchEvent(new CustomEvent("startConfig", {detail: settings}));
	}
	
	(document.body || document.head || document.documentElement).appendChild(injScript);
});