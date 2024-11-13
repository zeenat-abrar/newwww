import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface VideoSectionProps {
  heading?: string;
  description?: string;
  videoSrc: string;
}

const VideoSection = ({ heading, description, videoSrc }: VideoSectionProps) => {
  const dynamicHeading = heading?.split("|") ?? "";

  return (
    <div className="container mx-auto py-10">
      {/* Text Section */}
      {(heading || description) && (
        <div className="w-full flex items-center justify-center p-8 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
          <div className="text-center">
            {/* <MainHeading text={heading} alignText="left" /> */}
            {heading && <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />}
            {description && <p className="text-base text-left font-bold">{description}</p>}
          </div>
        </div>
      )}

      {/* Video Section */}
      <div className="w-full flex items-center justify-center mt-20 pt-5 pb-10">
        <video
          src={videoSrc}
          width={"70%"}
          autoPlay // Autoplays the video
          loop // Loops the video
          muted // Mutes the video
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          style={{ marginTop: "-100px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }} // Apply inline style for negative margin
        />
      </div>
    </div>
  );
};

export default VideoSection;
