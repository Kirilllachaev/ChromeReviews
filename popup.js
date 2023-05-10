class Token {
  constructor(log, pas, name, nom, working, replies) {
    this.log = log;
    this.pas = pas;
    this.name = name;
    this.nom = nom;
    this.working = working;
    this.replies = replies;
  }

}



var Tokens;




document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("run").addEventListener("click", function() {

var link = "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=717762328687-iludtf96g1hinl76e4lc1b9a82g457nn.apps.googleusercontent.com&scope=profile%20email&redirect_uri=https%3A%2F%2Fstackauth.com%2Fauth%2Foauth2%2Fgoogle&state=%7B%22sid%22%3A1%2C%22st%22%3A%2259%3A3%3A1b8%2C16%3A86c0d28f00460d4f%2C10%3A1683714468%2C16%3Ae7dadcec82baa50c%2Ca322a01c9dad630b345c2d32f62cf3a9dfe7bd32e86cd23a4998290933331df6%22%2C%22cid%22%3A%22717762328687-iludtf96g1hinl76e4lc1b9a82g457nn.apps.googleusercontent.com%22%2C%22k%22%3A%22Google%22%2C%22ses%22%3A%22b5c1b1562c0f47f29a8dc5d3e6470194%22%7D&response_type=code&service=lso&o2v=1&flowName=GeneralOAuthFlow";


setTimeout(function() {
   GetTokens();

}, 1000);


setTimeout(function() {

  var myTable = document.getElementById("TokensNumber");

  while (myTable.rows.length > 1) {
    myTable.deleteRow(1);
  }

  for (var i = 0; i < Tokens.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.textContent = Tokens[i].log;
    cell2.textContent = Tokens[i].replies;

    row.appendChild(cell1);
    row.appendChild(cell2);
    myTable.appendChild(row);
  }



}, 2000);

setTimeout(function() {

  SetTokens();
}, 3000);







  });

});






function ChangeAccount()
{
  setTimeout(function() {
    chrome.tabs.create({url: link}, function(tab) {


// Находим поле по классу и вставляем текст
        chrome.tabs.executeScript(tab.id, {code: "document.querySelector('.zHQkBf').value = 'pat.swaniawskiw@gmail.com'"});


      // Когда страница загрузилась, находим кнопку по классу и нажимаем на нее
      chrome.tabs.executeScript(tab.id, {code: "document.querySelector('.VfPpkd-LgbsSe-OWXEXe-k8QpJ').click()"}, function() {

      });
    });
}, 4000);
}





function GetTokens()
{

  const fileURL = 'https://dpex-exchange.com/MyTokens.txt';

  readTextFile(fileURL, function(lines) {
    if (lines) {
      var tokens1 = lines;

      var tok = tokens1[0].split(":");

      Tokens = [ new Token(tok[0], tok[1], tok[2], tok[3], tok[4], tok[5])];

      for (var i = 1; i < tokens1.length; i++) {
        var tok = tokens1[i].split(":");
          var token = new Token(tok[0], tok[1], tok[2], tok[3], tok[4], tok[5]);
          Tokens.push(token);
      }

    }
  });



}

function readTextFile(file, callback) {
const xhr = new XMLHttpRequest();
xhr.open('GET', file, true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    const content = xhr.responseText;
    const lines = content.split('\n'); // Разделение содержимого на строки
    callback(lines);
  }
};

xhr.onerror = function() {
  console.error('Ошибка при чтении файла:', xhr.status);
  callback(null);
};

xhr.send();
}






function SetTokens()
{


var result = "";

Tokens.forEach(function(Token) {
  result += Token.log + ":" + Token.pas + ":" +  Token.name + ":" +  Token.nom + ":" +  Token.working + ":" +  Token.replies + "┤";
});


const xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'https://dpex-exchange.com/MyTokens.php?text='+result, true);
xhr1.send();




}
