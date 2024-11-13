import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import AustralianEnergy from "@/assets/success-stories/Australian-energy.webp";
import AustralianUtility from "@/assets/success-stories/australian-utility.webp";
import AutoDealerPerformance from "@/assets/success-stories/Auto-dealer-performance.webp";
import BestOffer from "@/assets/success-stories/Best-offer.webp";
import CommunityHealthMonitoring from "@/assets/success-stories/Community-health-monitoring-analysis.webp";
import CompetitivePricingIntelligence from "@/assets/success-stories/competitive-pricing-intelligence.webp";
import Fortune500 from "@/assets/success-stories/fortune-500.webp";
import SuccessStoriesHeroImage from "@/assets/success-stories/Hero-section/Success-Stories-Hero-Image.png";
import LeadingManufacturing from "@/assets/success-stories/how-a-leading-manufacturing.webp";
import MonitoringRiskCompliance from "@/assets/success-stories/monitoring-risk-and-compliance.webp";
import ProgramEffectiveness from "@/assets/success-stories/Program-effectiveness-and-survival-analysis.webp";
import RetailLogistics from "@/assets/success-stories/retail-logistics.webp";
import RPADeployment from "@/assets/success-stories/RPA-deployment-in-account-payables.jpeg";
import TelecomNetwork from "@/assets/success-stories/Telecom-network.webp";
import SuccessStoriesCards from "@/components/blocks/success-stories/success-stories-cards";
import SuccessStoriesHeroSection from "@/components/blocks/success-stories/success-stories-hero-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("success-stories");
}

//Success Stories Hero Section Props
const successStoriesBlogSectionHeading = "Powering BI Transformation, One Success Story at a Time";
const successStoriesBlogSectionDescription =
  "Discover how organizations across industries are achieving measurable results with Infoveave. From optimizing workflows to unlocking actionable insights, explore the real-world impact of data-driven decisions.";
const successStoriesBlogSectionImageSrc = SuccessStoriesHeroImage;

const successStories = [
  {
    id: 1,
    title: "Australian Energy Retailer Enhances Revenue Assurance with Infoveave’s Unified Data Platform",
    description:
      "In the competitive Australian energy market, a leading retail energy provider has supplied electricity and gas to over 700,000 accounts. They faced significant challenges in offering the best pricing to their customers. Mandated by the regulated bodies to provide optimal pricing, the company struggled with fragmented data, making analysis and accurate pricing offers difficult.",
    image: AustralianEnergy,
    href: "/revenue-assurance-with-unified-data-platform",
  },
  {
    id: 2,
    title: "Best offer pricing with a Unified Data Platform",
    description:
      "In the competitive Australian energy market, a leading retail energy provider has supplied electricity and gas to over 700,000 accounts. They faced significant challenges in offering the best pricing to their customers. Mandated by the regulated bodies to provide optimal pricing, the company struggled with fragmented data, making analysis and accurate pricing offers difficult.",
    image: BestOffer,
    href: "/best-offer-pricing-with-a-unified-data-platform",
  },
  {
    id: 3,
    title: "Retail Logistics Simplified With Infoveave",
    description:
      "The company has been a key industry player for over 60 years. They specialize in importing and wholesaling artificial Christmas trees, seasonal decorations, and holiday products. The company has faced significant logistical challenges in the past when procuring goods.",
    image: RetailLogistics,
    href: "/retail-logistics-simplified-with-infoveave",
  },
  {
    id: 4,
    title: "Fortune 500 company uses Infoveave to digitize shopfloor analytics",
    description:
      "The company is a Fortune 500 enterprise in the manufacturing industry, specializing in a wide range of tools, equipment, and solutions for professionals and consumers worldwide. In response to the growth and expanded production capacity at one of their factories, the company recognized the need for a better process to increase efficiency.",
    image: Fortune500,
    href: "/digitizing-shopfloor-analytics-with-unified-data-platform",
  },
  {
    id: 5,
    title: "Telecom network performance analysis",
    description:
      "Monitoring an operational network is a major KPI for telecom. Network Performance analysis and real time monitoring aids the operational teams in ways.",
    image: TelecomNetwork,
    href: "/telecom-network-performance-analysis",
  },
  {
    id: 6,
    title: "Australian utility provider uses RPA to Improve billing Efficiency",
    description: "Improving billing efficiency by weeding out unoccupied accounts and disconnecting supply where the customer information cannot be verified.",
    image: AustralianUtility,
    href: "/australian-utility-provider-uses-rpa-to-improve-billing-efficiency",
  },
  {
    id: 7,
    title: "How a leading manufacturing plant improved their OEE",
    description:
      "OEE Dashboard is a production visibility tool that displays real-time data. This provides review and status summary information for plant lines and units.",
    category: "Case Study, OEE Articles",
    image: LeadingManufacturing,
    href: "/how-a-leading-manufacturing-plant-improved-their-oee",
  },
  {
    id: 8,
    title: "Auto dealer performance analytics",
    description:
      "The automobile manufacturer aims to achieve a good review across its dealers to maintain consistent and high-quality customer experience across all its dealerships.",
    image: AutoDealerPerformance,
    href: "/automotive-dealer-performance-analytics",
  },
  {
    id: 9,
    title: "Competitive pricing intelligence",
    description:
      "Product pricing is a critical function for the automotive industry. With fierce competition and customers’ options, pricing intelligence is the key to profits.",
    image: CompetitivePricingIntelligence,
    href: "/competitive-pricing-intelligence",
  },
  {
    id: 10,
    title: "Program effectiveness and survival analysis",
    description:
      "Flexibility of Infoveave allowed data ingested to scale as per the data availability. The dataset can be from single healthcare unit or a country wide, for instance",
    image: ProgramEffectiveness,
    href: "/program-effectiveness-and-survival-analysis",
  },
  {
    id: 11,
    title: "Community health monitoring analysis",
    description:
      "As part of its various healthcare initiatives, the client is working on an ICT-led solution. This supports Community Health Worker Supervisors to guide performance improvements.",
    image: CommunityHealthMonitoring,
    href: "/community-health-monitoring-analysis",
  },
  {
    id: 12,
    title: "Monitoring risks and compliance",
    description: "Risk analysis and compliance management systems help in maintaining food quality and delivery standards.",
    image: MonitoringRiskCompliance,
    href: "/monitoring-risks-and-compliance",
  },
  {
    id: 13,
    title: "RPA deployment in account payables",
    description:
      "Account payable is a highly automatable process using RPA since it relies on repeated operations such as data extraction, invoice validation, and payment processing.",
    category: "Case Study, OEE Articles",
    image: RPADeployment,
    href: "/rpa-deployment-in-account-payables",
  },
];

const SuccessStories = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <SuccessStoriesHeroSection
        heading={successStoriesBlogSectionHeading}
        description={successStoriesBlogSectionDescription}
        imageSrc={successStoriesBlogSectionImageSrc}
      />
      <div className="pb-16">
        <SuccessStoriesCards data={successStories} />
      </div>
      <Footer />
    </section>
  );
};

export default SuccessStories;
