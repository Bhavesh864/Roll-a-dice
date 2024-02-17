'use strict';

//Specification 
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let currentScore0 = document.querySelector("#current--0");
let currentScore1 = document.querySelector("#current--1");
let btnHold = document.querySelector(".btn--hold");
let btnRollDice = document.querySelector(".btn--roll");
let btnNewGame = document.querySelector(".btn--new");
let diceImg = document.querySelector(".dice");

let currentScore = 0;
let totalScore = [0, 0];
let activePlayer = 0;
let playing = true;

//Initial State
document.querySelector("#score--0").textContent = 0;
document.querySelector("#score--1").textContent = 0;
diceImg.classList.add("hidden");


//Players Roll the dice

btnRollDice.addEventListener("click", function () {

    if (playing) {
        let dice = Math.ceil(Math.random() * 6);
        diceImg.classList.remove("hidden")
        diceImg.src = `dice-${dice}.png`;

        //Add dice value to current score
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

        //If dice rolls to 1
        if (dice === 1) {
            //Current score will be 0
            currentScore = 0;
            document.querySelector(`#current--${activePlayer}`).textContent = 0;

            //Switch player
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0.classList.toggle("player--active");
            player1.classList.toggle("player--active");
        }
    }
})


//Player clicks on hold button

btnHold.addEventListener("click", function () {

    if (playing) {
        //Current score will add in total score
        totalScore[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = totalScore[activePlayer];

        //Current score will be 0
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

        if (totalScore[activePlayer] >= 100) {
            //Player wins
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            diceImg.classList.add("hidden");

        } else {
            //Switch player
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0.classList.toggle("player--active");
            player1.classList.toggle("player--active");
        }
    }
})

//Player click on New Game
btnNewGame.addEventListener("click", function () {
    currentScore = 0;
    totalScore = [0, 0];
    activePlayer = 0;

    //Initial State
    playing = true;
    document.querySelector("#score--0").textContent = 0;
    document.querySelector("#score--1").textContent = 0;
    diceImg.classList.add("hidden");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    document.querySelector(`.player--0`).classList.remove("player--winner");
    document.querySelector(`.player--1`).classList.remove("player--winner");

})
