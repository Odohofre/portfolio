import Work from './Work';
import pic1 from '@/asset/Stage 2.png';
import pic2 from '@/asset/Stage 3.png';

export default function Works() {
  return (
    <section className="flex flex-col items-center lg:items-start divide-y-2 divide-[#e0e0e0]">
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
  );
}
