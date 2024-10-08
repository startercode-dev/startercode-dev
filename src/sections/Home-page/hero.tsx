'use client';

import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SplitText } from 'gsap/SplitText';

export default function Hero() {
  const heroContainer = useRef();

  // gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

  useGSAP(
    () => {
      // let split = new SplitText('.subheadline', { type: 'chars' });
      // const tl = gsap.timeline();
      // let mm = gsap.matchMedia();
      // mm.add('(min-width:640px)', () => {
      //   tl.to('.hero-container', {
      //     autoAlpha: 1,
      //     duration: 0.2,
      //   });
      //   tl.fromTo(
      //     '.hero-headline',
      //     { autoAlpha: 0, y: 100 },
      //     { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.9, delay: 2.8 },
      //   );
      //   tl.fromTo(
      //     split.chars,
      //     { autoAlpha: 0, y: 25 },
      //     { autoAlpha: 1, y: 0, stagger: 0.04, duration: 0.2 },
      //   );
      //   tl.fromTo(
      //     '.hero-description',
      //     { autoAlpha: 0 },
      //     { autoAlpha: 1, ease: 'power3.out', duration: 0.6 },
      //   );
      //   tl.fromTo(
      //     '.hero-ctas',
      //     { opacity: 0, y: 100 },
      //     { opacity: 1, y: 0, ease: 'back.out', duration: 0.6 },
      //   );
      //   tl.to('.hero-content', {
      //     scrollTrigger: {
      //       trigger: '.hero-container',
      //       scrub: true,
      //       start: 'top top',
      //       end: 'bottom bottom',
      //     },
      //     autoAlpha: 0,
      //   });
      // });
      // mm.add('(max-width:640px)', () => {
      //   tl.to('.hero-container', {
      //     autoAlpha: 1,
      //     duration: 0.2,
      //   });
      //   tl.fromTo(
      //     '.hero-headline',
      //     { autoAlpha: 0, y: 40 },
      //     { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.8, delay: 3.5 },
      //   );
      //   tl.fromTo(
      //     split.chars,
      //     { autoAlpha: 0, y: 25 },
      //     { autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.3 },
      //   );
      //   tl.fromTo(
      //     '.hero-description',
      //     { autoAlpha: 0 },
      //     { autoAlpha: 1, ease: 'power3.out', duration: 0.4 },
      //   );
      //   tl.fromTo(
      //     '.hero-ctas',
      //     { opacity: 0, y: 50 },
      //     { opacity: 1, y: 0, ease: 'back.out', duration: 0.6, delay: 0.2 },
      //   );
      // });
    },
    { dependencies: [], scope: heroContainer, revertOnUpdate: true },
  );

  return (
    <div className="relative z-30" ref={heroContainer} id="hero">
      {/* HERO HEIGHT : 110svh */}
      <div className="hero-container relative h-[110svh] w-full">
        <section className="section section-container py-section-md flex h-svh w-full items-center bg-transparent">
          {/* HERO DESCRIPTION  */}
          <div className="hero-content relative z-10 flex w-full flex-col items-center">
            <h1 className="content-container heading-2 bold mb-content-lg flex w-full max-w-[1223px] flex-col text-center max-xl:max-w-[832px] max-sm:text-3xl 3xl:mb-14 3xl:max-w-[1600px]">
              <div className="hero-headline mb-2 3xl:mb-5">
                <span className="text-primary-5">Creative</span> web design and{' '}
                <span className="text-primary-5">Custom</span> software
                development
              </div>
              <span className="title-100 semibold hero-headline subheadline pl-4 !text-accent-3">
                for your business
              </span>
            </h1>
            <p className="hero-description title-300 mb-content-xl content-container max-w-[662px] text-center max-xl:max-w-[832px] 3xl:max-w-[820px]">
              Don’t hinder your business growth with a poor website. Breathe
              life into your user experience, and offer all the necessary
              functionalities for your clients.
            </p>
            <div className="hero-ctas grid w-full grid-cols-4 will-change-transform max-lg:grid-flow-row max-lg:gap-y-5 max-lg:px-8 max-md:grid-cols-2 max-md:px-0 max-sm:flex-col">
              <div className="col-start-2 flex justify-center max-lg:col-span-2 max-lg:col-end-4 max-md:col-start-1 max-md:px-4">
                <Link
                  aria-label="Get started on our starter code creative web design services"
                  title="Get started on our starter code creative web design services"
                  className="button-primary free-consultation-link col-span-1 w-10/12 max-lg:w-full max-lg:max-w-none"
                  href="/contact"
                >
                  Get A Free Consultation
                </Link>
              </div>
              <div className="col-start-3 flex justify-center max-lg:col-span-2 max-lg:col-start-2 max-lg:col-end-4 max-md:col-start-1 max-md:px-4">
                <button
                  aria-label="Learn more about our starter code web design services"
                  title="Learn more about our starter code web design services"
                  className="button-inverted learn-more-btn col-span-1 flex w-10/12 flex-row items-center justify-center  gap-2 max-lg:w-full max-lg:max-w-none"
                >
                  <span className="learn-more-btn">Learn More</span>
                  <ArrowDownIcon
                    className="learn-more-btn h-4"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
