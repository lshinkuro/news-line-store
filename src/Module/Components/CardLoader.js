import React from 'react';

const CardLoader = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="animate-pulse ">
            <div className="rounded-lg bg-slate-700 h-48 w-full"></div>
            <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
            </div>
            </div>
        </div>
     </div>
  );
};

export default CardLoader;