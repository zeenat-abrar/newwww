import Image from "next/image";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

interface RetailHeroSectionProps {
  heading: string;
  description?: string;
  subDescription?: string;
  firstButtonText?: string;
  secondButtonText?: string;
  imageSrc?: string;
  flexClassName?: string;
  imageClassName?: string;
  descriptionClassName?: string;
}

const DashboardSection = ({
  heading,
  description,
  firstButtonText,
  secondButtonText,
  imageSrc,
  subDescription,
  flexClassName,
  imageClassName,
  descriptionClassName,
}: RetailHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <>
      <section className={cn("container flex flex-col justify-start items-center gap-14 md:flex-row py-10", flexClassName)}>
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <div>
            <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
            <p className={cn("text-base font-bold text-left", descriptionClassName)}>{description}</p>

            {subDescription && <p className="text-base text-left mt-5">{subDescription}</p>}

            {/* Button Container */}
            <div className="flex gap-4 mt-6">
              {firstButtonText && <PrimaryButton text={firstButtonText} href="/book-a-demo" />}
              {secondButtonText && <PrimaryWhiteButton text={secondButtonText} href="/about-us#contactus" />}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="infoboard"
              width={1000} // Natural width of the image
              height={900} // Natural height of the image
              className={cn("rounded-t-lg md:rounded-l-lg md:rounded-t-none", imageClassName)}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default DashboardSection;
