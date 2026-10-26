# 📋 Academic Portfolio Project Context & Handover (CONTEXT.md)

이 문서는 **오창현(Changhyeon Oh)의 학술·엔지니어링 개인 포트폴리오 웹사이트** 프로젝트의 모든 설계 맥락, 구현 상세, 디자인 규칙, 아키텍처 결정을 기록한 **인수인계(Handover) 문서**입니다.  
다른 컴퓨터 환경이나 새로운 AI 대화 세션에서 본 프로젝트를 이어받아 개발할 때, 이 문서를 참조하면 100% 동일한 맥락과 톤앤매너를 유지하며 작업을 즉시 진행할 수 있습니다.

---

## 1. 프로젝트 개요 (Project Overview)

- **프로젝트 명**: 학술 연구원 & 백엔드/AI 엔지니어 개인 포트폴리오 웹사이트 (`my-portfolio`)
- **소유자**: 오창현 (Changhyeon Oh)
  - 소속: 대전대학교 컴퓨터공학과 학부 재학 / AIONE 연구실 (학생 랩장 & 학부 연구생)
  - 전문 분야: 백엔드 시스템 엔지니어링, 멀티모달 생성 모델, 대용량 데이터 파이프라인
  - 이메일: `och7905@naver.com`
- **핵심 기술 스택**:
  - **Core**: React 18, TypeScript 5
  - **Build & Dev**: Vite 6 (`base: './'`)
  - **Styling**: Tailwind CSS 3 (`darkMode: "class"`), PostCSS, Autoprefixer
  - **Icons**: Lucide React (`User`, `GraduationCap`, `Briefcase`, `BookOpen`, `Award`, `Trophy`, `Code2`, `Users`, `Menu`, `X`, `FileText`, `Mail`, `ExternalLink` 등)
  - **Storage**: 브라우저 표준 `localStorage` & `sessionStorage` (순수 클라이언트 기반)
  - **CI / CD**: GitHub Actions (`.github/workflows/deploy.yml` -> GitHub Pages 자동 배포)
- **버전 관리 및 워크플로우**:
  - 도구: Git & GitHub Desktop
  - **`main` 브랜치**: 배포(Production)용 브랜치 (푸시 시 GitHub Actions 트리거)
  - **`test` 브랜치**: 신규 UI/기능 실험 및 작업 검증용 브랜치

---

## 2. 핵심 아키텍처 및 디자인 시스템 규칙 (Architecture & Design Rules)

### 2.1 다크 모드 퍼스트 (Dark Mode First)
- **초기 로딩 원칙**: 사용자의 OS 설정과 무관하게 첫 방문 시 항상 **다크 모드**가 우선 적용됩니다.
- **FOUC(화면 깜빡임) 방지**: `index.html` 내 인라인 자바스크립트가 React 하이드레이션 이전에 `localStorage`(`academic-portfolio-theme`)를 조회하거나 기본값으로 `<html>` 태그에 `dark` 클래스를 즉각 주입합니다.
- **테마 토글**: 사이드바 하단 및 모바일 드로어 내부 버튼을 통해 다크 모드 ↔ 라이트 모드를 자유롭게 전환할 수 있으며 상태는 영구 보존됩니다.

### 2.2 섹션 헤더 강제 로즈 포인트 스타일 & 통일된 아이콘
- **대상**: `01. About Me`, `02. Education`, `03. Experience`, `04. Publications`, `05. Honors & Scholarships`, `06. Competitions`, `07. Technical Skills` (7개 섹션 전체)
- **강제 적용 규칙**: 상위 컨테이너의 텍스트 색상 및 CSS 우선순위 간섭을 원천 차단하기 위해 Tailwind의 `!`(CSS `!important`) 접두사를 필수로 사용합니다:
  ```tsx
  <h2 className="text-xs !text-rose-500 dark:!text-rose-500 font-extrabold tracking-widest uppercase mb-4 flex items-center gap-2">
  ```
  *(07. Technical Skills는 하단 여백 `mb-6` 적용)*
- **아이콘 통일**: 모든 7개 섹션 타이틀 앞에 동일한 규격(`w-3.5 h-3.5`)의 Lucide 벡터 아이콘을 배치:
  - `01. About Me`: `<User />`
  - `02. Education`: `<GraduationCap />`
  - `03. Experience`: `<Briefcase />`
  - `04. Publications`: `<BookOpen />`
  - `05. Honors & Scholarships`: `<Award />`
  - `06. Competitions`: `<Trophy />`
  - `07. Technical Skills`: `<Code2 />`

