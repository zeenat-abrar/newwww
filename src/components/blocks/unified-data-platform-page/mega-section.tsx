import Image from "next/image";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

interface RetailHeroSectionProps {
  heading: string;
  description: string[];
  imageSrc?: string;
  imageClassName?: string;
}

const MegaSection = ({ heading, description, imageSrc, imageClassName }: RetailHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <section className="xl:max-w-[100rem] xl:mx-auto px-[73px] mx-auto flex flex-col justify-center gap-24 items-center md:flex-row py-10">
      {/* Image Section */}
      <div className="w-[70%] md:w-1/2 flex items-center justify-center z-[-1]">
        {imageSrc && (
          <Image
            style={{ mixBlendMode: "multiply" }}
            src={imageSrc}
            alt="Infoveave image"
            width={700} // Natural width of the image
            height={700} // Natural height of the image
            className={cn("rounded-t-lg md:rounded-l-lg md:rounded-t-none", imageClassName)}
          />
        )}
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-between p-8 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <div>
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
          <div>
            <ul className="list-disc text-sm leading-8">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MegaSection;
