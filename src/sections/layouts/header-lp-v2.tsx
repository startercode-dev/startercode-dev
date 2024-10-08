'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'Services',
    link: '/',
    class: 'services-btn',
    label: 'See the services we offer',
    dropdown: {
      value: false,
    },
    omit: ['home'],
  },
  {
    name: 'Portfolio',
    link: '/',
    class: 'portfolio-btn',
    label: 'View our diverse starter code portfolio projects',
    dropdown: {
      value: false,
    },
    omit: ['home'],
  },
];

export default function Header({ openModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const initialLoad = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [openServiceMenu, setOpenServiceMenu] = useState(false);

  gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollToPlugin);

  const pathname = usePathname();

  useEffect(() => {
    let portfolioBtn = document.querySelectorAll('.portfolio-btn');

    portfolioBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        gsap.to(window, { duration: 2, scrollTo: '#portfolio' });
      });
    });

    let servicesBtn = document.querySelectorAll('.services-btn');

    servicesBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        gsap.to(window, { duration: 2, scrollTo: '#services-sb' });
      });
    });

    let ctaButton = document.querySelector('.header-cta-btn');
    let firstNameInput = document.querySelector('#first-name');

    ctaButton?.addEventListener('click', (e) => {
      setTimeout(() => {
        firstNameInput?.focus();
      }, 100);
    });
    ctaButton?.addEventListener('touchstart', (e) => {
      setTimeout(() => {
        firstNameInput?.focus();
      }, 100);
    });
  }, []);

  useEffect(() => {
    const body = document.body;
    const mediaQuery = window.matchMedia('(min-width: 1025px');

    mediaQuery.addEventListener('change', (e) => {
      setIsLargeScreen(e.matches);
    });

    if (mobileMenuOpen) {
      if (isLargeScreen) {
        body.classList.remove('overflow-hidden');
      } else {
        initialLoad.current = body.classList.add('overflow-hidden');
      }
    } else if (!mobileMenuOpen) {
      if (initialLoad.current !== null) {
        body.classList.remove('overflow-hidden');
      }
    }
  }, [mobileMenuOpen, isLargeScreen]);

  const mobileMenuHandler = () => {
    setMobileMenuOpen((prevState) => {
      return !prevState;
    });
  };

  const mobileServiceHandler = () => {
    setOpenServiceMenu((prev) => !prev);
  };

  return (
    <header className=" absolute left-1/2 z-40 w-full -translate-x-1/2 bg-transparent max-lg:border-none">
      {/* overlay */}
      <div
        className={clsx(
          'overlay absolute z-20 w-svw transition-all duration-300 lg:hidden',
          {
            'h-svh bg-slate-950/40 backdrop-blur-3xl': mobileMenuOpen,
            'h-0': !mobileMenuOpen,
          },
        )}
      ></div>

      {/* DESKTOP SECTION */}
      <section className="section-container grid grid-cols-4 items-center py-6 max-lg:hidden 3xl:py-8">
        <div className="flex justify-center">
          <Link href="/" aria-label="Company Logo" title="Go to our homepage">
            <Image
              src="/startercode-logo.png"
              width={176.99}
              height={33}
              alt="Starter Code Logo"
              title="Go to the starter code home page"
              aria-label="Go to the starter code home page"
            />
          </Link>
        </div>
        <nav className="col-span-2">
          <ul className="grid h-full grid-cols-2">
            {navLinks.map((link, i) => {
              const headerButton =
                pathname == '/contact' ||
                pathname == '/small-business-thank-you-lpv1' ? (
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
                  className="group relative mx-auto flex h-auto px-1 py-3"
                  key={i}
                >
                  {link.dropdown.value ? (
                    <button
                      aria-label={link.label}
                      className="link-2 relative flex cursor-pointer items-center gap-2 font-body hover:text-grey-400"
                      tabIndex={-1}
                    >
                      <span>{link.name}</span>
                      <ChevronDownIcon className="h-4" />

                      {link.dropdown.value ? (
                        <div className="absolute -left-3 top-11 z-40 grid grid-rows-0fr overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-1fr group-hover:opacity-100 has-[:focus]:grid-rows-1fr has-[:focus]:opacity-100">
                          <ul className="grid w-[325px] gap-4 overflow-hidden rounded-secondary-desktop border border-primary-6 bg-primary-9 px-4 backdrop-blur-md transition-all duration-300 ease-in-out group-hover:py-5 has-[:focus]:py-5">
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
                  ) : (
                    headerButton
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex justify-center">
          <button
            className="header-cta-btn button-primary free-consultation-link w-10/12"
            onClick={openModal}
            aria-label="Get a free consultation now with starter code"
            title="Click here to get a free consultation with starter code"
          >
            Get A Free Consultation
          </button>
        </div>
      </section>

      {/* MOBILE GROUP */}
      <div className="hidden flex-col max-lg:flex">
        {/* MOBILE HEADER SECTION */}
        <section className="section-container w-full py-5 max-lg:grid max-lg:grid-cols-4 max-lg:items-center max-lg:justify-items-center max-md:justify-items-start">
          <Link
            href="/"
            title="Go to the starter code home page"
            aria-label="Go to the starter code home page"
            className="relative z-20 max-md:col-span-2"
          >
            <Image
              src="/startercode-logo.png"
              width={176.99}
              height={33}
              alt="Starter Code Logo"
              className="px-4"
            />
          </Link>
          <button
            onClick={mobileMenuHandler}
            className="content-container relative z-20 hidden w-fit cursor-pointer justify-self-end max-lg:col-span-1 max-lg:col-start-4 max-lg:block"
            aria-label="Mobile Menu button to see website navigation"
          >
            <Bars3Icon
              aria-hidden="true"
              className={clsx('h-8 w-8 text-grey-200 max-sm:h-7 max-sm:w-7', {
                'opacity-0': mobileMenuOpen,
              })}
            />
            <XMarkIcon
              aria-hidden="true"
              className={clsx(
                'absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 text-grey-200 max-sm:h-7 max-sm:w-7',
                {
                  'opacity-0': !mobileMenuOpen,
                },
              )}
            />
          </button>
        </section>
        {/* MOBILE DROPDOWN */}
        <div className="w-full ">
          <div
            className={clsx(
              'absolute z-30 grid w-full px-7 py-6 transition-all duration-300',
              {
                'max-lg:grid-rows-1fr': mobileMenuOpen,
                'max-lg:grid-rows-0fr': !mobileMenuOpen,
              },
            )}
          >
            <div className="overflow-hidden">
              <nav className="mb-5">
                <ul className="grid grid-flow-row">
                  {navLinks.map((link, i) => {
                    const headerButton =
                      pathname == '/contact' ||
                      pathname == '/small-business-thank-you-lpv1' ? (
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
                        className={clsx('flex h-auto w-full px-4 py-3', {
                          hidden:
                            pathname == '/contact' && link.name == 'Portfolio',
                        })}
                        key={i}
                      >
                        {link.dropdown.value ? (
                          <div className="flex flex-col items-start">
                            <button
                              aria-label={link.label}
                              className={clsx(
                                'link-2 peer flex w-fit cursor-pointer flex-row items-center gap-2 transition-all duration-300 hover:text-grey-400 focus:text-grey-400 has-[:focus]:text-grey-400',
                              )}
                              tabIndex={-1}
                              onClick={mobileServiceHandler}
                            >
                              <span className="text-xl">{link.name}</span>
                              <ChevronDownIcon className="h-5" />
                            </button>
                            {link.dropdown.value ? (
                              <div
                                className={clsx(
                                  'grid overflow-hidden pt-2 transition-all duration-300 ease-in-out has-[:focus]:grid-rows-1fr has-[:focus]:opacity-100',
                                  {
                                    'grid-rows-1fr opacity-100':
                                      openServiceMenu,
                                    'grid-rows-0fr opacity-0': !openServiceMenu,
                                  },
                                )}
                              >
                                <ul
                                  className={clsx(
                                    'grid w-[325px] overflow-hidden rounded-secondary-desktop pl-1 transition-all duration-300 ease-in-out peer-focus:pt-5 peer-has-[:hover]:pt-5',
                                  )}
                                >
                                  {link.dropdown.links.map((element, i) => {
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
                                        className="link-2 small-business-link inline-flex py-2 !text-lg"
                                        href={element.href}
                                        aria-label={element.label}
                                        title={element.label}
                                        tabIndex={!mobileMenuOpen ? -1 : 0}
                                        onClick={mobileMenuHandler}
                                      >
                                        {element.name}
                                      </Link>
                                    );
                                    return (
                                      <li key={i} className="inline-flex py-2">
                                        {linkSelected}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ) : (
                              ''
                            )}
                          </div>
                        ) : (
                          <button
                            aria-label={link.label}
                            onClick={mobileMenuHandler}
                            className={`link-2 flex gap-2 group-hover:text-grey-400 ${link.class}`}
                            tabIndex={!mobileMenuOpen ? -1 : 0}
                          >
                            <span className="text-xl">{link.name}</span>
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="mx-4 my-10 border-t border-dividers-2"></div>
              <div className=" flex w-full flex-col items-center justify-end gap-3 px-4 pb-1">
                <button
                  aria-label="Get a free consultation now with starter code"
                  className="header-cta-btn button-primary free-consultation-link w-full max-w-none py-4 text-center"
                  onClick={() => {
                    openModal();
                    mobileMenuHandler();
                  }}
                  // onClick={mobileMenuHandler}
                  tabIndex={!mobileMenuOpen ? -1 : 0}
                >
                  Get A Free Strategy Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
