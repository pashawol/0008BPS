"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".nav-wrap"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".nav-wrap ul li a")),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		var linkModal = document.querySelectorAll('.link-modal');

		function addData() {
			linkModal.forEach(function (element) {
				element.addEventListener('click', function () {
					var modal = document.querySelector(element.getAttribute("href"));
					var data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							var el = modal.querySelector(elem);
							el.tagName == "INPUT" ? el.value = val : el.innerHTML = val; // console.log(modal.querySelector(elem).tagName)
						}
					}

					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				});
			});
		}

		if (linkModal) addData();
	},
	// /modalCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		if (this.btnToggleMenuMobile) {
			this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {
					_this.btnToggleMenuMobile.forEach(function (element) {
						return element.classList.toggle("on");
					});

					_this.menuMobile.classList.toggle("active"); // document.body.classList.toggle("fixed");


					return false;
				});
			});
		}
	},
	closeMenu: function closeMenu() {
		if (this.menuMobile) {
			this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");
			});
			this.menuMobile.classList.remove("active"); // document.body.classList.remove("fixed");
		}
	},
	mobileMenu: function mobileMenu() {
		if (this.menuMobileLink) {
			this.toggleMenu(); // document.addEventListener('mouseup', (event) => {
			// 	let container = event.target.closest(".menu-mobile--js.active"); // (1)
			// 	if (!container) {
			// 		this.closeMenu();
			// 	}
			// }, { passive: true });

			window.addEventListener('resize', function () {
				if (window.matchMedia("(min-width: 992px)").matches) {
					JSCCommon.closeMenu();
				}
			}, {
				passive: true
			});
		}
	},
	// /mobileMenu
	inputMask: function inputMask() {
		// mask for input
		var InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			$("body").prepend('<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>');
		}
	}
};
var $ = jQuery;

function eventHandler() {
	var _objectSpread2;

	JSCCommon.modalCall();
	JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	JSCCommon.ifie(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// /добавляет подложку для pixel perfect

	var defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 4
		},
		watchOverflow: true,
		loop: true
	};
	var swiper4 = new Swiper('.sBanners__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true
	}));
	var swiper5 = new Swiper('.sProgram__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		slidesPerView: 1,
		spaceBetween: 20,
		// freeMode: true, 
		navigation: {
			nextEl: '.sProgram .swiper-button-next',
			prevEl: '.sProgram .swiper-button-prev'
		},
		breakpoints: {
			576: {
				spaceBetween: 30,
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 39
			}
		}
	}));
	var swiper6 = new Swiper('.sPerson__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, (_objectSpread2 = {
		effect: 'coverflow',
		spaceBetween: 30,
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto'
	}, _defineProperty(_objectSpread2, "centeredSlides", true), _defineProperty(_objectSpread2, "coverflowEffect", {
		rotate: 0,
		stretch: 0,
		depth: 350,
		modifier: 1,
		slideShadows: false
	}), _defineProperty(_objectSpread2, "navigation", {
		nextEl: '.sPerson .swiper-button-next',
		prevEl: '.sPerson .swiper-button-prev'
	}), _defineProperty(_objectSpread2, "breakpoints", {
		1200: {
			coverflowEffect: {
				rotate: 0,
				stretch: -160,
				depth: 450,
				modifier: 1,
				slideShadows: false
			}
		}
	}), _objectSpread2))); // $(".dropzone").dropzone({
	// 	url: "/file-upload"
	// });

	var toggleBtn = document.querySelector('.sMembers__toggle');

	if (toggleBtn) {
		toggleBtn.addEventListener('click', function () {
			var toggleBlock = document.querySelectorAll(".sMembers__col-toggle");
			this.classList.toggle('active');
			toggleBlock.forEach(function (el) {
				el.classList.toggle('active');
			});
		});
	} // let toggleEdit = document.querySelector('.sCabinet__edit-btn');
	// if (toggleEdit) {
	// 	toggleEdit.addEventListener('click', function (e) {
	// 		e.preventDefault()
	// 		let toggleBlock = document.querySelectorAll(".sCabinet__input");
	// 		this.classList.toggle('active')
	// 		toggleBlock.forEach(function (el) {
	// 			el.classList.toggle('edit').toggleAttribute(readonly); 
	// 		}) 
	// 	})
	// }

}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}