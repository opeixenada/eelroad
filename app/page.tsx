'use client';

import React from 'react';
import { EelLogo } from '@/components/EelLogo';

const Hero = () => (
  <section className="h-screen w-screen flex items-center justify-center">
    <EelLogo />
  </section>
);

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
    </main>
  );
}
