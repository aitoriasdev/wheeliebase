import {Suspense} from 'react';
import Header from '@/app/ui/header.tsx';
import {CardSkeleton} from '@/app/ui/skeletons/card-skeleton.tsx';

export default async function Page() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<CardSkeleton />}></Suspense>
        test
      </main>
    </>
  );
}
