'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Scroll to top on route change
    handleScrollToTop();

    // Handle back button
    window.addEventListener('popstate', handleScrollToTop);

    // Handle page refresh
    window.addEventListener('beforeunload', handleScrollToTop);

    return () => {
      window.removeEventListener('popstate', handleScrollToTop);
      window.removeEventListener('beforeunload', handleScrollToTop);
    };
  }, [pathname]);

  return null;
}
