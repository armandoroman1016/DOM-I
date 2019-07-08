const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msHundreds = document.querySelector('#msHundreds')
const msTens = document.querySelector('#msTens')
const digits = document.querySelectorAll('.num')

const timerCounter = window.setInterval(cb, 10)

function addTime(){
    const startingNum = 0
    const maxNum = 9
    Array.from(digits).forEach(digit => digit.innerText = startingNum)
}