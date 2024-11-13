import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface PlatformLeftSideVideoSectionProps {
  heading: string;
  description: string;
  subDescription?: string;
  firstButtonText: string;
  firstButtonHref: string;
  secondButtonText: string;
  secondButtonHref: string;
  videoSrc: string;
}

const PlatformLeftSideVideoSection = ({
  heading,
  description,
  subDescription,
  firstButtonText,
  firstButtonHref,
  secondButtonText,
  secondButtonHref,
  videoSrc,
}: PlatformLeftSideVideoSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <div className="xl:max-w-[100rem] xl:mx-auto mx-auto flex flex-col md:flex-row py-20 px-[3%] xl:px-[104px] bg-white">
      {/* Video Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-20 pt-5 pb-2">
        <video
          src={videoSrc}
          autoPlay // Autoplays the video
          loop // Loops the video
          muted // Mutes the video
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          style={{ marginTop: "-100px" }} // Apply inline style for negative margin
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-8 xl:p-8 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <div className="text-center">
          {/* <MainHeading text={heading} alignText="left" /> */}
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
          <p className="text-base text-left font-bold">{description}</p>

          {/* Render bullet points if available */}
          {subDescription && <p className="text-base text-left mt-4">{subDescription}</p>}

          {/* Button Container */}
          <div className="flex gap-4 mt-6">
            <PrimaryButton text={firstButtonText} href={firstButtonHref} />
            <PrimaryWhiteButton text={secondButtonText} href={secondButtonHref} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformLeftSideVideoSection;
