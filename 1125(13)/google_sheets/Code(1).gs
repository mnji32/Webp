const SPREADSHEET_ID = '18d8rQ4am3RoV_JdbM1zSCL3mc7GDMU9eAFzy7DJQDPQ';          // 예: '1AbCdEfGh...'
const SHEET_NAME = '시트1';          // 데이터를 저장할 시트 이름
const HEADERS = ['이름', '음식', '하고 싶은 말'];
const APP_TITLE = '26년 11월 25일 저녁 신청 받기';

/** 웹앱 접속 시 index.html을 보여줍니다. */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle(APP_TITLE)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/** 저장할 시트를 가져오고, 없으면 만들고 헤더를 채웁니다. */
function getSheet_() {
  const ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  return sheet;
}

/** 수식으로 해석되지 않도록 =, +, -, @ 로 시작하는 값 앞에 ' 를 붙입니다. */
function sanitize_(value) {
  const text = String(value == null ? '' : value).trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

/**
 * 클라이언트(index.html)에서 호출하는 저장 함수
 * @param {{name: string, food: string, message: string}} form
 */
function submitForm(form) {
  const name = sanitize_(form && form.name);
  const food = sanitize_(form && form.food);
  const message = sanitize_(form && form.message);

  if (!name || !food) {
    throw new Error('이름과 음식은 꼭 입력해 주세요.');
  }

  // 여러 명이 동시에 제출해도 행이 꼬이지 않도록 잠금
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    getSheet_().appendRow([name, food, message]);
  } finally {
    lock.releaseLock();
  }

  return '답장 감사합니다.';
}