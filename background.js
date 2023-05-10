chrome.browserAction.onClicked.addListener(function() {
  chrome.windows.create({
    type: "normal",
    url: "popup.html",
    width: 1600,
    height: 720
  });
});
