'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import React, { useRef, useState, Suspense } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// import Spline from '@splinetool/react-spline';
// const Spline = dynamic(() => import('@/components/Spline-icons/Icon1Animate'));

const Icon1Animate = dynamic(
  () => import('@/components/Spline-icons/Icon1Animate'),
);
const Icon2Animate = dynamic(
  () => import('@/components/Spline-icons/Icon2Animate'),
);
const Icon3Animate = dynamic(
  () => import('@/components/Spline-icons/Icon3Animate'),
);

export default function Process() {
  const processSection = useRef();

  // const [icon1Loaded, setIcon1loaded] = useState(false);
  // const [icon2Loaded, setIcon2loaded] = useState(false);
  // const [icon3Loaded, setIcon3loaded] = useState(false);

  useGSAP(
    () => {
      gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);
      let mm = gsap.matchMedia();

      // ESTABLISH WHETHER THE DEVICE IS TABLET
      const userAgent = navigator.userAgent.toLowerCase();
      const isTablet =
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
          userAgent,
        );

      gsap.to('.burst-pattern', {
        duration: 15,
        rotation: '360',
        ease: 'none',
        repeat: -1,
      });

      mm.add('(min-width:1367px)', () => {
        // STICKY HEADER BOX
        gsap.from('.content-header', {
          scrollTrigger: {
            trigger: '.content-animation-box',
            scrub: true,
            pin: '.content-header',
            start: 'top top',
            end: '125% bottom',
          },
          duration: 0.9,
        });
        // HEADING ANIMATION
        gsap.from('.header-content', {
          scrollTrigger: {
            trigger: '.header-content-container',
            scrub: true,
            pin: '.header-content',
            start: 'top top',
            end: 'bottom bottom',
          },
        });
      });

      mm.add('(min-width:1024px)', () => {
        // LINE ANIMATION - DESKTOP
        const lineAnimation1 = gsap
          .timeline({
            scrollTrigger: {
              trigger: '.process-line-1-box',
              scrub: true,
              start: '-20% center',
              end: '140% center',
            },
          })
          .from('.process-line-1', { drawSVG: 0, duration: 5 });
        const lineAnimation2 = gsap
          .timeline({
            scrollTrigger: {
              trigger: '.process-line-2-box',
              scrub: true,
              start: 'top center',
              end: '120% center',
            },
          })
          .from('.process-line-2', { drawSVG: 0, duration: 5 });
        // SPINNING PATTERN ANIMATION
        gsap.to('.burst-pattern-2', {
          duration: 7.5,
          rotation: '360',
          ease: 'none',
          repeat: -1,
        });
      });
      // LINE ANIMATION - TABLET
      mm.add('(min-width:640px)', () => {
        const lineAnimationM1 = gsap
          .timeline({
            scrollTrigger: {
              trigger: '.process-line-mobile-1-box',
              scrub: true,
              start: '-20% center',
              end: '140% center',
            },
          })
          .from('.process-line-mobile-1', { drawSVG: 0, duration: 5 });
        const lineAnimationM2 = gsap
          .timeline({
            scrollTrigger: {
              trigger: '.process-line-mobile-2-box',
              scrub: true,
              start: 'top center',
              end: '100% center',
            },
          })
          .from('.process-line-mobile-2', { drawSVG: 0, duration: 5 });
      });
      // SLIDING ANIMATION FOR EACH PROCESS - LARGER SCREEN SIZE
      mm.add('(min-width:1024px)', () => {
        gsap.from('.process-1', {
          scrollTrigger: {
            trigger: '.process-1',
            scrub: true,
            start: '20% 70%',
            end: '50% 70%',
          },
          opacity: 0,
          x: -100,
        });
        gsap.from('.process-2', {
          scrollTrigger: {
            trigger: '.process-2',
            scrub: true,
            start: '20% 70%',
            end: '50% 70%',
          },
          opacity: 0,
          x: -100,
        });
        gsap.from('.process-3', {
          scrollTrigger: {
            trigger: '.process-3',
            scrub: true,
            start: '20% 70%',
            end: '50% 70%',
          },
          opacity: 0,
          x: -100,
        });
      });
    },
    { dependencies: [], scope: processSection, revertOnUpdate: true },
  );

  return (
    <div
      className="feature-animation-scope"
      ref={processSection}
      id="process-home"
    >
      <section className="section ">
        <div className="section-container relative z-30">
          {/* 3xl - PROCESS HEADER HEIGHT : 150svh */}
          {/* DESKTOP - PROCESS HEADER HEIGHT : 160svh */}
          {/* MOBILE - PROCESS HEADER HEIGHT : 150svh */}
          <div className="header-content-container relative h-[160svh] max-[1367px]:h-fit max-sm:h-[150svh] 3xl:h-[150svh]">
            <div className="header-content sticky top-0 flex h-svh flex-col justify-center will-change-transform max-[1367px]:h-fit max-[1367px]:pb-[calc(30svh)] max-sm:h-svh max-sm:pb-0">
              <div className="grid grid-cols-4 ">
                <h2 className="heading-2 content-container mb-content-lg col-span-3 max-w-[1131px] text-1 max-[1378px]:col-span-4 max-[1000px]:text-5xl max-sm:mx-auto max-sm:max-w-lg max-sm:text-center max-sm:text-2xl 3xl:max-w-[1310px]">
                  Your Business Isn’t Generic, Your Website Shouldn’t Be Either
                </h2>
                <div className="relative col-start-4 w-full max-[1378px]:hidden">
                  <Image
                    className="burst-pattern-2 absolute left-1/2 top-20 -translate-x-1/2 min-[1378px]:will-change-transform 3xl:w-[240px]"
                    width={150}
                    height={150}
                    src="/home_process_burst-pattern-2.svg"
                    alt="feature pattern"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 max-lg:flex max-lg:flex-col">
                <p className="title-200 content-container col-span-3 max-w-[900px] max-sm:mx-auto max-sm:max-w-lg max-sm:text-center 3xl:max-w-[1080px]">
                  We develop websites based on your objectives, audience trends,
                  and actual business results. Whether it’s a custom feature,
                  interactive UI, or just a smarter flow, we build experiences
                  that feel purposeful from the first click.
                </p>

                <div className="relative col-start-4 mb-56 max-lg:mb-36 max-lg:grid max-lg:grid-cols-4 max-sm:block 3xl:mb-72">
                  <Image
                    className="burst-pattern absolute -top-12 left-0 -translate-x-1/2 will-change-transform max-[1378px]:-top-0 max-[1378px]:left-1/2 max-[1378px]:w-11/12 max-[1378px]:-translate-x-1/2 max-lg:col-start-4 max-sm:top-5 max-sm:w-36 3xl:w-[360px]"
                    width={261}
                    height={261}
                    src="/home_process_burst-pattern.svg"
                    alt="feature pattern"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="content-box relative w-full">
            <div className="content-animation-box absolute h-full w-full">
              <div className="content-container content-header sticky top-5 z-40 flex w-full max-sm:top-2 max-sm:mb-36">
                <div className="subheader rounded-secondary mx-auto inline-block bg-white/10 px-10 py-4 backdrop-blur-3xl max-sm:px-3 max-sm:py-3">
                  <h3 className="heading-6 bold text-accent-3 max-sm:text-center">
                    Our Design and Development Process
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div
                className="process-section-1 max-sm:flex max-sm:h-[calc(667px+72px)] max-sm:items-center"
                id="process-section-1"
              >
                <div className="process-1 top-0 flex h-[982px] w-full flex-col justify-center max-sm:h-[calc(667px+72px)] 3xl:h-[1080px]">
                  <div className="mb-4 grid h-fit grid-cols-4 place-items-center max-xl:block">
                    {/* GRID CONTAINER IS SHIFTED DOWNWARD ON RESPONSIVE TO AVOID RELOADING SPLINE */}
                    <div className="w-full max-xl:grid max-xl:grid-cols-4 lg:col-start-1 lg:col-end-4">
                      <div className="headline content-container max-xl:col-start-1 max-xl:col-end-5 max-sm:flex max-sm:flex-col">
                        <span className="title-100 mx-auto text-2 max-sm:mb-3">
                          01
                        </span>
                        <h4 className="heading-1 bold max-w-[998px] max-xl:max-w-full max-[1000px]:text-7xl max-[780px]:text-6xl max-sm:mx-auto max-sm:max-w-sm max-sm:text-center max-sm:text-2xl 3xl:max-w-[1200px]">
                          Start with a Strategic Plan
                        </h4>
                      </div>
                    </div>
                    {/* MOBILE PROCESS 1 DESCRIPTION  */}
                    <div className="mt-4 hidden grid-cols-4 max-xl:grid max-sm:block">
                      <p className="title-300 content-container relative col-span-3 col-start-2 max-sm:mx-auto max-sm:max-w-md max-sm:pb-10 max-sm:text-center">
                        We begin with a conversation about your business goals,
                        brand identity, and audience needs. This helps us build
                        a strategic web design and development plan that aligns
                        with your vision.{' '}
                      </p>
                    </div>
                    <div className="relative hidden h-4 w-full max-xl:block max-sm:hidden">
                      {/* MOBILE PROCESS 1 LINE  */}
                      <div className="process-line-mobile-1-box absolute left-1/2 top-0 -translate-x-1/2">
                        <svg
                          width="884"
                          height="741"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="process-line-mobile-1-svg z-0 origin-top max-xl:scale-x-[0.85] max-xl:scale-y-[.95] max-[1000px]:scale-y-[1] max-[805px]:scale-y-[0.95] max-[670px]:scale-y-[0.90]"
                        >
                          <path
                            className="process-line-mobile-1"
                            d="M440.4999 4.5C-349.5 650.5 900.5 400.5 690 735.5"
                            stroke="#CA8A04"
                            stroke-opacity="0.9"
                            stroke-width="8"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="relative h-[260px] w-full max-xl:grid max-xl:min-h-[221px] max-xl:grid-cols-4 max-sm:block max-sm:h-[200px]">
                      <Icon1Animate />
                      {/* <div className={`absolute h-full w-full`}>
                        <Image
                          className="h-full scale-[0.78] object-contain"
                          src="/home_process_1.png"
                          alt="Consult and Create your custom plan"
                          aria-hidden="true"
                          width={512}
                          height={740}
                        ></Image>
                      </div> */}
                      {/* <Suspense>
                        <Spline
                          className="process-1-spline col-start-4 place-self-center max-[900px]:col-span-2 max-[900px]:col-start-3 max-[900px]:col-end-5 max-sm:scale-[0.9] 3xl:scale-[1.3]"
                          aria-hidden="true"
                          scene="https://prod.spline.design/eAOz7dPhtiZfSadp/scene.splinecode"
                          onLoad={() => {
                            setIcon1loaded(() => true);
                          }}
                        />
                      </Suspense> */}
                    </div>
                  </div>
                  {/* DESKTOP PROCESS 1 LINE  */}
                  <div className="relative max-xl:hidden">
                    <div className="process-line-1-box absolute left-1/2 top-0 -translate-x-1/2">
                      <svg
                        width="884"
                        height="741"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="process-line-1-svg relative z-0 origin-top max-[1342px]:scale-y-[0.92] 3xl:scale-x-[1.2] 3xl:scale-y-[1.03]"
                      >
                        <path
                          className="process-line-1"
                          d="M77.4999 4.5C-349.5 654.5 1225.5 255.5 805 728.5"
                          stroke="#CA8A04"
                          stroke-opacity="0.9"
                          stroke-width="8"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* DESKTOP PROCESS 1 DESCRIPTION  */}
                  <div className="mt-4 grid grid-cols-4 max-xl:hidden">
                    <p className="title-300 content-container relative col-span-2 col-start-3">
                      We begin with a conversation about your business goals,
                      brand identity, and audience needs. This helps us build a
                      strategic web design and development plan that aligns with
                      your vision.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="process-section-2 max-sm:flex max-sm:h-[667px] max-sm:items-center">
                <div className="process-2 relative top-0 flex h-[982px] w-full flex-col justify-center max-sm:h-[667px] 3xl:h-[1080px]">
                  <div className="mb-16 grid grid-cols-4 max-xl:mb-0 max-xl:grid-rows-3 max-sm:flex max-sm:flex-col">
                    <div className="relative col-start-1 col-end-2 h-full w-full place-self-center max-xl:row-span-1 max-xl:row-start-3 max-xl:min-h-[200px] max-[900px]:col-span-2 max-[900px]:col-start-3 max-[900px]:col-end-5 max-sm:order-2">
                      <Icon2Animate />
                      {/* <div className={`absolute h-full w-full`}>
                        <Image
                          className="h-full translate-y-7 scale-[0.65] object-contain"
                          src="/home_process_2.png"
                          alt="Consult and Create your custom plan"
                          aria-hidden="true"
                          width={512}
                          height={426}
                        ></Image>
                      </div> */}
                      {/* <Suspense>
                        <Spline
                          className="process-2-spline absolute top-10 origin-center max-sm:top-0 max-sm:scale-[0.8] 3xl:scale-[1.3]"
                          aria-hidden="true"
                          scene="https://prod.spline.design/DcWko0R9IONSk7VW/scene.splinecode"
                          onLoad={() => {
                            setIcon2loaded(() => true);
                          }}
                        />
                      </Suspense> */}
                    </div>
                    <div className="headline content-container col-start-2 col-end-5 grid place-items-end max-xl:col-start-1 max-xl:row-span-2 max-xl:row-start-1 max-sm:flex max-sm:flex-col">
                      <span className="title-100 text-2 max-sm:mx-auto max-sm:mb-3">
                        02
                      </span>
                      <h4 className="heading-1 bold max-w-[782px] max-xl:mb-8 max-[1000px]:text-7xl max-[780px]:text-6xl max-sm:mx-auto max-sm:mb-4 max-sm:max-w-sm max-sm:text-center max-sm:text-2xl 3xl:max-w-[1045px]">
                        High Impact UI/UX Design
                      </h4>
                      {/* MOBILE PROCESS 2 DESCRIPTION  */}
                      <div className="hidden grid-cols-4 max-xl:grid max-sm:mx-auto max-sm:block">
                        <p className="title-300 content-container col-span-3 col-start-2 max-sm:max-w-md max-sm:pb-10 max-sm:text-center">
                          Our team creates smooth user experiences and user
                          interfaces that are easy to use for your target
                          demographic. Using modern UI/UX principles and
                          responsive design best practices, every layout,
                          interaction, and element is created to represent your
                          brand.
                        </p>
                      </div>
                      {/* MOBILE PROCESS 2 LINE  */}
                      <div className="relative hidden w-full max-xl:block max-sm:hidden">
                        <div className="process-line-mobile-2-box absolute left-1/2 top-0 -translate-x-1/2">
                          <svg
                            width="747"
                            height="650"
                            viewBox="0 0 747 650"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="process-line-mobile-2-svg z-0 origin-top max-[1000px]:scale-y-[1.05] max-[689px]:scale-x-[0.80]"
                          >
                            <path
                              className="process-line-mobile-2"
                              d="M368.921 10C185.4213 280.5 150.0788 500 140 590"
                              stroke="#CA8A04"
                              stroke-opacity="0.9"
                              stroke-width="8"
                              stroke-linecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* DESKTOP PROCESS 2 DESCRIPTION  */}
                  <div className="grid grid-cols-4 max-xl:hidden">
                    <p className="title-300 content-container col-span-2 col-start-2">
                      Our team creates smooth user experiences and user
                      interfaces that are easy to use for your target
                      demographic. Using modern UI/UX principles and responsive
                      design best practices, every layout, interaction, and
                      element is created to represent your brand.
                    </p>
                  </div>
                  {/* DESKTOP PROCESS 2 LINE  */}
                  <div className="relative max-xl:hidden">
                    <div className="process-line-2-box absolute left-1/2 top-0 -translate-x-1/2">
                      <svg
                        width="747"
                        height="575"
                        viewBox="0 0 747 575"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="process-line-2-svg z-0 origin-top 3xl:-translate-y-10 3xl:scale-x-[1.2]"
                        aria-hidden="true"
                      >
                        <path
                          className="process-line-2"
                          d="M368.921 10C85.4213 245.5 -25.0788 426 11.921 500"
                          stroke="#CA8A04"
                          stroke-opacity="0.9"
                          stroke-width="8"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="process-section-3 max-sm:flex max-sm:h-[667px] max-sm:items-center">
                <div className="process-3 top-0 flex h-[982px] w-full flex-col justify-center max-sm:h-[667px] 3xl:h-[1080px]">
                  <span className="title-100 content-container text-right text-2 max-xl:text-left max-sm:mb-3 max-sm:text-center">
                    03
                  </span>
                  <div className="mb-10 grid w-full grid-cols-4 max-sm:mb-4">
                    <h4 className="heading-1 bold content-container col-span-3 col-start-1 max-w-[915px] max-xl:col-span-4 max-xl:max-w-none max-[1000px]:text-7xl max-[780px]:text-6xl max-sm:mx-auto max-sm:max-w-sm max-sm:text-center max-sm:text-2xl 3xl:max-w-[1300px]">
                      Develop, Refine, and Launch
                    </h4>
                  </div>
                  <div className="max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-4">
                    {/* GRID CONTAINER IS SHIFTED DOWNWARD ON RESPONSIVE TO AVOID RELOADING SPLINE */}
                    <div className="max-xl:min-h-[221px] max-lg:order-2 max-lg:grid max-lg:grid-cols-4 max-sm:block max-sm:h-[180px] lg:col-start-2 lg:row-start-2">
                      <div className="relative h-[180px] max-h-[221px] max-lg:col-span-1 max-lg:col-start-3 max-[900px]:col-span-2 max-[900px]:col-start-3 max-[900px]:col-end-5 max-sm:h-[180px]">
                        <Icon3Animate />
                        {/* <div className={`absolute h-full w-full`}>
                          <Image
                            className="h-full -translate-x-5 translate-y-2 scale-[0.90] object-contain"
                            src="/home_process_3.png"
                            alt="Consult and Create your custom plan"
                            aria-hidden="true"
                            width={512}
                            height={509}
                          ></Image>
                        </div> */}
                        {/* <Suspense>
                          <Spline
                            className="process-3-spline place-self-center max-lg:translate-x-5 max-sm:h-[180px] max-sm:scale-[0.9] 3xl:scale-[1.3]"
                            aria-hidden="true"
                            scene="https://prod.spline.design/MZmLoU9Y9qaJgNT0/scene.splinecode"
                            onLoad={() => {
                              setIcon3loaded(() => true);
                            }}
                          />
                        </Suspense> */}
                      </div>
                    </div>
                    <div className="relative col-span-2 col-start-3 h-full w-full max-lg:order-1 max-lg:mb-0 max-lg:grid max-lg:grid-cols-4 max-sm:block lg:row-span-1">
                      <div className="max-lg:col-span-3 max-lg:col-start-1 max-lg:row-span-1 ">
                        <p className="title-300 content-container max-sm:mx-auto max-sm:max-w-sm max-sm:pb-10 max-sm:text-center">
                          We follow mobile-first development practices and the
                          latest standards to build clean, scalable websites.
                          Before launch, we polish every element together,
                          ensuring fast load times, full responsiveness across
                          devices, and flawless performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
