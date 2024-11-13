import Image, { StaticImageData } from "next/image";
import MainHeading from "@/components/ui/headings/main-heading";

export interface InfoboardIframeSectionProps {
  heading: string;
  iFrameSrc: string;
  image?: StaticImageData;
}

const BigInfoboardIframeSection = ({ heading, iFrameSrc, image }: InfoboardIframeSectionProps) => {
  return (
    <div className="container my-20 px-4 md:px-8">
      {/* Text Section */}
      <div className="text-center mb-10">
        <MainHeading text={heading} />
      </div>

      {/* Iframe Section */}
      <div className="hidden lg:flex w-full lg:justify-center">
        <iframe src={iFrameSrc} width="75%" height="571px" loading="lazy"></iframe>
      </div>

      {/* Iframe Section */}
      <div className="lg:hidden w-full flex justify-center border border-gray-100">
        {image && (
          <Image
            src={image}
            alt="Iframe-Images"
            width={2048} // Natural width of the image
            height={1804} // Natural height of the image
          />
        )}
      </div>
    </div>
  );
};

export default BigInfoboardIframeSection;
