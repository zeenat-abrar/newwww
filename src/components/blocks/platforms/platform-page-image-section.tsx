import Image, { StaticImageData } from "next/image";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface PlatformPageHeroSectionProps {
  heading: string;
  description: string;
  bulletPoints?: string[];
  firstButtonText: string;
  firstButtonHref: string;
  secondButtonText?: string;
  secondButtonHref?: string;
  imageSrc: StaticImageData;
}

const PlatformPageImageSection = ({
  heading,
  description,
  bulletPoints = [],
  firstButtonText,
  firstButtonHref,
  secondButtonText,
  secondButtonHref,
  imageSrc,
}: PlatformPageHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <div className="xl:max-w-[100rem] xl:mx-auto px-[104px] mx-auto flex flex-col md:flex-row py-10 bg-white">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <div className="text-center">
          {/* <MainHeading text={heading} alignText="left" /> */}
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
          <p className="text-base text-left font-bold">{description}</p>

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
            <PrimaryButton text={firstButtonText} href={firstButtonHref} />
            {secondButtonText && secondButtonHref != undefined && <PrimaryWhiteButton text={secondButtonText} href={secondButtonHref} />}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-20 pt-5 pb-2">
        <Image
          src={imageSrc}
          alt="Infoveave- web based automation image"
          width={2048} // Natural width of the image
          height={1804} // Natural height of the image
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          // style={{ marginTop: "-20px" }} // Apply inline style for negative margin
        />
      </div>
    </div>
  );
};

export default PlatformPageImageSection;
