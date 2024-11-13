import { cn } from "@/lib/utils";

interface MainHeadingProps {
  firstText: string;
  specialText?: string;
  lastText?: string;
  alignText?: "left" | "center" | "right"; // Restrict to valid values
  textColorClassName?: string;
}

const MainHeadingWithSpan = ({ firstText, specialText, lastText, alignText = "left", textColorClassName }: MainHeadingProps) => {
  return (
    <h1 className={cn(`font-secondary text-xl lg:text-2xl font-semibold mb-5 text-${alignText}`, textColorClassName)}>
      {firstText} <span className={cn("text-ivviolet-500", textColorClassName == "text-white" ? "text-white" : "text-ivviolet-500")}>{specialText}</span>{" "}
      {lastText}
    </h1>
  );
};

export default MainHeadingWithSpan;
