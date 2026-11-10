## 11월 04일 수업내용

### 1. 이벤트 개요

- **이벤트**: 사용자 입력이나 문서/브라우저 상태 변화를 자바스크립트에 알리는 통지
- **이벤트 리스너**: 발생한 이벤트에 대처하기 위해 작성된 코드
- HTML5에서 약 70여 가지 이벤트 존재
- 리스너 이름 = `on` + 이벤트 이름 (예: `onclick`, `onkeydown`)

### 2. 이벤트 리스너 만들기 (3가지 방법)

1. **HTML 태그 내에 작성**
   ```html
   <p onmouseover="this.style.backgroundColor='orchid'">
   ```
2. **DOM 객체의 이벤트 리스너 프로퍼티에 작성**
   ```javascript
   p.onmouseover = over;   // 함수 이름만 (괄호 X)
   ```
3. **addEventListener() 메소드 이용**
   ```javascript
   p.addEventListener("mouseover", over);
   ```

- **익명 함수**로도 작성 가능 (짧거나 한 번만 쓸 때 편리)

### 3. 이벤트 객체

- 발생한 이벤트에 관련된 정보를 담은 객체
- 리스너 함수의 **첫 번째 매개변수**로 전달
- HTML 태그 내 작성 시에는 `event` 이름으로 전달

#### 공통 멤버

| 멤버 | 설명 |
|------|------|
| `type` | 이벤트 종류 (click, load 등) |
| `target` | 이벤트를 발생시킨 객체 |
| `currentTarget` | 현재 리스너를 실행중인 DOM 객체 |
| `defaultPrevented` | 디폴트 행동 취소 여부 |
| `preventDefault()` | 디폴트 행동 취소 메소드 |

### 4. 이벤트의 디폴트 행동 취소

- **디폴트 행동**: HTML 태그의 기본 행동
  - `<a>` 클릭 → 웹 페이지 이동
  - submit 버튼 클릭 → 폼 데이터 전송
  - 체크박스 클릭 → 체크박스 선택

### 막는 방법 2가지
1. 이벤트 리스너에서 `return false`
2. `event.preventDefault()` 호출

### 5. 이벤트 흐름

이벤트는 `window`에서 시작 → 타겟까지 갔다가 → 다시 `window`로 돌아와 소멸

| 단계 | 방향 |
|------|------|
| **캡쳐 단계** (capturing phase) | window → 타겟 |
| **버블 단계** (bubbling phase) | 타겟 → window |

- `addEventListener()`의 3번째 매개변수
  - `true`: 캡쳐 리스너
  - `false`: 버블 리스너 (기본값)
- 이벤트 흐름 중단: `event.stopPropagation()`

### 6. 마우스 이벤트

#### 마우스 이벤트 객체 프로퍼티

| 프로퍼티 | 설명 |
|---------|------|
| `clientX, clientY` | 브라우저 윈도우 내 좌표 |
| `screenX, screenY` | 스크린 기준 좌표 |
| `offsetX, offsetY` | 타겟 객체 내 좌표 |
| `button` | 눌러진 버튼 (0=없음, 1=왼쪽, 2=오른쪽) |
| `wheelDelta` | 휠 방향 (양수=위, 음수=아래) |

#### 마우스 관련 리스너

| 리스너 | 호출 시점 |
|--------|---------|
| `onclick` | 클릭 시 |
| `ondblclick` | 더블클릭 시 |
| `onmousedown` / `onmouseup` | 버튼 누를 때 / 뗄 때 |
| `onmouseover` / `onmouseout` | 올라올 때 / 벗어날 때 |
| `onmouseenter` / `onmouseleave` | 올라올 때 / 벗어날 때 (버블 없음) |
| `onmousemove` | 움직일 때 |
| `onwheel` | 휠이 구를 때 |
| `oncontextmenu` | 오른쪽 버튼 클릭 (false 리턴 시 메뉴 금지) |

### 7. 문서/이미지 로딩과 onload

- **onload**: 웹 페이지나 이미지의 로딩 완료 시 호출

#### 작성 방법
1. `window.onload = function() { ... };`
2. `<body onload="자바스크립트 코드">`

#### Image 객체
- `<img>` 태그로 생성 또는 `new Image()`로 동적 생성
- `img.src = "..."` 로 이미지 변경 시, **로딩 완료 후** onload 호출
- 주의: `src` 설정 직후에는 이미지 크기가 0일 수 있음

### 8. 폼 관련 이벤트

#### onfocus / onblur
- `onfocus`: 포커스를 얻을 때
- `onblur`: 포커스를 잃을 때

#### 라디오버튼
- `document.getElementsByName()`으로 같은 이름 그룹 접근
- `radio.checked`로 선택 여부 확인

#### 체크박스
- `checkbox.checked`로 선택 여부 확인

#### select 객체와 onchange
- `sel.selectedIndex`: 선택된 옵션 인덱스
- `sel.options[i].value`: 각 옵션 값
- 옵션 변경 시 `onchange` 이벤트 발생

#### onreset / onsubmit
- `<form>` 태그에 작성
- `onreset`: reset 버튼 클릭 시 (false 리턴 시 초기화 안 됨)
- `onsubmit`: submit 버튼 클릭 시 (false 리턴 시 전송 안 됨)

### 9. 키 이벤트

| 리스너 | 호출 시점 |
|--------|---------|
| `onkeydown` | 키가 눌리는 순간 (모든 키) |
| `onkeypress` | 문자/Enter/Space/Esc 키에만 호출 |
| `onkeyup` | 키가 떼어지는 순간 |

#### 키 이벤트 객체 프로퍼티
- `e.key`: 눌린 키 (예: `"A"`, `"ArrowDown"`)
- `e.code`: 키 코드 (예: `"KeyA"`)

### 핵심 정리

| 분류 | 리스너 |
|------|-------|
| 리스너 등록 | `addEventListener(event, listener, useCapture)` |
| 디폴트 행동 취소 | `preventDefault()`, `return false` |
| 이벤트 전파 중단 | `stopPropagation()` |
| 마우스 | `onclick`, `onmousedown`, `onmouseover`, `onwheel` |
| 키 | `onkeydown`, `onkeyup`, `onkeypress` |
| 로딩 | `onload` |
| 포커스 | `onfocus`, `onblur` |
| 폼 | `onchange`, `onsubmit`, `onreset` |
| 마우스 | `onclick`, `onmousedown`, `onmouseover`, `onwheel` |
| 키 | `onkeydown`, `onkeyup`, `onkeypress` |
| 로딩 | `onload` |
| 포커스 | `onfocus`, `onblur` |
| 폼 | `onchange`, `onsubmit`, `onreset` |
