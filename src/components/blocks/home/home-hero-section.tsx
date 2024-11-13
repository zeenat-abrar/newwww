import Image, { StaticImageData } from "next/image";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import HeadingForHero from "@/components/ui/headings/heaidng-for-hero";
import { cn } from "@/lib/utils";

interface HomeHeroSectionProps {
  heading: string;
  description?: string;
  subDescription?: string;
  firstButtonText: string;
  firstButtonHref: string;
  secondButtonText?: string;
  secondButtonHref: string;
  imageSrc?: StaticImageData;
  imageClassName?: string;
  descriptionClassName?: string;
}

const HomeHeroSection = ({
  heading,
  description,
  firstButtonText,
  firstButtonHref,
  secondButtonText,
  secondButtonHref,
  imageSrc,
  imageClassName,
  descriptionClassName,
}: HomeHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <section className="xl:max-w-[1260px] 2xl:max-w-[1420px] 3xl:max-w-[100rem] xl:mx-auto px-[3%] 3xl:px-[104px] flex flex-col justify-center items-center lg:flex-row pt-4 pb-10 xl:py-20">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-between rounded-b-lg lg:rounded-r-lg lg:rounded-b-none">
        <div>
          <HeadingForHero firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
          <p className={cn("text-base text-left", descriptionClassName)}>{description}</p>

          {/* Button Container */}
          <div className="flex gap-4 mt-6">
            <PrimaryButton text={firstButtonText} href={firstButtonHref} />
            <PrimaryWhiteButton text={secondButtonText as string} href={secondButtonHref} />
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 xl:mt-0">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Infoveave-image"
            width={2048} // Natural width of the image
            height={1804} // Natural height of the image
            className={cn("rounded-t-lg md:rounded-l-lg md:rounded-t-none", imageClassName)}
          />
        )}
      </div>
    </section>
  );
};

export default HomeHeroSection;
