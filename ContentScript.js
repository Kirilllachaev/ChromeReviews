



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{

  // начинаем спам
  if (request.action === 'startSpam')
  {
    var CurrentToken = request.token;


//спам

//взять все комменты
// Взять все кнопки добавить ответ
// взять все кнопки "Ответы"

setTimeout(function() {
  window.scrollTo(0, 500);
}, 2000);

setTimeout(function() {
  window.scrollTo(0, 500);
}, 4000);

setTimeout(function()
{

  setTimeout(function() {

      var CommentsArray = Array.from(document.querySelectorAll('ytd-comment-thread-renderer.style-scope.ytd-item-section-renderer'));

  }, 1000);



    for(var i = 0; i < CommentsArray.length; i++)
    {

      setTimeout(function() {

        var otvetitPar = CommentsArray[i].querySelector('#reply-button-end');
            alert(otvetitPar);
        var otvetit = otvetitPar.querySelector('button');
        otvetit.click();
        alert(otvetit);

      }, 2000 * (i+1));

    }



}, 6000);




    chrome.runtime.sendMessage({ action: 'sendButtons', token: request.token });

  }






});
