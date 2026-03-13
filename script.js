// Меню бургер
function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}

// Кнопка вверх
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Анимация появления
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, { threshold: 0.3 });

faders.forEach(fader => appearOnScroll.observe(fader));
// Слайдер без CSS файла
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Устанавливаем начальные стили через JS
slides.forEach(slide => {
    slide.style.display = "none";
    slide.style.width = "100%";
    slide.style.transition = "opacity 1s ease-in-out";
});

slides[0].style.display = "block"; // показываем первый слайд

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}

// Автослайдер
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);

