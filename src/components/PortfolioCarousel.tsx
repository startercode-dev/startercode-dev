'use client';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { Suspense } from 'react';
import PortfolioImages from './PortfolioImages';

export default function Carousel({
  data,
  gap = 32,
  prevItem,
  nextItem,
  currIndex,
}) {
  return (
    <>
      {/* NAVIGATION ARROWS  */}
      <div className="absolute inset-0 grid grid-cols-4 max-lg:grid-cols-1">
        <div className="col-start-4 max-lg:absolute max-lg:-bottom-20 max-lg:left-1/2 max-lg:col-start-1 max-lg:-translate-x-1/2 max-md:flex max-md:w-full max-md:justify-center">
          <div className="content-container flex justify-start gap-4 pt-3 max-md:w-full max-md:gap-14 max-sm:gap-8 3xl:gap-5 3xl:pt-5">
            <button
              className={clsx(
                'rounded-secondary transition-scale relative z-30 p-3 ring-2 !ring-primary-8 duration-500 ease-in-out hover:scale-125 active:scale-110 max-md:flex max-md:w-full max-md:justify-center max-sm:hover:scale-110 max-sm:active:scale-110 3xl:p-5',
                {
                  '!bg-primary-8': false,
                  '!bg-transparent backdrop-blur-lg': true,
                },
              )}
              onClick={prevItem}
              aria-label="Move portfolio slider to the left"
            >
              <Image
                className={clsx('', {
                  'text-primary-5': false,
                  'text-primary-7': true,
                })}
                src="/icon-arrow_left.svg"
                width={36}
                height={36}
                alt="Arrow Left"
                aria-hidden="true"
              />
            </button>
            <button
              className={clsx(
                'rounded-secondary transition-scale relative z-30 p-3 ring-2 !ring-primary-8 duration-500 ease-in-out hover:scale-125 active:scale-110 max-md:flex max-md:w-full max-md:justify-center max-sm:hover:scale-110 max-sm:active:scale-110 3xl:p-5',
                {
                  '!bg-primary-8': true,
                  'bg-transparent': false,
                },
              )}
              onClick={nextItem}
              aria-label="Move portfolio slider to the right"
            >
              <Image
                className={clsx('', {
                  'text-primary-5': true,
                  'text-primary-7': false,
                })}
                src="/icon-arrow_right.svg"
                width={36}
                height={36}
                alt="Arrow Right"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-primary relative overflow-hidden py-4">
        {/* Carousel */}
        <ul
          className="grid grid-flow-col"
          style={{
            gap: `${gap}px`,
            width: `calc(${100 * data.length}% + ${gap * (data.length - 1)}px)`,
          }}
        >
          {data.map((item, i) => {
            const array = [1, 2, 3, 4, 5];
            return (
              <li
                className="relative transition-transform duration-1000 ease-in-out"
                key={i}
                style={{
                  transform: `translate(calc(${-100 * currIndex}% - ${currIndex == 0 ? '0' : gap * currIndex}px))`,
                }}
              >
                {/* WEBSITE THUMBNAIL */}
                <div className="relative grid grid-cols-4">
                  <div className="content-container col-span-3 max-lg:col-span-4">
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      title={item.title}
                      target="_blank"
                      className="portfolio-link"
                      tabIndex={i !== currIndex ? -1 : 0}
                    >
                      <div className="animation-gradient-border group relative mx-auto w-fit">
                        <div className="transition-color absolute inset-0 z-30 flex h-full w-full flex-col items-center justify-center opacity-0 duration-700 ease-in-out lg:group-hover:opacity-100">
                          <p className="mb-content-md max-w-xl text-center text-primary-5">
                            {item.href}
                          </p>
                          <p className="title-300 max-w-xl text-center">
                            {item.description}
                          </p>
                        </div>
                        <div className="rounded-primary overflow-hidden">
                          <PortfolioImages item={item} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="content-container absolute bottom-0 right-0 max-w-[700px] translate-x-2 max-lg:relative max-lg:col-span-4 max-lg:flex max-lg:max-w-full max-lg:translate-x-0 max-lg:flex-col 3xl:max-w-[880px]">
                    <p className="title-100 text-right max-lg:mt-6 max-lg:text-center">{`0${i + 1}`}</p>
                    <Link
                      className="portfolio-link relative z-30"
                      href={item.href}
                      aria-label={item.label}
                      title={item.title}
                      target="_blank"
                      tabIndex={-1}
                    >
                      <h2 className="text-right !text-9xl !font-semibold uppercase text-accent-5 max-lg:mx-auto max-lg:max-w-xl max-lg:text-center max-lg:!text-8xl max-md:max-w-[300px] max-md:!text-5xl 3xl:!text-[160px]">
                        {item.name}
                      </h2>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
