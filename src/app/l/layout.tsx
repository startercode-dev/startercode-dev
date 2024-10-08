import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startercode: Small Business Web Design & Marketing Solutions',
  description:
    "Startercode's small business web design and marketing solution focuses on creating a unique and professional website that driven growth into your business",
};

export default function SmallBusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
