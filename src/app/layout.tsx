import type { Metadata } from 'next';
import { Poppins, Readex_Pro } from 'next/font/google';
import './styles/globals.css';

import { GoogleTagManager } from '@next/third-parties/google';

const header = Readex_Pro({
  subsets: ['latin'],
  variable: '--font-header',
  weight: ['600'],
});
const body = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Startercode: Creative Web Design & Custom Software Development',
  description:
    'Startercode is a San Francisco based web development company that provides creative web design, custom software development and web optimization for businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="1VYza85xL8qD-LwBEil3VskYjDAQgIAN2z7mVzBWlcA"
      />
      <body
        className={`${header.variable} ${body.variable} relative overflow-x-hidden bg-1`}
      >
        {children}
      </body>
      <GoogleTagManager gtmId="GTM-WN9SXJXB" />
    </html>
  );
}

//GOOGEL ANALYTICS TRIGGER CLASS NAMES
// - free-consultation-link
// - small-business-link
// - learn-more-btn
// - learn-more-content
// - portfolio-link
// - testimony-link
// - contact-submit-btn
// - sb-process-btn
