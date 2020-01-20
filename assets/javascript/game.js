//Jquery ready function
$(document).ready(function () {
    var potionValue = Math.floor(Math.random() * 101 + 19)
    $("#potion-score").text("Target Potion Value: " + potionValue);
    //variables for each button to hold the randomly assigned value
    var magnesiumPyrite = Math.floor(Math.random() * 11 + 1);
    var amethyst = Math.floor(Math.random() * 11 + 1);
    var dragonGlass = Math.floor(Math.random() * 11 + 1);
    var heartstone = Math.floor(Math.random() * 11 + 1);
    //variables to hold win/loss values
    var wins = 0;
    var losses = 0;
    //variable to hold potion progress value
    var potionProgress = 0;
    //logic to push progress, wins and losses to the page
    $("#potion-progress").text(potionProgress);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
});

//function to restart the game upon win/loss
function reset(){
    potionValue = Math.floor(Math.random() * 101 + 19);
    $("#potion-score").text("Target Potion Value: " + potionValue);
    magnesiumPyrite = Math.floor(Math.random() * 11 + 1);
    amethyst = Math.floor(Math.random() * 11 + 1);
    dragonGlass = Math.floor(Math.random() * 11 + 1);
    heartstone = Math.floor(Math.random() * 11 + 1);
    potionProgress = 0;
    $("#potion-progress").text(potionProgress);
}



