import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className="mb-2">
            {transaction.date}: ${transaction.amount} - {transaction.description}
          </li>
        ))}
      </ul>
      <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Detail Transaction</button>

    </div>
  );
};

export default TransactionHistory;
