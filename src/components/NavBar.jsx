import React from 'react';
import Link from 'next/link';

const Navbar = ({ toggle }) => {
  return (
    <nav className="w-full h-20 sticky top-0">
      <div className="container mx-auto px-[60px] h-full">
        <div className="flex justify-end items-center h-full">
          <ul className="hidden md:flex gap-x-6 text-black text-xl font-medium">
            <li className='hover:text-primary'>
              <Link href="/blog">
                <p>Blog</p>
              </Link>
            </li>
            <li className='hover:text-primary'>
              <Link href="/work">
                <p>Works</p>
              </Link>
            </li>
            <li className='hover:text-primary'>
              <Link href="#footer">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="inline-flex items-center md:hidden right-[5%] absolute"
            onClick={toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
