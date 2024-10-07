import React from 'react';

const Weather = () => {
  return (
    <div className="shadow-lg rounded-lg bg-white p-6">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold mb-0">11:37 PM</p>
        <a href="#" className="text-blue-500 flex items-center">
          California, CA <i className='bx bx-chevron-down ml-1'></i>
        </a>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex items-center w-2/3">
          <img src="assets/images/icons/weather/sun.png" className="w-10 h-10" alt="Weather" />
          <h1 className="text-6xl font-bold ml-4">28<span className="text-gray-500">&deg;</span></h1>
        </div>
        <div className="w-1/3 text-right">
          <p className="text-xl mb-0"><i className='bx bx-droplet'></i> 15%</p>
          <p className="text-xl mb-0"><i className='bx bx-flag'></i> 10km/h</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
