import React from 'react';
// import ReactTooltip from 'react-tooltip';
import { Tooltip } from 'react-tooltip';

const Card = ({ title, description, imageUrl, tooltipText }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
            id='my-anchor-element'
            data-tip={tooltipText}
        />
        <Tooltip anchorSelect="#my-anchor-element" clickable>
        <button>You can click me!</button>
        </Tooltip>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;

