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
    //variable to hold the audio command
    var music = document.getElementById("background-music");
    //logic to push progress, wins and losses to the page
    $("#potion-progress").text(potionProgress);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    //logic to set the cauldron image at startup
    function setCauldron() {
        var cauldronImg = $("<img>");
        cauldronImg.attr("src", "./assets/images/cauldron-4564688_1920.png");
        cauldronImg.addClass("card-img-top");
        $("#brewing").append(cauldronImg);
    }
    setCauldron();
    //function to restart the game upon win/loss
    function reset() {
        $("#brewing").empty();
        setCauldron();
        potionValue = Math.floor(Math.random() * 101 + 19);
        $("#potion-score").text("Target Potion Value: " + potionValue);
        magnesiumPyrite = Math.floor(Math.random() * 11 + 1);
        amethyst = Math.floor(Math.random() * 11 + 1);
        dragonGlass = Math.floor(Math.random() * 11 + 1);
        heartstone = Math.floor(Math.random() * 11 + 1);
        potionProgress = 0;
        $("#potion-progress").text(potionProgress);
    }
    //compare function
    function checkForWinLoss() {
        if (potionProgress === potionValue) {
            win();
        }
        else if (potionProgress > potionValue) {
            loss();
        }
    }
    //function to run on a win condition
    function win() {
        $("#success")[0].play();
        wins++;
        $("#wins").text("Wins: " + wins);
        setTimeout(reset, 5 * 1000);
    }
    //logic to set the explosion img on a loss
    function setExplosion() {
        var explosionImg = $("<img>");
        explosionImg.attr("src", "./assets/images/explosion.jpg");
        explosionImg.addClass("card-img-top");
        $("#brewing").append(explosionImg);
    }
    //function to run on a loss condition
    function loss() {
        $("#explosion")[0].play();
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#brewing").empty();
        setExplosion();
        setTimeout(reset, 5 * 1000);
    }
    //set click function and passthrough logic for each click
    $("#magnesium-pyrite").on("click", function () {
        potionProgress = potionProgress + magnesiumPyrite;
        $("#potion-progress").text(potionProgress);
        checkForWinLoss();
        $("#crystalAdd")[0].play();
    });
    $("#amethyst").on("click", function () {
        potionProgress = potionProgress + amethyst;
        $("#potion-progress").text(potionProgress);
        checkForWinLoss();
        $("#crystalAdd")[0].play();
    });
    $("#dragon-glass").on("click", function () {
        potionProgress = potionProgress + dragonGlass;
        $("#potion-progress").text(potionProgress);
        checkForWinLoss();
        $("#crystalAdd")[0].play();
    });
    $("#heartstone").on("click", function () {
        potionProgress = potionProgress + heartstone;
        $("#potion-progress").text(potionProgress);
        checkForWinLoss();
        $("#crystalAdd")[0].play();
    });
    music.play();
});
