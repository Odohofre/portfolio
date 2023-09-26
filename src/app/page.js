import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center leading-normal text-darkcolor lg:px-[148px]">
      <Hero />
    </main>
  )
}
