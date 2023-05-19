class Token 
{
  constructor(log, pas, name, nom, working, replies) 
  {
    this.log = log;
    this.pas = pas;
    this.name = name;
    this.nom = nom;
    this.working = working;
    this.replies = replies;

  }

}



var Tokens;
var Messages;
var Buttons = "Kh";




document.addEventListener("DOMContentLoaded", function () 
{

  document.getElementById("fresh").addEventListener("click", function ()
  {
    GetTokens();
    GetMessages();

    setTimeout(function () 
    {
      Freshing();
    }, 1000);

  });

  document.getElementById("spam").addEventListener("click", function () 
  {
    ChangeAccount();
  });


});



function Freshing() 
{
  var myTable = document.getElementById("TokensNumber");
  var messagesEl = document.getElementById("MessagesId");
  messagesEl.textContent = Messages.length;

  while (myTable.rows.length > 1) 
  {
    myTable.deleteRow(1);
  }

  for (var i = 0; i < Tokens.length; i++) 
  {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.textContent = Tokens[i].log;
    cell2.textContent = Tokens[i].replies;

    row.appendChild(cell1);
    row.appendChild(cell2);
    myTable.appendChild(row);
  }
}


function ChangeAccount() 
{



  var CurrentToken;

  for (var i = 0; i < Tokens.length; i++) 
  {
    if (Tokens[i].replies < 50) 
    {
      CurrentToken = Tokens[i];
      break;
    }
  }

  if (CurrentToken == null) 
  {
    return;
  }

  var tabId;
  var link = "https://accounts.google.com/v3/signin/identifier?dsh=S-1593058454%3A1683739228588224&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Dru%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&ec=65620&hl=ru&ifkv=Af_xneFNyI5xqUcH0gnwriU9Zy9b0xUFel9EnL8SqgoAx4xhEJ6j_8I-7APmXMkFilrKPtPLXjqPHw&passive=true&service=youtube&uilel=3&flowName=GlifWebSignIn&flowEntry=ServiceLogin";


  setTimeout(function () 
  {

    chrome.tabs.create({ url: link }, function (tab) {
      tabId = tab.id;

    });
  }, 500);




  // начинаем спам

  try 
  {
    // Логинимся
    setTimeout(function () 
    {
      var email = CurrentToken.log;
      chrome.tabs.executeScript(tabId, { code: "document.querySelector('.zHQkBf').value = '" + email + "';" });
      chrome.tabs.executeScript(tabId, { code: "document.querySelector('.VfPpkd-LgbsSe-OWXEXe-k8QpJ').click()" });
    }, 8000);

    setTimeout(function () 
    {
      var pas = CurrentToken.pas;
      chrome.tabs.executeScript(tabId, { code: "document.querySelector('.zHQkBf').value = '" + pas + "';" });
      chrome.tabs.executeScript(tabId, { code: "document.querySelector('.VfPpkd-LgbsSe-OWXEXe-k8QpJ').click()" });
    }, 10000);

  }
  catch (error) 
  {
    // Уже залогинены
  }

  if (CurrentToken.nom == "Kirilllachaev") 
  {
    //открывает наш трейлер и добавляет его в плейлист
    setTimeout(function () 
    {
      chrome.tabs.update(tabId, { url: 'https://youtu.be/D-EHbrKiqgI' });

      setTimeout(function () 
      {
        chrome.tabs.sendMessage(tabId, { action: 'startSpam', tabId: tabId, token: CurrentToken });
      }, 6000);

    }, 16000);
  }
  else 
  {
    setTimeout(function () 
    {
      chrome.tabs.update(tabId, { url: 'https://youtu.be/m4NVu3Ltl1c' });

      setTimeout(function () 
      {
        chrome.tabs.sendMessage(tabId, { action: 'startSpam', tabId: tabId, token: CurrentToken, messages: Messages });
      }, 6000);

    }, 16000);
  }






}





function GetTokens() {

  const fileURL = 'https://dpex-exchange.com/MyTokens.txt';

  readTextFile(fileURL, function (lines) 
  {
    if (lines) {
      var tokens1 = lines;

      var tok = tokens1[0].split(":");

      Tokens = [new Token(tok[0], tok[1], tok[2], tok[3], tok[4], parseInt(tok[5]))];

      for (var i = 1; i < tokens1.length; i++) {
        var tok = tokens1[i].split(":");
        var token = new Token(tok[0], tok[1], tok[2], tok[3], tok[4], parseInt(tok[5]));
        Tokens.push(token);
      }

    }
  });



}

function readTextFile(file, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', file, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const content = xhr.responseText;
      const lines = content.split('\n'); // Разделение содержимого на строки
      callback(lines);
    }
  };

  xhr.onerror = function () {
    console.error('Ошибка при чтении файла:', xhr.status);
    callback(null);
  };

  xhr.send();
}






function SetTokens() {

  var result = "";

  Tokens.forEach(function (Token) {
    result += Token.log + ":" + Token.pas + ":" + Token.name + ":" + Token.nom + ":" + Token.working + ":" + Token.replies + "┤";
  });



  result = result.slice(0, -1);



  const xhr1 = new XMLHttpRequest();
  xhr1.open('GET', 'https://dpex-exchange.com/MyTokens.php?text=' + result, true);
  xhr1.send();


}


function GetMessages() {

  const fileURL = 'https://dpex-exchange.com/YTMessages.txt';

  readTextFile(fileURL, function (lines) 
  {
    if (lines) 
    {
      var tokens1 = lines;

      Messages = [tokens1[0]];

      for (var i = 1; i < tokens1.length; i++) {
    
        Messages.push(tokens1[i]);
      }

    }
  });



}

function SetMessages(AuthorName) {

  
  var result = AuthorName;

  //newMessage.forEach(function (Token) {
  //  result += Token + "┤";
 // });


  //result = result.slice(0, -1);

  const xhr1 = new XMLHttpRequest();
  xhr1.open('GET', 'https://dpex-exchange.com/YTMessages.php?text=' + result, true);
  xhr1.send();

  Messages.push(AuthorName);
  Freshing();


}




chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.action === 'sendButtons') 
  {

  }

  if (request.action === 'sendMessages') 
  {
    
    SetMessages(request.newMessage);
   

  }

  if (request.action === 'sendToken') {

    Tokens.forEach(function (Token) {
      if (Token.log.includes(request.token.log)) {
        Token.name = request.token.name;
        Token.nom = request.token.nom;
        Token.replies = request.token.replies;

        SetTokens();

      }
    });


  }

  if (request.action === 'StartAgain') {

    setTimeout(function () {
      chrome.tabs.remove(request.tabId, function () {
        console.log('Вкладка успешно закрыта.');
      });
      ChangeAccount();
    }, 6000);


  }



});
