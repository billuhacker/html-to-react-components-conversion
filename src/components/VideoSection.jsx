import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-10 md:py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-start items-center">
          <div className="md:w-1/2 flex justify-center items-center relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <a
              className="relative z-10"
              href="https://www.youtube.com/watch?v=ARA0AxrnHdM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
                src="img/play-icon.png"
                alt="Play Video"
              />
            </a>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12">
            <h6 className="text-lg font-medium text-gray-700">Live Coffee making process.</h6>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              We Telecast our <br /> Coffee Making Live
            </h1>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-gray-800">We are here to listen from you and deliver excellence</span>
            </p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua.
            </p>
            <img className="w-40 md:w-48" src="img/signature.png" alt="Signature" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
