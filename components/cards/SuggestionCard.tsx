import React from 'react';

interface Props {
  title: string;
  description: string;
  img: string;
}

const SuggestionCard = ({title, description, img }: Props) => {
  return (
    <div
      className="bg-gray-100 rounded-lg p-8 flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-300 h-[180px] overflow-hidden">
      <div className="flex flex-col gap-2 w-[70%]">
        <h1 className="text-xl font-semibold text-gray-500 truncate">{title}</h1>

        <p className="text-gray-600 text-[12px] line-clamp-3 overflow-hidden text-ellipsis">
          {description}
        </p>
        <button className="mt-2 w-fit px-4 py-2 cursor-pointer bg-white text-black rounded-md hover:bg-gray-300">
          Details
        </button>
      </div>

      <img
        className="w-[100px] h-[100px] object-cover rounded-md"
        src={img}
        alt="suggest img"/>
    </div>
  );
};

export default SuggestionCard;
