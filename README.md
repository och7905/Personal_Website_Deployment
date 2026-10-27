# 🎓 학술·연구원 개인 포트폴리오 웹사이트 (Academic Portfolio)

React 18, TypeScript, Tailwind CSS, Lucide React, Vite를 기반으로 제작된 **학술 연구원 및 개발자(Academic Researcher & Developer) 전용 미니멀 포트폴리오 웹사이트**입니다.

한국어, 일본어(日本語), 영어(English) 3개 국어를 원클릭으로 실시간 전환할 수 있으며, 최신 포트폴리오 데이터를 기반으로 표준 A4 학술 CV(이력서)를 즉시 PDF로 인쇄/다운로드할 수 있습니다. 첫 방문 시 눈이 편안한 **다크 모드(Dark Mode First)**를 기본으로 제공하며, 고대비 텍스트와 로즈 포인트 컬러를 통해 학술적 전문성과 엔지니어의 감성을 균형 있게 표현했습니다.

---

## 📑 목차
1. [주요 기능 및 특징](#-주요-기능-및-특징)
2. [프로젝트 구조](#-프로젝트-구조)
3. [시작하기 (설치 및 실행)](#-시작하기-설치-및-실행)
4. [GitHub Pages 자동 배포 가이드](#-github-pages-자동-배포-가이드)
5. [데이터 커스터마이징 가이드](#-데이터-커스터마이징-가이드)
6. [핵심 기술 및 아키텍처](#-핵심-기술-및-아키텍처)
7. [자주 묻는 질문 (FAQ)](#-자주-묻는-질문-faq)

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
- **Experience**: 소속 기관(`@ AIONE 연구실`, `@ 대전대학교 SW중심대학사업단`, `@ 대전대학교 CTL`, `@ 대한민국 해병대 (ROKMC)`, `@ 대전대학교 HRC 봉사단` 등)에 실제 공식 URL 연동 및 호버 시 대각선 상향 미세 애니메이션(`group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5`) 동작.
- **Education**: 소속 학교(`대전대학교`) 공식 링크 연동.

### 6. 🎴 카드형 호버 하이라이트 (Hover Card Interaction)
- **Education, Experience, Honors, Competitions** 리스트 항목에 마우스를 올리면 은은한 배경(`hover:bg-zinc-100 dark:hover:bg-zinc-800/70`)과 정교한 테두리(`hover:border-zinc-200 dark:hover:border-zinc-700/60`)가 나타나 마우스 커서 위치를 명확히 안내.
- 호버 시 항목 제목(`h3`)이 로즈 포인트 컬러(`group-hover:text-rose-600 dark:group-hover:text-rose-400`)로 부드럽게 전환.

### 7. 🏷️ 세련된 뱃지 및 기술 스택 태그 디자인
- 경력 소속 랩실(`[AIONE Lab]`), 직무 및 보직 뱃지(`[유격전 조교] [무선통신병]`), 대회 수상(`[Participant]`) 뱃지에 **반투명 로즈 틴트 스타일** 적용:
  ```tsx
  className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200/80 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20 tracking-tight font-mono"
  ```
- **07. Technical Skills**: 태그 앞단에 1.5px 크기의 로즈 원형 점(Dot)을 배치한 모던 개발자 뱃지 디자인 적용.

### 8. 🖼️ 서브패스 호환 로컬 프로필 이미지 지원 (`getAssetUrl`)
- `public/profile.jpg` 및 `src/assets/profile.jpg`에 개인 사진을 저장.
- Vite의 `import.meta.env.BASE_URL`을 동적으로 해석하는 `getAssetUrl` 헬퍼 함수와 `onError` 상대 경로 폴백을 통해, GitHub Pages 서브 디렉터리 배포 환경에서도 404 이미지 깨짐 없이 즉각 렌더링.

### 9. 📊 Supabase DB 기반 실시간 방문자 카운터 (`VisitorCounter`)
- Lucide React의 `Users` 아이콘과 초록색 라이브 펄스(Pulse) 점을 배치한 직관적인 알약형(Capsule) 배지 UI: `[ 👥 🟢 Visitors · Today {todayCount} · Total {totalCount} ]`.
- 공식 `@supabase/supabase-js` 클라이언트를 연동하여 클라우드 PostgreSQL(`site_visitors` 테이블)에 방문자 수를 안전하게 보존하고 전 기기 간 실시간 동기화.
- 스키마: `site_visitors (id text PK, count bigint)`
  - `id = 'total'`: 전체 누적 방문자
  - `id = 'YYYY-MM-DD'`: 당일 방문자 (예: `2026-10-26`)
- `sessionStorage`의 `visited_session`을 기반으로 첫 방문 시에만 +1 `upsert`를 수행하고, 새로고침 시에는 `select` 조회만 수행하여 수치 왜곡을 원천 방지.
- Supabase Realtime 채널(`postgres_changes`)을 통해 다른 기기에서 방문 발생 시 새로고침 없이 즉시 수치가 동기화.
- 마우스 오버 시 `title="사이트 방문자 수 (Today / Total Views)"` 툴팁 노출.

### 10. 🎨 전 섹션 헤더 강제 로즈 스타일 & 통일된 아이콘
- '01. About Me'부터 '07. Technical Skills'까지 7개 전 섹션의 제목에 Tailwind의 `!text-rose-500 dark:!text-rose-500 font-extrabold`를 적용하여 상위 계층 CSS 우선순위 간섭을 원천 차단.
- 모든 섹션 제목 좌측에 동일한 규격(`w-3.5 h-3.5`)의 Lucide 벡터 아이콘을 통일 적용:
  - `01. About Me`: `<User />`
  - `02. Education`: `<GraduationCap />`
  - `03. Experience`: `<Briefcase />`
  - `04. Publications`: `<BookOpen />`
  - `05. Honors & Scholarships`: `<Award />`
  - `06. Competitions`: `<Trophy />`
  - `07. Technical Skills`: `<Code2 />`

### 11. 📱 모바일 반응형 햄버거 메뉴 (Navigation Drawer)
- 모바일(lg 미만) 환경에서 우측 상단 고정(`fixed top-4 right-4 z-50 lg:hidden`) 반투명 블러 토글 버튼(`Menu` ↔ `X`) 배치.
- 탭 시 반투명 딤(dim) 배경과 함께 우측에서 매끄럽게 슬라이드되는 목차 드로어(`isMobileNavOpen`) 제공.
- 7개 섹션 목차 탐색, 현재 활성 섹션(`activeSection`) 실시간 로즈 하이라이트, 스무스 스크롤 이동 및 탭 즉시 자동 닫힘.
- 드로어 하단에 [다크/라이트 모드 토글] 및 [CV PDF 인쇄/다운로드] 바로가기 지원, `Escape` 키 닫기 및 바디 스크롤 잠금 적용.

### 12. 🌐 벡터 파비콘(Favicon) & Google Analytics 4 (GA4) 연동
- **전용 벡터 파비콘 (`public/favicon.svg`)**:
  - 다크 배경(`#111215`)과 로즈 학사모(`#f43f5e`)가 결합된 고화질 SVG 파비콘 적용.
  - `index.html` 내 `<link rel="icon" type="image/svg+xml" href="./favicon.svg" />` 상대 경로를 통해 GitHub Pages 서브디렉터리 배포 환경에서도 404 에러 없이 즉각 로드.
- **Google Analytics 4 (GA4)**:
  - `index.html` 내에 공식 `gtag.js` (`G-3TMQEBP4XV`) 추적 태그가 연동되어 전 세계 방문자 통계, 유입 경로, 세션 분석을 지원.

---

## 📁 프로젝트 구조

```text
개인홈페이지/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages 자동 배포 워크플로우 (GitHub Actions)
├── public/
│   ├── favicon.svg          # 포트폴리오 테마 전용 벡터 파비콘
│   ├── profile.jpg          # 메인 프로필 사진
│   ├── robots.txt           # 검색 엔진 크롤러 수집 가이드
│   └── sitemap.xml          # 검색 엔진 인덱싱 사이트맵
├── src/
│   ├── assets/
│   │   └── profile.jpg      # 번들링용 프로필 이미지 복사본
│   ├── App.tsx              # 포트폴리오 메인 컴포넌트 & 다국어 데이터 (Vite 진입점)
│   ├── index.css            # Tailwind 글로벌 스타일 (src 내부 모듈용)
│   └── main.tsx             # React 루트 렌더러
├── app/
│   └── page.tsx             # Next.js App Router 호환 파일 (src/App.tsx와 100% 동기화)
├── App.tsx                  # 루트 호환 파일 (src/App.tsx와 100% 동기화)
├── page.tsx                 # 루트 호환 파일 (src/App.tsx와 100% 동기화)
├── index.html               # GA4 태그, 파비콘, FOUC 방지 인라인 스크립트 및 메타데이터
├── index.css                # Tailwind 지시자 및 글로벌 스타일
├── tailwind.config.js       # darkMode: "class" 테마 설정
├── vite.config.ts           # Vite 설정 (base: './' 상대 경로 배포 대응)
├── package.json             # 프로젝트 종속성 및 스크립트 ("build": "vite build")
├── .gitignore               # Git 버전 관리 제외 목록 (.env, node_modules, dist 등)
├── .env                     # Supabase 로컬 환경변수 (Git 제외 대상)
├── .env.example             # 환경변수 템플릿 예시
├── CONTEXT.md               # 프로젝트 설계 맥락 및 인수인계 문서
└── README.md                # 포트폴리오 사용자 및 배포 안내서
```

> [!IMPORTANT]
> **4대 진입점 파일 동기화 규칙**:
> 본 프로젝트는 Vite 및 Next.js 환경 모두에서 즉시 실행될 수 있도록 `src/App.tsx`, `page.tsx`, `App.tsx`, `app/page.tsx` 4개 파일이 항상 동일한 SHA-256 해시로 동기화 관리됩니다.

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

## 🌐 GitHub Pages 자동 배포 가이드

본 프로젝트에는 GitHub Actions를 통한 **원클릭 자동 빌드 및 배포 워크플로우**(`.github/workflows/deploy.yml`)가 완벽히 구성되어 있습니다.

### 최초 배포 설정 (GitHub 저장소에서 1회 수행)
1. GitHub 웹사이트의 본인 포트폴리오 저장소로 이동합니다.
2. 상단 메뉴의 **Settings** 탭을 클릭합니다.
3. 좌측 사이드바의 **Pages** 메뉴로 이동합니다.
4. **Build and deployment** 섹션의 **Source** 드롭다운 메뉴에서 **`GitHub Actions`**를 선택합니다.
5. 좌측 사이드바의 **Secrets and variables** → **Actions** 메뉴로 이동하여 **Variables** 탭을 클릭하고, 아래 2개 환경변수를 등록합니다:
   - `VITE_SUPABASE_URL`: 본인의 Supabase 프로젝트 URL (예: `https://xxxx.supabase.co`)
   - `VITE_SUPABASE_ANON_KEY`: 본인의 Supabase anon 공개 키
6. 로컬에서 변경 사항을 커밋하고 `main` 브랜치에 **Push**하면, GitHub Actions가 자동으로 Node.js 20 환경에서 프로젝트를 빌드하고 `dist/` 폴더를 GitHub Pages로 배포합니다.

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
    profileImage: "./profile.jpg", // public/profile.jpg
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

### 3. 학력 및 경력 (`education`, `experience`)
```typescript
education: {
  sectionTitle: "02. Education",
  items: [
    {
      period: "2022 – 현재",
      degree: "컴퓨터공학과 학사 과정 (B.Eng.)",
      institution: "대전대학교",
      location: "대전",
      url: "https://www.dju.ac.kr", // 학교 공식 웹사이트
      description: "학부 재학 / 백엔드 및 AI 엔지니어링 전공 탐구",
    },
  ],
},
experience: {
  sectionTitle: "03. Experience",
  items: [
    {
      period: "2026 – 현재",
      role: "멤버 / 개발자 (7기)",
      institution: "일영 (GDGoC 대전대학교 챕터)",
      lab: "GDGoC",
      location: "대전",
      description: "개발자 스터디 세션, 협업 소프트웨어 엔지니어링 프로젝트 및 기술 지식 공유 세미나 참여.",
    },
    {
      period: "2026 – 현재",
      role: "스터디원 (1기)",
      institution: "공동 (CS 전공 역량 및 직무 스터디)",
      badges: ["CS 기초 스터디", "데이터 자격증"],
      location: "대전",
      description: "컴퓨터공학 전공 필기 대비 CS 핵심 과목 복습 및 데이터 직무 자격증 취득을 위한 정기 기술 스터디 진행.",
    },
    {
      period: "2026",
      role: "공식 학생 서포터즈 (2기)",
      institution: "대전대학교 SW중심대학사업단",
      location: "대전",
      url: "https://www.dju.ac.kr/sw/main.do",
      description: "소프트웨어 사업단 주요 성과 홍보 카드뉴스 및 기술 블로그 제작, 학술 교류 행사 기획 및 운영.",
    },
    {
      period: "2024 – 현재",
      role: "학생 랩장 (3기) & 학부 연구생",
      institution: "AIONE 연구실",
      lab: "AIONE Lab",
      location: "대전",
      url: "https://sites.google.com/view/aionelab/education?authuser=0",
      description: "멀티모달 비디오-투-오디오 생성 모델 연구 주도, 연구실 운영 총괄 및 데이터 전처리 파이프라인 구축.",
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

### 5. 방문자 카운터 및 데이터베이스 연동 (`VisitorCounter`)
- 공식 `@supabase/supabase-js` 라이브러리를 통해 클라우드 PostgreSQL 데이터베이스(`site_visitors` 테이블)에 방문자 통계를 보존합니다:
  - `id = 'total'`: 전체 누적 방문자 수
  - `id = 'YYYY-MM-DD'`: 당일 방문자 수 (예: `2026-10-27`)
- 브라우저의 `localStorage`(`portfolio_last_visit_date`)를 확인하여 **당일 첫 방문 시에만 +1 upsert 및 오늘 날짜 기록**을 수행하고, 당일 재방문이나 새로고침 시에는 `select` 조회만 수행하여 수치 왜곡을 원천 차단합니다.
- Supabase Realtime 채널(`postgres_changes`)을 구독하여 스마트폰, PC 등 다른 기기에서 방문이 발생해도 실시간으로 수치가 동기화됩니다.

---

## 🛠️ 핵심 기술 및 아키텍처

| 분류 | 기술 스택 | 적용 목적 |
| :--- | :--- | :--- |
| **Framework** | React 18, TypeScript | 컴포넌트 모듈화, 엄격한 정적 타입 안정성 |
| **Styling** | Tailwind CSS | 유틸리티 퍼스트 기반 일관된 디자인 시스템 및 다크모드(`darkMode: "class"`) |
| **Icons** | Lucide React | 정밀하고 가벼운 벡터 아이콘 시스템 |
| **Build Tool** | Vite 6 | 초고속 HMR 및 상대 경로(`base: './'`) 번들링 |
| **Print / PDF** | Native CSS Print Styles (`@media print`) | 별도 외부 라이브러리 없이 표준 브라우저 인쇄를 통한 고화질 벡터 PDF 출력 |
| **Database & Realtime** | Supabase (`@supabase/supabase-js`) | 클라우드 PostgreSQL(`site_visitors`) 기반 전 기기 실시간 동기화 방문자 카운팅 |
| **Analytics** | Google Analytics 4 (GA4) | `gtag.js` (`G-3TMQEBP4XV`)를 통한 실시간 트래픽 및 웹 사용자 유입 분석 |
| **Storage** | `localStorage` / `sessionStorage` | 테마/언어 설정 영구 보존 및 세션 중복 카운트 방지 |
| **CI / CD** | GitHub Actions | `main` 푸시 시 Node.js 20 환경에서 자동 빌드 및 GitHub Pages 배포 |

---

## 💡 자주 묻는 질문 (FAQ)

### Q1. 다크 모드와 선택한 언어는 새로고침 시에도 유지되나요?
네. 테마(`academic-portfolio-theme`)와 언어(`academic-portfolio-lang`) 설정값은 브라우저의 `localStorage`에 자동 저장되어 재방문이나 새로고침 시에도 즉시 복원됩니다.

### Q2. CV 인쇄 시 웹사이트 배경색이나 버튼들이 함께 출력되나요?
아닙니다. `@media print` 스타일 및 Tailwind의 `print:hidden` 규칙에 따라 웹 전용 사이드바, 컨트롤 버튼, 모바일 햄버거 메뉴, 다크 배경색 등은 모두 숨겨지며, `<PrintableCV />` 전용 컴포넌트만 백색 바탕의 표준 A4 학술 양식으로 깨끗하게 인쇄됩니다.

### Q3. GitHub Pages 서브패스에서 이미지가 깨지지 않나요?
깨지지 않습니다. `src/App.tsx`의 `getAssetUrl` 함수가 `import.meta.env.BASE_URL`을 동적으로 반영하고, 이미지 태그에 `onError` 폴백이 적용되어 있어 `https://username.github.io/repo-name/` 환경에서도 프로필 사진이 완벽하게 로드됩니다.

### Q4. 방문자 수는 새로고침할 때마다 계속 올라가나요?
아닙니다. 브라우저의 `localStorage`에 방문 일자 키(`portfolio_last_visit_date`)를 저장하여, 오늘 처음 접속한 방문자일 때만 Supabase DB에 +1 upsert를 수행하고 이후 당일 재방문이나 단순 새로고침 시에는 DB에서 현재 수치만 읽어오므로 중복 카운트 및 수치 왜곡이 발생하지 않습니다.

---

## 📄 라이선스

© 2026 Changhyeon Oh. All rights reserved.  
Academic Minimalist Portfolio Template.
