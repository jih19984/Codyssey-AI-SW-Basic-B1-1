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
const projectsContainer = document.querySelector('#projects-container');

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
/* threshold: 0.5는 이 요소의 면적이 50% 이상이 화면에 보여야 콜백을 실행하라는 뜻 */
/* 기존의 프로젝트 카드가 너무 많아 다 불러오면 전체 면적의 50%가 보일 수가 없어 콜백을 실행하지 않는 현상 발생 -> threshold: 0.1로 수정 */
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.1});

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

/* 이메일 필수 값 형식 검증 */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!email.trim()) {
    emailError.textContent = '이메일을 입력해주세요.';
    isValid = false;
}
else if (!emailPattern.test(email)) {
    emailError.textContent = '올바른 이메일 형식이 아닙니다.';
    isValid = false;
}
else {
    emailError.textContent = '';
}

/* 최종 isValid 확인 */
if (isValid) {
    formSuccess.textContent='문의가 성공적으로 전송되었습니다!';
    formSuccess.classList.add('show');
    contactForm.reset();
}
else {
    formSuccess.classList.remove('show');
}

})

/* 로딩 상태 렌더링 */
const renderLoading = () => {
    projectsContainer.innerHTML = '<p class="status-message">프로젝트를 불러오는 중 ...</p>'
}

/* data를 카드로 변환하기 */
const renderProjects = (repos) => {

    /* 빈 상태 처리 */
    if (repos.length === 0) {
        projectsContainer.innerHTML = '<p class="status-message">표시할 프로젝트가 없습니다.</p>'
        return;
    }

    const cardsHTML = repos.map((repo) => {
        const { name, description, html_url, stargazers_count, language } = repo;

        return `
        <article class="project-card">
            <h3>${name}</h3>
            <p>${description ?? '설명이 없습니다.'}</p>
            <div class="project-meta">
                <span>⭐ ${stargazers_count}</span>
                <span>${language ?? '언어 없음'}</span>
            </div>
            <a href="${html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub에서 보기</a>
        </article>
            `;
    }).join('')

    projectsContainer.innerHTML = cardsHTML;
}

/* 에러 상태 렌더링 함수 */
const renderError = () => {
    projectsContainer.innerHTML =`
    <div class="status-message">
    <p>프로젝트를 불러올 수 없습니다.</p>
    <button id="retry-btn" class="btn btn-primary">다시 시도</button>
    </div>
    `;
};

/* GitHub API 호출 */
const fetchProjects = async () => {
    renderLoading();

    try {
        const response = await fetch('https://api.github.com/users/jih19984/repos');
        if (!response.ok) {
            throw new Error('GitHub API 요청 실패');
        }
        const data = await response.json();
        renderProjects(data);
    }
    catch (error) {
        console.error(error);
        renderError();
    }
};

/* 재시도 버튼 클릭 처리 */
projectsContainer.addEventListener('click', (event) => {
    if (event.target.id === 'retry-btn') {
        fetchProjects();
    }
})

fetchProjects();
