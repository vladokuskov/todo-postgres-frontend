'use client';

import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const LogOutButton = () => {
  const router = useRouter();

  const logOut = () => {
    // Remove token cookie
    Cookies.remove('currentUserToken');

    router.push('/login');
  };
  return <button onClick={logOut}>Log out</button>;
};

export { LogOutButton };
