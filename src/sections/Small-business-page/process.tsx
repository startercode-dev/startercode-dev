'use client';

import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import clsx from 'clsx';

const processList = [
  {
    name: 'Consultation & Strategy',
    description:
      'Analyze your small business needs and outline a comprehensive web design strategy. We collaborate to create a tailored website solution that aligns with your goals and target audience.',
    image: '/small_business-process-1.jpg',
    alt: 'Startercode consultation and strategy',
  },
  {
    name: 'Plan of Action & Agreement',
    description:
      "Develop a detailed roadmap for your small business web design project. We'll agree on timelines, deliverables, and costs to ensure a smooth website solution process.",
    image: '/small_business-process-2.jpg',
    alt: 'Startercode plan of action and agreement',
  },
  {
    name: 'Website Design & Development',
    description:
      'Create visually appealing and functional designs tailored to your small business needs. Our team develops a custom website solution that aligns with your brand and objectives.',
    image: '/small_business-process-3.jpg',
    alt: 'Startercode website design and development',
  },
  {
    name: 'Content Implementation',
    description:
      'Integrate your brand message and key information into your small business website design. We ensure your content is engaging, informative, and optimized for both users and search engines.',
    image: '/small_business-process-4.jpg',
    alt: 'Startercode content implementation',
  },
  {
    name: 'Web Optimization',
    description:
      "Enhance your website's performance and search engine visibility. We optimize your small business web design for speed, mobile responsiveness, and SEO to maximize its effectiveness.",
    image: '/small_business-process-5.jpg',
    alt: 'Startercode web optimization',
  },
  {
    name: 'Testing & Quality Assurance',
    description:
      'Rigorously test your website solution across devices and browsers. We ensure your small business website functions flawlessly and provides an excellent user experience.',
    image: '/small_business-process-6.jpg',
    alt: 'Startercode testing and quality assurance',
  },
  {
    name: 'Host & Launch',
    description:
      'Securely host and launch your new small business website. We ensure a smooth transition and provide support during the crucial initial period after going live.',
    image: '/small_business-process-7.jpg',
    alt: 'Startercode host and launch',
  },
  {
    name: 'Revisions & Updates',
    description:
      'Refine your website based on initial performance and feedback. We make necessary adjustments to optimize your small business web design for maximum impact.',
    image: '/small_business-process-8.jpg',
    alt: 'Startercode revisions and updates',
  },
  {
    name: 'Maintenance',
    description:
      'Provide ongoing support and updates for your small business website solution. We ensure your site remains secure, up-to-date, and continues to meet your evolving business needs.',
    image: '/small_business-process-9.jpg',
    alt: 'Startercode maintenance',
  },
];

