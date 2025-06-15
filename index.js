if (performance.getEntriesByType("navigation")[0].type === "reload") { // Check if the page was reloaded
    // If the page was reloaded, we want to roll the dice again
    rollDice();
}


function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
    var filepath1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
    var filepath2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

    document.querySelector(".img1").setAttribute("src", filepath1); // Sets the source of the first image
    document.querySelector(".img2").setAttribute("src", filepath2);
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}