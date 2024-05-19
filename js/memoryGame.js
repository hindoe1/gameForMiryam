// var symbols = [
//     { "bicycle": "חדר"},
//     { "bicycle": "6"},
//     { "leaf": "ayala" },
//     { "leaf": "hinda" },
//     { "cube": "big"},
//     { "cube": "G"},
//     { "anchor": "" },
//     { "anchor": "" },
//     { "paper-plane-o": "בבילון"},
//     { "paper-plane-o": "פארק"},
//     { "bolt": "מה" },
//     { "bolt": "הבעיה" },
//     { "bomb": "אי אפשר"},
//     { "bomb": "גם וגם"},
//     { "diamond": "גלעד" },
//     { "diamond": "מרים" }
// ];
var symbols = [
    { "rrr": "חדר"},
    { "rrr": "6"},
    { "www": "ayala" },
    { "www": "hinda" },
    { "ppp": "big"},
    { "ppp": "G"},
    { "anhor": "אלגו" },
    { "anhor": "ריתמיקה" },
    { "pper-plane-o": "בבילון"},
    { "pper-plane-o": "פארק"},
    { "blt": "מה" },
    { "blt": "הבעיה" },
    { "omb": "אי אפשר"},
    { "omb": "גם וגם"},
    { "iamond": "גלעד" },
    { "iamond": "מרים" }
];
// חתן כלה מברשת וצבע בית ומפתח
// var symbol = [
//     "bicycle",
//     "bicycle",
//     "leaf",
//     "leaf",
//     "cube",
//     "cube",
//     "anchor",
//     "anchor",
//     "paper-plane-o",
//     "paper-plane-o",
//     "bolt",
//     "bolt",
//     "bomb",
//     "bomb",
//     "diamond",
//     "diamond"
// ];
// var a = [
//     "חדר",
//     "6",
//     "c",
//     "c",
//     "b",
//     "b",
//     "n",
//     "n",
//     "m",
//     "m",
//     "h",
//     "h",
//     "r",
//     "r",
//     "y",
//     "y"
// ];
var opened = [];
var match = 0;
var moves = 0;
var deck = document.querySelector(".deck");
var scorePanel = document.getElementById("score-panel");
var moveNum = scorePanel.querySelector(".moves");
var ratingStars = scorePanel.querySelectorAll("i");
var restart = scorePanel.querySelector(".restart");
var delay = 800;
var gameCardsQTY = symbols.length / 2;
var rank3stars = gameCardsQTY + 2;
var rank2stars = gameCardsQTY + 6;
var rank1stars = gameCardsQTY + 10;

function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function initGame() {
    var cards = shuffle(symbols);
    deck.innerHTML = "";
    match = 0;
    moves = 0;
    moveNum.textContent = moves;
    ratingStars.forEach(function (star) {
        star.classList.remove("fa-star-o");
        star.classList.add("fa-star");
    });
    cards.forEach(function (card, index) {
        var li = document.createElement("li");
        li.className = "card";
        li.innerHTML = `<i class="fa fa-${Object.keys(card)[0]}">${Object.values(symbols[index])[0]}</i>`; 
        // li.innerHTML = `<div>${Object.values(symbols[index])[0]}</i>`; 
        

        deck.appendChild(li);
    });
}

function setRating(moves) {
    var rating = 3;
    if (moves > rank3stars && moves < rank2stars) {
        ratingStars[2].classList.remove("fa-star");
        ratingStars[2].classList.add("fa-star-o");
        rating = 2;
    } else if (moves > rank2stars && moves < rank1stars) {
        ratingStars[1].classList.remove("fa-star");
        ratingStars[1].classList.add("fa-star-o");
        rating = 1;
    } else if (moves > rank1stars) {
        ratingStars[0].classList.remove("fa-star");
        ratingStars[0].classList.add("fa-star-o");
        rating = 0;
    }
    return { score: rating };
}

function endGame(moves, score) {
    var message = "With " + moves + " Moves and " + score + " Stars.\nBoom Shaka Lak!";
    var isConfirmed = confirm("Congratulations! You Won!\n" + message + "\nPlay again!");
    if (isConfirmed) {
        initGame();
    }
}

restart.addEventListener("click", function () {
    var isConfirmed = confirm("Are you sure? Your progress will be Lost!\nYes, Restart Game!");
    if (isConfirmed) {
        initGame();
    }
});

deck.addEventListener("click", function (event) {
    var target = event.target;
    if (!target.classList.contains("card") || opened.length > 1) {
        return;
    }
    target.classList.add("open", "show");
    var card = target.querySelector("i").className;
    opened.push(card);
    if (opened.length > 1) {
        if (card === opened[0]) {
            deck.querySelectorAll(".open").forEach(function (card) {
                card.classList.add("match", "animated", "infinite", "rubberBand");
                setTimeout(function () {
                    card.classList.remove("open", "show", "animated", "infinite", "rubberBand");
                }, delay);
            });
            match++;
        } else {
            deck.querySelectorAll(".open").forEach(function (card) {
                card.classList.add("notmatch", "animated", "infinite", "wobble");
                setTimeout(function () {
                    card.classList.remove("animated", "infinite", "wobble");
                }, delay / 1.5);
                setTimeout(function () {
                    card.classList.remove("open", "show", "notmatch", "animated", "infinite", "wobble");
                }, delay);
            });
        }
        opened = [];
        moves++;
        setRating(moves);
        moveNum.textContent = moves;
    }
    if (gameCardsQTY === match) {
        var score = setRating(moves).score;
        setTimeout(function () {
            endGame(moves, score);
        }, 500);
    }
});

initGame();
