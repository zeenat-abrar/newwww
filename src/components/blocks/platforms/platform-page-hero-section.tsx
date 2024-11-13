import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface PlatformPageHeroSectionProps {
  heading: string;
  description: string;
  paragraph?: string;
  bulletPoints?: string[];
  firstButtonText: string;
  firstButtonHref: string;
  secondButtonText: string;
  secondButtonHref: string;
  videoSrc: string;
}

const PlatformPageHeroSection = ({
  heading,
  description,
  paragraph,
  bulletPoints = [],
  firstButtonText,
  firstButtonHref,
  secondButtonText,
  secondButtonHref,
  videoSrc,
}: PlatformPageHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <div className="xl:max-w-[100rem] xl:mx-auto mx-auto flex flex-col md:flex-row py-8 xl:py-20 px-[3%] xl:px-[104px] gap-8">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-start py-8 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <div className="text-left">
          {/* <MainHeading text={heading} alignText="left" /> */}
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
          <p className="text-base text-left font-bold">{description}</p>
          <p className="text-base text-left ">{paragraph}</p>

          {/* Render bullet points if available */}
          {bulletPoints.length > 0 && (
            <ul className="list-disc text-base list-inside mt-4 text-left space-y-2">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

          {/* Button Container */}
          <div className="flex gap-4 mt-6">
            <PrimaryButton text={firstButtonText} href={firstButtonHref} />
            <PrimaryWhiteButton text={secondButtonText} href={secondButtonHref} />
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-20 pt-5 pb-2">
        <video
          src={videoSrc}
          autoPlay // Autoplays the video
          loop // Loops the video
          muted // Mutes the video
          playsInline
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          style={{ marginTop: "-100px" }} // Apply inline style for negative margin
          preload="none" // Lazy load the video by not preloading it
        />
      </div>
    </div>
  );
};

export default PlatformPageHeroSection;
