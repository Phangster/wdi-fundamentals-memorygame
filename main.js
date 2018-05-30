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
var previouslyClicked= document.getElementsByClassName("clicked")
//For players to flip back after they have opened a card
var flipBack = function (){
	for (var i = 0; i < previouslyClicked.length; i+=1){
		clickedCards[i].setAttribute("src","images/back.png");
	}
};

var checkForMatch=function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	}else{
		alert('Sorry, try again');
	}
	var cardsInPlay=[];
};	

//When card is clicked it flips over and display its card value
var flipCard = function(cardId){
	var cardId=this.getAttribute('data-id'); // I am not sure what does getAttribute does
	var card = cards[cardId];
	this.setAttribute("src", card.cardImage); //Totally lost, need step by step visual explaination
	this.setAttribute("class", "clicked");
	console.log(this);
	cardsInPlay.push(card.rank);
	if (cardsInPlay.length===2){
		checkForMatch();
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
var resetGame = function(){
	score = 0;
	document.getElementById("score").textContent = score;
	result.textContent = "Ready for a new game??";
	flipBack();
};

//begins program by creating board and waiting for reset 
createBoard();
document.querySelector("button").addEventListener("click", resetGame);