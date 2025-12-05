export type Language = 'zh' | 'en';

export const translations = {
  zh: {
    hero: {
      title: "8K 立體 VR 完整解決方案",
      subtitle: "高品質 VR 內容的完整解決方案（每眼 8K）。我們專注於世界級技術、自動化製作和高解析度，推動產業更新。",
      cta1: "探索服務",
      cta2: "了解技術",
      cta3: "聯絡我們",
    },
    about: {
      title: "關於 Funique",
      brand: {
        title: "Future + Unique = Funique",
        description: "Funique 致力於在電影產業中實現每眼 8K 立體 VR，並為觀眾創造新一代平台。",
      },
      whatWeDo: {
        title: "我們的服務",
        items: [
          {
            title: "立體 8K VR 完整解決方案",
            description: "提供高品質 VR 內容的完整解決方案，包含前期製作、拍攝技術支援與後製服務。",
          },
          {
            title: "VR Live",
            description: "即時 VR 直播技術與多頻道串流解決方案。",
          },
          {
            title: "Digital Twin",
            description: "數位雙生技術與應用，提供虛擬製作與活動解決方案。",
          },
          {
            title: "VR Cinema",
            description: "VR 電影院解決方案，提供沉浸式觀影體驗。",
          },
          {
            title: "Funique Story Studio",
            description: "VR 故事工作室，專注於 VR 敘事與內容創作。",
          },
          {
            title: "Medical VR",
            description: "醫療 VR 應用，提供專業醫療訓練與模擬解決方案。",
          },
        ],
      },
      technology: {
        title: "立體 3D",
        description: "立體 VR 是一項突破性技術，提供比一般 2D VR 更好的體驗，這是 2D VR 永遠無法創造的。它真實地展現了現實生活的樣貌。憑藉其提供的沉浸感，觀眾可以不受任何限制地到達任何想去的地方。",
        production: {
          title: "VR 製作",
          preProduction: {
            title: "前期製作",
            items: [
              "VR 敘事建議（360 攝影語言、VR 化腳本）",
              "VR 故事敘述",
            ],
          },
          production: {
            title: "拍攝製作",
            cameras: [
              {
                name: "360° 立體相機",
                cameras: "2 台相機",
                resolution: "7680 x 3840 8K",
                format: "RAW 12bit / 30fps, 8bit / 60fps",
              },
              {
                name: "180° 立體相機",
                cameras: "8 台相機",
                resolution: "7680 x 7680 8K",
                format: "RAW 12bit / 30fps, 8bit / 60fps",
              },
              {
                name: "K2",
                cameras: "24 台相機",
                resolution: "7680 x 7680 8K",
                format: "H264 / 30fps",
              },
              {
                name: "FuCam",
                cameras: "4 台相機",
                resolution: "7680 x 3840 8K",
                format: "6K / 30 fps per eye",
              },
            ],
            custom: "為您客製化 VR 相機設計！",
          },
        },
      },
      awards: {
        title: "獲獎肯定",
      },
      quote: {
        text: "研究藝術中的科學。感受科學中的藝術。發展你的感官—特別是學習如何去看。意識到萬物之間的連結。",
        author: "— 達文西",
      },
    },
    content: {
      title: "XR 內容目錄",
      videoSeries: {
        title: "影片授權系列",
        items: [
          {
            title: "台灣特有種",
            titleEn: "Endemic to Taiwan",
            episodes: 5,
            duration: "5 分鐘/集",
            target: "國小三年級至高中三年級",
          },
          {
            title: "人氣甲蟲特輯",
            titleEn: "Popular Beetle Special Feature",
            episodes: 3,
            duration: "6 分鐘/集",
          },
          {
            title: "地球圖鑑：物種多樣性",
            titleEn: "Atlas of the Earth - Species Diversity",
            episodes: 12,
            duration: "1 分鐘/集",
          },
          {
            title: "蜜蜂的奧秘",
            titleEn: "Secrets of Bees",
            episodes: 6,
            duration: "4 分鐘/集",
            note: "3D VR 影片模式，從科學角度解析蜜蜂",
          },
          {
            title: "地球物種共生的秘密",
            titleEn: "The Secrets of Earth's Species Coexistence",
            episodes: 1,
            duration: "12 分鐘",
            note: "與壽山國家自然公園合作",
          },
          {
            title: "XR 8K 3D 沉浸式教學：教育新視界系列",
            titleEn: "XR 8K 3D Immersive Teaching: New Educational Horizon Series",
            episodes: 3,
            duration: "90 分鐘/集",
            note: "整合課堂簡報、學習單與高解析度 3D 模型",
          },
        ],
      },
      models: {
        title: "3D 數位模型圖鑑",
        beeSeries: {
          title: "全球物種多樣性圖鑑庫/蜜蜂系列",
          count: 10,
        },
        arthropodSeries: {
          title: "全球物種多樣性圖鑑庫/節肢動物系列",
          count: 8,
        },
        features: "採用 AI Millimeter-Level Volumetric Capture 技術，100%真實還原，高解析度百倍放大，可 360 度旋轉無死角",
      },
    },
    platform: {
      title: "平台與商業合作",
      funiquePlus: {
        title: "Funique+ 商業模式突破",
        description: "不只是影展，而是提供長期合作平台，具備上架、推廣、收益分潤的持續機制。",
      },
      creator: {
        title: "創作者導向",
        description: "解決創作者「有作品、卻無市場」的痛點。",
      },
      content: {
        title: "多元內容模式",
        description: "接受 360°影片、互動式 VR、Volumetric 及 XR 裝置體驗等內容徵件。",
      },
      funiMovie: {
        title: "FuniMovie 電影頻道",
        subtitle: "8K 3D XR 串流平台",
        description: "互動機制包括賞金互動系統和多人連線＆語音系統，讓 VR 體驗不再是一個人。",
      },
    },
    solutions: {
      title: "教育解決方案與定價",
      system: {
        title: "教學系統",
        subtitle: "XR 8K 3D 虛擬教室中控管理教學系統",
        features: [
          "Master & Client 軟體系統整合",
          "免費維護與維修服務",
          "「微巨宇宙」大空間走動式/教學模式",
          "支援最多 4 人同時連線體驗（6米 x 6米空間）",
        ],
      },
      pricing: {
        title: "授權價格表",
        subtitle: "教育版 K12 等教育單位",
        table: {
          type: "類型",
          vr360: "VR 360",
          vr3d: "VR 3D",
          naked3d: "裸視 3D 電腦版",
        },
      },
    },
    contact: {
      title: "聯絡我們",
      subtitle: "與我們聯繫，了解更多資訊",
      address: "台北市大同區甘州街 46 號 2 樓",
      phone: "+886-2-2557-3601",
      email: "funique360@gmail.com",
      form: {
        name: "姓名",
        email: "電子郵件",
        phone: "電話",
        message: "訊息",
        submit: "送出",
      },
    },
    partnership: {
      title: "合作夥伴",
      description: "我們與全球各地的合作夥伴攜手，推動 VR 技術的發展與應用。",
    },
  },
  en: {
    hero: {
      title: "8K Stereoscopic VR Total Solution",
      subtitle: "The total solution for high quality VR content (8K per eye). We focus on world class technology, automatic production and high resolution that trigger industry updates.",
      cta1: "Explore Services",
      cta2: "Learn Technology",
      cta3: "Contact Us",
    },
    about: {
      title: "About Funique",
      brand: {
        title: "Future + Unique = Funique",
        description: "Funique dedicated ourself into realizing 8K per eye Stereoscopic VR in film industry, and creating new generation platform for viewers.",
      },
      whatWeDo: {
        title: "What we do",
        items: [
          {
            title: "Stereo 8K VR Total Solution",
            description: "Complete solution for high-quality VR content, including pre-production, filming technical support and post-production services.",
          },
          {
            title: "VR Live",
            description: "Real-time VR live streaming technology and multi-channel streaming solutions.",
          },
          {
            title: "Digital Twin",
            description: "Digital twin technology and applications, providing virtual production and event solutions.",
          },
          {
            title: "VR Cinema",
            description: "VR cinema solutions, providing immersive viewing experiences.",
          },
          {
            title: "Funique Story Studio",
            description: "VR story studio, focusing on VR narrative and content creation.",
          },
          {
            title: "Medical VR",
            description: "Medical VR applications, providing professional medical training and simulation solutions.",
          },
        ],
      },
      technology: {
        title: "Stereo 3D",
        description: "Stereoscopic VR is a ground-breaking technology with better experience that regular 2D VR could never create. It truly shows you what it's like in real life. With the immersion it could provides, viewers to be wherever they want without any limit.",
        production: {
          title: "VR Production",
          preProduction: {
            title: "Pre-Production",
            items: [
              "Suggestion for VR Narrative (360 Camera Language, VRization Script)",
              "VR Storytelling",
            ],
          },
          production: {
            title: "Production",
            cameras: [
              {
                name: "360°",
                cameras: "2 of cameras",
                resolution: "7680 x 3840 8K",
                format: "RAW 12bit / 30fps, 8bit / 60fps",
              },
              {
                name: "180°",
                cameras: "8 of cameras",
                resolution: "7680 x 7680 8K",
                format: "RAW 12bit / 30fps, 8bit / 60fps",
              },
              {
                name: "K2",
                cameras: "24 of cameras",
                resolution: "7680 x 7680 8K",
                format: "H264 / 30fps",
              },
              {
                name: "FuCam",
                cameras: "4 of cameras",
                resolution: "7680 x 3840 8K",
                format: "6K / 30 fps per eye",
              },
            ],
            custom: "Customized VR Camera Design For You!",
          },
        },
      },
      awards: {
        title: "Awards & Recognition",
      },
      quote: {
        text: "Study the science of art. Study the art of science. Develop your senses—especially learn how to see. Realize that everything connects to everything else.",
        author: "— Leonardo da Vinci",
      },
    },
    content: {
      title: "XR Content Catalog",
      videoSeries: {
        title: "Video Licensing Series",
        items: [
          {
            title: "Endemic to Taiwan",
            titleEn: "Endemic to Taiwan",
            episodes: 5,
            duration: "5 min/episode",
            target: "Grade 3 to Grade 12",
          },
          {
            title: "Popular Beetle Special Feature",
            titleEn: "Popular Beetle Special Feature",
            episodes: 3,
            duration: "6 min/episode",
          },
          {
            title: "Atlas of the Earth - Species Diversity",
            titleEn: "Atlas of the Earth - Species Diversity",
            episodes: 12,
            duration: "1 min/episode",
          },
          {
            title: "Secrets of Bees",
            titleEn: "Secrets of Bees",
            episodes: 6,
            duration: "4 min/episode",
            note: "3D VR video mode, scientific analysis of bees",
          },
          {
            title: "The Secrets of Earth's Species Coexistence",
            titleEn: "The Secrets of Earth's Species Coexistence",
            episodes: 1,
            duration: "12 minutes",
            note: "In collaboration with Shoushan National Nature Park",
          },
          {
            title: "XR 8K 3D Immersive Teaching: New Educational Horizon Series",
            titleEn: "XR 8K 3D Immersive Teaching: New Educational Horizon Series",
            episodes: 3,
            duration: "90 min/episode",
            note: "Integrated with classroom presentations, worksheets, and high-resolution 3D models",
          },
        ],
      },
      models: {
        title: "3D Digital Model Atlas",
        beeSeries: {
          title: "Global Species Diversity Atlas / Bee Series",
          count: 10,
        },
        arthropodSeries: {
          title: "Global Species Diversity Atlas / Arthropod Series",
          count: 8,
        },
        features: "Using AI Millimeter-Level Volumetric Capture technology, 100% authentic restoration, high-resolution hundred-fold magnification, 360-degree rotation without blind spots",
      },
    },
    platform: {
      title: "Platform & Business Cooperation",
      funiquePlus: {
        title: "Funique+ Business Model Breakthrough",
        description: "Not just a film festival, but a long-term collaboration platform with continuous mechanisms for publishing, promotion, and revenue sharing.",
      },
      creator: {
        title: "Creator-Oriented",
        description: "Solving creators' pain point of 'having works but no market'.",
      },
      content: {
        title: "Diverse Content Modes",
        description: "Accepting submissions for 360° videos, interactive VR, Volumetric, and XR device experiences.",
      },
      funiMovie: {
        title: "FuniMovie Cinema Channel",
        subtitle: "8K 3D XR Streaming Platform",
        description: "Interactive mechanisms including bounty interaction system and multi-player connection & voice system, making VR experiences no longer a solo activity.",
      },
    },
    solutions: {
      title: "Educational Solutions & Pricing",
      system: {
        title: "Teaching System",
        subtitle: "XR 8K 3D Virtual Classroom Central Control Management Teaching System",
        features: [
          "Master & Client software system integration",
          "Free maintenance and repair services",
          "'Micro-Macro Universe' large space walking/teaching mode",
          "Support for up to 4 simultaneous connections (6m x 6m space)",
        ],
      },
      pricing: {
        title: "Licensing Price List",
        subtitle: "Educational Edition for K12 and Educational Institutions",
        table: {
          type: "Type",
          vr360: "VR 360",
          vr3d: "VR 3D",
          naked3d: "Naked Eye 3D PC Version",
        },
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with us to learn more",
      address: "2F., No.46, Ganzhou St., Datong Dist., Taipei City 103, Taiwan (R.O.C.)",
      phone: "+886-2-2557-3601",
      email: "funique360@gmail.com",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Submit",
      },
    },
    partnership: {
      title: "Partnership",
      description: "We work with partners around the world to advance VR technology development and applications.",
    },
  },
} as const;

export function getTranslation(lang: Language) {
  return translations[lang];
}

