import React from 'react';
import SuggestionCard from '@/components/cards/SuggestionCard';
import { SUGGESTIONS } from '@/app/data/Data';
import Header from '@/components/sectionheader/Header';


const Suggestions= () => {
  return (
    <div className="w-full h-auto">
      <Header title="Suggestions"/>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 items-center">
        {
          SUGGESTIONS.map((item)=>{
            return (
            <SuggestionCard
            key={item.id}
            title={item.title}
            description={item.Description}
            img={item.img}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default Suggestions;
