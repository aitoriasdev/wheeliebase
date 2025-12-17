import type {Metadata} from 'next';
import {inter} from '@/app/ui/fonts.ts';
import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Wheeliebase',
    default: 'Wheeliebase',
  },
  description:
    'Wheeliebase allows users to easily search, view, and compare detailed specifications for motorcycles across various manufacturers and models.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
