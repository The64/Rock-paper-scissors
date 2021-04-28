/* THIS IS TO CHANGE THE NAME OF THE PLAYERS */
const input1 = document.querySelector(".input1");
const btn1 = document.querySelector(".btn1");

const input2 = document.querySelector(".input2");
const btn2 = document.querySelector(".btn2");

let namePlayer1 = document.querySelector(".name-player1");
let namePlayer2 = document.querySelector(".name-player2");


btn1.addEventListener("click", function () {
    
    if(input1.value == ""){
        alert("NONE")
    }
    else{
        namePlayer1.textContent = input1.value;
    }

})

btn2.addEventListener("click", function () {
    
    if(input2.value == ""){
        alert("NONE")
    }
    else{
        namePlayer2.textContent = input2.value;
    }

})

/* BUTTONS TO PLAY */
const btnGame = document.querySelectorAll(".btn-game");

const rock1 = document.querySelector(".rock1");
const paper1 = document.querySelector(".paper1");
const scissors1 = document.querySelector(".scissors1");

const rock2 = document.querySelector(".rock2");
const paper2 = document.querySelector(".paper2");
const scissors2 = document.querySelector(".scissors2");

/* URL OF THE IMAGES */
const rockUrl = "https://images.vexels.com/media/users/3/145641/isolated/preview/30bc99162bca69bdbd27451ceeef8848-ilustraci-oacute-n-de-piedra-de-la-tierra-by-vexels.png"
const paperUrl = "https://www.pngkey.com/png/full/915-9153654_paginas-para-colorear-avion-dibujo-de-avion-papel.png"
const scissorsUrl = "https://i.pinimg.com/originals/d1/8e/63/d18e63c85411ae61d4c3269b3477b234.png"
const interrogacionUrl = "https://img.icons8.com/ios-glyphs/452/question-mark.png";

/* THE ACTUAL SELECTION OF THE PLAYERS */
const selecting1 = document.querySelector(".selecting1");
const selecting2 = document.querySelector(".selecting2");

const player1Selecting = document.querySelector(".player1-selecting");
const player2Selecting = document.querySelector(".player2-selecting");


let player1Choice = null;
let player2Choice = null;

/* THE SQUARES TO COUNT THE WINS */
const squares = document.querySelectorAll(".squares")

const squares1 = document.querySelectorAll(".squares1");
const squares2 = document.querySelectorAll(".squares2");


/* WINS COUNTER */
let ip1 = 0;
let ip2 = 0;

let whoWins = document.querySelector(".who-wins");

