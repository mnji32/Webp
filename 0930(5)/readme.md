## 09월 30일 수업 내용

### 1. HTML 태그의 배치 및 레이아웃 제어
* **`display` 속성**:
  * `block`: 새 라인에서 시작하며 너비 전체를 점유
  * `inline`: 줄 바꿈 없이 내용만큼만 차지
  * `inline-block`: 줄 바꿈 없이 인라인으로 배치되되, 블록처럼 크기(`width`/`height`) 지정 가능
* **`position` 위치 지정**:
  * `static`: 기본 문서 흐름에 맞춰 순서대로 배치
  * `relative`: 원래 배치될 위치를 기준으로 상대적 이동 (`top`, `left` 등)
  * `absolute`: 부모 컨테이너를 기준으로 절대적 위치 지정
  * `fixed`: 브라우저 화면(뷰포트)을 기준으로 고정 배치 (스크롤해도 위치 고정)
* **기타 배치 프로퍼티**:
  * `float`: 요소를 좌/우 측면에 띄워 주변에 텍스트가 흘러가도록 배치
  * `z-index`: 요소가 겹칠 때 수직 쌓임 순서 지정 (값이 클수록 위에 출력)
  * `visibility`: `hidden`(공간은 유지한 채 숨김) vs `display: none`(공간까지 완전 제거)
  * `overflow`: 박스 영역을 벗어나는 콘텐츠 제어 (`hidden`, `scroll`, `visible`)

---

### 2. 리스트 및 표(Table) 스타일링
* **리스트 마커 및 메뉴 제작**:
  * `list-style-type`, `list-style-image`(커스텀 마커 이미지 적용)
  * `<ul>`, `<li>` 요소에 `display: inline-block`과 `list-style-type: none`을 적용해 상단 내비게이션 바(메뉴) 구현
* **표(Table) 스타일 제어**:
  * `border-collapse: collapse;`를 사용해 중복된 표 테두리를 하나로 합치기
  * `tbody tr:nth-child(even)`으로 짝수 행 줄무늬 스타일 부여
  * `:hover` 가상 클래스를 이용해 마우스가 올라간 행(Row) 배경색 하이라이트

---

### 3. 폼(Form) 요소 스타일링 & 인터랙션
* **속성 셀렉터 활용**: `input[type=text]`, `input[type=email]` 등 특정 입력 타입별 스타일 지정
* **사용자 반응 효과**:
  * `:hover`: 입력창에 마우스를 올렸을 때 배경색 변화
  * `:focus`: 입력창 클릭 시 포커스를 받아 테두리 강조 및 글자 크기 확대

---

### 4. CSS3 동적 변화 (Transform / Transition / Animation)
* 자바스크립트 없이 CSS3 속성만으로 요소의 회전, 크기 조절, 색상 변경 등 다양한 **변환(Transform)**, **전환(Transition)**, **애니메이션(Animation)** 효과 구현 가능

---

### CSS 프레임워크(CSS Framework)와 6가지 핵심 구성 영역
* **CSS 프레임워크란?**: Bootstrap, Tailwind 등 웹 개발 시 반복되는 CSS 스타일을 미리 만들어두어 생산성을 높여주는 라이브러리
* **6가지로 나뉘는 이유**:
  웹 페이지를 구성하는 핵심 컴포넌트가 크게 **6가지 영역**으로 표준화되어 있기 때문
  CSS 프레임워크는 이 6가지 영역에 맞춰 사전 스타일을 제공
  1. **Grid / Layout (레이아웃 & 배치)**: `display`, `position`, `flex` 기반의 배치 시스템
  2. **Typography (텍스트 & 폰트)**: 제목, 본문, 글꼴 크기/색상
  3. **List (리스트)**: 메뉴, 목록 스타일링
  4. **Table (표)**: 테두리, 줄무늬, 마우스 호버 효과
  5. **Form (폼)**: 입력창, 라벨, 선택 박스, 체크박스 디자인
  6. **Button & Components (버튼 및 기본 컴포넌트)**: 클릭 가능한 버튼, 모달, 카드 디자인
