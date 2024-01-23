'use client';

import React, { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Sign up in with:', { email, username, password });
  };

  return (
    <div className='mt-2 w-full p-2'>
      <h1 className='ml-[50%]'>Signup</h1>
      <form className='mx-auto max-w-sm' onSubmit={handleRegister}>
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
            htmlFor='username'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Your username
          </label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='johnyy123'
            required
            minLength={1}
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
          className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Signup
        </button>
      </form>
    </div>
  );
}
