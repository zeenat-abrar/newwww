import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

export type buttonsType = {
  text: string;
  href: string;
};

export interface IndustriesPageHeroSectionProps {
  heading: string;
  description?: string;
  subDescription?: string;
  bulletPoints?: string[];
  buttons?: buttonsType[];
  alt: string;
  imageSrc?: StaticImageData;
  imageClassName?: string;
  descriptionClassName?: string;
}

const IndustriesPageHeroSection = ({
  heading,
  description,
  buttons,
  imageSrc,
  subDescription,
  bulletPoints = [],
  imageClassName,
  descriptionClassName,
  alt,
}: IndustriesPageHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <>
      {/* Preload the image */}
      <Head>{imageSrc && <link rel="preload" as="image" href={imageSrc.src} />}</Head>
      <section className="xl:max-w-[100rem] xl:mx-auto px-[3%] xl:px-[104px] mx-auto flex flex-col justify-center items-center md:flex-row py-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex items-center justify-between rounded-b-lg md:rounded-r-lg md:rounded-b-none">
          <div>
            <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
            <p className={cn("text-base font-semibold text-left", descriptionClassName)}>{description}</p>

            {subDescription && <p className="text-base text-left mt-5">{subDescription}</p>}

            {/* Render bullet points if available */}
            {bulletPoints.length > 0 && (
              <ul className="list-disc text-base list-outside ml-4 xl:ml-[17px] mt-4 text-left space-y-2">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}

            {/* Button Container */}
            {buttons != undefined && (
              <div className="flex gap-4 mt-6">
                {buttons[0] != undefined && <PrimaryButton text={buttons[0].text} href={buttons[0].href} />}
                {buttons[1] != undefined && <PrimaryWhiteButton text={buttons[1].text} href={buttons[1].href} />}
              </div>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-[-1]">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={alt}
              width={2048} // Natural width of the image
              height={1804} // Natural height of the image
              className={cn("rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full xl:w-[87%]", imageClassName)}
              priority={true} // This will preload the image
              loading="eager" // Disable lazy loading for faster display
            />
          )}
        </div>
      </section>
    </>
  );
};

export default IndustriesPageHeroSection;
