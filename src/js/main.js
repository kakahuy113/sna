import {
	getSVGs,
	Loading
} from './util/utilities';
import Cookie from './lib/Cookie';
import Tab from './lib/Tab';
var mainBanners;
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
	(function() {
		const heightHeader = document.querySelector('header').clientHeight;
		const itemsFullScreenBanner = document.querySelectorAll('.main-banner__slider .item-banner-fullscreen');
		itemsFullScreenBanner.forEach((item) => {
			if (window.innerWidth > 1350) {
				item.setAttribute('style', `height: calc(100% - ${heightHeader}px)`)
			}
		})
	})()

	mainBanners = new Swiper('.main-banner__slider .swiper-container', {
		speed: 700,
		loop: true,
		updateOnWindowResize: true,
		pagination: {
			el: '.main-banner__slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 10000,
		},
		breakpoints: {
			1024: {
				autoHeight: true,
			},
			768: {
			}
		}
	});
};

const relatedJobsSlider = () => {
    const relatedJobsSlider = new Swiper('.related-jobs .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            }
        }
    })
    const partner = new Swiper('.partner-section .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        simulateTouch: false,
        speed: 800,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
        breakpoints: {
             320: { 
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
            spaceBetween: 40
          }
        }
    })
}

const checkLayout = () => {
	const heightHeader = document.querySelector('header').offsetHeight;
	const sliderBanner = document.querySelector('.main-banner__slider');
	const mainBanner = document.querySelector('.main-banner');
	const mainBannerSlider = document.querySelector(".main-banner__slider--video")
	if (sliderBanner) {
		sliderBanner.style.cssText = `padding-top: ${heightHeader}px`;
	} else if (mainBanner) {
		mainBanner.style.cssText = `padding-top: ${heightHeader}px`;
	} else if(mainBannerSlider){
		mainBannerSlider.style.cssText = `padding-top: ${heightHeader}px`;
	}   else {
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
	if ($(window).width() <= 1023.98) {
		$('.item-link-footer h5').click(function(e) {
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).siblings('ul').slideToggle();
			$('.item-link-footer h5').not(this).siblings('ul').slideUp();
			$('.item-link-footer h5').not(this).removeClass('active');
		});
	}
};

// const fancyboxBookingFixed = () => {
//     $('.iframeBooking').fancybox({
//         overlayShow: true,
//         autoScale: true,
//         autoDimensions: false,
//         modal: true,
//         type: 'iframe',
//         autoSize: false,
//         showCloseButton: true,
//         afterShow: function() {
//             $('.fancybox-content').append(
//                 '<a title="Close" class="fancybox-item fancybox-close custom-close-fancybox-booking" href="javascript:jQuery.fancybox.close();">CLOSE</a>'
//             );
//         },
//     });
// };

const quoteSlider = () => {
	const quoteSlider = new Swiper('.quote__slider .swiper-container', {
		speed: 700,
		effect: 'fade',
		autoplay: {
			delay: 10000,
		},
		loop: true,
		autoHeight: true,
		navigation: {
			nextEl: '.quote__slider .swiper-button-next',
			prevEl: '.quote__slider .swiper-button-prev',
		},
	});
};

