'use client';
import { useState, useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PortfolioCarousel from '@/components/PortfolioCarousel';

const portfolioDetails = [
  {
    name: 'Neural Consult',
    image: 'home-portfolio-img-neuralConsult.jpg',
    href: 'https://neural-consult.vercel.app/',
    label: 'Web Design Portfolio Project - Neural Consult',
    title: 'Check out our web design portfolio project - Neural Consult',
    description:
      'Landing page and application design and development for an Artifical Intelligence Medical Studying Web Application',
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

      mm.add('(min-width:640px)', () => {
        gsap.from('.header-portfolio', {
          scrollTrigger: {
            trigger: '.content-portfolio',
            scrub: true,
            start: 'top 70%',
            end: '40% 70%',
          },
          x: -100,
          autoAlpha: 0,
        });
        gsap.from('.portfolio-body-content', {
          scrollTrigger: {
            trigger: '.portfolio-body-content',
            scrub: true,
            start: 'top 70%',
            end: '60% 70%',
          },
          opacity: 0,
        });
      });

      mm.add('(max-width:640px)', () => {
        gsap.from('.header-portfolio', {
          scrollTrigger: {
            trigger: '.content-portfolio',
            scrub: true,
            start: '-15% 60%',
            end: '25% 60%',
          },
          x: -20,
          autoAlpha: 0,
        });
        gsap.from('.body-content', {
          scrollTrigger: {
            trigger: '.body-content',
            start: 'top 60%',
            end: '50% 60%',
          },
          opacity: 0,
        });
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    },
    { dependencies: [], scope: portfolioSection, revertOnUpdate: true },
  );

  return (
    <section
      className="section pt-section-xl pb-section-md relative"
      ref={portfolioSection}
      id="portfolio"
    >
      <div className="content-portfolio relative z-30 max-lg:pb-16 max-sm:pb-24">
        {/* HEADER */}
        <div className="header-portfolio content-container flex w-full flex-col items-center will-change-transform">
          <h2 className="heading-2 bold mb-content-md content-container text-center 3xl:max-w-[1800px]">
            Small Business Web Design{' '}
            <span className="bg-gradient-to-r from-accent-5 to-grey-000 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="title-300 mb-content-xl mx-auto max-w-[550px] text-center 3xl:max-w-[700px]">
            Our portfolio projects comprise of diverse small business web
            designs
          </p>
        </div>
        {/* CONTENT  */}
        <div className="section-container relative h-fit">
          <div className="portfolio-body-content relative">
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
    </section>
  );
}
