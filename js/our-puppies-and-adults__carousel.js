(function () {

    const slides = [
        '<div class="our-puppies-and-adults__cart-containar"><img class="our-puppies-and-adults__image" src="img/husky-male.png" alt="Gray husky"><p class="our-puppies-and-adults__image-text">Donnie, male</p>',
        '<div class="our-puppies-and-adults__cart-containar"><img class="our-puppies-and-adults__image" src="img/husky-puppy-female.png" alt="Hasky puppy is lying down."><p class="our-puppies-and-adults__image-text">Silva, female</p></div>',
        '<div class="our-puppies-and-adults__cart-containar"><img class="our-puppies-and-adults__image" src="img/husky-puppy-male.png" alt="Hasky puppy eats from a bowl."><p class="our-puppies-and-adults__image-text">Miska, male</p></div>',
        '<div class="our-puppies-and-adults__cart-containar"><img class="our-puppies-and-adults__image" src="img/husky-female.png" alt="Red husky"><p class="our-puppies-and-adults__image-text">Ulva, male</p></div>'
    ];

    let currentSlideIdx = 0;

    const slideContainer = document.querySelector('.our-puppies-and-adults__carousel .our-puppies-and-adults__carousel-slides');

    function renderSlide() {
        slideContainer.innerHTML = slides[currentSlideIdx];

        if (window.innerWidth > 768) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlide();
    }

    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlide();
    }

    renderSlide();

    const btnNext = document.querySelector('.our-puppies-and-adults__carousel .btn-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.our-puppies-and-adults__carousel .btn-prev');
    btnPrev.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderSlide);

    const dotsNav = document.querySelector('.our-puppies-and-adults__indicators');
    const dots = Array.from(dotsNav.children);

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');

        if (!targetDot) return;

        const targetIndex = dots.findIndex(dot => dot === targetDot);
        currentSlideIdx = targetIndex;

        renderSlide();
    });

})();