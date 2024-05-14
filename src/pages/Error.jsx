import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='container mx-auto px-6'>
      <div className="flex justify-center items-center h-screen flex-col gap-6">
        <div className='text-2xl md:text-4xl text-black'>Page <span className='text-yellow-500'>Not </span> Found. 404 Error</div>
        <Link to="/books" className="bg-blue-500 text-white text-xl w-full max-w-[120px] my-8 md:text-xl text-center rounded-sm px-4 py-2 hover:bg-blue-600 transition-all duration-75">Go Back</Link>
      </div>
    </div>
  )
}

export default Error;