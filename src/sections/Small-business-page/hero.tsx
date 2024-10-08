'use client';

import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';
import Link from 'next/link';

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SplitText } from 'gsap/SplitText';

export default function Hero() {
  const heroContainer = useRef();

  // gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

  // useGSAP(
  //   () => {
  //     let split = new SplitText('.subheadline', { type: 'chars' });
  //     const tl = gsap.timeline();
  //     let mm = gsap.matchMedia();

  //     mm.add('(min-width:640px)', () => {
  //       tl.to('.hero-container', {
  //         autoAlpha: 1,
  //         duration: 0,
  //       });
  //       tl.fromTo(
  //         '.hero-headline',
  //         { autoAlpha: 0, y: 100 },
  //         { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.9, delay: 0.1 },
  //       );
  //       tl.fromTo(
  //         '.hero-description',
  //         { autoAlpha: 0 },
  //         { autoAlpha: 1, ease: 'power3.out', duration: 0.8 },
  //       );
  //       tl.fromTo(
  //         '.hero-ctas',
  //         { opacity: 0, y: 100 },
  //         { opacity: 1, y: 0, ease: 'back.out', duration: 0.6 },
  //       );
  //       tl.to('.hero-content', {
  //         scrollTrigger: {
  //           trigger: '.hero-container',
  //           scrub: true,
  //           pin: '.hero-content',
  //           start: 'top top',
  //           end: '130% bottom',
  //         },
  //         autoAlpha: 0,
  //       });
  //     });

  //     mm.add('(max-width:640px)', () => {
  //       tl.to('.hero-container', {
  //         autoAlpha: 1,
  //         duration: 0,
  //       });
  //       tl.fromTo(
  //         '.hero-headline',
  //         { autoAlpha: 0, y: 40 },
  //         { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.8, delay: 0.1 },
  //       );
  //       tl.fromTo(
  //         '.hero-description',
  //         { autoAlpha: 0 },
  //         { autoAlpha: 1, ease: 'power3.out', duration: 0.5 },
  //       );
  //       tl.fromTo(
  //         '.hero-ctas',
  //         { opacity: 0, y: 50 },
  //         { opacity: 1, y: 0, ease: 'back.out', duration: 0.8, delay: 0.2 },
  //       );
  //     });
  //   },
  //   { dependencies: [], scope: heroContainer, revertOnUpdate: true },
  // );

  return (
    <div className="relative z-30" ref={heroContainer} id="hero">
      <div className="hero-container relative h-[110svh] w-full">
        <section className="section section-container py-section-md flex h-svh w-full items-center bg-transparent">
          {/* HERO DESCRIPTION  */}
          <div className="hero-content relative z-10 flex w-full flex-col items-center will-change-transform lg:mt-[97px]">
            <h1 className="content-container heading-2 bold mb-content-md flex w-full max-w-[910px] flex-col text-center max-xl:max-w-[910px] max-sm:text-3xl 3xl:mb-14 3xl:max-w-[1600px]">
              <div className="hero-headline mb-2 will-change-transform 3xl:mb-5 ">
                Web Design Service for{' '}
                <span className="text-primary-5">Small Businesses</span>
              </div>
            </h1>
            <p className="hero-description title-300 mb-content-2xl content-container max-w-[450px] text-center will-change-transform max-xl:max-w-[430px] max-sm:max-w-[300px] 3xl:max-w-[820px]">
              Leave an unforgettable impression with your professional web
              design
            </p>
            <div className="hero-ctas flex w-full flex-col gap-6 will-change-transform max-md:px-0 max-sm:flex-col">
              <div className="grid grid-cols-4">
                <div className="content-container col-span-2 col-start-2 flex w-full max-lg:col-span-2 max-lg:col-start-2 max-sm:col-span-4">
                  <Link
                    aria-label="Get started on your starter code small business web design"
                    title="Get started on your starter code small business web design"
                    className="button-primary free-consultation-link mx-auto w-full max-lg:max-w-none"
                    href="/contact"
                  >
                    Get A Free Consultation
                  </Link>
                </div>
              </div>
              <div className="grid w-full grid-cols-4">
                <div className="content-container col-span-1 col-start-4 w-full max-lg:col-span-2 max-lg:col-start-2  max-sm:col-span-4">
                  <div className="relative">
                    <button
                      id="sb-learn-more"
                      aria-label="Learn more about our starter code small business web design"
                      title="Learn more about our starter code small business web design"
                      className="rounded-primary sb-buttton-gradient-border learn-more-btn flex h-[56px] w-full flex-row items-center justify-center gap-2 bg-opacity-50 bg-gradient-to-r from-primary-8 to-primary-9 py-3 before:bg-gradient-to-r before:from-primary-1 before:to-primary-4 before:opacity-40 max-sm:rounded-full max-sm:before:rounded-full"
                    >
                      <span className="title-300 learn-more-btn !font-normal !text-2 max-sm:text-lg max-sm:!font-medium">
                        Learn More
                      </span>
                      <ArrowDownIcon
                        className="learn-more-btn h-5 !text-3"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
