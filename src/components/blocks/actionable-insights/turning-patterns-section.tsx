import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface TurningPatternProps {
  heading: string;
}

export default function TurningPattern({ heading }: TurningPatternProps) {
  const dynamicHeading = heading.split("|");
  return (
    <section className="grid grid-cols-[1fr_auto_1fr] gap-10 px-[105px] py-20 items-center">
      <div>
        <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
      </div>

      {/* Vertical line */}
      <div className="h-full border-l-2 border-gray-300"></div>

      <div>
        <p>
          Effortlessly track your key performance indicators. Unveil growth opportunities with custom thresholds and actionable insights. With the ability to
          configure automated actions, stay on top of your data without the need for constant monitoring.
        </p>
        <div className="py-5">
          <PrimaryWhiteButton text="Dashboard gallery" href="infoveave-dashboard-gallery" />
        </div>
      </div>
    </section>
  );
}
