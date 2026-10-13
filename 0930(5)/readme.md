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
* **리스트 마커 제어**: `list-style-type`, `list-style-image`(커스텀 마커 이미지 적용)
* **리스트로 내비게이션 바(메뉴) 만들기**:
  * `<ul>`, `<li>`에 `display: inline-block`과 `list-style-type: none`을 적용하여 가로 형태의 웹 메뉴 구성
* **표(Table) 스타일**:
  * `border-collapse: collapse;`를 사용해 중복된 표 테두리를 하나로 합치기
  * `:hover` 가상 클래스를 이용해 마우스가 올라간 행(Row) 배경색 강조

---

### 3. 폼(Form) 요소 스타일링 & 인터랙션
* **속성 셀렉터 활용**: `input[type=text]`, `input[type=email]` 등 특정 입력 타입에만 선택적으로 스타일 적용
* **사용자 반응 효과**:
  * `:hover`: 입력창에 마우스를 올렸을 때 배경색 변화
  * `:focus`: 입력창 클릭 시 포커스를 받아 테두리 강조 및 글자 크기 확대

---

### 4. CSS3 동적 변화 (Transform / Transition / Animation)
* 별도의 자바스크립트 코드 없이 CSS3 속성만으로 요소의 회전, 크기 조절, 색상 변경 등 다양한 **변환(Transform)**, **전환(Transition)**, **애니메이션(Animation)** 효과 구현 가능
