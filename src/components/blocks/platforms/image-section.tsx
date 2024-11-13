import Image, { StaticImageData } from "next/image";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

export interface ImageSectionProps {
  heading?: string;
  description?: string;
  imageSrc: StaticImageData;
  alt: string;
  mainBackground?: string;
}

const ImageSection = ({ heading, description, imageSrc, alt, mainBackground }: ImageSectionProps) => {
  const dynamicHeading = heading?.split("|") ?? "";

  return (
    <div className={cn("", mainBackground)}>
      <div className={cn("xl:max-w-[100rem] xl:mx-auto mx-auto py-20")}>
        {/* Text Section */}
        {(heading || description) && (
          <div className="w-full flex items-center justify-center p-8 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
            <div className="text-center mb-6">
              {/* <MainHeading text={heading} alignText="left" /> */}
              {heading && <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />}
              {description && <p className="text-base text-left font-bold">{description}</p>}
            </div>
          </div>
        )}

        {/* Video Section */}
        <div className="w-full flex items-center justify-center mt-20 pt-5 pb-10">
          <Image
            src={imageSrc}
            alt={alt}
            width={1000}
            height={1000}
            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none w-9/12 mx-auto"
            style={{ marginTop: "-80px", marginBottom: "-10px" }} // Keep the negative margin as an inline style
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
