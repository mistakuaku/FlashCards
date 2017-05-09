//Code modified by Patrick McGee
//Inspired by Kevin Buffardi's GalleryJS example in class

var flashcardDeck = [
  {name:"Julie",
   picture: "https://i.imgur.com/FE6AnFP.jpg?2",
   credit: "https://www.pexels.com/photo/portrait-of-smiling-girl-against-white-background-253758/"
  },
  {name:"Alex",
   picture: "https://i.imgur.com/QKKU9H0.jpg?3",
   credit: "https://www.pexels.com/photo/man-wearing-blue-denim-buttons-up-long-sleeve-and-blace-frame-eyelgasses-26939/"
  },
  {name:"Andy",
   picture: "https://i.imgur.com/rVH2Uh7.jpg?1",
   credit: "https://www.pexels.com/photo/portrait-of-young-man-251829/"
  },
  {name:"Janet",
   picture: "https://i.imgur.com/VzNSV0D.jpg?1",
   credit: "https://www.pexels.com/photo/adult-beautiful-blonde-blur-324658/"
  },
  {name:"Susan",
   picture: "https://i.imgur.com/KHXEVms.jpg?1",
   credit: "https://www.pexels.com/photo/blonde-haired-woman-in-blue-shirt-y-27411/"
  },
  {name:"Jennifer",
   picture: "https://i.imgur.com/3kYr7uK.jpg?1",
   credit: "https://www.pexels.com/photo/woman-in-black-blazer-jacket-on-wooden-bench-206559/"
  },
  {name:"Jon",
   picture: "https://i.imgur.com/IP6ugR9.jpg?1",
   credit: "https://www.pexels.com/photo/man-in-red-and-blue-v-neck-shirt-101584/"
  },
  {name:"Mark",
   picture: "https://i.imgur.com/pLkvi5A.jpg?1",
   credit: "https://www.pexels.com/photo/man-young-happy-smiling-91227/"
  },
  {name:"Mike",
   picture: "https://i.imgur.com/2htM5ZM.jpg?1",
   credit: "https://www.pexels.com/photo/man-sitting-in-blue-dress-shirt-infront-of-message-board-212092/"
  },
  {name:"Steve",
   picture: "https://i.imgur.com/cx82Hqd.jpg?1",
   credit: "https://www.pexels.com/photo/man-in-beanie-holding-his-shoulder-193355/"
  }
];

/*All above free stock photos were received from Pexels website. They were modified
and are being used for educational purposes only all credits go to the linked photo
credit under each image.*/

var currentCard;

function shuffleCards()
{
  document.getElementById("cardName").style.visibility = "hidden"; //name overlay visibility
  document.getElementById("cardImage").style.opacity = "1"; //picture visibility
  document.getElementById("cardImage").className = ""; //reset animation
  document.getElementById("flip").disabled = false; //reset clickability of flip

  document.getElementById("a1Label").style.backgroundColor = "";
  document.getElementById("a1Label").style.color = "black";
  document.getElementById("a1").checked = false;
  document.getElementById("a2Label").style.backgroundColor = "";
  document.getElementById("a2Label").style.color = "black";
  document.getElementById("a2").checked = false;
  document.getElementById("a3Label").style.backgroundColor = "";
  document.getElementById("a3Label").style.color = "black";
  document.getElementById("a3").checked = false;
  document.getElementById("a4Label").style.backgroundColor = "";
  document.getElementById("a4Label").style.color = "black";
  document.getElementById("a4").checked = false;
  //reset everything

  var randInt = getRandomNum(flashcardDeck.length);

  while(randInt == currentCard)
  {
    randInt = getRandomNum(flashcardDeck.length);
  }

  currentCard = randInt;
  document.getElementById("cardImage").src = flashcardDeck[randInt].picture;
  document.getElementById("cardImage").alt = flashcardDeck[randInt].name;
  document.getElementById("source").href = flashcardDeck[randInt].credit;
  //don't go cheating now with the alt text. It only works against yourself ;)

  shuffleAnswers();

  if(Number(sessionStorage.gameType) == 2)
  {
    //Do nothing right now
  }
  else if(Number(sessionStorage.gameType) == 1)
  {
    document.getElementById("type2").style.display = "none";
  }

}

function flipCard()
{
  document.getElementById("cardImage").className = "animateImg";
  document.getElementById("next").disabled = true;
  document.getElementById("flip").disabled = true;
  //the buttons gets disabled to prevent problems with the picture not showing
  //if the user clicks next before the timeouts are finished
  setTimeout(myTimeout, 1100);
  setTimeout(myOtherTimeout, 3000);
  //I'm using timeouts to delay these functions so animation looks more natural
  checkAnswer();
}

function myTimeout()
{
  var currentName = flashcardDeck[currentCard].name;
  document.getElementById("name").innerHTML = currentName;
  document.getElementById("cardName").style.visibility = "visible";
}

function myOtherTimeout()
{
  document.getElementById("cardImage").style.opacity = "0";
  document.getElementById("next").disabled = false;
}

function getGameMode()
{
  var checkTraditional = document.getElementById("traditional").checked;
  var checkEnhanced = document.getElementById("enhanced").checked;

  if (checkTraditional === true)
  {
    sessionStorage.gameType = 1;
  }
  else if (checkEnhanced === true)
  {
    sessionStorage.gameType = 2;
  }

}

function getRandomNum(len)
{
  return Math.floor(Math.random() * len);
}

function shuffleAnswers()
{
  var correctAnswer = flashcardDeck[currentCard].name;
  var answerArray = [correctAnswer];
  var previous = [currentCard]; //an arry to keep track of what numbers I have pulled
  for(i=1; i < 4; i++)
  {
    var randNum = getRandomNum(flashcardDeck.length);
    while(randNum == currentCard || randNum == previous[i-1] || randNum == previous[i-2])
    {
      randNum = getRandomNum(flashcardDeck.length);
    }
    previous[i] = randNum;
    answerArray.push(flashcardDeck[randNum].name);
    //This basically makes sure each 4 numbers are different
  }

  answerArray.sort(function(a, b){return 0.5 - Math.random()});
  /*sort array randomly inspired by: https://www.w3schools.com/js/js_array_sort.asp
  it is to make the answers appear random on the screen and to preven people
  from knowing that the answer is always in a certain position*/
  document.getElementById("a1Label").innerHTML = answerArray[0];
  document.getElementById("a2Label").innerHTML = answerArray[1];
  document.getElementById("a3Label").innerHTML = answerArray[2];
  document.getElementById("a4Label").innerHTML = answerArray[3];

}

function checkAnswer()
{
  var choice = [ document.getElementById("a1Label").innerHTML,
                document.getElementById("a2Label").innerHTML,
                document.getElementById("a3Label").innerHTML,
                document.getElementById("a4Label").innerHTML
              ];
  var pick = [ document.getElementById("a1").checked,
                document.getElementById("a2").checked,
                document.getElementById("a3").checked,
                document.getElementById("a4").checked
              ];

  var label = ["a1Label", "a2Label", "a3Label", "a4Label"];

  var answer = flashcardDeck[currentCard].name;

  var i = 0;
  while(pick[i] == false)
  {
    i++;
  }

  if (choice[i] == answer)
  {
    document.getElementById(label[i]).style.backgroundColor = "green";
    document.getElementById(label[i]).style.color = "white";
  }
  else
  {
      document.getElementById(label[i]).style.backgroundColor = "red";
      document.getElementById(label[i]).style.color = "white";
  }



}
