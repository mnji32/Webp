## 10월 14일 수업내용

### 1. 자바스크립트 객체 개요
* **개념**: 프로퍼티(Property, 속성)와 메소드(Method, 동작)로 구성된 데이터 집합
* **주요 구성 요소**
  * **프로퍼티 (Property)**: 객체의 상태나 고유 속성을 나타내는 변수
  * **메소드 (Method)**: 객체가 수행하는 동작을 정의한 함수
* **객체의 종류**
  * **코어 객체 (Core Objects)**: 자바스크립트 언어가 기본 제공하는 표준 객체 (`Array`, `Date`, `String`, `Math` 등)
  * **HTML DOM 객체**: HTML 문서의 각 태그 요소들을 객체화한 것 (페이지 제어용)
  * **브라우저 객체 (BOM)**: 브라우저 환경을 제어하기 위한 객체 (`window`, `location`, `history` 등)
* **객체 생성 및 접근**:
  * `new` 키워드를 사용하여 생성: `let today = new Date();`
  * 점(`.`) 연산자를 통해 접근: `today.getFullYear();`

---

### 2. 자바스크립트 배열 (Array)
* **개념**: 여러 개의 원소를 연속적으로 저장하는 데이터 구조
* **특징**
  * 크기가 고정되지 않고, 원소 추가 시 동적으로 확장됨
  * 하나의 배열에 다양한 데이터 타입(숫자, 문자열, 객체 등) 혼용 가능
* **생성 방식**
  1. **배열 리터럴**: `let week = ["월", "화", "수", "목", "금"];`
  2. **Array 생성자**: `let cities = new Array("Seoul", "Busan");`
* **주요 메소드 및 프로퍼티**
  * `length`: 배열 원소의 개수 반환

| 구분 | 설명 | 원본 변경 여부 |
| :--- | :--- | :---: |
| `concat(array)` | 배열을 연결하여 새로운 배열 리턴 | X |
| `join(separator)` | 원소들을 구분자로 연결한 문자열 리턴 | X |
| `slice(start, end)` | 배열의 일부를 잘라내어 새 배열 리턴 | X |
| `reverse()` | 배열 원소의 순서를 역순으로 뒤집음 | O |
| `sort()` | 배열 원소를 정렬함 | O |

---

### 3. Date 객체
* **개념**: 날짜와 시간 정보를 취급하기 위한 코어 객체
* **생성 방식**
  * `let now = new Date();` (현재 시각으로 초기화)
  * `let startDay = new Date(2026, 2, 1);` (특정 날짜 지정)
* **주요 메소드**
  * **날짜 조회**: `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`
  * **시간 조회**: `getHours()`, `getMinutes()`, `getSeconds()`
  * **주의사항**
    * `getMonth()`는 $0 \sim 11$을 반환하므로 **실제 월을 구하려면 $+1$**을 해야 함
    * `getDay()`는 요일을 숫자($0$: 일요일 $\sim$ $6$: 토요일)로 반환함

---

### 4. String 객체
* **개념**: 문자열을 다루는 코어 객체
* **특징**
  * **불변성 (Immutable)**: 생성 후 문자열의 내용 변경이 불가능함
  * 리터럴 문자열도 `String` 객체의 메소드를 직접 호출 가능
  * 배열처럼 인덱스로 개별 문자 접근 가능 (`str[0]`)
* **주요 메소드**
  * `charAt(index)`: 지정 위치의 문자 반환
  * `indexOf(str)`: 특정 문자열의 시작 위치 반환 (없으면 `-1`)
  * `slice(start, end)` / `substring(start, end)`: 문자열 일부 추출
  * `toUpperCase()` / `toLowerCase()`: 대소문자 변환
  * `replace(target, replacement)`: 문자열 교체
  * `split(separator)`: 구분자로 분리하여 배열로 리턴
  * `trim()`: 문자열 양 끝의 공백 제거

---

### 5. Math 객체
* **개념**: 수학적 계산을 위한 프로퍼티와 메소드를 제공하는 코어 객체
* **특징**
  * `new Math()`로 **인스턴스를 생성하지 않고** `Math.메소드()` 형태로 직접 사용함
* **주요 프로퍼티 및 메소드**:
  * `Math.PI`: 원주율 상수 ($3.14159\dots$)
  * `Math.abs(x)`: 절대값 반환
  * `Math.floor(x)`: 소수점 내림 / `Math.ceil(x)`: 올림 / `Math.round(x)`: 반올림
  * `Math.max(...)` / `Math.min(...)`: 최대값 / 최소값
  * `Math.random()`: $0 \le x < 1$ 범위의 난수 발생
* **난수 활용 예시 (0~99 사이의 정수)**:
  ```javascript
  let randInt = Math.floor(Math.random() * 100);

  ---

### 6. 사용자 객체 만들기
* **개념**: 개발자가 필요에 따라 직접 프로퍼티와 메소드를 정의하여 만드는 객체

#### 생성 방법 3가지

1. **`new Object()` 방식**
   * 빈 객체를 생성한 후 프로퍼티와 메소드를 동적으로 추가
   ```javascript
   let account = new Object();
   account.owner = "홍길동";
   account.balance = 35000;
   account.deposit = function(money) {
       this.balance += money;
   };
   ```

2. **리터럴 표기법 방식**
   * 중괄호 `{}`를 사용하여 선언과 동시에 키-값 쌍으로 정의
   ```javascript
   let account = {
       owner: "홍길동",
       balance: 35000,
       deposit: function(money) {
           this.balance += money;
       }
   };
   ```

3. **생성자 함수(Constructor Function) 방식**
   * 동일한 구조의 객체를 여러 개 찍어낼 때 틀(클래스 역할)로 활용
   ```javascript
   function Student(name, score) {
       this.name = name;
       this.score = score;
       this.getScore = function() {
           return this.name + "의 점수: " + this.score;
       };
   }
