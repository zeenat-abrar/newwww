import CallCenterInsights from "@/assets/Dashboard-cards/Call-Center-Insights.webp";
import CustomerChurn from "@/assets/Dashboard-cards/Customer-Churn.webp";
import EnergyRetail from "@/assets/Dashboard-cards/Energy-Sales.webp";
import Energy from "@/assets/energy/hero-section/Energy-Utilities.webp";
import EnergyIframeScreenshot from "@/assets/Iframe-dashboard-screenshots/Energy-Iframe-Dashboard-screenshot.png";
import { BookADemoSectionProps } from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSectionProps } from "@/components/blocks/industries/grid-card-view";
import { InfoboardIframeSectionProps } from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import { IndustriesPageHeroSectionProps } from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCardsProps } from "@/components/blocks/industries/infoboards-cards-section";

//Energy Hero Section
export const energyPageHeroSectionDetails: IndustriesPageHeroSectionProps = {
  heading: "Power Up Your Retail |Energy Business| with Smarter Insights",
  bulletPoints: [
    "Monitor consumption patterns and adjust rates in real-time to balance demand and improve customer satisfaction.",
    "Centralize data to offer flexible pricing plans, manage billing cycles, and personalized discounts.",
    "Ensure adherence to regulatory standards and simplify reporting with automated data workflows.",
  ],
  buttons: [
    { text: "Schedule demo", href: "/book-a-demo" },
    { text: "Contact sales", href: "/about-us#contactus" },
  ],
  imageSrc: Energy,
  alt: "Infoveave-Energy analytics solutions image",
};

//Energy Know more grid section
export const energyGridCardsSection: GridCardsSectionProps = {
  heading: "Power Your Retail Energy Strategy with Infoveave",
  unifySimplifyAmplify: [
    {
      title: "",
      description: "Unify data form energy distributers, sales agents, customers, compliance and regulations teams to get a unified view of your company.",
    },
    {
      title: "",
      description: "Automate billing processes to reduce errors, implement dynamic pricing plans for customers, and improve vendor management. ",
    },
    {
      title: "",
      description: "Get a complete view of your business functions from procurement to customer satisfaction with powerful analytics and visulaizations.",
    },
  ],
  projects: [
    {
      title: "Renewable Energy Share",
      description: ["Track the percentage of electricity sourced from renewable energy. Increase the percentage & cater to customers seeking green options."],
    },
    {
      title: "Carbon Footprint Tracking",
      description: ["Measures the total greenhouse gas emissions associated with operations. Lower your carbon footprint by tracking concerned areas."],
    },
    {
      title: "Billing Cycle",
      description: [
        "Faster billing cycles improve cash flow & customer experience. Implement efficient billing systems & automate processes to reduce processing times.",
      ],
    },
    {
      title: "Average Revenue Per User",
      description: ["Track revenue generation efficiency & identify potential areas for improvement in customer acquisition or pricing strategies."],
    },
    {
      title: "Customer Churn Rate",
      description: ["Track the percentage of customers who switch to another provider within a specific period. And understand the reasons behind it."],
    },
    {
      title: "Best Offer Analysis",
      description: [
        "Create custom pricing plans by balancing customer demands & business objectives .Get prices adjusted in real-time to optimize profit margins",
      ],
    },
  ],
};

//Energy Infoboard Iframe Section
export const energyInfoboardIframeSection: InfoboardIframeSectionProps = {
  heading: "Visualize energy insights",
  iFrameSrc: "https://templates.infoveave.net/v8/View/dGVtcGxhdGVzfDM5MTZhMg==",
  image: EnergyIframeScreenshot,
};

//Energy "Call to Action" Section
export const energyBookADemoSection: BookADemoSectionProps = {
  heading:
    "Discover how an Australian energy retailer improved revenue assurance and saved $4.6 million by leveraging Infoveave’s Unified Data Platform for efficient account management.",
  buttonText: "Customer Story",
  href: "/revenue-assurance-with-unified-data-platform",
};

//Energy Dashboard Screenshot Cards
export const energyDashboardScreenShots3DCards: Infoboard3DCardsProps = {
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

//Energy Kpis Know more grid section
export const energyKPIsGridCardsSection: GridCardsSectionProps = {
  heading: "Supercharge Your |Retail Energy KPIs| with Infoveave  ",
  description: "Integrate all your data sources, map them to your KPIs, analyze your data and visualize insights.",
  projects: [
    {
      title: "Percentage Of Customers On Standard Retail Contracts",
      description: [
        "The proportion of customers who have opted for conventional, non-customized agreements or packages offered by the business is a crucial metric for retail energy providers.",
      ],
      formula: "Percentage Of Customers On Standard Retail Contracts = (Customers on standard retail contracts / Total customers) x 100",
    },
    {
      title: "Debt Repayment Rate",
      description: [
        "The percentage of debts that have been repaid within a specified period is a critical metric for retail energy providers, reflecting the effectiveness of their debt collection efforts.",
      ],
      formula: "Debt Repayment Rate = (Amount of debt repaid by customers/ Total amount of debt) x 100",
    },
    {
      title: "Customer Disconnection Rate",
      description: [
        "The percentage of customers whose service has been disconnected due to non-payment or other reasons within a specific period is a crucial metric for retail energy providers.",
      ],
      formula: "Customer Disconnection Rate = (Number of customers disconnected/ Total customers) x 100",
    },
    {
      title: "Customer Reconnection Rate",
      description: [
        "The percentage of customers whose service has been reinstated after being disconnected is a critical metric that reflects the effectiveness of a retail energy providers reconnection processes.",
      ],
      formula: "Customer Reconnection Rate = (Number of customers reconnected/ Number of customers disconnected) x 100",
    },
    {
      title: "Average Connection Setup Time",
      description: [
        "The average duration taken by a retail energy company to set up new connections for customers is a crucial KPI that tells on the efficiency of the connection setup process.",
      ],
      formula: "Average Connection Setup Time = Time taken to set up connections/ Connection set ups",
    },
    {
      title: "Energy Per Customer",
      description: [
        "The average amount of energy consumed by each customer within a specific period is a vital metric that offers deep insights into the energy consumption behaviour of individual customers or households.",
      ],
      formula: "Energy Per Customer = Consumption/ Total customers",
    },
  ],
  buttonPrimaryWhite: {
    text: "Know more",
    href: "/top-10-kpis-for-energy-retailers-to-track",
  },
};
