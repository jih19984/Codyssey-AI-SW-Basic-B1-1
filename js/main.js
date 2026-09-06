const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.querySelector('.theme-toggle');
const scrollTopBtn = document.querySelector('#scroll-top-btn');
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');
const formSuccess = document.querySelector('#form-success');

/* 다크모드 - 페이지 로드 시 저장된 설정 불러오기 */
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }

    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

/* 햄버거 버튼의 토글 활성화 */
hamburger.addEventListener('click', ()=> {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
})

/* 부드러운 스크롤 추가 */
const navLinks = document.querySelectorAll('.nav-menu a, .hero-cta a');

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({behavior: 'smooth'});

        navMenu.classList.remove(
            'active'
        );
        hamburger.classList.remove(
            'active'
        );
    });

})

/* 스크롤 이벤트 - 네비 배경색 변경 + 스크롤 탑 버튼 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    }
    else {
        scrollTopBtn.classList.remove('show');
    }
});

/* 스크롤 탑 버튼 클릭 동작 */
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

/* 스크롤 애니메이션 */
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.5});

fadeElements.forEach((el) => observer.observe(el));

/* 이름, 메시지 필수값 검증 */
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const {name, email, message} = Object.fromEntries(new FormData(contactForm));

    let isValid = true;

    if (!name.trim()) {
        nameError.textContent = '이름을 입력해주세요.';
        isValid=false;
    }
    else {
        nameError.textContent = '';
    }

    if (!message.trim()) {
        messageError.textContent = '메시지를 입력해주세요.';
        isValid=false;
    }
    else {
        messageError.textContent = '';
    }
})