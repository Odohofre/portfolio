import Image from 'next/image';
import Link from 'next/link';

export default function Work({ link, img, title, year, type, summary }) {
  return (
    <div className="flex flex-col lg:flex-row py-5 lg:py-8">
      <div>
        <Image
          className="lg:w-[246px] lg:h-[180px] rounded-md"
          src={img}
          width={339}
          height={230}
          alt={title}
        />
      </div>

      <div className="flex flex-col lg:ml-[18px] mt-4 lg:mt-0">
        <Link href={link}>
          {' '}
          <h2 className="text-2xl lg:text-3xl font-medium">{title}</h2>
        </Link>
        <div className="mt-2 lg:mt-4">
          <span className="inline-block bg-darkcolor lg:text-lg text-white font-extrabold rounded-2xl leading-loose px-3 mr-6">
            {year}
          </span>
          <span className="lg:text-xl text-lightcolor">{type}</span>
        </div>
        <p className="mt-4 lg:mt-5">{summary}</p>
      </div>
    </div>
  );
}
