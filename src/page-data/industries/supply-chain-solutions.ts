import CallCenterInsights from "@/assets/Dashboard-cards/Call-Center-Insights.webp";
import CustomerChurn from "@/assets/Dashboard-cards/Customer-Churn.webp";
import EnergyRetail from "@/assets/Dashboard-cards/Energy-Sales.webp";
import SupplyChainIframeDashboardScreenshot from "@/assets/Iframe-dashboard-screenshots/Supply-Chain-Iframe-Dashboard-screenshot.png";
import SupplyChainHeroSectionImage from "@/assets/supply-chain/supply-chain-hero-image.webp";
import { BookADemoSectionProps } from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSectionProps } from "@/components/blocks/industries/grid-card-view";
import { InfoboardIframeSectionProps } from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import { IndustriesPageHeroSectionProps } from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCardsProps } from "@/components/blocks/industries/infoboards-cards-section";

//Supply Chain Hero Section
export const supplyChainPageHeroSectionDetails: IndustriesPageHeroSectionProps = {
  heading: "Power up your |supply chain and logistics| operations with Unified Data Platform ",
  bulletPoints: [
    "Gain complete oversight of your operations with data from every touchpoint.",
    "Leverage analytics to manage inventory, anticipate demand, and ensure timely deliveries.",
    "Identify potential risks early and respond faster with real-time data alerts.",
  ],
  buttons: [
    { text: "Schedule demo", href: "/book-a-demo" },
    { text: "Contact sales", href: "/about-us#contactus" },
  ],
  imageSrc: SupplyChainHeroSectionImage,
  alt: "infoveave-supply-chain-image",
};

//Supply Chain Know more grid section
export const supplyChainGridCardsKnowMoreSection: GridCardsSectionProps = {
  heading: "Optimize Every Move with Infoveave",
  unifySimplifyAmplify: [
    {
      title: "",
      description:
        "Centralize data from warehouses, transportation, and suppliers. Monitor shipments, track inventory across multiple locations, and coordinate with vendors.",
    },
    {
      title: "",
      description: "Automate tasks like order fulfilment, inventory tracking, and route planning to reduce manual effort and errors.",
    },
    {
      title: "",
      description: "Forecast demand helps prevent stockouts or excess inventory and avoid potential delays.",
    },
  ],
  projects: [
    {
      title: "Shipment Tracking",
      description: [
        "Get visibility of shipments, to monitor location, delays, and delivery times. Ensure better coordination and minimizes unexpected disruptions.",
      ],
    },
    {
      title: "Supplier Performance Monitoring",
      description: [
        "Consolidate data from all suppliers to track on-time delivery, quality issues, and compliance to select better suppliers and contract management.",
      ],
    },
    {
      title: "Demand Forecasting",
      description: [
        "Use historical data, market trends, & external factors like weather to predict demand fluctuations. Improve planning and reduce the risks of overstocking or stockouts.",
      ],
    },
    {
      title: "Cross-Channel Coordination",
      description: ["Integrates data from all sales channels to ensure accurate inventory levels and seamless order fulfilment across platforms."],
    },
    {
      title: "Reverse logistics",
      description: [
        "Streamlines returns by managing inspections, optimizing inventory for returned goods, and coordinating restocking, ensuring efficient handling and cost reduction.",
      ],
    },
    {
      title: "Financial Reconciliation",
      description: ["Facilitate accurate invoicing and financial reconciliation. Identify discrepancies and ensure timely payments to suppliers and vendors."],
    },
  ],
};

//Supply Chain Infoboard Iframe Section
export const supplyChainInfoboardIframeSection: InfoboardIframeSectionProps = {
  heading: "Visualize Your Supply Chain insights",
  iFrameSrc: "https://acmeretail.infoveave.app/v8/View/YWNtZXJldGFpbHwxNzUxMDk=/Desktop/Width",
  image: SupplyChainIframeDashboardScreenshot,
};

//Supply Chain "Call to Action" Section
export const supplyChainBookADemoSection: BookADemoSectionProps = {
  heading:
    "Discover how Infoveave streamlined procurement and helped enhancing operational efficiency and enabled better purchase order tracking for all stakeholders involved.",
  buttonText: "Customer Story",
  href: "/retail-logistics-simplified-with-infoveave",
};

//Supply Chain Dashboard Screenshot Cards
export const supplyChainDashboardScreenShots3DCards: Infoboard3DCardsProps = {
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

//Supply Chain Kpis Know more grid section
export const supplyChainKPIsGridCardsSection: GridCardsSectionProps = {
  heading: "Monitor your |supply chain and logistics| KPIs with Infoveave",
  description: "Integrate all your data sources, map them to your KPIs, analyze your data and visualize insights.",
  projects: [
    {
      title: "Inventory Turnover",
      description: ["Inventory turnover measures how often a company sells and replaces its inventory within a specific period."],
      formula: "Cost of Goods Sold / {(Opening Stock - Closing Stock) / 2}",
    },
    {
      title: "On-Time Delivery Rate",
      description: ["The on-time delivery rate measures the percentage of customer orders delivered on or before the promised delivery date."],
      formula: "(Number of on time deliveries/ Number of deliveries) x 100",
    },
    {
      title: "Freight Bill Accuracy ",
      description: ["Freight bill accuracy evaluates the correctness of freight bills by comparing billed amounts against agreed rates and services."],
      formula: "(Number of Correct Freight Bills / Total Freight Bills) x 100",
    },
    {
      title: "Average Transit Time",
      description: ["Average transit time measures the average time goods spend in transit from the supplier to the customer."],
      formula: "Transit time/ Number of deliveries",
    },
    {
      title: "Warehouse Efficiency Index",
      description: ["Assessing warehouse productivity and efficiency involves metrics like throughput, space utilization, and overall performance."],
      formula: "(Output value/ Input value) x 100",
    },
    {
      title: "Cost per Mile",
      description: ["his evaluates the transportation costs incurred for each mile travelled in delivering goods to customers."],
      formula: "Transportation costs/ Miles Travelled",
    },
  ],
  buttonPrimaryWhite: {
    text: "Know more",
    href: "/top-10-supply-chain-kpis-to-track",
  },
};
