
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leef Design | 個人事業主のためのAIコンシェルジュ",
  description: "AI活用で業務時間を半減。PCが苦手な30〜50代個人事業主専門のAIコンシェルジュが、ChatGPT活用から業務効率化まで手厚く伴走サポートします。",
  keywords: "AIコンシェルジュ, ChatGPT 活用, 個人事業主 効率化, AIサポート",
  openGraph: {
    title: "Leef Design | 個人事業主のためのAIコンシェルジュ",
    description: "AI活用で業務時間を半減。PCが苦手な30〜50代個人事業主専門のAIコンシェルジュが、ChatGPT活用から業務効率化まで手厚く伴走サポートします。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leef Design | 個人事業主のためのAIコンシェルジュ",
    description: "AI活用で業務時間を半減。PCが苦手な30〜50代個人事業主専門のAIコンシェルジュが、ChatGPT活用から業務効率化まで手厚く伴走サポートします。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Leef Design",
              "description": "AI活用で業務時間を半減。PCが苦手な30〜50代個人事業主専門のAIコンシェルジュが、ChatGPT活用から業務効率化まで手厚く伴走サポートします。",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/logo.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Japanese"
              },
              "areaServed": "JP",
              "serviceType": "AIコンサルティング",
              "knowsAbout": ["AI活用", "ChatGPT", "業務効率化", "個人事業主サポート"]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Leef Design",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
              "description": "AI活用で業務時間を半減。PCが苦手な30〜50代個人事業主専門のAIコンシェルジュが、ChatGPT活用から業務効率化まで手厚く伴走サポートします。",
              "inLanguage": "ja-JP",
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}