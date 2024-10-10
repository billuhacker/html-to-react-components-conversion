import React from 'react';
// Importing the video file
import sampleVideo from '../assets/videos/sample-video.mp4';

const VideoSection = () => {
  return (
    <section className="py-10 md:py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-start items-center">
          {/* Video player */}
          <div className="md:w-1/2 flex justify-center items-center relative">
            <video
              className="w-full h-full md:w-3/4 lg:w-full rounded-lg"
              controls
              preload="metadata"
            >
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12">
            <h6 className="text-lg font-medium text-gray-700">Live Coffee making process.</h6>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              We Telecast our <br /> Coffee Making Live
            </h1>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-gray-800">
                We are here to listen from you and deliver excellence
              </span>
            </p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img className="w-40 md:w-48" src="./src/assets/react.svg" alt="Signature" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
