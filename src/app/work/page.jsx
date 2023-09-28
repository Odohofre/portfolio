import pic1 from '@/asset/Stage 2.png';
import pic2 from '@/asset/Stage 3.png';
import Works from '@/components/Works';

export default function page() {
  return (
    <main className="flex flex-col items-center px-[18px] w-full mb-24 mt-6">
      <h1 className="lg:text-[44px] text-3xl font-bold">Work</h1>
      <Works />
    </main>
  );
}
