import {Suspense} from 'react';
import {MotorcycleModel} from '@/ui/home/motorcycle-models.tsx';
import {iMotorcycle} from '@/interfaces/iMotorcycle.ts';
import Loading from './loading.tsx';

interface PageProps {
  params: Promise<{
    motorcycleMake: string;
  }>;
}

export default async function Page({params}: PageProps) {
  const make = (await params).motorcycleMake;

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/${make}`, {
    cache: 'force-cache',
  });

  const motorcycles: iMotorcycle[] = await response.json();

  return (
    <Suspense fallback={<Loading />}>
      <MotorcycleModel make={motorcycles} />
    </Suspense>
  );
}
