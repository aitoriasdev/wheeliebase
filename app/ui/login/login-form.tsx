'use client';

import {useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {signIn} from 'next-auth/react';
import {Alert} from '../components/alert.tsx';
import {Button} from '../components/button.tsx';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/home';

  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    setError(null);

    const username = String(formData.get('username') ?? '');
    const password = String(formData.get('password') ?? '');

    const response = await signIn('log-in', {
      redirect: false,
      username,
      password,
      callbackUrl,
    });

    setPending(false);

    if (response?.error) {
      setError('Invalid credentials');
      return;
    }

    window.location.href = callbackUrl;
  }

  return (
    <form action={handleSubmit} className="space-y-3">
      <div className="flex flex-col rounded-lg bg-gray-50 px-6 pb-4 pt-8 gap-6 shadow-md">
        <div className="w-full flex flex-col gap-6">
          <div>
            <label
              className="block text-sm/6 font-medium text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block text-sm/6 font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                required
                minLength={8}
              />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button
          type="submit"
          className="w-full text-center items-center justify-center h-11"
          aria-disabled={pending}
        >
          Log in
        </Button>
        <div className="flex" aria-live="polite" aria-atomic="true">
          {error && (
            <Alert
              type="error"
              title="Error"
              text={error}
              className="w-full flex-1"
            />
          )}
        </div>
      </div>
    </form>
  );
}
