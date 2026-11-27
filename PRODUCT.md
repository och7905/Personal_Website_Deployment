# 📐 Product Truths (PRODUCT.md)

> **Framework**: Impeccable Product Truth Standard  
> **Repository**: `my-portfolio` (`Personal_Website_Deployment`)  
> **Status**: Verified & Locked  
> **Last Updated**: 2026-11-27  

---

## 1. Product Identity & Purpose

- **Product Name**: Academic & Engineering Portfolio (`my-portfolio`)
- **Owner**: 오창현 (Changhyeon Oh)
  - **Affiliation**: 대전대학교 컴퓨터공학과 (Daejeon University, Dept. of Computer Engineering)
  - **Research Group**: AIONE Lab (학생 랩장 3기 & 학부 연구생 / Student Lab Director)
  - **Specialization**: 백엔드 시스템 엔지니어링, 멀티모달 생성 모델, 대용량 데이터 파이프라인 (Backend Systems Engineering, Multimodal Generative AI, Large-Scale Data Pipelines)
  - **Email**: `och7905@naver.com`
  - **Production URL**: `https://och7905.github.io/Personal_Website_Deployment/`
- **Core Purpose**:
  - 학술 연구원 및 백엔드/AI 엔지니어로서의 학문적 성과, 실전 엔지니어링 역량, 공인된 수상 실적 및 연구 활동을 가장 투명하고 정밀하게 전달하는 **학술 중심 디지털 포트폴리오이자 디지털 이력서(CV)**.
  - 피상적인 화려함이나 AI 템플릿 특유의 과장(Slop)을 배제하고, **검증 가능한 증빙(공식 상장 PDF, 언론 보도, 논문 원문, GitHub 소스, 구글 드라이브 산출물)**과 밀도 높은 사실(Fact) 중심으로 사용자의 신뢰도를 극대화함.

---

## 2. Target Audience & User Personas

| 사용자 그룹 | 주요 관심사 | 포트폴리오가 제공해야 할 가치 |
| :--- | :--- | :--- |
| **대학원 교수 / 연구 책임자 (PI)** | 학술적 잠재력, 연구 태도, 수학적 기초, 연구실 기여도 | AIONE 연구실 학생 랩장 이력, 이산수학 튜터링 경력, 학술 논문 및 실전 AI 프로젝트 완성도 |
| **빅테크 / 스타트업 채용 담당자 & 엔지니어링 리드** | 백엔드 시스템 설계 능력, AI 프로토타이핑 속도, 협업 역량 | GDGoC 챕터 개발자 활동, 소셜벤처 해커톤 대상(1위) 및 연합 창업경진대회 최우수상 실적, 기술 스택 깊이 |
| **대회 / 심사위원 & 산학 협력 파트너** | 문제 해결력, 지역사회 및 산업체 연계 아이디어 구체화 능력 | 2026 DSC AI 챌린지 및 2026 소셜벤처 해커톤 등 실전 수상 실적과 실제 문제 정의-해결 워크플로우 |
| **글로벌 연구자 및 해외 평가자** | 언어 장벽 없는 신속한 연구자 이력 파악 | 자연스러운 3개 국어(한국어, 영어, 일본어) 실시간 전환과 글로벌 표준 A4 학술 CV 출력 지원 |

---

## 3. Core Workflows & User Journeys

### 3.1 역량 및 실적 검증 여정 (Verification Journey)
1. **착륙(Landing)**: 방문자가 접속하여 Hero 영역에서 신원(오창현), 전문 분야(AI & SW 개발자), 현재 소속(AIONE Lab)을 3초 이내에 파악.
2. **목차 탐색(Scannability)**: 데스크톱 고정 좌측 사이드바 또는 모바일 햄버거 드로어를 통해 7개 핵심 섹션(`01. About` ~ `07. Skills`)의 구조를 한눈에 스캔.
3. **근거 확인(Evidence Inspection)**:
   - 수상 실적(`06. Competitions`)에서 실제 상장 PDF 뷰어 호출 또는 언론 보도(뉴스1, 한국대학신문, 충남일보) 기사 확인.
   - 서포터즈 및 활동(`03. Experience`)에서 공식 수료증 사본(PDF) 및 활동 산출물 구글 드라이브 링크 확인.
   - 아직 공식 발행 전인 최신 수상(DSC AI 챌린지, 초중고대 창업대회)은 정직한 비활성화(Disabled) 플레이스홀더로 신뢰감 유지.

