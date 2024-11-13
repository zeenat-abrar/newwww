import { StaticImageData } from "next/image";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import ImageSlider from "@/components/ui/image-slider";

interface SliderItems {
  img: StaticImageData;
  desc: string;
  buttonIcon: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface ProgressSliderPageProps {
  heading: string;
  description: string;
  description2: string;
  items: SliderItems[];
}

export default function ProgressSliderPage({ heading, description, description2, items }: ProgressSliderPageProps) {
  const dynamicHeading = heading.split("|");

  return (
    <main className="relative flex flex-col justify-center bg-slate-50 overflow-hidden py-20">
      <div className="xl:max-w-[100rem] xl:mx-auto xl:px-[104px] text-center mb-8">
        <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} alignText="center" />
        <p className="text-base text-center">{description}</p>
        <p className="text-base text-center mt-4">{description2}</p>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-8">
        <div className="flex justify-center">
          <ImageSlider items={items} />
        </div>
      </div>
    </main>
  );
}
