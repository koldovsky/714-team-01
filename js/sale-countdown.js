const someDate = new Date('November 23 2022 00:00:00');
const currentDate = new Date();
let startTime = (someDate - currentDate) / 1000;

const countDownEl = document.querySelector('.countdown')
const saleDays = document.querySelector('.sale-days')
const saleHors = document.querySelector('.sale-hours')
const saleMinutes = document.querySelector('.sale-minutes')
const saleSeconds = document.querySelector('.sale-seconds')

setInterval(updateCountDown, 1000);
function updateCountDown() {
    let days = Math.floor(startTime / 60 / 60 / 24);
    let hours = Math.floor(startTime / 60 / 60 - days * 24);
    let minutes = Math.floor(startTime / 60 - days * 24 * 60 - hours * 60);
    let seconds = Math.floor(startTime - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // countDownEl.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    saleDays.innerHTML = days;
    saleHors.innerHTML = hours;
    saleMinutes.innerHTML = minutes;
    saleSeconds.innerHTML = seconds;
    startTime--;
} 
updateCountDown();