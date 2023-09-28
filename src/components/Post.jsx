import React from 'react';
import Link from 'next/link';

export default function Post({ link, title, date_published, tags, summary }) {
  return (
    <div className="px-5 bg-white py-3 rounded-[4px] max-w-[418px]">
      <Link href={link}>
        <h3 className="font-bold text-[22px]">{title}</h3>
      </Link>
      <div className="mt-3 space-x-4">
        <span>{date_published}</span> <span>|</span>
        <span>{tags}</span>
      </div>
      <p className="mt-4">{summary}</p>
    </div>
  );
}
