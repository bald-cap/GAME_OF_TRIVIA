//Question / Songs Structure

class Song{
    constructor( lyrics, language){
        this.lyrics = lyrics
        this.category = language
        this.next = null
    }
}

class Playlist{
    constructor(){
        this.head = null
        this.tail = null
        this.listLength = 0
        this.language = ""
    }

    IsEmpty(){
        return this.head === null
    }

    FirstSong(){
        if (this.IsEmpty()){
            return null
        }

        return this.head
    }

    AddSong(artist, lyrics){
        let newSong = new Song(artist, lyrics)

        if (this.IsEmpty() || this.head.idSong.id > newSong.idSong.id){
            newSong.next = this.head
            this.head = newSong
            return
        }

        let prev = this.head
        let pos = this.head.next
        while(pos != null){
            if (pos.idSong.id > this.head){
                newSong.next = pos
                prev.next = newSong
            }
            prev = pos
            pos = pos.next
        }
        this.listLength++
    }

    RemoveSong(id,artist){
        let oldSongId = new idSong(id, artist)

        if (this.IsEmpty()){
            return "Empty"
        }

        if (this.head.idSong === oldSongId){
            this.head = this.head.next

            if (this.head === null){
                this.tail = null
            }
            return
        }

        let prev = this.head
        let pos = this.head.next
        while (pos != null){
            if (pos.idSong === oldSongId){
                prev.next = pos.next
                if (pos === this.tail){
                    this.tail = prev
                }
            }
            prev = pos
            pos = pos.next
        }
    }

    AppendSong(id, artist, lyrics, language){
        let newSongId = new idSong(id, artist)
        let newSong = new Song(newSongId, lyrics, language)

        if (this.IsEmpty()){
            this.head = newSong
            this.tail = newSong
            this.listLength++
            return
        }
        this.tail.next = newSong
        this.tail = newSong
        this.listLength++
    }

    Length(){
        return this.listLength
    }

    RandomSongAux(iteration){
        if (this.IsEmpty()){
            return null
        }

        if (this.listLength < iteration){
            return null
        }

        let pos = this.head
        for (let i = 0; i < iteration; i++){
            pos = pos.next
        }

        return iteration
    }
}


//Players ranking, and identification

class idPlayer{
    constructor(name, idPro){
        this.name = name
        this.idPro = idPro
    }
}

class player{
    constructor(idPlayer, score){
        this.idPlayer = idPlayer
        this.score = score
        this.next = null
    }

    CalculPoints(name, idPro, correct){
        let playerID = new idPlayer(name, idPro)

        if (this.idPlayer === playerID){
            if (correct){
                this.score += 15
            }
        }
    }

}

class Leaderboard{
    constructor(){
        this.head = null
        this.tail = null
        this.numPlayers = 0
    }

    Length(){
        return this.numPlayers
    }

    AddPlayers(name, idPro, score){
        let playerID = new idPlayer(name, idPro)
        let newPlayer = new player(playerID, score)
        if (this.head===null){
            this.head = newPlayer
            this.tail = newPlayer
            this.numPlayers++
            return
        }

        if (newPlayer.score > this.head.score){
            newPlayer.next = this.head
            this.head = newPlayer
            this.numPlayers++
            return
        }

        let prev = this.head
        let pos = this.head.next

        while (pos != null){
            if (newPlayer.score > pos){
                newPlayer.next = pos
                prev.next = newPlayer
            }

            prev = pos
            pos = pos.next
        }
        this.numPlayers++
    }

    RemovePlayers(){
        let prev = this.head
        let pos = this.head.next
        let oldPlayers = []

        while (pos != null){

            if (prev.next.score > pos.next.score){
                oldPlayers.push(pos.next)
                prev.next = pos.next.next
            }

            prev = pos
            pos = pos.next
        }

        return oldPlayers
    }

    RankPlayers(){
        let oldPlayers = this.RemovePlayers()

        for(let i = 0; i < oldPlayers.length; i++){
            this.AddPlayers(oldPlayers[i].idPlayer.name, oldPlayers[i].idPlayer.idPro, oldPlayers[i].score)
        }
    }
}
//INDEX HTML : HOMEPAGE

