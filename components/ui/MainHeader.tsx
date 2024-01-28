'use client';

import React from 'react';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <header className='fixed flex h-[3rem] w-full justify-between bg-white p-2 shadow-md drop-shadow'>
      <Link href='/home'>
        <img src='logo.svg' alt='App Logo' width={30} height={30} />
      </Link>
    </header>
  );
};

export { MainHeader };
