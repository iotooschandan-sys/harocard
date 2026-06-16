

const cards = document.querySelectorAll(".service-card");
const modal = document.getElementById("popupModal");

const popupTitle = document.getElementById("popupTitle");
const popupContent = document.getElementById("popupContent");
const popupImg = document.getElementById("popupImg");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        const title =
        card.querySelector("h2,h3").innerText;

        const content =
        card.querySelector("p").innerText;

        const image =
        card.querySelector("img").src;

        popupTitle.innerText = title;
        popupContent.innerText = content;
        popupImg.src = image;

        modal.classList.add("active");

    });

});

document.querySelector(".close-btn")
.addEventListener("click",()=>{

    modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){
        modal.classList.remove("active");
    }

});