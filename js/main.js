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

    $('#all-doctors-slider, #gynecologists-slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="doctors-slider-prev"></div>',
        nextArrow: '<div class="doctors-slider-next"></div>',
        responsive: [
            {
                breakpoint: 10000,
                settings: 'unslick'
            },
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
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

/*кастомный select и показ блоков*/

$('.selectDoctors').each(function (index, element) {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 200; // длительность анимации
    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
       text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }
    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function () {
                var chooseItem = $(this).data('value');
                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text($(this).find('span').text());
                selectList.slideUp(duration);
                selectHead.removeClass('on');

                /*код отвечающий за показ слайдера */
                if ($(element).hasClass('selectDoctors')) {
                    let slidersProduct = document.querySelectorAll('.doctors-slider')
                    for (let i = 0; i < slidersProduct.length; i++) {
                        if (slidersProduct[i].classList.contains(chooseItem)) {
                            slidersProduct[i].classList.add('show');
                            slidersProduct[i].classList.remove('hide');
                            /*след  строки нужны для того чтобы слик слайдер не съезжал при смене блоков. Новые слайдеры добавлять сюда.*/
                            $('#all-doctors-slider').slick('setPosition');
                            $('#gynecologists-slider').slick('setPosition');
                        }
                        else {
                            slidersProduct[i].classList.remove('show');
                            slidersProduct[i].classList.add('hide');
                        }
                    }
                    /*конец*/
                }

            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });

    /*закрывает селект при клике вне блока*/
    document.addEventListener('click', (event) => {
        const withinBoundaries = event.composedPath().includes(document.querySelector('.new-select'))
        const selectList = selectHead.next('.new-select__list');

        if (!withinBoundaries) {
            $(document.querySelector('.new-select')).removeClass('on');
            selectList.slideUp(duration);
        }
    })



});

/*скрипт скролла на странице всех услуг*/

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

/*скрипт бургера и моб меню*/

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

/*скрипт мобильного меню*/



window.addEventListener('resize', function(event){

const mediaQuery = window.matchMedia('(max-width: 992px)')
if (mediaQuery.matches) {

let nav = document.querySelector('nav')

let openSubmenuCatalog = document.getElementById('openCatalog');
let closeSubmenuCatalog = document.getElementById('submenuPrev');
let navItems = document.getElementById('navItems');
let catalogMenu = document.getElementById('catalogMenu');
let mobileInfoHide = document.getElementById('infoItems');
let navCatalog = document.getElementById('navCatalog');
let closeGenSubmenu = document.getElementById('toPrevFromGen')
let closeUziSubmenu = document.getElementById('toPrevFromUzi')
let closeNevrSubmenu = document.getElementById('toPrevFromNevr')


/*let openGenSubmenu = document.getElementById('genSubmenuLink')
let openUziSubmenu = document.getElementById('uziSubmenuLink')
let openNevrSubmenu = document.getElementById('nevrSubmenuLink')*/

/*let genSubmenu = document.getElementById('genSubmenu');
let uziSubmenu = document.getElementById('uziSubmenu');
let nevrSubmenu = document.getElementById('nevrSubmenu');*/



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


/*(function($){
    $(document).ready(function(){
        $('.dropdown-menu').on('click', function() {

            navCatalog.style.display = "none"
            nav.append($(this).children('ul'))
            $(this).children('ul').addClass('open');

        });
    });
})(jQuery);*/

/*let linksSubmenuAll = document.querySelectorAll('.dropdown-menu')

    for (let i = 0; i < linksSubmenuAll.length; i++) {
        linksSubmenuAll[i].onclick = () => {

            navCatalog.style.display = "none";
            linksSubmenuAll[i].childNodes[3].classList.add("open")
            nav.append(linksSubmenuAll[i].childNodes[3]);

        }*/

(function() {
    // get all elements with class 'more'
    let expandableElem = document.querySelectorAll('.dropdown-menu');

    // loop through each expandable element, adding click listener
    expandableElem.forEach(li => {
        li.addEventListener(
            'click',
            function() {
                console.log(this)
                navCatalog.style.display = "none";
                nav.append(this);
                this.classList.toggle('open')
            },
            false
        )
    });
})();

       /* linksSubmenuAll[i].childNodes[3].onclick = () =>  {
            linksSubmenuAll[i].childNodes[3].classList.remove("open")
            navCatalog.style.display = "block";
        };

    }


   /* navCatalog.style.display = "none";
    $($(this)[0].children[1]).addClass('open');
    nav.append($(this)[0].children[1])
*/






/*openGenSubmenu.onclick = () => {
    navCatalog.style.display = "none";
    nav.append(genSubmenu);
    genSubmenu.style.display= "block";
};

openUziSubmenu.onclick = () => {
    navCatalog.style.display = "none";
    nav.append(uziSubmenu);
    uziSubmenu.style.display= "block";
};

openNevrSubmenu.onclick = () => {
    navCatalog.style.display = "none";
    nav.append(nevrSubmenu);
    nevrSubmenu.style.display= "block";
};*/

closeGenSubmenu.onclick = () =>  {
    genSubmenu.style.display= "none";
    navCatalog.style.display = "block";
};

closeUziSubmenu.onclick = () =>  {
    uziSubmenu.style.display= "none";
    navCatalog.style.display = "block";
};

closeNevrSubmenu.onclick = () =>  {
    nevrSubmenu.style.display= "none";
    navCatalog.style.display = "block";
};


}
});










