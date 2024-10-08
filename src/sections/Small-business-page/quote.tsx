'use client';
import Image from 'next/image';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Quote() {
  const sbQuoteSection = useRef();

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(min-width:640px)', () => {
        gsap.from('.sb-quote-heading', {
          scrollTrigger: {
            trigger: '.sb-quote-heading',
            scrub: true,
            start: '-25% 50%',
            end: '20% 50%',
          },
          x: -100,
          autoAlpha: 0,
        });
        gsap.from('.sb-quote-founder', {
          scrollTrigger: {
            trigger: '.sb-quote-heading',
            scrub: true,
            start: '-25% 50%',
            end: '20% 50%',
          },
          x: 100,
          autoAlpha: 0,
        });
        gsap.from('.quotation-img', {
          scrollTrigger: {
            trigger: '.sb-quote-heading',
            scrub: true,
            start: '0% 50%',
            end: '30% 50%',
          },
          scale: 0.5,
          autoAlpha: 0,
        });
      });

      mm.add('(max-width:640px)', () => {
        gsap.from('.sb-quote-section-container', {
          scrollTrigger: {
            trigger: '.sb-quote-section-container',
            scrub: true,
            start: '-15% 60%',
            end: '30% 60%',
          },
          x: -20,
          autoAlpha: 0,
        });
      });
    },
    { dependencies: [], scope: sbQuoteSection, revertOnUpdate: true },
  );

  return (
    <section
      className="section py-section-2xl relative 3xl:pb-10"
      ref={sbQuoteSection}
    >
      {/* BG IMG  */}
      <div className="absolute">
        <div className="relative h-[1300px] w-[100svw]">
          <div className="absolute left-1/2 -z-0 h-[1300px] w-[3800px] -translate-x-1/2">
            <Image
              className="translate-x-10 object-cover max-3xl:-translate-y-[400px] max-2xl:-translate-x-52 max-xl:-translate-y-[400px] max-lg:-translate-x-[500px] max-md:-translate-x-[175px] max-md:-translate-y-[350px] max-md:scale-75 max-sm:-translate-x-[150px] max-sm:-translate-y-[500px] max-sm:scale-50 3xl:-translate-y-[250px]"
              src="/small_business-quote-bg.jpg"
              alt="Small Business portfolio section background image"
              fill
              quality={100}
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="section-container sb-quote-section-container relative z-30 grid grid-cols-4 will-change-transform max-lg:flex-col max-lg:gap-y-7">
        <div className="content-container w-fullmax-lg:w-full relative z-20 col-span-3 col-start-1 max-lg:col-span-4 ">
          <div className="absolute bottom-3 right-0  w-[550px] max-lg:-bottom-10 max-lg:left-7 max-lg:origin-bottom-left max-md:-bottom-5 max-md:scale-75 max-sm:w-[300px] lg:origin-right">
            <Image
              width={100}
              height={100}
              alt="Testimony from small business web design client with starter code"
              src="/quotes.svg"
              className="quotation-img bottom-0 left-0 h-full w-full object-cover"
            />
          </div>
          <h2 className="sb-quote-heading heading-2 relative z-50 w-full max-w-[842px] max-xl:max-w-[750px] max-xl:text-6xl max-xl:leading-tight max-lg:max-w-none max-md:text-5xl max-md:leading-tight max-sm:text-2xl max-sm:leading-snug 3xl:max-w-[1200px]">
            “Highly recommend Startercode if you are looking for a team who is
            skilled with{' '}
            <span className="bg-gradient-to-r from-accent-5 via-grey-000 to-accent-5 bg-clip-text text-transparent">
              web design & development
            </span>
            , has attention to details and will make sure the job is done
            right!”
          </h2>
        </div>
        <div className="content-container sb-quote-founder col-span-1 col-start-4 flex w-full flex-col items-end justify-center max-lg:col-span-4 max-lg:col-start-1 max-lg:w-full">
          <p className="title-300 !font-medium">Ivan Gvardin</p>
          <span className="title-300 text-right !font-medium !text-3">
            <p className="max-[1357px]:hidden max-lg:block">
              Co Founder of ParianLabs
            </p>
            <span className="max-lg:hidden min-[1357px]:hidden">
              <p>Co Founder </p>
              <p>of ParianLabs</p>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
