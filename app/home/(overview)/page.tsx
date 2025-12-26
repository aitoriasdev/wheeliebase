import {Suspense} from 'react';
import Loading from './loading.tsx';
import Header from '@/ui/shared/header.tsx';
import Footer from '@/ui/shared/footer.tsx';
import {MotorcycleMake} from '@/app/ui/home/motorcycle-make.tsx';
import motorcycleMakes from '@/app/lib/data/motorcycle-makes.json';

export default async function Page() {
  return (
    <>
      <Header />
      <div className="px-6 py-6">
        <main className="grid grid-cols-3 gap-6">
          <Suspense fallback={<Loading />}>
            {motorcycleMakes.map((motorcycleMake) => (
              <MotorcycleMake
                key={`id-${motorcycleMake.make}`}
                motorcycleMake={motorcycleMake}
              />
            ))}
          </Suspense>
        </main>
      </div>
      <Footer />
    </>
  );
}
