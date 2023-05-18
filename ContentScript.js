



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



  if(CurrentToken.name == "Kirilllachaev")
  {

    var avatar = document.querySelector('#avatar-btn');
    avatar.click();

    setTimeout(function() {
      var name = document.querySelector('#account-name').textContent;
      var nom = document.querySelector('#channel-handle').textContent;


      CurrentToken.name = name;
      CurrentToken.nom = nom;

      alert(CurrentToken.name);

      chrome.runtime.sendMessage({ action: 'sendToken', token: CurrentToken });

    }, 1000);

  }



}, 6000);


setTimeout(function()
{



  var CommentsArray = Array.from(document.querySelectorAll('ytd-comment-thread-renderer.style-scope.ytd-item-section-renderer'));
var i = 0;

var intervalId = setInterval(function() {
  if (i >= CommentsArray.length) {
    clearInterval(intervalId); // Останавливаем интервал, когда обработаны все элементы
    return;
  }

  var otvetitPar = CommentsArray[i].querySelector('#reply-button-end');
  var otvetit = otvetitPar.querySelector('button');
  otvetit.click();

  i++;
}, 2000);






}, 10000);




    chrome.runtime.sendMessage({ action: 'sendButtons', token: request.token });

  }






});
