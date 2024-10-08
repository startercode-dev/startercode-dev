'use client';

import Image from 'next/image';
import Link from 'next/link';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const testimonyDetails = [
  [
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
        'Startercode has been a pleasure to work with! They built a modern and fully responsive landing page. They handled the entire process which included designing, implementing, and testing it. They are organized, professional, and great communicators.',

      reviewerDetails: {
        name: 'Jonathan Theros',
        title: 'CEO of Dendritic Health AI',
      },
    },
  ],
  [
    {
      review:
        'I have had the pleasure to collaborate with startercode on minor maintenance tasks and a website build. As a developer myself, they are great to work with, and their code is clean and readable for anyone else on my team.',

      reviewerDetails: {
        name: 'Stephanie Hernandez',
        title: 'CEO of BrandingCup Creative Media',
      },
    },
    {
      review:
        'Ronald is an incredible designer who can take conceptual ideas and make them into a stunning design that matches business needs and intentions. Highly reccomend!',

      reviewerDetails: {
        name: 'Charlie Beck',
        title: 'Project Manager of Customer Paradigm',
      },
    },
  ],
  [
    {
      review:
        'Startercode was extremely fast and completed the project exactly how we wanted it in far fewer hours than others had quoted. They were friendly and responsive and great to work with!',

      reviewerDetails: {
        name: 'Michael Blanchard',
        title: 'CEO of BIS Safety Software',
      },
    },
    {
      review:
        "Ronald listened to what was needed for the job, took notes and followed through with what's necessary. Communication was focused and concise. Ronald made himself available after the job to ensure that all was correct. I would definitely hire him again in the future.",

      reviewerDetails: {
        name: 'Phyllip Hall',
        title: 'CEO of NBLK Consulting',
      },
    },
  ],
];
const mobileTestimonyDetails = [
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
      'Startercode has been a pleasure to work with! They built a modern and fully responsive landing page. They handled the entire process which included designing, implementing, and testing it. They are organized, professional, and great communicators.',

    reviewerDetails: {
      name: 'Jonathan Theros',
      title: 'CEO of Dendritic Health AI',
    },
  },
  {
    review:
      'I have had the pleasure to collaborate with startercode on minor maintenance tasks and a website build. As a developer myself, they are great to work with, and their code is clean and readable for anyone else on my team.',

    reviewerDetails: {
      name: 'Stephanie Hernandez',
      title: 'CEO of BrandingCup Creative Media',
    },
  },
  {
    review:
      'Ronald is an incredible designer who can take conceptual ideas and make them into a stunning design that matches business needs and intentions. Highly reccomend!',

    reviewerDetails: {
      name: 'Charlie Beck',
      title: 'Project Manager of Customer Paradigm',
    },
  },
  {
    review:
      'Startercode was extremely fast and completed the project exactly how we wanted it in far fewer hours than others had quoted. They were friendly and responsive and great to work with!',

    reviewerDetails: {
      name: 'Michael Blanchard',
      title: 'CEO of BIS Safety Software',
    },
  },
  {
    review:
      "Ronald listened to what was needed for the job, took notes and followed through with what's necessary. Communication was focused and concise. Ronald made himself available after the job to ensure that all was correct. I would definitely hire him again in the future.",

    reviewerDetails: {
      name: 'Phyllip Hall',
      title: 'CEO of NBLK Consulting',
    },
  },
];

export default function Testimony() {
  const testimonySection = useRef();

  // gsap.registerPlugin(useGSAP, ScrollTrigger);

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();
  //     let mm = gsap.matchMedia();
  //     mm.add('(min-width:1367px)', () => {
  //       gsap.from('.header-content-testimony', {
  //         scrollTrigger: {
  //           trigger: '.content-testimony',
  //           scrub: true,
  //           pin: '.header-content-testimony',
  //           start: 'top top',
  //           end: 'bottom bottom',
  //         },
  //       });
  //     });
  //     gsap.from('.content-testimony', {
  //       scrollTrigger: {
  //         trigger: '.content-testimony',
  //         scrub: true,
  //         start: '5% 70%',
  //         end: '35% 70%',
  //       },
  //       duration: 0.9,
  //       opacity: 0,
  //     });
  //   },
  //   { dependencies: [], scope: testimonySection, revertOnUpdate: true },
  // );

  return (
    <section
      className="section-container relative max-lg:mt-8 max-sm:mb-3"
      ref={testimonySection}
      id="testimony-home"
    >
      <div className="content-testimony z-30 flex flex-col">
        <h3 className="sub-headers mb-content-lg content-container max-[1274px]:mb-0">
          Testimonial
        </h3>
        {/* <div className="marquee w-full overflow-scroll">
          <div className="marquee-content">
            {testimonyDetails.map((testimony, i) => (
              <div
                key={i}
                className="marquee-tag border-gradient relative flex w-[calc(50vw-32px-72px)] flex-col justify-between bg-blue-100/5 px-6 py-9 backdrop-blur-[2px] max-sm:px-4 max-sm:py-6"
              >
                <p className="title-300 mb-content-md text-2 max-sm:mb-5">
                  {testimony.review}
                </p>
                <div>
                  <p className="title-300 font-bold text-1">
                    {testimony.reviewerDetails.name}
                  </p>
                  <p className="base-100 text-3">
                    {testimony.reviewerDetails.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <TestimonialCarousel
          data={testimonyDetails}
          mobileData={mobileTestimonyDetails}
          gap={36}
        />
      </div>
    </section>
  );
}
