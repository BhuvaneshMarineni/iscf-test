import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ISCF - International Student Christian Fellowship',
  description: 'International Student Christian Fellowship at Old Dominion University since 1995. Join our community of friendship, faith, and cross-cultural connection.',
  keywords: 'international students, Old Dominion University, ODU, Christian fellowship, Norfolk VA, Bible study, cultural exchange',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}