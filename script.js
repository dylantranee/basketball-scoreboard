const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')
const newGame = document.getElementById('new-game')

let homeCount = 0
let guestCount = 0

document.querySelectorAll('.btn-score').forEach(btn => {
    btn.addEventListener('click', function() {
        const team = this.getAttribute('data-team')
        const points = parseInt(this.getAttribute('data-points'), 10)

        if (team === 'home') {
            homeCount += points
            homeScore.textContent = homeCount
        } else if (team === 'guest') {
            guestCount += points
            guestScore.textContent = guestCount
        }
        updateLeader()
    })
})

newGame.addEventListener('click', function(){
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
    updateLeader()
})

function updateLeader() {
    homeScore.classList.remove('leader')
    guestScore.classList.remove('leader')
    if (homeCount > guestCount) {
        homeScore.classList.add('leader')
    } else if (guestCount > homeCount) {
        guestScore.classList.add('leader')
    }
}