// ── Hamburger Toggle ──
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

// Close nav when a link is clicked (mobile)
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    });
});

// ── Auto Active Nav Link ──
const currentPage = window.location.pathname.split('/').pop();

nav.querySelectorAll('a').forEach(link => {
    link.classList.remove('active'); // clear all first
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});