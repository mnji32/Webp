const PHOTO_FILE_ID = '1tOWLFcSR6IUoKi2npfp4hkjsfdmtmdRw'; // profile.jpg

function doGet() {
  // 사진을 HTML 안에 통째로 넣지 않고, 페이지가 뜬 뒤 getPhoto()로 따로 받아옴
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('김민지 | Software Portfolio')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// index.html에서 google.script.run.getPhoto()로 호출
function getPhoto() {
  try {
    const file = DriveApp.getFileById(PHOTO_FILE_ID);
    // 원본(수 MB) 대신 드라이브가 만들어 둔 작은 썸네일 사용
    let blob = file.getThumbnail();
    if (!blob) blob = file.getBlob();
    return 'data:' + (blob.getContentType() || 'image/jpeg') + ';base64,' +
           Utilities.base64Encode(blob.getBytes());
  } catch (e) {
    console.error('사진 불러오기 실패: ' + e);
    return '';
  }
}
