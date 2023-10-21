import './globals.css';
import { Inter } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sticky Fingers Splash Page',
  description: 'Built by mountainTopCoding(🏔️);',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
