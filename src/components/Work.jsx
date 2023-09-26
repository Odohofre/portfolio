import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Work({ link, img, title, year, type, summary }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <Image
          className="lg:w-[246px] lg:h-[180px]"
          src={img}
          width={339}
          height={230}
          alt={title}
        />
      </div>
      <Link href={link}>
        <div className="flex flex-col lg:ml-[18px] mt-4 lg:mt-0">
          <h2 className="text-2xl lg:text-3xl font-medium">{title}</h2>
          <div className="mt-2 lg:mt-4">
            <span className="bg-darkcolor lg:text-lg text-white font-extrabold rounded-2xl leading-[60px] px-2 mr-2">
              {year}
            </span>
            <span className="lg:text-xl text-lightcolor">{type}</span>
          </div>
          <p className='mt-[19px]'>{summary}</p>
        </div>
      </Link>
    </div>
  );
}
