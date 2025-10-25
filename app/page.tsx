import React from 'react';
import Hero from '@/components/home/hero/page';
import Suggestions from '@/components/home/suggestions/page';
import LoginSection from '@/components/home/loginSection/page';
import Plan from '@/components/home/plan/Plan';

const page = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Hero/>
      <Suggestions/>
     <LoginSection/>
     <Plan/>
    </div>
  );
}

export default page;
