import { Inter } from 'next/font/google';
import '@/styles/global.css';
import React from 'react';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ['Organizer', 'Planner', 'SwapOrganizer', 'Todo'],
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#ffffff' }],
  icons: {
    icon: [{ url: '/favicon-16x16.png' }],
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
