import { cn } from "@/lib/utils";

interface MainHeadingProps {
  firstText: string;
  specialText: string;
  lastText: string;
  alignText?: string; // Restrict to valid values
}

const HeadingForHero = ({ firstText, specialText, lastText, alignText }: MainHeadingProps) => {
  return (
    <h1 className={cn("font-secondary text-mobileMegaHeading xl:text-4xl my-[15px] font-semibold text-left", alignText)}>
      {firstText} <span className="text-ivviolet-500">{specialText}</span> {lastText}
    </h1>
  );
};

export default HeadingForHero;
