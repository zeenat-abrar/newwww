import CallCenterInsights from "@/assets/Dashboard-cards/Call-Center-Insights.webp";
import CustomerChurn from "@/assets/Dashboard-cards/Customer-Churn.webp";
import EnergyRetail from "@/assets/Dashboard-cards/Energy-Sales.webp";
import ManufacturingIframeDashboardScreenshot from "@/assets/Iframe-dashboard-screenshots/Manufacturing-Iframe-Dashboard-screenshot.png";
import ManufacturingImage from "@/assets/manufacturing/hero-section/manufacturing.webp";
import { BookADemoSectionProps } from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSectionProps } from "@/components/blocks/industries/grid-card-view";
import { InfoboardIframeSectionProps } from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import { IndustriesPageHeroSectionProps } from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCardsProps } from "@/components/blocks/industries/infoboards-cards-section";

//Manufacturing Hero Section
export const manufacturingPageHeroSectionDetails: IndustriesPageHeroSectionProps = {
  heading: "Gear up your |manufacturing intelligence| with Infoveave",
  bulletPoints: [
    "Connect data from shopfloor machines, inventory, and supply chain for a 360° view of operations.",
    "Track production metrics, equipment performance, and quality in real-time to minimize downtime.",
    "Leverage data to improve operational efficiency, reduce waste, and enhance overall productivity.",
  ],
  buttons: [
    { text: "Schedule demo", href: "/book-a-demo" },
    { text: "Contact sales", href: "/about-us#contactus" },
  ],
  imageSrc: ManufacturingImage,
  alt: "Infoveave- manufacturing image",
};

//Manufacturing Know more grid section
export const manufacturingGridCardsKnowMoreSection: GridCardsSectionProps = {
  heading: "Manufacturing insights at your fingertips",
  unifySimplifyAmplify: [
    {
      title: "",
      description: "Integrate data from production, supply chain, inventory, and sales for real-time insights that drive smarter decisions.",
    },
    {
      title: "",
      description: "Simplify Invoice processing, exception management​, material pricing updates and monitoring​, compliance checks​ to drive revenue.",
    },
    {
      title: "",
      description: "Digitize your shopfloor analytics, Analyze Overall Equipment Efficiency (OEE) easily, and drive success.",
    },
  ],
  projects: [
    {
      title: "Factory Frontrunners",
      description: ["Define benchmarks and measure factory performance across various parameters like production, quality, utilities, fuel & manpower."],
    },
    {
      title: "Shopfloor analysis",
      description: ["Analyze shopfloor metrics like OEE, APQ, Maintenance across production lines for improved operational efficiency."],
    },
    {
      title: "BOM & Inventory analysis",
      description: ["Optimize inventory of parts, reduce production costs, and improve procurement efficiency."],
    },
    {
      title: "Supply chain & Warehouse",
      description: [
        "Streamline warehouse operations, manage PO tracking, reconciliations,  ensure seamless procurement, maintain accurate records and reduce discrepancies.",
      ],
    },
    {
      title: "Quality control digitization",
      description: ["Automate inspections, optimize workflows, and ensure consistent production quality."],
    },
    {
      title: "Product Pricing",
      description: ["Simulate product pricing and optimize for maximum profits while keeping track of demand, competitors, costs, etc."],
    },
  ],
};

//Manufacturing Infoboard Iframe Section
export const manufacturingInfoboardIframeSection: InfoboardIframeSectionProps = {
  heading: "Visualize your insights",
  iFrameSrc: "https://factory.infoveave.app/v8/View/ZmFjdG9yeXw3YjMyNzk=/Desktop/600",
  image: ManufacturingIframeDashboardScreenshot,
};

//Manufacturing "Call to Action" Section
export const manufacturingBookADemoSection: BookADemoSectionProps = {
  heading: "Learn how a leading machine tool manufacturing company uses Infoveave to keep track of their factory operations.",
  buttonText: "Customer Story",
  href: "/digitizing-shopfloor-analytics-with-unified-data-platform",
};

//Manufacturing Dashboard Screenshot Cards
export const manufacturingDashboardScreenShots3DCards: Infoboard3DCardsProps = {
  heading: "Explore more dashboard examples",
  cards: [
    {
      id: 1,
      imageSrc: CustomerChurn,
      title: "Customer Churn",
    },
    {
      id: 2,
      imageSrc: CallCenterInsights,
      title: "Call Center Insights",
    },
    {
      id: 3,
      imageSrc: EnergyRetail,
      title: "Energy Retail",
    },
  ],
  button: {
    text: "Get started with our templates - Sign up today!",
    href: "/sign-up",
  },
};

//Manufacturing Kpis Know more grid section
export const manufacturingKPIsGridCardsSection: GridCardsSectionProps = {
  heading: "Your guide to better |Manufacturing Analytics|",
  description: "Integrate all your data sources, map them to your KPIs, analyze your data and visualize insights.",
  projects: [
    {
      title: "Overall Equipment Effectiveness",
      description: [
        "Overall Equipment Effectiveness (OEE) measures manufacturing equipment efficiency by evaluating three key factors: availability, performance, and quality, offering a comprehensive assessment of equipment productivity and effectiveness.",
      ],
      formula: "Overall Equipment Effectiveness = (Availability) × (Performance) × (Quality)",
    },
    {
      title: "Throughput",
      description: [
        "Throughput measures the rate at which a facility produces products within a given period. It reflects production speed, efficiency, and the system's capacity to meet demand effectively.",
      ],
      formula: "Throughput = Produced quantity / Time (hour or day)",
    },
    {
      title: "Cycle Time",
      description: [
        "Cycle time is the total time required to complete a single production cycle or unit of output within a manufacturing process, from start to finish.",
      ],
      formula: "Cycle Time = (Current year’s total deposits – Last year’s total deposits) / Last year’s total deposits",
    },
    {
      title: "Takt Time",
      description: ["Takt time refers to the pace or rhythm at which a product needs to be produced to meet customer demand."],
      formula: "Takt Time = Available time / Customers daily demand",
    },
    {
      title: "Downtime Percentage",
      description: [
        "The downtime is the proportion of total available time that manufacturing equipment or systems are non-operational due to maintenance activities. ",
      ],
      formula: "Downtime Percentage = (Downtime / Operating time) × 100",
    },
    {
      title: "Scrap Rate",
      description: ["Scrap rate is the proportion of products that are discarded or scrapped due to quality issues during the manufacturing process."],
      formula: "Scrap Rate = (Scrap / Produced quantity) × 100",
    },
  ],
  buttonPrimaryWhite: {
    text: "Know more",
    href: "/top-10-kpis-for-manufacturers-to-track",
  },
};
