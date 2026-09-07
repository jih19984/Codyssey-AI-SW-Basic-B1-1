## JS에서의 HTML 요소 저장
querySelector로 "이 요소를 선택해서 변수에 저장"해둔다.

## 변수 선언과 네이밍 규칙
주로 const를 사용 (재할당 금지)
변수 이름은 관례적으로 camelCase를 사용

## element.addEventListener('click', 콜백함수)
요소가 클릭됐을 때 실행할 함수를 등록.

## element.classList.toggle('active')
클래스가 없으면 추가하고, 있으면 제거함. 클릭할 때마다 있다 <-> 없다를 반복.

## classList
자바스크립트에서 HTML 요소의 class 속성을 다루기 위한 객체. 클래스를 추가/제거/토글할 때 사용

## document.querySelectorAll('선택자')
쿼리설렉터와 달리 조건에 맞는 모든 요소를 반환.

## element.forEach((item) => {...})
배열의 각 항목마다 순서대로 함수를 실행하는 배열 메서드

## element.scrollIntoView({behavior: 'smooth'})
해당 요소가 화면에 보이도록 부드럽게 스크롤 이동시킴

## event.preventDefault()
<a href="#projects">의 기본 동작을 막아서, 우리가 직접 scrollIntoView로 부드럽게 이동시킬 수 있게 함

## window.addEventListener('scroll', 콜백)
사용자가 스크롤할 때마다 이 함수가 반복 실행된다.

## window.scrollY
현재 페이지가 위에서부터 몇 px 스크롤 됐는지 나타내는 값

## localStorage
localStorage.getItem('키'): 브라우저에 저장해둔 값을 꺼내옴
localStorage.setItem('키', '값'): 브라우저에 값을 영구 저장

## IntersectionObserver(콜백함수, 옵션)
옵저버를 하나 생성해 option으로 threshold: 0.2와 같은 값을 넣어주면 "요소의 20% 이상이 화면에 보이면 콜백 실행"처럼 쓸 수 있다.

callback 함수는 감시중인 요소들을 받고, isIntersecting은 지금 화면에 보이는지(true/false)와 target(DOM 요소)를 가지고 있다.

## new FormData(폼요소)
폼 안의 모든 input/textarea 값을 한 번에 모아주는 객체

## Object.fromEntries(...)
FormData를 {name: "...", email: "...", message:"..."} 같은 평범한 객체 형태로 변환

## const {name, email, message} = 객체
구조분해 할당. 객체 안의 name, email, message 프로퍼티를 각각 같은 이름의 변수로 한 번에 꺼내는 문법

## 정규표현식 (Regular Expression)
문자열이 특정 패턴에 맞는지 검사하는 도구

예시: 
```js
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/: 정규표현식은 슬래시로 감쌈
^: 문자열 시작
[^\s@]+: 공백(\s) 아니고 @도 아닌 문자가 1개 이상
@: 골뱅이 문자 그대로
[^\s@]+: 다시 공백, @ 아닌 문자 1개 이상
\.: 점 그대로 (그냥 점은 정규식에서 아무 문자를 뜻함)
[^\s@]+: 공백, @ 아닌 문자 1개 이상
$: 문자열 끝

.test(): RegExp 객체의 메서드 중 하나로, test한 결과를 true, false 반환
```

## .innerHTML
자바스크립트에서 어떤 요소 안의 HTML 콘텐츠를 읽거나 통째로 바꿀 수 있는 속성
textContent와 달리 <b>, <p> 등이 실제 요소로 렌더링

## async function
이 함수 안에서 await를 쓸 수 있게 해주는 표시. "이 함수는 시간이 걸리는 작업을 포함한다."

## await fetch(url)
해당 url로 네트워크 요청을 보내고, 응답이 올 때까지 기다렸다가 다음 줄로 진행.
await가 없으면 응답이 오기도 전에 다음 코드가 먼저 실행됨.

## response.ok
HTTP 상태 코드가 200번대면 true, 아니면 (404, 403, 500 등) false

## throw new Error('메시지')
에러를 의도적으로 발생시키고, 이후 catch 블록으로 바로 넘어간다.

##  try {...} catch (error) {...}
try 안에서 에러가 나면 {네트워크 끊김, throw, JSON 파싱 실패 등} 전체가 멈추지 않고 catch로 넘어가서 처리함

## 널 병합 연산자 ??
```js
const value = a ?? b;
```
a가 null or undefined일 때만 b를 사용