/* THIS IS THE LOOP TO RECONIZE THE BUTTON YOU'RE PRESSING */
btnGame.forEach(element => {
    
    element.addEventListener("click", function () {
        
        let choice = element.className;

        let finalChoice =  choice.split(" ")[0];

        /* THIS DIVIDES BETWEEN PLAYER1'S CHOICE AND PLAYER2'S CHOICE */
        if(finalChoice.includes("1")){

            player1Choice = finalChoice;
            console.log(player1Choice)

        }
        else {

            player2Choice = finalChoice;
            console.log(player2Choice)

        }

        /* THIS IS WHEN ONLY ONE PLAYER HAVE CHOSEN */
        if (player1Choice == null || player2Choice == null) {

            console.log("waiting for your opponent answer...")

        } else{

            player1Choice = player1Choice.replace("1", "");
            player2Choice = player2Choice.replace("2", "");
            
            /* THIS IS WHEN THE PLAYERS DRAW */
            if(player1Choice == player2Choice){
                console.log("DRAW")

                if(player1Choice == "rock"){
                    /* THIS IS TO CHANGE THE DIV SELECTOR'S IMAGE */
                    player1Selecting.setAttribute("src", rockUrl);
                    player2Selecting.setAttribute("src", rockUrl);
                }
                if(player1Choice == "paper"){
                    player1Selecting.setAttribute("src", paperUrl);
                    player2Selecting.setAttribute("src", paperUrl);
                }
                if(player1Choice == "scissors"){
                    player1Selecting.setAttribute("src", scissorsUrl);
                    player2Selecting.setAttribute("src", scissorsUrl);
                }

                /* THIS IS TO CHANGE THE DIV SELECTOR'S BACKGROUND */
                selecting1.style.backgroundColor = "rgb(255,120,0)";
                selecting2.style.backgroundColor = "rgb(255,120,0)";
            }


            /* ----------IN CASE PLAYER 1 WINS---------- */

            if(player1Choice == "rock" & player2Choice == "scissors"){

                console.log(`${namePlayer1.textContent} WINS`);
                ip1++ /* IT INCREMENTS THE COUNTER OF PLAYER1'S WINS */

                player1Selecting.setAttribute("src", rockUrl);
                selecting1.style.backgroundColor = "rgb(0,255,0)";

                player2Selecting.setAttribute("src", scissorsUrl);
                selecting2.style.backgroundColor = "rgb(255,0,0)";
            }

            if(player1Choice == "paper" & player2Choice == "rock"){

                console.log(`${namePlayer1.textContent} WINS`);
                ip1++

                player1Selecting.setAttribute("src", paperUrl);
                selecting1.style.backgroundColor = "rgb(0,255,0)";

                player2Selecting.setAttribute("src", rockUrl);
                selecting2.style.backgroundColor = "rgb(255,0,0)";
            }

            if(player1Choice == "scissors" & player2Choice == "paper"){

                console.log(`${namePlayer1.textContent} WINS`);
                ip1++

                player1Selecting.setAttribute("src", scissorsUrl);
                selecting1.style.backgroundColor = "rgb(0,255,0)";

                player2Selecting.setAttribute("src", paperUrl);
                selecting2.style.backgroundColor = "rgb(255,0,0)";
            }

            /* ----------IN CASE PLAYER 2 WINS---------- */

            if(player2Choice == "rock" & player1Choice == "scissors"){

                console.log(`${namePlayer2.textContent} WINS`);
                ip2++
                
                player2Selecting.setAttribute("src", rockUrl);
                selecting2.style.backgroundColor = "rgb(0,255,0)";

                player1Selecting.setAttribute("src", scissorsUrl);
                selecting1.style.backgroundColor = "rgb(255,0,0)";
            }

            if(player2Choice == "paper" & player1Choice == "rock"){

                console.log(`${namePlayer2.textContent} WINS`);
                ip2++

                player2Selecting.setAttribute("src", paperUrl);
                selecting2.style.backgroundColor = "rgb(0,255,0)";

                player1Selecting.setAttribute("src", rockUrl);
                selecting1.style.backgroundColor = "rgb(255,0,0)";
            }

            if(player2Choice == "scissors" & player1Choice == "paper"){

                console.log(`${namePlayer2.textContent} WINS`);
                ip2++

                player2Selecting.setAttribute("src", scissorsUrl);
                selecting2.style.backgroundColor = "rgb(0,255,0)";

                player1Selecting.setAttribute("src", paperUrl);
                selecting1.style.backgroundColor = "rgb(255,0,0)";
            }

        
            /* THIS RESTORES THE PLAYER'S CHOICE */
            console.log("-----restart-----")
            player1Choice = null;
            player2Choice = null;


            /* THIS IS A LOOP TO SHOW THE WINS THROUGH THE SQUARES */
            for(let i = 0; i <= 9; i++){

                if(ip1 == i & ip1 != 0){
                    squares1[i-1].style.backgroundColor = "rgb(0,255,0)";
                }

            }

            for(let x = 0; x <= 9; x++){

                if(ip2 == x & ip2 != 0){
                    squares2[x-1].style.backgroundColor = "rgb(0,255,0)";
                }

            }


            if (ip1 == 9){


                /* IF THE PLAYER1 WINS */
                ip1 = 0;
                ip2 = 0;
                whoWins.textContent = `${namePlayer1.textContent} WINS`; /* IT SHOWS IT'S NAME */

                setTimeout(function () {      
                    whoWins.textContent = ""; /* THIS MAKE DISSAPEAR THE WINNER'S NAME IN 4SEC */
                }, 4000)

                squares.forEach(element => {
                    
                    element.style.backgroundColor = "#333" /* THIS RESTORES THE SQUARE'S BACKGROUND COLOR */

                });

                /* THIS RESTORES THE DIV SELECTING IMAGE AND BACKGROUND COLOR */
                player1Selecting.setAttribute("src", interrogacionUrl);
                player2Selecting.setAttribute("src", interrogacionUrl);
                selecting1.style.backgroundColor = "rgb(255,255,255)";
                selecting2.style.backgroundColor = "rgb(255,255,255)";

                console.log(`*****************${namePlayer1.textContent} FINALLY WINS*****************`)


            }
            if (ip2 == 9){


                /* THE SAME AS BEFORE, BUT FOR PLAYER2 WINS */
                ip1 = 0;
                ip2 = 0;
                whoWins.textContent = `${namePlayer2.textContent} WINS`;

                setTimeout(function () {      
                    whoWins.textContent = "";
                }, 4000)

                squares.forEach(element => {
                    
                    element.style.backgroundColor = "#333"

                });

                player1Selecting.setAttribute("src", interrogacionUrl);
                player2Selecting.setAttribute("src", interrogacionUrl);
                selecting1.style.backgroundColor = "rgb(255,255,255)";
                selecting2.style.backgroundColor = "rgb(255,255,255)";

                console.log(`*****************${namePlayer2.textContent} FINALLY WINS*****************`)


            }
        
        }
    });

});
