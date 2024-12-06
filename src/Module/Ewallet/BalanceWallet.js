import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Current Balance</h2>
      <p className="text-lg">${balance}</p>
    </div>
  );
};

export default Balance;
