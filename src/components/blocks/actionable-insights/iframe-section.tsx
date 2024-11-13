import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

interface RetailHeroSectionProps {
  heading: string;
  description?: string;
  subDescription?: string;
  firstButtonText?: string;
  secondButtonText?: string;
  iframe?: string;
  imageClassName?: string;
  descriptionClassName?: string;
}

const IframeSection = ({ heading, description, firstButtonText, secondButtonText, iframe, subDescription, descriptionClassName }: RetailHeroSectionProps) => {
  const dynamicHeading = heading.split("|");

  return (
    <section className="px-[73px] mx-auto gap-16 flex flex-col justify-center items-center md:flex-row py-20">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-between p-8 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <div>
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
          <p className={cn("text-xl font-bold text-left", descriptionClassName)}>{description}</p>

          {subDescription && <p className="text-base text-left mt-5">{subDescription}</p>}

          {/* Button Container */}
          <div className="flex gap-4 mt-6">
            {firstButtonText && <PrimaryButton text={firstButtonText} href="/book-a-demo" />}
            {secondButtonText && <PrimaryWhiteButton text={secondButtonText} href="/about-us#contactus" />}
          </div>
        </div>
      </div>

      {/* Iframe Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">{iframe && <iframe src={iframe} width="100%" height="363px" loading="lazy" />}</div>
    </section>
  );
};

export default IframeSection;
