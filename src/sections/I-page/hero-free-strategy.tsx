'use client';

import { useEffect, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitSBlanding } from '@/app/action';
import { useRouter } from 'next/navigation';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

function Popup({
  message,
  type,
}: {
  message: string;
  type: boolean | undefined;
}) {
  return (
    <div
      className={`absolute z-50 rounded-full border px-10 py-2 text-lg text-white transition-all duration-500 ease-out max-md:-bottom-36 max-md:right-1/2 max-md:translate-x-1/2 max-md:text-nowrap max-md:text-center md:-top-16 md:right-8 ${type === true ? 'border-green-300 bg-gradient-to-br from-green-900 to-green-700 max-sm:w-4/5' : 'border-red-300 bg-gradient-to-br from-red-900 to-red-700 max-sm:w-4/5'}`}
    >
      {message}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      id="sb-learn-more"
      aria-label="Learn more about our starter code small business web design"
      title="Learn more about our starter code small business web design"
      className="md:rounded-primary sb-buttton-gradient-border mb-9 flex h-[56px] w-full flex-row items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-primary-1 to-primary-5 py-8 transition-shadow duration-300 before:bg-gradient-to-r before:from-primary-7 before:to-primary-3 hover:shadow-xl hover:shadow-black/[0.35] disabled:grayscale"
      disabled={pending}
    >
      <span
        id="submitBtn"
        className="title-200 semibold !text-invert-1 transition-colors duration-500 max-sm:text-base max-sm:!font-medium"
      >
        {pending ? (
          <div className="flex items-center justify-center gap-3">
            <div className="h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" />
            <p>Submitting...</p>
          </div>
        ) : (
          'Get A Free Strategy Session'
        )}
      </span>
    </button>
  );
}

function DisabledSubmitButton() {
  return (
    <button
      type="submit"
      id="sb-learn-more"
      aria-label="Learn more about our starter code small business web design"
      title="Learn more about our starter code small business web design"
      className="rounded-primary sb-buttton-gradient-border mb-9 flex h-[56px] w-full flex-row items-center justify-center gap-2 bg-gradient-to-r from-primary-1 to-primary-5 py-8 transition-shadow duration-300 before:bg-gradient-to-r before:from-primary-7 before:to-primary-3 hover:shadow-xl hover:shadow-black/[0.35] disabled:grayscale"
      disabled
    >
      <span
        id="submitBtn"
        className="title-200 semibold !text-invert-1 transition-colors duration-500 max-sm:text-base max-sm:!font-medium"
      >
        Submitted!
      </span>
    </button>
  );
}

export default function Hero() {
  const heroContainer = useRef();
  const formRef = useRef(null);
  const [state, formAction] = useFormState(submitSBlanding, null);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [submittedFormMessage, setSubmittedFormMessage] = useState<
    string | null
  >(null);

  let fullUrl;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      fullUrl = window.location.href;
      const hiddenInput = formRef.current.querySelector(
        "input[name='fullUrl']",
      );

      if (hiddenInput) {
        hiddenInput.value = fullUrl;
      }
    }
  }, [state]);

  const router = useRouter();
  useEffect(() => {
    if (state) {
      setSubmittedFormMessage(state?.msg);

      if (state.success) {
        setBtnDisabled(true);
        setTimeout(() => {
          router.push('/small-business-thank-you-lpv1');
        }, 1000);
      }

      const clearMessageTimeout = setTimeout(() => {
        setSubmittedFormMessage(null);
      }, 2000);

      return () => {
        clearTimeout(clearMessageTimeout);
      };
    }
  }, [state]);

  return (
    <div className="relative z-30" ref={heroContainer} id="hero">
      <div className="hero-container w-full lg:pt-[97px]">
        <section className="section section-container pt-section-sm grid w-full grid-cols-2 items-center bg-transparent max-lg:flex max-lg:flex-col max-lg:pb-14 max-lg:pt-36 max-sm:pb-6 max-sm:pt-28">
          {/* HERO DESCRIPTION  */}
          <div className="hero-content relative z-10 flex w-full flex-col items-start will-change-transform max-lg:items-center">
            <h1 className="content-container heading-2 bold mb-content-md flex w-full max-w-[910px] flex-col text-left max-xl:max-w-[910px] max-lg:text-center max-sm:mb-3 max-sm:text-3xl 3xl:mb-14 3xl:max-w-[1600px]">
              <div className="hero-headline mb-2 will-change-transform max-md:text-6xl max-sm:mb-0 max-sm:text-2xl 3xl:mb-5">
                Unlock Your Business Potential with a{' '}
                <span className="text-primary-5">Free Strategy Session</span>
              </div>
            </h1>
            <p className="hero-description title-300 mb-content-2xl content-container max-w-[600px] text-left will-change-transform max-xl:max-w-[430px] max-lg:max-w-[510px] max-lg:text-center max-sm:max-w-[340px] 3xl:max-w-[820px]">
              Craft a unique website strategy that drives customers, boost
              sales, and elevate your online presence.{' '}
              <span className="bold">
                Book your free strategy session today!
              </span>
            </p>
          </div>
          {/* form */}
          <div className="content-container">
            <form
              action={formAction}
              method="POST"
              autoComplete="off"
              className="contact-form"
              id="lpv1-form"
              ref={formRef}
            >
              <div className="rounded-primary h-fit border-[1px] border-primary-7 bg-blue-100/10 px-9 py-12 backdrop-blur-[1.5px]">
                {submittedFormMessage && (
                  <Popup message={submittedFormMessage} type={state?.success} />
                )}
                <h2 className="title-100 mb-7 text-center !text-1">
                  Get Clarity On Your Marketing Now
                </h2>
                <input type="hidden" name="fullUrl" value={fullUrl} />
                <input
                  type="text"
                  name="firstName"
                  aria-required="true"
                  required
                  id="first-name"
                  placeholder="First Name"
                  aria-label="First Name"
                  title="Please input your first name"
                  className="title-200 rounded-primary mb-3 w-full border-2 border-grey-400 bg-[#1F2937]/[0.3] !py-4 pl-7 !text-xl text-invert-3 placeholder-grey-500 shadow-md shadow-black/30 max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:pl-6 max-sm:!text-base xl:py-6"
                />
                <input
                  type="email"
                  name="email"
                  aria-required="true"
                  required
                  id="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  title="Please input your email address"
                  className="title-200 rounded-primary mb-9 w-full border-2 border-grey-400 bg-[#1F2937]/[0.3] !py-4 pl-7 !text-xl text-invert-3 placeholder-grey-500 shadow-md shadow-black/30 max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:pl-6 max-sm:!text-base xl:py-6"
                />
                <div className="relative ">
                  {btnDisabled ? <DisabledSubmitButton /> : <SubmitButton />}
                </div>
                <div className="flex flex-row gap-2 text-primary-4">
                  <CheckCircleIcon className="h-8 w-8 flex-none" />
                  <p className="title-300 mb-3 text-2">
                    <span className="semibold">Spam free</span> - Your
                    information will only be used for setting up a meeting
                  </p>
                </div>
                <div className="flex flex-row gap-2 text-primary-4">
                  <CheckCircleIcon className="h-8 w-8 flex-none" />
                  <p className="title-300 text-2">
                    <span className="semibold">Within 4 Hours</span> - Response
                    Time
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
