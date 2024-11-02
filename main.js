const images = document.getElementsByTagName("img");
const megaImageContainer = document.querySelector("#mega-image");
const megaImageTitle = document.querySelector("#mega-image--h2");
const megaImage = document.querySelector("#mega-image--img");

let showingImage = false;

for (let i=0; i<images.length; i++) {
    if (images[i].id == "mega-image--img")
        continue;

    images[i].addEventListener("click", () => {
        megaImage.src = images[i].src;
        megaImageTitle.innerHTML = images[i].alt;

        megaImageContainer.style.opacity = "100%";
        megaImageContainer.style.pointerEvents = "all";
        
        setTimeout(() => showingImage = true, 500);
    })
}

document.body.addEventListener("click", () => {
    if (!showingImage)
        return;

    megaImageContainer.style.opacity = "0";

    setTimeout(() => {
        megaImageContainer.style.pointerEvents = "none";

        showingImage = false;
    }, 500);
});