const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')

let homeCount = 0
let guestCount = 0

function homePlus1() {
    homeCount++
    homeScore.innerText = homeCount
    updateLeader()
}

function homePlus2() {
    homeCount += 2
    homeScore.innerText = homeCount
    updateLeader()
}

function homePlus3() {
    homeCount += 3
    homeScore.innerText = homeCount
    updateLeader()
}

function guestPlus1() {
    guestCount++
    guestScore.innerText = guestCount
    updateLeader()
}

function guestPlus2() {
    guestCount += 2
    guestScore.innerText = guestCount
    updateLeader()
}

function guestPlus3() {
    guestCount += 3
    guestScore.innerText = guestCount
    updateLeader()
}

function newGame() {
    homeCount = 0
    guestCount = 0
    homeScore.innerText = homeCount
    guestScore.innerText = guestCount
    updateLeader()
}

function updateLeader() {
    homeScore.classList.remove('leader')
    guestScore.classList.remove('leader')
    if (homeCount > guestCount) {
        homeScore.classList.add('leader')
    } else if (guestCount > homeCount) {
        guestScore.classList.add('leader')
    }
}