//Introduction
let landingNav = document.querySelector(".landing-nav")
let introWrapper = document.querySelector("#landing")

//Login
let userNav = document.querySelector(".user-id-nav")
let userWrapper = document.querySelector(".user-id-global-wrapper")

    //Select Category
let languageNav = document.querySelector(".select-lang-nav")
let languageWrapper = document.querySelector(".start-btn-lang-wrapper")


// Game section
let gameNav = document.querySelector(".game-header-nav")
let gameWrapper = document.querySelector("#game")

//How-to-play
let htpNav = document.querySelector(".how-to-play-nav")
let htpWrapper = document.querySelector("#about-game")

//leaderboard
let leaderboardNav = document.querySelector(".leaderboard-nav")
let leaderboardWrapper = document.querySelector(".leaderboard-wrapper")

let startBtn = document.querySelector("#start-btn")

//artist-lyrics
let artLyricsNav = document.querySelector(".artist-lyrics-nav")
let artLyricsWrapper = document.querySelector("#songs-list")

//CODER INTRO : ABOUT CODERS PAGE
let coder1 = document.querySelector(".coder1-name")
let coder2 = document.querySelector(".coder2-name")

let coderIntroNav = document.querySelector(".coder-intro-nav")
let coderIntroWrapper = document.querySelector("#coder-intro")

let coderInfoNav = document.querySelector(".coder-info-nav")
let coder1Wrapper = document.querySelector("#coder1")

let coder2Wrapper = document.querySelector("#coder2")

//REPORT PAGE
let reportNav = document.querySelector(".reports-nav")
let reportWrapper = document.querySelector("#bug-wrapper")
let returnReportNav = document.querySelector(".reports-nav a")

let landingNavBtn = document.querySelector(".landing-nav a")
landingNavBtn.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapper.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "flex"
    coderIntroWrapper.style.display = "flex"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

startBtn.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "flex"
    userWrapper.style.display = "flex"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapper.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
});


    //User-id Section
    //Return To Landing
let userReturnBtn = document.querySelector(".return-btn-user")
userReturnBtn.addEventListener('click', function(){
    document.querySelector(".id-ecole").value = ""
    document.querySelector(".id-joueur").value = ""

    landingNav.style.display = "flex"
    introWrapper.style.display = "flex"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapper.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
});

    
let returnLang = document.querySelector(".return-btn-lang")
returnLang.addEventListener('click', function(){
    document.querySelector(".id-ecole").value = ""
    document.querySelector(".id-joueur").value = ""

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "flex"
    userWrapper.style.display = "flex"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapper.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})


let userContactBtn = document.querySelector(".userContactBtn")
userContactBtn.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapper.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "flex"
    coderIntroWrapper.style.display = "flex"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

let userLeaderBtn = document.querySelector(".userLeaderBtn")
userLeaderBtn.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapper.style.display = "none"

    leaderboardNav.style.display = "flex"
    leaderboardWrapper.style.display = "flex"  

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})


let langLeaderBtn = document.querySelector(".langLeaderBtn")
langLeaderBtn.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapper.style.display = "none"

    leaderboardNav.style.display = "flex"
    leaderboardWrapper.style.display = "flex"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

let langContactBtn = document.querySelector(".langContactBtn")
langContactBtn.addEventListener('click', function(){
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "flex"
    coderIntroWrapper.style.display = "flex"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})