export default function Process() {
  // INTERVAL LOADER LOGIC ----------------------
  const INTERVAL_DURATION = 10000;
  const [processDisplayed, setProcessDisplayed] = useState(0);
  const [loadingPercentage, setLoadingPercentage] = useState(100);
  const processSection = useRef();
  const viewportRef = useRef(null);
  const intervalRef = useRef(null);
  const lastActionTimeRef = useRef(null);
  const remainingTimeRef = useRef(INTERVAL_DURATION);
  const sameDisplayIntervalRef = useRef(false);

  //INTERVAL LOADER: SCROLL LOGIC
  useEffect(() => {
    //Display change logic
    const performAction = () => {
      // Initiate animation upon entry
      setLoadingPercentage(() => 0);

      //Set new start time every display change
      lastActionTimeRef.current = Date.now();

      //Reset remaining time every display change
      remainingTimeRef.current = INTERVAL_DURATION;

      //Initiate display change
      setProcessDisplayed((prev) => (prev < 8 ? prev + 1 : 0));

      //Reset interval counter with reset reamining time
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(
        performAction,
        remainingTimeRef.current,
      );
    };

    // Observer and timer for changing display
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Initiate animation upon entry
          setLoadingPercentage(() => 0);

          // Start the interval when the element enters the viewport
          if (intervalRef.current) {
            // Restablish a reference time, used calculate remaining time upon display exit
            lastActionTimeRef.current = Date.now();

            //Clear previous interval running
            clearInterval(intervalRef.current);

            //Start the external clock for the amount of time has passed since start
            intervalRef.current = setInterval(
              performAction,
              remainingTimeRef.current,
            );
          }
          if (intervalRef.current === null) {
            // Establish a reference time, used calculate remaining time upon display exit
            lastActionTimeRef.current = Date.now();

            //Start the external clock for the amount of time has passed since start
            intervalRef.current = setInterval(
              performAction,
              remainingTimeRef.current,
            );
          }
        } else {
          if (intervalRef.current) {
            // Boolean: Validates whether this is the first display exit with the interval
            // Function: Calculate and saves time remaining of a display upon exit
            if (!sameDisplayIntervalRef.current) {
              remainingTimeRef.current =
                INTERVAL_DURATION - (Date.now() - lastActionTimeRef.current);
              sameDisplayIntervalRef.current = true;
            } else {
              remainingTimeRef.current =
                remainingTimeRef.current -
                (Date.now() - lastActionTimeRef.current);
            }

            // Converts time remaining into a percentage of total interval duration
            const timeDifference = remainingTimeRef.current / INTERVAL_DURATION;
            const timePercentRemaining = Math.floor(timeDifference * 100);

            //Set timePercentRemaining into style CSS
            setLoadingPercentage(() => timePercentRemaining);

            // Clear the interval when the element leaves the viewport
            clearInterval(intervalRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 40% of the element is visible
      },
    );

    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }

    return () => {
      if (viewportRef.current) {
        observer.unobserve(viewportRef.current);
      }
      // Clear the interval on component unmount
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [processDisplayed]);

  // INTERVAL LOADER: CLICK LOGIC
  const [buttonClick, setButtonClick] = useState(false);
  const [lastActiveButton, setLastActiveButton] = useState(null);
  useEffect(() => {
    if (lastActiveButton !== null) {
      // Remove animation
      lastActiveButton.style.transitionDuration = '0ms';
      lastActiveButton.classList.remove('transition-transform');
      lastActiveButton.classList.remove('ease-linear');

      //Re-add animation
      setTimeout(() => {
        lastActiveButton.style.transitionDuration = `${INTERVAL_DURATION}ms`;
        lastActiveButton.classList.add('transition-transform');
        lastActiveButton.classList.add('ease-linear');
      }, 10);
    }
    setLastActiveButton(
      document.querySelector('.sb-process-list .active .loading-bar'),
    );
  }, [buttonClick, lastActiveButton]);

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width:1025px)', () => {
        gsap.from('.process-sb-heading', {
          scrollTrigger: {
            trigger: '.process-sb-header-box',
            scrub: true,
            start: '-50% 70%',
            end: 'bottom 70%',
          },
          x: -100,
          opacity: 0,
          ease: 'linear',
        });
        gsap.from('.proces-sb-description-box', {
          scrollTrigger: {
            trigger: '.process-sb-header-box',
            scrub: true,
            start: '-50% 70%',
            end: 'bottom 70%',
          },
          y: -100,
          opacity: 0,
          ease: 'linear',
        });
        gsap.from('.process-sb-content-box', {
          scrollTrigger: {
            trigger: '.process-sb-content-box',
            scrub: true,
            start: '-10% 70%',
            end: '20% 70%',
          },
          opacity: 0,
          ease: 'linear',
        });
      });

      mm.add('(max-width:1025px)', () => {
        gsap.from('.process-sb-header-box', {
          scrollTrigger: {
            trigger: '.process-sb-header-box',
            scrub: true,
            start: '-50% 50%',
            end: '80% 50%',
          },
          x: -20,
          autoAlpha: 0,
        });
        gsap.from('.process-sb-content-box', {
          scrollTrigger: {
            trigger: '.process-sb-content-box',
            start: '-10% 50%',
            end: '20% 50%',
          },
          autoAlpha: 0,
        });
      });
    },
    {
      dependencies: [],
      scope: processSection,
      revertOnUpdate: true,
    },
  );

  return (
    <section
      className="section pt-section-2xl pb-section-md relative"
      ref={processSection}
      id="process-sb"
    >
      {/* FEATURE BG IMG  */}
      <div className="absolute">
        <div className="relative h-[3300px] w-[100svw] ">
          <div className="absolute left-1/2 z-0 h-[1612px] w-[2989px] -translate-x-1/2">
            <Image
              className="-translate-y-[0px] translate-x-[50px] scale-[0.70] object-cover opacity-70 max-xl:-translate-x-[20px] max-lg:-translate-x-[200px] max-lg:translate-y-[700px] max-lg:scale-75 max-sm:translate-y-[100px]"
              src="/small_business-process-bg.jpg"
              alt="Starter code small business web design background image"
              aria-hidden="true"
              fill
              quality={100}
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="section-container z-30" ref={viewportRef}>
        <div className="mb-content-4xl process-sb-header-box grid grid-cols-2 max-lg:mb-12 max-lg:flex max-lg:flex-col">
          <h2 className="heading-3 content-container mb-content-sm process-sb-heading">
            Small Business Websites That Bring Results
          </h2>
          <div className="content-container proces-sb-description-box">
            <h3 className="sub-headers mb-content-sm max-lg:mb-5">
              Our Process
            </h3>
            <p className="title-300">
              We create tailored website unique to your business and branding
              strategy. Our process begins with understanding your goals, target
              audience and competition. Then, we craft a comprehensive plan of
              action to ensure your small website stands out in the digital
              landscape. Each website is built for online discoverability,
              strong impressions, and customer conversion.
            </p>
          </div>
        </div>
        <div className="process-sb-content-box grid grid-cols-2 max-lg:flex max-lg:flex-col max-lg:gap-12">
          <div className="content-container">
            <div className="rounded-primary mb-content-md relative z-30 aspect-[5/4] w-full overflow-hidden">
              {processList.map((item, i) => {
                return (
                  <Image
                    key={i}
                    className={clsx(
                      'absolute h-full w-full transition-opacity duration-1000 ease-in-out',
                      {
                        'visible opacity-100': i == processDisplayed,
                        'invisible opacity-0': i !== processDisplayed,
                      },
                    )}
                    src={item.image}
                    alt={item.alt}
                    width={800}
                    height={600}
                  />
                );
              })}
            </div>
            <div className="relative z-30 max-lg:h-[120px] max-[900px]:h-[150px] max-md:h-[175px] max-sm:h-20 max-[400px]:h-28">
              {processList.map((item, i) => {
                return (
                  <p
                    className={clsx(
                      'title-200 absolute h-full w-full transition-opacity duration-1000 ease-in-out',
                      {
                        'visible opacity-100': i == processDisplayed,
                        'invisible opacity-0': i !== processDisplayed,
                      },
                    )}
                    key={i}
                  >
                    {item.description}
                  </p>
                );
              })}
            </div>
          </div>
          <ul className="content-container sb-process-list z-30">
            {processList.map((item, i) => {
              return (
                <li key={i}>
                  <button
                    className={clsx(
                      `sb-process-btn flex w-full flex-row items-center justify-between gap-10 border-b-[1px] border-grey-500 px-6 py-5 ${i == 0 ? 'border-t-[1px]' : ''}`,
                      {
                        'active bg-primary-8': i == processDisplayed,
                      },
                    )}
                    onClick={() => {
                      setProcessDisplayed(() => i);
                      setButtonClick((prev) => !prev);
                    }}
                  >
                    <h4
                      className={clsx(
                        'title-100 sb-process-btn text-left max-[1405px]:text-2xl max-sm:text-base',
                        {
                          '!text-accent-1': i == processDisplayed,
                        },
                      )}
                    >{`${i + 1}. ${item.name}`}</h4>
                    <div
                      className={clsx(
                        'rounded-primary sb-process-btn relative h-[49px] w-[12px] min-w-[12px] overflow-hidden bg-primary-7 max-sm:h-8 max-sm:w-2 max-sm:min-w-2',
                        {
                          'active visible opacity-100': i == processDisplayed,
                          'invisible opacity-0': i !== processDisplayed,
                        },
                      )}
                    >
                      <div
                        className={clsx(
                          'rounded-primary loading-bar sb-process-btn absolute top-0 h-[49px] w-[12px] bg-primary-9 transition-transform ease-linear max-sm:h-8 max-sm:w-2 max-sm:min-w-2',
                        )}
                        style={{
                          transform: `translateY(-${i == processDisplayed ? loadingPercentage : 100}%)`,
                          transitionDuration: `${remainingTimeRef.current}ms`,
                        }}
                      ></div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