### 3.2 실시간 다국어 전환 여정 (Multilingual Journey)
- 사이드바 상단의 `[ KO ] [ JA ] [ EN ]` 캡슐 버튼을 통해 페이지 새로고침 없이 즉시 전체 콘텐츠 언어 전환.
- 단순 번역기가 아닌 각 언어권 개발자/학술 표준 톤앤매너로 정제된 어휘 사용.
- 선택된 언어는 `localStorage`(`academic-portfolio-lang`)에 보존되어 재방문 시에도 유지.

### 3.3 표준 학술 CV 인쇄 및 PDF 저장 여정 (Printable CV Journey)
- 사이드바의 **[CV]** 버튼 또는 브라우저 인쇄 단축키(`Ctrl + P`) 호출.
- 웹 인터페이스 크롬(사이드바, 모바일 메뉴, 테마 토글, 푸터 등)은 자동으로 숨김 처리(`print:hidden`).
- 고대비 단색 표준 A4 양식(`<PrintableCV />`)으로 렌더링되어 심사용 출력물이나 정형화된 PDF 파일로 즉시 보관 가능.

### 3.4 실시간 방문 통계 확인 여정 (Live Counter Journey)
- 푸터에 탑재된 Supabase 기반 실시간 카운터를 통해 당일 방문자(Today)와 누적 방문자(Total)를 확인.
- 불필요한 새로고침 중복 증가 방지(세션/당일 1회 카운팅) 및 웹소켓 실시간 동기화.

---

## 4. Tone, Personality & Anti-Slop Principles

> **"Anti-Slop (탈-조잡함) 원칙"**: 생성형 AI가 무분별하게 양산하는 전형적인 네온 보라색 그라데이션, 의미 없는 블러 원형 장식, 과장된 자기계발식 수식어를 철저히 배제한다.

1. **학술적 절제와 데이터 밀도 (Academic Rigour & Data Density)**:
   - 불필요한 과장("세계 최고", "열정적인") 대신 사실 기반 수치와 구체적 역할 명시 (예: `학생 랩장 (3기)`, `유격전 조교 / 무선통신병`, `대상 (전체 1위)`).
   - 카드 간 과도한 여백 낭비를 지양하고, 정보의 위계(Hierarchy)를 폰트 크기, 자간, 웨이트로 정교하게 통제.
2. **단일 포인트 컬러의 의도적 절제 (Purposeful Rose-500)**:
   - 사이트 전체의 시각적 앵커로 **Rose-500 (`#f43f5e`)** 단 하나의 포인트 색상만 사용.
   - 무지개색 태그나 화려한 네온 글로우를 배제하고, 섹션 타이틀(`!text-rose-500`), 활성 스크롤 스파이, 미세 뱃지 틴트에만 통일감 있게 적용.
3. **고대비 다크 모드 퍼스트 (Dark-First Ergonomics)**:
   - 장시간 코드를 읽는 개발자 및 연구자의 시각 피로도를 고려한 딥 차콜/징크 배경 (`#0a0a0c`, `zinc-950`, `zinc-900`).
   - 텍스트 가독성을 보장하는 고대비 폰트 렌더링 (`text-zinc-100` ~ `text-zinc-300`, 제목 `text-white`).
4. **증빙 없는 주장의 배제 (Evidence-Backed Claims)**:
   - 등록된 모든 경력과 수상 내역은 공식 문서 번호, 발급 일자, 주관 기관을 명시하고 다운로드 가능한 PDF 또는 공인 기사 링크를 연결.

---

## 5. Platform, Form Factors & Delivery

- **Platform**: Web (Desktop Browser, Mobile Web, Tablet)
- **Viewport Layouts**:
  - **Desktop (>= 1024px, `lg`)**: 좌측 320px 고정 사이드바(프로필, Bio, 연락처, 언어/테마/CV 컨트롤, 7섹션 목차) + 우측 메인 콘텐츠 스트림.
  - **Mobile (< 1024px)**: 단일 컬럼 플로우 + 우측 상단 플로팅 글래스모피즘 햄버거 토글 버튼 및 슬라이드오버 네비게이션 드로어.
  - **Print (`@media print`)**: 1컬럼 고정 A4 규격, 흑백 고대비 학술 표준 양식.
- **Hosting & CI/CD**:
  - GitHub Actions를 통한 `main` 브랜치 자동 빌드 및 GitHub Pages 배포.
  - Vite의 `base: './'` 설정과 `getAssetUrl` 헬퍼 함수를 통한 서브패스 정적 에셋 무결성 보장.

