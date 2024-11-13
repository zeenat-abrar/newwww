import Image from "next/image";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

interface PlatformPageHeroSectionProps {
  heading: string;
  description: string;
  bulletPoints?: string[];
  firstButtonText: string;
  secondButtonText?: string;
  imgSrc: string;
  flexClassName?: string;
  descriptionClassName?: string;
}

const DashboardGalleryInfoboardSection = ({
  heading,
  description,
  bulletPoints = [],
  firstButtonText,
  secondButtonText,
  imgSrc,
  flexClassName,
  descriptionClassName,
}: PlatformPageHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <div className={cn("mx-auto flex flex-col md:flex-row py-10 px-[105px] gap-8", flexClassName)}>
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-start py-8 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <div className="text-left">
          {/* <MainHeading text={heading} alignText="left" /> */}
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
          <p className={cn("text-base text-left font-bold", descriptionClassName)}>{description}</p>

          {/* Render bullet points if available */}
          {bulletPoints.length > 0 && (
            <ul className="list-disc list-inside mt-4 text-left space-y-2">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

          {/* Button Container */}
          <div className="flex gap-4 mt-6">
            <PrimaryButton text={firstButtonText} href="" />
            {secondButtonText && <PrimaryWhiteButton text={secondButtonText} href="" />}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center pt-5 pb-2">
        <Image src={imgSrc} alt="image" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default DashboardGalleryInfoboardSection;
