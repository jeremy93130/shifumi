function show(rock) {
    var button = document.getElementById("rock")
    var image = document.getElementById("rps")
    image.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")
    console.log("Pierre !")
}

function showing(paper) {
    var button = document.getElementById("paper")
    var image = document.getElementById("rps")
    image.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
    console.log("Papier !")
}

function showed(scissors){
    var button = document.getElementById("scissors")
    var image = document.getElementById("rps")
    image.setAttribute("src", "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
    console.log("Ciseaux !")
}