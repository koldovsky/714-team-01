(function () {
    const partners = [
        {
            id: "partners-slider-item-1",
            img: "img/section-partners/partners-chappie.png",
            description: "chappie-logo"
        },
        {
            id: "partners-slider-item-2",
            img: "img/section-partners/partners-husky-secondary.png",
            description: "husky-secondary-logo"
        },
        {
            id: "partners-slider-item-3",
            img: "img/section-partners/partners-bark-box.png",
            description: "bark-box-logo"
        },
        {
            id: "partners-slider-item-4",
            img: "img/section-partners/partners-husky.png",
            description: "husky-logo"
        },
        {
            id: "partners-slider-item-5",
            img: "img/section-partners/partners-royal-canin.png",
            description: "royal-canin-logo"
        },
        {
            id: "partners-slider-item-6",
            img: "img/section-partners/partners-dog-house.png",
            description: "dog-house"
        }
    ];

    function renderPartners(partners) {
        const partnersSlider = document.querySelector('.partners-slider');
        for (const partner of partners) {
            partnersSlider.innerHTML += `
                    <div class="partners-slider-item">
                        <div class="partners-slider-item-box">
                            <img class="partners-img" src="${partner.img}" width="203" alt="${partner.description}">
                        </div>
                    </div>`
        }
    }
    renderPartners(partners);


    // Clock
    const clockContainer = document.querySelector('.partners-clock-container');
    function updateClock() {
        clockContainer.innerText = `Current time: ${new Date().toLocaleTimeString()}`;
    }
    setInterval(updateClock, 1000);

    // Countdown
    const someDate = new Date('November 23 2022 00:00:00');
    const currentDate = new Date();
    let startTime = (someDate - currentDate) / 1000;
    const countDownEl = document.querySelector('.countdown')
    setInterval(updateCountDown, 1000);
    function updateCountDown() {
        let days = Math.floor(startTime / 60 / 60 / 24);
        let hours = Math.floor(startTime / 60 / 60 - days * 24);
        let minutes = Math.floor(startTime / 60 - days * 24 * 60 - hours * 60);
        let seconds = Math.floor(startTime - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60) ;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDownEl.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
        startTime--;
    }    
})();