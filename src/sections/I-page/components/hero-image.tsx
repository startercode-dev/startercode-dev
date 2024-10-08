import Image from 'next/image';
import Link from 'next/link';

export function HeroImage() {
  return (
    // <div className="max-h-794 relative w-full max-w-[720px] px-4">
    //   {/* Google Reviews */}
    //   <div className="absolute top-1 right-5 w-fit sm:right-5 sm:top-3">
    //     <Link
    //       href="https://www.google.com/search?q=startercode&rlz=1C5CHFA_enUS1081US1086&oq=star&gs_lcrp=EgZjaHJvbWUqDggCEEUYJxg7GIAEGIoFMgYIABBFGEEyBggBEEUYPDIOCAIQRRgnGDsYgAQYigUyCggDEC4YsQMYgAQyEAgEEC4YxwEYsQMY0QMYgAQyBggFEEUYPTIGCAYQRRhBMgYIBxBFGDzSAQgzMDIwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
    //       title="Checkout our Google Business profile"
    //       aria-label="Link to our Google Business profile"
    //       className="group"
    //     >
    //       <div className="rounded-secondary flex flex-row items-center justify-center bg-[#6B7280]/30 p-2 transition-colors duration-300 group-hover:bg-blue-100/20 sm:h-[76px] sm:p-4">
    //         <Image
    //           className="pr-5 max-sm:w-[130px] max-sm:pr-2"
    //           src="/I-google_rating.svg"
    //           alt="Google Rating"
    //           height={30}
    //           width={150}
    //         />
    //         <span className="title-300 sm:title-200 lg:title-300 semibold pr-3 ">
    //           25 Reviews on
    //         </span>
    //         <Image
    //           className="max-sm:w-[26px]"
    //           src="/I-google_logo.svg"
    //           alt="Google Logo"
    //           height={30}
    //           width={30}
    //         />
    //       </div>
    //     </Link>
    //   </div>

    //   <div className="rounded-secondary mx-auto h-fit w-fit overflow-hidden">
    //     <Image
    //       className="-mt-20 lg:-mt-5 xl:-mt-20 "
    //       src="/ronald-3.webp"
    //       alt="Profile Image"
    //       width={596}
    //       height={717}
    //       priority
    //       objectFit="contain"
    //     />
    //   </div>

    //   {/* Upwork */}
    //   <div className="relative bottom-36 max-w-fit sm:absolute sm:bottom-3 sm:left-5 left-1 lg:bottom-36 xl:bottom-3">
    //     <Link
    //       href="https://www.upwork.com/freelancers/~01f1b62f384148c5d1"
    //       title="Checkout our Upwork profile"
    //       aria-label="Link to our Upwork profile"
    //       className="group"
    //     >
    //       <div
    //         className="rounded-secondary flex h-[36px] flex-row items-center justify-center bg-[#6b7280]/40 p-2 px-4 transition-colors duration-300 group-hover:bg-blue-100/20 sm:h-[76px] "
    //       >
    //         <Image
    //           className="mr-3 max-sm:w-[35px]"
    //           src="/I-top_rated_plus_logo.svg"
    //           alt="Upwork Top Rated Plug"
    //           height={30}
    //           width={34}
    //         />
    //         <span className="display-inline title-300 sm:title-200 lg:title-300 semibold !text-1">
    //           Top Rated Plus Badge on
    //         </span>
    //         <Image
    //           className="ml-3 max-sm:w-[35px]"
    //           src="/I-upwork_logo.svg"
    //           alt="Upwork Logo"
    //           height={30}
    //           width={30}
    //         />
    //       </div>
    //     </Link>
    //   </div>

    //   {/* Features */}
    //   <div className="sm:absolute sm:bottom-24 sm:left-5 lg:bottom-1 xl:bottom-24 relative bottom-32">
    //     <div className="title-300 sm:title-200 lg:title-300 sm:rounded-lg bg-[#1d1d2f]/90 p-2 font-semibold text-white sm:p-4 lg:max-w-[482px]">
    //       <ul className="space-y-1">
    //         <li className="flex items-center">
    //           <span className="mr-2 text-primary-5">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="size-6"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    //               />
    //             </svg>
    //           </span>{' '}
    //           Custom Code
    //         </li>

    //         <li className="flex items-center">
    //           <span className="mr-2 text-primary-5">
    //             {' '}
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="size-6"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    //               />
    //             </svg>
    //           </span>{' '}
    //           CMS (Wordpress, Wix, & Webflow)
    //         </li>
    //         <li className="flex items-center">
    //           <span className="mr-2 text-primary-5">
    //             {' '}
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="size-6"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    //               />
    //             </svg>
    //           </span>{' '}
    //           Hosting & Maintenance
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="item-center content-container flex h-fit w-full justify-center">
      <div className="relative sm:px-8">
        {/* Google Reviews */}
        <div className="absolute right-0 top-9 z-50 w-fit max-sm:hidden">
          <Link
            href="https://www.google.com/search?q=startercode&rlz=1C5CHFA_enUS1081US1086&oq=star&gs_lcrp=EgZjaHJvbWUqDggCEEUYJxg7GIAEGIoFMgYIABBFGEEyBggBEEUYPDIOCAIQRRgnGDsYgAQYigUyCggDEC4YsQMYgAQyEAgEEC4YxwEYsQMY0QMYgAQyBggFEEUYPTIGCAYQRRhBMgYIBxBFGDzSAQgzMDIwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
            title="Checkout our Google Business profile"
            aria-label="Link to our Google Business profile"
            className="group"
          >
            <div className="rounded-secondary flex flex-row items-center justify-center bg-[#40444E]/80 p-2 transition-colors duration-300 group-hover:bg-blue-900/80 sm:h-[76px] sm:p-4">
              <Image
                className="pr-5 max-sm:w-[130px] max-sm:pr-2"
                src="/I-google_rating.svg"
                alt="Google Rating"
                height={30}
                width={150}
              />
              <span className="title-300 sm:title-200 lg:title-300 semibold pr-3 ">
                25 Reviews on
              </span>
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
        {/* Upwork */}
        <div className="absolute bottom-9 left-0 z-50 w-fit max-sm:hidden">
          <Link
            href="https://www.upwork.com/freelancers/~01f1b62f384148c5d1"
            title="Checkout our Upwork profile"
            aria-label="Link to our Upwork profile"
            className="group"
          >
            <div className="rounded-secondary flex h-[36px] flex-row items-center justify-center bg-[#40444E]/80 p-2 px-4 transition-colors duration-300 group-hover:bg-blue-900/80 sm:h-[76px]">
              <Image
                className="mr-3 max-sm:w-[35px]"
                src="/I-top_rated_plus_logo.svg"
                alt="Upwork Top Rated Plug"
                height={30}
                width={34}
              />
              <span className="display-inline title-300 sm:title-200 lg:title-300 semibold !text-1">
                Top Rated Plus Badge on
              </span>
              <Image
                className="ml-3 max-sm:w-[35px]"
                src="/I-upwork_logo.svg"
                alt="Upwork Logo"
                height={30}
                width={30}
              />
            </div>
          </Link>
        </div>
        <div className="rounded-primary h-fit overflow-hidden border-2 border-primary-7">
          <Image
            className="scale-105 max-lg:w-full max-lg:max-w-[720px]"
            src="/ronald-portrait.jpg"
            alt="Profile Image"
            width={1000}
            height={1400}
            priority
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
