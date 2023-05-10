import { Inter, Open_Sans } from 'next/font/google';
import './globals.css';

import Navbar from 'app/(shared)/Navbar';
import Footer from 'app/(shared)/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'App With GPT',
  description: 'Incorporating GPT',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
