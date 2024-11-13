import { StaticImageData } from "next/image";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import WorkflowSlider from "@/components/ui/workflow-slider";

interface SliderItems {
  desc: string;
  buttonIcon?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface WorkflowSliderSectionProps {
  heading: string;
  description?: string;
  description2?: string;
  items: SliderItems[];
}

export default function WorkflowSliderSection({ heading, description, description2, items }: WorkflowSliderSectionProps) {
  const dynamicHeading = heading.split("|");

  return (
    <main className="relative flex flex-col justify-center bg-slate-50 overflow-hidden pt-20 pb-12">
      <div className="xl:max-w-[100rem] xl:mx-auto xl:px-[104px] text-center mb-8">
        <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} alignText="center" />
        {description != undefined && <p className="text-base text-center">{description}</p>}
        {description2 != undefined && <p className="text-base text-center mt-4">{description2}</p>}
      </div>
      <div className="w-full max-w-[100rem] mx-auto px-[3%] lg:px-[104px]">
        <div className="flex justify-center">
          <WorkflowSlider items={items} />
        </div>
      </div>
    </main>
  );
}
