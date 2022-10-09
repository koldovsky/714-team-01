(async function() {

    const response = await fetch('api/toys.json');
    const toys = await response.json();

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
                <button class="toy-card__buttons-info button button-card" id="infoButton" >
                  Info
                </button>
                <div id="toysModal" class="toys-modal">
                    <div class="toys-modal-content">
                      <span class="toys-close">x</span>
                      <div class="toys-modal-title"><h2>${toy.title}</h2></div>
                      <img class="toys-modal-img" src="${toy.img}">
                    </div>
                </div>
                <button class="toy-card__buttons-buy button button-card">
                  Buy - ${toy.price} 
                </button>
              </div>
            </article>`;
        }
    }

    renderToys(toys);

    let modal = document.getElementById('toysModal');
    let btn = document.getElementById("infoButton");
    let span = document.getElementsByClassName("toys-close")[0];
    btn.onclick = function (){
        modal.style.display = "block";
    }
    span.onclick = function (){
        modal.style.display= "none";
    }

    window.onclick=function (event){
        if(event.target===modal){
            modal.style.display="none";
        }
    }
})();

