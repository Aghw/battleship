// console.log("I'm here!");
var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location1 + 2;

var guess;  //this variable holds the number guessed by he user
var hits = 0; //this variable holds the total number hits
var guesses = 0; //this variable holds the total number of guesses

var isSunk = false; // this variable becomes true when the battleship is sunk


while (isSunk == false ) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6): ");

    if( guess < 0 ) {
          alert("Please enter a valid cell number!");
      } else {
          guesses = guesses + 1;

          if ( guess == location1 || guess == location2 || guess == location3  ) {
              hits = hits + 1;
              alert("HIT!");

              if ( hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
              }
            }
                else {
                alert("MISS");
            }
        }

}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + (3/guesses);
alert(stats);
