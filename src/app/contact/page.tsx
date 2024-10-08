'use client';

import Image from 'next/image';
import Footer from '@/sections/layouts/footer';
import Header from '@/sections/layouts/header';
import Link from 'next/link';
import Loader from '@/components/LoadingAnimation';
import { PhoneIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/sections/Contact-page/contact';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Suspense } from 'react';

const contactInfo = [
  {
    icon: <UserCircleIcon className="h-7 w-7 text-grey-500" />,
    header: 'Chat with sales',
    description: 'Speak to our friendly team',
    link: 'startercode.dev@gmail.com',
    label: 'Startercode contact email information',
    title: 'Contact the startercode team',
    url: 'mailto: startercode.dev@gmail.com',
  },
  {
    icon: <PhoneIcon className="h-7 w-7 text-grey-500" />,
    header: 'Call us',
    description: 'Mon-Fri from 8am to 5pm',
    label: 'Startercode contact phone number information',
    title: 'Contact the startercode team',
    link: '+1 (415) 309-7270',

    url: 'tel:+14153097270',
  },
];

export default function Contact() {
  gsap.registerPlugin(useGSAP, SplitText, ScrollSmoother, ScrollTrigger);

  useGSAP(() => {
    const split = new SplitText('.contact-subheadline', { type: 'chars' });
    const tl = gsap.timeline();
    const mm = gsap.matchMedia();

    mm.add('(min-width:640px)', () => {
      ScrollSmoother.create({
        content: '#smooth-content',
        smooth: 1.5,
      });

      // tl.to('.contact-container', {
      //   autoAlpha: 1,
      //   duration: 0.2,
      // });
      // tl.fromTo(
      //   '.contact-headline',
      //   { autoAlpha: 0, y: 100 },
      //   { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.9 },
      // );
      // tl.fromTo(
      //   '.contact-description',
      //   { autoAlpha: 0 },
      //   { autoAlpha: 1, ease: 'power3.out', duration: 0.6 },
      // );
      // tl.fromTo(
      //   split.chars,
      //   { autoAlpha: 0, y: 25 },
      //   { autoAlpha: 1, y: 0, stagger: 0.04, duration: 0.2 },
      // );
      gsap.to('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-form',
          scrub: true,
          start: '-20% 70%',
          end: '25% 70%',
        },
        opacity: 1,
      });
      gsap.to('.contact-info-box', {
        scrollTrigger: {
          trigger: '.contact-info-box',
          scrub: true,
          start: '-20% 70%',
          end: '50% 70%',
        },
        opacity: 1,
        stagger: 0.25,
      });
    });

    mm.add('(max-width:640px)', () => {
      tl.to('.contact-container', {
        autoAlpha: 1,
        duration: 0.2,
      });
      // tl.fromTo(
      //   '.contact-headline',
      //   { autoAlpha: 0, y: 40 },
      //   { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.8 },
      // );
      // tl.fromTo(
      //   '.contact-description',
      //   { autoAlpha: 0 },
      //   { autoAlpha: 1, ease: 'power3.out', duration: 0.4 },
      // );
      // tl.fromTo(
      //   split.chars,
      //   { autoAlpha: 0, y: 25 },
      //   { autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.3 },
      // );
      tl.to('.contact-form', {
        autoAlpha: 1,
        delay: 0.3,
        duration: 1,
        ease: 'power3.out',
      });

      const boxes = gsap.utils.toArray('.contact-info-box');
      boxes.forEach((box) => {
        gsap.to(box, {
          scrollTrigger: {
            trigger: box,
            scrub: true,
            start: '-20% 70%',
            end: '50% 70%',
          },
          autoAlpha: 1,
        });
      });
    });
  });

  return (
    <div>
      <Loader active={false} />

      <div className="relative mx-auto" id="smooth-content">
        <div className="absolute h-full">
          {/* DOTTED LINES  */}
          <div className="section-container absolute left-1/2 z-10 h-full w-full max-w-container -translate-x-1/2 overflow-hidden">
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
          <div className="h-full overflow-x-hidden ">
            {/* HERO BG IMG  */}
            <div className="relative w-[100svw]">
              <div className="absolute -top-20 left-1/2 z-0 h-[2600px] w-[2600px] origin-top -translate-x-1/2">
                <Image
                  className=" origin-bottom object-cover max-lg:-translate-x-20 max-md:-translate-x-32 max-sm:-translate-x-24 "
                  src="/contact-bg-img.jpg"
                  alt="Hero Image"
                  fill
                  quality={100}
                  priority
                  unoptimized
                />
                {/* <Suspense
                  fallback={
                    <Image
                      className=" origin-bottom object-cover max-lg:-translate-x-20 max-md:-translate-x-32 max-sm:-translate-x-24 "
                      src="/contact-bg-img.webp"
                      alt="Hero Image"
                      fill
                      quality={1}
                      priority
                    />
                  }
                >
                  <Image
                    className=" origin-bottom object-cover max-lg:-translate-x-20 max-md:-translate-x-32 max-sm:-translate-x-24 "
                    src="/contact-bg-img.jpg"
                    alt="Hero Image"
                    fill
                    quality={100}
                    unoptimized
                  />
                </Suspense> */}
              </div>
            </div>
          </div>
        </div>
        <Header />
        <main className="relative z-30 mx-auto max-w-container">
          <div className="hero-container pt-section-2xl pb-section-md relative h-full w-full max-lg:pt-28">
            <section className="section section-container contact-container flex w-full items-center bg-transparent">
              {/* HERO DESCRIPTION  */}
              <div className="hero-content relative z-30 flex w-full flex-col items-center">
                <h1 className="content-container heading-1 bold mb-content-lg contact-headline flex w-full max-w-[1223px] flex-col text-center max-xl:max-w-[832px] max-sm:text-3xl 3xl:mb-14 3xl:max-w-[1600px]">
                  Get clarity on your business project
                </h1>
                <p className="contact-description title-300 mb-content-lg content-container max-w-[662px] text-center max-xl:max-w-[832px] 3xl:max-w-[820px]">
                  We pride ourselves on our client service and to make sure your
                  needs are understood. Provide your information below and tell
                  us how we can help. We’re excited to hear from you!
                </p>
                <h2 className="contact-subheadline text-2xl font-semibold text-accent-3 max-md:text-lg">
                  Contact Us
                </h2>
              </div>
            </section>
          </div>

          {/* Contact form */}
          <ContactForm />

          {/* Contact info section */}
          <section className="section section-container mb-content-lg relative  z-30 max-lg:py-8">
            <ul className=" grid  grid-cols-2 max-md:grid-cols-1 max-md:gap-6">
              {contactInfo.map((info, i) => {
                return (
                  <li
                    key={i}
                    className="content-container contact-info-box opacity-0"
                  >
                    <div className=" card bg-[rgba(107,114,128,0.1)] py-10 ring-primary-7 backdrop-blur-sm">
                      <div className="mb-content-lg inline-block rounded-full p-2 ring-1 ring-grey-400">
                        {info.icon}
                      </div>
                      <h3 className="heading-5 mb-content-sm !font-body text-grey-300">
                        {info.header}
                      </h3>
                      <p className="base-200 mb-content-md text-grey-500">
                        {info.description}
                      </p>
                      <Link
                        className="link-2 contact-sales-link underline"
                        href={info.url}
                        title={info.title}
                        aria-label={info.label}
                      >
                        {info.link}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
