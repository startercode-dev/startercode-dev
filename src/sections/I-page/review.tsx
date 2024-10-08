'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative z-30" id="hero">
      <div className="hero-container relative w-full">
        <section className="section section-container pt-section-sm pb-section-xl flex w-full flex-col gap-16 bg-transparent max-lg:gap-7">
          <div className="flex justify-center ">
            <Link
              href="https://www.yelp.com/biz/startercode-san-francisco-4?osq=startercode&override_cta=Request+a+consultation"
              title="Checkout our Yelp profile"
              aria-label="Link to our Yelp profile"
              className="group"
            >
              <div className="rounded-secondary flex h-[83px] w-[455px] flex-row items-center justify-center bg-blue-100/10 px-6 py-5 backdrop-blur-[1.5px] transition-colors duration-300 group-hover:bg-blue-100/20 max-sm:w-full max-sm:px-4 3xl:w-[550px]">
                <Image
                  className="pr-5 max-sm:w-[130px] max-sm:pr-3"
                  src="/I-yelp_rating.svg"
                  alt="yelp Rating"
                  height={34}
                  width={194}
                />
                <span className="title-200 semibold pr-3">19 Reviews on</span>
                <Image
                  className="max-sm:w-[26px]"
                  src="/I-yelp_logo.svg"
                  alt="Yelp Logo"
                  height={30}
                  width={30}
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-7">
            <div className="flex justify-center">
              <Link
                href="https://www.google.com/search?q=startercode&rlz=1C5CHFA_enUS1081US1086&oq=star&gs_lcrp=EgZjaHJvbWUqDggCEEUYJxg7GIAEGIoFMgYIABBFGEEyBggBEEUYPDIOCAIQRRgnGDsYgAQYigUyCggDEC4YsQMYgAQyEAgEEC4YxwEYsQMY0QMYgAQyBggFEEUYPTIGCAYQRRhBMgYIBxBFGDzSAQgzMDIwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                title="Checkout our Google Business profile"
                aria-label="Link to our Google Business profile"
                className="group"
              >
                <div className="rounded-secondary flex h-[83px] w-[455px] flex-row items-center justify-center bg-blue-100/10 px-6 py-5 backdrop-blur-[1.5px] transition-colors duration-300 group-hover:bg-blue-100/20 max-sm:w-full max-sm:px-4 3xl:w-[550px]">
                  <Image
                    className="pr-5 max-sm:w-[130px] max-sm:pr-2"
                    src="/I-google_rating.svg"
                    alt="Google Rating"
                    height={30}
                    width={150}
                  />
                  <span className="title-200 semibold pr-3">25 Reviews on</span>
                  <Image
                    className="max-sm:w-[26px]"
                    src="/I-google_logo.svg"
                    alt="Google Logo"
                    height={30}
                    width={30}
                  />
                </div>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://www.upwork.com/freelancers/~01f1b62f384148c5d1"
                title="Checkout our Upwork profile"
                aria-label="Link to our Upwork profile"
                className="group"
              >
                <div className="rounded-secondary flex h-[83px] w-[455px] flex-row items-center justify-center bg-blue-100/10 px-6 py-4 backdrop-blur-[1.5px] transition-colors duration-300 group-hover:bg-blue-100/20 max-sm:w-full max-sm:px-4 3xl:w-[550px]">
                  <Image
                    className="mr-3 max-sm:mr-2 max-sm:w-[35px]"
                    src="/I-top_rated_plus_logo.svg"
                    alt="Upwork Top Rated Plug"
                    height={45}
                    width={45}
                  />
                  <span className="title-200 semibold !text-1">
                    Top Rated Plus &nbsp;
                  </span>
                  <span className="title-200 semibold pr-3">badge on</span>
                  <Image
                    className="max-sm:w-[26px]"
                    src="/I-upwork_logo.svg"
                    alt="Upwork Logo"
                    height={30}
                    width={30}
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
