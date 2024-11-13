import AreaChartIcon from "@/assets/area-chart.svg";
import BarChartIcon from "@/assets/bar-chart.svg";
import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import ColumnChartIcon from "@/assets/column-chart.svg";
import FlowChartIcon from "@/assets/flow-chart.svg";
import GaugeChartIcon from "@/assets/gauge-chart.svg";
import HierarchyChartIcon from "@/assets/hierarchy-chart.svg";
import Infoboard3 from "@/assets/infoboards-screenshots/infoboard-1.png";
import AreaChart from "@/assets/insights-data-visualization/area-charts.png";
import BarChart from "@/assets/insights-data-visualization/bar-charts.png";
import CustomerChurn from "@/assets/insights-data-visualization/cards-images/Customer-Churn.webp";
import EnergyRetail from "@/assets/insights-data-visualization/cards-images/Energy-Sales.webp";
import RecruitmentPipelines from "@/assets/insights-data-visualization/cards-images/Recruitment-Pipeline.webp";
import ColumnChart from "@/assets/insights-data-visualization/column-charts.png";
import FlowChart from "@/assets/insights-data-visualization/flow-charts.png";
import GaugeChart from "@/assets/insights-data-visualization/guage-charts.png";
import HierarchyChart from "@/assets/insights-data-visualization/heirarchy-charts.png";
import { Infoboard3DCards } from "@/components/blocks/industries/infoboards-cards-section";
import ProgressSliderPage from "@/components/blocks/platforms/carousel-slider";
import { GradientTextCardSection } from "@/components/blocks/platforms/gradient-cards";
import { BackgroundBeamsWithCollisionSection } from "@/components/blocks/platforms/platform-beam-effect-section";
import PlatformLeftSideVideoSection from "@/components/blocks/platforms/platform-left-side-video-section";
import PlatformPageHeroSection from "@/components/blocks/platforms/platform-page-hero-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("insights-data-visualization");
}

//Hero Section Props
const platformPageHeroSectionHeading = "Craft Your |Data Story|";
const platformPageHeroSectionDescription = "Create compelling narratives tailored for impact";
const platformPageHeroSectionBulletPoints = [
  "Visualizations that captivate your stakeholders",
  "Alerts & tasks for real-time insights",
  "Embed insights into your business apps",
];
const platformPageHeroSectionFirstButtonText = "Book a demo";
const firstButtonHref = "/book-a-demo";
const platformPageHeroSectionSecondButtonText = "Contact sales";
const secondButtonHref = "/about-us#contactus";
const platformPageHeroSectionVideoSrc = "https://infoveave.com/wp-content/uploads/2024/01/Web-Animation-1-vp9-chrome.webm";

// Array of card data - Infoboard3DCards
const inforboard3DCardsHeading = "Interactive dashboards for actionable insights";

const inforboard3DCardsDescription =
  "Transform complex datasets into intuitive, Canva-styled boards that empower organizations to unlock actionable insights. Enhance data comprehension, streamline workflows, foster collaboration, and support informed decision-making across all levels of an organization.";

const cards = [
  {
    id: 1,
    imageSrc: EnergyRetail,
    title: "Energy Retail",
  },
  {
    id: 2,
    imageSrc: CustomerChurn,
    title: "Customer Churn",
  },
  {
    id: 3,
    imageSrc: Infoboard3,
    title: "Call Center Insights",
  },
  {
    id: 4,
    imageSrc: RecruitmentPipelines,
    title: "Recruitment Pipeline",
  },
];

//Background beam collision section props
const knowMoreButtonHref = "";
const backgroundBeamsHeading = "Embed data insights in your apps";
const backgroundBeamsDescription =
  "Highlight analytical functionalities like dashboards, reports, and data visualizations within your business applications. Deliver real-time data insights to your users, enhancing decision-making and overall business performance.";
const backgroundBeamsTitle = "Embed your stories and visuals into your business applications and redefine your business.";

// Progress Slider Page Props

const progressSliderHeading = "|Data Visualization| with 100+ Chart Options";

const progressSliderDescription =
  "Infoveave offers an extensive range of over 50+ visualization options, empowering you to present your data in the most meaningful and impactful way. Whether you need bar charts, line graphs, pie charts, heat maps, or more specialized visualizations, we got you covered.";

