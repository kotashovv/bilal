document.addEventListener('DOMContentLoaded', ()=>{
    const reviewsSlider = new Swiper('.reviews__slider', {
        slidesPerView: 3,
        spaceBetween: 15,
    })


    const sertSlider = new Swiper('.docs__slider',  {
        slidesPerView: 4,
        spaceBetween: 15,
    })

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });
})