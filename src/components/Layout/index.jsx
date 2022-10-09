import React from 'react';
import ThemeToggler from '../ThemeToggler';

export default function Layout() {
  return (
    <div className='h-screen min-w-full flex justify-center items-center space-x-4 space-y-4 '>
      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-6xl font-bold text-center '>
          Next.js + Tailwind CSS
        </h1>
        <p className='mt-4 text-xl text-center '>
          with <span className='font-bold text-red-500'>Dark Mode</span> support
        </p>

        <div className='flex items-center justify-center mt-12 space-x-4'>
          <a
            href='https://github.com/alwaz-shahid/nextjs-tailwind-template'
            target='_blank'
            className='px-4 py-2 font-semibold text-slate-100 dark:text-gray-800 transition-colors duration-200 transform dark:bg-slate-300 dark:hover:bg-slate-200 bg-slate-900 rounded-md hover:bg-slate-700'
          >
            Documentation →
          </a>

          <ThemeToggler />
        </div>
        <h6 className='mt-40 text-sm text-center '>
          A simple starter to build a site using Next.js and Tailwind CSS.
        </h6>
        <h6 className='mt-4 text-sm text-center '>
          You can follow me on{' '}
          <a
            target={'_blank'}
            href='https://github.com/alwaz-shahid'
            className='text-blue-500'
          >
            GitHub
          </a>
          , for more projects.
        </h6>
      </div>
    </div>
  );
}
