import { MdOutlineAnalytics, MdOutlineDataUsage, MdOutlineModelTraining, MdOutlineScale } from "react-icons/md";
import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { GradientTextCardSection } from "@/components/blocks/platforms/gradient-cards";
import FeatureCards from "@/components/blocks/platforms/list-cards";
import { NonGradientImageTextCardSection } from "@/components/blocks/platforms/non-gradient-image-cards";
import PlatformPageHeroSection from "@/components/blocks/platforms/platform-page-hero-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("data-analytics-machinelearning-python");
}

//Hero Section Props
const platformPageHeroSectionHeading = "Analyze, Understand, |and Predict|";
const platformPageHeroSectionDescription = "Dive into advanced analytics capabilities for deeper insights";
const platformPageHeroSectionBulletPoints = [
  "Collaborate and analyze your data in real-time",
  "Rapidly Build & Train ML Models",
  "Analyze scenarios and make informed decisions",
];
const platformPageHeroSectionFirstButtonText = "Get started";
const platformPageHeroSectionFirstButtonHref = "/sign-up";
const platformPageHeroSectionSecondButtonText = "Contact sales";
const platformPageHeroSectionSecondButtonHref = "/about-us#contactus";
const platformPageHeroSectionVideoSrc = "https://infoveave.com/wp-content/uploads/2024/01/scipyr-python2-vp9-chrome.webm";

// Gradient Cards Props
const gradientCardsHeading = "Analyze your way to success";

const gradientCardsDescription =
  "Explore patterns, predict outcomes, & perform impactful analyses for your business. Achieve efficiency & drive data-driven decisions.";

const gradientCardsContent = [
  {
    id: 1,
    title: "What-if Analysis",
    description:
      "What-if analysis, is a powerful decision-making technique that helps businesses understand the financial implications of changing one or more related factors.",
  },
  {
    id: 2,
    title: "AutoML",
    description:
      "Use AutoML to gain deeper insights from your data. Make predictions using regression, classifications, & time series analysis without the need for complex coding.",
  },
  {
    id: 3,
    title: "SciPyR",
    description:
      "Elevate your analytics capabilities with our SciPyR Workbench, empowering you to leverage the flexibility of Python & R. Access advanced analytics tools and libraries.",
  },
];

// Non Gradient Cards Props
const nonGradientCardsHeading = "Analyze your way to success";

const nonGradientCardsDescription =
  "Explore patterns, predict outcomes, & perform impactful analyses for your business. Achieve efficiency & drive data-driven decisions.";

const nonGradientCardsContent = [
  {
    id: 1,
    title: "Define Scenario",
    description: "Understand & define the scenario. Identify, collect & prepare relevant data sources & other contributing factors.",
  },
  {
    id: 2,
    title: "Devise Scenario",
    description: "Formulate different scenario cases that will be considered in the analysis using the Infoveave® what-if analysis tool.",
  },
  {
    id: 3,
    title: "Evaluate Impacts",
    description: "Assess the impact of changing variables or assumptions through analytical or statistical techniques.",
  },
  {
    id: 4,
    title: "Forecast Trends",
    description: "Forecast trends by determining the most desirable scenario outcome and make decisions based on the findings.",
  },
];

//Case Study

const caseStudyHeading = "Learn how a leading Australian utilities provider used Infoveave to give best product pricing to their customers.";

const caseStudyButtonText = "Customer Story";

const caseStudyButtonHref = "/best-offer-pricing-with-a-unified-data-platform";

// Array of card data - Infoboard3DCards
const listCardsHeading = "Analyze your way to success";

const listCardsDescription =
  "Explore patterns, predict outcomes, & perform impactful analyses for your business. Achieve efficiency & drive data-driven decisions.";

const listCards = [
  {
    icon: <MdOutlineModelTraining size={32} />,
    title: "Build & Train Models",
    description: "Enhance capabilities of modern analytics & digital transformation with continuous data.",
  },
  {
    icon: <MdOutlineAnalytics size={32} />,
    title: "Analytics With SciPyR",
    description: "Advanced data analysis and modeling with Jupyter notebook integrated in the platform.",
  },
  {
    icon: <MdOutlineDataUsage size={32} />,
    title: "Data Science Libraries",
    description: "Access libraries such as NumPy, Pandas, SciPy, Scikit-learn, TensorFlow, and PyTorch with SciPyR.",
  },
  {
    icon: <MdOutlineScale size={32} />,
    title: "Operationalize at Scale",
    description: "Deploy ML models with a single click, effectively manage and control them with MLOps.",
  },
];

const DataAnalyticsMachinelearningPython = () => {
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
        numberOfCardsInARow={3}
        gradientBackground={true}
        heading={gradientCardsHeading}
        description={gradientCardsDescription}
        cardBackgroundClassName="bg-ivindigo-500 h-[275px]"
      />
      <NonGradientImageTextCardSection
        cards={nonGradientCardsContent}
        numberOfCardsInARow={4}
        heading={nonGradientCardsHeading}
        description={nonGradientCardsDescription}
        nonGradientCardClassName="bg-white h-[295px]"
      />
      <BookADemoSection heading={caseStudyHeading} buttonText={caseStudyButtonText} href={caseStudyButtonHref} />
      <section className="pb-20">
        <FeatureCards heading={listCardsHeading} description={listCardsDescription} cards={listCards} />
      </section>
      {/* <BlogSection /> */}
      <Footer />
    </section>
  );
};

export default DataAnalyticsMachinelearningPython;