### 2.3 템플릿 크레딧 영구 삭제 및 미니멀 푸터
- 과거 템플릿에 존재하던 `"학술 연구원 미니멀 테마 기반 제작"` 등 불필요한 크레딧 문구는 완전히 삭제되었습니다.
- 푸터는 불필요한 요소 없이 간결한 저작권 문구와 방문자 카운터 배지만 좌우(모바일은 상하) 배치합니다:
  ```tsx
  <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-800 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
    <p className="font-bold text-black dark:text-zinc-300">{data.ui.copyright}</p>
    <VisitorCounter />
  </footer>
  ```

### 2.4 최신 CounterAPI v2 연동 방문자 카운터 (`VisitorCounter`)
- **설계 의도**: 서비스 종료된 구형 v1(410 Deprecated) 대신 공식 최신 **CounterAPI v2**(`https://counterapi.dev/v2/...`)를 연동하여 기기별 숫자 불일치를 해결하고 전역 통합 실시간 수치를 집계합니다.
- **동작 메커니즘 (세션 기반 1회 집계 & 중복 증가 방지)**:
  - 세션 판별 기준: `sessionStorage.getItem('visited_session')`
  - v2 엔드포인트:
    - Total 증가: `https://counterapi.dev/v2/och7905-portfolio/total/up`
    - Total 조회: `https://counterapi.dev/v2/och7905-portfolio/total`
    - Today 증가: `https://counterapi.dev/v2/och7905-portfolio/today-${dateStr}/up`
    - Today 조회: `https://counterapi.dev/v2/och7905-portfolio/today-${dateStr}`
  - **첫 방문일 경우 (새 창 / 새 세션)**:
    - Total 및 Today 카운터 증가(`/up`) API를 병렬 호출(`Promise.all`).
    - 증가된 숫자를 각각 `counts.total`, `counts.today` state에 바인딩하고 `sessionStorage.setItem('visited_session', 'true')` 기록.
  - **세션 내 재방문 / 새로고침일 경우**:
    - Total 및 Today 단순 조회(GET) API를 호출하여 새로고침 남발로 인한 무한 증가 방지.
  - **응답 파싱 및 예외 안전성**:
    - v2 응답 JSON(`res.data.count`, `res.data.up_count`, `res.data`, `res.count`)의 유연한 파싱 지원.
    - 미등록 키 조회 시 404 자동 감지 및 `/up` 재시도 초기화 로직 탑재, 6초 타임아웃 AbortController 및 상세 콘솔 에러 로깅.
- **UI 디자인**:
  - `lucide-react`의 `Users` 아이콘과 초록색 활성 펄스(Pulse) 점이 포함된 커스텀 배지 스타일:
    `[ 👥 🟢 Visitors · Today {todayCount} · Total {totalCount} ]`
  - 접근성 툴팁: `title="사이트 방문자 수 (Today / Total Views)"`

### 2.5 실시간 3개 국어 번역 스위처 (KO / JA / EN)
- 사이드바 상단의 `[ KO ] [ JA ] [ EN ]` 버튼 클릭 시 페이지 새로고침 없이 즉각 전체 텍스트 전환.
- 모든 다국어 데이터는 `src/App.tsx` 내의 `portfolioDataByLang` 객체(`ko`, `ja`, `en`)에 구조화되어 일원화 관리됨.

### 2.6 A4 표준 학술 CV 인쇄/PDF 다운로드 (`PrintableCV`)
- 사이드바의 **[CV]** 버튼 또는 브라우저 인쇄(`Ctrl+P`, `window.print()`) 호출 시 동작.
- 웹 전용 UI(사이드바, 내비게이션, 모바일 드로어, 테마 토글, 푸터 등)는 `print:hidden` 처리되고, A4 규격 흑백/고대비 학술 표준 양식인 `<PrintableCV />` 컴포넌트만 깨끗하게 출력됩니다.
- `portfolioDataByLang`의 데이터가 갱신되면 별도 수정 없이 CV 출력물에도 실시간 자동 반영됩니다.

### 2.7 카드형 호버 인터랙션 및 외부 링크 시각화
- `Education`, `Experience`, `Honors`, `Competitions` 리스트 항목에 호버 시 부드러운 카드 강조 효과 적용:
  ```tsx
  className="group -mx-3.5 px-3.5 py-3 rounded-2xl transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/60 ..."
  ```
