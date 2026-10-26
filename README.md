# 🎓 학술·연구원 개인 포트폴리오 웹사이트 (Academic Portfolio)

React, Tailwind CSS, Lucide-react 아이콘을 활용하여 구현된 **학술·연구원(Academic / Researcher) 전용 미니멀 2열 포트폴리오 웹사이트**입니다.

한국어, 일본어(日本語), 영어(English) 3개 국어를 원클릭으로 실시간 전환할 수 있으며, 완전히 정돈된 프리미엄 다크/라이트 모드를 지원합니다.

---

## 📑 목차
1. [새로 추가 및 개선된 기능](#-새로-추가-및-개선된-기능)
2. [다국어 지원 (한국어 / 日本語 / English) 가이드](#-다국어-지원-한국어--日本語--english-가이드)
3. [다크 모드 & 라이트 모드 개선 사항](#-다크-모드--라이트-모드-개선-사항)
4. [프로젝트 실행 방법 (Vite / Next.js)](#-프로젝트-실행-방법-vite--nextjs)
5. [데이터 커스터마이징 가이드](#-데이터-커스터마이징-가이드)

---

## ✨ 새로 추가 및 개선된 기능

### 1. 🌐 실시간 3개 국어 번역 스위처 (KO / JA / EN)
- 사이드바 상단에 `[ KO ] [ JA ] [ EN ]` 세그먼트 버튼 탑재.
- 클릭 한 번으로 모든 프로필, 자기소개, 학력, 경력, 장학/수상, 대회, 기술 스택 및 UI 레이블이 즉각 번역 전환됩니다.
- 방문자의 브라우저 언어(`navigator.language`)를 자동 감지하며, 선택한 언어는 `localStorage`에 자동 저장되어 재방문 시에도 유지됩니다.

### 2. 🌓 어색함 없는 프리미엄 다크/라이트 모드 리뉴얼
- **원인 해결**: 기존에 Tailwind 설정(`tailwind.config.js`)에 `darkMode: "class"`가 누락되어 있어 수동 토글 시 스타일이 정상 반영되지 않고 OS 테마에만 의존하던 버그를 해결했습니다.
- **HTML 루트 동기화**: `document.documentElement`(`<html class="dark">`)와 `color-scheme` 속성을 연동하여 브라우저 스크롤바, 여백, 바운스 스크롤까지 일체감 있게 다크 톤으로 변경됩니다.
- **컬러 밸런스 재조정**:
  - **라이트 모드**: 따뜻한 아이보리 페이퍼 톤(`#fafaf9`) 바탕에 선명한 텍스트와 우아한 버건디 로즈 포인트.
  - **다크 모드**: 눈이 피로하지 않은 딥 슬레이트 차콜(`#0d0f12`), 부드러운 카드 서피스(`#16181d`), 생동감 있는 로즈 핑크 액센트(`#fb7185`).

---

## 🚀 프로젝트 실행 방법 (Vite / Next.js)

현재 프로젝트는 **Vite** 환경(`npm run dev`) 및 **Next.js** 환경 모두에서 바로 구동되도록 파일 구조가 동기화되어 있습니다.

### Vite 환경에서 실행할 경우 (기본)
```bash
npm install
npm run dev
```
브라우저에서 터미널에 표시된 로컬 주소(예: `http://localhost:5173`)로 접속하시면 됩니다.

---

## ⚙️ 핵심 설정 파일 점검

### 1. `tailwind.config.js` (필수 `darkMode: "class"` 적용 완료)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // <-- 수동 클래스 토글을 위해 필수
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 2. `index.css` (색상 스키마 및 배경 일체화)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    color-scheme: light;
    background-color: #fafaf9;
    color: #18181b;
  }

  html.dark {
    color-scheme: dark;
    background-color: #0d0f12;
    color: #f4f4f5;
  }
}
```

---

## 📝 다국어 데이터 수정 방법 (`portfolioDataByLang`)

[`page.tsx`](file:///c:/Users/iseui/Desktop/오창현/개인홈페이지/page.tsx) 상단의 `portfolioDataByLang` 객체는 `ko`(한국어), `ja`(일본어), `en`(영어)의 3개 구조로 나뉘어 있습니다:

```typescript
export const portfolioDataByLang = {
  // 한국어 데이터
  ko: {
    personal: { ... },
    about: { ... },
    education: { ... },
    experience: { ... },
    honors: { ... },
    competitions: { ... },
    skills: { ... },
  },

  // 日本語 データ
  ja: {
    personal: { ... },
    about: { ... },
    education: { ... },
    experience: { ... },
    honors: { ... },
    competitions: { ... },
    skills: { ... },
  },

  // English Data
  en: {
    personal: { ... },
    about: { ... },
    education: { ... },
    experience: { ... },
    honors: { ... },
    competitions: { ... },
    skills: { ... },
  },
};
```

각 언어 섹션별로 내용을 추가하거나 수정하면 화면의 `[ KO ]`, `[ JA ]`, `[ EN ]` 버튼 클릭 시 실시간으로 즉시 반영됩니다.

---

## 💡 자주 묻는 질문

### Q1. 다크모드가 새로고침해도 유지되나요?
네! 선택한 테마(라이트/다크)와 선택한 언어(KO/JA/EN)는 모두 브라우저의 `localStorage`에 영구 저장되므로 페이지를 새로고침하거나 브라우저를 껐다 켜도 그대로 유지됩니다.

### Q2. 새로운 논문(Publication)을 추가하고 싶어요.
`portfolioDataByLang[lang].publications.items` 배열에 논문 객체를 추가하시면 자동으로 좌측 붉은색 세로 바가 들어간 학술 카드 UI로 렌더링됩니다.
