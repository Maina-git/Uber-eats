import React from 'react';
import Hero from '@/components/home/hero/page';
import Suggestions from '@/components/home/suggestions/page';

const page = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Hero/>
      <Suggestions/>
    </div>
  );
}

export default page;
