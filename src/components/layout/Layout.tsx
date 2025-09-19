'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import EventBanner from '@/components/ui/EventBanner';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <EventBanner />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;