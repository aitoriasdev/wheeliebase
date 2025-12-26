import {iMotorcycle} from '@/interfaces/iMotorcycle.ts';

interface MotorcycleModelProps {
  make: iMotorcycle[];
}

export async function MotorcycleModel({make}: MotorcycleModelProps) {
  return (
    <div className="grid columns-md gap-2">
      {make.map((motorcycleModel) => (
        <article
          key={`${motorcycleModel.model}-${motorcycleModel.year}`}
          className=""
          data-motorcycle-brand={make}
        >
          <header>
            <h2>{motorcycleModel.model}</h2>
          </header>
        </article>
      ))}
    </div>
  );
}
