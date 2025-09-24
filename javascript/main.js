// runs a 5 round game of Rock-Paper-Scissors
function playGame() {
    
    // string constants
    const PLAYER = "Player"
    const COMPUTER = "Computer"
    const ROCK = "Rock"
    const PAPER = "Paper"
    const SCISSORS = "Scissors"
    const ASTERISK = "*"
    const ASTERISK2 = "**"
    const DRAW_MSG = "Draw!"
    const ROUND_WIN_MSG = "You Win! ** beats *"
    const ROUND_LOSE_MSG = "You Lose! ** beats *"
    const GAME_WIN_MSG = "* Wins the Game!"
    const GAME_DRAW_MSG = "Draw Game!"
    
    // integer constants
    const ZERO = 0
    const ONE = 1
    const THREE = 3
    
    // boolean constant
    const HUMAN = true
    
    // player scores
    let humanScore = ZERO
    let computerScore = ZERO
    
    
    // increases score according to winning player
    function increaseScore(winner) {
        if (winner == HUMAN) { humanScore++ }
        else { computerScore++ }
    }
    
    // updates message to display winner & loser choices
    function getFormattedMsg(message, humanChoice, computerChoice) {
        // assign temp value
        let formatted = null
        // format wining message
        if (message == ROUND_WIN_MSG) {
            formatted = message
                .replace(ASTERISK2, humanChoice)
                .replace(ASTERISK, computerChoice)
        } else {
            // format losing message
            formatted = message
                .replace(ASTERISK2, computerChoice)
                .replace(ASTERISK, humanChoice)
        }
        return formatted
    }
    
    // iterates a single round & increases scores according to winner
    function playRound(humanChoice, computerChoice) {
        // assign temp value
        let output = null
        // check choices
        switch(humanChoice) {
            case ROCK:
                {   // computer choices & outcomes
                    switch(computerChoice) {
                        case ROCK: { output = DRAW_MSG }; break;
                        case PAPER: { 
                            output = getFormattedMsg(
                                ROUND_LOSE_MSG, humanChoice, computerChoice
                            )
                            increaseScore()
                        }; break;
                        default: { 
                            output = getFormattedMsg(
                                ROUND_WIN_MSG, humanChoice, computerChoice
                            )
                            increaseScore(HUMAN)
                        }; break;
                    }
                }; break;
            case PAPER:
                {   // computer choices & outcomes
                    switch(computerChoice) {
                        case ROCK: { 
                            output = getFormattedMsg(
                                ROUND_WIN_MSG, humanChoice, computerChoice
                            )
                            increaseScore(HUMAN)
                        }; break;
                        case PAPER: { output = DRAW_MSG }; break;
                        default: { 
                            output = getFormattedMsg(
                                ROUND_LOSE_MSG, humanChoice, computerChoice
                            )
                            increaseScore()
                        }; break;
                    }
                }; break;
            default:
                {   // computer choices & outcomes
                    switch(computerChoice) {
                        case ROCK: { 
                            output = getFormattedMsg(
                                ROUND_LOSE_MSG, humanChoice, computerChoice
                            )
                            increaseScore()
                        }; break;
                        case PAPER: {
                            output = getFormattedMsg(
                                ROUND_WIN_MSG, humanChoice, computerChoice
                            )
                            increaseScore(HUMAN)
                        }; break;
                        default: { output = DRAW_MSG }; break;
                    }
                }; break;
        }
        
        // display results
        alert(output)
        alert(`SCORE:\nPlayer: ${humanScore}    Computer: ${computerScore}`)
        
        // check if game is over
        if(humanScore == THREE || computerScore == THREE) {
            // assign winner
            let winner = null
            if (humanScore > computerScore) { winner = PLAYER }
            else if (computerScore > humanScore) { winner = COMPUTER }
            
            // display end-game results
            if (winner == null) { alert(GAME_DRAW_MSG) }
            else { alert(GAME_WIN_MSG.replace(ASTERISK, winner)) }
            
            alert("Starting New Game!")
            
            // reload page to reset scores
            window.location.reload()
        }
    }
    
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
        let titleCased = string.toLowerCase()
        titleCased = titleCased[ZERO].toUpperCase() + titleCased.slice(ONE)
        return titleCased
    }
    
    // assign listeners to html elements
    function setup() {
        // add click listener to buttons
        let buttons = document.querySelectorAll("button")
        buttons.forEach((it) => {
            it.addEventListener(
                "click", 
                () => playRound(toTitleCase(it.textContent), getComputerChoice())
            )
        })
    }
    
    // setup game html elements
    setup()
}

// run the game
playGame()