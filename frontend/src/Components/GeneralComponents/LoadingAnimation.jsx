import React from 'react';

const LoadingAnimation = () => {
   
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-80 bottom-80">
            <h1 className='text-4xl text-green-600 font-bold'>AffluenceLinks</h1>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="flex space-x-2 animate-spin">
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            <div className="w-5 h-5 bg-green-700 rounded-full"></div>
            <div className="w-5 h-5 bg-green-500 rounded-full">

            </div>
            <div className="w-5 h-5 bg-green-700 rounded-full"></div>
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