- `Experience` 소속 기관명 옆에 외부 링크(`ExternalLink`) 아이콘 배치 및 호버 시 대각선 이동 애니메이션(`group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5`) 적용.

### 2.8 서브패스 정적 리소스 경로 호환 (`getAssetUrl`)
- GitHub Pages 서브패스(예: `/Personal_Website_Deployment/`) 배포 시 절대 경로(`/profile.jpg`) 호출로 인한 404 이미지 깨짐을 방지하기 위해 `getAssetUrl` 헬퍼 함수를 사용하여 `import.meta.env.BASE_URL` 기반 상대 경로(`profileImage: "./profile.jpg"`)로 동적 해석 및 `onError` 2차 폴백을 적용했습니다.

### 2.9 모바일 반응형 햄버거 메뉴 (Navigation Drawer)
- 모바일(lg 미만) 환경에서 우측 상단 고정(`fixed top-4 right-4 z-50 lg:hidden`) 반투명 블러 토글 버튼(`Menu` ↔ `X`) 배치.
- 탭 시 반투명 딤(dim) 배경과 함께 우측에서 매끄럽게 슬라이드되는 목차 드로어(`isMobileNavOpen`) 구현.
- 7개 섹션 목차 실시간 스크롤 스파이 하이라이트, 부드러운 스크롤 이동 및 탭 즉시 자동 닫힘, 테마 토글/CV 바로가기, `Escape` 키 닫기 및 바디 스크롤 잠금 적용.

### 2.10 경력 항목 정렬 및 이력 배지 시스템 (`ExperienceItem`)
- `ExperienceItem` 인터페이스(`badges?: string[]`)를 통해 직무·보직 배지를 기존 랩 배지와 일관된 로즈 알약 배지(`bg-rose-50 text-rose-700 border border-rose-200/80 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20 font-mono text-[11px]`) 스타일로 다중 렌더링 지원.
- 모든 경력 항목은 엄격한 최신 역연대순(**2026 -> 2024 -> 2023–2024 -> 2022**)으로 정렬:
  1. `2026 – 현재`: 일영 (GDGoC 대전대학교 챕터) [GDGoC]
  2. `2026`: 대전대학교 SW중심대학사업단 (공식 링크 연동 ↗)
  3. `2026`: 대전대학교 교수학습개발원 (CTL) (공식 링크 연동 ↗)
  4. `2024 – 현재`: AIONE 연구실 [AIONE Lab] (공식 링크 연동 ↗)
  5. `2023 – 2024`: 병장 만기전역 (1291기) @ 대한민국 해병대 (ROKMC) [유격전 조교] [무선통신병] (공식 링크 연동 ↗)
  6. `2022`: 대전대학교 HRC 봉사단 [디지털 격차 해소] [사회공헌] (공식 링크 연동 ↗)
- 3개 국어(KO / JA / EN) 및 A4 학술 CV(`PrintableCV`)에 통일된 개발자 톤앤매너로 탑재되어 있습니다.

---

## 3. 프로젝트 구조 및 파일 매핑 (Project Structure & File Mapping)

```text
개인홈페이지/
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages 자동 빌드 & 배포 워크플로우 (GitHub Actions)
├── public/
│   └── profile.jpg               # 개인 프로필 사진 (정적 서빙)
├── src/
│   ├── assets/
│   │   └── profile.jpg           # 번들링 참조용 프로필 이미지
│   ├── App.tsx                   # 메인 포트폴리오 컴포넌트, 다국어 데이터, VisitorCounter, PrintableCV
│   ├── index.css                 # Tailwind CSS 글로벌 스타일 (src 내부 모듈용)
│   └── main.tsx                  # React 18 루트 렌더러
├── app/
│   └── page.tsx                  # Next.js App Router 호환용 (src/App.tsx와 100% 동기화)
├── App.tsx                       # 루트 호환용 (src/App.tsx와 100% 동기화)
├── page.tsx                      # 루트 호환용 (src/App.tsx와 100% 동기화)
├── index.html                    # FOUC 방지 인라인 스크립트 및 타이틀 메타태그
├── index.css                     # Tailwind CSS 디렉티브 (@tailwind base, components, utilities)
├── tailwind.config.js            # darkMode: "class" 테마 설정
├── vite.config.ts                # Vite 설정 (base: './' 상대 경로 배포 대응)
├── package.json                  # 프로젝트 의존성 및 실행 스크립트 ("build": "vite build")
├── CONTEXT.md                    # [본 문서] 프로젝트 인수인계 및 설계 맥락 문서
└── README.md                     # 프로젝트 사용자 및 배포 안내서
```

