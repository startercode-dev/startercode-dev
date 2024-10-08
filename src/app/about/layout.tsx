import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startercode About Us',
  description: 'Description About us',
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
