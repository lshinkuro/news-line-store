import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import StepIndicator from '../Components/SteperIndicator';
import BottomNavbar from '../Components/BottomNavbar';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../Redux/CounterSlice';

const Contact = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar/>
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p>This is the Contact page. Here you can find our contact information.</p>

            <div className='mt-6'>
              <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <span>{count}</span>
              <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"

                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </div>
        </div>

       
        <BottomNavbar/>
        <Footer/>
    </div>

    
  );
};

export default Contact;
