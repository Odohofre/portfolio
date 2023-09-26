import Article from "@/components/Article";

export default function page() {
  return (
    <div className="flex flex-col items-center px-[18px] w-full mb-24 mt-6">

      <h1 className="lg:text-[44px] text-3xl font-bold leading-[60px]">Blog</h1>
      <section className="flex flex-col mt-[18px] divide-y divide-[#E0E0E0] max-w-2xl">
        <Article link="https://brighto.hashnode.dev/markdown-essentials-a-beginners-guide" title="Markdown Essentials" date="21-Sept-2023" summary="In today's digital age, Markdown simplifies web content creation. It's a lightweight markup language offering accessibility, versatility, and widespread use. Learn Markdown for clear and stylish web and document creation." tags="Markdown, Writing" />
        <div>
          
        </div>
      </section>
      
    </div>
  )
}

