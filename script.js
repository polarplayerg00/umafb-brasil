function toggleMenu() {
    const navLinks = document.querySelector('header nav');
    const menuIcon = document.querySelector('.menu-icon');

    if (navLinks.style.display === 'flex') {
        navLinks.style.animation = 'slideUp 0.5s forwards';
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 500);
        menuIcon.classList.remove('open');
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.animation = 'slideDown 0.5s forwards';
        menuIcon.classList.add('open');
    }
}
