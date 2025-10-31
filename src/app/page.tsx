'use client';

import Header from '@/sections/layouts/header'; //SELECTED
import Hero from '@/sections/Home-page/hero'; //MUST UPDATE CONFIG BELOW  //SELECTED
import Process from '@/sections/Home-page/process';
import Services from '@/sections/Home-page/services';
import Portfolio from '@/sections/Home-page/portfolio';
import Testimony from '@/sections/Home-page/testimony';
import Contact from '@/sections/Common-sections/contact';
import Footer from '@/sections/layouts/footer'; //SELECTED

// import Loader from '@/components/LoadingAnimation';
// import ScrollToTop from '@/components/ScrollToTop';

import Image from 'next/image';
import { useEffect } from 'react';
import Script from 'next/script';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollToPlugin, ScrollTrigger);

  useEffect(() => {
    let learnMoreBtn = document.querySelector('.learn-more-btn');

    learnMoreBtn?.addEventListener('click', (e) => {
      gsap.to(window, { duration: 2, scrollTo: '#process-section-1' });
    });
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add('(min-width:640px)', () => {
      ScrollSmoother.create({
        content: '#smooth-content',
        smooth: 1.5,
        // smoothTouch: 0.01,
      });
    });

    mm.add('(max-width:640px)', () => {
      let learnMoreBtn = document.querySelector('.learn-more-btn');

      learnMoreBtn?.addEventListener('click', (e) => {
        gsap.to(window, { duration: 2, scrollTo: '#process-section-1' });
      });
    });
  });

  return (
    <div>
      {/* <Loader /> */}
      {/* <ScrollToTop /> */}
      <div id="smooth-content">
        <div className="absolute h-full overflow-x-hidden">
          {/* DOTTED LINES  */}
          <div className="section-container absolute left-1/2 z-10 h-full w-full max-w-container -translate-x-1/2 overflow-hidden opacity-65">
            <div className="flex h-full w-full justify-between">
              <div
                className="h-full w-px bg-repeat-y"
                style={{ backgroundImage: 'url(/dotted_line.png)' }}
              ></div>
              <div
                className="h-full w-px bg-repeat-y max-sm:hidden"
                style={{ backgroundImage: 'url(/dotted_line.png)' }}
              ></div>
              <div
                className="h-full w-px bg-repeat-y max-sm:hidden"
                style={{ backgroundImage: 'url(/dotted_line.png)' }}
              ></div>
              <div
                className="h-full w-px bg-repeat-y"
                style={{ backgroundImage: 'url(/dotted_line.png)' }}
              ></div>
              <div
                className="h-full w-px bg-repeat-y"
                style={{ backgroundImage: 'url(/dotted_line.png)' }}
              ></div>
            </div>
          </div>
          {/* BG IMAGES  */}
          <div className="h-full overflow-x-hidden">
            {/* HERO BG IMG  */}
            {/* HERO HEIGHT : 110svh */}
            {/* 3xl - PROCESS HEADER HEIGHT : 150svh */}
            {/* DESKTOP - PROCESS HEADER HEIGHT : 160svh */}
            {/* MOBILE - PROCESS HEADER HEIGHT : 150svh */}
            <div className="relative h-[270svh] w-[100svw] max-sm:h-[260svh] 3xl:h-[260svh]">
              <div className="absolute left-1/2 z-0 h-[2000px] w-[3000px] origin-top -translate-x-1/2 max-lg:-left-96">
                <Image
                  className="origin-top translate-x-[650px] object-cover max-lg:translate-x-[1400px] max-md:translate-x-[1300px] max-sm:translate-x-[950px] max-sm:scale-[.7]"
                  src="/home-hero-bg-img.jpg"
                  alt="Hero background image"
                  fill
                  unoptimized
                  priority
                />
                {/* <Suspense
                  fallback={
                    <Image
                      className="origin-top translate-x-[650px] object-cover max-lg:translate-x-[1400px] max-md:translate-x-[1300px] max-sm:translate-x-[950px] max-sm:scale-[.7]"
                      src="/home-hero-bg-img.webp"
                      alt="Hero background image"
                      fill
                      quality={1}
                      priority
                    />
                  }
                >
                  <Image
                    className="origin-top translate-x-[650px] object-cover max-lg:translate-x-[1400px] max-md:translate-x-[1300px] max-sm:translate-x-[950px] max-sm:scale-[.7]"
                    src="/home-hero-bg-img.jpg"
                    alt="Hero background image"
                    fill
                    unoptimized
                  />
                </Suspense> */}
              </div>
            </div>
            {/* PROCESS BG IMG  */}
            {/* 3xl - PROCESS SUBSECTIONS : 1080px * 3 = 3240px */}
            {/* DESKTOP - PROCESS SUBSECTIONS : 982px * 3 = 2946px */}
            {/* MOBILE - PROCESS SUBSECTIONS : 667px * 3 + 72px = 2073px */}
            <div className="relative h-[2946px] w-[100svw] max-sm:h-[2073px] 3xl:h-[3240px]">
              <div className="absolute left-1/2 top-[370px] z-0 h-fit w-[1832px] -translate-x-1/2 max-lg:top-[520px] max-sm:top-[480px]">
                <Image
                  className="translate-x-[100px] object-cover max-sm:-translate-y-[640px] max-sm:scale-[0.4] 3xl:translate-y-[150px] 3xl:scale-[1.5]"
                  src="/home-process-bg-img.jpg"
                  alt="Process background image"
                  width={1832}
                  height={3562}
                  quality={100}
                  unoptimized
                />
              </div>
            </div>
            {/* BUFFER HEIGHT */}
            <div className="h-[calc(250svh+300px)] max-lg:h-[calc(300svh+300px)] max-sm:h-[calc(290svh+100px)]"></div>
            {/* TESTIMONY BG IMG  */}
            <div className="relative h-[1400px] w-[100svw]">
              <div className="absolute left-1/2 z-0 h-[1400px] w-[2400px] -translate-x-1/4 max-lg:-translate-x-1/2">
                <Image
                  className="-translate-x-[1100px] object-cover max-lg:-translate-y-1/2 max-lg:translate-x-0 max-sm:-translate-x-48 max-sm:scale-50"
                  src="/home-testimony-bg-img.jpg"
                  alt="Testimony background image"
                  fill
                  quality={100}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div className="relative mx-auto">
            <Header />
            <main className="mx-auto">
              <Hero />
              <Process />
              <Services />
              <Portfolio />
              <Testimony />
              <Contact
                header={
                  'Let’s talk about what’s not working and what’s possible'
                }
              />
            </main>

            <Footer />
          </div>
        </div>
      </div>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.3/build/spline-viewer.js"
        strategy="lazyOnload"
      ></Script>
    </div>
  );
}
