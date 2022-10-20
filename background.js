chrome.runtime.onInstalled.addListener((reason) => {
    
        console.log(reason)
        console.log("INSTALLED FOR FIRST TIME")
      chrome.tabs.create({
        url: 'onboarding.html'
      });
    
  })
