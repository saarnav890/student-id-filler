//When the extension is installed, create the onboarding.html page
chrome.runtime.onInstalled.addListener((reason) => {
  chrome.tabs.create({
    url: "onboarding.html",
  });
});
