var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 320px
        640: {
            slidesPerView: 1.30,
        },
        // when window width is >= 480px
        1024: {
            slidesPerView: 1.60,
        },
        // when window width is >= 640px
        1280: {
            slidesPerView: 2.17,
        }
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var appendNumber = 4;
var prependNumber = 1;
// document
//     .querySelector(".prepend-2-slides")
//     .addEventListener("click", function (e) {
//         e.preventDefault();
//         swiper.prependSlide([
//             '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//             '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//         ]);
//     });
// document
//     .querySelector(".prepend-slide")
//     .addEventListener("click", function (e) {
//         e.preventDefault();
//         swiper.prependSlide(
//             '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//         );
//     });
// document
//     .querySelector(".append-slide")
//     .addEventListener("click", function (e) {
//         e.preventDefault();
//         swiper.appendSlide(
//             '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
//         );
//     });
// document
//     .querySelector(".append-2-slides")
//     .addEventListener("click", function (e) {
//         e.preventDefault();
//         swiper.appendSlide([
//             '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//             '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//         ]);
//     });


/*-----------------------------------
    tab section js functionality: 
------------------------------------ */
const tabs = document.querySelectorAll('.tab_btn');
const tab_contents = document.querySelectorAll('.tab_content')
const tabs_sm = document.querySelectorAll('.tab_btn_sm');


// tabs for desktop/tablet screen -> specefic price section 
tabs.forEach((tab, index) => {

    console.log(index)
    tab.addEventListener('click', () => {

        tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');

        tab_contents.forEach((content) => {
            content.classList.remove('active')
            console.log(content)
        })
        tab_contents[index].classList.add('active')

    })
})

// tabs for small screen -> specefic price section
tabs_sm.forEach((tab, index) => {

    tab.addEventListener('click', () => {

        tabs_sm.forEach((tab) => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');

        tab_contents.forEach((content) => {
            content.classList.remove('active')
            console.log(content)
        })
        tab_contents[index].classList.add('active')

    })
})

