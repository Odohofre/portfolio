import React from 'react';
import Link from 'next/link';

export default function Article({ link, title, date, summary, tags }) {
  return (
    <article className="pb-6 max-w-2xl">
      <Link href={link}>
        <h2 className="text-[26px] lg:text-3xl font-medium">{title}</h2>

        <div className="mt-[5px] lg:text-xl">
          <span>{date}</span> | <span className="text-lightcolor">{tags}</span>
        </div>
        <p className="mt-[17px]">{summary}</p>
      </Link>
    </article>
  );
}
