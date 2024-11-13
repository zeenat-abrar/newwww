import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import Building from "@/assets/industry-solutions-page/building.svg";
import Car from "@/assets/industry-solutions-page/car.svg";
import Cart from "@/assets/industry-solutions-page/cart.svg";
import Energy from "@/assets/industry-solutions-page/energy.svg";
import Hand from "@/assets/industry-solutions-page/hand.svg";
import Headphones from "@/assets/industry-solutions-page/headphone.svg";
import Healthcare from "@/assets/industry-solutions-page/healthcare.svg";
import Finance from "@/assets/industry-solutions-page/money.svg";
import Suppply from "@/assets/industry-solutions-page/productivity.svg";
import Telecom from "@/assets/industry-solutions-page/telecom.svg";
import OnePlatform from "@/components/blocks/home/one-platform";
import BlogSection from "@/components/blocks/industries/blog-section";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import { CardProps, NonGradientImageTextCardSection } from "@/components/blocks/platforms/non-gradient-image-cards";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("industry-solutions");
}

//hero section props
const industryDescription =
  "Unlock the value of your data and gain a competitive edge in your industry with Infoveave®. Easily tack and monitor your key performance indicators (KPIs), spot trends and patterns in the data and make data-driven decisions to drive growth. With us, improve your industry performance, optimize operations, increasing productivity, and gain customer loyalty.";
const industryHeading = "Transform Your Data into |Actionable Insights|";

//grid card section props
const gridCardHeading = "|Optimize| your industry with business intelligence";
const projects = [
  {
    id: 1,

    title: "Retail",
    description: "Optimize, streamline, track, and get updates on purchase orders, to drive the business forward.",
    imageUrl: Cart,
    linkText: "Read More",
    linkUrl: "/retail-analytics-solutions",
  },
  {
    id: 2,
    title: "Energy",
    description: "Improve product quality with OEE, APQ, supply chain management and manpower analysis.",
    imageUrl: Energy,
    linkText: "Read More",
    linkUrl: "/energy-analytics-solutions",
  },
  {
    id: 3,
    title: "Healthcare",
    description: "Optimize, streamline, track, and get updates on purchase orders, to drive the business forward.",
    imageUrl: Healthcare,
    linkText: "Read More",
    linkUrl: "/healthcare-analytics-solutions",
  },
  {
    id: 4,
    title: "Automotive",
    description: "Track and monitor dealer, sales and service performance & optimize inventory and supply chain.",
    imageUrl: Car,
    linkText: "Read More",
    linkUrl: "/automotive-analytics-solutions",
  },
  {
    id: 5,
    title: "Manufacturing",
    description: "Improve product quality with OEE, APQ, supply chain management and manpower analysis.",
    imageUrl: Building,
    linkText: "Read More",
    linkUrl: "/manufacturing-analytics-solutions",
  },
  {
    id: 6,
    title: "Telecom",
    description: "Analyze network usage, billing, and customer satisfaction data to ensure streamlined processing.",
    imageUrl: Telecom,
    linkText: "Read More",
    linkUrl: "/telecom-industry-solutions",
  },
];

//non gradient card props
const nonGradientCardsContent: CardProps[] = [
  {
    id: 1,

    title: "Customer Service",
    description: "Maximize the Return on Investment & Customer Lifetime Value with targeted campaigns.",
    icon: Headphones,
    linkText: "Read More",
    href: "/about-us#contactus",
  },
  {
    id: 2,
    title: "Finance",
    description: "Optimize cash reserves, identify potential shortfalls, and make informed decisions about borrowing or investing.",
    icon: Finance,
    linkText: "Read More",
    href: "#",
  },
  {
    id: 3,
    title: "Supply Chain",
    description: "Improve productivity, demand forecasting, supply chain management, and inventory controls.",
    icon: Suppply,
    linkText: "Read More",
    href: "#",
  },
  {
    id: 4,
    title: "HR",
    description: "Boost employee acquisition with automated ATS & performance evaluation.",
    icon: Hand,
    linkText: "Read More",
    href: "/about-us#contactus",
  },
];

const nonGradientCardsHeading = "By service";

export default function IndustrySolutions() {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <OnePlatform description={industryDescription} heading={industryHeading} />
      <section className="-mt-16 -mb-24">
        <GridCardsSection projects={projects} heading={gridCardHeading} />
      </section>

      <NonGradientImageTextCardSection
        cards={nonGradientCardsContent}
        numberOfCardsInARow={4}
        heading={nonGradientCardsHeading}
        nonGradientCardClassName="bg-white h-[350px]"
        CardDescriptionClassName="pt-4 h-[145px]"
      />
      <section className="-mt-24">
        <BlogSection />
      </section>
      <Footer />
    </section>
  );
}
