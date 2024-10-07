import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard'; // Import the Dashboard component

const Main = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Main;


// i want to write the echo command for git repository
// echo "# components(part a/assign 2)" >> README.md
// also to pushall my Worker to the repository
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin 
// git push -u origin main


