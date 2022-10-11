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

    let modal = document.querySelectorAll("#toysModal");
    let btn = document.querySelectorAll("#infoButton");
    let span = document.querySelectorAll(".toys-close");



    for(let i=0; i<btn.length; i++){
        btn[i].onclick = function (){
            modal[i].style.display = "block";
        }
        span[i].onclick = function (){
            modal[i].style.display= "none";
        }
    }

    window.onclick=function (event){
        for(let i=0; i<modal.length; i++){
            if(event.target===modal[i]){
                modal[i].style.display="none";
            }
        }

    }
})();

