import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Loader } from '../components/ui/Loader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Flywings International - Here Dreams Take Wings',
  description:
    'Flywings International College of Management Studies - Training and providing competent candidates for placement in global aviation, hospitality, logistics and shipping industries.',
  keywords: [
    'aviation courses',
    'airline management',
    'airport management',
    'logistics courses',
    'shipping management',
    'hospitality courses',
    'Kochi',
    'Oddanchatram',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased overflow-x-hidden">
        <Loader />
        <div className="w-full overflow-x-hidden">
          <Header />
          <main className="w-full overflow-x-hidden pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

