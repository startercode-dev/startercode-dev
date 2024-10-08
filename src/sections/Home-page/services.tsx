'use client';

import { ArrowRightIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense, useState, useRef, useEffect, lazy } from 'react';

import Spline from '@splinetool/react-spline';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Animate3dCubes = lazy(() => import('@/components/Spline-icons/3dCubes'));

const serviceDetails = [
  {
    name: 'Web design services for small business',
    description:
      'Our small business web design service is tailored to help you establish strong online presence. We are committed to high-quality solutions that drive growth and results. Let us turn your vision into reality.',
    href: '/small-business-web-design',
    link: 'Learn More About This',
    linkDisabled: false,
    label: 'Navigates to page on web design services for small business',
    title: 'Learn more about our web design services for small business',
    icon: <ArrowRightIcon className="h-4 fill-primary-5" />,
  },
  {
    name: 'Custom design and software development services',
    description:
      'Our web design and custom software development services focus on meeting specific needs of your business.  Whether it’s one off applications, or design projects, we are here make your vision come true.  Leverage our team of experts to accelerate your business goals',
    href: '/',
    link: 'Coming Soon',
    linkDisabled: true,
    label:
      'Navigates to page on custom design and software development services',
    title:
      'Learn more about our custom design and software development services',
    icon: '',
  },
];

