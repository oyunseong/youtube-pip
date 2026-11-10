chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id || !tab.url?.includes("youtube.com")) return;

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: togglePip,
    });
  } catch (e) {
    console.error("PiP 실행 실패:", e);
  }
});

// 이 함수는 유튜브 페이지 안에서 실행됩니다
async function togglePip() {
  // 이미 PiP 중이면 끄기
  if (document.pictureInPictureElement) {
    await document.exitPictureInPicture();
    return;
  }

  // 로드된 video 중 화면에서 가장 큰 것 = 메인 플레이어
  const video = [...document.querySelectorAll("video")]
    .filter((v) => v.readyState > 0)
    .sort((a, b) => b.clientWidth * b.clientHeight - a.clientWidth * a.clientHeight)[0];

  if (!video) return;

  // 유튜브가 PiP를 막아두는 경우가 있어 속성 제거
  video.removeAttribute("disablePictureInPicture");
  await video.requestPictureInPicture();
}
