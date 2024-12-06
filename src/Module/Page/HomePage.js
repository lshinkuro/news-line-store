import Card from '../Components/CardPage';
import Banner from '../Components/Banner';
import CarouselComponent from '../Components/Carousel';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React,{ useState, useEffect } from 'react';
import CardLoader from '../Components/CardLoader';
import CardWithLink from '../Components/CardWithLink';
import { get } from '../../Network/ApiConfig';
import BottomNavbar from '../Components/BottomNavbar';


const HomePage = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
         // Example GET request
        const fetchData = async () => {
            try {
            const response = await get('/users'); // Adjust this endpoint as needed
            setCards(response);
            } catch (error) {
            console.error('Error fetching data:', error);
            } finally {
            setLoading(false);
            }
        };
    
        // fetchData();
    }, []);

    const listName = [{
        name: "jacob",
        age: 24
    }]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <Banner 
         title={`Welcome to Our Homepage `}
         name={listName[0].name.toUpperCase()}
         subtitle="This is a banner section with some introductory text." />
      <div className="w-full p-8">
        <CarouselComponent />
      </div>
      <div className="container mx-auto p-8">
        <div className="grid lg:grid-cols md:grid-cols-4  gap-4">   

          {loading ? (
              // Show placeholders if loading
              Array.from({ length: 4 }).map((_, index) => (
                <CardLoader key={index} />
              ))
            ) : (
              // Show actual cards when data is loaded
            <p>as</p>
            )}
          </div>
          </div>
          <div className="p-4 bg-blue-600 ">
            <p className="font-sans ... text-2xl font-semibold text-left text-white py-4" >The quick brown fox ...</p>
          <div className="grid lg:grid-cols md:grid-cols-4 gap-2 mb-8">
            {Array.from({ length: 4 }).map((_, index) => (
             <CardWithLink/>
            ))}
          </div>  
        </div>
        <BottomNavbar/>
        <Footer />
    </div>
  );
};

export default HomePage;
