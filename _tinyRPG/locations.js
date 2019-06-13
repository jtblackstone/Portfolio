var rooms = {

    // Starting location, stretch of desert

    "begin": {

        "description": "You are standing next to a camel path\
        in a hot and lonely stretch of desert\
        The path continues to the <b>east<b>,\ and you see a smudge in the distance to the <b>north</b>",

        "directions": {
            "east": "Oasis",
            "north": "boulder"
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















