const menuHamburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links');

if (menuHamburger && navLinks) {
    // toggle menu and icon
    menuHamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('mobile-menu');
        menuHamburger.classList.toggle('open');
    });

    // close when clicking a link inside the mobile menu
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (navLinks.classList.contains('mobile-menu')) {
                navLinks.classList.remove('mobile-menu');
                menuHamburger.classList.remove('open');
            }
        });
    });

    // close when clicking outside the menu
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('mobile-menu')) {
            const isClickInsideMenu = navLinks.contains(e.target) || menuHamburger.contains(e.target);
            if (!isClickInsideMenu) {
                navLinks.classList.remove('mobile-menu');
                menuHamburger.classList.remove('open');
            }
        }
    });

    // close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('mobile-menu')) {
            navLinks.classList.remove('mobile-menu');
            menuHamburger.classList.remove('open');
        }
    });
}