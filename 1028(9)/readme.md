## 10월 28일 수업내용

### 1. HTML DOM이란?

- **DOM (Document Object Model)**: HTML 태그 하나당 객체(DOM 객체) 하나가 생성됨
- HTML 태그의 포함관계에 따라 **DOM 트리** 형성 (부모-자식 관계)
- DOM 트리의 **루트는 `document` 객체**
- 목적: HTML 태그의 모양이나 콘텐츠를 자바스크립트로 제어

### 2. DOM 객체 구성 요소

| 구성 요소 | 설명 |
|---------|------|
| 프로퍼티 | HTML 속성 반영 |
| 메소드 | HTML 태그 제어 함수 |
| 컬렉션 | 자식 객체들의 집합 |
| 이벤트 리스너 | 이벤트 처리 함수 |
| CSS3 스타일 | `style` 프로퍼티로 접근 |

### 3. DOM 객체 찾기

```javascript
document.getElementById("id");              // id로 찾기
document.getElementsByTagName("div");       // 태그 이름으로 찾기 (배열)
document.getElementsByClassName("class");   // 클래스로 찾기 (배열)
```

### 4. 스타일 변경

CSS 프로퍼티는 **camelCase**로 작성 (`background-color` -> `backgroundColor`)

```javascript
let p = document.getElementById("firstP");
p.style.color = "red";
p.style.backgroundColor = "yellow";
p.style.fontSize = "20px";
```

### 5. 콘텐츠 변경 (innerHTML)

```javascript
p.innerHTML = "나의 <img src='puppy.jpg'> 강아지입니다.";
```

### 6. this 키워드

객체 자신을 가리킴

```html
<button onclick="this.style.backgroundColor='orange'">버튼</button>
```

### 7. document 객체

- HTML 문서 전체를 대변하는 객체
- DOM 트리의 **최상위 객체**
- 주요 프로퍼티: `title`, `URL`, `body`, `head`, `readyState` 등

### 8. document.write() / writeln()

```javascript
document.write("<h3>Hello</h3>");  // HTML 추가
document.writeln("내용");           // \n 추가 (줄바꿈 X, 공백만)
```

주의: 로딩 완료 후 호출하면 **기존 내용이 모두 지워짐**

### 9. 동적 생성 및 삭제

```javascript
// 생성
let newDIV = document.createElement("div");
newDIV.innerHTML = "새 DIV";
newDIV.style.backgroundColor = "yellow";

// 삽입
parent.appendChild(newDIV);              // 마지막에 추가
parent.insertBefore(newDIV, 기준자식);    // 특정 위치에 삽입

// 삭제
parent.removeChild(자식객체);
```

### 핵심 메소드 정리

| 분류 | 메소드 |
|------|--------|
| 찾기 | `getElementById`, `getElementsByTagName`, `getElementsByClassName` |
| 생성 | `createElement` |
| 삽입 | `appendChild`, `insertBefore` |
| 삭제 | `removeChild` |
| 출력 | `write`, `writeln` |
| 속성 | `setAttribute`, `innerHTML`, `style` |
