// Событие срабатывает, когда сообщение получено от фонового скрипта
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getButtons') {
    // Получаем все кнопки с классом "button"
    var buttons = Array.from(document.getElementsByClassName('button'));

    // Отправляем массив кнопок в фоновый скрипт
    chrome.runtime.sendMessage({ action: 'sendButtons', buttons: buttons });
  }
});
