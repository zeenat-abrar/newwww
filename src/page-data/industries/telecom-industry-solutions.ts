import CallCenterInsights from "@/assets/Dashboard-cards/Call-Center-Insights.webp";
import CustomerChurn from "@/assets/Dashboard-cards/Customer-Churn.webp";
import EnergyRetail from "@/assets/Dashboard-cards/Energy-Sales.webp";
import TelecomIframeDashboardScreenshot from "@/assets/Iframe-dashboard-screenshots/Telecom-Iframe-Dashboard-screenshot.png";
import TelecomHeroSectionImage from "@/assets/telecom/telecom-hero-section-image.webp";
import { BookADemoSectionProps } from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSectionProps } from "@/components/blocks/industries/grid-card-view";
import { InfoboardIframeSectionProps } from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import { IndustriesPageHeroSectionProps } from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCardsProps } from "@/components/blocks/industries/infoboards-cards-section";

//Telecom Hero Section
export const telecomPageHeroSectionDetails: IndustriesPageHeroSectionProps = {
  heading: "Data-driven decisions for a |connected world|",
  bulletPoints: [
    "Monitor data from network operations, infrastructure, and customer usage for real-time insights.",
    "Leverage data to personalize services and improve customer satisfaction across all touchpoints.",
    "Use predictive analytics to optimize capacity planning, service delivery, and operational efficiency.",
  ],
  buttons: [
    { text: "Schedule demo", href: "/book-a-demo" },
    { text: "Contact sales", href: "/about-us#contactus" },
  ],
  imageSrc: TelecomHeroSectionImage,
  alt: "infoveave-telecom-image",
};

//Telecom Know more grid section
export const telecomGridCardsKnowMoreSection: GridCardsSectionProps = {
  heading: "Unlocking the power of your network",
  unifySimplifyAmplify: [
    {
      title: "",
      description: "Consolidate data from billing, customer service, network performance into a single platform for comprehensive visibility.",
    },
    {
      title: "",
      description:
        "Streamline operational processes such as billing, provisioning, and customer support through automation, reducing manual efforts and errors.",
    },
    {
      title: "",
      description: "Leverage advanced analytics to gain deeper insights into customer needs, enabling tailored offerings and targeted marketing campaigns.",
    },
  ],
  projects: [
    {
      title: "Customer satisfaction",
      description: [
        "Enhance customer satisfaction in telecom with Infoveave's real-time analytics. Gather insights, address issues proactively, and improve service quality to foster loyalty and drive long-term success in a competitive market.",
      ],
    },
    {
      title: "Customer Segmentation",
      description: [
        "Leverage Infoveave for customer segmentation in telecom. By analyzing demographics and behavior, providers can deliver personalized services, targeted promotions, and dynamic pricing, enhancing engagement, loyalty, and driving sales growth across diverse customer groups.",
      ],
    },
    {
      title: "Price Optimization",
      description: [
        "Utilize Infoveave for price optimization in telecom. By leveraging machine learning and real-time data analytics, businesses can implement dynamic pricing strategies, balancing profitability with customer satisfaction to enhance financial performance and competitiveness in the market",
      ],
    },
    {
      title: "Invoice Generation & Validation",
      description: [
        "Streamline invoice generation and validation in telecom with Infoveave. Leverage automation and AI-driven analytics to ensure accurate, timely billing, reducing errors and administrative costs while enhancing the overall customer experience and operational efficiency.",
      ],
    },
    {
      title: "Financial Analysis",
      description: [
        "Understanding financial performance is vital for telecom success. By analyzing metrics like profit margins and ROI, companies can make informed decisions on investments and resource allocation, ensuring profitability amid market fluctuations through data analytics.",
      ],
    },
    {
      title: "Billing Reconciliation",
      description: [
        "Telecom companies face billing challenges, including missed charges and overbilling. Implementing reconciliation processes with Infoveave helps identify discrepancies and ensures accurate billing, enhancing revenue assurance and building customer trust through transparent billing practices.",
      ],
    },
  ],
};

//Telecom Infoboard Iframe Section
export const telecomInfoboardIframeSection: InfoboardIframeSectionProps = {
  heading: "Visualize Your Telecom insights",
  iFrameSrc: "https://templates.infoveave.net/v8/View/dGVtcGxhdGVzfDQwNTQzYw==",
  image: TelecomIframeDashboardScreenshot,
};

//Telecom "Call to Action" Section
export const telecomBookADemoSection: BookADemoSectionProps = {
  heading:
    "Discover how Infoveave empowered a leading telecom company in India with real-time network performance analysis, driving operational efficiency and enhancing customer satisfaction.",
  buttonText: "Customer Story",
  href: "/telecom-network-performance-analysis",
};

//Telecom Dashboard Screenshot Cards
export const telecomDashboardScreenShots3DCards: Infoboard3DCardsProps = {
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

//Telecom Kpis Know more grid section
export const telecomKPIsGridCardsSection: GridCardsSectionProps = {
  heading: "Unlocking the Power of |Your Network| ",
  description: "Integrate all your data sources, map them to your KPIs, analyze your data and visualize insights.",
  projects: [
    {
      title: "Network availability",
      description: [
        "This indicates the percentage of time a network remains operational and accessible to users over a specific period, typically measured in hours, days, or months.",
      ],
      formula: "Network Availability = (Time available / Operational time) x 100",
    },
    {
      title: "Drop call rate",
      description: [
        "Drop call rate refers to the percentage of mobile phone calls that are unintentionally terminated by the network before either party has ended the call.",
      ],
      formula: "Drop Call Rate = (Dropped calls / Number of calls) x 100",
    },
    {
      title: "Bandwidth utilization",
      description: ["Bandwidth utilization refers to the percentage of available network bandwidth that is currently being used to carry data traffic."],
      formula: "Bandwidth Utilization = (Used bandwidth / Bandwidth) x 100",
    },
    {
      title: "Network coverage",
      description: ["Network coverage refers to the geographic area where a telecom network provides reliable service to its users."],
      formula: "Network Coverage = Geographic area covered / Geographic area",
    },
    {
      title: "Customer churn rate",
      description: ["Customer churn rate is the percentage of customers who stop using a company’s products or services within a specific period."],
      formula: "Customer Churn Rate = (Number of customer lost / Number of customers at the start) x 100",
    },
    {
      title: "Packet loss rate",
      description: ["The packet loss rate is a metric that measures the percentage of data packets lost or discarded during transmission over a network."],
      formula: "Packet Loss Rate = (Number of lost packets / Number of Packets sent) x 100",
    },
  ],
  buttonPrimaryWhite: {
    text: "Know more",
    href: "/top-10-telecom-kpis-to-track",
  },
};
