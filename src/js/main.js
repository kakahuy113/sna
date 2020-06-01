import {
	getSVGs,
	Loading
} from './util/utilities';
import Cookie from './lib/Cookie';
import Swiper from 'swiper';

const checkSubMenu = () => {
	const itemsTopHeader = document.querySelectorAll('.t_header--list-link ul li');
	itemsTopHeader.forEach((item) => {
		const sub = item.querySelector('ul');
		if (sub) {
			item.classList.add('hasSub')
		}
	})

	const itemsBottomHeader = document.querySelectorAll('.b_header--list-menu ul li');
	itemsBottomHeader.forEach((item) => {
		const sub = item.querySelector('ul');
		if (sub) {
			item.classList.add('hasSub')
		}
	})
}

const customScrollBar = () => {
	var myCustomScrollbar = document.querySelector('.my-custom-scrollbar');

	if (myCustomScrollbar) {
		var ps = new PerfectScrollbar(myCustomScrollbar);
		var scrollbarY = myCustomScrollbar.querySelector('.ps__rail-y');

		myCustomScrollbar.onscroll = function () {
			scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 400px; right: ${-this.scrollLeft}px`;
		}
		ps.update();
	}
}

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
	})
}

const checkLayout = () => {
	const heightHeader = document.querySelector('header').offsetHeight;
	const sliderBanner = document.querySelector('.main-banner__slider');
	if (sliderBanner) {
		sliderBanner.style.cssText = `padding-top: ${heightHeader}px`;
	} else {
		document.querySelector('main').style.cssText = `padding-top: ${heightHeader}px`;
	}
}

const fancyboxBookingFixed = () => {
	$(".iframeBooking").fancybox({
		'overlayShow': true,
		'autoScale': true,
		'autoDimensions': false,
		'modal': true,
		'type': 'iframe',
		'autoSize': false,
		'showCloseButton': true,
		afterShow: function () {
			$('.fancybox-content').append('<a title="Close" class="fancybox-item fancybox-close custom-close-fancybox-booking" href="javascript:jQuery.fancybox.close();">CLOSE</a>');
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	Cookie();
	getSVGs();
	Loading();
	// Check Layout
	checkLayout();
	// Check Sub Menu
	checkSubMenu();
	// Cumstom Scroll Bar
	customScrollBar();
	// SLIDER
	mainBanner();
	// FancyboxBooking
	fancyboxBookingFixed();
});

document.addEventListener('DOMContentLoaded', () => {});


// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());