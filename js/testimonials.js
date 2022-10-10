testimonials.onclick = function() {
    const start = Date.now();
    const screenWidth = window.screen.width * 3;

    const audio = new Audio(); 
    audio.src = '../sounds/lay-sobaki.mp3'; 
    audio.autoplay = true;

    const timer = setInterval(function() {
      const timePassed = Date.now() - start;

      train.style.left = (timePassed - 500) / 3 + 'px';

      if (timePassed > screenWidth) {
        clearInterval(timer);
        train.remove();
      }

    }, 20);
}