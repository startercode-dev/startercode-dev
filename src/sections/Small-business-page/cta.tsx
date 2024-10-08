'use client';

import { ArrowDownIcon } from '@heroicons/react/24/outline';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Link from 'next/link';

export default function CTA() {
  const ctaSBSection = useRef();

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width:1025px)', () => {
        gsap.from('.sb-cta-button', {
          scrollTrigger: {
            trigger: '.cta-sb-container',
            scrub: true,
            start: '-40% 70%',
            end: '50% 70%',
          },
          duration: 0.5,
          x: '-178%',
          scale: 0.5,
          opacity: 0,
          ease: 'linear',
        });
        gsap.from('.cta-sb-heading', {
          scrollTrigger: {
            trigger: '.cta-sb-container',
            scrub: true,
            start: '20% 70%',
            end: '80% 70%',
          },
          autoAlpha: 0,
          ease: 'linear',
        });
      });

      mm.add('(max-width:1025px)', () => {
        gsap.from('.sb-cta-button', {
          scrollTrigger: {
            trigger: '.cta-sb-container',
            scrub: true,
            start: '-20% 70%',
            end: '30% 70%',
          },
          duration: 0.5,
          opacity: 0,
          ease: 'linear',
        });
        gsap.from('.cta-sb-heading', {
          scrollTrigger: {
            trigger: '.cta-sb-container',
            scrub: true,
            start: '-20% 70%',
            end: '30% 70%',
          },
          autoAlpha: 0,
          x: -20,
          ease: 'linear',
        });
      });
    },
    {
      dependencies: [],
      scope: ctaSBSection,
      revertOnUpdate: true,
    },
  );

  return (
    <section
      className="section pt-section-2xl pb-section-md relative z-30 flex items-center max-sm:h-svh"
      id="cta-sb"
      ref={ctaSBSection}
    >
      <div className="section-container cta-sb-container grid grid-cols-4 max-lg:flex max-lg:flex-col max-lg:gap-12">
        {/* TEXT SECTION */}
        <div className="content-container cta-sb-heading col-span-3 col-start-1 will-change-transform max-lg:text-center">
          <h2 className="heading-2 mb-3 w-full max-lg:mb-5 max-lg:w-full max-lg:text-6xl max-sm:text-2xl">
            Free Custom Strategy With Our Specialist
          </h2>
          <p className="title-300 w-4/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-[814px]">
            Over 5 billion people use the internet worldwide. Don’t miss out on
            potential customers who may need your services because you aren’t
            discoverable online.
          </p>
        </div>

        {/* CIRCLES */}
        <div className="content-container col-span-1 col-start-4 flex items-center justify-center">
          <Link
            href="/contact"
            aria-label="Click to get your free custom small business website strategy with starter code"
            title="Get your free custom small business website strategy with starter code"
            className="sb-cta-button free-consultation-link flex aspect-square w-full items-center justify-center rounded-full max-lg:max-w-[301px] max-sm:max-w-[200px]"
          >
            <div className="transition-color group flex h-full w-full items-center justify-center rounded-full bg-primary-8 duration-500 hover:bg-primary-5">
              <div className="flex aspect-square w-[calc(100%-20px)] items-center justify-center rounded-full bg-1">
                <div className="transition-color flex aspect-square w-[calc(100%-20px)] items-center justify-center rounded-full bg-primary-7 duration-1000 group-hover:bg-primary-2">
                  <div className="flex aspect-square w-[calc(100%-20px)] flex-col items-center justify-center gap-3 rounded-full bg-1 max-xl:gap-1">
                    <p className="heading-6 font-body text-2 transition-colors duration-300 group-hover:!text-1 max-xl:text-xl max-lg:text-2xl max-sm:text-base">
                      Start now
                    </p>
                    <ArrowDownIcon className="size-[84px] text-1 max-xl:size-9 max-lg:size-[84px] max-sm:size-[56px]" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
