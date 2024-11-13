import { cn } from "@/lib/utils";

interface MainHeadingProps {
  text: string;
  alignText?: string;
  colorClass?: string;
}

const MainHeading = ({ text, alignText, colorClass }: MainHeadingProps) => {
  const alignTextClass = alignText != undefined ? "text-" + alignText : "";
  return <h1 className={cn("text-xl lg:text-2xl font-semibold text-center", alignTextClass, colorClass)}>{text}</h1>;
};

export default MainHeading;
