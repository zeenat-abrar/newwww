import { cn } from "@/lib/utils";

interface TopSubHeadingProps {
  text: string;
  textClassName?: string;
}

const TopSubHeading = ({ text, textClassName }: TopSubHeadingProps) => {
  return (
    <div className="flex justify-center">
      <h3
        className={cn(
          "mb-6 mx-8 lg:mx-0 text-ivindigo-1000 md:font-semibold lg:text-base text-center bg-gradient-to-r from-ivindigo-200 from-20% to-transparent to-80% px-4 py-1",
          textClassName
        )}
      >
        {text}
      </h3>
    </div>
  );
};

export default TopSubHeading;
