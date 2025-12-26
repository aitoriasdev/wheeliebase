'use client';

import {signOut} from 'next-auth/react';

export default function Header() {
  const handleClick = () => {
    signOut({redirect: true, callbackUrl: '/'});
  };

  return (
    <header className="py-6 px-8 w-full flex justify-between gap-4 items-center min-h-28 border-b border-b-neutral-300">
      <h1 className="text-xl">Wheeliebase</h1>
      <div>
        <button
          type="button"
          className="bg-indigo-500 text-white rounded-md py-2 px-4 transition ease-in-out duration-300 border-b-3 border-indigo-900 hover:bg-red-400 hover:border-b-0"
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
