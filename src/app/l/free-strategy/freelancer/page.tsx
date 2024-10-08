'use client';

import { useState } from 'react';
import Header from '@/sections/layouts/header-lp-v2';

import Hero from '@/sections/I-page/hero-free-strategy-freelancer';
import Modal from '@/components/Modal';
import UserForm from '@/sections/I-page/components/user-form';

import Testimony from '@/sections/I-page/testimony';
import Review from '@/sections/I-page/review';
import Services from '@/sections/I-page/services';
import Portfolio from '@/sections/I-page/portfolio';
import Footer from '@/sections/layouts/footer';
import Image from 'next/image';
import Loader from '@/components/LoadingAnimation';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import CTA from '@/sections/I-page/cta';
import React from 'react';

export default function FreelancerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = () => {
    closeModal();
  };

  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, ScrollToPlugin);

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
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <UserForm handleFormSubmit={handleFormSubmit} />
      </Modal>

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
              <div className="absolute left-1/2 z-0 h-[1500px] w-[2400px] origin-top -translate-x-[54%] ">
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
            <Header openModal={openModal} />
            <main className="mx-auto">
              <Hero openModal={openModal} />
              <div className="-mt-16 sm:hidden">
                <Review />
              </div>
              <Testimony />
              <Services />
              <Portfolio />
              <CTA />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
