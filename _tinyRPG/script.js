// locations will migrate back to its own js file eventually
// reegx to parse words rather than limiting teh dictionary

const rooms = {

    // Starting location, stretch of desert

    "begin": {

        "description": "You are standing next to a camel path\
        in a hot and lonely stretch of desert\
        The path continues to the <b>east</b>,\ and you see a smudge in the distance to the <b>north</b>",

        "directions": {
            "east": "oasis",
            "north": "boulder",
            "east": "You are lost in the desert",
            "west": "You are lost in the desert"
        }
        // shovel needed to dig, get canteen, enter water, fill canteen
    },
    "oasis": {
        "description": "There is a pool of water\ and a canteen beside the pool and a shovel",
        "directions": {
            "west": "begin",
            "north": "You are lost in the desert",
            "east": "You are lost in the desert",
            "south": "You are lost in the desert"
        }
    },

    // dig here, opens hole - true pyramid entrance

    "boulder": {
        "description": "You see a large boulder sitting on the sand\
        and a pyramid far to the north",

        "directions": {
            "north": "pyramid door",
            "south": "begin",
            "east": "You are lost in the desert",
            "west": "You are lost in the desert"
        },

        // false door Squish! lol

        "pyramidDoor": {

            "description": "You stand in front of an ancient stone door,\
             a faint mustiness tickles your nose as you breathe in desert heat\
             A large key lies, half buried in the sand\
             It appears to fit the keyhole in the stone door"
        },
        // Aaaaaand squish
        "actionDoor": {

            "description": "As you insert the large key into the keyhole and turn it,\
                a large stone block falls on you.\
                You have died"

        },

        // pull lever, door opens, enter the tunnel to the pyramid underside

        "hole": {

            "description": "As you dig in the sand, you uncover a small cave.\
            You see a Lever and a small door."


        }


    }

}

// series of arrays storing commands and items as well as an object of objects for the state of the current game

let firstTroom = "begin";
let userInput = ["go", "north", "east", "south", "west", "get", "pickup", "inventory", "say", "attack", "up", "down"];
let history = [];
let inventory = ["canteen", "shovel", "torch", "lantern", "lighter", "matches", "rope", "sceptre"];
let playerInput;
let currentGameText;
let currentGameState = { "begin": false, "name": true, "oasis": false, "boulder": false };

var input = document.getElementById("playerText");

/* const player = require("./player.js");
const Item = require("./item.js").default.default;              // from when I was building in node. will return to building it in node soon
const locations = require("./locations.js");


*/




$(document).ready(function () {

    setText("Choose a character name: ");           // game begins on page load, will change to a start button later


    /*  function KeyboardHandler(event) {
  
          if (event.keycode == 13) {
  
              MyFunction()
  
          }
  
      } */


    $("#submitButton").click(function () {          // enter a char name. Name will be repeated back, inserted into various speeches 'Bob, you are standing lorem ipsum

        playerInput = getPlayerInput();

        if (currentGameState["name"] === true) {

            const playerName = playerInput;
            currentGameState["name"] = false;       // setting the starting state of the character name, location
            currentGameState["begin"] = true;
            history.push("begin");
            console.log(playerInput);
            currentGameText = rooms["begin"].description;       // giving the beginning description
            setText(playerName + ", " + currentGameText);



            console.log('history:', history);




        }

        else if (currentGameState["begin"] === true) { // continue for each location

            console.log(playerInput.toLowerCase());     // testing output to be removed

            chooseBeginDir(playerInput);

        }



    })

    function beginOasis() {             // movement through the loc's abbr for locations another holdover from EQ heh

        setText(rooms["oasis"].description);

    }

    function beginBoulder() {

        setText(rooms["boulder"].description)

    }

    function chooseBeginDir(direction) {
        const chooseDir = direction.toLowerCase(); // assign toLowerCase in one place, apply to all
        console.log(chooseDir);
        if (chooseDir !== "go back") {

            history.push(chooseDir);
        }

        console.log('history:', history);

        if (chooseDir === "east") {

            currentGameState["oasis"] = true;
            beginOasis();

        }

        else if (chooseDir === "north") {

            currentGameState["boulder"] = true;
            beginBoulder();

        }

        else if (chooseDir === "south" || chooseDir === "west") {       // if you enter a dir that doesn't lead to a proper loc then you are lost, history to reverse directions

            setText("You are lost in the desert")

        }

        else if (chooseDir === "go back") {

            var prevDir = history.pop();
            console.log('history:', history);
            console.log(prevDir);

        }

        else {

            setText("I do not understand what you said")        // any entry that doesn't match action words or object names without an action word preceeding it

        }



    }

    function setText(input) {

        currentGameText = $("#gameText").html(input);           // taking player commands, and returning the storyline

    }

    function getPlayerInput() {

        let text = $("#playerText").val();

        $("#playerText").val("");
        return text;

    }

})





console.log($("#gameText"));

// To change locations: goLoc, directions array [loc] (Holdover from playing EQ)

/* function goLoc(direct) {

    if (locations[curLoc])

} */