const progressSliderDescription2 =
  "Each chart type can be fully customized to suit your specific data visualization needs, ensuring that your analysis is both clear and insightful. With these visualizations, you can transform complex data sets into easily understandable visual formats, making it easier to derive actionable insights.";

const sliderItems = [
  {
    img: AreaChart,
    desc: "Area Charts",
    buttonIcon: AreaChartIcon,
  },
  {
    img: BarChart,
    desc: "Bar Charts",
    buttonIcon: ColumnChartIcon,
  },
  {
    img: ColumnChart,
    desc: "Column Charts",
    buttonIcon: BarChartIcon,
  },
  {
    img: FlowChart,
    desc: "Flow Charts",
    buttonIcon: FlowChartIcon,
  },
  {
    img: GaugeChart,
    desc: "Gauge Charts",
    buttonIcon: GaugeChartIcon,
  },
  {
    img: HierarchyChart,
    desc: "Hierarchy Charts",
    buttonIcon: HierarchyChartIcon,
  },
];

// Array of card data - Infoboard3DCards
const gradientCardsHeading = "Maximize understanding with simplified features";

const gradientCardsContent = [
  {
    id: 1,
    title: "Designer Boards",
    description:
      "Craft tailored dashboards to build your data story. Use visuals & design elements to connect your data. Ensure your data story is both memorable & impactful.",
  },
  {
    id: 2,
    title: "Expressions",
    description:
      "Trigger automatic changes in elements like color, animations, & data components on your dashboard. Set up alerts and tasks for real-time insights.",
  },
  {
    id: 3,
    title: "Templates",
    description:
      "Choose from 40+ ready-to-use templates to simplify dashboard creation. Tailor these templates to represent & communicate intricate data sets with precision.",
  },
];

//Left

const leftSideVideoSectionHeading = "|Get insights| using a language you understand";
const leftSideVideoSectionDescription = "Combining visuals and language to craft more effective data-driven offerings.";
const leftSideVideoSectionSubDescription =
  "The Infoveave® NGauge chatbot facilitates smooth interaction and immediate access to precise, up-to-date responses across commonly used platforms such as Skype, Slack, and WebChat. We empower businesses to derive valuable insights from customer interactions.";

const leftSideVideoSectionFirstButtonText = "Know more";
const leftSideVideoSectionFirstButtonHref = "";
const leftSideVideoSectionSecondButtonText = "Contact sales";
const leftSideVideoSectionSecondButtonHref = "/about-us#contactus";

const leftSideVideoSrc = "https://infoveave.com//srv/htdocs/wp-content/uploads/2023/03/Chat-Analytics.mp4";

const InsightsDataVisualization = () => {
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
        firstButtonHref={firstButtonHref}
        secondButtonText={platformPageHeroSectionSecondButtonText}
        secondButtonHref={secondButtonHref}
        videoSrc={platformPageHeroSectionVideoSrc}
      />
      <GradientTextCardSection
        cards={gradientCardsContent}
        numberOfCardsInARow={3}
        gradientBackground={true}
        heading={gradientCardsHeading}
        cardBackgroundClassName="bg-ivindigo-500 h-[275px]"
      />
      <ProgressSliderPage
        heading={progressSliderHeading}
        description={progressSliderDescription}
        description2={progressSliderDescription2}
        items={sliderItems}
      />
      <Infoboard3DCards
        cards={cards}
        numberOfCardsInARow={4}
        gradientBackground={false}
        heading={inforboard3DCardsHeading}
        description={inforboard3DCardsDescription}
      />
      <BackgroundBeamsWithCollisionSection
        knowMoreButtonHref={knowMoreButtonHref}
        heading={backgroundBeamsHeading}
        description={backgroundBeamsDescription}
        title={backgroundBeamsTitle}
      />
      <section className="lg:pb-10 bg-white">
        <PlatformLeftSideVideoSection
          heading={leftSideVideoSectionHeading}
          description={leftSideVideoSectionDescription}
          subDescription={leftSideVideoSectionSubDescription}
          firstButtonText={leftSideVideoSectionFirstButtonText}
          firstButtonHref={leftSideVideoSectionFirstButtonHref}
          secondButtonText={leftSideVideoSectionSecondButtonText}
          secondButtonHref={leftSideVideoSectionSecondButtonHref}
          videoSrc={leftSideVideoSrc}
        />
      </section>
      <Footer />
    </section>
  );
};

export default InsightsDataVisualization;
