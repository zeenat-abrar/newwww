import Image from "next/image";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface RetailHeroSectionProps {
  heading: string;
  description?: string;
  imageSrc?: string;
  imageClassName?: string;
}

const TabsContent = ({ heading, description, imageSrc }: RetailHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <section className="px-[73px] mx-auto flex flex-col justify-center items-center md:flex-row py-10">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-between p-8 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <div>
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
          <p className="text-xl font-bold text-left">{description}</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center z-[-1]">
        {imageSrc && (
          <Image
            src="https://i0.wp.com/infoveave.com/wp-content/uploads/2024/03/SEO-analytics-team-amico-1.png?resize=600%2C700&ssl=1"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-3/5  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        )}
      </div>
    </section>
  );
};

export default TabsContent;
