## 11월 4일 수업내용

### 1. BOM (Browser Object Model)

- 자바스크립트로 **브라우저를 제어**하기 위해 지원되는 객체들
- HTML 페이지의 내용과는 관계없음
- **BOM의 국제 표준은 없음** (브라우저마다 조금씩 다름)

#### 주요 BOM 객체

| 객체 | 기능 |
|------|------|
| `window` | 브라우저 윈도우 모양 제어, 새 윈도우 열기/닫기 |
| `navigator` | 브라우저에 대한 다양한 정보 제공 |
| `history` | 브라우저 윈도우에 로드한 URL 리스트의 히스토리 관리 |
| `location` | 브라우저 윈도우에 로드된 HTML 페이지의 URL 관리 |
| `screen` | 스크린 장치에 대한 정보 제공 |

## 2. window 객체

- 열려 있는 브라우저 윈도우나 탭 윈도우의 속성을 나타내는 객체
- 브라우저 윈도우나 탭 윈도우마다 별도의 window 객체 생성

#### window 객체 접근
```javascript
window         // 또는
window.self    // 또는
self
```

#### window 객체 생성 3가지 경우
1. 브라우저가 새로운 웹 페이지를 로드할 때
2. `<iframe>` 태그 당 하나의 window 객체 생성
3. 자바스크립트 코드로 윈도우 열기 시

### 3. 윈도우 열기: window.open()

```javascript
window.open(sURL, sWindowName, sFeature)
```

- `sURL`: 웹 페이지 주소 문자열
- `sWindowName`: 새로 여는 윈도우 이름
- `sFeature`: 윈도우의 모양, 크기 등 속성 문자열

#### 윈도우 이름 (sWindowName)

| 이름 | 설명 |
|------|------|
| `_blank` | 이름 없는 새 윈도우를 열고, 웹 페이지 로드 |
| `_parent` | 현재 윈도우(혹은 프레임)의 부모 윈도우에 로드 |
| `_self` | 현재 윈도우에 로드 |
| `_top` | 브라우저 윈도우에 로드 |

#### 사용 예

```javascript
// (10, 10) 위치에 300x400 크기의 새 윈도우에 네이버 페이지 열기
window.open("http://www.naver.com", "myWin", 
            "left=10,top=10,width=300,height=400");

// 현재 윈도우에 sample.html 출력
window.open("sample.html", "_self");

// 빈 윈도우 생성
window.open();
```

### 4. 윈도우 닫기: window.close()

```javascript
window.close();           // 현재 윈도우 닫기 (보안상 작동 안 할 수 있음)

let win = window.open();  // 새 윈도우 생성
win.close();              // 자신이 만든 윈도우 닫기 (대부분 허용됨)
```

### 5. window 타이머

#### setTimeout / clearTimeout (1회 실행)

```javascript
let timerID = setTimeout("timeOutCode", msec);
clearTimeout(timerID);

// 예) 3초 후 경고창 출력
let timerID = setTimeout("myAlert(3)", 3000);
clearTimeout(timerID); // 타이머 해제
```

#### setInterval / clearInterval (반복 실행)

```javascript
let timerID = setInterval("timeOutCode", msec);
clearInterval(timerID);

// 예) 1초 간격으로 f() 반복 호출
let timerID = setInterval("f()", 1000);
clearInterval(timerID); // 타이머 해제
```

### 6. 윈도우 위치 및 크기 조절

```javascript
window.moveBy(5, 10);       // 오른쪽 5픽셀, 아래 10픽셀 이동
window.moveTo(25, 10);      // (25, 10) 위치로 이동
window.resizeBy(-5, 10);    // 5픽셀 좁게, 10픽셀 길게 조절
window.resizeTo(200, 300);  // 200x300 크기로 조절
```

### 7. 웹 페이지 스크롤

```javascript
window.scrollBy(0, 10);     // 옆으로 0, 위로 10픽셀
window.scrollBy(10, -15);   // 왼쪽 10픽셀, 아래 15픽셀
window.scrollTo(0, 200);    // (0, 200) 좌표가 좌상단에 오도록 스크롤
```

### 8. 웹 페이지 프린트