let genCurrPlayer
let playBtn = document.querySelector(".play-btn")
playBtn.addEventListener('click', function(){

    let idMirail = document.querySelector(".id-ecole").value
    let username = document.querySelector(".id-joueur").value
    let scoreboardUser = document.querySelector(".scoreboard-user-id strong")
    
    if (idMirail === "" || username === "" ){
        alert("Erreur avec tes logins: Champ Vide")
    } else if(idMirail[0] !== "2" || idMirail.length != 8 || !isDigit(idMirail)){
        alert("Numero étudiant pas valide")
    }else if(!containsDigit(username)){
        alert("Nom d'utlisateur doit comporter des chiffres!")
    }else{
        landingNav.style.display = "none"
        introWrapper.style.display = "none"

        userNav.style.display = "none"
        userWrapper.style.display = "none"

        languageNav.style.display = "flex"
        languageWrapper.style.display = "flex"

        gameNav.style.display = "none"
        gameWrapper.style.display = "none"

        htpNav.style.display = "none"
        htpWrapper.style.display = "none"

        leaderboardNav.style.display = "none"
        leaderboardWrapper.style.display = "none"

        artLyricsNav.style.display = "none"
        artLyricsWrapper.style.display = "none"

        coderIntroNav.style.display = "none"
        coderIntroWrapper.style.display = "none"

        coderInfoNav.style.display = "none"
        coder1Wrapper.style.display = "none"

        coder2Wrapper.style.display = "none"

        reportNav.style.display = "none"
        reportWrapper.style.display = "none"

        scoreboardUser.textContent = username + " " + ":"
    }
    // Create an event listener here that keeps/stores the language/Category chosen
    
        //In event listener above, execute your game function

        //Also update your leaderboard

    // genCurrPlayer = userPlaying(idMirail, username)
})

//Pour les numero d'etudiant
function isDigit(value) { 
    let listNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let v = 0; v < value.length; v++) {
        let isDigitFound = false;
        for (let l = 0; l < listNum.length && !isDigitFound; l++) {
            if (value[v] === listNum[l]) {
                isDigitFound = true;  
            }
        }
        if (!isDigitFound) {
            return false;
        }
    }

    return true;
}

//Pour les nom d'utilisateur
function containsDigit(username) { 
    for (let i = 0; i < username.length; i++) {
        if (username[i] >= '0' && username[i] <= '9') {
            return true;
        }
    }
    return false;
}


function userPlaying(id, name){
    let userId = new idPlayer(name, id)
    let user = new player(userId, 0)
    return user
}


let selectFrench = document.querySelector(".select-french")
selectFrench.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    gameNav.style.display = "flex"
    gameWrapper.style.display = "flex"

    htpNav.style.display = "none"
    htpWrapper.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"

    // fetchSongs("français")
})

let selectEnglish = document.querySelector(".select-eng")
selectEnglish.addEventListener('click', function(){
    gameNav.style.display = "flex"
    gameWrapper.style.display = "flex"

    htpNav.style.display = "none"
    htpWrapper.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"

    // fetchSongs("anglais")
})


let returnGame = document.querySelector(".return-btn-game")
returnGame.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "flex"
    languageWrapper.style.display = "flex"
    
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

let reportBtnGame = document.querySelector(".reportBtnGame")
reportBtnGame.addEventListener('click', function(){
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "flex"
    console.log(reportNav)
    reportWrapper.style.display = "flex"
    console.log(reportWrapper)
})

let returnHtp = document.querySelector(".return-btn-htp")
returnHtp.addEventListener('click', function(){
    gameNav.style.display = "flex"
    gameWrapper.style.display = "flex"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

let returnleader = document.querySelector(".leaderboard-nav .return-btn")
returnleader.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "flex"
    userWrapper.style.display = "flex"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"
    
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

let replayBtn = document.querySelector(".restart-btn")
replayBtn.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "flex"
    languageWrapper.style.display = "flex"
    
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

let contactLeader = document.querySelector(".linkOut1")
contactLeader.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"
    
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "flex"
    coderIntroWrapper.style.display = "flex"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

let htpBtnGame = document.querySelector(".htpBtnGame")
let htpWrapperGame = document.querySelector("#about-game")
htpBtnGame.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "flex"
    htpWrapperGame.style.display = "flex"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
});

