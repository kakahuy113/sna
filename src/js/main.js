import {
    getSVGs,
    Loading
} from './util/utilities';
import Cookie from './lib/Cookie';

const checkSubMenu = () => {
    const itemsTopHeader = document.querySelectorAll(
        '.t_header--list-link ul li'
    );
    itemsTopHeader.forEach((item) => {
        const sub = item.querySelector('ul');
        if (sub) {
            item.classList.add('hasSub');
        }
    });

    const itemsBottomHeader = document.querySelectorAll(
        '.b_header--list-menu ul li'
    );
    itemsBottomHeader.forEach((item) => {
        const sub = item.querySelector('ul');
        if (sub) {
            item.classList.add('hasSub');
        }
    });
};

const customScrollBar = () => {
    var myCustomScrollbar = document.querySelector('.my-custom-scrollbar');

    if (myCustomScrollbar) {
        var ps = new PerfectScrollbar(myCustomScrollbar);
        var scrollbarY = myCustomScrollbar.querySelector('.ps__rail-y');

        myCustomScrollbar.onscroll = function() {
            scrollbarY.style.cssText = `top: ${
				this.scrollTop
			}px!important; height: 400px; right: ${-this.scrollLeft}px`;
        };
        ps.update();
    }
};

const mainBanner = () => {
    const mainBanner = new Swiper('.main-banner__slider .swiper-container', {
        speed: 700,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 3000,
        },
    });
};

const checkLayout = () => {
    const heightHeader = document.querySelector('header').offsetHeight;
    const sliderBanner = document.querySelector('.main-banner__slider');
    const mainBanner = document.querySelector('.main-banner');
    if (sliderBanner) {
        sliderBanner.style.cssText = `padding-top: ${heightHeader}px`;
    } else if (mainBanner) {
        mainBanner.style.cssText = `padding-top: ${heightHeader}px`;
    } else {
        document.querySelector(
            'main'
        ).style.cssText = `padding-top: ${heightHeader}px`;
    }
};

const subMenuMobile = () => {
    const toggleMenu = document.querySelector('.toggle-menu-moblie');
    const mainMenus = document.querySelector('.bottom-header');
    const topHeader = document.querySelector('.top-header');
    const subMenus = document
        .querySelector('.b_header--list-menu')
        .querySelectorAll('.hasSub');

    const overlay = document.querySelectorAll('#overlay');
    // MainMenu
    if (toggleMenu) {
        toggleMenu.addEventListener('click', function() {
            toggleMenu.classList.toggle('active');
            document.querySelector('body').classList.toggle('disabled');
            document.querySelector('#overlay').classList.toggle('active');
            subMenus.forEach((item) => {
                item.querySelector('ul').classList.remove('active');
            });
            if (mainMenus && topHeader) {
                mainMenus.classList.toggle('active');
                topHeader.classList.toggle('active');
            }
        });
    }
    // SubMenu
    return new Promise((resolve, reject) => {
        subMenus.forEach((item) => {
            // TẠO RA NÚT BACK
            if (window.innerWidth < 1200) {
                item.querySelector('ul>li').insertAdjacentHTML(
                    'beforebegin',
                    '<li><div class="btn-back">Trở về</div></li>'
                );
                // remove attr href
                item.querySelector('a').removeAttribute('href');
            }
            resolve();
            if (window.innerWidth < 1200) {
                item.addEventListener('click', function(e) {
                    e.stopPropagation();
                    item.querySelector('ul').classList.add('active');
                });
            }
        });
    }).then(() => {
        const btnBack = document.querySelectorAll('.btn-back');
        // Button Back
        btnBack.forEach((item) => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                item.parentElement.parentElement.classList.remove('active');
            });
        });
        // Overlay
        overlay.forEach((item) => {
            item.addEventListener('click', function() {
                item.classList.toggle('active');
                document.querySelector('body').classList.remove('disabled');
                mainMenus.classList.remove('active');
                topHeader.classList.remove('active');
                toggleMenu.classList.remove('active');
                subMenus.forEach((item) => {
                    item.querySelector('ul').classList.remove('active');
                });
            });
        });
    });
};

const subMenuFooter = () => {
    if ($(window).width() <= 1024) {
        $('.item-link-footer h5').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).siblings('ul').slideToggle();
            $('.item-link-footer h5').not(this).siblings('ul').slideUp();
            $('.item-link-footer h5').not(this).removeClass('active');
        });
    }
};

