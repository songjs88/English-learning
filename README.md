# ☕ 옆집 제니와 5분 영어 수다 (Jenny's 5-Min English Cafe)

> **"모르는 단어는 한국어로 말해도 괜찮아요!"**  
> 옆집 친구 제니와 하루 5분씩 부담 없이 나누는 맞춤형 왕초보 기초 영어 회화 웹앱 (PWA 지원)

---

## 🚀 GitHub + Render (onrender.com) 배포 방법 (가장 추천)

GitHub에 코드를 올린 후 **Render**에 연동하면, 접속자가 별도로 가입하거나 로그인할 필요 없이 **누구나 스마트폰과 PC에서 바로 사용할 수 있는 무료 HTTPS 주소**가 생성됩니다.

### 1단계: GitHub에 저장소 만들고 코드 올리기
1. [GitHub](https://github.com)에 로그인 후 우측 상단 `+` 버튼 → **New repository**를 클릭합니다.
2. Repository name에 `jenny-english-cafe` (또는 원하는 이름)를 입력하고 **Create repository**를 누릅니다.
3. 터미널(VS Code 터미널 또는 PowerShell)에서 아래 명령어를 복사하여 실행합니다:
   ```bash
   git remote add origin https://github.com/<본인_깃허브_아이디>/jenny-english-cafe.git
   git push -u origin main
   ```

---

### 2단계: Render (onrender.com)에서 원클릭 배포
1. [Render 대시보드 (dashboard.render.com)](https://dashboard.render.com)에 로그인합니다.
2. 우측 상단 **[New +]** 버튼 클릭 → **[Static Site]** 선택  
   *(또는 Web Service를 선택하셔도 내장 `server.js`로 자동 배포됩니다)*
3. GitHub 계정 연결 후 방금 올린 `jenny-english-cafe` 저장소 옆의 **[Connect]** 클릭
4. 배포 정보 확인:
   * **Name**: `jenny-english-cafe` (자유롭게 입력, 예: `jenny-english`)
   * **Branch**: `main`
   * **Build Command**: 비워둠 (또는 `npm run build`)
   * **Publish Directory**: `.` (점 하나 입력)
5. 맨 아래 **[Create Static Site]** 클릭!
6. 약 1분 후 `https://jenny-english-cafe.onrender.com` 형태의 **전용 주소**가 생성됩니다!
   * 친구, 가족, 수강생 등 **누구나 가입 없이 바로 클릭해서 사용**할 수 있습니다.
   * 스마트폰 브라우저에서 열고 **[홈 화면에 추가]**를 누르면 앱처럼 바탕화면에 설치됩니다.

---

## 🌟 주요 기능

1. **🇰🇷 + 🇺🇸 반반 영어 지원 & 폭풍 칭찬 피드백**
   - 영어가 막힐 땐 한국어를 섞어 말해도 (예: *"I'm thinking of 된장찌개"*) AI 제니가 찰떡같이 알아듣고 원어민 표현으로 다정하게 바꿔줍니다.
2. **🗣️ 원어민 음성 낭독 (TTS) & 음성 인식 (STT)**
   - 왕초보 맞춤형 0.8배속 천천히 듣기 / 1.0배속 듣기
   - 집안일할 때 듣는 **설거지 핸즈프리 모드 (🧤)**
   - 스마트폰 마이크 음성 인식 및 음성 시뮬레이션 버튼 지원
3. **4단계 일상 & 여행 테마 시나리오**
   - Step 1: ☕ 하와이 해변 카페에서 라떼 주문하기 (*Can I get a ~?*)
   - Step 2: 🍲 옆집 제니와 오늘 저녁 메뉴 고민하기 (*I'm thinking of ~*)
   - Step 3: 🏨 가족 여행 호텔에서 수건·생수 요청하기 (*Could we have more ~?*)
   - Step 4: 📺 따뜻한 차 한잔하며 드라마 수다 떨기 (*I really enjoyed ~*)
4. **🌺 3턴 미션 여권 스탬프 & 감성 1줄 영어 일기**
   - 3마디만 주고받으면 오늘 미션 완료 도장과 함께 예쁜 영어 일기 카드 자동 완성!
5. **📒 보물 복습노트 & 📱 모바일 홈 화면 설치 (PWA)**
   - 오프라인에서도 작동 가능한 스마트 내장 AI 탑재
   - Google Gemini API Key 저장 및 연동 지원 (선택사항)

---

## 💻 로컬에서 바로 실행하기

컴퓨터에서 바로 확인하고 싶다면:
* `index.html` 파일을 더블클릭하여 크롬(Chrome)이나 엣지(Edge) 브라우저로 엽니다.
* 또는 터미널에서 `npm start`를 실행하면 `http://localhost:3000`에서 실행됩니다.
