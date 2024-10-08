'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { submitForm } from '@/app/action';
import { useFormState } from 'react-dom';

function Popup({
  message,
  type,
}: {
  message: string;
  type: boolean | undefined;
}) {
  return (
    <div
      className={`absolute z-50 rounded-full border px-10 py-2 text-lg text-white transition-all duration-500 ease-out max-md:-bottom-44 max-md:right-1/2 max-md:translate-x-1/2 max-md:text-nowrap max-md:text-center md:-top-16 md:right-8 ${type === true ? 'border-green-300 bg-gradient-to-br from-green-900 to-green-700 max-sm:w-4/5' : 'border-red-300 bg-gradient-to-br from-red-900 to-red-700 max-sm:w-4/5'}`}
    >
      {message}
    </div>
  );
}

export default function Contact({ header }) {
  const [state, formAction] = useFormState(submitForm, null);
  const [submittedFormMessage, setSubmittedFormMessage] = useState<
    string | null
  >(null);

  const contactSection = useRef();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (state) {
      setSubmittedFormMessage(state?.msg);
      setTimeout(() => {
        setSubmittedFormMessage(null);
      }, 5000);
    }
  }, [state]);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(min-width:640px)', () => {
        gsap.from('.header-content-contact', {
          scrollTrigger: {
            trigger: '.contact-container',
            scrub: true,
            start: '-20% 70%',
            end: '30% 70%',
          },
          duration: 0.9,
          x: -150,
          autoAlpha: 0,
        });
        gsap.from('.contact-form', {
          scrollTrigger: {
            trigger: '.contact-form',
            scrub: true,
            start: 'top 70%',
            end: '50% 70%',
          },
          duration: 0.9,
          opacity: 0,
        });
      });

      mm.add('(max-width:640px)', () => {
        gsap.from('.header-content-contact', {
          scrollTrigger: {
            trigger: '.contact-container',
            scrub: true,
            start: '-10% 70%',
            end: '20% 70%',
          },
          x: -20,
          duration: 0.9,
          autoAlpha: 0,
        });
        gsap.from('.contact-form', {
          scrollTrigger: {
            trigger: '.contact-container',
            start: '-10% 60%',
            end: '35% 60%',
          },
          duration: 0.9,
          opacity: 0,
        });
      });
    },
    { dependencies: [], scope: contactSection, revertOnUpdate: true },
  );

  return (
    <section
      className="section pt-section-2xl pb-section-sm relative z-30"
      ref={contactSection}
    >
      <div
        className="section-container contact-container pt-8"
        id="contact-home"
      >
        <div className=" mx-auto w-full">
          <div className="header-content-contact will-change-transform">
            <h2 className="heading-3 bold mb-content-sm content-container w-full max-w-[980px] 3xl:max-w-[1170px]">
              {header}
            </h2>
            <h3 className="mb-content-2xl sub-headers content-container mx-auto">
              Contact Us
            </h3>
          </div>

          <form action={formAction} autoComplete="off" className="contact-form">
            <div className="mb-content-lg grid h-fit w-full grid-cols-4 place-items-stretch">
              {/* LEFT INPUT FIELDS */}
              <div className="content-container mb-content-xl col-span-2 col-start-1 grid w-full grid-cols-1 gap-y-6 max-lg:gap-y-5 max-md:col-span-4 max-md:mb-6">
                <div className="col-span-2 flex flex-col">
                  <input
                    type="text"
                    aria-label="Full Name"
                    aria-required="true"
                    required
                    name="full-name"
                    id="fullName"
                    placeholder="Full Name"
                    className=" title-100 w-full rounded-secondary-desktop border-2 border-grey-500 bg-1  pl-7 !text-xl text-invert-3 placeholder-grey-500 max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:pl-6 max-sm:!text-base xl:py-6"
                  />
                </div>

                <div className="col-span-2 flex flex-col">
                  <input
                    type="text"
                    name="email"
                    aria-required="true"
                    required
                    aria-label="Email"
                    id="email"
                    placeholder="Email Address"
                    className="title-100 w-full rounded-secondary-desktop border-2  border-grey-500 bg-1 pl-7 !text-xl text-invert-3 placeholder-grey-500 max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:pl-6 max-sm:!text-base xl:py-6"
                  />
                </div>
                <div className="col-span-2 flex flex-col">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone-number"
                      aria-required="true"
                      required
                      id="phone-number"
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                      className="title-100 w-full rounded-secondary-desktop border-2 border-grey-500 bg-1 pl-7 !text-xl text-invert-3 placeholder-grey-500 max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:pl-6 max-sm:!text-base xl:py-6"
                    />
                  </div>
                </div>
                <div className="col-span-2 flex flex-col">
                  <div className="relative inset-y-0 left-0">
                    <select
                      id="budget"
                      name="budget"
                      aria-required="true"
                      required
                      aria-label="Budget"
                      className="title-100 w-full appearance-none  rounded-secondary-desktop border-2 border-grey-500 bg-1  pl-7 !text-xl !text-2 placeholder-grey-500 max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:pl-6 max-sm:!text-base xl:py-6"
                    >
                      <option value="" disabled>
                        Budget
                      </option>
                      <option value="1000">$1,000</option>
                      <option value="10000">$10,000</option>
                      <option value="100000">$100,000</option>
                    </select>
                    <ChevronDownIcon
                      className="pointer-events-none absolute right-9 top-0 h-full w-6 text-2 max-md:right-6 max-md:w-5"
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
                  required
                  placeholder="Write a message..."
                  rows={8}
                  className="title-100 h-full w-full resize-none rounded-secondary-desktop border-2 border-grey-500 bg-1  pl-7 !text-xl text-invert-3 placeholder-grey-500 max-xl:py-4 max-xl:!text-xl max-md:rounded-secondary-mobile max-md:pl-6 max-sm:!text-base xl:py-6"
                  defaultValue={''}
                />
              </div>

              <div className="content-container col-span-1 col-start-4 flex w-full justify-center max-lg:col-span-2 max-lg:col-start-3 max-md:col-span-4 max-md:col-start-1">
                <button
                  type="submit"
                  className="button-primary title-300 rounded-primary contact-submit-btn flex !w-full flex-row items-center justify-center gap-1 font-semibold max-2xl:!min-w-full max-md:!max-w-none max-md:gap-[10px] 3xl:max-w-none"
                  aria-label="Submit your message to us and we'll get back to you shortly!"
                  title="Submit and tell us about your business website ideas!"
                >
                  <span className="contact-submit-btn">Submit Message</span>
                  <ArrowRightIcon
                    className="contact-submit-btn h-4"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
