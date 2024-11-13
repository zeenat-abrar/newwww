import Image, { StaticImageData } from "next/image";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

interface PlatformPageHeroSectionProps {
  heading: string;
  description?: string;
  bulletPoints?: string[];
  imageSrc: StaticImageData;
  parentDivClassName?: string;
}

const NguageImageSection = ({ heading, description, bulletPoints = [], imageSrc, parentDivClassName }: PlatformPageHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <section className={cn("", parentDivClassName)}>
      <div className="xl:max-w-[100rem] xl:mx-auto px-[3%] xl:px-[104px] mx-auto flex flex-col md:flex-row py-20 gap-10">
        {/* Video Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt="Infoveave- web based automation image"
            width={2048} // Natural width of the image
            height={1804} // Natural height of the image
            className="border border-gray-100"
            // style={{ marginTop: "-20px" }} // Apply inline style for negative margin
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center rounded-b-lg md:rounded-r-lg md:rounded-b-none lg:mt-[-40px]">
          <div className="text-left">
            <div className="text-center">
              {/* <MainHeading text={heading} alignText="left" /> */}
              <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
              {description != undefined && <p className="text-base text-left">{description}</p>}

              {/* Render bullet points if available */}
              {bulletPoints.length > 0 && (
                <ul className="list-disc text-base list-inside mt-4 text-left space-y-2">
                  {bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NguageImageSection;
