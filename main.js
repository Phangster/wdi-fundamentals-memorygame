var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];
var cardsInPlay=[];

//For players to flip back after they have opened a card
var flipBack = function (){
	var previouslyClicked= document.getElementsByClassName("clicked")
	for (var i = 0; i < previouslyClicked.length; i+=1){
		previouslyClicked[i].setAttribute("src","images/back.png");
	}
	cardsInPlay=[];
};

var checkForMatch=function(){
	var cardId1 = cardsInPlay[0].getAttribute('data-id');
	var card1 = cards[cardId1];
	console.log(card1.rank);
	var cardId2 = cardsInPlay[1].getAttribute('data-id');
	var card2 = cards[cardId2];
	console.log(card2.rank);
	if (card1.rank === card2.rank) {
		alert('You found a match!');
	}else{
		alert('Sorry, try again');
	}
	flipBack();
};	

//When card is clicked it flips over and display its card value
var flipCard = function(){
	var cardId=this.getAttribute('data-id'); //getter
	var card = cards[cardId];
	this.setAttribute("src", card.cardImage); //calling out the image of the card
	this.setAttribute("class", "clicked"); // Set the class attr to clicked
	console.log(this);
	cardsInPlay.push(this); //instead of storing the type of card, store the card element itself
	if (cardsInPlay.length===2){
		setTimeout(checkForMatch, 250);
	}

};

var createBoard= function(){
	for (var i=0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i)
		cardElement.addEventListener("click", flipCard);
		var board = document.getElementById("game-board");
		board.appendChild(cardElement);
	}
}
//starts game over!
// var resetGame = function(){
// 	score = 0;
// 	document.getElementById("score").textContent = score;
// 	result.textContent = "Ready for a new game??";
// 	flipBack();
// };

//begins program by creating board and waiting for reset 
createBoard();
// document.querySelector("button").addEventListener("click", resetGame);