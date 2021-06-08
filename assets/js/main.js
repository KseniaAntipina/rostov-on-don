/*
(function() {
    'use strict';

    let section = document.querySelectorAll(".services-subsection");
    let sections = {};
    let i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        let activeLink = document.querySelector('.active')


        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
                document.querySelector('a[href*=' + i + ']').scrollTo(0,0)
            }

        }



    };
})();
*/
