import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='bg-black py-4 shadow-sm fixed w-full'>
      <div className="container mx-auto px-6">
        <Link to="/books" className='text-white font-bold text-2xl md:text-4xl'>My BookStore</Link>
      </div>
    </nav>
  )
}

export default Header;