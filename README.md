# YouTube PiP

유튜브 영상을 단축키 한 번으로 PiP(Picture-in-Picture) 창에 띄우는 크롬 확장 프로그램입니다.

## 기능

- **단축키 `Alt+P`** 또는 툴바 아이콘 클릭으로 PiP를 켜고 끕니다.
- 페이지에서 가장 큰 영상(메인 플레이어)을 자동으로 찾아 PiP로 띄웁니다.
- 유튜브가 PiP를 막아둔 경우(`disablePictureInPicture`)에도 동작합니다.
- 유튜브(`youtube.com`) 탭에서만 동작합니다.

## 설치

크롬 웹 스토어에 등록되지 않았기 때문에 직접 불러와야 합니다.

1. 이 저장소를 내려받습니다.
   ```bash
   git clone https://github.com/oyunseong/youtube-pip.git
   ```
2. 크롬 주소창에 `chrome://extensions`를 입력합니다.
   (Brave는 `brave://extensions`, Edge는 `edge://extensions`)
3. 오른쪽 위 **개발자 모드**를 켭니다.
4. **압축해제된 확장 프로그램을 로드합니다**를 누르고 내려받은 `youtube-pip` 폴더를 선택합니다.

## 사용법

1. 유튜브 영상 페이지를 엽니다.
2. `Alt+P`를 누르거나 툴바의 확장 아이콘을 클릭하면 PiP 창이 뜹니다.
3. 다시 누르면 PiP가 꺼집니다.

> 단축키는 `chrome://extensions/shortcuts`에서 바꿀 수 있습니다.

## 권한

| 권한 | 용도 |
| --- | --- |
| `activeTab` | 단축키/아이콘을 누른 현재 탭에만 접근 |
| `scripting` | 해당 탭에서 PiP 실행 스크립트 주입 |

방문 기록이나 데이터를 수집하지 않습니다.
