# 🎓 학술·연구원 개인 포트폴리오 웹사이트 (Academic Portfolio)

React, TypeScript, Tailwind CSS, Lucide React를 기반으로 제작된 **학술 연구원 및 개발자(Academic Researcher & Developer) 전용 미니멀 포트폴리오 웹사이트**입니다.

한국어, 일본어(日本語), 영어(English) 3개 국어를 원클릭으로 실시간 전환할 수 있으며, 최신 포트폴리오 데이터를 기반으로 표준 A4 학술 CV(이력서)를 즉시 PDF로 인쇄/다운로드할 수 있습니다. 첫 방문 시 눈이 편안한 **다크 모드(Dark Mode First)**를 기본으로 제공하며, 고대비 텍스트와 로즈 포인트 컬러를 통해 학술적 전문성과 엔지니어의 감성을 균형 있게 표현했습니다.

---

## 📑 목차
1. [주요 기능 및 특징](#-주요-기능-및-특징)
2. [프로젝트 구조](#-프로젝트-구조)
3. [시작하기 (설치 및 실행)](#-시작하기-설치-및-실행)
4. [데이터 커스터마이징 가이드](#-데이터-커스터마이징-가이드)
5. [핵심 기술 및 아키텍처](#-핵심-기술-및-아키텍처)
6. [자주 묻는 질문 (FAQ)](#-자주-묻는-질문-faq)

---

## ✨ 주요 기능 및 특징

### 1. 🌐 실시간 3개 국어 번역 스위처 (KO / JA / EN)
- 사이드바 상단의 `[ KO ] [ JA ] [ EN ]` 캡슐 버튼을 통해 페이지 새로고침 없이 즉각 번역 전환.
- 프로필, 자기소개, 학력, 연구 및 개발 경력, 수상/장학, 대회, 기술 스택, 푸터 등 모든 콘텐츠가 3개 국어로 완벽 대응.
- 방문자 브라우저 언어(`navigator.language`)를 자동 감지하며, 선택한 언어는 `localStorage`에 영구 보존.

### 2. 📄 실시간 데이터 연동 Academic CV PDF 원클릭 다운로드 (`PrintableCV`)
- 사이드바의 **[CV]** 버튼 클릭 시 표준 브라우저 인쇄 대화상자(`window.print()`) 호출.
- `portfolioDataByLang`의 최신 데이터가 수정되면 별도의 수작업 없이 다운로드되는 CV 내용에 실시간 자동 반영.
- 인쇄 및 PDF 저장 시 사이드바, 내비게이션, 테마 토글 등 웹 전용 UI는 자동 숨김(`print:hidden`) 처리되고, A4 규격의 흑백/단색 고대비 학술 표준 CV 레이아웃(`PrintableCV`)만 깨끗하게 출력.

### 3. 🎯 완벽한 다국어 스크롤 스파이 (Scroll Spy) & 섹션 하이라이트
- 언어와 무관하게 7개 섹션 ID(`about`, `education`, `experience`, `publications`, `honors`, `competitions`, `skills`)를 영문 소문자로 일원화.
- 첫 로딩 시 최상단 `About` 섹션 활성화 보정 및 최하단 `Skills` 도달 시 완벽한 감지 로직 적용.
- 사이드바 내비게이션 메뉴 클릭 시 해당 섹션으로 부드러운 스무스 스크롤 이동(`scrollIntoView`).

### 4. 🌙 기본 다크 모드 (Dark Mode First) & FOUC(화면 깜빡임) 방지
- 사용자의 OS 테마 설정과 관계없이 첫 방문 초기 화면이 무조건 **다크 모드**로 우선 렌더링.
- `index.html` 내 인라인 테마 감지 스크립트를 통해 초기 로딩 시 흰색 화면 깜빡임(FOUC)을 원천 차단.
- 사이드바 하단 토글 버튼을 통해 다크 모드/라이트 모드를 자유롭게 전환할 수 있으며 설정값은 `localStorage`에 보존.

### 5. 🔗 외부 링크(`ExternalLink`) 시각화 및 미세 인터랙션
- **About Me**: 핵심 키워드(`AIONE 연구실`, `백엔드 시스템 엔지니어링`, `멀티모달 생성 모델`) 클릭 시 외부 공식 사이트 이동 또는 내부 섹션 부드러운 스크롤 연동.
- **Experience**: 소속 기관(`@ AIONE 연구실`, `@ 대전대학교 SW중심대학사업단`, `@ 대전대학교 CTL` 등)에 실제 공식 URL 연동 및 호버 시 대각선 상향 미세 애니메이션(`group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5`) 동작.
- **Education**: 소속 학교(`대전대학교`) 공식 링크 연동.

### 6. 🎴 카드형 호버 하이라이트 (Hover Card Interaction)
- **Education, Experience, Honors, Competitions** 리스트 항목에 마우스를 올리면 은은한 배경(`hover:bg-zinc-100 dark:hover:bg-zinc-800/70`)과 정교한 테두리(`hover:border-zinc-200 dark:hover:border-zinc-700/60`)가 나타나 마우스 커서 위치를 명확히 안내.
- 호버 시 항목 제목(`h3`)이 로즈 포인트 컬러(`group-hover:text-rose-600 dark:group-hover:text-rose-400`)로 부드럽게 전환.

### 7. 🏷️ 세련된 뱃지 및 기술 스택 태그 디자인
- 경력 소속 랩실(`[AIONE Lab]`) 및 대회 수상(`[Participant]`) 뱃지에 **반투명 로즈 틴트 스타일** 적용:
  ```tsx
  className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200/80 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20 tracking-tight font-mono"
  ```
- **07. Technical Skills**: 태그 앞단에 1.5px 크기의 로즈 원형 점(Dot)을 배치한 모던 개발자 뱃지 디자인 적용.

### 8. 🖼️ 로컬 프로필 이미지 지원
- `public/profile.jpg` 경로를 통해 사용자 개인 사진을 로컬에서 즉시 렌더링.

---

## 📁 프로젝트 구조

```
개인홈페이지/
├── public/
│   └── profile.jpg          # 메인 프로필 사진
├── src/
│   ├── App.tsx              # 포트폴리오 메인 컴포넌트 & 다국어 데이터 (Vite 진입점)
│   └── main.tsx             # React 루트 렌더러
├── app/
│   └── page.tsx             # Next.js App Router 호환 파일 (App.tsx와 100% 동기화)
├── App.tsx                  # 루트 호환 파일 (동기화)
├── page.tsx                 # 루트 호환 파일 (동기화)
├── index.html               # FOUC 방지 인라인 스크립트 및 메타데이터
├── index.css                # Tailwind 지시자 및 글로벌 스타일
├── tailwind.config.js       # darkMode: "class" 테마 설정
├── package.json             # 프로젝트 종속성 및 스크립트
└── README.md                # 포트폴리오 가이드 및 문서
```

> [!NOTE]
> 본 프로젝트는 Vite 및 Next.js 환경 모두에서 즉시 실행될 수 있도록 `src/App.tsx`, `page.tsx`, `App.tsx`, `app/page.tsx` 4개 파일이 항상 동일한 SHA256 해시로 동기화 관리됩니다.

---

## 🚀 시작하기 (설치 및 실행)

### 사전 요구사항
- Node.js 18.0 이상
- npm 또는 pnpm

### 설치 및 로컬 서버 실행 (Vite 환경)
```bash
# 종속성 패키지 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```
터미널에 표시된 로컬 주소(기본: `http://localhost:5173`)로 브라우저에서 접속합니다.

### 프로덕션 빌드
```bash
npm run build
```
빌드 산출물은 `dist/` 폴더에 생성되며, 정적 호스팅 서비스(GitHub Pages, Vercel, Netlify 등)에 즉시 배포할 수 있습니다.

---

## 📝 데이터 커스터마이징 가이드

모든 포트폴리오 텍스트와 링크는 [`src/App.tsx`](file:///c:/Users/iseui/Desktop/오창현/개인홈페이지/src/App.tsx) 상단의 `portfolioDataByLang` 객체에서 일괄 관리됩니다.

### 1. 인적 사항 및 프로필 사진 (`personal`)
```typescript
ko: {
  personal: {
    name: "오창현",
    nameSub: "Changhyeon Oh",
    title: "학부 연구생 / AI & 백엔드 개발자",
    department: "컴퓨터공학과",
    affiliation: "대전대학교",
    lab: "AIONE 연구실 (AIONE Lab)",
    location: "대한민국 대전",
    email: "och7905@naver.com",
    profileImage: "/profile.jpg", // public/profile.jpg
    cvUrl: "#",
  },
  ...
}
```

### 2. 자기소개 및 하이라이트 링크 (`about`)
```typescript
about: {
  sectionTitle: "01. About Me",
  introParagraphs: [
    "안녕하세요! 인공지능(AI)과 백엔드 시스템 엔지니어링에 관심이 많은...",
  ],
  highlights: [
    { keyword: "AIONE 연구실", url: "https://sites.google.com/view/aionelab/education?authuser=0" },
    { keyword: "백엔드 시스템 엔지니어링", url: "#skills" },
    { keyword: "멀티모달 생성 모델", url: "#experience" },
  ],
  hobbyNote: "연구와 코딩 외 시간에는 활력 유지를 위한 웨이트 트레이닝과...",
}
```

### 3. 경력 및 외부 링크 (`experience`)
```typescript
experience: {
  sectionTitle: "03. Experience",
  items: [
    {
      period: "2024 – 현재",
      role: "학생 랩장 & 학부 연구생",
      institution: "AIONE 연구실",
      lab: "AIONE Lab",
      location: "대전",
      url: "https://sites.google.com/view/aionelab/education?authuser=0", // 외부 링크
      description: "멀티모달 비디오-투-오디오 생성 모델 연구 주도 및 데이터 파이프라인 구축.",
    },
    ...
  ],
}
```

### 4. 연구 논문 추가 (`publications`)
```typescript
publications: {
  sectionTitle: "04. Publications",
  items: [
    {
      title: "논문 제목 입력",
      authors: ["오창현", "공동저자1", "교신저자"],
      venue: "학회명 / 저널명",
      year: "2026",
      links: [{ label: "PDF", url: "https://..." }],
    },
  ],
}
```
*작성자의 이름(오창현 / Changhyeon Oh)은 저자 목록에서 자동으로 볼드 밑줄 처리됩니다.*

---

## 🛠️ 핵심 기술 및 아키텍처

| 분류 | 기술 스택 | 적용 목적 |
| :--- | :--- | :--- |
| **Framework** | React 18, TypeScript | 컴포넌트 모듈화, 엄격한 타입 안정성 |
| **Styling** | Tailwind CSS | 유틸리티 퍼스트 기반 일관된 디자인 시스템 및 다크모드(`darkMode: "class"`) |
| **Icons** | Lucide React | 정밀하고 가벼운 벡터 아이콘 시스템 |
| **Build Tool** | Vite | 초고속 HMR 및 최적화된 번들링 |
| **Print / PDF** | Native CSS Print Styles (`@media print`) | 별도 라이브러리 없이 표준 브라우저 인쇄를 통한 고화질 벡터 PDF 출력 |

---

## 💡 자주 묻는 질문 (FAQ)

### Q1. 다크 모드와 선택한 언어는 새로고침 시에도 유지되나요?
네. 테마(`academic-portfolio-theme`)와 언어(`academic-portfolio-lang`) 설정값은 브라우저의 `localStorage`에 자동 저장되어 재방문이나 새로고침 시에도 즉시 복원됩니다.

### Q2. CV 인쇄 시 웹사이트 배경색이나 버튼들이 함께 출력되나요?
아닙니다. `@media print` 스타일 및 Tailwind의 `print:hidden` 규칙에 따라 웹 전용 사이드바, 컨트롤 버튼, 다크 배경색 등은 모두 숨겨지며, `<PrintableCV />` 전용 컴포넌트만 백색 바탕의 표준 A4 학술 양식으로 깨끗하게 인쇄됩니다.

### Q3. 프로필 사진을 변경하려면 어떻게 해야 하나요?
원하는 사진 파일을 `public/profile.jpg` 이름으로 덮어쓰기하거나, 다른 파일명을 사용할 경우 `portfolioDataByLang`의 `profileImage` 경로(예: `"/my-photo.png"`)를 수정하시면 됩니다.

---

## 📄 라이선스

© 2026 Changhyeon Oh. All rights reserved.
Academic Minimalist Portfolio Template.
