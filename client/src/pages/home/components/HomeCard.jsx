import React from 'react';

const HomeCard = ({ homecardData }) => {
  return (
    <div className="max-w-md  bg-white rounded-xl overflow-hidden shadow-md p-6 mb-6">
      <h2 className="text-3xl font-semibold text-violet-800 mb-2 tracking-wide">
        Glowing Card
      </h2>
      <div className="grid grid-cols-3  gap-4 ">
        {homecardData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md"
          >
            <span className="text-2xl font-bold text-indigo-500 mb-2">
              {item.value}
            </span>
            <span className="text-sm text-gray-500">{item.label}</span>
          </div>
        ))}
      </div>
      <p className="text-lg mt-4 text-violet-800 font-semibold animate-pulse">
        Glowing Text Effect
      </p>
    </div>
  );
};

export default HomeCard;


