const squares = document.querySelectorAll('.square')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startBtn = document.querySelector('#start-btn')
const resetBtn = document.querySelector('#reset-btn')

let result = 0,hitPosition,currentTime=10,timerId=null,countDownTimerId=null,randomPosition=null;

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    randomPosition = squares[Math.floor(Math.random()*9)]
    hitPosition = randomPosition.id
    randomPosition.classList.toggle('mole')
};

function moveMole(){
    timerId = setInterval(randomSquare,750);
}

startBtn.addEventListener('click',()=>{
    startBtn.style.cursor='pointer'
    squares.forEach(square => {
        square.style.border='.5mm ridge rgb(0, 0, 0)'
        
    })
    if(timeLeft.textContent == 0){
        alert('RESET and START🙂')
    }
    else if(timeLeft.textContent == 10){
    moveMole()
    countDownTimerId = setInterval(countDown,750);
    }
    else{
        alert('CANNOT PAUSE')
    }
})

resetBtn.addEventListener('click',()=>{
        location.reload()
})

squares.forEach(square => {
    square.addEventListener('mousedown', () =>
    {
        if(square.id===hitPosition){
            result++;
            score.innerHTML = result;
            hitPosition = null;
            
        }

    })
});



function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == -1){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game OVER!!! You Whacked '+ result +'🦦')
        timeLeft.textContent = 0;
    }
}



