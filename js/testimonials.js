let once = false;

testimonials.onclick = function() {
    if (!once) {
        const audio = new Audio();
        audio.src = './sounds/lay-sobaki.mp3'; 

        audio.autoplay = true;
        once = true;

        const start = Date.now();
        const screenWidth = window.screen.width * 3;

        const timer = setInterval(function() {
        const timePassed = Date.now() - start;

        train.style.left = (timePassed - 500) / 3 + 'px';

        if (timePassed > screenWidth) {
            clearInterval(timer);
            train.remove();
        }

        }, 20);
    }
}