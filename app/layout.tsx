import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'StartHub Academy',
  description: 'SEO optimized course detail pages with Next.js',
  icons: 'favicon.ico'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        {children}
      </body>
    </html>
  );
}