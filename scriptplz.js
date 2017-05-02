//Code modified by Patrick McGee
//Inspired by Kevin Buffardi's GalleryJS example in class

var flashcardDeck = [
  {name:"Julie",
   picture: "http://i.imgur.com/FE6AnFP.jpg?2",
   //Photo credit: "https://www.pexels.com/photo/portrait-of-smiling-girl-against-white-background-253758/"
  },
  {name:"Alex",
   picture: "http://i.imgur.com/QKKU9H0.jpg?3",
   //Photo credit: "https://www.pexels.com/photo/man-wearing-blue-denim-buttons-up-long-sleeve-and-blace-frame-eyelgasses-26939/"
  },
  {name:"Andy",
   picture: "http://i.imgur.com/rVH2Uh7.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/portrait-of-young-man-251829/"
  },
  {name:"Janet",
   picture: "http://i.imgur.com/VzNSV0D.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/adult-beautiful-blonde-blur-324658/"
  },
  {name:"Susan",
   picture: "http://i.imgur.com/KHXEVms.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/blonde-haired-woman-in-blue-shirt-y-27411/"
  },
  {name:"Jennifer",
   picture: "http://i.imgur.com/3kYr7uK.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/woman-in-black-blazer-jacket-on-wooden-bench-206559/"
  },
  {name:"Jon",
   picture: "http://i.imgur.com/IP6ugR9.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/man-in-red-and-blue-v-neck-shirt-101584/"
  },
  {name:"Mark",
   picture: "http://i.imgur.com/pLkvi5A.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/man-young-happy-smiling-91227/"
  },
  {name:"Mike",
   picture: "http://i.imgur.com/2htM5ZM.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/man-sitting-in-blue-dress-shirt-infront-of-message-board-212092/"
  },
  {name:"Steve",
   picture: "http://i.imgur.com/cx82Hqd.jpg?1",
   //Photo credit: "https://www.pexels.com/photo/man-in-beanie-holding-his-shoulder-193355/"
  }
];

/*All above free stock photos were received from Pexels website. They were modified
and are being used for educational purposes only all credits go to the linked photo
credit under each image.*/

var currentCard;

function shuffleCards()
{
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
