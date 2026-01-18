window.addEventListener('DOMContentLoaded', event => {
    // Scroll-to-top button functionality
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function () {
        scrollToTopBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
    };

    scrollToTopBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Activate Bootstrap scrollspy
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse navbar on item click when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



    // add gallery lightbox functionality    
    


    });


