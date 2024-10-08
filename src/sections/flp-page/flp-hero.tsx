'use client';

import { useEffect, useRef, useState } from 'react';
// import { useFormState } from 'react-dom';
// import { submitSBlanding } from '@/app/action';
// import { useRouter } from 'next/navigation';
import { HeroImage } from '@/sections/flp-page/components/hero-image';

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
        <section className="section section-container pt-section-sm grid w-full grid-cols-2 items-center bg-transparent max-lg:flex max-lg:flex-col max-lg:pb-14 max-lg:pt-36 max-sm:pb-6 max-sm:pt-28">
          {/* HERO DESCRIPTION  */}

          <div className="hero-content relative z-10 flex w-full flex-col items-start will-change-transform max-lg:items-center lg:mb-10">
            <h3 className="sub-headers mb-content-lg content-container overflow-visible text-center max-[1274px]:mb-0 max-sm:mb-3 lg:text-left">
              San Francisco Based - Serving worldwide
            </h3>

            <h1 className="content-container heading-2 bold mb-content-md flex w-full max-w-[910px] flex-col text-left max-xl:max-w-[910px] max-lg:text-center max-sm:mb-3 max-sm:text-3xl 3xl:mb-14 3xl:max-w-[1600px]">
              <div className="hero-headline row mb-2 will-change-transform max-md:text-6xl max-sm:mb-0 max-sm:text-2xl 3xl:mb-5">
                <span>Hi I&apos;m Ronald, </span>
                <span> A Freelance Web Designer</span>
              </div>
            </h1>

            <p className="hero-description title-200 mb-content-2xl content-container max-w-[600px] text-left will-change-transform max-xl:max-w-[430px] max-lg:max-w-[510px] max-lg:text-center max-sm:max-w-[340px] 3xl:max-w-[820px]">
              I specialize in web design and development, develiering custom
              results to meet your personal goals. Book a meeting now and see if
              I&apos;m the right fit for your project!
            </p>

            <div className="mb-content-lg content-container max-[1274px]:mb-0">
              <div className="relative">
                <button
                  onClick={openModal}
                  type="submit"
                  id="sb-learn-more"
                  aria-label="Learn more about our starter code small business web design"
                  title="Learn more about our starter code small business web design"
                  className="rounded-primary sb-buttton-gradient-border mb-9 flex h-[76px] w-full flex-row items-center justify-center gap-2 bg-gradient-to-r from-primary-1 to-primary-5 py-8 transition-shadow duration-300 before:bg-gradient-to-r before:from-primary-7 before:to-primary-3 hover:shadow-xl hover:shadow-black/[0.35] max-sm:rounded-full max-sm:before:rounded-full"
                >
                  <span className="title-300 sm:title-200 semibold px-1 !text-invert-1 transition-colors duration-500 max-sm:text-lg max-sm:!font-medium sm:p-5">
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
