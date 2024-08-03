import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-6'>
      <div className='flex flex-col ring-1 ring-gray-200 shadow-md p-4 rounded-md'>
        <p>Cooy Right Choel Sovandara© {currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;
