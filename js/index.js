

document.querySelector(".close-btn")
.addEventListener("click",()=>{

    modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){
        modal.classList.remove("active");
    }

});


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