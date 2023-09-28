import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from '../asset/portfolio.jpeg';

export default function Hero() {
  return (
    <section className="flex flex-col items-center lg:items-start justify-center h-screen px-6 pb-4">
      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-between lg:items-start">
        <div className="flex-grow-0 relative order-1 lg:order-2 rounded-full overflow-hidden h-[171px] w-[171px] lg:h-[243px] object-contain lg:w-[243px] ">
          <Image
            src={image}
            fill={true}
            alt="image of Bright"
            priority={true}
          />
        </div>
        <div className="order-2 lg:order-1 flex-grow-0 text-center lg:text-left mt-8 lg:mt-0 max-w-sm lg:mr-[115px]">
          <div>
            <h1 className="text-darkcolor text-[32px] lg:text-[44px] font-bold">
              Hi, I am Bright, <br /> Web Developer
            </h1>
            <p className="mt-7 lg:mt-9 text-darkcolor">
              I create dynamic and exciting websites using cutting-edge tool. I
              also write to educate others.
            </p>
          </div>
        </div>
      </div>

      <Link
        href="/BRIGHT_ODOHOFRE_CV.pdf"
        download="Bright Odohofre CV"
        target="_blank"
        rel="noreferrer"
      >
        <button
          type="button"
          className="bg-primary text-white rounded-sm py-2 w-52 mt-7 lg:mt-9"
        >
          Download Resume
        </button>
      </Link>
    </section>
  );
}
