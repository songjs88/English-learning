# ☕ 옆집 제니와 5분 영어 수다 (Jenny's 5-Min English Cafe)

> **"모르는 단어는 한국어로 말해도 괜찮아요!"**  
> 옆집 친구 제니와 하루 5분씩 부담 없이 나누는 맞춤형 왕초보 기초 영어 회화 웹앱 (PWA 지원)

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

## 🚀 1분 만에 웹 배포하는 방법 (무료 HTTPS)

이 앱은 순수 웹 표준(HTML5 + Vanilla JS + CSS)으로 제작되어 **어떤 무료 웹 호스팅에서도 즉시 1분 만에 배포**할 수 있습니다.

### 방법 1: Netlify 드롭 배포 (가장 추천 · 코딩/CLI 불필요)
1. [Netlify Drop](https://app.netlify.com/drop)에 접속하여 무료 회원가입/로그인합니다.
2. 이 프로젝트 폴더(`English learning app`) 전체를 브라우저 화면의 점선 상자 안으로 **마우스로 끌어다 놓기(Drag & Drop)**만 하세요.
3. 5초 만에 `https://random-name.netlify.app` 같은 **무료 HTTPS 주소**가 생성됩니다!
4. 스마트폰으로 해당 주소에 접속하여 브라우저 메뉴의 **[홈 화면에 추가]**를 누르면 스마트폰 앱처럼 설치됩니다.

### 방법 2: Vercel 배포
터미널에서 아래 명령을 실행합니다:
```bash
npx vercel
```
안내에 따라 몇 가지 엔터만 치면 `https://xxx.vercel.app` 주소로 즉각 배포됩니다.

### 방법 3: GitHub Pages 배포
1. GitHub에서 새 저장소(Repository)를 만듭니다.
2. 터미널에서 다음 명령어를 실행합니다:
   ```bash
   git init
   git add .
   git commit -m "Initial release of Jenny English Cafe"
   git branch -M main
   git remote add origin <사용자_깃허브_주소>
   git push -u origin main
   ```
3. GitHub 저장소의 **Settings → Pages** 메뉴에서 Source를 `main` 브랜치의 `/ (root)`로 선택하고 저장하면 몇 분 후 무료 배포 주소가 활성화됩니다.

---

## 💻 로컬에서 바로 실행하기

컴퓨터에서 바로 확인하고 싶다면:
1. `index.html` 파일을 더블클릭하여 크롬(Chrome)이나 엣지(Edge) 브라우저로 엽니다.
2. 또는 터미널에서 로컬 서버 실행:
   ```bash
   npx serve .
   ```
   브라우저에서 `http://localhost:3000`으로 접속합니다.

---

## 📱 스마트폰 홈 화면 앱 설치 (PWA)
- **갤럭시/안드로이드**: 크롬 또는 삼성 인터넷 접속 → 우측 상단 `⋮` 메뉴 → `[홈 화면에 추가]` 또는 `[앱 설치]`
- **아이폰/iOS**: 사파리(Safari) 접속 → 하단 중앙 `공유(📤)` 버튼 → `[홈 화면에 추가]`

