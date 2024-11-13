import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import BlogHeroImage from "@/assets/blogs/blog-hero/Blogs-hero-image.jpg";
import Transforming from "@/assets/blogs/dashboard-tools.webp";
import EnergyDeregulation from "@/assets/blogs/Energy-deregulation.webp";
import OEELossFactors from "@/assets/blogs/Fix-OEE-loss.webp";
import IDAstrategy from "@/assets/blogs/IDA-Strategy-on-OEE.webp";
import LeveragingOEE from "@/assets/blogs/Maximizing-OEE-2.webp";
import EmpoweringBusinesses from "@/assets/blogs/Modern-BI-software.webp";
import OEEAnalytics from "@/assets/blogs/OEE-Analytics.webp";
import OEEIntelligence from "@/assets/blogs/oee-intelligence.png";
import OEELossTree from "@/assets/blogs/OEE-Loss.webp";
import ProductPricing from "@/assets/blogs/Product-pricing.webp";
import RetailAnalytics from "@/assets/blogs/Retail-analytics.webp";
import RetailCustomerService from "@/assets/blogs/Retail-Customer-Service.webp";
import UnifiedDataPlatform from "@/assets/blogs/Retail-process-automation-with-Infoveave.webp";
import SalesDashboard from "@/assets/blogs/Sales-dashboard.webp";
import SupplyChain from "@/assets/blogs/Supply-Chain-Optimization.webp";
import PowerOfDashboard from "@/assets/blogs/The-Power-of-Dashboards.webp";
import DataToDecision from "@/assets/blogs/Unified-data.webp";
import Retailers from "@/assets/blogs/Unifying-data-with-Infoveave.webp";
import BoostOEE from "@/assets/blogs/why-is-it-crucial-to-boost-oee.webp";
import BlogCards, { blog } from "@/components/blocks/blogs/blog-cards";
import BlogHeroSection from "@/components/blocks/blogs/blog-hero-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("blogs");
}

//Hero Section Props
const blogSectionhHeading = "Stay |updated| on analytics";
const blogSectionDescription =
  "Success depends on staying up with the latest technical developments and industry trends. Leverage our one-stop shop for anything about analytics and technological breakthroughs.";
const blogSectionhImageSrc = BlogHeroImage;

//Blog Cards Data

