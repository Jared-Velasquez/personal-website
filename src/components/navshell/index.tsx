"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/Navbar';

export default function NavShell({ children }: { children: React.ReactNode }) {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsTopOfPage(window.scrollY === 0); // ← use Y only
    handleScroll(); // initialize on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {children}
    </>
  );
}
