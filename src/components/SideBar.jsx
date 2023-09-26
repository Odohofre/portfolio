import React from 'react';
import Link from 'next/link'

export default function SideBar({isOpen, toggle}) {

  return (
    <div
      className="sidebar-container bg-white/[0.04] backdrop-blur-2xl fixed w-2/3 h-full overflow-hidden 
    justify-center bg-white grid pt-[120px] right-0 z-20"
      style={{
        opacity: `${isOpen ? '1' : '0'}`,
        top: ` ${isOpen ? '0' : '-100%'}`,
      }}
    >
      <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className='space-y-10'>
          <li><Link href="/blog" onClick={toggle}>Blog</Link></li>
          <li><Link href="/work" onClick={toggle}>Works</Link></li>
          <li><Link href="#footer" onClick={toggle}>Contact</Link></li>
        </ul>
    </div>
  );
}
