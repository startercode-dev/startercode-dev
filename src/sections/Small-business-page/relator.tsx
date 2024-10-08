'use client';
import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Relator() {
  const relatorSection = useRef();

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      mm.add('(min-width:640px)', () => {
        gsap.from('.relator-section', {
          scrollTrigger: {
            trigger: '.relator-section',
            scrub: true,
            start: '-20% 70%',
            end: '40% 70%',
          },
          x: -100,
          opacity: 0,
          ease: 'linear',
        });
      });
      mm.add('(max-width:640px)', () => {
        gsap.from('.relator-section', {
          scrollTrigger: {
            trigger: '.relator-section',
            start: '-20% 60%',
            end: '40% 60%',
          },
          autoAlpha: 0,
          x: -20,
          ease: 'linear',
        });
      });
    },
    {
      dependencies: [],
      scope: relatorSection,
      revertOnUpdate: true,
    },
  );

  return (
    <section
      className="section pt-section-2xl pb-section-sm relative z-30"
      ref={relatorSection}
      id="relator-sb"
    >
      <div
        className="section-container pt-14 max-lg:pt-24 max-sm:pt-10"
        id="relator-sb-scroll-to"
      >
        <div className="content-container">
          <div className="rounded-secondary mb-content-md relator-section mx-auto grid w-full grid-cols-2 overflow-hidden max-lg:grid-cols-1">
            <div className="bg-invert-1 px-9 py-6 max-lg:px-12 max-lg:pb-20 max-lg:pt-12 max-md:pb-12 max-sm:px-4 max-sm:pb-9 max-sm:pt-4">
              <h3 className="heading-6 bold mb-content-md text-accent-6">
                San Francisco based web design
              </h3>
              <h2 className="heading-2 bold mb-content-xl !text-invert-1 max-md:text-6xl max-sm:text-2xl">
                Small Business Web Design Specialist
              </h2>
              <p className="title-300 semibold mb-content-md !text-invert-2">
                Frustrated with cookie-cutter web templates that are time
                consuming to use, and fail to show-off your unique brand?
              </p>
              <p className="title-300 semibold mb-content-2xl !text-invert-2">
                Startercode specializes in crafting dynamic web solutions
                catered to your specific small business industry. Our mission is
                to deliver websites that not only look exceptional but also
                drive results.
              </p>
              <p className="title-300 semibold !text-invert-1">
                Your business growth is our main priority.
              </p>
            </div>
            <div>
              <Image
                className="h-full w-full object-cover"
                src="/small_business-relator_img.jpg"
                alt="Small Business website technology"
                width={904}
                height={873}
              />
            </div>
          </div>
          <div className="h-fit">
            <Link
              className="link-1 free-consultation-link inline-flex flex-row items-center gap-2 !text-primary-5"
              href="/contact"
              aria-label="Navigates to a page to contact us about our small business web design services"
              title="Get a free consultation on our small business web design services"
            >
              <span>Learn More With a Free Consultation</span>
              <ArrowRightIcon className="h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
