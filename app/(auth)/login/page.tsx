'use client';

import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className='mt-2 w-full p-2'>
      <h1 className='ml-[50%]'>Login</h1>
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
          />
        </div>

        <button
          type='submit'
          className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Login
        </button>
      </form>
    </div>
  );
}
