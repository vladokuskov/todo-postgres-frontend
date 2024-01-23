import { Inter } from 'next/font/google';
import '@/styles/global.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

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
