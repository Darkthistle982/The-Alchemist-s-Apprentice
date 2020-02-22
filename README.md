# Crystal Collector Game

## Table of Contents
* Application rules/Operation
* Tech used
* Details of applicaiton
* Link to Live Project

## Application rules/Operation

The basic app generates a random value to the Target Potion Value field and displays it. The user then clicks one of the crystal buttons which each have a random value assigned to them, which then passes the value into the potion progress field. Each crystal has a different value and they are added to the potion progress field on each click. The goal is to get an exact match on your potion progress field to the Target Potion Value displayed above. If you match the exact value, a win state is triggered, the win counter increases, and the game restarts. If you go over the value, then the lose state is triggered, the loss tracker is incremented and the game is reset. 

## Tech used
* HTML
* Bootstrap
* CSS
* Javascript
* JQuery
* Google Fonts
* Audio track from Incompetech.com 

Credit to Music from https://filmmusic.io
        "Sneaky Snitch" by Kevin MacLeod (https://incompetech.com)
        License: CC BY (http://creativecommons.org/licenses/by/4.0/)

"Splash, Small, A.wav" by InspectorJ (www.jshaw.co.uk) of Freesound.org


## Details of application
* Each button is assigned a random number between 1 and 12.
* The target Potion Value is randomly generated as a number between 19 and 120.
* The value assigned to each crystal button is hidden from the user. 
* A new game starts, and the values are reset on every win or loss. 
* A full page refresh will wipe the win/loss tracking.

### Link to Live Project: https://darkthistle982.github.io/The-Alchemist-s-Apprentice/
