
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) 
{

  // начинаем спам
  if (request.action === 'startSpam') 
  {
    var CurrentToken = request.token;
    var CurrentVideo = request.video;
    var Messages = request.messages;
    var tabid = request.tabId;


    setTimeout(function () 
    {
      window.scrollTo(0, 500);
    }, 4000);


    

    setTimeout(function () 
    {



      if (CurrentToken.name == "Kirilllachaev") 
      {

        var avatar = document.querySelector('#avatar-btn');
        avatar.click();

        setTimeout(function () 
        {
          var name = document.querySelector('#account-name').textContent;
          //  var nom = document.querySelector('#channel-handle').textContent;
          //  var em = document.querySelector('#email').textContent;

          //  CurrentToken.nom = nom;


          var elementLogo = document.querySelector('path[d="M12.26,16.18l-2.93-2.87c-0.8,0.86-1.64,1.71-2.48,2.54L4.6,18.1L3.9,17.4l2.25-2.25c0.84-0.84,1.68-1.69,2.48-2.55 c-1.18-1.23-2.17-2.64-2.9-4.18L5.73,8.4h1.14c0.65,1.26,1.47,2.43,2.44,3.45c1.59-1.81,2.89-3.69,3.43-5.7H2.08v-1h6.65V3h1v2.15 h6.78v1h-2.73c-0.54,2.32-2.01,4.42-3.77,6.42l2.63,2.58C12.51,15.5,12.39,15.82,12.26,16.18z M21.51,21.01h-0.95l-1.12-3.04h-4.91 l-1.11,3.04h-0.96l4.09-10.81h0.87L21.51,21.01z M19.15,17.2l-2.17-5.89l-2.17,5.89H19.15z"]');

          var parentElement = elementLogo.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
          parentElement.click();


          setTimeout(function () 
          {
            // Выбираем элемент с текстом "English (US)"
            var xpathExpression = '//*[text()="English (US)"]';
            var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            var elementLang = result.singleNodeValue;
            var parentLang = elementLang.parentNode.parentNode.parentNode;

            CurrentToken.name = name;

            chrome.runtime.sendMessage({ action: 'sendToken', token: CurrentToken });
            console.log('sended');



            setTimeout(function () 
            {
              chrome.runtime.sendMessage({ action: 'StartAgain', tabId: tabid });

              parentLang.click();
            }, 2000);


          }, 5000);



        }, 1000);

      }
      else if (CurrentToken.nom == "Kirilllachaev") 
      {
        // Добавляет видос в плейлист
        if (CurrentToken.nom == "Kirilllachaev")
        {
          //Нажать сейв
          var elementPlaylist = document.querySelector('[aria-label="Save to playlist"]');
          elementPlaylist.click();

          setTimeout(function () 
          {
            //Нажать креат ню плейлись
            var xpathExpressionCreate = '//*[text()="Create new playlist"]';
            var resultCreate = document.evaluate(xpathExpressionCreate, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            var elementCreate = resultCreate.singleNodeValue;
            var parentCreate = elementCreate.parentNode.parentNode.parentNode;
            parentCreate.click();

            setTimeout(function () 
            {
              //заполнить поля
              var elementInput = document.querySelector('[placeholder="Enter playlist name..."]');
              elementInput.value = "Astroworld";

              const event = new Event('input', { bubbles: true });
              elementInput.dispatchEvent(event);



              var ObshParent = elementInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

              var elementDrop = ObshParent.querySelector('[slot="dropdown-trigger"]');
              elementDrop.click();

              setTimeout(function () 
              {

                var xpathExpressionItem = '//*[text()="Anyone can search for and view"]';
                var resultItem = document.evaluate(xpathExpressionItem, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                var elementItem = resultItem.singleNodeValue;
                var parentItem = elementItem.parentNode.parentNode;
                parentItem.click();

                setTimeout(function () 
                {
                 
                  var elementCreateBut = ObshParent.querySelector('[aria-label="Create"]');
                 
                  elementCreateBut.click();


                  setTimeout(function () 
                  {
                    CurrentToken.nom = CurrentToken.name;
                    chrome.runtime.sendMessage({ action: 'sendToken', token: CurrentToken });

                    chrome.runtime.sendMessage({ action: 'StartAgain', tabId: tabid });
                  }, 3000);

                  


                }, 2000);






              }, 2000);



            }, 2000);

          }, 5000);


        }

      }
      else 
      {
        if(CurrentVideo.comments == 0)
        {
          setTimeout(function () 
          {
            var sortby = document.querySelector('[icon-label="Sort by"]');
            var comparent = sortby.parentNode.parentNode.parentNode;
            var comms = comparent.querySelector('[dir="auto"]').textContent;
            console.log(comms);
            CurrentVideo.comments = parseInt(comms);
            chrome.runtime.sendMessage({ action: 'sendVideo', token: CurrentVideo });

          }, 6000);
        }
       

        setTimeout(function () 
        {

          var CommentsArray = Array.from(document.querySelectorAll('ytd-comment-thread-renderer.style-scope.ytd-item-section-renderer'));
        
          var i = 0;

          var intervalId = setInterval(async function () 
          {
            
            if (i >= CommentsArray.length) 
            {
              clearInterval(intervalId); // Останавливаем интервал, когда обработаны все элементы
              return;
            }

            var otvetitPar = CommentsArray[i].querySelector('#reply-button-end');
            var otvetit = otvetitPar.querySelector('button');


            var AuthorName = CommentsArray[i].querySelector('#author-text').querySelector("span").textContent;
            AuthorName = AuthorName.replace(/\s/g, "");

            //window.scrollTo(0, 500 * (i+1));
            console.log(CurrentVideo.comments);

            if(CurrentToken.replies < 50 && CurrentVideo.messages < CurrentVideo.comments)
            {
              var MesHas = false;

              Messages.forEach(function (Mes) 
              {
                if (AuthorName == Mes)
                {
                  MesHas = true;
                }
              });
              
              if(!MesHas)
              {
                

                if (otvetit != null) 
                {
                  otvetit.click();
                  
                 
                  await delay(500);
             
                 
                    var Pole = CommentsArray[i].querySelector('[aria-label="Add a reply..."]');
                    var dabs = i;
                    if(dabs % 2 == 0 || dabs == 0)
                    {
                      Pole.textContent = "Hello! We are making a similar game! Trailer on the channel. Add to your wishlist. Also, we have Disсоrd. Thank you!";
                    }
                    else
                    {
                      Pole.textContent = "Salut! We are making a similar game! Trailer on the channel. Add to your wishlist. Also, we have Disсоrd. Thanks!";
                    }

                       

                    const event = new Event('input', { bubbles: true });
                    Pole.dispatchEvent(event);
                    await delay(1000);

                   
                      var ReplyBut = CommentsArray[i].querySelector("#submit-button").querySelector('[aria-label="Reply"]');
                      ReplyBut.click();
                    

                      console.log(AuthorName + "Sended");

                      CurrentToken.replies = CurrentToken.replies + 1;
                      CurrentVideo.messages = CurrentVideo.messages + 1;

                      Messages.push(AuthorName);

                      chrome.runtime.sendMessage({ action: 'sendVideo', token: CurrentVideo });
                      chrome.runtime.sendMessage({ action: 'sendToken', token: CurrentToken });
                      chrome.runtime.sendMessage({ action: 'sendMessages', newMessage: AuthorName });
                   

                    
                    

                 

                }
                else 
                {


                  otvetit = otvetitPar.querySelector('a');
                  otvetit.click();

                  setTimeout(function () 
                  {
                    var CrCh = document.querySelector('#create-channel-button');
                    var CrB = CrCh.querySelector('button');
                    CrB.click();

                    setTimeout(function () 
                    {
                      chrome.runtime.sendMessage({ action: 'StartAgain', tabId: tabid });

                    }, 8000);

                  }, 5000);

                  clearInterval(intervalId); // Останавливаем интервал, когда обработаны все элементы
                  return;


                }
              }
            }
            else
            {
              //Уже 50, надо обновлять акк
              setTimeout(function () 
              {
                chrome.runtime.sendMessage({ action: 'StartAgain', tabId: tabid });

              }, 5000);

              clearInterval(intervalId); // Останавливаем интервал, когда обработаны все элементы
              return;
            }

            

            

            i++;
          }, 3500);

        }, 8000);



      }



    }, 6000);




  }






});