const blogs: blog[] = [
  {
    id: 1,
    title: "How is energy deregulation changing the retail energy landscape in the US?",
    description:
      "This blog explores how a unified data platform enhances retail energy service, highlighting deregulation, challenges, and benefits. Discover how deregulation changed the US Retail market and how unified data platforms tackle the challenges.",
    image: EnergyDeregulation,
    href: "/how-is-energy-deregulation-changing-the-retail-energy-landscape-in-the-us",
    headingHeightClassName: "md:min-h-[85px] lg:min-h-[140px] xl:min-h-[100px] 2xl:min-h-[85px]",
  },
  {
    id: 2,
    title: "Retail Customer Service with a Unified Data Platform",
    description:
      "This blog explores how a unified data platform enhances retail customer service, highlighting key importance and benefits. Discover how data integration drives personalized, efficient, and proactive customer experiences.",
    image: RetailCustomerService,
    href: "/retail-customer-service-with-a-unified-data-platform",
    headingHeightClassName: "",
  },
  {
    id: 3,
    title: "Product Pricing- Challenges, Best Practices, and Strategic Insights",
    description:
      "This blog examines the complexities of product pricing, offering insights into challenges, best practices, and strategies. Discover how Infoveave's solutions can streamline pricing and inventory management for optimal business performance.",
    image: ProductPricing,
    href: "/product-pricing-challenges-best-practices-and-strategic-insights",
    headingHeightClassName: "",
  },
  {
    id: 4,
    title: "Why Retailers Need a Unified Data Platform to Thrive in a Data-Driven World",
    description: "Discover how unified data platform can help with Retailers for better efficiency, inventory management, and customer experience.",
    image: Retailers,
    href: "/retailers-need-a-unified-data-platform-to-thrive",
  },
  {
    id: 5,
    title: "How can a unified data platform help retailers with automation?",
    description:
      "Discover how unified data platform can help with Retail Process Automation for better efficiency, inventory management, and customer experience.",
    image: UnifiedDataPlatform,
    href: "/retail-process-automation-with-unified-data-platform",
  },
  {
    id: 6,
    title: "Sales dashboards- Metrics to track, benefits & best practices",
    description:
      "Infoveave's dashboards empower sales teams by providing real-time, actionable insights into sales performance, customer behavior, and product profitability. By leveraging these dashboards, teams can optimize strategies, enhance decision-making, and customer retention, and drive revenue growth across various channels and regions.",
    image: SalesDashboard,
    href: "/sales-dashboards-metrics-to-track-benefits-best-practices",
  },
  {
    id: 7,
    title: "The Power of Dashboards: Benefits, Challenges, and Best Practices",
    description:
      "Dashboards are essential for transforming complex data into clear visual insights, offering real-time snapshots of key metrics and trends. They centralize data, enhancing decision-making, efficiency, and collaboration.",
    image: PowerOfDashboard,
    href: "/the-power-of-dashboards-benefits-challenges-and-best-practices",
    headingHeightClassName: "",
  },
  {
    id: 8,
    title: "Empowering Businesses with modern BI solutions",
    description:
      "In a world increasingly characterized by digital transactions, online interactions, and smart technologies, retailors have access to more data than ever before. But how can businesses harness this information to navigate the complex maze of retail landscape?",
    image: EmpoweringBusinesses,
    href: "/modern-business-intelligence-software",
    headingHeightClassName: "",
  },
  {
    id: 11,
    title: "Transforming Market Research with a Unified Data Platform",
    description:
      "Market research agencies face constant pressure to deliver accurate insights quickly and efficiently. Understanding client needs, tracking market trends, and providing actionable recommendations are crucial for agency success",
    image: Transforming,
    href: "/market-research-visualization-dashboard-tool",
    headingHeightClassName: "md:min-h-[115px]",
  },
  {
    id: 12,
    title: "Supply Chain Optimization: How Retailers Utilize Data Analytics for Seamless Operations",
    description:
      "In a world increasingly characterized by digital transactions, online interactions, and smart technologies, retailors have access to more data than ever before. But how can businesses harness this information to navigate the complex maze of retail landscape?",
    image: SupplyChain,
    href: "/retail-supply-chain-optimization",
    headingHeightClassName: "md:min-h-[110px]",
  },
  {
    id: 13,
    title: "What is retail analytics?",
    description:
      "In a world increasingly characterized by digital transactions, online interactions, and smart technologies, retailors have access to more data than ever before. But how can businesses harness this information to navigate the complex maze of retail landscape?",
    image: RetailAnalytics,
    href: "/what-is-retail-analytics",
  },
  {
    id: 14,
    title: "Go from data to decision in one unified platform",
    description:
      "A Unified Data Platform as its name indicates is an all-in-one platform that can weave dynamic, diverse and distributed data efficiently, assimilate it, transform it and provide a secure, scalable architecture to analyze that data.",
    image: DataToDecision,
    href: "/data-to-decision-unified-data-platform",
  },
  {
    id: 15,
    title: "Why keep your OEE loss factors as low as possible?",
    description:
      "OEE loss factors can significantly impact the productivity, efficiency, and profitability of a manufacturing facility. Therefore, it is essential to monitor and minimize these factors continuously to optimize production equipment performance and increase overall efficiency.",
    image: OEELossFactors,
    href: "/why-to-overcome-the-six-big-oee-losses",
    headingHeightClassName: "",
  },
  {
    id: 16,
    title: "OEE analytics: Maximizing the production value",
    description:
      "This blog delves into how OEE analytics maximize production value by reducing downtime and enhancing equipment performance. Learn how smart manufacturing and unified data platform drive OEE efficiency in the industry.",
    image: OEEAnalytics,
    href: "/oee-analytics",
    headingHeightClassName: "",
  },
  {
    id: 17,
    title: "The OEE loss tree: Addressing the six big losses",
    description:
      "This blog explores the six big OEE losses—availability, performance, and quality—and how they impact production efficiency. Discover how Infoveave’s data automation helps manufacturers address these inefficiencies for improved productivity.",
    image: OEELossTree,
    href: "/the-oee-loss-tree-addressing-the-six-big-losses",
    headingHeightClassName: "",
  },
  {
    id: 18,
    title: "IDA strategy on OEE",
    description:
      "This blog introduces the IDA (Information, Decision, Action) strategy to enhance OEE efficiency. Discover how accurate data, informed decisions, and strategic actions drive manufacturing success with Infoveave’s OEE intelligence platform.",
    image: IDAstrategy,
    href: "/how-may-oee-be-maximized-ida-strategy",
    headingHeightClassName: "",
  },
  {
    id: 19,
    title: "Leveraging OEE visualization to enhance productivity",
    description:
      "OEE by itself does not automatically solve any manufacturing problems. Rather, it is a gateway to identify inefficiencies and the causes behind",
    image: LeveragingOEE,
    href: "/oee-visualization",
    headingHeightClassName: "",
  },
  {
    id: 20,
    title: "Why is it crucial to boost OEE?",
    description:
      "This blog highlights the importance of boosting OEE in manufacturing to improve productivity, reduce costs, and prevent revenue leakage. Discover how leveraging data and smart technologies like AI, ML, and IIoT can enhance OEE efficiency.",
    image: BoostOEE,
    href: "/maximizing-oee-efficiency-the-benefits",
    headingHeightClassName: "",
  },
  {
    id: 21,
    title: "OEE intelligence",
    description:
      "Data intelligence and smart automation working in harmony to enhance equipment efficiency and effectiveness. Transform your production facility into a digital powerhouse with Infoveave® OEE Intelligence.",
    image: OEEIntelligence,
    href: "/oee-analysis",
    headingHeightClassName: "",
  },
];

const BlogPage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <BlogHeroSection heading={blogSectionhHeading} description={blogSectionDescription} imageSrc={blogSectionhImageSrc} />
      <section className="pb-14">
        <BlogCards data={blogs} />
      </section>
      <Footer />
    </section>
  );
};

export default BlogPage;
