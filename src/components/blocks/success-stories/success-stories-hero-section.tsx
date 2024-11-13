import { StaticImageData } from "next/image";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface BlogHeroSectionProps {
  heading: string;
  description: string;
  imageSrc: StaticImageData;
}

const SuccessStoriesHeroSection = ({ heading, description, imageSrc }: BlogHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <section
      className="bg-ivindigo-500"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="xl:max-w-[100rem] 2xl:max-w-[1560px] 3xl:max-w-[100rem] px-[3%] xl:px-[104px] mx-auto flex flex-col md:flex-row xl:justify-between py-14 gap-8 xl:gap-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center rounded-b-lg md:rounded-r-lg md:rounded-b-none">
          <div className="text-center">
            <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} textColorClassName="text-white" />
            <p className="text-base text-left text-white">{description}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full xl:w-2/5 flex justify-center items-center rounded-xl overflow-hidden">
          {/* Pseudo-element for the background image with filter */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
            style={{
              backgroundImage: `url(${imageSrc.src})`,
            }}
          />
          {/* Content container */}
          <div className="relative text-center py-10 px-5 xl:px-5 md:p-20 z-10">
            <h1 className="text-xl md:text-xl font-bold mb-7 text-white">Program effectiveness and survival analysis</h1>
            <p className="text-base mb-7 text-white">
              Flexibility of Infoveave allowed data ingested to scale as per the data availability. The dataset can be from single healthcare unit or a country
              wide, for instance.
            </p>
            <div className="flex justify-center">
              <PrimaryWhiteButton text="Read more" href="/program-effectiveness-and-survival-analysis" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesHeroSection;
