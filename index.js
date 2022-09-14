let home = 0;
let guest = 0;

let homeBtn = document.getElementById("home");
let guestBtn = document.getElementById("guest");
let resetBtn = document.getElementById("")

function homeBtn1() {
    home += 1
    homeBtn.innerText = home
}

function homeBtn2() {
    home += 2   
    homeBtn.innerText = home
}

function homeBtn3() {
    home += 3   
    homeBtn.innerText = home
}

function guestBtn1() {
    guest += 1
    guestBtn.innerText = guest
}

function guestBtn2() {
    guest += 2
    guestBtn.innerText = guest
}

function guestBtn3() {
    guest += 3
    guestBtn.innerText = guest
}

function reset() {
    home = 0
    guest = 0
    homeBtn.innerText = 0
    guestBtn.innerText = 0
}
 
