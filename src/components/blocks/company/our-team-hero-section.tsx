import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface RetailHeroSectionProps {
  heading: string;
  description: string;
  description2: string;
}
const OurTeamSection = ({ heading, description, description2 }: RetailHeroSectionProps) => {
  const dynamicHeading = heading.split("|");
  return (
    <div className="xl:max-w-[100rem] xl:mx-auto flex justify-center items-center py-20 px-28">
      <div>
        <div>
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} alignText="center" />
        </div>
        <p className="text-black text-base text-center">{description}</p>
        <p className="text-black text-base text-center">{description2}</p>
      </div>
    </div>
  );
};
export default OurTeamSection;
