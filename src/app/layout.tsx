import Footer from '@/components/_layout/footer';
import Header from '@/components/_layout/header';
import QueryProvider from '@/libs/tanstack-query/provider';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'techFountain',
  description: '技術ブログや、ポートフォリオを発信しています。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <meta name="apple-mobile-web-app-title" content="techFountain" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <QueryProvider>
          <div className="min-h-screen bg-background">{children}</div>
        </QueryProvider>
        <Footer />
      </body>
      <GoogleAnalytics gaId={'G-H3RKN5LNGS'} />
    </html>
  );
}
