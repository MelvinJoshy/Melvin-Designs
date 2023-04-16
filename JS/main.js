var preloader = setTimeout(animate,3000);

function animate(){
    var target = document.getElementById('intro');
    target.style.display = 'none';
}

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('toggle__open'),
      navClose = document.getElementById('nav__close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)








/*=============== SWIPER JS ===============*/

var swiper = new Swiper(".process__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: 'auto',
    loop: true,


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*======================SCROLL-TOP==============================================*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=====================================SCROLL-REVEAL-JS=======================================================*/


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 100
   })

   ScrollReveal().reveal('.hero-text', { delay: 300, origin:'top' });

   ScrollReveal().reveal('.home_image_content', { delay: 300, origin:'bottom' });

   ScrollReveal().reveal('.hero-sub-text', { delay: 300, origin:'left' });

   ScrollReveal().reveal('.hero__btn', { delay: 300, origin:'bottom' });


   ScrollReveal().reveal('.service_window', { delay: 300, origin:'bottom' });

   ScrollReveal().reveal('.product__logo_img', { delay: 300, origin:'left' });

   ScrollReveal().reveal('.skills__window', { delay: 300, origin:'bottom' });

   ScrollReveal().reveal('.skilled__headings', { delay: 300, origin:'bottom' });

   ScrollReveal().reveal('.process__container', { delay: 300, origin:'left' });

   ScrollReveal().reveal('.contact__btn__bottom', { delay: 300, origin:'bottom' });

   ScrollReveal().reveal('.contact__container h1', { delay: 300, origin:'top' });

   