let addNewSongNav = document.querySelector(".songslistOutBtn")
addNewSongNav.addEventListener('click', function(){
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "flex"
    artLyricsWrapper.style.display = "flex"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

let returnAddSong = document.querySelector(".return-addSong")
returnAddSong.addEventListener('click', function(){
    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "flex"
    leaderboardWrapper.style.display = "flex"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

let hintBtn = document.querySelector(".hint-btn")
let hintWrapper = document.querySelector(".hint-wrapper")
hintBtn.addEventListener('click', function(){
    if (hintWrapper.style.display === "none"){
        hintWrapper.style.display = "flex"
        hintBtn.style.backgroundColor = "#2F5D86"
        hintBtn.style.color = "whitesmoke"
    }else{
        hintWrapper.style.display = "none"
        hintBtn.style.backgroundColor = "#090811"
        hintBtn.style.color = "#bebcbc"
    }
})
function fetchLeaderboard(){
    const xhr = new XMLHttpRequest()
    let leaderBoardList = []
    xhr.open('GET', 'https://mi-phpmut.univ-tlse2.fr/~21_L2_PROJET/getChampions.php') //TO UPDATE
    xhr.onreadystatechange = function(){
        if (xhr.status === 200 && xhr.readyState === 4){
            let leaderboard = JSON.parse(xhr.responseText)
            leaderBoardList = leaderboard.resultats
            let players = convertFetchedLeaderboard(leaderBoardList)
            updateLeaderboard(players)
        } 
    }
    xhr.send()
}

function updateLeaderboard(leaders) {
    let users = document.querySelectorAll(".LB-user");
    let scores = document.querySelectorAll(".LB-score");
    let listWrapper = document.querySelector(".leaderboard-ranking ol");
    let pos = leaders.head;

    // Update existing elements
    for (let i = 0; i < users.length && pos; i++) {
        users[i].textContent = pos.idPlayer.name;
        scores[i].textContent = pos.score.toString();
        pos = pos.next;
    }

    // Add new elements for extra leaders
    while (pos) {
        let liTag = document.createElement("li");
        let userTag = document.createElement("p");
        let columnTag = document.createElement("p")
        let scoreTag = document.createElement("p");

        userTag.className = "LB-user";
        userTag.textContent = pos.idPlayer.name;

        columnTag.textContent = ":"

        scoreTag.className = "LB-score";
        scoreTag.textContent = pos.score.toString();

        liTag.appendChild(userTag);
        liTag.appendChild(columnTag)
        liTag.appendChild(scoreTag);
        listWrapper.appendChild(liTag);

        pos = pos.next;
    }
}

 
function convertFetchedLeaderboard(response){
    let leaderboard = new Leaderboard()
    for (let i = 0; i < response.length; i++){
        leaderboard.AddPlayers(response[i].prenom + " " + response[i].nom , response[i].noPart, response[i].score)
    }

    return leaderboard
}

function postUserIdentity(idPro, score, time){
    let xhr = new XMLHttpRequest()
    xhr.open('POST','https://mi-phpmut.univ-tlse2.fr/~21_L2_PROJET/postChampion.php')
    xhr.setRequestHeadet("Content-Type", "application/x-www-form-urlencoded")
    xhr.onreadystatechange = function(){
        if (xhr.status === 200 && xhr.readyState === 4){
            let response = JSON.parse(xhr.responseText)
                console.log(response)
        } else{
            alert("Erreur lors de l'enregistrement de votre connexion")
        }
    }

    let data = "noPart=" + idPro + "&score=" + score + "&temps=" + time
    xhr.send(data) 
}


function RandomNumber(max){
    let min = 0
    return Math.floor(Math.random() * (max - min) + min)
}

function RandomNumberAux(num, list){
    for(let i = 0; i < list.length; i++){
        if (list[i] === num){
            return true
        }
    }

    return false
}

function RandomArtistListAux(artist, list){
    for (let i = 0; i < list.length; i++){
        if (artist === list[i]){
            return true
        }
    }
    return false
}

function RandomArtistList(List){
    let list = []

    while (list.length < 3){
        let randoNumber = RandomNumber(List.Length())
        let pos = List.head
        for(let randoArt = 0; randoArt < randoNumber; randoArt++){
            if(!RandomArtistListAux(pos.idSong.artist, list)){
                list.push(pos.idSong.artist)
            }
            pos = pos.next
        }
    }

    return list
}


//Fetch Songs request
function fetchSongs(language){
    const xhr = new XMLHttpRequest()
    let songs = []
    if (language === "français"){
        xhr.open('GET', 'https://mi-phpmut.univ-tlse2.fr/~21_L2_PROJET/getQuestions.php?cat=cf')
    }else if (language === "anglais"){
        xhr.open('GET', 'https://mi-phpmut.univ-tlse2.fr/~21_L2_PROJET/getQuestions.php?cat=ca')  
    }else{
        alert("Categorie n'exsite pas!")
    }
    xhr.onreadystatechange = function(){
        if (xhr.status === 200 && xhr.readyState === 4){
            let response = JSON.parse(xhr.responseText)
                songs =  response.resultats
                let convert = convertFetchedSongs(songs)
                Game(convert, genCurrPlayer)
        }else{
            alert("Erreur lors du téléchargement du jeux")
        }
        
    }
    xhr.send()
}


function convertFetchedSongs(response){
    let questions = new Playlist()
    for (let i= 0; i < response.length; i++){
        questions.AddSong(response[i].nom, response[i].parole)
    }

    return questions
}

function postSongServer(artist, category, lyrics, idStu){
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "https://mi-phpmut.univ-tlse2.fr/~21_L2_PROJET/postParole.php")
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.onreadystatechange = function(){
        if (xhr.status === 200 && xhr.readyState === 4){
            let response = xhr.responseText
            document.querySelector(".songs-form article .success-message").style.display = "flex"
            console.log(response.message)

            setTimeout(function(){
                document.querySelector(".songs-form article .success-message").style.display = "none"
            }, 3000) 

        }else{
            console.log(response.message)
            alert("Erreur lors de l'enrigistrement de la chanson. Merci de réessayer.")

        }
    }

    let data = "par=" + lyrics + "&cat=" + category  + "&chanteur=" + artist + "&noPart=" + idStu
    xhr.send(data)
}



//Game Wrapper
function Game(GPlaylist, Player){
    let pos = GPlaylist.head
    let QueLyrics = document.querySelector(".main-artist-question i")
    let ansBtn = document.querySelectorAll(".response-btn")
    let text = document.querySelectorAll(".ans-text")
    let nextQueBtn = document.querySelector(".next-question")
    let startTime = new Date()

    function QuestionState(){
        QueLyrics.textContent = pos.lyrics
        let ArtistList = RandomArtistList(GPlaylist)
        let ansPos = RandomNumber(3)
        for(let p = 0; p < 4; p++){
            if (p === ansPos){
                ansBtn[p].textContent = pos.idSong.artist
            } else{
                ansBtn[p].textContent = ArtistList[p]
            } 
        }

        
        for (let b = 0; b < ansBtn.length; b++) {
            ansBtn[b].removeEventListener('click', ansClickHandler(b))
            ansBtn[b].addEventListener('click', ansClickHandler(b));
        }
    }

    nextQueBtn.addEventListener('click', function(){
        if (pos.next != null){
            pos = pos.next
            document.querySelector(".scoreboard-points").textContent = Player.score + " " + "points"
            QuestionState()  

        } else{
            nextQueBtn.textContent = "Game Over!"
            nextQueBtn.addEventListener('click', function(){
            landingNav.style.display = "none"
            introWrapper.style.display = "none"

            userNav.style.display = "none"
            userWrapper.style.display = "none"

            languageNav.style.display = "none"
            languageWrapper.style.display = "none"

            gameNav.style.display = "none"
            gameWrapper.style.display = "none"
        
            htpNav.style.display = "none"
            htpWrapperGame.style.display = "none"
        
            leaderboardNav.style.display = "flex"
            leaderboardWrapper.style.display = "flex"

            artLyricsNav.style.display = "none"
            artLyricsWrapper.style.display = "none"

            coderIntroNav.style.display = "none"
            coderIntroWrapper.style.display = "none"

            coderInfoNav.style.display = "none"
            coder1Wrapper.style.display = "none"

            coder2Wrapper.style.display = "none"

            reportNav.style.display = "none"
            reportWrapper.style.display = "none"

            replayBtn.style.display = "flex"

            let timeTaken = endGame(startTime) + ""
            let idUser = genCurrPlayer.idPlayer.idPro + ""
            let userScore = genCurrPlayer.score + ""
            postUserIdentity(idUser, userScore, timeTaken)
            fetchLeaderboard()
            })
        }
    });

    function ansClickHandler(b){
        return function(){
            let checkerWrapper = document.querySelectorAll(".response-btn article")
            let rightImg = document.querySelectorAll(".response-btn article .right")
            let wrongImg = document.querySelectorAll(".response-btn article .wrong")
            for (let i = 0; i < ansBtn.length; i++) {
                // Vérifier si c'est la bonne réponse
                if (ansBtn[i].textContent === pos.idSong.artist) {
                    // Bonne réponse
                    checkerWrapper[i].style.display = "flex";
                    rightImg[i].style.display = "flex";
                    wrongImg[i].style.display = "none";

                    if (i === b) {
                        // Bonne réponse cliquée
                        ansBtn[i].style.backgroundColor = "#090811";
                        text[i].style.color = "whitesmoke";
                        Player.CalculPoints(genCurrPlayer.idPlayer.id, genCurrPlayer.idPlayer.name, true);
                    }
                } else {
                    // Réponses incorrectes ou non sélectionnées
                    if (i === b) {
                        // Mauvaise réponse cliquée
                        checkerWrapper[i].style.display = "flex";
                        rightImg[i].style.display = "none";
                        wrongImg[i].style.display = "flex";
                        ansBtn[i].style.backgroundColor = "#090811";
                        text[i].style.color = "whitesmoke";
                    } else {
                        // Réinitialiser le style pour les réponses non sélectionnées
                        checkerWrapper[i].style.display = "none";
                        ansBtn[i].style.backgroundColor = "#f8f9fa";
                        text[i].style.color = "#090811";
                    }
                }
            }
        }
    }

    QuestionState()
}

function endGame(startTime){
    let endGame = new Date()
    let timeTaken = (endGame - startTime) / 1000
    return timeTaken
}

let artist = document.querySelector(".input-add-artist").value
let category = document.querySelector(".input-add-category").value
let lyrics = document.querySelector(".input-add-lyrics").value
let reportSongBtn = document.querySelector(".signal-wrapper")

reportSongBtn.addEventListener('click', function(){
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "flex"
    reportWrapper.style.display = "flex"
})

let btnAddSong = document.querySelector(".btn-add-song")
btnAddSong.addEventListener('click', function(){
    if(artist === "" || category === "" || lyrics === ""){
        alert("Champs Vide!")
    }else{
        if (category[0] === "f" || category[0] === "F" || category[1] === "f" || category[1] === "F"){
            postSongServer(artist, "cf", lyrics, genCurrPlayer.idPlayer.idPro + "")
            updatePlaylist("français")

        } else if( category[0] === "A" || category[0] === "a" || category[1] === "A" || category[1] === "a"){
            postSongServer(artist, "ca", lyrics, genCurrPlayer.idPlayer.idPro + "")
            updatePlaylist("anglais")

        } else{
            alert("Categorie inconnue!")
        } 
    }
    
})

function updatePlaylist(language){
    const xhr = new XMLHttpRequest()
    let songs = []
    if (language === "français"){
        xhr.open('GET', 'https://mi-phpmut.univ-tlse2.fr/~21_L2_PROJET/getQuestions.php?cat=cf')
    }else{
        xhr.open('GET', 'https://mi-phpmut.univ-tlse2.fr/~21_L2_PROJET/getQuestions.php?cat=ca')
    }

    xhr.onreadystatechange = function(){
        if (xhr.status === 200 && xhr.readyState === 4){
            let response = JSON.parse(xhr.responseText)
                songs =  response.resultats
                updatePlaylistAux(language, songs)
                
        }else{
            alert("Erreur lors du téléchargement du jeux")
        }
    }
    
    
    xhr.send()
}

function updatePlaylistAux(language, songs){
    let listWrapper
    let liList 
    if (language === "français"){
        listWrapper = document.querySelector(".french-songs")
        liList = document.querySelectorAll(".french-songs ul li")
    }else{
        listWrapper = document.querySelector(".english-songs")
        liList = document.querySelectorAll(".english-songs ul li")
    }


    if (liList.length < songs.length){
        listWrapper.innerHTML = ''

        let newLi = document.createElement("li")
        let pTags = []
        for(let i = 0; i < 3; i++){
            let pTag = document.createElement("p")
            pTags.appendChild(pTag)
        }
        
        pTags[0].className = "main-artist"
        pTags[1].className = "other-artists"
        pTags[2].className = "lyrics"

        for(let i = 0; i < songs.length; i++){
            pTags[0].textContent = songs[i].nom
            
            let othersList = ""
            for (let a = 0; a < songs[i].lesAutres.length; a++){
                othersList += songs[i].lesAutres[a] + ", "
                pTags[1].textContent = othersList.slice(0, othersList.length - 2) 
            }
            pTags[2].parole = songs[i].parole
        }

        for (let p = 0; p < 3; p++){
            newLi.appendChild(pTags[p])
        } 

        listWrapper.appendChild(newLi)
    } else{
        for (let i = 0; i < liList.length; i++) {
            let song = songs[i];
            let itemChildren = liList[i].children;

            if (itemChildren[0]) itemChildren[0].textContent = song.nom;
            if (itemChildren[1]) itemChildren[1].textContent = song.lesAutres.join(", ");
            if (itemChildren[2]) itemChildren[2].textContent = song.parole;
        }
    }

}

let coderIntroReturn = document.querySelector(".coder-intro-nav a")
coderIntroReturn.addEventListener('click', function(){
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "flex"
    userWrapper.style.display = "flex"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

coder1.addEventListener('click', function(){
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "flex"
    coder1Wrapper.style.display = "flex"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
});

coder2.addEventListener('click', function(){
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "flex"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "flex"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
});

let returnInfo = document.querySelector(".coder-info-nav a")
returnInfo.addEventListener('click', function(){
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "flex"
    coderIntroWrapper.style.display = "flex"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})

let coder1MailImg = document.querySelector(".links-wrapper1 article .mail-link")
let coder1Mail = document.querySelector(".mail-coder1")
coder1MailImg.addEventListener('click', function(){
    if (coder1Mail.style.display === "none"){
        coder1Mail.style.display = "flex"
    }else{
        coder1Mail.style.display = "none"
    }
});

let coder2MailImg = document.querySelector(".links-wrapper2 article .mail-link")
let coder2Mail = document.querySelector(".mail-coder2")
coder2MailImg.addEventListener('click', function(){
    if (coder2Mail.style.display === "none"){
        coder2Mail.style.display = "flex"
    }else{
        coder2Mail.style.display = "none"
    }
});

let contactCoderBtn = document.querySelector(".contact-coder")
contactCoderBtn.addEventListener('click', function(){
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "none"
    artLyricsWrapper.style.display = "none"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "flex"
    reportWrapper.style.display = "flex"
})

returnReportNav.addEventListener('click', function(){
    gameNav.style.display = "none"
    gameWrapper.style.display = "none"

    htpNav.style.display = "none"
    htpWrapperGame.style.display = "none"

    leaderboardNav.style.display = "none"
    leaderboardWrapper.style.display = "none"

    landingNav.style.display = "none"
    introWrapper.style.display = "none"

    userNav.style.display = "none"
    userWrapper.style.display = "none"

    languageNav.style.display = "none"
    languageWrapper.style.display = "none"

    artLyricsNav.style.display = "flex"
    artLyricsWrapper.style.display = "flex"

    coderIntroNav.style.display = "none"
    coderIntroWrapper.style.display = "none"

    coderInfoNav.style.display = "none"
    coder1Wrapper.style.display = "none"

    coder2Wrapper.style.display = "none"

    reportNav.style.display = "none"
    reportWrapper.style.display = "none"
})