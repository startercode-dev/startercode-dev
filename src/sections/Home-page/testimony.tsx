'use client';

import Image from 'next/image';
import Link from 'next/link';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const profileLinks = [
  {
    src: '/upwork-icon.svg',
    alt: 'Upwork Icon',
    href: 'https://www.upwork.com/freelancers/~01f1b62f384148c5d1',
    label: 'Link to Upwork profile and reviews',
    title:
      "Check out our Upwork profile to see the work we've done in the past",
  },
  {
    src: '/google-icon.svg',
    alt: 'Google Icon',
    href: 'https://www.google.com/search?q=startercode&rlz=1C5CHFA_enUS1081US1086&oq=star&gs_lcrp=EgZjaHJvbWUqDggCEEUYJxg7GIAEGIoFMgYIABBFGEEyBggBEEUYPDIOCAIQRRgnGDsYgAQYigUyCggDEC4YsQMYgAQyEAgEEC4YxwEYsQMY0QMYgAQyBggFEEUYPTIGCAYQRRhBMgYIBxBFGDzSAQgzMDIwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8',
    label: 'Link to Google profile and reviews',
    title:
      'Check out our Google profile to see what our customer thought about our services',
  },
  {
    src: '/yelp-icon.svg',
    alt: 'Yelp Icon',
    href: 'https://www.yelp.com/biz/startercode-san-francisco-4?osq=startercode&override_cta=Request+a+consultation',
    label: 'Link to Yelp profile and reviews',
    title:
      'Check out our Yelp profile to see what our customer thought about our services',
  },
];

const testimonyDetails = [
  {
    review:
      'Startercode finished the task on time and did extensive testing to make sure everything is working. Very knowledgeable in Javascript. Highly recommended for Javascript and any development work, fast response time and easy to communicate to.',

    reviewerDetails: {
      name: 'Ivan Gvardin',
      title: 'Founder of PARIAN',
    },
  },
  {
    review:
      'Startercode has been a pleasure to work with! They built a modern and fully responsive landing page and the frontend of our product. They handled the entire process which included designing, implementing, and testing it. They are organized, professional, and great communicators. We look forward to working with them again!',

    reviewerDetails: {
      name: 'Jonathan Theros',
      title: 'CEO of Dendritic Health AI',
    },
  },
  {
    review:
      'I have had the pleasure to collaborate with startercode on minor maintenance tasks and a website build. As a developer myself, they are great to work with, and their code is clean and readable for anyone else on my team. They take the time to understand the project, and they are willing to learn the standards set in place for our agency. I look forward in collaborating with them further on more projects and continue to invest in them as the talented designer and developers they are.',

    reviewerDetails: {
      name: 'Stephanie Hernandez',
      title: 'CEO of BrandingCup Creative Media',
    },
  },
  {
    review:
      'Startercode was extremely fast and completed the project exactly how we wanted it in far fewer hours than others had quoted. They were friendly and responsive and great to work with!',

    reviewerDetails: {
      name: 'Michael Blanchard',
      title: 'BIS Safety Software',
    },
  },
];

export default function Testimony() {
  const testimonySection = useRef();

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // ESTABLISH WHETHER THE DEVICE IS TABLET
  // const userAgent = navigator.userAgent.toLowerCase();
  // const isTablet =
  //   /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
  //     userAgent,
  //   );
  useGSAP(
    () => {
      const tl = gsap.timeline();
      let mm = gsap.matchMedia();
      mm.add('(min-width:1367px)', () => {
        gsap.from('.header-content-testimony', {
          scrollTrigger: {
            trigger: '.content-testimony',
            scrub: true,
            pin: '.header-content-testimony',
            start: 'top top',
            end: 'bottom bottom',
          },
        });
      });
      gsap.from('.content-testimony', {
        scrollTrigger: {
          trigger: '.content-testimony',
          scrub: true,
          start: '5% 70%',
          end: '35% 70%',
        },
        duration: 0.9,
        opacity: 0,
      });
    },
    { dependencies: [], scope: testimonySection, revertOnUpdate: true },
  );

  return (
    <section
      className="section-container relative 3xl:-mt-[300px]"
      ref={testimonySection}
      id="testimony-home"
    >
      <div className="content-testimony pb-section-sm [1367px]:-mb-[100px] flex max-[1367px]:-mt-[100px] max-[1367px]:flex-col max-[1367px]:py-24 max-[780px]:mt-0 max-md:py-8 3xl:pt-0">
        <div className="relative grid w-1/2 grid-cols-2 text-1 max-[1367px]:w-full">
          <div className="header-content-testimony content-container sticky top-0 z-30 col-span-2 flex h-svh  w-full flex-col justify-center max-[1367px]:h-fit">
            <h3 className="sub-headers mb-content-sm ">Testimony</h3>
            <h2 className="heading-2 bold mb-content-md">
              Leave a lasting first impression
            </h2>
            <p className="title-100 text-2">With your professional website</p>
            <ul className="mb-content-xl flex w-1/2 justify-between gap-6 pr-8 pt-6 max-lg:pr-7 max-sm:pr-4 max-sm:pt-4">
              {profileLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    title={link.title}
                    target="_blank"
                    className="testimony-link"
                  >
                    <Image
                      src={link.src}
                      alt={link.alt}
                      width={35}
                      height={35}
                      aria-hidden="true"
                      className="max-sm:w-7"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid w-1/2 grid-cols-2 text-1 max-[1367px]:w-full">
          <ul className="content-container z-30 col-span-2 flex flex-col gap-6 pt-[30svh] max-[1367px]:pt-12 max-sm:pt-8">
            {testimonyDetails.map((testimony, i) => (
              <li
                key={i}
                className="border-gradient relative px-6 py-9 max-sm:px-4 max-sm:py-6"
              >
                <p className="title-300 mb-content-md text-2 max-sm:mb-5">
                  {testimony.review}
                </p>
                <p className="bold title-300">
                  {testimony.reviewerDetails.name}
                </p>
                <p className="base-100 text-3">
                  {testimony.reviewerDetails.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
