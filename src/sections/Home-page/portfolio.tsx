'use client';
import { useState, useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PortfolioCarousel from '@/components/PortfolioCarousel';

const portfolioDetails = [
  {
    name: 'Neural Consult',
    image: 'home-portfolio-img-neuralConsult.png',
    href: 'https://neuralconsult.com/',
    label: 'Web Design Portfolio Project - Neural Consult',
    title: 'Check out our web design portfolio project - Neural Consult',
    description:
      'Landing page and application design and development for an Artifical Intelligence Medical Studying Web Application',
    darken: true,
  },
  {
    name: 'Payroll Easy',
    image: 'home-portfolio-img-payrollEasy.jpg',
    href: 'https://payrolleasy.org/',
    label: 'Web Design Portfolio Project - Payroll Easy',
    title: 'Check out our web design portfolio project - Payroll Easy',
    description:
      'Website design and development for a payroll, acccounting and tax service company that specializes in small business payroll solutions',
    darken: true,
  },
  {
    name: 'MTC Mans',
    image: 'home-portfolio-img-mtcmans.jpg',
    href: 'https://mtcmans.com/',
    label: 'Web Design Portfolio Project - MTC Mans',
    title: 'Check out our web design portfolio project - MTC Mans',
    description:
      'Website design and development for a wholesale party goods company within San Francisco, CA',
    darken: true,
  },
  {
    name: 'Chromatic Data',
    image: 'home-portfolio-img-chromaticData.jpg',
    href: 'https://chromaticdata.com/',
    label: 'Web Design Portfolio Project - Chromatic Data',
    title: 'Check out our web design portfolio project - Chromatic Data',
    description:
      'Website design and development for a company that offers synthetic data generation and management',
    darken: true,
  },
  {
    name: 'Gwynn CPA',
    image: 'home-portfolio-img-gwynncpa.jpg',
    href: 'https://gwynncpas.com/',
    label: 'Web Design Portfolio Project - Gwynn CPA',
    title: 'Check out our web design portfolio project - Gwynn CPA',
    description:
      'Website design and development for a certified public accounting firm that specialize in financial auditing based in Dallas, TX',
    darken: true,
  },
  {
    name: 'Sales Xpress',
    image: 'home-portfolio-img-salesXpress.jpg',
    href: 'https://www.salesxpress.co/',
    label: 'Web Design Portfolio Project - Sales Xpress',
    title: 'Check out our web design portfolio project - Sales Xpress',
    description:
      'Landing page and application design and development for a CRM web application that lubricates business sales process',
    darken: true,
  },
  {
    name: 'Eval genie',
    image: 'home-portfolio-img-evalGenie.jpg',
    href: 'https://evalgenie.netlify.app/',
    label: 'Web Design Portfolio Project - Eval Genie',
    title: 'Check out our web design portfolio project - Eval Genie',
    description:
      'Landing page design and development for a task and goal tracking web application for US army professionals',
    darken: false,
  },
];

export default function Portfolio() {
  const portfolioSection = useRef();
  const [currIndex, setCurrIndex] = useState(0);
  const scrollHeight = 100;

  const nextItem = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % portfolioDetails.length);
  };

  const prevItem = () => {
    setCurrIndex((prevIndex) =>
      prevIndex === 0 ? portfolioDetails.length - 1 : prevIndex - 1,
    );
  };

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      let mm = gsap.matchMedia();

      mm.add('(max-width:640px)', () => {
        gsap.from('.content-portfolio', {
          scrollTrigger: {
            trigger: '.content-portfolio',
            scrub: true,
            start: '-15% 60%',
            end: '25% 60%',
          },
          duration: 0.9,
          opacity: 0,
        });
      });

      // portfolio-content-box
      mm.add('(min-width:780px)', () => {
        gsap.from('.portfolio-content-box', {
          scrollTrigger: {
            trigger: '.portfolio-scroll-area',
            scrub: true,
            pin: '.portfolio-content-box',
            start: 'top top',
            end: 'bottom bottom',
          },
        });
      });

      mm.add('(min-width:640px)', () => {
        gsap.from('.header-content-portfolio', {
          scrollTrigger: {
            trigger: '.content-portfolio',
            scrub: true,
            start: '-15% 70%',
            end: '25% 70%',
          },
          duration: 0.9,
          x: -100,
          autoAlpha: 0,
        });

        gsap.from('.portfolio-body-content', {
          scrollTrigger: {
            trigger: '.portfolio-body-content',
            scrub: true,
            start: 'top 70%',
            end: '40% 70%',
          },
          duration: 0.9,
          opacity: 0,
        });
      });
    },
    { dependencies: [], scope: portfolioSection, revertOnUpdate: true },
  );

  return (
    <section
      className="section relative z-30 max-lg:pb-14 max-lg:pt-20 max-sm:pb-11 max-sm:pt-11 3xl:p-0"
      ref={portfolioSection}
      id="portfolio"
    >
      <div className="content-portfolio relative">
        {/* HEADER HEIGHT SPACING */}
        <div className="flex w-full flex-col opacity-0">
          <span className="heading-2 bold mb-content-md text-center">
            Our Web Design and Development{' '}
            <span className="bg-gradient-to-r from-accent-5 to-grey-000 bg-clip-text text-transparent">
              Portfolio
            </span>
          </span>
          <span className="title-300 mb-content-4xl mx-auto max-w-[650px] text-center 3xl:max-w-[700px]">
            Our portfolio projects comprise of diverse creative web designs and
            custom software development.
          </span>
        </div>

        {/* CONTENT  */}
        <div className="section-container scroll-container portfolio-scroll-area relative h-fit max-[780px]:!h-fit">
          {portfolioDetails
            .slice(0, portfolioDetails.length - 1)
            .map((project, i) => {
              const nth = i + 1;

              return (
                <div
                  className="animation-dividers absolute left-0 h-1 w-full"
                  style={{
                    top: `calc((${scrollHeight}svh/ ${portfolioDetails.length})*${nth})`,
                  }}
                  key={i}
                ></div>
              );
            })}
          <div className="portfolio-content-box flex h-[100svh] items-center justify-center max-[780px]:h-fit">
            {/* MARGIN BOTTOM IS TO COMPENSATE FOR THE BUTTONS  */}
            <div className="relative h-fit w-full max-lg:mb-20">
              {/* HEADER */}
              <div className="relative w-full">
                <div className="header-content-portfolio absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 flex-col">
                  <h2 className="heading-2 bold mb-content-md text-center">
                    Our Web Design and Development{' '}
                    <span className="bg-gradient-to-r from-accent-5 to-grey-000 bg-clip-text text-transparent">
                      Portfolio
                    </span>
                  </h2>
                  <p className="title-300 mb-content-4xl mx-auto max-w-[650px] text-center 3xl:max-w-[800px]">
                    Take a look at the websites we’ve designed and developed.
                    Every project consists of responsive development, UI/UX
                    design, and personalized message based on customer
                    objectives.
                  </p>
                </div>
              </div>

              {/* CAROUSEL  */}
              <div className="portfolio-body-content">
                <PortfolioCarousel
                  data={portfolioDetails}
                  gap={36}
                  prevItem={prevItem}
                  nextItem={nextItem}
                  currIndex={currIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
