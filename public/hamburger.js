const hamburger = document.querySelector('#btnHamburger');
const mobile = document.querySelector('.mobileMenu')
const body = document.querySelector('body');
const xx = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('open')) {
        mobile.style.display = 'none';
        mobile.style.opacity = '0';

        hamburger.classList.remove('open');
        hamburger.classList.add('close');
    } else {
        mobile.style.opacity = '1';
        mobile.style.display = 'block';

        hamburger.classList.add('open');
        hamburger.classList.remove('close');
    }
})

