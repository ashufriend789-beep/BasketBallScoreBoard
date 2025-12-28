let score1 = 0
let score2 = 0

let teamOneEl = document.getElementById("team-one-score")
let teamTwoEl = document.getElementById("team-two-score")

teamOneEl.textContent = score1
teamTwoEl.textContent = score2

function one() {
    score1 += 1
    teamOneEl.textContent = score1
}

function two() {
    score1 += 2
    teamOneEl.textContent = score1
}

function three() {
    score1 += 3
    teamOneEl.textContent = score1
}
function one1() {
    score2 += 1
    teamTwoEl.textContent = score2
}

function two2() {
    score2 += 2
    teamTwoEl.textContent = score2
}

function three3() {
    score2 += 3
    teamTwoEl.textContent = score2
}

function reset()
{
    score1 = 0
    score2 = 0
    teamOneEl.textContent = 0
    teamTwoEl.textContent = 0
}