```javascript
window.print();  // 인쇄 다이얼로그 열기
```

#### 프린트 과정 이벤트
1. `onbeforeprint` 리스너 호출
2. 웹 페이지 프린트 (브라우저가 페이지를 이미지로 만들어 프린터로 전송)
3. `onafterprint` 리스너 호출

```javascript
window.onbeforeprint = function(e) {
  // 프린트 전 처리 (예: 로고 보이기)
};
window.onafterprint = function() {
  // 프린트 후 처리 (예: 로고 숨기기)
};
```

### 9. location 객체

- 윈도우에 로드된 웹 페이지의 **URL 정보**를 나타내는 객체

#### 웹 페이지 열기

```javascript
window.location = "http://www.naver.com";
window.location.href = "http://www.naver.com";
window.location.assign("http://www.naver.com");
window.location.replace("http://www.naver.com");
```

#### URL 구성 요소

```
http://www.mysite.com:8080/content/URL분석.html#label1
 |         |          |         |             |
protocol  hostname   port    pathname        hash
```

- `href`: 전체 URL
- `host`: hostname + port
- `search`: 쿼리 문자열 (`?query=javascript`)

### 10. navigator 객체

- 현재 작동중인 **브라우저에 대한 다양한 정보**를 나타내는 객체

#### 주요 프로퍼티

| 프로퍼티 | 설명 |
|---------|------|
| `appCodeName` | 브라우저 코드 이름 |
| `appName` | 브라우저 이름 |
| `appVersion` | 브라우저 플랫폼과 버전 |
| `platform` | 운영체제 플랫폼 이름 |
| `product` | 브라우저 엔진 이름 |
| `userAgent` | HTTP 헤더에 저장되는 문자열 |
| `vendor` | 브라우저 제작 회사 이름 |
| `language` | 브라우저 언어 (예: `ko-KR`) |
| `onLine` | 온라인 작동중이면 `true` |
| `cookieEnabled` | 쿠키 사용 가능하면 `true` |
| `geolocation` | 위치 정보 객체 |

### 11. screen 객체

- 브라우저가 실행되는 **스크린 장치에 관한 정보**를 담고 있는 객체

| 프로퍼티 | 설명 |
|---------|------|
| `availHeight` | 작업 표시줄 등을 제외한 출력 가능 영역 높이 |
| `availWidth` | 작업 표시줄 등을 제외한 출력 가능 영역 폭 |
| `pixelDepth` | 한 픽셀의 색을 나타내는 비트 수 |
| `colorDepth` | pixelDepth와 동일 (권장) |
| `height` | 스크린의 수직 픽셀 수 |
| `width` | 스크린의 수평 픽셀 수 |

### 12. history 객체

- 윈도우에서 **방문한 웹 페이지 리스트(히스토리)** 를 나타내는 객체

#### 프로퍼티 및 메소드

| 멤버 | 설명 |
|------|------|
| `length` | 히스토리 리스트에 있는 엔트리 수 |
| `back()` | 이전 웹 페이지로 이동 |
| `forward()` | 다음 웹 페이지로 이동 |
| `go(n)` | 현재에서 n만큼 상대적인 페이지로 이동 |

#### 사용 예

```javascript
history.back();      // 이전 페이지로 이동
history.go(-1);      // 이전 페이지로 이동
history.forward();   // 다음 페이지로 이동
history.go(1);       // 다음 페이지로 이동
```

### 핵심 메소드 정리

| 분류 | 메소드/프로퍼티 |
|------|---------------|
| 윈도우 열기/닫기 | `window.open()`, `window.close()` |
| 타이머 (1회) | `setTimeout()`, `clearTimeout()` |
| 타이머 (반복) | `setInterval()`, `clearInterval()` |
| 위치/크기 | `moveBy()`, `moveTo()`, `resizeBy()`, `resizeTo()` |
| 스크롤 | `scrollBy()`, `scrollTo()` |
| 프린트 | `print()`, `onbeforeprint`, `onafterprint` |
| URL 이동 | `location.href`, `location.assign()`, `location.replace()` |
| 히스토리 | `history.back()`, `history.forward()`, `history.go(n)` |
