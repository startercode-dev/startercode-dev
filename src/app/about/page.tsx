'use client';

import Image from 'next/image';
import Footer from '@/sections/layouts/footer';
import Header from '@/sections/layouts/header';
import Loader from '@/components/LoadingAnimation';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const values = [
   {
      icon: '/values-1.svg',
      title: 'Collaborative Spirit',
      desc: 'We work closely with our clients, fostering a partnership built on mutual trust and shared goals.'
   },
   {
      icon: '/values-2.svg',
      title: 'Resourcefulness',
      desc: 'We creatively problem-solve and go the extra mile to find solutions for our clients, whatever the problem may be.'
   },
   {
      icon: '/values-3.svg',
      title: 'Detail-Oriented',
      desc: 'We pay meticulous attention to every aspect of our work, ensuring accuracy and thoroughness in all our deliverables.'
   },
   {
      icon: '/values-4.svg',
      title: 'Deadline-Driven',
      desc: 'We respect the importance of time in business and commit to meeting agreed-upon deadlines without compromising quality.'
   },
   {
      icon: '/values-5.svg',
      title: 'Transparency',
      desc: 'We maintain open communication channels and provide clear, honest information about our processes, challenges, and outcomes.'
   }
]

export default function About() {
   gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

   useGSAP(() => {
      const mm = gsap.matchMedia();

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

         <div className="relative mx-auto" id="smooth-content">
            <div className="absolute h-full overflow-x-hidden">
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
                  <div className="relative w-[100vw] h-full">
                     <div className="absolute left-1/2 z-0 h-[1565px] w-[1512px] 2xl:w-[100%] -translate-x-[50%]">
                        <Image
                           className="origin-bottom object-cover max-3xl:-translate-y-34 max-sm:-translate-y-[40%] max-sm:translate-x-[150px] sm:translate-x-[250px] lg:translate-x-0 max-sm:scale-[0.6]"
                           src="/about-bg-img.jpg"
                           alt="Hero Image"
                           fill
                           quality={100}
                           priority
                           unoptimized
                        />
                     </div>

                     <div className="absolute bottom-[0] left-1/2 z-0 h-[1565px] w-[1832px] 2xl:w-[100%] -translate-x-1/2">
                        <Image
                           className="origin-bottom translate-y-0"
                           src="/about-bg-img-2.png"
                           alt="Hero Image"
                           fill
                           quality={100}
                           priority
                           unoptimized
                        />
                     </div>
                  </div>
               </div>
            </div>
            <Header />
            <main className="relative z-30 mx-auto max-w-container">

               <div className="hero-container pt-[150px] md:pt-[225px] lg:pt-[287px] px-[32px] md:px-[28px] lg:px-[96px] pb-[99px] md:pb:-[150px] lg:pb-[189px] relative h-full w-full">
                  <section className="section flex w-full items-center bg-transparent">
                     {/* HERO DESCRIPTION  */}
                     <div className="hero-content relative z-30 md:px-[68px] lg:px-0 flex w-full flex-col items-center">
                        <h1 className="heading-2 md:text-[72px] lg:text-[80px] bold mb-[20px] md:mb-[36px] lg:mb-[32px] flex max-w-[288px] sm:max-w-[100%] lg:w-[964px] flex-col text-center">
                           <div className="hero-headline">
                              We make
                              <span className="text-primary-5 md:text-[72px] lg:text-[80px] bold"> business dreams </span>
                              come true
                           </div>
                        </h1>
                        <p className="about-description !font-normal title-300 lg:base-100 max-w-[288px] sm:max-w-[600px] text-center">
                           Whether you’re a small business or enterprise corporation, we build solutions that make your business effortless.
                        </p>
                     </div>
                  </section>
               </div>

               <div className="who-we-are-container py-[48px] md:py-[72px] lg:py-[124px] px-[32px] md:px-[54px] lg:px-[68px] w-full">
                  <div className='w-full flex flex-col lg:flex-row gap-[32px] md:gap-[64px]'>

                     <div className='w-full lg:w-[50%] bg-gray-500/10 rounded-[10px] md:rounded-[20px] backdrop-blur-[6px] flex flex-col p-[16px] md:p-[40px]'>
                        <h5 className='heading-6 text-accent-4 font-semibold'>Who we are</h5>
                        <h2 className='heading-1 sm:heading-3 text-1 mb-[24px] md:mb-[36px] mt-[2px]'>Empowering Entrepreneurs to Transform the World</h2>
                        <p className='base-100 text-[14px] md:text-[16px] text-2 self-stretch'>Founded in the innovation hub of San Francisco, Startercode was launched by Co-founders Ronald and Jason with the purpose of creating a world where starting or running a business is a little less daunting.<br /><br />

                           As entrepreneurs ourselves, we understand the challenges of building and maintaining a successful business. We recognize that business owners usually excel in their craft, services or products, rather than marketing, systemization, and operational efficiency.<br /><br />

                           Startercode aims to bridge this gap. We use technology to provide comprehensive solutions and support to help entrepreneurs focus on what they do best – bringing their unique value to the market. We are driven by the belief that business make the world a better place, and we are committed to turning visions into reality.</p>
                     </div>

                     <div className='w-full lg:w-[50%] flex flex-col md:flex-row relative'>
                        <div className='flex w-full h-[240px] md:h-[480px] lg:h-[auto] rounded-[10px] md:rounded-[16px] overflow-hidden relative'>
                           <Image
                              src="/who-we-are-img-1.png"
                              alt="Who we are"
                              className='w-full object-cover'
                              fill
                              quality={100}
                              priority
                              unoptimized
                           />
                        </div>

                        <div className='relative md:absolute top-[-3px] md:top-[-24px] left-[0] md:left-[-16px] w-full md:w-[304px] flex flex-col gap-[16px] py-[16px] md:py-[20px] px-[16px] md:px-[24px] bg-primary-8 rounded-[10px] md:rounded-[16px] border-[4px] md:border-[8px] border-[#1F1F30]'>
                           <div className='flex items-center justify-between'>
                              <span className='base-100 text-[14px] md:text-[16px] font-medium text-1'>Successfully Delivered</span>

                              <Image
                                 src="/card-line.svg"
                                 alt='Card Line'
                                 width={24}
                                 height={24}
                                 quality={100}
                                 priority
                                 unoptimized
                              />
                           </div>

                           <div className='flex items-center gap-[16px]'>
                              <Image
                                 src="/card-delivered.svg"
                                 alt='Card Line'
                                 width={44}
                                 height={44}
                                 quality={100}
                                 priority
                                 unoptimized
                              />

                              <h5 className='title-200 md:heading-6 text-1 font-semibold'>+25 Projects</h5>
                           </div>
                        </div>

                        <div className='relative md:absolute bottom-[7px] md:bottom-[-20px] right-[0] md:right-[-12px] flex flex-col gap-[16px] py-[16px] md:py-[20px] px-[16px] md:px-[24px] bg-primary-8 rounded-[10px] md:rounded-[16px] border-[4px] md:border-[8px] border-[#1d1d2f]'>
                           <div className='flex items-center justify-between'>
                              <span className='base-100 text-[14px] md:text-[16px] font-medium text-1'>Resulted with</span>

                              <Image
                                 src="/card-line.svg"
                                 alt='Card Line'
                                 width={24}
                                 height={24}
                                 quality={100}
                                 priority
                                 unoptimized
                              />
                           </div>

                           <div className='flex items-center gap-[16px]'>
                              <Image
                                 src="/card-success.svg"
                                 alt='Card Line'
                                 width={44}
                                 height={44}
                                 quality={100}
                                 priority
                                 unoptimized
                              />

                              <h5 className='title-200 md:heading-6 text-1 font-semibold'>100% Project Success</h5>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

               <div className='our-team-container w-full py-[40px] md:py-[72px] lg:py-[124px] px-[32px] md:px-[54px] lg:px-[36px] flex flex-col gap-[40px] md:gap-[80px] lg:gap-[124px]'>
                  <div className='w-full flex flex-col items-center gap-[8px]'>
                     <h5 className='heading-6 text-accent-4 font-semibold'>Our Team</h5>
                     <h2 className='heading-1 sm:heading-3 text-1 font-semibold'>Meet the leaders</h2>
                  </div>

                  <div className='w-full flex flex-col lg:flex-row items-start gap-[56px] md:gap-[112px] lg:gap-[72px]'>

                     <div className='min-w-[100%] md:min-w-[450px] w-full pl-0 lg:pl-[32px] flex flex-col md:flex-row gap-[28px] md:gap-[40px] items-center md:items-start'>
                        <div className='flex'>
                           <Image
                              src="/our-team-1.png"
                              alt='Our Team'
                              className='min-w-[148px]'
                              width={148}
                              height={156}
                              quality={100}
                              priority
                              unoptimized
                           />
                        </div>

                        <div className='flex flex-col gap-[24px] relative'>
                           <Image
                              src="/our-team-apostrophe.svg"
                              alt='Our Team'
                              className='absolute top-[-40px] md:top-[-48px] left-0 md:left-[-20px]'
                              width={41}
                              height={32}
                              quality={100}
                              priority
                              unoptimized
                           />

                           <p className='base-100 text-2 text-[14px] md:text-[16px] self-stretch'>I began my coding journey 5 years ago doing automation work for a small business in South SF. I created sleek front-end designs and complex back-end applications to streamline important business processes. Now I focus my efforts on designing websites and applications for small businesses around the world.</p>

                           <div className='flex flex-col'>
                              <h5 className='title-300 text-1 text-[16px] md:text-[20px] font-bold leading-[150%]'>Ronald</h5>
                              <p className='base-100 text-3 text-[14px] md:text-[16px] self-stretch'>Co-Founder, CEO</p>
                           </div>
                        </div>
                     </div>

                     <div className='min-w-[100%] md:min-w-[450px] w-full pr-0 lg:pr-[32px] flex flex-col md:flex-row gap-[28px] md:gap-[40px] items-center md:items-start'>
                        <div className='flex'>
                           <Image
                              src="/our-team-2.png"
                              alt='Our Team'
                              className='min-w-[148px]'
                              width={148}
                              height={156}
                              quality={100}
                              priority
                              unoptimized
                           />
                        </div>

                        <div className='flex flex-col gap-[24px] relative'>
                           <Image
                              src="/our-team-apostrophe.svg"
                              alt='Our Team'
                              className='absolute top-[-40px] md:top-[-48px] left-0 md:left-[-20px]'
                              width={41}
                              height={32}
                              quality={100}
                              priority
                              unoptimized
                           />

                           <p className='base-100 text-2 text-[14px] md:text-[16px] self-stretch'>As a designer with a passion for technology, I am always on the lookout for new and exciting ways to push the boundaries of what is possible. Whether its working on a solo project or collaborating with others, I am driven by my love for design and desire to create innovative solutions. My skills and knowledge are constantly evolving, and I am always looking to take on new challenges.</p>

                           <div className='flex flex-col'>
                              <h5 className='title-300 text-1 text-[16px] md:text-[20px] font-bold leading-[150%]'>Jason</h5>
                              <p className='base-100 text-3 text-[14px] md:text-[16px] self-stretch'>Co-Founder, CTO</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='our-values-container w-full py-[48px] md:py-[72px] lg:py-[124px] px-[32px] md:px-[54px] lg:px-[36px] flex flex-col gap-[40px] md:gap-[80px] lg:gap-[124px]'>
                  <div className='w-full flex flex-col items-center gap-[8px]'>
                     <h5 className='heading-6 text-accent-4 font-semibold'>Our Values</h5>
                     <h2 className='heading-1 sm:heading-3 text-1 font-semibold'>Value/Service focus</h2>
                  </div>

                  <div className='w-full px-[0] lg:px-[32px] flex flex-col gap-[16px] md:gap-[32px]'>
                     <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[32px] lg:gap-[32px]'>
                        {
                           values?.slice(0, 3).map((v, i) => (
                              <div className='group flex flex-1 flex-col items-start gap-[24px] py-[28px] px-[24px] bg-gray-500/10 lg:hover:bg-primary-8 rounded-[16px] backdrop-blur-[6px] duration-300 ease-in-out' key={i}>
                                 <div className='bg-2 lg:group-hover:bg-primary-9 flex items-center justify-center w-[64px] h-[64px] rounded-full duration-300 ease-in-out'>
                                    <Image
                                       src={v.icon}
                                       alt='Our Values'
                                       width={32}
                                       height={32}
                                       quality={100}
                                       priority
                                       unoptimized
                                    />
                                 </div>
                                 <div className='w-full flex flex-col gap-[8px]'>
                                    <h5 className='title-300 text-1 text-[16px] md:text-[20px] leading-[162%]'>{v.title}</h5>
                                    <span className='base-100 text-3 text-[14px] md:text-[16px] font-regular'>{v.desc}</span>
                                 </div>
                              </div>
                           ))
                        }
                     </div>

                     <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[32px] lg:gap-[32px]'>
                        {
                           values?.slice(3, 5).map((v, i) => (
                              <div className='group flex flex-1 flex-col items-start gap-[24px] py-[28px] px-[24px] bg-gray-500/10 lg:hover:bg-primary-8 rounded-[16px] backdrop-blur-[6px] duration-300 ease-in-out' key={i}>
                                 <div className='bg-2 lg:group-hover:bg-primary-9 flex items-center justify-center w-[64px] h-[64px] rounded-full duration-300 ease-in-out'>
                                    <Image
                                       src={v.icon}
                                       alt='Our Values'
                                       width={32}
                                       height={32}
                                       quality={100}
                                       priority
                                       unoptimized
                                    />
                                 </div>
                                 <div className='w-full flex flex-col gap-[8px]'>
                                    <h5 className='title-300 text-1 text-[16px] md:text-[20px] leading-[162%]'>{v.title}</h5>
                                    <span className='base-100 text-3 text-[14px] md:text-[16px] font-regular'>{v.desc}</span>
                                 </div>
                              </div>
                           ))
                        }
                     </div>
                  </div>
               </div>

            </main>
            <Footer />
         </div >
      </div >
   )
}