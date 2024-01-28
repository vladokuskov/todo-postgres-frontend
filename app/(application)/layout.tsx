import React from 'react';
import { MainHeader } from '@/components/ui/MainHeader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainHeader />
      <main className='pt-14'>{children}</main>
    </div>
  );
}
