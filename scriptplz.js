//Code modified by Patrick McGee
//Inspired by Kevin Buffardi's GalleryJS example in class

var flashcardDeck = [
  {name:"Julie",
   picture: "https://i.imgur.com/FE6AnFP.jpg?2",
   //Photo credit: "https://www.pexels.com/photo/portrait-of-smiling-girl-against-white-background-253758/"
  },
  {name:"Alex",
   picture: "https://i.imgur.com/QKKU9H0.jpg?3",
   //Photo credit: "https://www.pexels.com/photo/man-wearing-blue-denim-buttons-up-long-sleeve-and-blace-frame-eyelgasses-26939/"
  },
  {name:"Andy",
   picture: "https://i.imgur.com/rVH2Uh7.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/portrait-of-young-man-251829/"
  },
  {name:"Janet",
   picture: "https://i.imgur.com/VzNSV0D.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/adult-beautiful-blonde-blur-324658/"
  },
  {name:"Susan",
   picture: "https://i.imgur.com/KHXEVms.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/blonde-haired-woman-in-blue-shirt-y-27411/"
  },
  {name:"Jennifer",
   picture: "https://i.imgur.com/3kYr7uK.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/woman-in-black-blazer-jacket-on-wooden-bench-206559/"
  },
  {name:"Jon",
   picture: "https://i.imgur.com/IP6ugR9.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/man-in-red-and-blue-v-neck-shirt-101584/"
  },
  {name:"Mark",
   picture: "https://i.imgur.com/pLkvi5A.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/man-young-happy-smiling-91227/"
  },
  {name:"Mike",
   picture: "https://i.imgur.com/2htM5ZM.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/man-sitting-in-blue-dress-shirt-infront-of-message-board-212092/"
  },
  {name:"Steve",
   picture: "https://i.imgur.com/cx82Hqd.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/man-in-beanie-holding-his-shoulder-193355/"
  }
];

/*All above free stock photos were received from Pexels website. They were modified
and are being used for educational purposes only all credits go to the linked photo
credit under each image.*/

var currentCard;

function shuffleCards()
{
  document.getElementById("cardName").style.visibility = "hidden";
  document.getElementById("cardImage").style.opacity = "1";
  document.getElementById("cardImage").className = "";

  var len = flashcardDeck.length;
  var randInt = Math.floor(Math.random() * len);

  while(randInt == currentCard)
  {
    randInt = Math.floor(Math.random() * len);
  }

  currentCard = randInt;
  document.getElementById("cardImage").src = flashcardDeck[randInt].picture;
  document.getElementById("cardImage").alt = flashcardDeck[randInt].name;
  //don't go cheating now with the alt text. It only works against yourself ;)

}

function flipCard()
{
  document.getElementById("cardImage").className = "animateImg";
  document.getElementById("next").disabled = true;
  //the button gets disabled to prevent problems with the picture not showing
  //if the user clicks next before the timeouts are finished
  setTimeout(myTimeout, 1100);
  setTimeout(myOtherTimeout, 3000);
  //I'm using timeouts to delay these functions so animation looks more natural
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
