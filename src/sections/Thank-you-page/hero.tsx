'use client';

import { useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const heroContainer = useRef();

  return (
    <div className="relative z-30" ref={heroContainer} id="hero">
      <div className="hero-container relative h-[110svh] w-full">
        <section className="section section-container py-section-md flex h-svh w-full items-center bg-transparent">
          {/* HERO DESCRIPTION  */}
          <div className="hero-content relative z-10 flex w-full flex-col items-center will-change-transform lg:mt-[97px]">
            <h1 className="content-container heading-2 bold mb-content-md flex w-full max-w-[910px] flex-col text-center max-xl:max-w-[910px] max-sm:text-3xl 3xl:mb-14 3xl:max-w-[1600px]">
              <div className="hero-headline mb-2 will-change-transform 3xl:mb-5 ">
                <span className="text-primary-5">Thank you</span>, we are
                contacting you now!
              </div>
            </h1>
            <p className="hero-description title-300 mb-content-2xl content-container max-w-[640px] text-center will-change-transform 3xl:max-w-[820px]">
              Please check your inbox as our team has just sent you an email for
              next steps. We look forward to talking to you!
            </p>
            <div className="hero-ctas flex w-full flex-col gap-6 will-change-transform max-md:px-0 max-sm:flex-col">
              <div className="grid grid-cols-4">
                <div className="content-container col-span-2 col-start-2 flex w-full max-lg:col-span-2 max-lg:col-start-2 max-sm:col-span-4">
                  <Link
                    aria-label="Get started on your starter code small business web design"
                    title="Get started on your starter code small business web design"
                    className="button-primary free-consultation-link mx-auto w-full max-lg:max-w-none"
                    href="/"
                  >
                    Go to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
