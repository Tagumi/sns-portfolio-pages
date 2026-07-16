// このファイルの中身を差し替えるだけでサイト全体のテキストを更新できます。
type WorkItem = {
  title: string;
  category: string;
  description: string;
  link?: string;
  image?: string;
};

type FeaturedImage = {
  title: string;
  image?: string;
  noBorder?: boolean;
};

export const siteContent = {
  name: "K.satoh",
  role: "Freelance Web Engineer / QA Engineer",
  roleJa: "フリーランスWebエンジニア / QAエンジニア",
  nav: [
    { label: "About", href: "#about" },
    { label: "Featured", href: "#featured" },
    { label: "Works", href: "#works" },
    { label: "Skills", href: "#skills" },
    { label: "Career", href: "#career" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Portfolio",
    title: ["磨いてきた技術力を、", "デザインのちからに変える。"],
    lead: "IT業界15年以上のキャリアを持つフリーランスWebエンジニア。HTML/CSS/JavaScript・WordPress・Studioを用いたWebサイト・LP制作から、システム開発・品質保証（QA）まで。現場で培った技術力と品質を見極める視点で、ものづくりに携わっています。",
  },
  featured: {
    eyebrow: "For This Position",
    title: "本案件向けポートフォリオ",
    description: "今回ご紹介いただきましたお仕事に向けてサンプルを制作してみました。",
    tools: "使用ツール：Kling.ai / CapCut / PhotoShop",
    reels: [{ title: "朝活リール", video: "/videos/asakatsu-reel.mp4" }],
    images: [
      { title: "EC画像サンプル01", image: "/works/product-4.png" },
      { title: "EC画像サンプル02", image: "/works/product-3.png", noBorder: true },
    ] as FeaturedImage[],
  },
  about: {
    eyebrow: "About",
    title: "技術と品質で、\n信頼をかたちに。",
    paragraphs: [
      "システムエンジニア・QAエンジニアとして15年以上、システム開発・保守・品質管理・ユーザーエクスペリエンスの分野に従事してきました。",
      "総合型エージェント企業でのカスタマーサポート、SaaSスタートアップでの品質保証、独立系SIerでのシステム開発まで、多彩な現場で培った視点が強みです。",
      "現在はWordPressを用いたWebサイト構築・LP制作・動画編集を中心に、フリーランスとして案件に取り組んでいます。",
    ],
    stats: [
      { number: "15+", label: "年のIT業界経験" },
      { number: "8h", label: "稼働時間／日（在宅）" },
      { number: "WP", label: "WordPress構築・移行" },
      { number: "QA", label: "品質保証エンジニア" },
    ],
  },
  works: {
    eyebrow: "Works",
    title: "実績・作品",
    description: "企画からデザイン・コーディング・品質管理まで携わった作品を掲載しています。",
    items: [
      {
        title: "和風居酒屋LP制作",
        category: "Web制作 / LP",
        description: "個別店舗のランディングページを企画・デザイン・コーディング。",
        link: "https://tagumi.github.io/kiwami-lp/",
      },
      {
        title: "カフェバーLP制作",
        category: "Web制作 / LP",
        description: "個別店舗のランディングを企画・デザイン・コーディング。",
        link: "https://tagumi.github.io/kaguya-hp/",
      },
      {
        title: "動画編集・広告画像制作",
        category: "Canva",
        description: "SNS向けの動画や広告制作を担当",
        image: "/works/canva-portfolio.png",
      },
      {
        title: "WordPressサイト構築",
        category: "Web制作 / CMS",
        description: "企業・店舗サイトのWordPress構築・既存サイトからの移行を担当",
        image: "/works/kintai2.png",
      },
    ] as WorkItem[],
  },
  skills: {
    eyebrow: "Skills",
    title: "スキル",
    categories: [
      {
        name: "業務内容",
        items: [
          "Webサイト・LP制作（HTML/CSS/JavaScript/WordPress/Studio）",
          "システム品質保証（QA）・ヘルプページ作成",
          "SNS・YouTube動画編集",
          "広告動画制作",
          "YouTube・SNS管理・運営",
        ],
      },
      {
        name: "使用言語",
        items: ["HTML", "CSS", "JavaScript", "Python", "PHP"],
      },
      {
        name: "使用ツール",
        items: [
          "Claude",
          "Notion",
          "Illustrator",
          "Photoshop",
          "Premiere Pro",
          "Figma",
          "Visual Studio Code",
          "Canva",
          "Studio",
          "Git",
          "GitHub",
        ],
      },
    ],
  },
  career: {
    eyebrow: "Career",
    title: "経歴",
    items: [
      {
        period: "現在",
        role: "QAエンジニア / Webサイト構築",
        org: "SaaSスタートアップ ／ インターネット人材サービス企業",
        description:
          "システムの品質管理・ヘルプページ作成、法人向け問い合わせ対応（1日50〜100件）を担当。WordPressを用いたWebサイト構築を並行して行う。",
      },
      {
        period: "独立系SIer（約5年）",
        role: "システムエンジニア",
        org: "独立系SIer企業",
        description: "日本の総合電機メーカー各社でのアプリ受け入れ検証を担当。",
      },
      {
        period: "学歴",
        role: "国立大学 商学部 企業法学科 卒業",
        org: "",
        description: "商学・企業法の専門知識を習得。ビジネスと法律の視点を持つエンジニアとしての基盤を獲得。",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "お仕事のご相談は\nこちらから",
    description: "WordPressサイト構築、LP制作、品質保証（QA）、動画編集など、お気軽にご相談ください。",
    email: "koyomi.satoh@gmail.com",
  },
};
