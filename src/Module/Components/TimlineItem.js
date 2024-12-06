import React from 'react';

const TimelineItem = ({ date, title, description, link }) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
      {link && (
        <a 
          href={link} 
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Learn more
          <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      )}
    </li>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      date: 'February 2022',
      title: 'Application UI code in Tailwind CSS',
      description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
      link: '#'
    },
    {
      date: 'March 2022',
      title: 'Marketing UI design in Figma',
      description: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.'
    },
    {
      date: 'April 2022',
      title: 'E-Commerce UI code in Tailwind CSS',
      description: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.'
    }
  ];

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
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
  );
};

export default TimelineItem;
