import AreaChartIcon from "@/assets/area-chart.svg";
import BarChartIcon from "@/assets/bar-chart.svg";
import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import ColumnChartIcon from "@/assets/column-chart.svg";
import FlowChartIcon from "@/assets/flow-chart.svg";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { GradientTextCardSection } from "@/components/blocks/platforms/gradient-cards";
import { NonGradientImageTextCardSection } from "@/components/blocks/platforms/non-gradient-image-cards";
import PlatformPageHeroSection from "@/components/blocks/platforms/platform-page-hero-section";
import WorkflowSliderSection from "@/components/blocks/platforms/workflow-type-sliders";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("data-automation");
}

//Hero Section Props
const platformPageHeroSectionHeading = "Automate your |business processes|";
const platformPageHeroSectionDescription = "Make informed decisions by simplifying, optimizing & automating your data pipelines";
const platformPageHeroSectionBulletPoints = [
  "Automate data collection and publishing",
  "Enhance data flow efficiency & increase productivity",
  "Build low-code data pipelines",
];
const platformPageHeroSectionFirstButtonText = "Book a demo";
const platformPageHeroSectionFirstButtonHref = "/book-a-demo";
const platformPageHeroSectionSecondButtonText = "Contact sales";
const platformPageHeroSectionSecondButtonHref = "/about-us#contactus";
const platformPageHeroSectionVideoSrc = "https://infoveave.com/wp-content/uploads/2024/02/fusedata-automation-vp9-chrome.webm";

// Gradient Cards Props
const gradientCardsHeading = "Unleash the power of your data";

const gradientCardsContent = [
  {
    id: 1,
    title: "Ingest",
    description: "Ingest data with our connectors to native solutions, SaaS apps, cloud platforms & databases.",
  },
  {
    id: 2,
    title: "Transform",
    description: "Efficiently transform your raw data from its source format & get useful insights.",
  },
  {
    id: 3,
    title: "Optimize",
    description: "Enhance your data quality, by removing errors, redundancy & inconsistencies.",
  },
  {
    id: 4,
    title: "Enrich",
    description: "Enhance your dataset with calculated values, filling in the extra information.",
  },
];

// Non Gradient Cards Props
const nonGradientCardsHeading = "Implementing automations effortlessly";

const nonGradientCardsDescription =
  "Infoveave® works with businesses to help them thrive via automation and innovation. We provide end-to-end services for automating processes and strategies, as well as business models that address automation issues throughout the functional domains of the business.";

const nonGradientCardsContent = [
  {
    id: 1,
    title: "Identify Process",
    description: "Identify all the repetitive, rule-based and well-defined processes, to be automated.",
  },
  {
    id: 2,
    title: "Configure Tasks",
    description: "Customize the necessary contributing tasks for the identified business process automation.",
  },
  {
    id: 3,
    title: "Configure Jobs",
    description: "Build the automation in Infoveave® using drag-drop feature and linking the related tasks. ",
  },
  {
    id: 4,
    title: "Monitor & Optimize",
    description: "Monitor & optimize the process to ensure their efficiency, effectiveness & performance.",
  },
];

//Success Stories

const caseStudyHeading = "Check out how Infoveave helped a leading Australian utilities provider to automate their billing process";

const caseStudyButtonText = "Customer story";

const caseStudyButtonHref = "/australian-utility-provider-uses-rpa-to-improve-billing-efficiency";

const progressSliderHeading = "|Workflow| with 100+ Options";

const sliderItems = [
  {
    desc: "Applications",
    buttonIcon: AreaChartIcon,
  },
  {
    desc: "Databases",
    buttonIcon: ColumnChartIcon,
  },
  {
    desc: "Files",
    buttonIcon: BarChartIcon,
  },
  {
    desc: "Transformations",
    buttonIcon: FlowChartIcon,
  },
];

const DataAutomation = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <PlatformPageHeroSection
        heading={platformPageHeroSectionHeading}
        description={platformPageHeroSectionDescription}
        bulletPoints={platformPageHeroSectionBulletPoints}
        firstButtonText={platformPageHeroSectionFirstButtonText}
        firstButtonHref={platformPageHeroSectionFirstButtonHref}
        secondButtonText={platformPageHeroSectionSecondButtonText}
        secondButtonHref={platformPageHeroSectionSecondButtonHref}
        videoSrc={platformPageHeroSectionVideoSrc}
      />
      <GradientTextCardSection
        cards={gradientCardsContent}
        numberOfCardsInARow={4}
        gradientBackground={true}
        heading={gradientCardsHeading}
        cardBackgroundClassName="bg-ivindigo-500 h-[250px]"
      />
      <WorkflowSliderSection heading={progressSliderHeading} items={sliderItems} />
      {/* <InfiniteLogoSlider
        heading={logoSliderSectionHeading}
        description={logoSliderSectionDescription}
        firstButtonText={logoSliderSectionFirstButtonText}
        logos1={logos1}
        logos2={logos2}
        logos3={logos3}
      /> */}
      <BookADemoSection heading={caseStudyHeading} buttonText={caseStudyButtonText} href={caseStudyButtonHref} />
      <NonGradientImageTextCardSection
        cards={nonGradientCardsContent}
        numberOfCardsInARow={4}
        heading={nonGradientCardsHeading}
        description={nonGradientCardsDescription}
      />
      <Footer />
    </section>
  );
};

export default DataAutomation;
