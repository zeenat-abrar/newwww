"use client";
import Image from "next/image";
import Fusedata from "@/assets/unified-data-platform/fusedata.svg";
import Insights from "@/assets/unified-data-platform/insights.svg";
import Ngauge from "@/assets/unified-data-platform/ngauge.svg";
import SciPyr from "@/assets/unified-data-platform/scipyr.svg";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { Tabs } from "@/components/ui/unified-data-platform-page/tabs";
//insight props
const insightsHeading = "Data Visualizations & Insights";
const insightsDescription = [
  "Create visual representations of data for insights.",
  "Modern designer dashboards.",
  "Embed data insights into business apps.",
  "Alerts & notifications.",
];
const insightsImage = "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/03/SEO-analytics-team-amico-1.png?resize=600%2C700&ssl=1";
//scipyr props
const scipyrHeading = "What-if Analysis, ML, Python";
const scipyrDescription = [
  "Support machine learning and predictive analytics.",
  "Turn valuable insights into potential future trends.",
  "Provide conversational analytics.",
  "Perform in-depth analyses, predictive and scenario modelling",
];
const scipyrImage = "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/03/Data-extraction-rafiki-3.png?resize=600%2C350&ssl=1";
//fusedata props
const fusedataHeading = "Data Acquisition, Data Integration & Data Pipelines";
const fusedataDescription = [
  "Automate data collection and publishing, transform all rule-based procedures at scale.",
  "Automate data transformations, manage workflows in real time, automate alerts and actions for zero errors.",
  "Extract data from various sources, transforming it into a usable format, and loading it into a target database or data warehouse.",
  "Data discovery, acquisition, validation.",
  "Data transformation, batch processing, data loading.",
  "Simplify, optimize, and automate data pipelines, prepare data for the data warehouse",
  "Engineer data on-prem or on-cloud, build no-code data pipelines.",
];
const fusedataImage = "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/03/Data-points-rafiki.png?resize=600%2C5000&ssl=1";
//ngauge props
const ngaugeHeading = "Data-driven apps & forms builder";
const ngaugeDescription = [
  "Collect, analyze, track and update real-time data",
  "Integrate data collection seamlessly into business",
  "Facilitate the sharing and consumption of data assets",
];
const ngaugeImage = "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/03/App-data-amico.png?resize=600%2C550&ssl=1";
export function TabsSection() {
  const tabs = [
    {
      title: "Insights",
      value: "Insights",
      imageUrl: Insights,
      content: (
        <div className="size-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-ivviolet-200 border border-ivviolet-300">
          <DummyContent description={insightsDescription} heading={insightsHeading} imageUrl={insightsImage} width={250} height={250} />
        </div>
      ),
    },
    {
      title: "SciPyR",
      value: "SciPyR",
      imageUrl: SciPyr,
      content: (
        <div className="size-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-green-100 border border-green-300">
          <DummyContent description={scipyrDescription} heading={scipyrHeading} imageUrl={scipyrImage} width={400} height={400} />
        </div>
      ),
    },
    {
      title: "Fusedata",
      value: "Fusedata",
      imageUrl: Fusedata,
      content: (
        <div className="size-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-ivindigo-200 border border-ivindigo-300">
          <DummyContent description={fusedataDescription} heading={fusedataHeading} imageUrl={fusedataImage} width={300} height={300} />
        </div>
      ),
    },
    {
      title: "NGauge",
      value: "NGauge",
      imageUrl: Ngauge,
      content: (
        <div className="size-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-green-100 border border-green-300">
          <DummyContent description={ngaugeDescription} heading={ngaugeHeading} imageUrl={ngaugeImage} width={300} height={300} />
        </div>
      ),
    },
  ];

  return (
    <div className="h-80 md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start mb-20">
      <Tabs tabs={tabs} />
    </div>
  );
}
interface Dummycontentprops {
  heading: string;
  description: string[];
  imageUrl: string;
  width: number;
  height: number;
}

const DummyContent = ({ heading, description, imageUrl, width, height }: Dummycontentprops) => {
  return (
    <section>
      <MainHeadingWithSpan firstText={heading} specialText="" lastText="" alignText="center" />
      <div className="flex mt-10 justify-between items-center px-20">
        <div>
          <ul className="list-disc text-sm leading-8">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={imageUrl} alt="image" width={width} height={height} />
        </div>
      </div>
    </section>
  );
};
