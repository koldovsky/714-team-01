(function() {

    const toys = [
        {
            id: 1,
            title: "Duck toy",
            img: "img/chicken_toy.jpg",
            description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            price: 10.99
        },
        {
            id: 2,
            title: "Hot-dog toy",
            img: "img/hotdog_toy.jpg",
            description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            price: 9.99
        },
        {
            id: 3,
            title: "Cat toy",
            img: "img/egg_toy.jpg",
            description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            price: 8.99
        }
    ];

    function renderToys(toys) {
        const toysContainer = document.querySelector('.toys-for-puppies-list');
        toysContainer.innerHTML = '';
        for (const toy of toys) {
            toysContainer.innerHTML += `
            <article class="toy-card">
              <img class="toy-card__image" src="${toy.img}" alt="${toy.title}"
              />
              <h3 class="toy-card__h3">${toy.title}</h3>
              <p class="toy-card__description">${toy.description}</p>
              <div class="toy-card__buttons">
                <button class="toy-card__buttons-info button button-card">
                  Info
                </button>
                <button class="toy-card__buttons-buy button button-card">
                  Buy - ${toy.price}
                </button>
              </div>
            </article>`;
        }
    }

    renderToys(toys);

})();