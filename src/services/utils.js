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
        if(player===game.winner) {
            wins+=1;
        }
    })

    return (wins/games.length*100).toFixed(2)
}

export default {calculatePlayedHand, calculateWinRatio}