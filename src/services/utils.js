const calculatePlayedHand = (player, games) => {
    const plays = [0, 0, 0]

    games.forEach(game => {
        if(game.playerA.name===player) {
            if(game.playerA.played==="ROCK") {
                plays[0] +=1
            }
            else if(game.playerA.played==="PAPER") {
                plays[1] +=1
            }
            else {
                plays[2] +=1
            }
        }
        else {
            if(game.playerB.played==="ROCK") {
                plays[0] +=1
            }
            else if(game.playerB.played==="PAPER") {
                plays[1] +=1
            }
            else {
                plays[2] +=1
            }
        }
    })
    const index = plays.indexOf(Math.max(...plays))

    if(index===0) {
        return "ROCK"
    }
    else if(index===1) {
        return "PAPER"
    }
    else {
        return "SCISSORS"
    }
}

const calculateWinRatio = (player, games) => {
    let wins = 0.0

    games.forEach(game => {
        if(game.playerA.name===player) {
            if(game.playerA.played==="ROCK" && game.playerB.played==="SCISSORS") {
                wins +=1
            }
            else if(game.playerA.played==="PAPER" && game.playerB.played==="ROCK") {
                wins +=1
            }
            else if(game.playerA.played==="SCISSORS" && game.playerB.played==="PAPER") {
                wins +=1
            }
        }
        else {
            if(game.playerB.played==="ROCK" && game.playerA.played==="SCISSORS") {
                wins +=1
            }
            else if(game.playerB.played==="PAPER" && game.playerA.played==="ROCK") {
                wins +=1
            }
            else if(game.playerB.played==="SCISSORS" && game.playerA.played==="PAPER") {
                wins +=1
            }
        }
    })

    return (wins/games.length*100).toFixed(2)
}

export default {calculatePlayedHand, calculateWinRatio}