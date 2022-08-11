let scoreHome = document.getElementById("score-displayed-home");
let scoreAway = document.getElementById("score-displayed-away");

let sumHome = 0;
let sumAway = 0;


function add1PointHome() {
    sumHome += 1;
    scoreHome.textContent = sumHome;
}

function add1PointAway() {
    sumAway += 1;
    scoreAway.textContent = sumAway;
}

function add2PointsHome() {
    sumHome += 2;
    scoreHome.textContent = sumHome;
}

function add2PointsAway() {
    sumAway += 2;
    scoreAway.textContent = sumAway;
}

function add3PointsHome() {
    sumHome += 3;
    scoreHome.textContent = sumHome;
}

function add3PointsAway() {
    sumAway += 3;
    scoreAway.textContent = sumAway;
}

function newGame() {
    sumHome = 0;
    sumAway = 0;
    scoreHome.textContent = sumHome;
    scoreAway.textContent = sumAway;
}