chrome.runtime.onInstalled.addListener((()=>{console.log("Service Worker Installed")})),chrome.webNavigation.onCompleted.addListener((e=>{chrome.scripting.executeScript({target:{tabId:e.tabId},files:["content.js"]})}),{url:[{urlMatches:"https://github.com/*"}]});
//# sourceMappingURL=service_worker.js.map