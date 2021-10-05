var result = document.getElementById("h1")
var scored = document.getElementById("miss")
var results = document.getElementById("you")
var stop = document.getElementsByClassName("button")
var scoreMe = 0
var scoreMiss = 0
var stopGame = 0
function show() {
    var image = document.getElementById("rps")
    image.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")

    console.log("Pierre !")

    var random = generatedRandom()

    setImage(random)


    if (random == 1) {
        result.innerHTML = "Égalité"
        stopGame += 1


    } else if (random == 2) {
        result.innerHTML = "Madame Zouzou a gagné des provisions de bierre !"
        scoreMiss += 1
        stopGame += 1
        scored.innerHTML = `+ ${scoreMiss} pour Madame Zouzou`
    } else {
        scoreMe += 1
        stopGame += 1
        results.innerHTML = `+ ${scoreMe} pour vous !`
    }


    if (scoreMiss == 3 || (scoreMe < scoreMiss && stopGame === 5)) {
        result.innerHTML = `Madame Zouzou a gagné avec un score de ${scoreMiss}`
        scoreMiss = 0
        scoreMe = 0
    } else if (scoreMe == 3 || (scoreMiss < scoreMe && stopGame === 5)) {
        result.innerHTML = `Vous avez gagné avec un score de ${scoreMe}`
        scoreMe = 0
        scoreMiss = 0
    }
}





function showing() {
    var image = document.getElementById("rps")
    image.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
    console.log("Papier !")
    var random = generatedRandom()
    setImage(random)

    if (random == 1) {
        result.innerHTML = "Vous avez gagné !"
        scoreMe += 1
        stopGame += 1
        results.innerHTML = `+ ${scoreMe} pour vous !`
    } else if (random == 2) {
        result.innerHTML = "Égalité"
        stopGame += 1
    } else {
        result.innerHTML = "Madame Zouzou a gagné des provisions de bierre ! "
        scoreMiss += 1
        stopGame += 1
        scored.innerHTML = `+ ${scoreMiss} pour Madame Zouzou`
    }

    if (scoreMiss == 3 || (scoreMe < scoreMiss && stopGame === 5)) {
        result.innerHTML = `Madame Zouzou a gagné avec un score de ${scoreMiss}`
        scoreMiss = 0
        scoreMe = 0
    } else if (scoreMe == 3(scoreMiss < scoreMe && stopGame === 5)) {
        result.innerHTML = `Vous avez gagné avec un score de ${scoreMe}`
        scoreMiss = 0
        scoreMe = 0
    }
}

function showed() {
    var image = document.getElementById("rps")
    image.setAttribute("src", "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
    console.log("Ciseaux !")
    var random = generatedRandom()
    setImage(random)

    if (random == 1) {
        result.innerHTML = "Madame Zouzou a gagné des provisions de bierre ! "
        scoreMiss += 1
        stopGame += 1
        scored.innerHTML = `+ ${scoreMiss} pour Madame Zouzou`
    } else if (random == 2) {
        result.innerHTML = "Vous avez gagné !"
        scoreMe += 1
        stopGame += 1
        results.innerHTML = `+ ${scoreMe} pour vous !`
    } else {
        result.innerHTML = "Égalité"
        stopGame += 1
    }

    if (scoreMiss == 3 || (scoreMe < scoreMiss && stopGame === 5)) {
        result.innerHTML = `Madame Zouzou a gagné avec un score de ${scoreMiss}`
        scoreMiss = 0
        scoreMe = 0
    } else if (scoreMe == 3(scoreMiss < scoreMe && stopGame === 5)) {
        result.innerHTML = `Vous avez gagné avec un score de ${scoreMe}`
        scoreMiss = 0
        scoreMe = 0
    }
}

function generatedRandom() {
    var min = 1;
    var max = 3;

    return Math.floor(Math.random() * (max - min + 1) + min)
}

function setImage(num) {
    var random = document.getElementById("zouzou")
    if (num == 1) {
        random.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")
    } else if (num == 2) {
        random.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
    } else {
        random.setAttribute("src", "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
    }
}
