import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface RetailHeroSectionProps {
  heading: string;
  description: string;
}

const AboutParagraph = ({ heading, description }: RetailHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    // <div className="container mx-auto flex flex-col md:flex-row mt-28">
    <div className="container mx-auto flex flex-col md:flex-row">
      {/* Text Section */}
      <div className="w-full flex items-center justify-center rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
          </div>
          <p className="text-base text-center leading-8 text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutParagraph;
