/** @type {import('tailwindcss').Config} */
export default {
  // HTML 태그의 'dark' 클래스 유무로 테마를 제어하도록 강제 설정
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
        ],
      },
      colors: {
        // 커스텀 포인트 컬러가 필요할 경우 여기에 추가 가능합니다.
      },
    },
  },
  plugins: [],
};