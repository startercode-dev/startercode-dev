import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startercode Contact Us',
  description: 'Fill out the form below to get in contact with startercode.',
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
