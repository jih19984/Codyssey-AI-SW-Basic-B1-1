## CSS 변수
CSS 변수는 색상, 폰트, 간격처럼 여러 곳에서 반복해서 쓰는 값을 한 곳에 정의해두고 재사용하는 기능

## :root
문서 최상위<html>을 가리키는 특수 선택자로, 여기에 변수를 선언하면 페이지 전체 어디에서나 쓸 수 있다.

## 변수 이름 규칙
--변수명처럼 대시 2개로 시작합니다.
실제로 사용할 때는 var(--변수명)으로 불러옵니다.

## font-family
텍스트의 서체를 지정하는 CSS 속성입니다.

## <header> Flexbox 배치
display: flex : 이 요소의 자식들을 flex 아이템으로 만들어서 가로로 나란히 배치하게 함
justify-content : space-between; 자식들 사이에 균등한 가격을 주되, 첫 번째는 맨 왼쪽 끝, 마지막은 맨 오른쪽 끝에 붙임.
align-items: center : 세로 방향 기준으로 가운데 정렬
text-align : 요소 안의 텍스트의 가로 정렬을 지정하는 속성

## 자손 선택자
ex. .nav-menu
자손 선택자는 클래스와 태그 이름 사이에 공백이 있으면, ".nav-menu라는 요소의 내부 어딘가에 있는 모든 a 태그"를 의미합니다.

.nav-menu a : .nav-menu 안에 있는 모든 자손
.nav-menu > a : .nav-menu의 직계 자식인 <a>만
.nav-menu.a : 공백이 없으면 완전히 다른 뜻 -> "nav-menu와 a라는 클래스를 동시에 가진 요소"

## fixed vs sticky
position: fixed;
요소를 문서 흐름에서 완전히 빼냄

position: sticky;
요소가 문서 흐름 안에 그대로 남아있어서 자기 자리를 차지

## inline 요소와 inline 블럭, 블럭 요소
둘 다 줄바꿈 없이 옆으로 나란히 배치된다.

inline은 width/height, margin 지정이 안먹히지만, inline-block은 width-height, margin이 먹힌다.
<span>, <a>, <strong>, <em> 등을 인라인 요소들이라고 한다.
<div>, <p>, <h1>, <ul>, <li> 등은 block 요소이다.


## flexbox와 grid
flexbox는 원래 한 방향으로 줄지어 배치하는데 최적화되어 있고, 아이템이 몇 개인지 한 줄에 몇 개 들어가는지 내용에 따라 자연스럽게 흘러가듯 결정된다.
Grid는 "가로x세로 격자"를 명시적으로 설계할 때 쓴다. 카드가 여러 줄에 걸쳐 정렬되어야 하고, 화면 크기에 따라 "한 줄에 몇 개씩 들어가는지"를 자동으로 재계산해야하는 경우 사용