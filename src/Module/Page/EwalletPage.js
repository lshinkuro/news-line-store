import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Balance from '../Ewallet/BalanceWallet';
import TransactionHistory from '../Ewallet/TransactionHistory';
import TransferFunds from '../Ewallet/TransferFund';
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/Footer';
import DetailTransactionHistory from '../Ewallet/DetailTransactionHistory';

const EwalletPage = () => {
      // Sample data
    const balance = 1234.56;
    const transactions = [
        { date: '2024-08-01', amount: -50.00 },
        { date: '2024-08-03', amount: +200.00 },
        { date: '2024-08-05', amount: -30.00 },
    ];
    return(
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="min-h-screen grid lg:grid-cols md:grid-cols-2  gap-4 bg-gray-100 p-8">
        <Balance balance={balance}/>
        <TransactionHistory transactions={transactions} />
        <DetailTransactionHistory />
        <TransferFunds />
      </div>
      <BottomNavbar/>
      <Footer/>
    </div>
    )
}
export default EwalletPage