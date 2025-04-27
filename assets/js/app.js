document.addEventListener('DOMContentLoaded', ()=>{
    const reviewsSlider = new Swiper('.reviews__slider', {
        slidesPerView: 3,
        spaceBetween: 15,
        breakpoints: {
            0: {
                slidesPerView: 1.1,
            }, 
            640: {
                slidesPerView: 1.5, 
            }, 
            920: {
                slidesPerView: 2.2
            }, 
            1024: {
                slidesPerView: 3
            }

        }
    })


    const sertSlider = new Swiper('.docs__slider',  {
        slidesPerView: 4,
        spaceBetween: 15,
        breakpoints: {
            0: {
                slidesPerView: 2,
            }, 
            640: {
                slidesPerView: 2.5, 
            }, 
            920: {
                slidesPerView: 3.5
            }, 
            1024: {
                slidesPerView: 4
            }

        }
    })

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });


    const gallerySlider = new Swiper('.gallery__slider', {
        slidesPerView: 3,
        spaceBetween: 15,
        pagination: {
            el: '.gallery__slider .swiper-pagination'
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1,
            }, 
            640: {
                slidesPerView: 1.5, 
            }, 
            920: {
                slidesPerView: 2.2
            }, 
            1024: {
                slidesPerView: 3
            }

        }
    })
})