// string constants
const ROCK = "Rock"
const PAPER = "Paper"
const SCISSORS = "Scissors"
const INPUT_MSG = "Enter [Rock|Paper|Scissors]: "
const DRAW_MSG = "Draw!"
const WINNER_MSG = "You Win! ** beats *"
const LOSER_MSG = "You Lose! ** beats *"

// integer constants
const ZERO = 0
const ONE = 1
const TWO = 2
const THREE = 3

// boolean constants
const HUMAN = true

// player scores
let humanScore = ZERO
let computerScore = ZERO


// return computer choice at random
function getComputerChoice() { 
    return (() => {
        // get random number 0-2
        let choice = Math.floor(Math.random() * THREE)
        // return choice
        switch (choice) {
            case ZERO: return ROCK
            case ONE: return PAPER
            default: return SCISSORS
        }
    })() 
}

// returns string with first letter upper cased
function toTitleCase(string) {
    let temp = string.toLowerCase()
    temp = temp[ZERO].toUpperCase() + temp.slice(ONE)
    return temp
}

// prompts user for rock, paper, scissors input
function getHumanChoice() {
    // assign temp value
    let choice = null
    // loop until valid input
    while(true) {
        // get user input
        let temp = prompt(INPUT_MSG)
        // make string TitleCased
        let input = toTitleCase(temp)
        // check input & assign choice if valid
        switch (input) {
            case ROCK:
            case PAPER:
            case SCISSORS: choice = input; break;
        }
        // break from loop when input valid
        if (choice != null) break
    }
    return choice
}

// return a choice according to player
function getChoice(player) {
    return (() => {
        switch(player) {
            case HUMAN: return getHumanChoice()
            default: return getComputerChoice()
        }
    })()
}

// increases score according to winning player
function increaseScore(winner) {
    if (winner == HUMAN) { humanScore++ }
    else { computerScore++ }
}

// iterates a single round & increases scores according to winner
function playRound(humanChoice, computerChoice) {
    let output = null
    switch(humanChoice) {
        case ROCK:
            {   // computer choices & outcomes
                switch(computerChoice) {
                    case ROCK: { output = DRAW_MSG }; break;
                    case PAPER: { 
                        output = LOSER_MSG 
                        increaseScore()
                    }; break;
                    default: { 
                        output = WINNER_MSG 
                        increaseScore(HUMAN)
                    }; break;
                }
            }; break;
        case PAPER:
            {   // computer choices & outcomes
                switch(computerChoice) {
                    case ROCK: { 
                        output = WINNER_MSG 
                        increaseScore(HUMAN)
                    }; break;
                    case PAPER: { output = DRAW_MSG }; break;
                    default: { 
                        output = LOSER_MSG 
                        increaseScore()
                    }; break;
                }
            }; break;
        default:
            {   // computer choices & outcomes
                switch(computerChoice) {
                    case ROCK: { 
                        output = LOSER_MSG 
                        increaseScore()
                    }; break;
                    case PAPER: {
                        output = WINNER_MSG
                        increaseScore(HUMAN)
                    }; break;
                    default: { output = DRAW_MSG }; break;
                }
            }; break;
    }
    alert(output)
    alert(`SCORE:\nPlayer: ${humanScore}    Computer: ${computerScore}`)
}


playRound(getChoice(HUMAN), getChoice())