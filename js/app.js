const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

 
document.querySelectorAll('.faq h3').forEach((faq) => {
    faq.addEventListener('click', () => {
        const parent = faq.parentElement;
        parent.classList.toggle('open');
    });
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.classList.toggle('active');
});