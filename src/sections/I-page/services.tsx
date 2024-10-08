import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import Image from 'next/image';

function MobileVectorLine() {
  return (
    <div className="col-span-4 row-span-1 h-fit sm:hidden">
      <svg
        className="service-line-mobile mx-auto -translate-x-px"
        width="100"
        height="37"
        viewBox="0 0 100 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_10509_917)">
          <g filter="url(#filter0_f_10509_917)">
            <line
              x1="51"
              y1="0.507324"
              x2="51"
              y2="36.5073"
              stroke="#A5A5EF"
              stroke-width="2"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_10509_917"
            x="48"
            y="-1.49268"
            width="6"
            height="40"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_10509_917"
            />
          </filter>
          <clipPath id="clip0_10509_917">
            <rect
              width="100"
              height="36"
              fill="white"
              transform="translate(0 0.507324)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Services() {
  const servicesSection = useRef();

  gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // HEADER ANIMATION
      mm.add('(min-width:640px)', () => {
        gsap.from('.service-header', {
          scrollTrigger: {
            trigger: '.service-header',
            scrub: true,
            start: '-100% 70%',
            end: '80% 70%',
          },
          x: -100,
          autoAlpha: 0,
        });
        gsap.from('.service-subheader', {
          scrollTrigger: {
            trigger: '.service-header',
            scrub: true,
            start: '-100% 70%',
            end: '80% 70%',
          },
          autoAlpha: 0,
        });
      });
      mm.add('(max-width:640px)', () => {
        gsap.from('.service-headers', {
          scrollTrigger: {
            trigger: '.service-headers',
            scrub: true,
            start: '-100% 50%',
            end: '80% 50%',
          },
          x: -20,
          autoAlpha: 0,
        });
      });

      mm.add('(min-width:640px)', () => {
        // SERVICE PANEL ANIMATION
        gsap.from('.service-panel-1', {
          scrollTrigger: {
            trigger: '.service-panel-1',
            scrub: true,
            start: '-20% 50%',
            end: '40% 50%',
          },
          autoAlpha: 0,
          ease: 'linear',
        });
        gsap.from('.service-panel-2', {
          scrollTrigger: {
            trigger: '.service-panel-2',
            scrub: true,
            start: '-176px 50%',
            end: '49% 50%',
          },
          autoAlpha: 0,
          ease: 'linear',
        });
        gsap.from('.service-panel-3', {
          scrollTrigger: {
            trigger: '.service-panel-3',
            scrub: true,
            start: '-20% 50%',
            end: '50% 50%',
          },
          autoAlpha: 0,
          ease: 'linear',
        });
        gsap.from('.service-panel-4', {
          scrollTrigger: {
            trigger: '.service-panel-4',
            scrub: true,
            start: '-20% 50%',
            end: '50% 50%',
          },
          autoAlpha: 0,
          ease: 'linear',
        });
        gsap.from('.service-panel-5', {
          scrollTrigger: {
            trigger: '.service-panel-5',
            scrub: true,
            start: '10% 50%',
            end: '40% 50%',
          },
          autoAlpha: 0,
          ease: 'linear',
        });
      });

      mm.add('(max-width:640px)', () => {
        //SMALL SCREEN LINE ANIMATION
        const serviceMobileLines = gsap.utils.toArray('.service-line-mobile');
        const servicePanels = gsap.utils.toArray('.service-panel');

        serviceMobileLines.forEach((line) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: line,
                start: '-20% center',
                end: '200% center',
              },
            })
            .from(line, { duration: 0.5, autoAlpha: 0 });
        });

        servicePanels.forEach((panel) => {
          gsap.from(panel, {
            scrollTrigger: {
              trigger: panel,
              // scrub: true,
              start: '10% 50%',
              end: '40% 50%',
            },
            autoAlpha: 0,
            ease: 'linear',
          });
        });
      });

      mm.add('(min-width:640px)', () => {
        //MID-LARGE SCREEN LINE ANIMATION
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.service-line-1',
              scrub: true,
              start: '-20% center',
              end: '200% center',
            },
          })
          .from('.service-line-1', { drawSVG: 0, duration: 5 });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.service-line-2',
              scrub: true,
              start: '-20% center',
              end: '300% center',
            },
          })
          .from('.service-line-2', { drawSVG: 0, duration: 5 });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.service-line-3',
              scrub: true,
              start: '-20% center',
              end: '350% center',
            },
          })
          .from('.service-line-3', { drawSVG: 0, duration: 5 });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.service-line-4',
              scrub: true,
              start: '-100px center',
              end: '150px center',
            },
          })
          .from('.service-line-4', { drawSVG: 0, duration: 5 });
      });
    },
    {
      dependencies: [],
      scope: servicesSection,
      revertOnUpdate: true,
    },
  );

  return (
    <section
      className="section pt-section-2xl pb-section-lg relative"
      ref={servicesSection}
      id="services-sb"
    >
      {/* FEATURE BG IMG  */}
      <div className="absolute">
        <div className="relative h-[3300px] w-[100svw] ">
          <div className="absolute left-1/2 z-0 h-[3300px] w-[1900px] -translate-x-1/2">
            <Image
              className="scale-125 object-cover max-xl:scale-100 max-lg:scale-75 max-sm:-translate-y-[640px] max-sm:scale-[0.4]"
              src="/small_business-services-bg.jpg"
              alt="Small Business web design section background image"
              fill
              quality={100}
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="section-container service-section-container relative z-30">
        {/* HEADER  */}
        <div className="service-headers mb-36 grid grid-cols-4 max-sm:mb-9">
          <div className="service-header content-container col-span-3 col-start-1 max-lg:col-span-4 max-lg:row-span-1 max-lg:row-start-2">
            <h2 className="heading-2 mb-content-md max-w-[800px] max-md:text-6xl max-sm:text-2xl">
              Website That Drives Real Results
            </h2>
            <p className="title-300 w-full max-w-[880px]">
              Businesses grow when owners focus on quality of service for their
              clients. Let us handle the nuance of website design and
              development, copyrighting, and web optimization.
            </p>
          </div>
          <div className="service-subheader content-container col-span-1 col-start-4 flex justify-center max-lg:col-span-2 max-lg:col-start-1 max-lg:row-span-1 max-lg:row-start-1 max-lg:mb-3 max-lg:justify-start">
            <h3 className="sub-headers">Our Services</h3>
          </div>
        </div>
        <div className="grid grid-cols-4 max-sm:px-4">
          {/* SERVICE 1 */}
          <div className="col-span-2 col-start-1 flex max-sm:col-span-4 max-sm:row-span-1">
            <div className="rounded-primary service-panel-1 service-panel relative h-fit overflow-hidden">
              <Image
                className="w-full"
                src="/small_business-service-1.jpg"
                alt="Custom Small Business Web Design and Development"
                width={1000}
                height={1000}
                quality={40}
                onLoad={() => ScrollTrigger.refresh()}
                priority
              />
              <div className="absolute bottom-0 w-full px-9 pb-11 max-lg:px-6 max-lg:pb-6 max-sm:px-4">
                <h4 className="heading-3 w-full max-w-[510px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                  Custom Web Design & Development
                </h4>
              </div>
            </div>
          </div>

          <MobileVectorLine />

          {/* LINE VECTOR & SERVICE 2  */}
          <div className="col-span-2 col-start-3 flex flex-col justify-center max-sm:col-span-4 max-sm:row-span-3">
            <div className="grid grid-rows-2">
              <div className="w-full"></div>
              <div className="mt-auto grid grid-cols-2 max-sm:hidden">
                <svg
                  className="h-auto w-[calc(100%+3px)]"
                  width="390"
                  height="201"
                  viewBox="0 0 390 201"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_10383_605)">
                    <path
                      className="service-line-1"
                      d="M2.21742 3.5498L386.5 3.99999L386.5 199"
                      stroke="#A5A5EF"
                      stroke-width="4"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_10383_605"
                      x="0.216248"
                      y="0.549805"
                      width="389.284"
                      height="200.451"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="1"
                        result="effect1_foregroundBlur_10383_605"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="rounded-primary service-panel-2 service-panel relative w-10/12 self-center overflow-hidden max-sm:w-full">
              <Image
                className="w-full"
                src="/small_business-service-2.jpg"
                alt="Small Business Web functionalities"
                width={770}
                height={683}
              />
              <div className="absolute bottom-0 w-full px-9 pb-11 max-lg:px-6 max-lg:pb-6 max-sm:px-4">
                <h4 className="heading-3 w-full max-w-[510px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                  Website functionalities
                </h4>
              </div>
            </div>
          </div>
          {/* LINE VECTOR  */}
          <div className="col-start-3 row-span-1 h-fit max-sm:hidden">
            <svg
              className="h-auto w-[calc(100%+7px)] -translate-x-[3px]"
              width="391"
              height="144"
              viewBox="0 0 391 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_10385_3581)">
                <path
                  className="service-line-2"
                  d="M387.5 2L387.5 75L3.5 75L3.49999 142"
                  stroke="#A5A5EF"
                  stroke-width="4"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_10385_3581"
                  x="0.5"
                  y="0"
                  width="390"
                  height="144"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="1"
                    result="effect1_foregroundBlur_10385_3581"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <MobileVectorLine />

          {/* SERVICE 3  */}
          <div className="col-span-2 col-start-2 flex flex-col justify-center max-sm:col-span-4">
            <div className="rounded-primary service-panel-3 service-panel relative w-11/12 self-center overflow-hidden max-sm:w-full">
              <Image
                className="w-full"
                src="/small_business-service-3.jpg"
                alt="Content Strategy and writing for small business websites"
                width={676}
                height={668}
              />
              <div className="absolute bottom-0 w-full px-9 pb-11 max-lg:px-6 max-lg:pb-6 max-sm:px-4">
                <h4 className="heading-3 w-full max-w-[510px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                  Content Strategy & Writing
                </h4>
              </div>
            </div>
          </div>

          {/* LINE VECTOR  */}
          <div className="col-start-2 row-span-1 h-fit max-sm:hidden">
            <svg
              className="h-auto w-[calc(100%+7px)] -translate-x-[3px]"
              width="391"
              height="144"
              viewBox="0 0 391 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_10385_3581)">
                <path
                  className="service-line-3"
                  d="M387.5 2L387.5 75L3.5 75L3.49999 142"
                  stroke="#A5A5EF"
                  stroke-width="4"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_10385_3581"
                  x="0.5"
                  y="0"
                  width="390"
                  height="144"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="1"
                    result="effect1_foregroundBlur_10385_3581"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <MobileVectorLine />

          {/* SERVICE 4 & LINE VECTOR */}
          <div className="relative col-span-2 col-start-1 flex justify-center max-sm:col-span-4">
            <div className="rounded-primary service-panel-4 service-panel relative h-fit w-10/12 overflow-hidden max-sm:w-full">
              <Image
                className="w-full"
                src="/small_business-service-4.jpg"
                alt="Search Engine Optimization for Small Business Website"
                width={686}
                height={731}
              />
              <div className="absolute bottom-0 w-full px-9 pb-11 max-lg:px-6 max-lg:pb-6 max-sm:px-4">
                <h4 className="heading-3 w-full max-w-[510px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                  Search Engine Optimization
                </h4>
              </div>
            </div>
            <div className="absolute right-0 top-[400px] w-1/12 max-lg:top-[250px] max-md:top-[200px] max-sm:hidden">
              <svg
                className="h-auto w-[calc(100%+3px)]"
                width="81"
                height="6"
                viewBox="0 0 81 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_10383_611)">
                  <line
                    className="service-line-4"
                    x1="2"
                    y1="3"
                    x2="79"
                    y2="3.00001"
                    stroke="#A5A5EF"
                    stroke-width="4"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_10383_611"
                    x="0"
                    y="0"
                    width="81"
                    height="6"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="1"
                      result="effect1_foregroundBlur_10383_611"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <MobileVectorLine />

          {/* SERVICE 5  */}
          <div className="relative col-span-2 col-start-3 flex flex-col justify-center max-sm:col-span-4">
            <div className="h-[176px] w-full max-lg:h-[120px] max-md:h-[100px] max-sm:hidden"></div>
            <div className="rounded-primary service-panel-5 service-panel relative h-fit w-full overflow-hidden">
              <Image
                className="w-full"
                src="/small_business-service-5.jpg"
                alt="Site speed optimization for small business website"
                width={685}
                height={749}
              />
              <div className="absolute bottom-0 w-full px-9 pb-11 max-lg:px-6 max-lg:pb-6 max-sm:px-4">
                <h4 className="heading-3 w-full max-w-[510px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                  Site Speed Optimization
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
