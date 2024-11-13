import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { InfoveaveLogo } from "@/components/ui/infoveave-logo";

interface RetailHeroSectionProps {
  description: string;
  heading: string;
}

const InfoveaveSection = ({ description, heading }: RetailHeroSectionProps) => {
  const dynamicHeading = heading.split("|");
  return (
    <div className="xl:max-w-[100rem] px-[3%] xl:px-[104px] mx-auto flex flex-col items-center justify-center py-12">
      <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
      <p className="text-base text-black text-center">{description}</p>
      <div className="flex flex-col md:flex-row items-center justify-center text-left w-full mt-6">
        <div className="w-full xl:w-1/2 flex justify-center mb-5 md:mb-0">
          <InfoveaveLogo multiplier={2.2} />
        </div>
        <div className="w-full xl:w-1/2">
          <h3 className="text-xl font-semibold text-center md:text-left">
            Infoveave = <span className="text-ivviolet-600">Info</span>rmation + <span className="text-ivviolet-600">Fovea</span> + Wea
            <span className="text-ivviolet-600">ve</span>
          </h3>
          <p className="text-[12px] text-center md:text-left">
            (<span className="italic">Fovea is part of the human eye that is responsible for clarity of sight.</span>)
          </p>
          <p className="text-base mt-2 text-center md:text-left">
            The name denotes the core function of the Infoveave which is, weaving information from multiple sources to deliver insights that help businesses
            with clarity in decision-making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoveaveSection;
