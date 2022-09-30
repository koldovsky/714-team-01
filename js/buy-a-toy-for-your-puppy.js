(async function() {

    const response = await fetch ('api/toys.json');
    const toys = await response.json() ;

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
                  Buy - ${(toy.price * rate).toFixed(2)}
                </button>
              </div>
            </article>`;
        }
    }

    renderToys(toys);

})();