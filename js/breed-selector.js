(function () {
    const breeds = [
      {
        id: 1,
        name: "Siberian Husky",
        description:
          "A beautiful and active breed with a thick coat and blue eyes.",
        class: "-first",
      },
      {
        id: 2,
        name: "Alaskan Husky",
        description: "Good-natured and energetic dogs for friendly families.",
        class: "-second",
      },
      {
        id: 3,
        name: "Labrador Husky",
        description:
          "An unusual mixed breed with blue eyes and a harsh appearance.",
        class: "-third",
      },
    ];
  
    function rendBreeds(breeds) {
      const breedsWrapper = document.querySelector(".huski__breeds-selector");
      breedsWrapper.innerHTML = "";
      for (const breed of breeds) {
        breedsWrapper.innerHTML += `
                      <div class="breed-selector-card breed-selector-card${breed.class}">
                          <h3>${breed.name}</h3>
                          <p>${breed.description}</p>
                          <a href="#dogs">CHOOSE A PUPPY</a>
                      </div>                    
              `;
      }
    }
    rendBreeds(breeds);

    function changeBackgroundColor() {
        const changeColorForCardBG = document.querySelector();
        
    }
  })();