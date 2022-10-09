import { useTheme } from 'next-themes';
import React from 'react';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  return (
    <p className='text-2xl'>
      <button
        className='bg-gray-200 dark:bg-gray-800 rounded-full p-2'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </p>
  );
}
