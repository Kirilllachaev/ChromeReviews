



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{

  // начинаем спам
  if (request.action === 'startSpam')
  {
    var CurrentToken = request.token;
    alert(CurrentToken.replies);

//спам


    chrome.runtime.sendMessage({ action: 'sendButtons', token: request.token });

  }






});
