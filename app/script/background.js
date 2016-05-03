var toggle = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "app/image/on.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"app/script/jquery.js"});
  }else{
    chrome.browserAction.setIcon({path: "app/image/off.png", tabId:tab.id});
    chrome.tabs.executeScript(null, {matchAboutBlank: false});
  }
})