> [!IMPORTANT]
> **4대 진입점 파일 동기화 규칙**:
> 본 프로젝트는 Vite 및 Next.js 배포 환경 양쪽을 지원할 수 있도록 `src/App.tsx`, `page.tsx`, `App.tsx`, `app/page.tsx` 4개 파일의 내용이 **항상 100% 동일(동일한 SHA-256 해시)**해야 합니다. 코드를 수정할 경우 반드시 `src/App.tsx`를 수정한 후 나머지 3개 파일에 복사하여 덮어쓰기해야 합니다.

---

## 4. 향후 개발 시 주의점 및 AI 행동 지침 (AI Guidelines & Rules)

1. **외부 API 연동 지양 (클라이언트 안정성 우선)**:
   - 외부 무료/유료 서드파티 카운터 API, 미검증 API 등은 서버 장애, CORS, 404/410 에러를 유발하므로 연동하지 않습니다.
   - 브라우저 스토리지나 정적 JSON, 검증된 클라이언트 측 로직으로 우선 해결합니다.
2. **디자인 시스템 및 톤앤매너 보존**:
   - 포인트 컬러: **Rose-500 (`text-rose-500`, `bg-rose-500`)** 계열을 엄격히 유지합니다.
   - 고대비 다크 모드: 텍스트는 다크 모드 기준 `text-zinc-100` ~ `text-zinc-300`, 제목은 `text-white` 및 `!text-rose-500`을 준수하여 가독성을 보장합니다.
   - 섹션 제목(`<h2>`) 수정 시 `!text-rose-500 font-extrabold` 접두사를 절대 누락하지 않습니다.
   - 섹션 제목 앞 벡터 아이콘(`w-3.5 h-3.5`)의 통일성을 해치지 않습니다.
3. **코드 출력 원칙**:
   - 코드 스니펫이나 수정 사항을 전달할 때 생략(`// 기존 코드 유지...` 등) 없이 **바로 복사-붙여넣기가 가능한 완전한 코드**를 제공합니다.
4. **무결성 검증 필수**:
   - 코드 수정 후에는 모든 JSX 태그(`<div>`, `<section>`, `<span>` 등)의 열림/닫힘 균형이 완벽한지 확인합니다.
   - `src/App.tsx` 수정 시 루트 호환 파일들(`page.tsx`, `App.tsx`, `app/page.tsx`)을 함께 갱신하고 SHA-256 해시 일치를 확인합니다.
5. **빌드 안정성 유지**:
   - `package.json`의 build 스크립트는 `"build": "vite build"`로 유지하여 CI 환경에서 불필요한 컴파일 중단을 방지합니다.
   - `src/App.tsx` 내의 타입 정의(`EducationItem`, `ExperienceItem` 등)를 온전하게 보존합니다.

---

## 5. 다른 컴퓨터 / 새 세션 빠른 시작 가이드 (Quick Start Guide)

새로운 채팅창이나 다른 컴퓨터에서 작업을 이어갈 때는 아래의 프롬프트 템플릿을 복사하여 AI에게 첫 메시지로 입력하면 됩니다.

### 📌 새 세션 프롬프트 템플릿
```text
@CONTEXT.md @src/App.tsx 파일의 맥락을 확인해줘. 
이전 작업을 이어서 진행하려고 해. [여기에 원하는 작업 지시]
```

### 💡 작업 시작 시 체크리스트
- [ ] `git branch` 확인 (현재 `main` 또는 `test` 중 적절한 브랜치에 위치해 있는지)
- [ ] `CONTEXT.md`의 아키텍처 및 디자인 규칙 재확인
- [ ] 작업 완료 후 `src/App.tsx`와 호환 파일(`page.tsx`, `App.tsx`, `app/page.tsx`) 4개 동기화 실행
- [ ] 변경 사항이 있을 경우 `CONTEXT.md` 및 `README.md` 동기화 갱신
- [ ] 로컬 테스트: `npm install` -> `npm run dev` (정상 작동 확인)
