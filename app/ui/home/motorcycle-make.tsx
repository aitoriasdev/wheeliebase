import Image from 'next/image';
import Link from 'next/link';
import { iMotorcycleMake } from '@/interfaces/iMotorcycleMake.ts';

interface MotorcycleMakeProps {
  motorcycleMake: iMotorcycleMake;
}

export function MotorcycleMake({ motorcycleMake }: MotorcycleMakeProps) {
  return (
    <article
      key={`id-${motorcycleMake.make.toLowerCase()}`}
      className="shadow-md rounded-md flex flex-col items-center justify-between gap-4 p-4"
    >
      <header className="flex flex-col items-center gap-4 w-full relative overflow-hidden">
        <h2 className="text-3xl font-bold">{motorcycleMake.make}</h2>
        <Image
          src={`/logos/${motorcycleMake.logo}`}
          alt={`${motorcycleMake.make}`}
          width={200}
          height={200}
          loading="eager"
          unoptimized
          className="h-52 w-52"
        ></Image>
        <div
          className={`absolute bottom-0 right-0 border-t-0 border-r-0 border-b-250 border-l-350 border-t-transparent border-r-transparent border-l-transparent h-0 w-0 z-[-1] transition duration-500 ease-in-out`}
          style={{
            borderBottomColor: motorcycleMake.color
              ? `var(--color-${motorcycleMake.color})`
              : 'var(--color-indigo-200)',
          }}
        ></div>
      </header>
      <div className="flex items-center justify-center w-full h-12">
        <Link
          href={`${process.env.NEXTAUTH_URL}/${motorcycleMake.make.toLowerCase()}`}
          className="bg-indigo-500 text-white text-center rounded-md py-2 px-4 transition ease-in-out duration-300 border-b-3 border-indigo-900 hover:bg-red-400 hover:border-b-0 w-full"
        >
          See models
        </Link>
      </div>
    </article>
  );
}
