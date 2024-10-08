'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function LoadingAnimation({ active = true }) {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const intervalRef = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    const body = document.body;

    tl.to('.loader_percentage', {
      delay: 1,
      autoAlpha: 0,
      duration: 0.5,
    });
    tl.to('.loader_white-text', {
      autoAlpha: 1,
      duration: 0.7,
    });
    tl.to('.loader-page', {
      delay: 0.7,
      duration: 1.5,
      y: '-100%',
      ease: 'back.out',
    });
    tl.add(() => {
      body.classList.remove('overflow-hidden');
    });
  });

  useEffect(() => {
    const body = document.body;

    if (active && intervalRef.current === null) {
      body.classList.add('overflow-hidden');
      intervalRef.current = setInterval(() => {
        setLoadingPercentage((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            if (intervalRef.current) {
              clearInterval(intervalRef.current); // Clear interval when loading is complete
              intervalRef.current = null;
            }
            return prev;
          }
        });
      }, 0.5);
    }

    if (!active) {
      body.classList.remove('overflow-hidden');
    }
  }, [active]);

  return (
    <div
      className={`loader-page fixed left-0 top-0 z-50 flex h-svh w-full items-center justify-center bg-slate-900/90 backdrop-blur-2xl will-change-transform ${!active ? 'hidden' : ''}`}
    >
      <div className="relative h-full w-full">
        <Image
          className="loader_white-icon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity max-sm:scale-50"
          src="/white_icon-logo.svg"
          width={300.99}
          height={10}
          alt="Comapny Logo"
        />
        <Image
          className="loader_white-text invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity max-sm:scale-50"
          src="/white_text-logo.svg"
          width={400.99}
          height={10}
          alt="Comapny Logo"
        />
        <span className="loader_percentage absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[160px] text-1 max-sm:scale-50">
          {`${loadingPercentage < 100 ? (loadingPercentage === 0 ? '000' : '0' + loadingPercentage) : 100}`}
        </span>
      </div>
    </div>
  );
}
