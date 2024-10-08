'use client';

import Header from '@/sections/layouts/header';
import Hero from '@/sections/Small-business-page/hero';
import Relator from '@/sections/Small-business-page/relator';
import Services from '@/sections/Small-business-page/services';
import Process from '@/sections/Small-business-page/process';
import Portfolio from '@/sections/Small-business-page/portfolio';
import Contact from '@/sections/Common-sections/contact';
import Footer from '@/sections/layouts/footer';
import Image from 'next/image';
import Loader from '@/components/LoadingAnimation';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect } from 'react';
import CTA from '@/sections/Small-business-page/cta';
import Quote from '@/sections/Small-business-page/quote';

export default function SmallBusiness() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  useEffect(() => {
    document
      .getElementById('sb-learn-more')
      .addEventListener('click', function () {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: '#relator-sb-scroll-to', offsetY: 0 },
        });
      });
  });

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add('(min-width:640px)', () => {
      ScrollSmoother.create({
        content: '#smooth-content',
        smooth: 1.5,
      });
    });
  });

  return (
    <div>
      <Loader active={false} />
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
            <div className="relative h-[1500px] w-[100svw] ">
              <div className="absolute left-1/2 z-0 h-[1500px] w-[2400px] origin-top -translate-x-[54%]">
                <Image
                  className="origin-top object-cover max-3xl:-translate-y-64 max-3xl:translate-x-20 max-xl:translate-x-72 max-md:translate-x-96 max-sm:-translate-y-20 max-sm:translate-x-[250px] max-sm:scale-[0.6]"
                  src="/small_business-bg-img-2.jpg"
                  alt="Hero background image"
                  quality={100}
                  priority
                  fill
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-hidden">
          <div className="relative mx-auto">
            <Header />
            <main className="mx-auto">
              <Hero />
              <Relator />
              <Services />
              <Process />
              <CTA />
              <Portfolio />
              <Quote />
              <Contact
                header={
                  'Tell us about your small business website ideas. Get a free consultation!'
                }
              />
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
