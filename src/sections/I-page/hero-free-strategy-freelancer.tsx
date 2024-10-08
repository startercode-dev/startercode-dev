'use client';

import { useEffect, useRef, useState } from 'react';
// import { useFormState } from 'react-dom';
// import { submitSBlanding } from '@/app/action';
// import { useRouter } from 'next/navigation';
import { HeroImage } from '@/sections/I-page/components/hero-image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function FlpHero({ openModal }) {
  const heroContainer = useRef();
  // const [state, formAction] = useFormState(submitSBlanding, null);
  // const [submittedFormMessage, setSubmittedFormMessage] = useState<
  //   string | null
  // >(null);

  // const router = useRouter();

  // useEffect(() => {
  //   if (state) {
  //     if (state.success) {
  //       setSubmittedFormMessage('');
  //       router.push('/small-business-thank-you-lpv1');
  //     }
  //     if (!state.success) {
  //       setSubmittedFormMessage(state.msg);
  //     }
  //   }
  // }, [state]);

  return (
    <div className="relative z-30 mb-10" ref={heroContainer} id="hero">
      <div className="hero-container w-full lg:pt-[97px]">
        <section className="section section-container pb-section-sm grid w-full grid-cols-2 items-center bg-transparent pt-10 max-lg:flex max-lg:flex-col max-lg:pb-14 max-lg:pt-36 max-sm:pb-6 max-sm:pt-24 3xl:pt-28">
          {/* HERO DESCRIPTION  */}

          <div className="hero-content relative z-10 flex h-full w-full flex-col items-start justify-center will-change-transform max-lg:items-center">
            <h3 className="sub-headers mb-content-sm content-container overflow-visible text-center max-[1274px]:mb-4 max-sm:mb-3 lg:text-left">
              Serving All Of USA
            </h3>

            <h1 className="content-container heading-3 bold mb-content-md flex w-full max-w-[910px] flex-col text-left !text-5xl !leading-snug max-3xl:max-w-[650px] max-xl:max-w-[910px] max-lg:max-w-[720px] max-lg:text-center max-sm:mb-6 3xl:mb-3 3xl:max-w-[1600px] 3xl:!text-6xl 3xl:!leading-snug">
              <div className="hero-headline row mb-2 will-change-transform max-[1274px]:!text-5xl max-sm:mb-0 max-sm:!text-3xl 3xl:mb-5">
                <span>Hi I&apos;m Ronald, </span>
                <span> A Freelance Web Designer</span>
              </div>
            </h1>
            <div className="content-container mb-12 flex flex-col gap-3 max-lg:max-w-[550px] max-sm:mb-10">
              <div className="flex flex-row gap-2 text-primary-4">
                <CheckCircleIcon className="mt-1 h-7 w-7 flex-none text-accent-5 max-sm:h-5 max-sm:w-5" />
                <p className="title-200 text-2">Custom Code Web Development</p>
              </div>
              <div className="flex flex-row gap-2 text-primary-4">
                <CheckCircleIcon className="mt-1 h-7 w-7 flex-none text-accent-5 max-sm:h-5 max-sm:w-5" />
                <p className="title-200 text-2">UX & UI Web Design - Figma</p>
              </div>
              <div className="flex flex-row gap-2 text-primary-4">
                <CheckCircleIcon className="mt-1 h-7 w-7 flex-none text-accent-5 max-sm:h-5 max-sm:w-5" />
                <p className="title-200 text-2">
                  Wordpress, Shopify, & Webflow
                </p>
              </div>
              <div className="flex flex-row gap-2 text-primary-4">
                <CheckCircleIcon className="mt-1 h-7 w-7 flex-none text-accent-5 max-sm:h-5 max-sm:w-5" />
                <p className="title-200 text-2">
                  Expert in React/Next Js, Node Js, HTML, CSS, Javascript, &
                  More
                </p>
              </div>
              <div className="flex flex-row gap-2 text-primary-4">
                <CheckCircleIcon className="mt-1 h-7 w-7 flex-none text-accent-5 max-sm:h-5 max-sm:w-5" />
                <p className="title-200 text-2">
                  SEO & Site Speed Optimization
                </p>
              </div>
              <div className="flex flex-row gap-2 text-primary-4">
                <CheckCircleIcon className="mt-1 h-7 w-7 flex-none text-accent-5 max-sm:h-5 max-sm:w-5" />
                <p className="title-200 text-2">
                  Fully Responsive & Mobile-Friendly
                </p>
              </div>
            </div>

            <div className="content-container max-sm:w-full">
              <div className="relative">
                <button
                  onClick={openModal}
                  id="sb-learn-more"
                  aria-label="Learn more about our starter code small business web design"
                  title="Learn more about our starter code small business web design"
                  className="rounded-primary sb-buttton-gradient-border flex h-[76px] w-full flex-row items-center justify-center gap-2 bg-gradient-to-r from-primary-1 to-primary-5 py-8 transition-shadow duration-300 before:bg-gradient-to-r before:from-primary-7 before:to-primary-3 hover:shadow-xl hover:shadow-black/[0.35] max-lg:mb-12 max-sm:h-10 max-sm:rounded-full max-sm:py-7 max-sm:before:rounded-full"
                >
                  <span className="title-300 semibold px-1 !text-invert-1 transition-colors duration-500 max-sm:text-base max-sm:!font-medium sm:px-8 sm:py-4">
                    Schedule A Free Consultation Now
                  </span>
                </button>
              </div>
            </div>
          </div>
          <HeroImage />
        </section>
      </div>
    </div>
  );
}
