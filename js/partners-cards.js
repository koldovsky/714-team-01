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
})();