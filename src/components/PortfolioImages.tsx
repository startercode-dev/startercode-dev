import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

export default function PortfolioImages({ item }) {
  const [finishLoad, setFinishLoad] = useState(false);

  const finishLoadHandler = () => {
    setFinishLoad((prev) => !prev);
  };

  return (
    <div className="relative h-fit w-fit">
      {/* CREATE PROPER LAZY LOAD */}
      <Image
        className={clsx(
          `rounded-primary absolute object-cover transition-all duration-300 ease-in-out lg:group-hover:blur-lg`,
          {
            'lg:group-hover:brightness-[0.25]': item.darken,
            'lg:group-hover:brightness-[0.7]': !item.darken,
            'opacity-0': finishLoad,
          },
        )}
        src={`/${item.image}`}
        width={1512}
        height={982}
        priority
        unoptimized
        alt={item.label}
      />
      <Image
        className={clsx(
          'rounded-primary object-cover transition-all duration-300 ease-in-out lg:group-hover:blur-lg',
          {
            'lg:group-hover:brightness-[0.25]': item.darken,
            'lg:group-hover:brightness-[0.7]': !item.darken,
          },
        )}
        src={`/${item.image}`}
        width={1512}
        height={982}
        alt={item.label}
        onLoad={finishLoadHandler}
        unoptimized
      />
    </div>
  );
}
