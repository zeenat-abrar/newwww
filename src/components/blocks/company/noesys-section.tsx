import Image, { StaticImageData } from "next/image";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface RetailHeroSectionProps {
  description: string;
  heading?: string;
  imageSrc: StaticImageData;
}

const NoesysSection = ({ description, imageSrc }: RetailHeroSectionProps) => {
  return (
    <section className="py-14 xl:max-w-[100rem] px-[3%] xl:px-[104px] mx-auto">
      <MainHeadingWithSpan firstText="Company" specialText="" lastText="" alignText="center" />
      <div className="flex flex-col items-center md:flex-row mt-8">
        <div className="flex-1">
          <Image
            src={imageSrc}
            alt="Noesys logo"
            width={200} // Natural width of the image
            height={1000} // Natural height of the image
            // width={400}
            // height={300}
            className="mx-auto xl:mt-[6px]"
          />
        </div>

        <div className="flex-1 text-left pt-8 xl:pt-0">
          <p className="text-base text-black">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default NoesysSection;
