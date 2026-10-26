import React, { useState, useEffect } from "react";
import {
  Mail,
  FileText,
  Sun,
  Moon,
  MapPin,
  Coffee,
  GraduationCap,
  Briefcase,
  BookOpen,
  Award,
  Trophy,
  Code2,
  Globe,
  ExternalLink,
} from "lucide-react";

// ============================================================================
// 1. 소셜 SVG 아이콘 (GitHub & LinkedIn)
// ============================================================================
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const BlogIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M6 6h10" />
    <path d="M6 10h10" />
  </svg>
);

// ============================================================================
// 2. 다국어 지원 (한국어 / 日本語 / English) 포트폴리오 데이터
// ============================================================================
export type Language = "ko" | "ja" | "en";

export const portfolioDataByLang = {
  // --------------------------------------------------------------------------
  // 한국어 (Korean)
  // --------------------------------------------------------------------------
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
      profileImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      cvUrl: "#",
    },
    ui: {
      navTitle: "NAVIGATION",
      cvButton: "CV",
      lightMode: "라이트 모드",
      darkMode: "다크 모드",
      organizerLabel: "주관:",
      awardLabel: "성과:",
      emptyPub: "현재 등재 준비 중인 논문 및 연구 성과가 업데이트될 예정입니다.",
      copyright: `© ${new Date().getFullYear()} 오창현. All rights reserved.`,
      footerNote: "학술 연구원 미니멀 테마 기반 제작",
    },
    navigation: [
      { id: "about", label: "소개" },
      { id: "education", label: "학력" },
      { id: "experience", label: "경력 및 활동" },
      { id: "publications", label: "연구 논문" },
      { id: "honors", label: "수상 및 장학" },
      { id: "competitions", label: "대회 및 해커톤" },
      { id: "skills", label: "기술 스택" },
    ],
    about: {
      sectionTitle: "01. About Me",
      introParagraphs: [
        "안녕하세요! 인공지능(AI)과 백엔드 시스템 엔지니어링에 깊은 관심을 두고 있는 대전대학교 컴퓨터공학과 학부생 오창현입니다. 확장 가능한 서버 아키텍처 구축, 대용량 데이터 파이프라인 처리, 그리고 실세계 문제를 해결하는 실용적인 머신러닝 워크플로우를 구현하는 데 흥미를 느끼고 있습니다.",
        "현재 대전대학교 AIONE 연구실에서 학생 랩장이자 학부 연구생으로 활동하며, 멀티모달 생성 모델 및 데이터 전처리 파이프라인 개발에 집중하고 있습니다. 탄탄한 컴퓨터 공학 기초 지식을 바탕으로 신뢰성 높고 효율적인 시스템을 개발하는 끈기 있는 소프트웨어 엔지니어로 성장하고자 합니다.",
      ],
      highlights: [
        { keyword: "AIONE 연구실", url: "#experience" },
        { keyword: "백엔드 시스템 엔지니어링", url: "#skills" },
        { keyword: "멀티모달 생성 모델", url: "#experience" },
      ],
      hobbyNote:
        "연구와 코딩 외 시간에는 활력 유지를 위한 웨이트 트레이닝과 리그 오브 레전드(LoL)를 즐깁니다.",
    },
    education: {
      sectionTitle: "02. Education",
      items: [
        {
          period: "2022 – 현재",
          degree: "컴퓨터공학과 학사 과정 (B.Eng.)",
          institution: "대전대학교",
          lab: "AIONE Lab",
          location: "대전",
          description: "학부 재학 / 백엔드 및 AI 엔지니어링 전공 탐구",
        },
      ],
    },
    experience: {
      sectionTitle: "03. Experience",
      items: [
        {
          period: "2024 – 현재",
          role: "학생 랩장 & 학부 연구생",
          institution: "AIONE 연구실",
          lab: "AIONE Lab",
          location: "대전",
          description:
            "멀티모달 비디오-투-오디오(Video-to-Audio) 생성 모델 연구 주도, 연구실 운영 총괄 및 데이터 전처리 파이프라인 구축.",
        },
        {
          period: "2026 – 현재",
          role: "멤버 / 개발자",
          institution: "일영 (GDGoC 대전대학교 챕터)",
          lab: "GDGoC",
          location: "대전",
          description:
            "개발자 스터디 세션, 협업 소프트웨어 엔지니어링 프로젝트 및 기술 지식 공유 세미나 참여.",
        },
        {
          period: "2026",
          role: "공식 학생 서포터즈",
          institution: "대전대학교 SW중심대학사업단",
          location: "대전",
          description:
            "소프트웨어 사업단 주요 성과 홍보 카드뉴스 및 기술 블로그 제작, 학술 교류 행사 기획 및 운영.",
        },
        {
          period: "2026",
          role: "피어 튜터 (전공기초 레벨업 튜터링 - 이산수학)",
          institution: "대전대학교 교수학습개발원 (CTL)",
          location: "대전",
          description:
            "기초 이산수학 공식 8주 동료 튜터링 프로그램 운영, 논리 증명 및 이산 구조에 관한 학부생 멘토링.",
        },
      ],
    },
    publications: {
      sectionTitle: "04. Publications",
      items: [] as Array<{
        title: string;
        authors: string[];
        venue: string;
        year: string;
        links?: Array<{ label: string; url: string }>;
      }>,
    },
    honors: {
      sectionTitle: "05. Honors & Scholarships",
      items: [
        {
          year: "2026",
          title: "SW중심대학사업단 공식 서포터즈 장학금",
          issuer: "대전대학교 SW중심대학사업단",
          description:
            "소프트웨어 대외 홍보 기획 및 기술 콘텐츠 발간 우수 기여 선정 (연속 학기).",
        },
        {
          year: "2026",
          title: "학습 피어 튜터링 우수 장학금",
          issuer: "대전대학교",
          description: "기초 이산수학 수강 학부생 대상 우수 멘토링 성과 인정.",
        },
        {
          year: "2022 – 2026",
          title: "컴퓨터공학과 학과 경쟁력 강화 장학금 (다수 수혜)",
          issuer: "대전대학교 컴퓨터공학과",
          description:
            "전공 교과 성적 우수 및 적극적인 학과 학술 활동 참여로 지속 선발.",
        },
        {
          year: "2022 – 2026",
          title: "국가장학금 및 교내 우수 성적 장학금",
          issuer: "한국장학재단 (KOSAF) / 대전대학교",
          description:
            "학기별 국가장학금 및 교내 기숙/우수 인재 장학금 (HRC, D-디딤돌 등) 수혜.",
        },
      ],
    },
    competitions: {
      sectionTitle: "06. Competitions",
      items: [
        {
          year: "2026",
          title: "The 2nd COSS Intelligent IoT Hackathon (제2회 지능 IoT해커톤 경진대회)",
          award: "Participant",
          organizer: "IoT Innovation & Convergence University Group (COSS)",
          description:
            "Developed end-to-end data acquisition pipelines bridging edge sensors with cloud backend analytics.",
        },
        {
          year: "2026",
          title: "2026 CO-SHOW IoT & AI Convergence University Challenge",
          award: "Participant",
          organizer: "IoT Innovation & Convergence University Group (COSS)",
          description:
            "Designed and implemented an intelligent IoT service prototype integrating embedded device telemetry with AI models.",
        },
        {
          year: "2026",
          title: "The 2nd IoT & AI Open Platform Challenge",
          award: "Participant",
          organizer: "Korea Electronics Technology Institute (KETI) / IoT Forum",
          description:
            "Built intelligent services leveraging the Mobius open-source standard IoT platform and data processing modules.",
        },
        {
          year: "2026",
          title: "2026 Social Venture Innovation Hackathon for Regional Problem Solving",
          award: "Participant",
          organizer: "Daejeon University & Regional Partner Agencies",
          description:
            "Ideated and prototyped IT-driven sustainable social venture solutions addressing key local community challenges.",
        },
        {
          year: "2025",
          title: "The 1st COSS Intelligent IoT Hackathon (지능 IoT해커톤 대회)",
          award: "Participant",
          organizer: "IoT Innovation & Convergence University Group (COSS)",
          description:
            "Competed in the inaugural campus IoT hackathon, interfacing embedded microcontrollers with network backend endpoints.",
        },
      ],
    },
    skills: {
      sectionTitle: "07. Technical Skills",
      groups: [
        {
          category: "프로그래밍 언어 (Programming Languages)",
          items: ["C / C++", "Python", "SQL"],
        },
        {
          category: "AI & 데이터 기초 (AI & Data Basics)",
          items: [
            "Python Data Structures",
            "Machine Learning Basics",
            "PyTorch (Basic)",
          ],
        },
        {
          category: "도구 및 개발 환경 (Tools & Environments)",
          items: ["Git / GitHub", "Linux / Ubuntu", "VS Code"],
        },
        {
          category: "관심 분야 (Interests)",
          items: ["Backend Development", "Data Engineering", "Generative Models"],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 日本語 (Japanese)
  // --------------------------------------------------------------------------
  ja: {
    personal: {
      name: "オ・チャンヒョン",
      nameSub: "Changhyeon Oh (오창현)",
      title: "学部研究員 / AI & バックエンド開発者",
      department: "コンピュータ工学科",
      affiliation: "大田（テジョン）大学校",
      lab: "AIONE 研究室 (AIONE Lab)",
      location: "大韓民国 大田",
      email: "och7905@naver.com",
      profileImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      cvUrl: "#",
    },
    ui: {
      navTitle: "NAVIGATION",
      cvButton: "CV",
      lightMode: "ライトモード",
      darkMode: "ダークモード",
      organizerLabel: "主催:",
      awardLabel: "成果:",
      emptyPub: "現在準備中の論文および研究成果が更新される予定です。",
      copyright: `© ${new Date().getFullYear()} Changhyeon Oh. All rights reserved.`,
      footerNote: "アカデミック・ミニマルデザイン",
    },
    navigation: [
      { id: "about", label: "紹介" },
      { id: "education", label: "学歴" },
      { id: "experience", label: "経歴" },
      { id: "publications", label: "論文" },
      { id: "honors", label: "受賞・奨学金" },
      { id: "competitions", label: "コンペティション" },
      { id: "skills", label: "スキル" },
    ],
    about: {
      sectionTitle: "01. About Me",
      introParagraphs: [
        "はじめまして！人工知能（AI）とバックエンドシステムエンジニアリングに関心を持つ、大田大学校コンピュータ工学科の学部生 オ・チャンヒョンです。スケーラブルなサーバーアーキテクチャの構築、大規模データパイプラインの処理、そして現実の課題を解決する実用的な機械学習ワークフローの実装に情熱を注いでいます。",
        "現在、大田大学校 AIONE研究室にて学生リーダーおよび学部研究員として活動し、マルチモーダル生成モデルやデータ前処理パイプラインの開発に取り組んでいます。強固なコンピュータサイエンスの基礎知識に基づき、信頼性が高く効率的なシステムを築くソフトウェアエンジニアを目指しています。",
      ],
      highlights: [
        { keyword: "AIONE研究室", url: "#experience" },
        { keyword: "バックエンドシステムエンジニアリング", url: "#skills" },
        { keyword: "マルチモーダル生成モデル", url: "#experience" },
      ],
      hobbyNote:
        "研究やコーディング以外の時間には、体力を維持するためのウェイトトレーニングや League of Legends を楽しんでいます。",
    },
    education: {
      sectionTitle: "02. Education",
      items: [
        {
          period: "2022 – 現在",
          degree: "コンピュータ工学科 学士課程 (B.Eng.)",
          institution: "大田大学校",
          lab: "AIONE Lab",
          location: "大田、韓国",
          description: "学部在学 / バックエンドおよびAIエンジニアリング専攻",
        },
      ],
    },
    experience: {
      sectionTitle: "03. Experience",
      items: [
        {
          period: "2024 – 現在",
          role: "学生リーダー & 学部研究員",
          institution: "AIONE 研究室",
          lab: "AIONE Lab",
          location: "大田、韓国",
          description:
            "マルチモーダル Video-to-Audio 生成モデル研究の主導、研究室運営管理およびデータ前処理パイプラインの構築。",
        },
        {
          period: "2026 – 現在",
          role: "メンバー / 開発者",
          institution: "日迎（GDGoC 大田大学校チャプター）",
          lab: "GDGoC",
          location: "大田、韓国",
          description:
            "開発者勉強会、協業ソフトウェアエンジニアリングプロジェクト、技術知見共有セミナーへの参加。",
        },
        {
          period: "2026",
          role: "公式学生サポーターズ",
          institution: "大田大学校 SW中心大学事業団",
          location: "大田、韓国",
          description:
            "学部SW成果の広報カードニュースおよび技術ブログ制作、学術交流イベントの企画・運営。",
        },
        {
          period: "2026",
          role: "ピアチューター（専攻基礎レベルアップチュータリング - 離散数学）",
          institution: "大田大学校 教授学習開発院（CTL）",
          location: "大田、韓国",
          description:
            "基礎離散数学の公式8週間ピアチュータリングプログラムを運営、論理証明および離散構造に関する学部生のメンタリング指導。",
        },
      ],
    },
    publications: {
      sectionTitle: "04. Publications",
      items: [] as Array<{
        title: string;
        authors: string[];
        venue: string;
        year: string;
        links?: Array<{ label: string; url: string }>;
      }>,
    },
    honors: {
      sectionTitle: "05. Honors & Scholarships",
      items: [
        {
          year: "2026",
          title: "SW事業団公式サポーターズ奨学金",
          issuer: "大田大学校 SW中心大学事業団",
          description:
            "ソフトウェア対外広報の企画および技術コンテンツ発信における優秀な貢献（連続学期）。",
        },
        {
          year: "2026",
          title: "ピアチュータリング優秀奨学金",
          issuer: "大田大学校",
          description: "基礎離散数学の学部生メンタリングにおける優れた指導成果を表彰。",
        },
        {
          year: "2022 – 2026",
          title: "コンピュータ工学科 競争力強化奨学金（多数受給）",
          issuer: "大田大学校 コンピュータ工学科",
          description: "専攻科目の優秀な成績および積極的な学術活動により継続選抜。",
        },
        {
          year: "2022 – 2026",
          title: "国家奨学金および学内成績優秀奨学金",
          issuer: "韓国奨学財団 (KOSAF) / 大田大学校",
          description:
            "学期別国家奨学金および学内選抜奨学金（HRC、D-飛び石など）を受給。",
        },
      ],
    },
    competitions: {
      sectionTitle: "06. Competitions",
      items: [
        {
          year: "2026",
          title: "The 2nd COSS Intelligent IoT Hackathon (제2회 지능 IoT해커톤 경진대회)",
          award: "Participant",
          organizer: "IoT Innovation & Convergence University Group (COSS)",
          description:
            "Developed end-to-end data acquisition pipelines bridging edge sensors with cloud backend analytics.",
        },
        {
          year: "2026",
          title: "2026 CO-SHOW IoT & AI Convergence University Challenge",
          award: "Participant",
          organizer: "IoT Innovation & Convergence University Group (COSS)",
          description:
            "Designed and implemented an intelligent IoT service prototype integrating embedded device telemetry with AI models.",
        },
        {
          year: "2026",
          title: "The 2nd IoT & AI Open Platform Challenge",
          award: "Participant",
          organizer: "Korea Electronics Technology Institute (KETI) / IoT Forum",
          description:
            "Built intelligent services leveraging the Mobius open-source standard IoT platform and data processing modules.",
        },
        {
          year: "2026",
          title: "2026 Social Venture Innovation Hackathon for Regional Problem Solving",
          award: "Participant",
          organizer: "Daejeon University & Regional Partner Agencies",
          description:
            "Ideated and prototyped IT-driven sustainable social venture solutions addressing key local community challenges.",
        },
        {
          year: "2025",
          title: "The 1st COSS Intelligent IoT Hackathon (지능 IoT해커톤 대회)",
          award: "Participant",
          organizer: "IoT Innovation & Convergence University Group (COSS)",
          description:
            "Competed in the inaugural campus IoT hackathon, interfacing embedded microcontrollers with network backend endpoints.",
        },
      ],
    },
    skills: {
      sectionTitle: "07. Technical Skills",
      groups: [
        {
          category: "プログラミング言語 (Programming Languages)",
          items: ["C / C++", "Python", "SQL"],
        },
        {
          category: "AI & データ基礎 (AI & Data Basics)",
          items: [
            "Python Data Structures",
            "Machine Learning Basics",
            "PyTorch (Basic)",
          ],
        },
        {
          category: "ツール & 開発環境 (Tools & Environments)",
          items: ["Git / GitHub", "Linux / Ubuntu", "VS Code"],
        },
        {
          category: "関心分野 (Interests)",
          items: ["Backend Development", "Data Engineering", "Generative Models"],
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // English
  // --------------------------------------------------------------------------
  en: {
    personal: {
      name: "Changhyeon Oh",
      nameSub: "오창현",
      title: "Undergraduate Student / AI & Backend Developer",
      department: "Department of Computer Engineering",
      affiliation: "Daejeon University",
      lab: "AIONE Laboratory",
      location: "Daejeon, Republic of Korea",
      email: "och7905@naver.com",
      profileImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      cvUrl: "#",
    },
    ui: {
      navTitle: "NAVIGATION",
      cvButton: "CV",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      organizerLabel: "Organizer:",
      awardLabel: "Result:",
      emptyPub: "Publications and research outputs will be updated here.",
      copyright: `© ${new Date().getFullYear()} Changhyeon Oh. All rights reserved.`,
      footerNote: "Designed with an academic & minimalist aesthetic.",
    },
    navigation: [
      { id: "about", label: "About" },
      { id: "education", label: "Education" },
      { id: "experience", label: "Experience" },
      { id: "publications", label: "Publications" },
      { id: "honors", label: "Honors & Scholarships" },
      { id: "competitions", label: "Competitions" },
      { id: "skills", label: "Skills" },
    ],
    about: {
      sectionTitle: "01. About Me",
      introParagraphs: [
        "Hello! I am Changhyeon Oh, an undergraduate student majoring in Computer Engineering with a keen interest in Artificial Intelligence and backend system engineering. I am deeply interested in building scalable server architectures, processing large-scale data pipelines, and implementing practical machine learning workflows that tackle real-world challenges.",
        "Currently serving as a student researcher at AIONE Lab, Daejeon University, I focus on multimodal generative models and data pipeline development. Grounded in solid computer science fundamentals, my goal is to grow into a resilient software engineer dedicated to building dependable and efficient systems.",
      ],
      highlights: [
        { keyword: "AIONE Lab", url: "#experience" },
        { keyword: "backend system engineering", url: "#skills" },
        { keyword: "multimodal generative models", url: "#experience" },
      ],
      hobbyNote:
        "Outside of research and coding, I enjoy resistance weight training to stay energized and playing League of Legends.",
    },
    education: {
      sectionTitle: "02. Education",
      items: [
        {
          period: "2022 – Present",
          degree: "B.Eng. in Computer Engineering",
          institution: "Daejeon University",
          lab: "AIONE Lab",
          location: "Daejeon, Korea",
          description: "Undergraduate Student / Focus on Backend & AI Engineering",
        },
      ],
    },
    experience: {
      sectionTitle: "03. Experience",
      items: [
        {
          period: "2024 – Present",
          role: "Student Lab Leader & Undergraduate Researcher",
          institution: "AIONE Laboratory",
          lab: "AIONE Lab",
          location: "Daejeon, Korea",
          description:
            "Leading research on multimodal video-to-audio generation models, managing lab operations, and constructing data preprocessing pipelines.",
        },
        {
          period: "2026 – Present",
          role: "Member / Developer",
          institution: "Il-Young (GDGoC Daejeon University Chapter)",
          lab: "GDGoC",
          location: "Daejeon, Korea",
          description:
            "Participating in developer study sessions, collaborative software engineering projects, and technical knowledge-sharing seminars.",
        },
        {
          period: "2026",
          role: "Official Student Supporter",
          institution: "SW University Project Group, Daejeon University",
          location: "Daejeon, Korea",
          description:
            "Promoted departmental SW milestones by creating technical card news, blog write-ups, and organizing academic outreach initiatives.",
        },
        {
          period: "2026",
          role: "Peer Tutor (Major Foundational Level-Up Tutoring - Discrete Mathematics)",
          institution: "Center for Teaching and Learning, Daejeon University",
          location: "Daejeon, Korea",
          description:
            "Led an official 8-week peer tutoring program for foundational Discrete Mathematics, mentoring undergraduate peers on logic proofs and discrete structures.",
        },
      ],
    },
    publications: {
      sectionTitle: "04. Publications",
      items: [] as Array<{
        title: string;
        authors: string[];
        venue: string;
        year: string;
        links?: Array<{ label: string; url: string }>;
      }>,
    },
    honors: {
      sectionTitle: "05. Honors & Scholarships",
      items: [
        {
          year: "2026",
          title: "SW Project Group Official Supporter Scholarship",
          issuer: "SW University Project Group, Daejeon University",
          description:
            "Awarded for exceptional contributions to software outreach planning and tech content publication (consecutive semesters).",
        },
        {
          year: "2026",
          title: "Academic Peer Tutoring Excellence Scholarship",
          issuer: "Daejeon University",
          description:
            "Granted for successfully mentoring undergraduate students in foundational Discrete Mathematics.",
        },
        {
          year: "2022 – 2026",
          title: "Departmental Academic Competitiveness Scholarship (Multiple)",
          issuer: "Department of Computer Engineering, Daejeon University",
          description:
            "Continuously selected for strong major coursework performance and active academic engagement.",
        },
        {
          year: "2022 – 2026",
          title: "National Academic Grant & Institutional Honors Scholarship",
          issuer: "Korea Student Aid Foundation (KOSAF) / Daejeon University",
          description:
            "Awarded national semester scholarships alongside selective residential and institutional merit awards (HRC, D-Stepping Stone).",
        },
      ],
    },
    competitions: {
      sectionTitle: "06. Competitions",
      items: [
        {
          year: "2026",
          title: "The 2nd COSS Intelligent IoT Hackathon (제2회 지능 IoT해커톤 경진대회)",
          award: "Participant",
          organizer: "IoT Innovation & Convergence University Group (COSS)",
          description:
            "Developed end-to-end data acquisition pipelines bridging edge sensors with cloud backend analytics.",
        },
        {
          year: "2026",
          title: "2026 CO-SHOW IoT & AI Convergence University Challenge",
          award: "Participant",
          organizer: "IoT Innovation & Convergence University Group (COSS)",
          description:
            "Designed and implemented an intelligent IoT service prototype integrating embedded device telemetry with AI models.",
        },
        {
          year: "2026",
          title: "The 2nd IoT & AI Open Platform Challenge",
          award: "Participant",
          organizer: "Korea Electronics Technology Institute (KETI) / IoT Forum",
          description:
            "Built intelligent services leveraging the Mobius open-source standard IoT platform and data processing modules.",
        },
        {
          year: "2026",
          title: "2026 Social Venture Innovation Hackathon for Regional Problem Solving",
          award: "Participant",
          organizer: "Daejeon University & Regional Partner Agencies",
          description:
            "Ideated and prototyped IT-driven sustainable social venture solutions addressing key local community challenges.",
        },
        {
          year: "2025",
          title: "The 1st COSS Intelligent IoT Hackathon (지능 IoT해커톤 대회)",
          award: "Participant",
          organizer: "IoT Innovation & Convergence University Group (COSS)",
          description:
            "Competed in the inaugural campus IoT hackathon, interfacing embedded microcontrollers with network backend endpoints.",
        },
      ],
    },
    skills: {
      sectionTitle: "07. Technical Skills",
      groups: [
        {
          category: "Programming Languages",
          items: ["C / C++", "Python", "SQL"],
        },
        {
          category: "AI & Data Basics",
          items: [
            "Python Data Structures",
            "Machine Learning Basics",
            "PyTorch (Basic)",
          ],
        },
        {
          category: "Tools & Environments",
          items: ["Git / GitHub", "Linux / Ubuntu", "VS Code"],
        },
        {
          category: "Interests",
          items: ["Backend Development", "Data Engineering", "Generative Models"],
        },
      ],
    },
  },
};

// 소셜 및 연락처 링크 목록
export const socials = [
  {
    name: "Email",
    url: "mailto:och7905@naver.com",
    icon: Mail,
    label: "Email",
  },
  {
    name: "GitHub",
    url: "https://github.com/och7905",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    name: "Study Blog",
    url: "https://blog.naver.com/och7905",
    icon: BlogIcon,
    label: "Naver Blog",
  },
  {
    name: "Activities Instagram",
    url: "https://www.instagram.com/pile_up_snow",
    icon: InstagramIcon,
    label: "@pile_up_snow",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
];

export const commonSocials = socials;

// 기존 단일 portfolioData 참조 호환용 객체
export const portfolioData = {
  ...portfolioDataByLang,
  socials,
};

// ============================================================================
// 3. 인쇄 / PDF 다운로드 전용 표준 학술 & Tech CV 컴포넌트 (Print-Only)
// ============================================================================
export function PrintableCV({
  data,
  socials,
  language,
}: {
  data: (typeof portfolioDataByLang)["ko"];
  socials: typeof commonSocials;
  language: Language;
}) {
  const sectionHeadings = {
    ko: {
      summary: "연구 관심사 및 요약 (Summary & Research Interests)",
      education: "학력 (Education)",
      experience: "연구 및 개발 활동 경력 (Research & Experience)",
      publications: "논문 및 학술 연구 성과 (Publications)",
      honors: "수상 및 장학 수혜 (Honors & Scholarships)",
      competitions: "경진대회 및 해커톤 (Competitions & Hackathons)",
      skills: "기술 역량 및 도구 (Technical Skills)",
    },
    ja: {
      summary: "研究関心・要約 (Summary & Research Interests)",
      education: "学歴 (Education)",
      experience: "研究・開発活動経歴 (Research & Experience)",
      publications: "論文・研究成果 (Publications)",
      honors: "受賞・奨学金 (Honors & Scholarships)",
      competitions: "コンペティション・ハッカソン (Competitions)",
      skills: "技術スタック・ツール (Technical Skills)",
    },
    en: {
      summary: "Summary & Research Interests",
      education: "Education",
      experience: "Research & Development Experience",
      publications: "Publications",
      honors: "Honors & Scholarships",
      competitions: "Competitions & Hackathons",
      skills: "Technical Skills",
    },
  }[language];

  return (
    <div className="hidden print:block w-full max-w-[210mm] mx-auto bg-white text-black p-0 antialiased font-sans text-xs leading-normal">
      {/* -------------------------------------------------------------
          CV HEADER
          ------------------------------------------------------------- */}
      <header className="border-b-2 border-black pb-3 mb-4">
        <div className="flex justify-between items-baseline">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-black">
              {data.personal.name}
              {data.personal.nameSub && (
                <span className="text-sm font-semibold text-zinc-700 ml-2">
                  ({data.personal.nameSub})
                </span>
              )}
            </h1>
            <p className="text-xs font-semibold text-zinc-900 mt-1">
              {data.personal.title} · {data.personal.affiliation} {data.personal.lab && `· ${data.personal.lab}`}
            </p>
            <p className="text-[11px] text-zinc-700">
              {data.personal.department} · {data.personal.location}
            </p>
          </div>
          <div className="text-right text-[10px] space-y-0.5 text-zinc-800">
            <p className="font-bold text-black uppercase tracking-wider">Curriculum Vitae</p>
            <p className="text-zinc-600">Updated: {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Contacts & Social Links (인쇄 시 URL 텍스트 가독성 확보) */}
        <div className="mt-2.5 pt-2 border-t border-zinc-300 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-zinc-800 font-medium">
          <div>
            <span className="font-bold text-black">Email: </span>
            <span className="text-black">{data.personal.email}</span>
          </div>
          {socials.map((s) => {
            if (s.name === "Email") return null;
            const displayUrl = s.url.replace(/^https?:\/\/(www\.)?/, "");
            return (
              <div key={s.name}>
                <span className="font-bold text-black">{s.label || s.name}: </span>
                <span className="text-zinc-800">{displayUrl}</span>
              </div>
            );
          })}
        </div>
      </header>

      {/* -------------------------------------------------------------
          01. SUMMARY & RESEARCH INTERESTS
          ------------------------------------------------------------- */}
      <section className="mb-4 break-inside-avoid">
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
          {sectionHeadings.summary}
        </h2>
        <div className="space-y-1.5 text-zinc-900 text-[11px] leading-relaxed text-justify">
          {data.about.introParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
          02. EDUCATION
          ------------------------------------------------------------- */}
      <section className="mb-4">
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
          {sectionHeadings.education}
        </h2>
        <div className="space-y-2">
          {data.education.items.map((edu, idx) => (
            <div key={idx} className="break-inside-avoid grid grid-cols-[105px_1fr] gap-2 items-baseline">
              <span className="text-[10.5px] font-semibold text-zinc-700 tabular-nums">
                {edu.period}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="text-[11px] font-bold text-black">{edu.degree}</span>
                  <span className="text-[11px] font-semibold text-zinc-800">· {edu.institution}</span>
                  {edu.lab && <span className="text-[10px] font-semibold text-zinc-700">({edu.lab})</span>}
                  <span className="text-[10px] text-zinc-600">[{edu.location}]</span>
                </div>
                {edu.description && (
                  <p className="text-[10px] text-zinc-700 mt-0.5 leading-snug">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
          03. RESEARCH & LEADERSHIP EXPERIENCE
          ------------------------------------------------------------- */}
      <section className="mb-4">
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
          {sectionHeadings.experience}
        </h2>
        <div className="space-y-2.5">
          {data.experience.items.map((exp, idx) => (
            <div key={idx} className="break-inside-avoid grid grid-cols-[105px_1fr] gap-2 items-baseline">
              <span className="text-[10.5px] font-semibold text-zinc-700 tabular-nums">
                {exp.period}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="text-[11px] font-bold text-black">{exp.role}</span>
                  <span className="text-[11px] font-semibold text-zinc-800">@ {exp.institution}</span>
                  {exp.lab && <span className="text-[10px] font-semibold text-zinc-700">[{exp.lab}]</span>}
                </div>
                <p className="text-[10px] text-zinc-700 mt-0.5 leading-snug">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
          04. PUBLICATIONS (if any)
          ------------------------------------------------------------- */}
      {data.publications.items.length > 0 && (
        <section className="mb-4 break-inside-avoid">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
            {sectionHeadings.publications}
          </h2>
          <div className="space-y-2">
            {data.publications.items.map((pub, idx) => (
              <div key={idx} className="text-[11px]">
                <p className="font-bold text-black">{pub.title}</p>
                <p className="text-[10px] text-zinc-800">{pub.authors.join(", ")}</p>
                <p className="text-[10px] italic text-zinc-700">{pub.venue}, {pub.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* -------------------------------------------------------------
          05. HONORS & SCHOLARSHIPS
          ------------------------------------------------------------- */}
      <section className="mb-4">
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
          {sectionHeadings.honors}
        </h2>
        <div className="space-y-2">
          {data.honors.items.map((honor, idx) => (
            <div key={idx} className="break-inside-avoid grid grid-cols-[105px_1fr] gap-2 items-baseline">
              <span className="text-[10.5px] font-semibold text-zinc-700 tabular-nums">
                {honor.year}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="text-[11px] font-bold text-black">{honor.title}</span>
                  <span className="text-[10px] font-semibold text-zinc-700">— {honor.issuer}</span>
                </div>
                {honor.description && (
                  <p className="text-[10px] text-zinc-700 mt-0.5 leading-snug">{honor.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
          06. COMPETITIONS & HACKATHONS
          ------------------------------------------------------------- */}
      <section className="mb-4">
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
          {sectionHeadings.competitions}
        </h2>
        <div className="space-y-2">
          {data.competitions.items.map((comp, idx) => (
            <div key={idx} className="break-inside-avoid grid grid-cols-[105px_1fr] gap-2 items-baseline">
              <span className="text-[10.5px] font-semibold text-zinc-700 tabular-nums">
                {comp.year}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="text-[11px] font-bold text-black">{comp.title}</span>
                  <span className="text-[10px] font-bold text-zinc-800">[{comp.award}]</span>
                </div>
                <p className="text-[10px] font-semibold text-zinc-700">{comp.organizer}</p>
                {comp.description && (
                  <p className="text-[10px] text-zinc-700 mt-0.5 leading-snug">{comp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
          07. TECHNICAL SKILLS
          ------------------------------------------------------------- */}
      <section className="mb-3 break-inside-avoid">
        <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
          {sectionHeadings.skills}
        </h2>
        <div className="space-y-1 text-[10.5px]">
          {data.skills.groups.map((group, idx) => (
            <div key={idx} className="grid grid-cols-[135px_1fr] gap-2">
              <span className="font-bold text-zinc-900">{group.category}:</span>
              <span className="text-zinc-800">{group.items.join(" · ")}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// 4. 메인 컴포넌트: AcademicPortfolio
// ============================================================================
export default function AcademicPortfolio() {
  const [language, setLanguage] = useState<Language>("ko");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mounted, setMounted] = useState(false);

  // 현재 선택된 언어의 데이터
  const data = portfolioDataByLang[language];

  // 1) 테마 및 언어 로컬스토리지 초기화
  useEffect(() => {
    setMounted(true);

    // 언어 복원
    const savedLang = localStorage.getItem("academic-portfolio-lang") as Language | null;
    if (savedLang && (savedLang === "ko" || savedLang === "ja" || savedLang === "en")) {
      setLanguage(savedLang);
    } else {
      // 브라우저 기본 언어 감지
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("ja")) {
        setLanguage("ja");
      } else if (browserLang.startsWith("ko")) {
        setLanguage("ko");
      } else {
        setLanguage("en");
      }
    }

    // 다크모드 복원
    const savedTheme = localStorage.getItem("academic-portfolio-theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // 2) isDarkMode 상태가 바뀔 때마다 document.documentElement(HTML 태그)에 'dark' 클래스 연동
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("academic-portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("academic-portfolio-theme", "light");
    }
  }, [isDarkMode]);

  // 토글 함수
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // 3) 언어 변경 처리
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("academic-portfolio-lang", lang);
    if (typeof window !== "undefined" && window.scrollY < 120) {
      setActiveSection("about");
    }
  };

  // 4) 절대 좌표 기반의 정밀 스크롤 스파이 (Scroll Spy)
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. 최상단 영역 (소개 강제)
      if (scrollY < 120) {
        setActiveSection("about");
        return;
      }

      // 2. 최하단 영역 (기술 스택 강제 - 바닥에 닿았을 때 확실한 감지)
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection("skills");
        return;
      }

      // 3. 중간 섹션들 좌표 계산 (상단 오프셋 고려한 트리거 라인)
      const sectionIds = ["about", "education", "experience", "publications", "honors", "competitions", "skills"];
      const triggerOffset = scrollY + 220; // 상단 헤더 및 시선 위치 고려

      let currentSection = "about";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          if (el.offsetTop <= triggerOffset) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    // 초기 마운트 및 언어 변경 시 즉시 1회 실행하여 올바른 활성 섹션 보정
    handleScrollSpy();

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    window.addEventListener("resize", handleScrollSpy, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("resize", handleScrollSpy);
    };
  }, [language]);

  // 6) 메뉴 클릭 시 즉각적인 하이라이트 반영 및 부드러운 스크롤
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 7) CV 다운로드 및 인쇄 처리 (표준 브라우저 PDF 대화상자 호출)
  const handleDownloadCV = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  // 7) 키워드 하이라이팅 렌더링 헬퍼 (JSX 파싱 및 정규식 오류 방지)
  const renderParagraphWithHighlights = (
    paragraph: string,
    highlights: Array<{ keyword: string; url: string }>
  ) => {
    if (!highlights || highlights.length === 0) {
      return paragraph;
    }

    const escapedKeywords = highlights
      .map((h) => h.keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .filter(Boolean)
      .join("|");

    if (!escapedKeywords) return paragraph;

    const regex = new RegExp("(" + escapedKeywords + ")", "g");
    const parts = paragraph.split(regex);

    return parts.map((part, pIdx) => {
      const matched = highlights.find((h) => h.keyword === part);
      if (matched) {
        return (
          <a
            key={pIdx}
            href={matched.url}
            className="font-semibold text-rose-700 dark:text-rose-400 underline underline-offset-4 decoration-rose-300 dark:decoration-rose-700 hover:decoration-rose-700 dark:hover:decoration-rose-400 transition-colors"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* =================================================================
          1. 웹 브라우저 인터랙티브 화면 (인쇄 시 print:hidden 으로 숨김)
          ================================================================= */}
      <div
        className={`${isDarkMode ? "dark bg-[#111215] text-white" : "bg-white text-black"} min-h-screen font-sans transition-colors duration-300 print:hidden selection:bg-rose-100 selection:text-rose-900 dark:selection:bg-rose-950/60 dark:selection:text-rose-200 antialiased`}
      >
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">
          
          {/* =================================================================
              LEFT: STICKY SIDEBAR (데스크톱 280px 고정, 좌측 정렬)
              ================================================================= */}
          <aside className="w-full lg:w-[280px] shrink-0 text-left">
            <div className="lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)] flex flex-col justify-between items-start text-left">
              
              <div className="space-y-6 w-full text-left flex flex-col items-start">

                {/* 상단 컨트롤 바: 언어 선택 콤팩트 캡슐 버튼 (KO / JA / EN) */}
                <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 shadow-sm">
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("ko")}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all duration-200 ${
                      language === "ko"
                        ? "bg-white dark:bg-zinc-900 text-rose-700 dark:text-rose-400 shadow-sm"
                        : "text-zinc-800 dark:text-zinc-300 hover:text-rose-700 dark:hover:text-white hover:bg-white/60 dark:hover:bg-zinc-700/60"
                    }`}
                    aria-label="한국어로 변경"
                  >
                    KO
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("ja")}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all duration-200 ${
                      language === "ja"
                        ? "bg-white dark:bg-zinc-900 text-rose-700 dark:text-rose-400 shadow-sm"
                        : "text-zinc-800 dark:text-zinc-300 hover:text-rose-700 dark:hover:text-white hover:bg-white/60 dark:hover:bg-zinc-700/60"
                    }`}
                    aria-label="日本語に変更"
                  >
                    JA
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("en")}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all duration-200 ${
                      language === "en"
                        ? "bg-white dark:bg-zinc-900 text-rose-700 dark:text-rose-400 shadow-sm"
                        : "text-zinc-800 dark:text-zinc-300 hover:text-rose-700 dark:hover:text-white hover:bg-white/60 dark:hover:bg-zinc-700/60"
                    }`}
                    aria-label="Switch to English"
                  >
                    EN
                  </button>
                </div>

                {/* 프로필 이미지 (모서리 둥근 사각형, 좌측 정렬) */}
                <div className="relative group w-36 h-36 rounded-2xl overflow-hidden ring-1 ring-zinc-300 dark:ring-zinc-700 shadow-md bg-zinc-100 dark:bg-zinc-800 shrink-0">
                  <img
                    src={data.personal.profileImage}
                    alt={data.personal.name}
                    className="w-full h-full object-cover grayscale-[5%] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                  />
                </div>

                {/* 이름 및 직책/소속 정보 (좌측 정렬, 명확한 위계, 고대비 색상 적용) */}
                <div className="space-y-2 text-left w-full flex flex-col items-start">
                  <div className="flex flex-col items-start text-left">
                    <h1 className="text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
                      {data.personal.name}
                    </h1>
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">
                      {data.personal.nameSub}
                    </span>
                  </div>

                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-200 leading-snug">
                    {data.personal.title}
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-800 dark:text-zinc-300 font-medium">
                    {data.personal.department}
                    <br />
                    <span className="font-semibold text-zinc-800 dark:text-zinc-300">
                      {data.personal.affiliation}
                    </span>
                    {data.personal.lab && (
                      <span className="text-rose-700 dark:text-rose-400 ml-1 font-bold">
                        · {data.personal.lab}
                      </span>
                    )}
                  </p>
                </div>

                {/* 소셜 링크 & CV 버튼 행 (flex-wrap gap-2 items-center 완벽 좌측 정렬) */}
                <div className="flex flex-wrap items-center justify-start gap-2 pt-1 w-full text-left">
                  {commonSocials.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target={social.url.startsWith("http") ? "_blank" : undefined}
                        rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={social.name}
                        title={social.label || social.name}
                        className="p-2 rounded-xl text-zinc-900 dark:text-zinc-200 hover:text-rose-700 dark:hover:text-rose-400 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors border border-zinc-300 dark:border-zinc-700 shadow-sm"
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}

                  {/* CV 버튼 (PDF 인쇄 / 다운로드 대화상자 즉시 호출) */}
                  <button
                    type="button"
                    onClick={handleDownloadCV}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide border-2 border-rose-700 dark:border-rose-500 text-rose-700 dark:text-rose-400 hover:bg-rose-700 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white transition-all duration-200 shadow-sm cursor-pointer"
                    title={language === "ko" ? "CV PDF 다운로드 / 인쇄" : language === "ja" ? "CV PDFダウンロード / 印刷" : "Download / Print CV (PDF)"}
                    aria-label="Download CV"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{data.ui.cvButton}</span>
                  </button>
                </div>

                {/* 데스크톱 세로 네비게이션 메뉴 */}
                <nav className="hidden lg:block pt-4 border-t border-zinc-200 dark:border-zinc-800 w-full text-left">
                  <p className="text-[10px] font-bold tracking-widest text-zinc-700 dark:text-zinc-400 uppercase mb-3">
                    {data.ui.navTitle}
                  </p>
                  <ul className="space-y-1 w-full">
                    {data.navigation.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => scrollToSection(e, item.id)}
                            className={`group flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                              isActive
                                ? "text-rose-700 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-950/40 translate-x-1"
                                : "text-zinc-800 hover:text-rose-700 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                            }`}
                          >
                            <span>{item.label}</span>
                            <span
                              className={`h-1.5 w-1.5 rounded-full transition-all ${
                                isActive
                                  ? "bg-rose-700 dark:bg-rose-400 scale-125"
                                  : "opacity-0 group-hover:opacity-100 bg-zinc-600 dark:bg-zinc-400"
                              }`}
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* 사이드바 최하단: 좌측 [다크/라이트모드 토글 버튼] & 우측 [지역 정보] */}
              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-900 dark:text-zinc-200 w-full font-medium">
                {/* 좌측: 테마 모드 토글 버튼 */}
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className="inline-flex items-center gap-2 text-xs font-semibold p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-900 dark:text-zinc-200"
                  aria-label="Toggle Dark Mode"
                  title={isDarkMode ? data.ui.lightMode : data.ui.darkMode}
                >
                  {isDarkMode ? (
                    <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : (
                    <Moon className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0" />
                  )}
                  <span>{isDarkMode ? data.ui.lightMode : data.ui.darkMode}</span>
                </button>

                {/* 우측: MapPin + 지역 정보 */}
                <div className="flex items-center gap-1.5 text-right">
                  <MapPin className="w-3.5 h-3.5 text-rose-700 dark:text-rose-400 shrink-0" />
                  <span className="text-[11px] font-bold text-black dark:text-white">
                    {data.personal.location}
                  </span>
                </div>
              </div>

            </div>
          </aside>

          {/* =================================================================
              RIGHT: MAIN CONTENT AREA (우측 메인 콘텐츠)
              ================================================================= */}
          <main className="flex-1 min-w-0 space-y-16 lg:space-y-20 pb-32">
            
            {/* ---------------------------------------------------------------
                01. ABOUT ME
                --------------------------------------------------------------- */}
            <section id="about" className="scroll-mt-24">
              <h2 className="text-xs font-bold tracking-widest text-rose-700 dark:text-rose-400 uppercase mb-4 flex items-center gap-2">
                <span>{data.about.sectionTitle}</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-900 dark:text-zinc-200">
                {data.about.introParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-zinc-900 dark:text-zinc-200 font-normal leading-relaxed">
                    {renderParagraphWithHighlights(paragraph, data.about.highlights)}
                  </p>
                ))}

                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 border border-zinc-300 text-zinc-900 dark:bg-zinc-800/80 dark:border-zinc-700 dark:text-zinc-200 text-xs shadow-sm font-medium">
                    <Coffee className="w-3.5 h-3.5 text-rose-700 dark:text-rose-400 shrink-0" />
                    <span>{data.about.hobbyNote}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ---------------------------------------------------------------
                02. EDUCATION
                --------------------------------------------------------------- */}
            <section id="education" className="scroll-mt-24">
              <h2 className="text-xs font-bold tracking-widest text-rose-700 dark:text-rose-400 uppercase mb-4 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{data.education.sectionTitle}</span>
              </h2>

              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
                {data.education.items.map((edu, idx) => (
                  <div
                    key={idx}
                    className="py-4 first:pt-0 grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 items-baseline"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-400 tabular-nums">
                      {edu.period}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-300">
                        <span className="font-semibold text-zinc-800 dark:text-zinc-300">
                          {edu.institution}
                        </span>
                        {edu.lab && (
                          <span className="text-rose-700 dark:text-rose-400 ml-1.5 font-bold">
                            · {edu.lab}
                          </span>
                        )}
                        <span className="text-zinc-700 dark:text-zinc-400 ml-1.5 font-normal">
                          ({edu.location})
                        </span>
                      </p>
                      {edu.description && (
                        <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-300 pt-0.5 leading-relaxed font-normal">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------------------------------------------------------------
                03. EXPERIENCE
                --------------------------------------------------------------- */}
            <section id="experience" className="scroll-mt-24">
              <h2 className="text-xs font-bold tracking-widest text-rose-700 dark:text-rose-400 uppercase mb-4 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{data.experience.sectionTitle}</span>
              </h2>

              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
                {data.experience.items.map((exp, idx) => (
                  <div
                    key={idx}
                    className="py-4 first:pt-0 grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 items-baseline"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-400 tabular-nums">
                      {exp.period}
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-300 font-semibold">
                          @ {exp.institution}
                        </span>
                        {exp.lab && (
                          <span className="text-xs text-rose-700 dark:text-rose-400 font-bold">
                            [{exp.lab}]
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-300 leading-relaxed pt-0.5 font-normal">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------------------------------------------------------------
                04. PUBLICATIONS
                --------------------------------------------------------------- */}
            <section id="publications" className="scroll-mt-24">
              <h2 className="text-xs font-bold tracking-widest text-rose-700 dark:text-rose-400 uppercase mb-4 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{data.publications.sectionTitle}</span>
              </h2>

              {data.publications.items.length > 0 ? (
                <div className="space-y-4">
                  {data.publications.items.map((paper, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-rose-700 dark:border-rose-500 pl-4 py-1.5 transition-all duration-200 hover:translate-x-0.5"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white leading-snug">
                        {paper.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-300 mt-1 font-medium">
                        {paper.authors.join(", ")}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs">
                        <span className="italic text-zinc-700 dark:text-zinc-400 font-medium">
                          {paper.venue}, {paper.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700/80 bg-zinc-100 dark:bg-zinc-800/40 text-xs font-medium text-zinc-800 dark:text-zinc-300">
                  {data.ui.emptyPub}
                </div>
              )}
            </section>

            {/* ---------------------------------------------------------------
                05. HONORS & SCHOLARSHIPS
                --------------------------------------------------------------- */}
            <section id="honors" className="scroll-mt-24">
              <h2 className="text-xs font-bold tracking-widest text-rose-700 dark:text-rose-400 uppercase mb-4 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                <span>{data.honors.sectionTitle}</span>
              </h2>

              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
                {data.honors.items.map((honor, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 first:pt-0 grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-4 items-baseline"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-400 tabular-nums">
                      {honor.year}
                    </span>
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-bold text-zinc-950 dark:text-white">
                        {honor.title}
                      </h3>
                      <p className="text-xs font-bold text-rose-700 dark:text-rose-400">
                        {honor.issuer}
                      </p>
                      {honor.description && (
                        <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-300 leading-relaxed font-normal">
                          {honor.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------------------------------------------------------------
                06. COMPETITIONS
                --------------------------------------------------------------- */}
            <section id="competitions" className="scroll-mt-24">
              <h2 className="text-xs font-bold tracking-widest text-rose-700 dark:text-rose-400 uppercase mb-4 flex items-center gap-2">
                <Trophy className="w-3.5 h-3.5" />
                <span>{data.competitions.sectionTitle}</span>
              </h2>

              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
                {data.competitions.items.map((comp, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 first:pt-0 grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-4 items-baseline"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-400 tabular-nums">
                      {comp.year}
                    </span>
                    <div className="space-y-0.5">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-sm font-bold text-zinc-950 dark:text-white">
                          {comp.title}
                        </h3>
                        <span className="text-xs font-bold text-rose-700 dark:text-rose-400">
                          ({comp.award})
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-300">
                        {data.ui.organizerLabel} {comp.organizer}
                      </p>
                      {comp.description && (
                        <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-300 leading-relaxed pt-0.5 font-normal">
                          {comp.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------------------------------------------------------------
                07. SKILLS
                --------------------------------------------------------------- */}
            <section id="skills" className="scroll-mt-24 pb-32">
              <h2 className="text-xs font-bold tracking-widest text-rose-700 dark:text-rose-400 uppercase mb-6 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>{data.skills.sectionTitle}</span>
              </h2>

              <div className="space-y-5">
                {data.skills.groups.map((skillGroup, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skillGroup.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 hover:border-rose-600 hover:text-rose-700 dark:hover:text-rose-400 transition-colors shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------------------------------------------------------------
                FOOTER
                --------------------------------------------------------------- */}
            <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="font-semibold text-zinc-800 dark:text-zinc-300">{data.ui.copyright}</p>
              <p className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400">{data.ui.footerNote}</p>
            </footer>

          </main>
        </div>
      </div>
    </div>

    {/* =================================================================
        2. 인쇄 / PDF 저장 전용 표준 학술 & Tech CV 템플릿 (A4 표준 규격)
        ================================================================= */}
    <PrintableCV data={data} socials={commonSocials} language={language} />
  </>
  );
}
