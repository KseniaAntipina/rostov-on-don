$(document).ready(function () {

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

    $('.doctors-slider').slick({

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
                        //if (slidersProduct[i].classList.contains(chooseItem)) {
                        if (slidersProduct[i].getAttribute('data-value') == chooseItem) {
                            slidersProduct[i].classList.add('show');
                            slidersProduct[i].classList.remove('hide');
                            /*след  строка нужны для того чтобы слик слайдер не съезжал при смене блоков.*/
                            $('.doctors-slider').slick('setPosition');
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

(function () {
    'use strict';

    var sections = document.querySelectorAll('.services-subsection');
    var navLinks = document.querySelectorAll('#sidebarnav li a');

    function getClosestSection() {
        var sectionsLength = sections.length;

        for (var index = 0; index < sectionsLength; index++) {
            if (isBelowScroll(sections.item(index)))
                break;
        }

        selectLink(sections.item(index).id)

    }

    function isBelowScroll(element) {
        let position = element.getBoundingClientRect();

        return position.bottom > 0;
    }

    function selectLink(id) {

        Array.prototype.forEach.call(navLinks, function (element) {
            element.classList.remove('active');
        });

        document.querySelector('a[href="#' + id + '"]').classList.add('active');
    }

    window.addEventListener('scroll', function (event) {
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


window.addEventListener('resize', function (event) {

    const mediaQuery = window.matchMedia('(max-width: 992px)')
    if (mediaQuery.matches) {

        let nav = document.querySelector('nav')
        let openSubmenuCatalog = document.getElementById('openCatalog');
        let closeSubmenuCatalog = document.querySelector('.catalog-menu_prev');
        let catalogMenu = document.getElementById('catalogMenu');
        let mobileInfoHide = document.getElementById('infoItems');
        let navItems = document.getElementById('navItems');
        let navCatalog = document.getElementById('navCatalog');


        openSubmenuCatalog.onclick = () => {
            navItems.style.display = "none";
            catalogMenu.style.display = "block";
            mobileInfoHide.style.display = "none";
        };

        closeSubmenuCatalog.onclick = () => {
            catalogMenu.style.display = "none";
            navItems.style.display = "flex";
            mobileInfoHide.style.display = "block";
        };

        (function () {

            let allOpenLink = document.querySelectorAll('.dropdown-menu>a');

            // loop through each expandable element, adding click listener
            allOpenLink.forEach(el => {
                el.addEventListener(
                    'click',
                    function myfunc() {
                        let res = el.nextElementSibling; // подменю ul
                        res.classList.add('open')
                        if (res.classList.contains('open')) {
                            nav.append(res);
                        }
                        navCatalog.style.display = "none";

                        if (el.closest('#navItems')) {
                            navItems.style.display = "none";
                            mobileInfoHide.style.display = "none";
                        }

                        res.firstElementChild.onclick = () => {
                            el.after(res);
                            res.classList.remove('open')
                            navCatalog.style.display = "block";

                            if (el.closest('#navItems')) {
                                navItems.style.display = "block";
                                mobileInfoHide.style.display = "block";
                            }

                        };
                    },
                    true
                )
            });
        })();


    }
});


$('[data-fancybox]').fancybox({
    animationEffect: false,
    zoomOpacity: false,
})


document.getElementById('openVideo').onclick = () => {
    document.getElementById('articleContent').classList.add('videoShow');
}

document.getElementById('closeVideo').onclick = () => {
    document.getElementById('articleContent').classList.remove('videoShow');
}








