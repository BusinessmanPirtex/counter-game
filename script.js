const increaseBtn = document.querySelector('.increase');
const resetBtn = document.querySelector('.reset');
const decreaseBtn = document.querySelector('.decrease');
const enterBtn = document.querySelector('.enter-button')

const counterPad = document.querySelector('.pad1');
const startPad = document.querySelector('.pad2');

const upperText = document.querySelector('.upper-text');
const nameInput = document.getElementById("name-input");

const countNum = document.querySelector('.count');

let count = 0
let userName;

let canIncrease = true;

enterBtn.addEventListener('click',startCheck);

function startCheck() {
    if (nameInput.value) {
        userName = nameInput.value;
        startGame();
    } else {
        upperText.innerText = "You didn't enter your name";
    }
}

function startGame() {
    startPad.classList.add('hide');
    counterPad.classList.remove('hide');
    upperText.innerText = ""
}

function increaseNum() {
    if (canIncrease){
        count++
        countNum.innerText = count;
    } else {
        upperText.innerText = "You have reached the end"
    }

    if (count === 70) {
        alert(";)")
    } else if(count === 420) {
        window.open("https://www.youtube.com/watch?v=xnEYzp6IpqQ&ab_channel=DJThug")
    } else if(count === 1069) {
        alert("something great awaits ahead");
    }else if(count === 1080) {
        upperText.innerText = "";
    } else if(count === 2000) {
        wonGame();
    }
}

function decreaseNum() {
    count--
    console.log(count);
    countNum.innerText = count;
}

function resetNum() {
    count = 0;

    countNum.innerText = count;
}

function wonGame() {
    counterPad.classList.add('hide');
    upperText.classList.add('inMid');
    upperText.innerText = `You won ${userName}`
}

increaseBtn.addEventListener('click',increaseNum);
decreaseBtn.addEventListener('click',decreaseNum);
resetBtn.addEventListener('click',resetNum);