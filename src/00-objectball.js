function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

function allPlayers() {
    const homePlayers = gameObject().home.players
    const awayPlayers = gameObject().away.players
    return{...homePlayers, ...awayPlayers}
}

function numPointsScored(playerName){
    return allPlayers()[playerName].points
}

function shoeSize(playerName){
    return allPlayers()[playerName].shoe
}

function teamColors(teamName){
    if (gameObject().away.teamName === teamName){
        return gameObject().away.colors
    }
    if (gameObject().home.teamName === teamName){
        return gameObject().home.colors
    }
    else return 'No team found'
}

function teamNames(){
    return [gameObject().home.teamName, gameObject().away.teamName]
}

function playerNumbers(teamName) {
    const game = gameObject();
    let players;

    if (game.away.teamName === teamName) {
        players = game.away.players;
    } else if (game.home.teamName === teamName) {
        players = game.home.players;
    } else {
        return 'No team with that name';
    }

    const jerseyNumbers = Object.values(players).map(player => player.number);

    return jerseyNumbers;
}

function playerStats(playerName){
    return allPlayers()[playerName]
  }

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0

    const allPlayers = { ...game.home.players, ...game.away.players }

    for (const player in allPlayers) {
        if (allPlayers[player].shoe > largestShoeSize) {
            largestShoeSize = allPlayers[player].shoe
            rebounds = allPlayers[player].rebounds
        }
    }

    return rebounds
}

function mostPointsScored() {
    const game = gameObject()
    let mostPoints = 0;
    let topScorer = "";

    const allPlayers = {...game.home.players, ...game.away.players }

    for (const player in allPlayers) {
        if (allPlayers[player]. points > mostPoints) {
            mostPoints = allPlayers[player].points
            topScorer = player
        }
    }

    return topScorer
}

