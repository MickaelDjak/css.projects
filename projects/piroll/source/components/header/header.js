let headerTrigger = document.querySelector('.header-trigger');
let headerNavigation = document.querySelector('.header-navigation');
let headerVelcro = document.querySelector('.header-velcro');

headerTrigger.addEventListener("click", function () {
    headerNavigation.classList.toggle("header-navigation-show");
});

window.onscroll = function () {
    let offset = document.documentElement.scrollTop;
    if (offset === 0) {
        headerVelcro.classList.remove('header-glue');
    } else {
        headerVelcro.classList.add('header-glue');
    }
};

window.onresize = function () {
    let width = document.documentElement.clientWidth;
    if (width > 900 && width < 1000) {
        headerNavigation.classList.remove("header-navigation-show");
    }
};