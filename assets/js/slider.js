$('.media_slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.testimonial_slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        // {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
    ]
});
