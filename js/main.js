$(document).ready(function(){

    $('#mainSlider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.white-arrow-prev'),
        nextArrow: $('.white-arrow-next'),
    });

    $('#consultations-slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.consult-slide-arrow-prev'),
        nextArrow: $('.consult-slide-arrow-next'),
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('#reviews-slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.reviews-arrow-prev'),
        nextArrow: $('.reviews-arrow-next'),
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('#genetics-doctors-slider, #doctors-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.custom-prev'),
        nextArrow: $('.custom-next'),
        responsive: [
            {
                breakpoint: 10000,
                settings: 'unslick'
            },
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});


(function() {
    'use strict';

    var sections = document.querySelectorAll('.services-subsection');
    var navLinks = document.querySelectorAll('#sidebarnav li a');

    function getClosestSection() {
        var sectionsLength = sections.length;

        for(var index=0; index<sectionsLength; index++) {
            if (isBelowScroll(sections.item(index)))
                break;
        }

        selectLink(sections.item(index).id)
    }

    function isBelowScroll(element) {
        let position = element.getBoundingClientRect();

        return position.bottom  > 0 ;
    }

    function selectLink(id) {

        Array.prototype.forEach.call(navLinks, function(element){
            element.classList.remove('active');
        });

        document.querySelector('a[href="#'+id+'"]').classList.add('active');
    }

    window.addEventListener('scroll', function(event) {
        getClosestSection();

    });


})();


let burger = document.getElementById('burgerMobile');

burger.onclick = function myFunction() {

    let x = document.getElementById('nav');
    if (x.className === "nav") {
        x.className += " responsive";
        burger.classList.toggle('burger_active');
    } else {
        x.className = "nav";
        burger.classList.toggle('burger_active');
    }
};

window.addEventListener('resize', function(event){

const mediaQuery = window.matchMedia('(max-width: 992px)')
if (mediaQuery.matches) {

let nav = document.querySelector('nav')

let openSubmenuCatalog = document.getElementById('openCatalog');
let closeSubmenuCatalog = document.getElementById('submenuPrev');

let navItems = document.getElementById('navItems');
let catalogMenu = document.getElementById('catalogMenu');
let genSubmenu = document.getElementById('genSubmenu');
let uziSubmenu = document.getElementById('uziSubmenu');
let nevrSubmenu = document.getElementById('nevrSubmenu');
let mobileInfoHide = document.getElementById('infoItems');
let navCatalog = document.getElementById('navCatalog');

let openGenSubmenu = document.getElementById('genSubmenuLink')
let openUziSubmenu = document.getElementById('uziSubmenuLink')
let openNevrSubmenu = document.getElementById('nevrSubmenuLink')

let closeGenSubmenu = document.getElementById('toPrevFromGen')
let closeUziSubmenu = document.getElementById('toPrevFromUzi')
let closeNevrSubmenu = document.getElementById('toPrevFromNevr')

openSubmenuCatalog.onclick = () => {
    navItems.style.display = "none";
    catalogMenu.style.display= "block";
    mobileInfoHide.style.display = "none";
};

closeSubmenuCatalog.onclick = () =>  {
    catalogMenu.style.display= "none";
    navItems.style.display = "flex";
    mobileInfoHide.style.display = "block";
};

openGenSubmenu.onclick = () => {
    navCatalog.style.display = "none";
    nav.append(genSubmenu);
    genSubmenu.style.display= "block";
};

closeGenSubmenu.onclick = () =>  {
    genSubmenu.style.display= "none";
    navCatalog.style.display = "block";
};

openUziSubmenu.onclick = () => {
    navCatalog.style.display = "none";
    nav.append(uziSubmenu);
    uziSubmenu.style.display= "block";
};

closeUziSubmenu.onclick = () =>  {
    uziSubmenu.style.display= "none";
    navCatalog.style.display = "block";
};

openNevrSubmenu.onclick = () => {
    navCatalog.style.display = "none";
    nav.append(nevrSubmenu);
    nevrSubmenu.style.display= "block";
};

closeNevrSubmenu.onclick = () =>  {
    nevrSubmenu.style.display= "none";
    navCatalog.style.display = "block";
};

}
});










