'use client';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import PortfolioImages from './PortfolioImages';

export default function TestimonialCarousel({ data, mobileData, gap = 32 }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [mobileCurrIndex, setMobileCurrIndex] = useState(0);

  const mobileGap = 0;

  const nextItem = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevItem = () => {
    setCurrIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  const mobileNextItem = () => {
    setMobileCurrIndex((prevIndex) => (prevIndex + 1) % mobileData.length);
  };

  const mobilePrevItem = () => {
    setMobileCurrIndex((prevIndex) =>
      prevIndex === 0 ? mobileData.length - 1 : prevIndex - 1,
    );
  };

  return (
    <>
      {/* NAVIGATION ARROWS  */}
      {/* DESKTOP BUTTONS  */}
      <div className="section section-container absolute inset-0 z-30 grid grid-cols-4 max-[1273px]:hidden">
        <div className="content-container col-start-4">
          <div className=" flex justify-end gap-4 3xl:gap-5">
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

      <div className="rounded-primary relative z-30 h-fit overflow-hidden py-4">
        {/* Carousel Desktop*/}
        <ul
          className="grid h-fit grid-flow-col max-[1273px]:hidden"
          style={{
            gap: `${gap}px`,
            width: `calc(${100 * data.length}% + ${gap * (data.length - 1)}px)`,
          }}
        >
          {data.map((testimony, i) => {
            return (
              <li
                className="relative h-fit transition-transform duration-1000 ease-in-out"
                key={i}
                style={{
                  transform: `translate(calc(${-100 * currIndex}% - ${currIndex == 0 ? '0' : gap * currIndex}px))`,
                }}
              >
                {/* WEBSITE THUMBNAIL */}
                <div className="relative grid h-fit grid-cols-4">
                  <div className="content-container col-span-2 h-fit">
                    <Link
                      href="https://www.upwork.com/freelancers/~01f1b62f384148c5d1"
                      className="group"
                      target="_blank"
                    >
                      <div className="border-gradient relative flex h-[310px] w-full flex-col justify-between bg-blue-100/5 px-6 py-9 transition-colors duration-300 group-hover:bg-blue-100/15 max-sm:px-4 max-sm:py-6">
                        <p className="title-300 mb-content-md line-clamp-5 text-2 max-sm:mb-5">
                          {testimony[0].review}
                        </p>
                        <div className="flex flex-row justify-between">
                          <div>
                            <p className="title-300 font-bold text-1">
                              {testimony[0].reviewerDetails.name}
                            </p>
                            <p className="base-100 text-3">
                              {testimony[0].reviewerDetails.title}
                            </p>
                          </div>
                          <Image
                            className="pr-5"
                            src="/I-google_rating.svg"
                            alt="Google Rating"
                            height={30}
                            width={150}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="content-container col-span-2 h-fit">
                    <Link
                      href="https://www.upwork.com/freelancers/~01f1b62f384148c5d1"
                      className="group"
                      target="_blank"
                    >
                      <div className="border-gradient relative flex h-[310px] w-full flex-col justify-between bg-blue-100/5 px-6 py-9 transition-colors duration-300 group-hover:bg-blue-100/15 max-sm:px-4 max-sm:py-6">
                        <p className="title-300 mb-content-md line-clamp-5 text-2 max-sm:mb-5">
                          {testimony[1].review}
                        </p>
                        <div className="flex flex-row justify-between">
                          <div>
                            <p className="title-300 font-bold text-1">
                              {testimony[1].reviewerDetails.name}
                            </p>
                            <p className="base-100 text-3">
                              {testimony[1].reviewerDetails.title}
                            </p>
                          </div>
                          <Image
                            className="pr-5"
                            src="/I-google_rating.svg"
                            alt="Google Rating"
                            height={30}
                            width={150}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Carousel Tablet & Smaller*/}
        <ul
          className="grid h-fit grid-flow-col min-[1274px]:hidden"
          style={{
            gap: `${mobileGap}px`,
            width: `calc(${100 * mobileData.length}% + ${mobileGap * (mobileData.length - 1)}px)`,
          }}
        >
          {mobileData.map((testimony, i) => {
            const array = [1, 2, 3, 4, 5];
            return (
              <>
                <li
                  className="relative h-fit transition-transform duration-1000 ease-in-out"
                  key={i}
                  style={{
                    transform: `translate(calc(${-100 * mobileCurrIndex}% - ${currIndex == 0 ? '0' : mobileGap * mobileCurrIndex}px))`,
                  }}
                >
                  {/* WEBSITE THUMBNAIL */}
                  <div className="relative grid h-fit grid-cols-4">
                    <div className="content-container col-span-4 h-fit">
                      <Link
                        href="https://www.upwork.com/freelancers/~01f1b62f384148c5d1"
                        className="group"
                        target="_blank"
                      >
                        <div className="border-gradient relative flex h-[310px] w-full flex-col justify-between bg-blue-100/5 px-6 py-9 transition-colors duration-300 group-hover:bg-blue-100/15 max-sm:h-[280px] max-sm:px-4 max-sm:py-6">
                          <p className="title-300 mb-content-md line-clamp-5 text-2 max-sm:mb-5 max-sm:line-clamp-none">
                            {testimony.review}
                          </p>
                          <div className="flex flex-row justify-between max-sm:flex-col">
                            <div>
                              <p className="title-300 font-bold text-1">
                                {testimony.reviewerDetails.name}
                              </p>
                              <p className="base-100 text-3">
                                {testimony.reviewerDetails.title}
                              </p>
                            </div>
                            <Image
                              className="pr-5"
                              src="/I-google_rating.svg"
                              alt="Google Rating"
                              height={30}
                              width={150}
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>

      {/* MOBILE BUTTONS */}
      <div className="content-container flex justify-end gap-4 max-md:w-full max-md:gap-14 max-sm:gap-8 min-[1273px]:absolute min-[1273px]:top-0 min-[1273px]:hidden 3xl:gap-5">
        <button
          className={clsx(
            'rounded-secondary transition-scale relative z-30 p-3 ring-2 !ring-primary-8 duration-500 ease-in-out hover:scale-125 active:scale-110 max-md:flex max-md:w-full max-md:justify-center max-sm:hover:scale-110 max-sm:active:scale-110 3xl:p-5',
            {
              '!bg-primary-8': false,
              '!bg-transparent backdrop-blur-lg': true,
            },
          )}
          onClick={mobilePrevItem}
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
          onClick={mobileNextItem}
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
    </>
  );
}
