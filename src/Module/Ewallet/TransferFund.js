import React, { useState } from 'react';

const TransferFunds = ({ onTransfer }) => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onTransfer(amount, recipient);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Transfer Funds</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Recipient</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Transfer</button>
      </form>
    </div>
  );
};

export default TransferFunds;
