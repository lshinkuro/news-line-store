import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  const slides = [
    { imageUrl: 'https://images.unsplash.com/photo-1722325004266-eb21ffffc1fa?q=80&w=3254&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds://via.placeholder.com/400x300https://via.placeholder.com/800x400', caption: 'Slide 1' },
    { imageUrl: 'https://plus.unsplash.com/premium_photo-1722009043668-b3c470595df9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Slide 2' },
    { imageUrl: 'https://images.unsplash.com/photo-1722325165767-81c351f64eb2?q=80&w=2770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Slide 3' },
  ];

  return (
    <Carousel autoPlay interval={1000} infiniteLoop showThumbs={false}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.imageUrl} alt={slide.caption} className='w-full h-64 object-cover' />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
