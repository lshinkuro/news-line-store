import React from 'react';

const Banner = ({ title, name, subtitle }) => {
  return (
    <div className="bg-blue-600 text-white p-8 text-center">
      <h1 className="text-4xl font-bold">{title} <span className="text-yellow-400">{name}</span></h1>
      <p className="mt-2">{subtitle}</p>
    </div>
  );
};

export default Banner;
