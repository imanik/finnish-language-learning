import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstructionPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-teal-50 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center font-['Roboto']">
             <Link to="/beginars" className="text-teal-700 hover:underline bg-teal-100 mb-6 inline-block fixed top-0 left-0 w-full  px-4 py-2 shadow-md">
          ← Back to Beginars Lesson
        </Link>
      <h1 className="text-4xl font-bold text-teal-700 mb-8 col-span-full text-center mt-16">
       This page is under construction. Please check back later.
      </h1>
        </div>
    );
};

export default UnderConstructionPage;