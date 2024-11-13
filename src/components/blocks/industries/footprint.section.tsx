import Image, { StaticImageData } from "next/image";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import CircularCarouselWithBoxes from "./circular-carousel-with-boxes";

export interface FootprintSectionSectionProps {
  heading?: string;
  description?: string;
}

//circular carousel
const carouselItems = [
  {
    label: "Sales and Services",
    description: "Channel performance and incentives, service performance, customer satisfaction,workflow analytics, cancellations and refunds.",
  },
  {
    label: "Sales and Services",
    description: "Channel performance and incentives, service performance, customer satisfaction,workflow analytics, cancellations and refunds.",
  },
  {
    label: "Sales and Services",
    description: "Channel performance and incentives, service performance, customer satisfaction,workflow analytics, cancellations and refunds.",
  },
  {
    label: "Sales and Services",
    description: "Channel performance and incentives, service performance, customer satisfaction,workflow analytics, cancellations and refunds.",
  },
  {
    label: "Sales and Services",
    description: "Channel performance and incentives, service performance, customer satisfaction,workflow analytics, cancellations and refunds.",
  },
  {
    label: "Sales and Services",
    description: "Channel performance and incentives, service performance, customer satisfaction,workflow analytics, cancellations and refunds.",
  },
];

const labels = carouselItems.map((e) => e.label);
const descriptions = carouselItems.map((e) => e.description);

const FootprintSectionSection = ({ heading, description }: FootprintSectionSectionProps) => {
  const dynamicHeading = heading?.split("|") ?? "";

  return (
    <div className="xl:max-w-[100rem] xl:mx-auto mx-auto py-20">
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
      <section className="flex justify-center mb-20">
        <CircularCarouselWithBoxes radius={120} duration={15000} descriptions={descriptions} labels={labels} />
      </section>
    </div>
  );
};

export default FootprintSectionSection;
