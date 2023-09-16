var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 320px
        640: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 3,
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
const switcher_tabs = document.querySelectorAll('.switcher_tab');
const switcher_tabs_sm = document.querySelectorAll('.switcher_tab_sm');
const switcher_content = document.querySelectorAll('.switcher_content')
const currency_tabs = document.querySelectorAll('.currency-tab')
const currency_content = document.querySelectorAll('.currency_content');



// tabs for desktop/tablet screen -> specefic price section 
tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {

        tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');

        tab_contents.forEach((content) => {
            content.classList.remove('active')
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
        })
        tab_contents[index].classList.add('active')

    })
})

// readymade switcher tamplate: 
switcher_tabs.forEach((tab, index) => {

    console.log(index)
    tab.addEventListener('click', () => {

        switcher_tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');

        switcher_content.forEach((content) => {
            content.classList.remove('active')
        })
        switcher_content[index].classList.add('active')

    })
})

// readymade switcher tamplate for mobile : 
switcher_tabs_sm.forEach((tab, index) => {

    console.log(index)
    tab.addEventListener('click', () => {

        switcher_tabs_sm.forEach((tab) => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');

        switcher_content.forEach((content) => {
            content.classList.remove('active')
        })
        switcher_content[index].classList.add('active')

    })
})

// unlimited currency section tabs 
currency_tabs.forEach((tab, index) => {

    console.log(index)
    tab.addEventListener('click', () => {

        currency_tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');

        currency_content.forEach((content) => {
            content.classList.remove('active')
        })
        currency_content[index].classList.add('active')

    })
})
