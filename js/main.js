const navTrigger2 = document.querySelectorAll(".nav-trigger"); /*картинка*/
const trigger2 = document.querySelectorAll(".trigger"); // блок
const personalInfoWrapper = document.querySelectorAll(".personal-info__wrapper");
navTrigger2.forEach((element, index) => {
	element.addEventListener('click', function () {
		const per = this.closest(".personal-info__wrapper");
		const trigger = per.querySelector(".trigger");
		trigger.classList.toggle('no-hidden');
		this.classList.toggle('trigger-img');
		personalInfoWrapper[index].classList.toggle('open-personal-info');
		console.log(personalInfoWrapper[index]);
	});

});

// МЕНЮ БУРГЕР
$('.menu-btn').on('click', function () {
	$(this).toggleClass('menu-btn--active');
	$('.mobile-menu').toggleClass('mobile-menu--active')
})

$(".password-new").click(function () {

	$(this).toggleClass("fa-eye fa-eye-slash");
	var input = $("#password-new");
	if (input.attr("type") === "password") {
		input.attr("type", "text");
	} else {
		input.attr("type", "password");
	}
});

$(".password-new-recovery").click(function () {

	$(this).toggleClass("fa-eye fa-eye-slash");
	var input = $("#password-new-recovery");
	if (input.attr("type") === "password") {
		input.attr("type", "text");
	} else {
		input.attr("type", "password");
	}
});


var swiper = new Swiper(".map-main", {
	direction: "vertical",
	slidesPerView: 1.5,
	slidesPerGroupSkip: 1.5,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
var swiper = new Swiper(".map-contacts", {
	direction: "vertical",
	slidesPerView: 1.5,
	slidesPerGroupSkip: 1.5,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
var swiper = new Swiper(".map-partners", {
	direction: "vertical",
	slidesPerView: 1,
	slidesPerGroupSkip: 1,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
var swiper = new Swiper(".map-lottery", {
	direction: "vertical",
	slidesPerView: 1,
	slidesPerGroupSkip: 1,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 4,
	centeredSlides: false,
	autoplay: {
		delay: 4000,
	},
	slidesPerGroupSkip: 1,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1
		},
		768: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4
		}
		
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

var swiper = new Swiper(".mySwiper2-partners", {
	slidesPerView: 4,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	slidesPerGroupSkip: 1,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		992: {
			slidesPerView: 3
		},
		1200: {
			slidesPerView: 4
		}
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	navigation: {
		nextEl: ".swiper-button-next__partners",
		prevEl: ".swiper-button-prev__partners",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

var swiper = new Swiper(".mySwiper2-trading", {
	slidesPerView: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	slidesPerGroupSkip: 1,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		769: {
			slidesPerView: 4,
			slidesPerGroup: 1,
		},
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	navigation: {
		nextEl: ".swiper-button-next__trading",
		prevEl: ".swiper-button-prev__trading",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});


var swiper = new Swiper(".cabinet", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next4",
		prevEl: ".swiper-button-prev4",
	},
	breakpoints: {
		576: {
			slidesPerView: 1.5,
			slidesPerGroup: 1,
		},
		769: {
			slidesPerView: 3,
			slidesPerGroup: 1,
		},
		
	},
});








var swiper = new Swiper(".mySwiper2", {
	slidesPerView: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	slidesPerGroupSkip: 1,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		769: {
			slidesPerView: 4,
			slidesPerGroup: 1,
		},
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	navigation: {
		nextEl: ".swiper-button-next2",
		prevEl: ".swiper-button-prev2",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});


var swiper = new Swiper(".mySwiper3-partners", {
	slidesPerView: 4,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	slidesPerGroupSkip: 1,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
			slidesPerGroup: 1,
		},
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	navigation: {
		nextEl: ".swiper-button-next2__partners",
		prevEl: ".swiper-button-prev2__partners",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

var swiper = new Swiper(".mySwiper3", {
	slidesPerView: 1,
	centeredSlides: false,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		769: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	pagination: {
		el: ".swiper-pagination",
		type: "custom",
		renderCustom: function (swiper, current, total) {
			return ('0' + current).slice(-2) + ' из ' + ('0' + total).slice(-2);
		}
	},
	navigation: {
		nextEl: ".swiper-button-next3",
		prevEl: ".swiper-button-prev3",
	},
});

var swiper = new Swiper(".mySwiper-partners", {
	slidesPerView: 1,
	centeredSlides: false,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		769: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

var swiper = new Swiper(".mySwiper-lottery", {
	slidesPerView: 1,
	centeredSlides: false,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		769: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

var swiper = new Swiper(".mySwiper-trading", {
	slidesPerView: 1,
	centeredSlides: false,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		769: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

var swiper = new Swiper(".brands-slider", {
	slidesPerView: 1.5,
	autoplay: {
		delay: 2000,
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
		},
		390: {
			slidesPerView: 1.3,
		},
		500: {
			slidesPerView: 1.5,
		}
	},
});

var swiper = new Swiper(".lottery-contest-slider", {
	slidesPerView: 1.5,
	spaceBetween: 20,
	autoplay: {
		delay: 2000,
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 20,
		},
		425: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
		576: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3.2,
			spaceBetween: 20,
		}
	},
});

var swiper = new Swiper(".cars-slider", {
	slidesPerView: 1.5,
	spaceBetween: 20,
	autoplay: {
		delay: 2000,
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 20,
		},
		425: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
		576: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3.2,
			spaceBetween: 20,
		}
	},
});

var swiper = new Swiper(".contacts-shop-slider", {
	slidesPerView: 1.5,
	spaceBetween: 20,
	autoplay: {
		delay: 2000,
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 20,
		},
		425: {
			slidesPerView: 1.2,
			spaceBetween: 20,
		},
		576: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		}
	},
});



 $('.salon-item').on('click', function() {
	$('.contacts-wrapper').toggleClass('d-none')
 });

 $('.close-slider').on('click', function() {
	$('.contacts-wrapper').toggleClass('d-none')
 });


const salonItemMoreDown = document.querySelectorAll('.salon-item__more_down'); //кнопка
const contactsWrapper = document.querySelectorAll('.contacts-wrapper'); // слайдер
const moreDetails = document.querySelectorAll('.more-details'); // оббертка, где был ul
const moreApp = document.querySelectorAll('.salon-item-list');

salonItemMoreDown.forEach((element, index) => {
	element.addEventListener('click', function () {
		this.classList.toggle('salon-item__more_app');
		moreApp[index].classList.toggle('d-none');
	});
});






// const salonItemImg = document.querySelectorAll('.salon-item__img');
// salonItemImg.forEach(element => {
// 	element.addEventListener('click', function () {
// 		console.log(element);
// 		console.log(element);
// 		const contactsWrapper = document.querySelector('.contacts-wrapper');
// 		contactsWrapper.classList.toggle('d-none');
// 		console.log(element);
// 		console.log(contactsWrapper);
// 	});

// });



var swiper = new Swiper(".lottery", {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});



$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 800);
	});
});

var swiper = new Swiper('.contacts-slider', {
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},

	slidesPerView: 1,

	centeredSlides: true,
 
	// Navigation arrows
	navigation: {
	  nextEl: '.contacts-slider__next',
	  prevEl: '.contacts-slider__prev',
	},
 
	thumbs: {
		swiper: {
			el: '.contacts-slider-thumbs',
			loop: false,
			slidesPerView: 3,
			spaceBetween: 10
		}
	},
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
 });