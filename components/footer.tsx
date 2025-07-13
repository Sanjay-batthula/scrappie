import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="w-full flex justify-center mt-8 select-none">
        <a
          href="https://www.linkedin.com/in/sanjay-batthula/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-green-400 animate-gradient">
            Designed and Developed by Sanjay Batthula
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
