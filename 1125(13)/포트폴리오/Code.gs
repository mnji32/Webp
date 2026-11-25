const PHOTO_FILE_ID = '1tOWLFcSR6IUoKi2npfp4hkjsfdmtmdRw';

function doGet() {
  const template = HtmlService.createTemplateFromFile('index');
  template.photoSrc = getPhotoDataUrl_();

  return template.evaluate()
    .setTitle('김민지 | Software Portfolio')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getPhotoDataUrl_() {
  if (!PHOTO_FILE_ID) return '';
  try {
    const blob = DriveApp.getFileById(PHOTO_FILE_ID).getBlob();
    return 'data:' + blob.getContentType() + ';base64,' +
           Utilities.base64Encode(blob.getBytes());
  } catch (e) {
    console.error('사진 불러오기 실패: ' + e);
    return '';
  }
}
