let scoreHome = document.getElementById("s1");
let scoreGuest = document.getElementById("s2");
let scoreCountHome = 0;
let scoreCountGuest = 0;

function addHome (number) {
    scoreCountHome += number;
    scoreHome.textContent = scoreCountHome
}

function addGuest (number) {
    scoreCountGuest += number;
    scoreGuest.textContent = scoreCountGuest
}

function newGame () {
    scoreCountHome = 0;
    scoreCountGuest = 0;
    console.log("scores set to ", scoreCountHome + "-" + scoreCountGuest)
    scoreHome.textContent = scoreCountHome;
    scoreGuest.textContent = scoreCountGuest;
}