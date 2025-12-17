import {Suspense} from 'react';
import LoginForm from '@/app/ui/login/login-form.tsx';

export default function Login() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="text-center flex justify-center items-center">
          <h1 className="text-4xl">Wheeliebase</h1>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