const fancyboxBookingFixed = () => {
    $('.iframeBooking').fancybox({
        overlayShow: true,
        autoScale: true,
        autoDimensions: false,
        modal: true,
        type: 'iframe',
        autoSize: false,
        showCloseButton: true,
        afterShow: function() {
            $('.fancybox-content').append(
                '<a title="Close" class="fancybox-item fancybox-close custom-close-fancybox-booking" href="javascript:jQuery.fancybox.close();">CLOSE</a>'
            );
        },
    });
};

const quoteSlider = () => {
    const quoteSlider = new Swiper('.quote__slider .swiper-container', {
        speed: 700,
        effect: 'fade',
        autoplay: {
            delay: 10000,
        },
        autoHeight: true,
        navigation: {
            nextEl: '.quote__slider .swiper-button-next',
            prevEl: '.quote__slider .swiper-button-prev',
        },
    });
};

const activeMenu = () => {
    var url = window.location.pathname.split('/').pop();
    $('.b_header--list-menu ul li').each(function() {
        var href = $(this).children('a').eq(0).attr('href');
        if (href === url) {
            $(this).addClass('active');
            $(this).parent('ul').parent('li').addClass('active');
            $(this)
                .parent('ul')
                .parent('li')
                .parent('ul')
                .parent('li')
                .addClass('active');
        }
    });
};

const coreSliderStyle_1 = () => {
    const coreSliderStyle_1 = new Swiper(
        '.core_slider-style--1 .swiper-container', {
            centeredSlides: true,
            slidesPerView: 1,
            loopAdditionalSlides: 1,
            loop: true,
            navigation: {
                nextEl: '.core_slider-style--1 .swiper-button-next',
                prevEl: '.core_slider-style--1 .swiper-button-prev',
            },
        }
    );
};

const pdfSlider = () => {
    const pdfSlider = new Swiper('.pdf__slider .swiper-container', {
        centeredSlides: true,
        slidesPerView: 1,
        loopAdditionalSlides: 1,
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.pdf__slider .swiper-button-next',
            prevEl: '.pdf__slider .swiper-button-prev',
        },
    })
}

const coreTabStyle_1 = () => {
    $('.core--tab-container__style-1').find('.item').eq(0).addClass('active').find('.tab-content').slideDown();
    $('.core--tab-container__style-1 .item').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).find('.tab-content').slideToggle();
        $('.core--tab-container__style-1 .item').not(this).removeClass('active');
        $('.core--tab-container__style-1 .item').not(this).find('.tab-content').slideUp();
    });
}

const libraryFancyApp = () => {
    $('[data-fancybox]').fancybox({
        buttons: [
            'zoom',
            'download',
            'fullScreen',
            'share',
            'thumbs',
            'close',
        ],
        thumbs: {
            autoStart: true,
            axis: 'x'
        }
    })
}

const initIntlTelInput = () => {
    var input = document.querySelector("#phone");
    if (input) {
        window.intlTelInput(input, {
            //code ???
        });
    }
}

const toggleSearch = () => {
    $(".t_header--search #search-sna").click(function(e) {
        e.preventDefault();
        $(".b_header-input-search").toggleClass("active-search");
    })
    $(".b_header-input-search span.close-search").click(function(e) {
        e.preventDefault();
        $(".b_header-input-search").removeClass("active-search");
    });
}

document.addEventListener('DOMContentLoaded', () => {

    Cookie();
    getSVGs();
    Loading();
    new WOW().init();
    // Check Layout
    checkLayout();
    // Check Sub Menu
    checkSubMenu();
    // Sub Menu Footer
    subMenuFooter();
    // Cumstom Scroll Bar
    customScrollBar();
    // SLIDER
    mainBanner();
    quoteSlider();
    coreSliderStyle_1();
    pdfSlider();
    // FancyboxBooking
    fancyboxBookingFixed();
    //search
    toggleSearch();
    // Toggle Menu
    subMenuMobile();
    //activeMenu
    activeMenu();
    // TabStyle_1
    coreTabStyle_1();
    // THỊNH
    libraryFancyApp();
    // TOÀN IntlTelInput
    initIntlTelInput();

});