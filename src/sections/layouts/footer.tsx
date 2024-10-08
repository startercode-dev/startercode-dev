'use client';
import { ArrowUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

const navLinks = [
  {
    name: 'Services',
    link: '/',
    class: '',
    label: 'See the services we offer',
    dropdown: {
      value: true,
      links: [
        {
          name: 'Small business web design services',
          href: '/small-business-web-design',
          label: 'Learn more about our small business web design services',
        },
        {
          name: 'Custom design & software development',
          href: '/',
          label:
            'Learn more about our custom design and software development services',
          disabled: true,
        },
      ],
    },
  },
  {
    name: 'Portfolio',
    link: '/',
    class: 'portfolio-btn',
    label: 'View our diverse portfolio projects',
    dropdown: {
      value: false,
    },
    omit: ['home'],
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ronaldthecoder/',
    label: 'Check out our Instagram profile',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Tiktok',
    href: 'https://www.tiktok.com/@ronaldthecoder',
    label: 'Check out our Tiktok page',
    icon: (props) => (
      <svg
        fill="currentColor"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/ronaldthecoder',
    label: 'Check out our facebook profile',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: 'Github',
    href: 'https://github.com/startercode-dev',
    label: 'Check out our Github',
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="currentColor"
        {...props}
      >
        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
      </svg>
    ),
  },
  // {
  //   name: 'YouTube',
  //   href: '/',
  //   label: 'Check out our facebook profile',
  //   icon: (props) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path
  //         fillRule="evenodd"
  //         d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   ),
  // },
  // {
  //   name: 'Facebook',
  //   href: '/',
  //   label: 'Check out our facebook profile',
  //   icon: (props) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path
  //         fillRule="evenodd"
  //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   ),
  // },
];

export default function Footer() {
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const pathname = usePathname();

  //SCROLL TO THE TOP
  gsap.registerPlugin(ScrollToPlugin);
  useEffect(() => {
    let backToTheTop = document.getElementById('backToTheTopBtn');

    backToTheTop?.addEventListener('click', (e) => {
      gsap.to(window, { duration: 3, scrollTo: '#hero' });
    });
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setServiceMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const serviceMenuHandler = () => {
    setServiceMenuOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <footer className="section relative z-20 py-12" id="footer-home">
      <div className="section-container">
        {/* Container div for footer content */}
        <div className="mb-content-md grid grid-cols-4 place-items-center max-lg:mb-16 max-lg:flex-col max-lg:gap-y-10 max-md:grid-cols-1 max-sm:mb-10">
          <Link href="/" aria-label="Company Logo" title="Go to our homepage">
            <Image
              src="/startercode-logo.png"
              width={176.99}
              height={33}
              alt="Starter Code Logo"
              title="Go to the starter code home page"
              aria-label="Go to the starter code home page"
              className="px-4"
            />
          </Link>

          <nav className=" w-full max-md:col-span-1 md:col-span-2 md:col-start-2 xl:col-span-2 xl:col-start-2 ">
            <ul className="grid h-full grid-cols-2 max-md:relative">
              {navLinks.map((link, i) => {
                const footerButton =
                  pathname == '/contact' ? (
                    ''
                  ) : (
                    <button
                      aria-label={link.label}
                      className={`link-2 flex gap-2 group-hover:text-grey-400 ${link.class}`}
                    >
                      <span>{link.name}</span>
                    </button>
                  );
                return (
                  <li
                    className=" mx-auto flex h-auto px-1 py-3 md:relative"
                    key={i}
                  >
                    {link.dropdown.value ? (
                      <div>
                        <button
                          aria-label={link.label}
                          ref={dropdownRef}
                          className="link-2 group relative flex cursor-pointer items-center gap-2 hover:text-grey-400"
                          onClick={serviceMenuHandler}
                          tabIndex={-1}
                        >
                          <span>{link.name}</span>
                          <ChevronDownIcon className="h-4" />

                          {link.dropdown.value ? (
                            <div
                              className={clsx(
                                'absolute -left-3 top-11 z-40 grid grid-rows-0fr overflow-hidden opacity-0 transition-all duration-300 ease-in-out has-[:focus]:grid-rows-1fr has-[:focus]:opacity-100 md:group-hover:grid-rows-1fr md:group-hover:opacity-100',
                                {
                                  'max-md:grid-rows-1fr max-md:opacity-100':
                                    serviceMenuOpen,
                                },
                              )}
                            >
                              <ul
                                className={clsx(
                                  'grid w-[325px] gap-4 overflow-hidden rounded-secondary-desktop border border-primary-6 bg-primary-9 px-4 backdrop-blur-md transition-all duration-300 ease-in-out has-[:focus]:py-5 max-[440px]:w-[calc(100vw-80px)] md:group-hover:py-5',
                                  {
                                    'max-md:py-5': serviceMenuOpen,
                                  },
                                )}
                              >
                                {link.dropdown.links &&
                                  link.dropdown.links.map((element, i) => {
                                    const linkSelected = element.disabled ? (
                                      <span className="cursor-default">
                                        <span className="text-primary-7">
                                          {element.name}
                                          {' - '}
                                        </span>
                                        <span className="text-accent-6">
                                          Coming soon
                                        </span>
                                      </span>
                                    ) : (
                                      <Link
                                        href={element.href}
                                        className="link-2 small-business-link"
                                        aria-label={element.label}
                                        title={element.label}
                                      >
                                        {element.name}
                                      </Link>
                                    );

                                    return (
                                      <li key={i} className="text-left">
                                        {linkSelected}
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          ) : (
                            ''
                          )}
                        </button>
                      </div>
                    ) : (
                      footerButton
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="col-start-4 max-md:col-start-1">
            <button
              aria-label="Scroll back to the top of page"
              className="link-2 inline-flex flex-row items-center justify-center gap-4 px-2 py-1 max-md:translate-x-2"
              id="backToTheTopBtn"
            >
              <span>Back to top</span>
              <ArrowUpIcon className="h-4" />
            </button>
          </div>
        </div>

        <div className="mb-content-3xl grid grid-cols-4 place-items-center">
          <div className="px-2 max-md:col-span-4">
            <p className="base-100 bold text-center">Business Location:</p>
            <p className="base-200 mb-content-sm text-center">
              San Francisco, California
            </p>
            <ul className="flex flex-row justify-center gap-2">
              {socialLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    title={`Check out our ${link.name}`}
                  >
                    <link.icon className="h-6 w-6 text-primary-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-4 place-items-center">
          <p className="base-200 col-start-1 px-2 text-center max-md:col-span-2 max-md:col-start-2 max-sm:col-span-4 max-sm:text-center">
            {`© ${new Date().getFullYear()} startercode All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
