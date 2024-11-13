import AutomotiveImage from "@/assets/automotive/hero-section/Auto-Industry.webp";
import CallCenterInsights from "@/assets/Dashboard-cards/Call-Center-Insights.webp";
import CustomerChurn from "@/assets/Dashboard-cards/Customer-Churn.webp";
import EnergyRetail from "@/assets/Dashboard-cards/Energy-Sales.webp";
import AutomotiveIframeDashboardScreenshot from "@/assets/Iframe-dashboard-screenshots/Automotive-Iframe-Dashboard-screenshot.png";
import { BookADemoSectionProps } from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSectionProps } from "@/components/blocks/industries/grid-card-view";
import { InfoboardIframeSectionProps } from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import { IndustriesPageHeroSectionProps } from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCardsProps } from "@/components/blocks/industries/infoboards-cards-section";

//Automotive Hero Section
export const automotivePageHeroSectionDetails: IndustriesPageHeroSectionProps = {
  heading: "Turbocharge your |Automotive insights| with Infoveave",
  bulletPoints: [
    "Integrate data from production lines, supply chains, and vendors for a complete operational view.",
    "Track dealership performance, manufacturing quality, and customer feedback to drive continuous improvement.",
    "Use data-driven insights to anticipate maintenance needs, reduce downtime, and improve operational efficiency.",
  ],
  buttons: [
    { text: "Schedule demo", href: "/book-a-demo" },
    { text: "Contact sales", href: "/about-us#contactus" },
  ],
  imageSrc: AutomotiveImage,
  alt: "Infoveave - automotive insights image",
};

//Automotive Know more grid section
export const automotiveGridCardsKnowMoreSection: GridCardsSectionProps = {
  heading: "Connect, Optimize, and Elevate Your Automotive Success",
  unifySimplifyAmplify: [
    {
      title: "",
      description: "Consolidate data from dealerships, manufacturers, and suppliers to track inventory levels, sales performance, and market trends.",
    },
    {
      title: "",
      description: "Streamline logistics and inventory management processes by automating order tracking, procurement, and supplier management.",
    },
    {
      title: "",
      description: "Amplify insights into customer preferences and market trends to drive personalized strategies and informed decision-making.",
    },
  ],
  projects: [
    {
      title: "Dealer Performance Management",
      description: [
        "Infoveave automates sales and operational data analysis across dealerships, providing real-time insights for standardizing operations and identifying training needs.",
      ],
    },
    {
      title: "Advanced Pricing Optimization",
      description: [
        "The pricing optimization module allows automotive companies to create dynamic pricing strategies, enabling swift responses to market changes and competitive pricing.",
      ],
    },
    {
      title: "Enhanced Customer Satisfaction Insights",
      description: [
        "Infoveave integrates customer satisfaction data to help manufacturers identify trends and implement timely improvements, boosting customer loyalty.",
      ],
    },
    {
      title: "Efficient Data Quality Management",
      description: [
        "Automated anomaly detection minimizes data entry errors, ensuring reliable datasets that support accurate decision-making and performance evaluation.",
      ],
    },
    {
      title: "Real-Time Market Intelligence and Benchmarking",
      description: [
        "Infoveave enables manufacturers to benchmark against peers and analyze market trends, facilitating informed decisions to enhance market positioning.",
      ],
    },
    {
      title: "Automated Reporting and Communication ",
      description: [
        "Automated report generation ensures timely communication with dealerships, delivering performance updates and actionable insights for improvement.",
      ],
    },
  ],
};

//Automotive Infoboard Iframe Section
export const automotiveInfoboardIframeSection: InfoboardIframeSectionProps = {
  heading: "Visualize your insights",
  iFrameSrc: "https://factory.infoveave.app/v8/View/ZmFjdG9yeXwzZmIxMTk=/Desktop/600",
  image: AutomotiveIframeDashboardScreenshot,
};

//Automotive "Call to Action" Section
export const automotiveBookADemoSection: BookADemoSectionProps = {
  heading:
    "Discover how Infoveave boosts automotive dealer performance by standardizing operations, providing timely feedback, and improving productivity by 85% through integrated data analysis.",
  buttonText: "Customer story",
  href: "/automotive-dealer-performance-analytics",
};

//Automotive Dashboard Screenshot Cards
export const automotiveDashboardScreenShots3DCards: Infoboard3DCardsProps = {
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

//Automotive Kpis Know more grid section
export const automotiveKPIsGridCardsSection: GridCardsSectionProps = {
  heading: "Your guide to better |Automotive Analytics|",
  description: "Integrate all your data sources, map them to your KPIs, analyze your data and visualize insights.",
  projects: [
    {
      title: "Sales Forecast Accuracy",
      description: [
        "Sales forecast accuracy is the percentage difference between actual sales and predicted sales, measuring the precision of sales predictions.",
      ],
      formula: "Sales Forecast Accuracy = (Actual sales - Forecasted sales) / Forecasted sales",
    },
    {
      title: "Test Drive Conversion Rate",
      description: ["The test drive conversion rate is the percentage of test drives that result in a sale."],
      formula: "Test Drive Conversion Rate = (No. of test drives resulting in a sale / No. of test drives) x 100",
    },
    {
      title: "Loan Approval Rate",
      description: ["Loan approval rate is the percentage of loan applications that are approved by financial institutions."],
      formula: "Loan Approval Rate = (No. of approved loans / Loan applications) x 100",
    },
    {
      title: "Product Innovation Rate",
      description: ["Product innovation rate is the percentage of new products developed in relation to the total number of products offered by the company."],
      formula: "Product Innovation Rate = (No. of new products/ No. of existing products) x 100",
    },
    {
      title: "Warranty Claims Rate",
      description: ["Warranty claims rate is the number of warranty claims made per unit sold, measuring the reliability and quality of a company’s products."],
      formula: "Warranty Claims Rate = (No. of warranty claims / Units sold) x 100",
    },
    {
      title: "Absorption Ratio",
      description: ["Absorption ratio is the percentage of fixed expenses that are covered by the profits from the service and parts departments."],
      formula: "Absorption Ratio = (Gross profit from service/ Fixed cost of the service department) x 100",
    },
  ],
  buttonPrimaryWhite: {
    text: "Know more",
    href: "/top-10-automotive-kpis-to-track",
  },
};
