let stars = document.querySelector('#stars');
let moon = document.querySelector('#moon');
let mountains_behind = document.querySelector('#mountains_behind');
let mountains_front = document.querySelector('#mountains_front');
let title = document.querySelector('#title');
let button = document.querySelector('.button');
let header = document.querySelector('header');

scroll = () => {
    Y = window.scrollY;

    stars.style.left = `${Y * 0.25}px`;
    moon.style.top = `${Y * 1.05}px`;
    mountains_behind.style.top = `${Y * 0.5}px`;
    mountains_front.style.right = `${Y * 0}px`;

    title.style.marginRight = `${Y * 4}px`;
    title.style.marginTop = `${Y * 1.5}px`;

    button.style.marginTop = `${Y * 1.5}px`;

    header.style.top = `${Y * 0.5}px`;
}

window.addEventListener('scroll', scroll);