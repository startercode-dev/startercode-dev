'use client';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { submitForm } from '@/app/action';
import { useFormState, useFormStatus } from 'react-dom';

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

const ContactForm = () => {
  const [state, formAction] = useFormState(submitForm, null);
  const [submittedFormMessage, setSubmittedFormMessage] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (state) {
      setSubmittedFormMessage(state?.msg);
      setTimeout(() => {
        setSubmittedFormMessage(null);
      }, 5000);
    }
  }, [state]);

  return (
    <section className="section section-container pb-section-sm relative z-30 max-lg:pb-8 max-md:pb-20 max-sm:pb-8">
      <form
        action={formAction}
        method="POST"
        autoComplete="off"
        className="contact-form opacity-0"
      >
        <div className="mb-content-xl grid h-fit w-full grid-cols-4 place-items-stretch">
          {/* LEFT INPUT FIELDS */}
          <div className="content-container mb-content-xl col-span-2 col-start-1 grid w-full grid-cols-1 gap-y-6 max-lg:gap-y-5 max-md:col-span-4 max-md:mb-6">
            <div className="col-span-2 flex flex-col">
              <input
                type="text"
                aria-label="Full Name"
                aria-required="true"
                name="full-name"
                id="full-name"
                placeholder="Full Name"
                required
                className=" title-100 w-full rounded-secondary-desktop border-2 border-grey-500 bg-[rgba(31,41,55,0.3)] px-7 !text-xl text-invert-3 placeholder-grey-500 backdrop-blur-sm max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:px-6 max-sm:!text-base xl:py-6"
              />
            </div>

            <div className="col-span-2 flex flex-col">
              <input
                type="text"
                name="email"
                aria-label="Email"
                aria-required="true"
                id="email"
                placeholder="Email Address"
                required
                className="title-100 w-full rounded-secondary-desktop border-2 border-grey-500 bg-[rgba(31,41,55,0.3)] px-7  !text-xl text-invert-3 placeholder-grey-500 shadow-2xl backdrop-blur-sm max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:px-6 max-sm:!text-base xl:py-6"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="relative">
                <input
                  type="tel"
                  name="phone-number"
                  aria-required="true"
                  id="phone-number"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  required
                  className="title-100 w-full rounded-secondary-desktop border-2 border-grey-500 bg-[rgba(31,41,55,0.3)] px-7 !text-xl text-invert-3 placeholder-grey-500 backdrop-blur-sm max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:px-6 max-sm:!text-base xl:py-6"
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="relative inset-y-0 left-0">
                <select
                  id="budget"
                  name="budget"
                  aria-label="Budget"
                  aria-required="true"
                  className="title-100 w-full appearance-none rounded-secondary-desktop  border-2 border-grey-500 bg-[rgba(31,41,55,0.3)]  px-7  !text-xl !text-2 placeholder-grey-500 backdrop-blur-sm max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:px-6 max-sm:!text-base xl:py-6"
                  required
                >
                  <option disabled selected className="">
                    Budget
                  </option>
                  <option value="1000">$1,000</option>
                  <option value="10000">$10,000</option>
                  <option value="100000">$100,000</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-9 top-0 h-full w-8 text-3 max-md:right-6 max-md:w-5"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* RIGHT INPUT MESSAGE  */}
          <div className="content-container mb-content-xl relative col-span-2 col-start-3 flex w-full flex-col max-md:col-span-4 max-md:ml-0 md:row-span-full">
            {submittedFormMessage && (
              <Popup message={submittedFormMessage} type={state?.success} />
            )}
            <textarea
              name="message"
              id="message"
              aria-label="Message"
              aria-required="true"
              placeholder="Write a message..."
              rows={8}
              className="title-100 h-full w-full resize-none rounded-secondary-desktop border-2 border-grey-500 bg-[rgba(31,41,55,0.3)] px-7 !text-xl  text-invert-3  placeholder-grey-500 shadow-2xl backdrop-blur-sm max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:px-6 max-sm:!text-base xl:py-6"
              defaultValue={''}
              required
            />
          </div>

          <div className="content-container col-span-1 col-start-4 flex w-full justify-center max-lg:col-span-2 max-lg:col-start-3 max-md:col-span-4 max-md:col-start-1">
            <SubmitButton />
          </div>
        </div>
      </form>
    </section>
  );
};

const SubmitButton = () => {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className="button-primary title-300 rounded-primary contact-submit-btn flex !w-full flex-row items-center justify-center gap-1 font-semibold max-2xl:!min-w-full max-md:!max-w-none max-md:gap-[10px] 3xl:max-w-none"
      aria-label="Submit your message to us and we'll get back to you shortly!"
      title="Submit and tell us about your business website ideas!"
      disabled={status.pending}
    >
      <span className="contact-submit-btn font-medium">Submit Message</span>
      <ArrowRightIcon className="contact-submit-btn h-4" aria-hidden="true" />
    </button>
  );
};
export default ContactForm;
