import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black p-4 text-center flex flex-col">
      <p className='text-white'>
        &copy; {new Date().getFullYear()} My Bookstore. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;