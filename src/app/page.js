import Hero from '@/components/Hero';
import Post from '@/components/Post';
import Works from '@/components/Works';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center leading-normal text-darkcolor">
      <Hero />
      <section className="px-[18px] flex justify-center w-full bg-[#edf7fa] pt-4 pb-8 space-y-4 lg:space-y-0">
        <div className="max-w-5xl  pt-4 pb-8 space-y-4 lg:space-y-0">
          <div className="flex w-full items-center justify-center lg:justify-between">
            <h2 className="text-lg lg:text-[22px] text-center lg:text-left leading-loose">
              Recent posts
            </h2>
            <Link
              href="/blog"
              className="hidden lg:inline-block text-secondary"
            >
              View All
            </Link>
          </div>
          <div>
            <Post
              link="https://brighto.hashnode.dev/markdown-essentials-a-beginners-guide"
              title="Markdown Essentials"
              date_published="21 Sept 2023"
              summary="In today's digital age, Markdown simplifies web content creation. It's a lightweight markup language offering accessibility, versatility, and widespread use."
              tags="Markdown, Writing"
            />
          </div>
        </div>
      </section>
      <section className="px-[18px] mt-4">
        <h2 className="text-[22px] text-center lg:text-left leading-loose">
          Featured works
        </h2>
        <Works />
      </section>
    </main>
  );
}
