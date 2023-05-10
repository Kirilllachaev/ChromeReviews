
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("run").addEventListener("click", function() {

var link = "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=717762328687-iludtf96g1hinl76e4lc1b9a82g457nn.apps.googleusercontent.com&scope=profile%20email&redirect_uri=https%3A%2F%2Fstackauth.com%2Fauth%2Foauth2%2Fgoogle&state=%7B%22sid%22%3A1%2C%22st%22%3A%2259%3A3%3A1b8%2C16%3A86c0d28f00460d4f%2C10%3A1683714468%2C16%3Ae7dadcec82baa50c%2Ca322a01c9dad630b345c2d32f62cf3a9dfe7bd32e86cd23a4998290933331df6%22%2C%22cid%22%3A%22717762328687-iludtf96g1hinl76e4lc1b9a82g457nn.apps.googleusercontent.com%22%2C%22k%22%3A%22Google%22%2C%22ses%22%3A%22b5c1b1562c0f47f29a8dc5d3e6470194%22%7D&response_type=code&service=lso&o2v=1&flowName=GeneralOAuthFlow";

var tokens;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'MyTokens.txt', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // Получаем ссылку из файла

      tokens = xhr.responseText.split('\n');


    }
  };
  xhr.send();

  setTimeout(function() {
    chrome.tabs.create({url: link}, function(tab) {


// Находим поле по классу и вставляем текст
        chrome.tabs.executeScript(tab.id, {code: "document.querySelector('.zHQkBf').value = 'pat.swaniawskiw@gmail.com'"});


      // Когда страница загрузилась, находим кнопку по классу и нажимаем на нее
      chrome.tabs.executeScript(tab.id, {code: "document.querySelector('.VfPpkd-LgbsSe-OWXEXe-k8QpJ').click()"}, function() {

      });
    });
}, 4000);


  });

});


function ChangeAccount()
{

}
