import Work from '@/components/Work';
import pic1 from '@/asset/Stage 2.png';
import pic2 from '@/asset/Stage 3.png';

export default function page() {
  return (
    <main className="flex flex-col items-center px-[18px] w-full mb-24 mt-6">
      <h1 className="lg:text-[44px] text-3xl font-bold le">Work</h1>
      <section className="flex flex-col items-center lg:items-start space-y-10 mt-8">
        <Work
          link="https://moviebox-blush.vercel.app/"
          img={pic1}
          title="MovieBox"
          year="2023"
          type="Movie"
          summary="This site shows the trending movies"
        />

        <Work
          link="https://dnd-image-gallery-pi.vercel.app/"
          img={pic2}
          title="Drag and Drop Image Gallery"
          year="2023"
          type="Gallery"
          summary="This site shows images which can be rearrange in any manner of your choosing"
        />
      </section>
    </main>
  );
}
