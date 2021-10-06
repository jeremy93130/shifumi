const PIERRE = 1;
const PAPIER = 2;
const CISEAUX = 3;


var result = document.getElementById("h1")
var showScoreMiss = document.getElementById("miss")
var showScoreMe = document.getElementById("you")
var stop = document.getElementsByClassName("button")
var image = document.getElementById("rps")
var scoreMe = 0
var scoreMiss = 0
var end = 0

function reInit() {
    document.getElementById("ok").style.display = "none"
    document.getElementById("play").style.display = "block"
    scoreMe = 0
    scoreMiss = 0
    showScoreMe.innerHTML = "Vous"
    showScoreMiss.innerHTML = "Madame Zouzou"
    result.innerHTML = "Début du jeu"
}

function gameOver() {
    document.getElementById("ok").style.display = "block"
    document.getElementById("play").style.display = "none"
}

function historic(num) {
    var you = {
        name = "you",
        score = scoreMe
    }
    for (var i = 0; i = score ; i++){
        switch (num) {
            case scoreMe = 3 :
                
        }
    }
}


/**
 * on joue PIERRE
 */
function playRoc() {
    setImage(PIERRE,image)

    console.log("Pierre !")

    var random = generatedRandom()

    setImage(random)


    if (random == PIERRE) {
        result.innerHTML = "Égalité"


    } else if (random == PAPIER) {
        result.innerHTML = "Madame Zouzou a gagné des provisions de bierre !"
        scoreMiss += 1
        showScoreMiss.innerHTML = `+ ${scoreMiss} pour Madame Zouzou`
    } else { // (random == CISEAUX)
        scoreMe += 1
        showScoreMe.innerHTML = `+ ${scoreMe} pour vous !`
    }


    if (scoreMiss == 3) {
        result.innerHTML = `Madame Zouzou a gagné avec un score de ${scoreMiss}`
        gameOver()
    } else if (scoreMe == 3) {
        result.innerHTML = `Vous avez gagné avec un score de ${scoreMe}`
        gameOver()
    }
}





function playPaper() {
    setImage(PAPIER,image)
    var random = generatedRandom()
    setImage(random)

    if (random == 1) {
        result.innerHTML = "Vous avez gagné !"
        scoreMe += 1
        showScoreMe.innerHTML = `+ ${scoreMe} pour vous !`
    } else if (random == 2) {
        result.innerHTML = "Égalité"
    } else {
        result.innerHTML = "Madame Zouzou a gagné des provisions de bierre ! "
        scoreMiss += 1
        showScoreMiss.innerHTML = `+ ${scoreMiss} pour Madame Zouzou`
    }

    if (scoreMiss == 3) {
        result.innerHTML = `Madame Zouzou a gagné avec un score de ${scoreMiss}`
        gameOver()
    } else if (scoreMe == 3) {
        result.innerHTML = `Vous avez gagné avec un score de ${scoreMe}`
        gameOver()
    }
}

function playSissors() {
    setImage(CISEAUX,image)
    var random = generatedRandom()
    setImage(random)

    if (random == 1) {
        result.innerHTML = "Madame Zouzou a gagné des provisions de bierre ! "
        scoreMiss += 1
        showScoreMiss.innerHTML = `+ ${scoreMiss} pour Madame Zouzou`
    } else if (random == 2) {
        result.innerHTML = "Vous avez gagné !"
        scoreMe += 1
        showScoreMe.innerHTML = `+ ${scoreMe} pour vous !`
    } else {
        result.innerHTML = "Égalité"
    }

    if (scoreMiss == 3) {
        result.innerHTML = `Madame Zouzou a gagné avec un score de ${scoreMiss}`
        gameOver()
    } else if (scoreMe == 3) {
        result.innerHTML = `Vous avez gagné avec un score de ${scoreMe}`
        gameOver()
    }
}

function generatedRandom() {
    var min = 1;
    var max = 3;

    return Math.floor(Math.random() * (max - min + 1) + min)
}

function setImage(num, img = document.getElementById("zouzou")) {
    switch (num) {
        case PIERRE:
            img.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg");
            break
        case PAPIER:
            img.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg");
            break
        case CISEAUX:
            img.setAttribute("src", "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg");
    }
}