export default function Features() {
  const serviceSection = useRef();
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const serviceFocusChange = () => {
      if (activeService == 0) {
        setActiveService(() => 1);
      }
      if (activeService == 1) {
        setActiveService(() => 0);
      }
    };

    // Set up the interval
    const intervalId = setInterval(serviceFocusChange, 300000); // 5 minutes

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [activeService]);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      gsap.registerPlugin(useGSAP, ScrollTrigger);

      // ESTABLISH WHETHER THE DEVICE IS TABLET
      // const userAgent = navigator.userAgent.toLowerCase();
      // const isTablet =
      //   /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      //     userAgent,
      //   );

      mm.add('(min-width:1367px)', () => {
        gsap.from('.body-content-box', {
          scrollTrigger: {
            trigger: '.body-container',
            scrub: true,
            pin: '.body-content-box',
            start: 'top top',
            end: 'bottom bottom',
          },
        });
      });

      mm.add('(max-width:640px)', () => {
        gsap.from('.content-services', {
          scrollTrigger: {
            trigger: '.content-services',
            scrub: true,
            start: '-15% 60%',
            end: '25% 60%',
          },
          duration: 0.9,
          opacity: 0,
        });
      });

      mm.add('(min-width:640px)', () => {
        gsap.from('.service-header-content', {
          scrollTrigger: {
            trigger: '.content-services',
            scrub: true,
            start: '-20% 70%',
            end: '30% 70%',
          },
          x: -100,
          autoAlpha: 0,
        });
        gsap.from('.inner-content', {
          scrollTrigger: {
            trigger: '.body-content',
            scrub: true,
            start: 'top 70%',
            end: '35% 70%',
          },
          duration: 0.9,
          opacity: 0,
        });
      });

      // CHANGING ACTIVE SERVICES BASED ON SCROLL
      mm.add('(min-width:780px)', () => {
        gsap.from('.body-container', {
          scrollTrigger: {
            trigger: '.marker',
            scrub: true,
            start: 'top 50%',
            end: 'bottom bottom',
            onEnter: () => {
              setActiveService((prev) => 1);
            },
            onEnterBack: () => {
              setActiveService((prev) => 0);
            },
          },
        });
      });
    },
    { dependencies: [], scope: serviceSection, revertOnUpdate: true },
  );

  return (
    <section
      className="section pt-section-md pb-section-md relative z-30 max-lg:-mb-[100px] max-[780px]:mb-0 max-sm:mt-10 max-sm:!pb-0 3xl:-mt-[100px] 3xl:p-0"
      ref={serviceSection}
    >
      <div className="section-container content-services">
        {/* HEADER HEIGHT SPACING */}
        <div
          className="header-content flex w-full flex-col opacity-0"
          id="services-home"
        >
          <span className="heading-2 bold mb-content-md mx-auto max-w-6xl text-center max-lg:text-6xl max-sm:text-left max-sm:text-2xl 3xl:max-w-[1500px]">
            Accelerate your business with a focused web strategy
          </span>
          <span className="title-300 mx-auto mb-20 max-w-[604px] text-center max-lg:mb-24 max-sm:mb-8 max-sm:text-left 3xl:max-w-[750px]">
            Unlock your online potential with our years of expertise and build
            unique web solutions catered to your business needs.
          </span>
        </div>
        <div className="body-container relative h-[150svh] max-[1367px]:h-fit max-[780px]:h-fit">
          <div className="marker absolute top-1/2 h-1 w-full "></div>
          <div className="body-content-box top sticky top-0 flex  h-svh items-center max-[780px]:h-fit">
            <div className="body-content h-fit w-full ">
              {/* HEADER  */}
              <div className="relative w-full ">
                <div className="content-container service-header-content absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 flex-col">
                  <h2 className="heading-2 bold mb-content-md mx-auto max-w-6xl text-center max-lg:text-6xl max-sm:text-left max-sm:text-2xl 3xl:max-w-[1500px]">
                    Accelerate your business with a focused web strategy
                  </h2>
                  <p className="title-300 mx-auto mb-20 max-w-[604px] text-center max-lg:mb-24 max-sm:mb-8 max-sm:text-left 3xl:max-w-[750px]">
                    Unlock your online potential with our years of expertise and
                    build unique web solutions catered to your business needs.
                  </p>
                </div>
              </div>
              {/* CONTENT  */}
              <div className="inner-content my-8 grid h-[639px] w-full grid-cols-2 max-lg:flex max-lg:h-fit max-lg:flex-col max-sm:my-3 max-sm:flex max-sm:flex-col max-sm:gap-4">
                <div className="content-container col-span-1 flex flex-col justify-center ">
                  <h3 className="sub-headers mb-content-lg max-sm:mb-6">
                    Our Services
                  </h3>
                  <ul className="flex flex-col gap-10 max-sm:gap-2">
                    {serviceDetails.map((service, i) => {
                      const serviceLink = service.linkDisabled ? (
                        <span className="semibold title-300 inline-flex cursor-default !text-primary-8">
                          {service.link}
                        </span>
                      ) : (
                        <Link
                          className="small-business-link inline-flex flex-row items-center gap-2"
                          href={service.href}
                          aria-label={service.label}
                          title={service.title}
                          tabIndex={service.linkDisabled ? -1 : 0}
                        >
                          <span className="semibold title-300 !text-primary-5">
                            {service.link}
                          </span>
                          {service.icon}
                        </Link>
                      );

                      return (
                        <li
                          className="flex flex-row gap-9 max-sm:gap-5"
                          key={i}
                        >
                          <div
                            className={clsx(
                              'w-1 flex-none transition-colors duration-700 ease-in-out',
                              {
                                'bg-primary-7': i !== activeService,
                                'bg-primary-5': i == activeService,
                              },
                            )}
                          ></div>
                          <div className="my-3 w-full">
                            <button
                              className="relative flex w-full flex-row"
                              aria-expanded="true"
                              onClick={() => {
                                setActiveService(() => i);
                              }}
                              onFocus={() => {
                                setActiveService(() => i);
                              }}
                            >
                              <h4
                                className={clsx(
                                  'mb-content-md heading-4 mb-[1.5vw] w-10/12 cursor-pointer text-left',
                                  {
                                    '!text-3': i !== activeService,
                                  },
                                )}
                              >
                                {service.name}
                              </h4>
                              <PlusIcon
                                className={clsx(
                                  'absolute right-0 top-4 h-7 w-7 text-1 transition-colors duration-700 ease-in-out will-change-transform max-sm:top-0',
                                  {
                                    'opacity-100': i == activeService,
                                    'opacity-0': i !== activeService,
                                  },
                                )}
                              />
                              <MinusIcon
                                className={clsx(
                                  'absolute right-0 top-4 h-7 w-7 text-3 transition-colors duration-700 ease-in-out will-change-transform max-sm:top-0',
                                  {
                                    'opacity-0': i == activeService,
                                    'opacity-100': i !== activeService,
                                  },
                                )}
                              />
                            </button>

                            <div
                              className={clsx(
                                'grid grid-rows-0fr transition-all duration-700 ease-in-out will-change-transform',
                                {
                                  'grid-rows-0fr opacity-0':
                                    i !== activeService,
                                  'opacity-1 grid-rows-1fr': i == activeService,
                                },
                              )}
                            >
                              <div className="overflow-hidden p-2">
                                <p
                                  className={clsx(
                                    'mb-content-md base-100 mb-[1.5vw] max-w-xl',
                                    {
                                      '!text-2': i == activeService,
                                      '!text-3': i !== activeService,
                                    },
                                  )}
                                >
                                  {service.description}
                                </p>
                                {serviceLink}
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="content-container relative col-span-1 flex w-full items-center justify-center overflow-hidden max-sm:h-[550px] max-[468px]:h-[450px]">
                  <div className="content-container w-full max-sm:absolute max-sm:top-0 max-sm:p-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2">
                    <Image
                      className={clsx(
                        'mx-auto w-full translate-x-1 transition-opacity duration-700 ease-in-out will-change-transform max-lg:scale-[0.8] max-sm:mt-6 max-sm:translate-x-0 max-sm:scale-[0.93]',
                        {
                          'opacity-0': activeService !== 0,
                        },
                      )}
                      width={668}
                      height={639}
                      src="/home_service_img-1.svg"
                      alt="feature pattern"
                      aria-hidden="true"
                    />
                  </div>
                  <Animate3dCubes activeService={activeService} />
                  {/* <Suspense>
                    <Spline
                      className={clsx(
                        'absolute flex items-center justify-center !overflow-visible transition-opacity duration-1000 ease-in-out max-lg:w-10/12 max-lg:scale-[1] max-sm:top-0 max-sm:w-full max-sm:scale-[0.9] max-[468px]:scale-[0.6] 3xl:scale-[1.3]',
                        {
                          'opacity-0': activeService !== 1,
                        },
                      )}
                      scene="https://prod.spline.design/zd4ZWxuLQJ2Sb0Z3/scene.splinecode"
                    />
                  </Suspense> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
