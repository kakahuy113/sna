import {
	getSVGs,
	Loading
} from './util/utilities';
import Cookie from './lib/Cookie';
import {
	Promise
} from 'core-js';

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
	const mainBanner = document.querySelector('.main-banner');
	if (sliderBanner) {
		sliderBanner.style.cssText = `padding-top: ${heightHeader}px`;
	} else if (mainBanner) {
		mainBanner.style.cssText = `padding-top: ${heightHeader}px`;
	} else {
		document.querySelector('main').style.cssText = `padding-top: ${heightHeader}px`;
	}
}

const subMenuMobile = () => {
	const toggleMenu = document.querySelector('.toggle-menu-moblie');
	const mainMenus = document.querySelector('.bottom-header');
	const topHeader = document.querySelector('.top-header');
	const subMenus = document.querySelector('.b_header--list-menu').querySelectorAll('.hasSub');

	const overlay = document.querySelectorAll('#overlay');
	// MainMenu
	if (toggleMenu) {
		toggleMenu.addEventListener('click', function () {
			toggleMenu.classList.toggle('active');
			document.querySelector('body').classList.toggle('disabled');
			document.querySelector('#overlay').classList.toggle('active');
			subMenus.forEach((item) => {
				item.querySelector('ul').classList.remove('active');
			})
			if (mainMenus && topHeader) {
				mainMenus.classList.toggle('active');
				topHeader.classList.toggle('active');
			}
		})
	}
	// SubMenu
	return new Promise((resolve, reject) => {
		subMenus.forEach((item) => {
			// TẠO RA NÚT BACK
			if (window.innerWidth < 1200) {
				item.querySelector('ul>li').insertAdjacentHTML('beforebegin', '<li><div class="btn-back">Trở về</div></li>');
			}
			resolve();
			if (window.innerWidth < 1200) {
				item.addEventListener('click', function (e) {
					e.preventDefault();
					item.querySelector('ul').classList.add('active');
				})
			}
		})
	}).then(() => {
		const btnBack = document.querySelectorAll('.btn-back');
		// Button Back
		btnBack.forEach((item) => {
			item.addEventListener('click', function (e) {
				e.stopPropagation();
				item.parentElement.parentElement.classList.remove('active');
			})
		})
		// Overlay
		overlay.forEach((item) => {
			item.addEventListener('click', function () {
				item.classList.toggle('active');
				document.querySelector('body').classList.remove('disabled');
				mainMenus.classList.remove('active');
				topHeader.classList.remove('active');
				toggleMenu.classList.remove('active');
				subMenus.forEach((item) => {
					item.querySelector('ul').classList.remove('active');
				})
			})
		})
	})
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
	new WOW().init();
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
	// Toggle Menu
	subMenuMobile();
});

document.addEventListener('DOMContentLoaded', () => {});


// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());