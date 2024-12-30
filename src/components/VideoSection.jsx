import React from 'react';
// Importing the video file
import sampleVideo from '../assets/videos/video2.mp4';

const VideoSection = () => {
  return (
    <section className="py-10 md:py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-start items-center">
          {/* Video player */}
          <div className="md:w-1/2 flex justify-center items-center relative">
            <video
              className="w-full h-full md:w-3/4 lg:w-full rounded-lg shadow-lg"
              controls
              preload="metadata"
            >
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12">
            <h6 className="text-lg font-medium text-gray-700">AI-Driven Learning</h6>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Master Tajweed with <br /> AI-Powered Feedback
            </h1>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-gray-800">
                Real-time pronunciation feedback with AI analysis
              </span>
              <br />
              Our app helps learners perfect their Tajweed pronunciation by providing real-time, AI-powered corrections.
            </p>
            <p className="text-gray-600 mb-6">
              The interactive learning experience ensures that every learner receives personalized guidance on their Tajweed journey. 
              Our system analyzes phonemes in real-time to offer actionable feedback.
            </p>
            <div className="flex items-center">
              <img className="w-40 md:w-48" src="./src/assets/72.webp" alt="AI Logo" />
              <span className="ml-4 text-sm text-gray-600">Powered by AI and Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
