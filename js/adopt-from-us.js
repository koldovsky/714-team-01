const clockAdoptFromUs = document.querySelector('.adopt-from-us__clock');
clockAdoptFromUs.innerHTML = new Date().toLocaleTimeString();

function updateAdoptFromUsClock(){
    clockAdoptFromUs.innerHTML = new Date().toLocaleTimeString();
}

setInterval(updateAdoptFromUsClock,1000);