const activeMenu = () => {
	// var url = window.location.pathname.split('/').pop();
	// var furl = 'http://localhost:8000/admissions-policy.html';
	var link = "";
	var url = window.location.pathname.split('/');
	// var url = furl.split("/");
	if (url.length !== 4) {
		if (url[(url.length - 1)] == "") {
			link = url[(url.length - 2)];

		} else {
			link = url[(url.length - 1)];
		}
		$('.b_header--list-menu ul li').each(function() {
			var getHref = $(this).children('a').eq(0).attr('href');
			var href = getHref.split('/').pop();
			if (href === link) {
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
	}

};

const setWidth = () => {
	const itemLi = $(".nav-menu.customer li");
	const widthLi = 100 / (itemLi.length);
	if (itemLi.length <= 5) {
		itemLi.css("width", widthLi + "%");
	}
}

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
			'slideShow',
			'download',
			'fullScreen',
			'share',
			'thumbs',
			'close'
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

const checkLanguage = () => {
	let lang = $("html").attr("lang");
	if (lang == "vi") {
		$(".b_header--list-menu").addClass("resize--vi");
		$(".index-1 .block-title--main").addClass("active");
	}
}

const BiFieldsTitleEdit = () => {
	const list = document.querySelectorAll('.b_header--list-menu>ul>li>a');
	console.log();
	if (window.innerWidth > 1024.98) {
		list.forEach((item) => {
			item.innerHTML = item.textContent.replace(',', '<br>');
		})
	} else {
		list.forEach((item) => {
			item.innerHTML = item.textContent.replace(',', '');
		})
	}
}

const getTeamFancyBox = () => {
	$('.fancybox__getTeam').fancybox({
		iframe: {
			css: {
				width: '600px'
			}
		},
		buttons: [
			'download',
			'close'
		],
		thumbs: {
			autoStart: true,
			axis: 'x'
		}
	})
}

//random code
const randomCodeTeam = () => {
	let count = $(".team__popup");
	var i,
		code = [];
	for (i = 0; i < $(".team__popup").length; i++) {
		code[i] = '_' + Math.random().toString(36).substr(2, 9);
		$(".team__popup").eq(i).attr("id", code[i]);
		$(".fancybox__getTeam").eq(i).attr('data-src', '#' + code[i]);
	}
}

// const changeHeighVideoBanner = () => {
//    if(document.querySelector(".index-page")) {
//     const banner = document.querySelector(".main-banner__slider");
//     const video = banner.querySelectorAll(".video");
//     const image = document.querySelector(".item-banner-fullscreen.img").offsetHeight;
//     const widthBrowser =document.documentElement.clientWidth;
//     const swiperslide = document.querySelectorAll(".main-banner__slider .swiper-slide")
//     const swipercontainer = document.querySelector(".main-banner__slider .swiper-container")
//     if(widthBrowser < 767.98) {
//         swiperslide.forEach(item => {
//             item.style.height = `${image}px`
//         });
//         swipercontainer.style.height = `${image}px`
//         video.forEach(item => {
//             item.style.height = `${image}px`
//         })
//     }
//    }
// }

function debounce(fn, delay, immediate) {
	let timeout;

	// Đây là function sẽ được thực thi khi debouncedKeyUp được thực thi ở ví dụ trên
	return function executedFn() {
		// Mình save lại this vào biến context
		let context = this; // "this" context của executedFn

		// Save lại arguments vào args. Trong JS, arguments giữ giá trị của tất cả tham số được truyền vào cho một function.
		// Cho dù bạn không khai báo tham số cho một hàm, thì khi truyền tham số vào cho hàm đó, các bạn vẫn có thể truy xuất
		// đến các tham số bằng biến arguments này. Theo ví dụ trên, thì arguments ở đây sẽ chứa "event" 
		let args = arguments; // "arguments" của fn

		// Function later này sẽ được gọi sau khi delay được chạy xong. 
		// Nghĩa là mình return executedFn, khi executedFn được thực thi thì sau khoản delay, later sẽ được thực thi.
		let later = function() {
			// Gán null cho timeout => cho thấy delay đã chạy xong
			timeout = null;

			// Gọi hàm fn với apply
			if (!immediate) fn.apply(context, args);
		};

		// Xác định xem nên gọi fn dựa vào tham số immediate
		let callNow = immediate && !timeout;

		// Dòng clearTimeout sẽ reset timeout đang hiện hữu (**existed**). Đây là điều cần thiết, 
		// vì mình cần hủy timeout và tạo 1 timeout mới nếu như debounce được thực thi khi 
		// delay chưa chạy xong.
		clearTimeout(timeout);

		// Khởi tạo (lại) timeout mới và gán vào biến timeout để có thể clear/check.
		timeout = setTimeout(later, delay);

		// Nếu như immediate là true, thì mình sẽ gọi fn lần đầu tiên ở đây.
		if (callNow) fn.apply(context, args);
	}
}

const resize = () => {
	const updateSwiper = () => { 
		mainBanners.destroy()
		mainBanners = new Swiper('.main-banner__slider .swiper-container', {
			speed: 700,
			loop: true,
			updateOnWindowResize: true,
			pagination: {
				el: '.main-banner__slider .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			autoplay: {
				delay: 10000,
			},
			breakpoints: {
				1024: {
					autoHeight: true,
				},
				768: {
				}
			}
		});
	}
	const debounceResize = debounce(updateSwiper, 500);
	window.addEventListener('resize', debounceResize);
}

const toogleCatalog = () => {
	if(document.querySelector(".news--page")) {
		document.querySelector(".news--page__wrapper--left .catalog .title").addEventListener("click" , (e) => {
			document.querySelector(".news--page__wrapper--left .catalog .content").classList.toggle("active");
		})
	}
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
	// SLIDER
	mainBanner();
	// Sub Menu Footer
	subMenuFooter();
	// Cumstom Scroll Bar
	customScrollBar();
	quoteSlider();
	relatedJobsSlider();
	coreSliderStyle_1();
	pdfSlider();
	// FancyboxBooking
	// fancyboxBookingFixed();
	//search
	toggleSearch();
	// Toggle Menu
	subMenuMobile();
	//activeMenu
	// activeMenu();
	// TabStyle_1
	coreTabStyle_1();
	//
	checkLanguage();
	// THỊNH
	libraryFancyApp();
	// TOÀN IntlTelInput
	initIntlTelInput();
	BiFieldsTitleEdit();
	getTeamFancyBox();
	randomCodeTeam();
	setWidth();
	toogleCatalog();
	// changeHeighVideoBanner();
	resize();
	const admissionProcedures = new Tab('.library-page.tab-container');
});