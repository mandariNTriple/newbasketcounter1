let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let scoreQuarter = document.getElementById("quarter")
let scoreH = 0
let scoreG = 0
let quarter = 1

function add1Home() {
    scoreH += 1
    scoreHome.textContent = scoreH
}
function add2Home() {
    scoreH += 2
    scoreHome.textContent = scoreH
}
function add3Home() {
    scoreH += 3
    scoreHome.textContent = scoreH
}

function add1Guest() {
    scoreG += 1
    scoreGuest.textContent = scoreG
}
function add2Guest() {
    scoreG += 2
    scoreGuest.textContent = scoreG
}
function add3Guest() {
    scoreG += 3
    scoreGuest.textContent = scoreG
}
function setScore() {
    scoreH = 0
    scoreG = 0
    quarter = 1
    scoreHome.textContent = scoreH
    scoreGuest.textContent = scoreG
    scoreQuarter.textContent = quarter
}
function addQuarter() {
    quarter += 1
    scoreQuarter.textContent = quarter
}