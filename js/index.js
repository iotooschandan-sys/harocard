
 

// const cards = document.querySelectorAll(".service-card");
// const modal = document.getElementById("popupModal");

// const popupTitle = document.getElementById("popupTitle");
// const popupContent = document.getElementById("popupContent");
// const popupImg = document.getElementById("popupImg");

// cards.forEach(card=>{

//     card.addEventListener("click",()=>{

//         const title =
//         card.querySelector("h2,h3").innerText;

//         const content =
//         card.querySelector("p").innerText;

//         const image =
//         card.querySelector("img").src;

//         popupTitle.innerText = title;
//         popupContent.innerText = content;
//         popupImg.src = image;

//         modal.classList.add("active");

//     });

// });

// document.querySelector(".close-btn")
// .addEventListener("click",()=>{

//     modal.classList.remove("active");

// });

// modal.addEventListener("click",(e)=>{

//     if(e.target===modal){
//         modal.classList.remove("active");
//     }

// });


//   <!-- Initialize Swiper -->
var swiper = new Swiper(".portfolio-swiper", {
    loop:true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        320: {
            spaceBetween: 10, // Mobile
        },
        576: {
            spaceBetween: 20, // Small devices
        },
        768: {
            spaceBetween: 40, // Tablet
        },
        992: {
            spaceBetween: 60, // Laptop
        },
        1200: {
            spaceBetween: 80, // Desktop
        }
    }
});