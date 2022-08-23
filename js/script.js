let btn = document.querySelector(".hero-btn button")
btn.addEventListener("click", () => {
    document.querySelector(".hero-modal").style.display = "block"
})

let btnClose = document.querySelector(".hero-modal-block-square-close")
btnClose.addEventListener("click", () => {
    document.querySelector(".hero-modal").style.display = "none"
})
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});