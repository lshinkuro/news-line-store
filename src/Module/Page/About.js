import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import TimelineItem from '../Components/TimlineItem';
import { get } from '../../Network/ApiConfig';
import BottomNavbar from '../Components/BottomNavbar';

const About = () => {
    const [timelineData, setTimeLineData] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
         // Example GET request
        const fetchData = async () => {
            try {
            const response = await get('/timeline'); // Adjust this endpoint as needed
            setTimeLineData(response);
            } catch (error) {
            console.error('Error fetching data:', error);
            } finally {
            setLoading(false);
            }
        };
    
        fetchData();
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
     <Navbar/>
     <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p>This is the About page. Here you can find information about our company.</p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-8">
      {timelineData.map((item, index) => (
        <TimelineItem 
          key={index}
          date={item.date}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </ol>
    </div>
    <BottomNavbar/>
 </div>
  );
};

export default About;
