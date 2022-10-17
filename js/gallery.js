const lightbox = document.createElement("div")
lightbox.id = "lightbox"
document.body.appendChild(lightbox)

const images = document.querySelector(".grid").children

Array.from(images).forEach(image => {
    image.addEventListener("click", e => {
        lightbox.classList.add("active")
        const img = document.createElement("img")
        img.src = image.src
        img.width = img.width
        img.height = img.height
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
         lightbox.appendChild(img)
    })
})

lightbox.addEventListener("click" , e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove("active")
})