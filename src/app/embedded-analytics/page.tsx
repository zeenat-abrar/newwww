import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import Dashboard from "@/assets/embedded-analytics/key-benefits-icons/dashboard.svg";
import LiveData from "@/assets/embedded-analytics/key-benefits-icons/live-data.svg";
import Tv from "@/assets/embedded-analytics/key-benefits-icons/tv.svg";
import { NonGradientImageTextCardSection } from "@/components/blocks/platforms/non-gradient-image-cards";
import { BackgroundBeamsWithCollisionSection } from "@/components/blocks/platforms/platform-beam-effect-section";
import PlatformPageHeroSection from "@/components/blocks/platforms/platform-page-hero-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("embedded-analytics");
}

//Hero Section Props
const platformPageHeroSectionHeading = "|Embedding| data insights in your apps";
const platformPageHeroSectionDescription = "Embed your stories and visuals into your business applications and redefine your business.";
const platformPageHeroSectionParagraph =
  "Bring up analytical features such as dashboards, reports, and data visualizations in your business applications. Get real-time data insights to your users, improving decision-making and overall business performance.";
const platformPageHeroSectionFirstButtonText = "Quick demo";
const firstButtonHref = "/book-a-demo";
const platformPageHeroSectionSecondButtonText = "Integrations";
const secondButtonHref = "/about-us#contactus";
const platformPageHeroSectionVideoSrc = "https://infoveave.com//srv/htdocs/wp-content/uploads/2023/01/Embedded-Analytics.mp4#t=0.1";

//Background beams highlight section props
const backgroundBeamsDescription =
  "Analyze fresh possibilities that make analytics unique. Discover a new set of analytical and reporting capabilities to create distinctive experiences. Infoveave® embedded analytics allows you to easily integrate data and insights directly into your existing business processes and systems, providing a seamless experience for your employees and customers.";
const backgroundBeamsHeading = "Experience analytics differently";

// Non Gradient Cards Props
const nonGradientCardsHeading = "Infoveave® wallboards: your advantages";

const nonGradientCardsContent = [
  {
    id: 1,
    icon: LiveData,
    title: "Live Data Insights",
    description: "Infoveave® uses standard oEmbed specification allowing to embed content in your portals that refresh automatically when data changes.",
  },
  {
    id: 2,
    icon: Dashboard,
    title: "Embed dashboard",
    description: "Get interactive and attractive dashboards integrated into your business application.",
  },
  {
    id: 3,
    icon: Tv,
    title: "Display on Smart TV",
    description: "Display your data on a smart TV on your office wall or on the shop floor.",
  },
  {
    id: 4,
    icon: LiveData,
    title: "Real-time Alerts",
    description: "Set up live notifications to inform your team anytime the company passes crucial benchmarks.",
  },
];

const EmbeddedAnalytics = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <PlatformPageHeroSection
        paragraph={platformPageHeroSectionParagraph}
        heading={platformPageHeroSectionHeading}
        description={platformPageHeroSectionDescription}
        firstButtonText={platformPageHeroSectionFirstButtonText}
        firstButtonHref={firstButtonHref}
        secondButtonText={platformPageHeroSectionSecondButtonText}
        secondButtonHref={secondButtonHref}
        videoSrc={platformPageHeroSectionVideoSrc}
      />
      <BackgroundBeamsWithCollisionSection description={backgroundBeamsDescription} heading={backgroundBeamsHeading} />
      <NonGradientImageTextCardSection
        cards={nonGradientCardsContent}
        numberOfCardsInARow={4}
        heading={nonGradientCardsHeading}
        nonGradientCardClassName="bg-white h-[295px]"
      />
      <Footer />
    </section>
  );
};

export default EmbeddedAnalytics;