---

## 6. Design System & Styling Constraints

```text
Foundations:
├── Font Family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
├── Monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace
├── Primary Background (Dark): bg-[#0a0a0c] / bg-zinc-950 / bg-zinc-900
├── Primary Background (Light): bg-[#fafafa] / bg-white / bg-zinc-50
├── Accent Color: #f43f5e (Tailwind Rose-500)
├── Subtle Borders: border-zinc-200 (Light) / border-zinc-800, border-zinc-700/60 (Dark)
└── Typography Hierarchy:
    ├── Section Header: text-xs !text-rose-500 uppercase font-extrabold tracking-widest flex items-center gap-2
    ├── Item Title: text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-rose-600
    ├── Subtitle / Org: text-sm font-semibold text-zinc-700 dark:text-zinc-300
    ├── Period / Date: text-xs font-mono text-zinc-400 dark:text-zinc-500
    └── Badges: font-mono text-[11px] px-2 py-0.5 rounded-md (Rose tinted)
```

---

## 7. Architectural Invariants (불변의 규칙)

1. **4대 진입점 파일 동기화 원칙 (Zero-Drift)**:
   - Vite 환경과 Next.js 환경 양쪽을 지원하기 위해 다음 4개 파일은 항상 **100% 동일(동일 SHA-256 해시)**해야 함:
     1. `src/App.tsx` (기준 원본)
     2. `App.tsx` (루트)
     3. `page.tsx` (루트)
     4. `app/page.tsx` (Next.js 호환)
   - 코드 수정 시 반드시 `src/App.tsx`를 수정한 후 나머지 3개 파일에 복사 동기화.
2. **초기 로딩 FOUC(화면 깜빡임) 0% 보장**:
   - `index.html` 내 인라인 바닐라 스크립트가 React 런타임 이전에 `localStorage`를 확인하여 `<html>` 요소에 `dark` 클래스를 즉각 주입.
3. **환경변수 안전성 및 격리**:
   - Supabase 키(`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)는 `.env`에서 관리하며 원격 저장소 노출 금지.
   - 빌드 타임 주입 및 미설정 시 Fallback 방어 로직 상시 가동.
4. **검색 엔진 최적화 (SEO) 및 메타데이터 무결성**:
   - `index.html` 및 `app/layout.tsx` 내 구글/네이버 소유권 확인 태그(`naver-site-verification`, `pofol-verify`), OpenGraph, JSON-LD 구조화 데이터(`WebSite`, `Person`), `robots.txt`, `sitemap.xml` 영구 유지.

## 8. Hardening & Robustness Standards (Impeccable Harden)

1. **상태 전환 및 모달 안정성 (State & Modal Stability)**:
   - 수상 현장 사진 원본 확대 모달(`selectedMedia`) 및 모바일 내비게이션 드로어(`isMobileNavOpen`) 활성화 시 `document.body.style.overflow = "hidden"`을 주입하여 배경 스크롤을 원천 차단하고, 닫힐 때 원상태로 복원.
   - 키보드 `Escape` 키 감지 리스너를 통해 모든 모달/오버레이가 즉시 안전하게 닫히도록 바인딩.
2. **웹 접근성 및 키보드 내비게이션 (Accessibility & Keyboard Operability)**:
   - 모든 인터랙티브 트리거(모바일 메뉴 버튼, 언어 선택 버튼, CV 다운로드, 다크모드 토글)에 구체적인 `aria-label`, `aria-expanded`, `aria-controls`, `aria-pressed` 명시.
   - 수상 실적 현장 사진 썸네일에 `role="button"`, `tabIndex={0}`, `aria-label`, `onKeyDown(Enter / Space)`을 부여하여 마우스 없이 키보드만으로도 모달 탐색 가능.
   - 목차 내비게이션 링크에 현재 스크롤 위치를 나타내는 `aria-current="true"`를 동적으로 부여하여 스크린 리더 친화성 극대화.
3. **미디어 로딩 및 방어적 레이아웃 (Media & Defensive Layout)**:
   - 히어로 프로필 이미지에 `loading="eager"`, `decoding="async"`를 적용하여 LCP(Largest Contentful Paint) 렌더링 최적화 및 로딩 실패 시 Fallback 아바타 보존.
   - 모든 타임라인 일자 스팬에 `break-keep`, `tabular-nums`를 강제하여 글자나 숫자가 줄바꿈되어 잘리는 현상 방지.
