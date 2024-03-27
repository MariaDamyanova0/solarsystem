const currentPath = window
    .location
    .pathname
    .split('/')
    .pop();

const navLinks = document
    .querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const href = link
        .querySelector('a')
        .getAttribute('href')
        .split('/')
        .pop();

    if (href === currentPath) {
        link.classList.add('active');
    }
});