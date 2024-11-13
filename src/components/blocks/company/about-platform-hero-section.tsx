import Image, { StaticImageData } from "next/image";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
interface RetailHeroSectionProps {
  heading: string;
  description: string;
  firstButtonText: string;
  firstButtonHref: string;
  secondButtonText?: string;
  imageSrc: StaticImageData;
}

const AboutPlatformHeroSectionSecond = ({ heading, description, firstButtonText, firstButtonHref, secondButtonText, imageSrc }: RetailHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <>
      <div className="xl:max-w-[100rem] px-[3%] xl:px-[104px] flex flex-col md:flex-row py-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center rounded-b-lg md:rounded-r-lg md:rounded-b-none">
          <div className="text-center">
            <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
            <p className="text-base text-left text-black mt-5">{description}</p>
            {/* Button Container */}
            <div className="flex gap-4 mt-6">
              <PrimaryButton text={firstButtonText} href={firstButtonHref} />
              {secondButtonText && <PrimaryWhiteButton text={secondButtonText} href="" />}
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-[-1]">
          <Image
            src={imageSrc}
            alt={"Infoveave-aboutUs-platform"}
            width={2048}
            height={1804}
            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full xl:w-[85%] mt-6 xl:mt-0"
            priority={true}
            loading="eager"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPlatformHeroSectionSecond;
