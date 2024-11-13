import { StaticImageData } from "next/image";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface BlogHeroSectionProps {
  heading: string;
  description: string;
  imageSrc: StaticImageData;
}

const BlogHeroSection = ({ heading, description, imageSrc }: BlogHeroSectionProps) => {
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
            <h1 className="text-xl md:text-xl font-bold mb-7 text-white">Go from data to decision in one unified platform</h1>
            <p className="text-base mb-7 text-white">
              A Unified Data Platform as its name indicates is an all-in-one platform that can weave dynamic, diverse and distributed data efficiently,
              assimilate it, transform it and provide a secure, scalable architecture to analyze that data.
            </p>
            <div className="flex justify-center">
              <PrimaryWhiteButton text="Read more" href="/data-to-decision-unified-data-platform" />
            </div>
          </div>
        </div>
        {/* <div className="w-full md:w-1/2 flex justify-end">
          <Link href="/data-to-decision-unified-data-platform">
            <CardContainer>
              <CardBody
                className={cn(
                  "bg-white bg-opacity-25 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl py-6 px-3 border h-[365px]",
                  "bg-opacity-25"
                )}
              >
                <CardItem translateZ="100" className="w-full">
                  <Image
                    src={imageSrc}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover group-hover/card:shadow-xl border border-gray-100"
                    alt="Infoveave- blog image"
                  />
                </CardItem>
                <CardItem translateZ="50" className="text-xl font-bold text-black dark:text-white pt-5 px-3">
                  Go from data to decision in one unified platform
                </CardItem>
              </CardBody>
            </CardContainer>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default BlogHeroSection;
