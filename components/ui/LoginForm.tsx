'use client';

import React, { useState } from 'react';
import apiService from '@/services/ApiService';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!email || !password) {
      isValid = false;
      // Add later notification (toast) system
      console.error('Password and email should be included');
    }

    return isValid;
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateForm();

    if (!isValid) return console.error('Email or password validation error');

    try {
      const res = await apiService.auth.login({ email, password });

      if (!res.data.responseObject) return;

      const token = res.data.responseObject.token;

      Cookies.set('currentUserToken', JSON.stringify(token), {
        expires: 7,
        secure: true,
        sameSite: 'strict',
      });

      router.push('/home');
    } catch (err: any) {
      console.error(err.response.data.message);
    }
  };

  return (
    <div className='mt-2 w-full p-2'>
      <h1 className='w-full text-center'>Login</h1>
      <form className='mx-auto max-w-sm' onSubmit={handleLogin}>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Your email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='email@todo.com'
            required
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Your password
          </label>

          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            required
            minLength={8}
          />
        </div>

        <button
          type='submit'
          className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export { LoginForm };
