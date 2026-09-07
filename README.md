# 나를 소개하는 웹페이지 만들기

> AI/SW 기초 · 웹 기초와 프론트엔드 미션
> 순수 HTML/CSS/JavaScript로 완성하는 반응형 포트폴리오 웹사이트

- **GitHub 저장소**: `https://github.com/jih19984/Codyssey-AI-SW-Basic-B1-1`
- **배포 URL (GitHub Pages)**: [https://jih19984.github.io/Codyssey-AI-SW-Basic-B1-1/](https://jih19984.github.io/Codyssey-AI-SW-Basic-B1-1/)
- **작성자**: 정인호 (`jih19984`)

---

## 1. 프로젝트 소개

HTML, CSS, JavaScript만으로 처음부터 끝까지 완성하는 반응형 포트폴리오 웹사이트입니다.
외부 프레임워크·라이브러리 없이 시맨틱 마크업, 반응형 CSS, DOM 이벤트 처리, GitHub API 비동기 연동을 직접 구현하여
"사용자 이벤트 → 상태 변경 → 화면 렌더링"이라는 웹 동작의 기본 원리를 익히는 것을 목표로 합니다.

## 2. 사용 기술

| 영역 | 기술 |
|---|---|
| 마크업 | HTML5 (시맨틱 태그) |
| 스타일 | CSS3 (Flexbox, Grid, CSS Variables, Media Query) |
| 스크립트 | Vanilla JavaScript (ES6+, fetch/async-await, Intersection Observer) |
| 외부 API | GitHub REST API (`/users/{username}/repos`) |
| 개발 환경 | VS Code + Live Server |
| 배포 | GitHub Pages |
| 폰트/아이콘 (선택) | Google Fonts, Font Awesome |

## 3. 폴더 구조

```
Codyssey-AI-SW-Basic-B1-1/
├── index.html              # 메인 페이지
├── css/
│   └── style.css           # 전체 스타일시트 (변수, 레이아웃, 반응형, 다크모드)
├── js/
│   └── main.js             # 인터랙션, DOM 이벤트, GitHub API 연동
├── images/
│   └── profile.jpeg        # About 섹션 프로필 이미지
├── screenshots/            # README용 스크린샷 (데스크톱/모바일/다크모드)
└── README.md
```

## 4. 섹션 구성

- **Header / Nav** — 로고, 메뉴(앵커 링크), 다크모드 토글, 햄버거 버튼(모바일)
- **Hero** — 인사말, CTA 버튼 (Projects로 이동 / Contact로 이동)
- **About** — 프로필 이미지, 자기소개
- **Skills** — 기술 스택 목록
- **Projects** — GitHub API 연동 카드 리스트 (로딩/성공/에러/빈 상태)
- **Contact** — 문의 폼 (이름/이메일/메시지, 유효성 검사)
- **Footer** — 저작권, 소셜 링크
- **Scroll Top 버튼** — 스크롤 300px 이상에서 노출

## 5. 상태 → 렌더링 흐름 (핵심 개념)

| # | 사용자 이벤트 | 상태 변경 | 화면 업데이트 |
|---|---|---|---|
| 1 | 다크모드 토글 클릭 | `theme` (light/dark), localStorage 저장 | `data-theme` 속성 변경 → 전체 색상 전환 |
| 2 | 페이지 로드 시 GitHub API 호출 | `loading → success/error/empty` | Projects 섹션에 스피너 / 카드 리스트 / 에러+재시도 버튼 / 빈 상태 문구 렌더링 |
| 3 | Contact 폼 입력/제출 | 필드별 유효성 상태 (필수값, 이메일 형식) | 에러 메시지 표시/숨김, 제출 성공 시 성공 메시지 표시 |
| 4 | (보너스) 언어 필터 버튼 클릭 | `currentFilter` | `filter()`로 걸러진 프로젝트만 카드로 렌더링 |
| 5 | 스크롤 이벤트 | 스크롤 위치(60px, 300px 기준) | Nav 배경색 변경, Scroll-top 버튼 노출/숨김 |
| 6 | 햄버거 버튼 클릭 | 메뉴 열림/닫힘 상태 | `classList.toggle('active')`로 모바일 메뉴 표시 |

## 6. 기준값 (자유 변경 가능, 실제 적용값 기재)

- 스크롤 탑 버튼 노출 기준: **300px**
- 네비게이션 배경색 변경 기준: **60px**
- Intersection Observer threshold: **0.1** (Projects 섹션이 카드 개수에 따라 세로로 매우 길어질 수 있어, 0.2~0.5처럼 높은 값을 쓰면 요소 면적의 상당 부분이 화면에 들어오기 전까지 애니메이션이 아예 트리거되지 않는 문제가 있어 0.1로 낮춤)
- 반응형 브레이크포인트: **768px(태블릿), 1024px(데스크톱)**

## 7. 과제 체크리스트

### 프로젝트 기본 구성
- [x] `index.html`, `css/`, `js/`, `images/` 폴더 구조 분리
- [x] 외부 스타일시트/스크립트 HTML 연결
- [x] VS Code + Live Server 개발 환경 구성

### HTML 구조 (시맨틱 마크업)
- [x] `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` 사용
- [x] Hero / About / Skills / Projects / Contact / Footer 섹션 포함
- [x] 네비게이션에 각 섹션 앵커 링크
- [x] 모든 이미지에 의미있는 `alt` 속성
- [x] 폼 `<label for>` - `id` 매칭

### CSS 스타일링
- [x] `css/style.css` 외부 스타일시트 사용
- [x] `:root` CSS 변수 (색상/폰트/간격)
- [x] `[data-theme="dark"]` 다크모드 변수
- [x] 네비게이션 Flexbox 레이아웃
- [x] Projects 카드 Grid (`auto-fit`, `minmax`) 반응형
- [x] 모바일 퍼스트 + 768px/1024px 브레이크포인트
- [x] 모바일에서 네비 숨김 + 햄버거 버튼 노출
- [x] 버튼/카드 hover + transition, box-shadow

### JavaScript 기초
- [x] `<script defer>` 연결
- [x] `const`/`let`만 사용 (`var` 금지)
- [x] `addEventListener`만 사용 (인라인 `onclick` 금지)
- [x] `querySelector`/`querySelectorAll`, `textContent`/`innerHTML`, `classList` 조작
- [ ] `click`/`submit`/`scroll`/`input` 이벤트 처리, `preventDefault()` — `input` 이벤트는 아직 미구현 (현재 `click`/`submit`/`scroll`만 사용 중)

### 인터랙션
- [x] 햄버거 메뉴 토글
- [x] 부드러운 스크롤 (앵커 클릭 시)
- [x] 스크롤 탑 버튼 (300px 기준)
- [x] 스크롤 시 네비 배경색 변경 (60px 기준)
- [x] 다크모드 토글 + localStorage 유지
- [x] Intersection Observer 스크롤 애니메이션 (threshold 0.1)
- [x] Contact 폼 유효성 검사 (필수값, 이메일 형식, 에러 메시지, 성공 메시지)

### ES6+ 문법 & 배열 메서드
- [x] 화살표 함수
- [x] 템플릿 리터럴로 카드 HTML 생성
- [x] 구조분해 할당
- [x] `map`으로 GitHub 데이터 → 카드 변환
- [ ] `filter` (언어별 필터, 선택) — 보너스 과제, 미구현
- [x] `forEach` 배열 순회

### 비동기 처리 & API 연동
- [x] `fetch` + `async/await`로 `https://api.github.com/users/{username}/repos` 호출
- [x] 로딩 상태 UI (텍스트: "프로젝트를 불러오는 중 ...")
- [x] 성공 상태 UI (카드 리스트)
- [x] 에러 상태 UI ("프로젝트를 불러올 수 없습니다" + 재시도 버튼, 403 레이트리밋 대응)
- [x] 빈 상태 UI ("표시할 프로젝트가 없습니다")
- [x] `try/catch` 에러 처리

### 배포 & 문서화
- [x] GitHub Pages 배포
- [x] 배포 URL에서 전체 기능 정상 동작 확인
- [x] README에 소개/기술스택/배포URL 포함
- [ ] 데스크톱/모바일/다크모드 스크린샷 첨부

### 보너스 (선택)
- [ ] 언어별 프로젝트 필터링 (`array.filter()`)
- [ ] Hero 타이핑 효과
- [ ] Formspree/EmailJS로 폼 실제 전송
- [ ] `prefers-color-scheme` 시스템 다크모드 감지

## 8. 스크린샷

| 데스크톱 | 모바일 | 다크모드 |
|---|---|---|
| _(예정)_ | _(예정)_ | _(예정)_ |

## 9. 개발/실행 방법

```bash
# 저장소 클론
git clone https://github.com/jih19984/Codyssey-AI-SW-Basic-B1-1.git

# VS Code에서 열기 후 Live Server 확장으로 index.html 실행
```

## 10. 제약 사항

- React/Vue/Angular, jQuery, Bootstrap, Tailwind 등 외부 라이브러리 사용 금지 (아이콘/웹폰트는 허용)
- `var` 대신 `const`/`let`, 인라인 `onclick`/`style` 금지
- GitHub API 비인증 호출은 시간당 60회 제한 → 잦은 새로고침 자제, 403 에러 시 에러 UI 표시
