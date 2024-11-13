import BankingImage from "@/assets/banking/hero-section/bfsi.webp";
import CustomerDemographics from "@/assets/Dashboard-cards/Infoveave-Customer-Demographic.webp";
import RiskAndCompliance from "@/assets/Dashboard-cards/Infoveave-Risk-Compliance.webp";
import Stability from "@/assets/Dashboard-cards/Infoveave-Stability.webp";
import BankIframeScreenshot from "@/assets/Iframe-dashboard-screenshots/Banking-Iframe-Dashboard-screenshot.png";
import { BookADemoSectionProps } from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSectionProps } from "@/components/blocks/industries/grid-card-view";
import { InfoboardIframeSectionProps } from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import { IndustriesPageHeroSectionProps } from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCardsProps } from "@/components/blocks/industries/infoboards-cards-section";

//Banking Hero Section
export const bankingPageHeroSectionDetails: IndustriesPageHeroSectionProps = {
  heading: "Optimize Every Step of Your |Financial Services| Value Chain",
  bulletPoints: [
    "Identify and mitigate fraudulent activities, safeguarding assets and client trust.",
    "Analyze customer data to develop personalized financial products.",
    "Automate reporting processes to provide timely, accurate financial insights.",
  ],
  buttons: [
    { text: "Schedule demo", href: "/book-a-demo" },
    { text: "Contact sales", href: "/about-us#contactus" },
  ],
  imageSrc: BankingImage,
  alt: "Infoveave-banking image",
};

//Banking Know more grid section
export const bankingGridCardsKnowMoreSection: GridCardsSectionProps = {
  heading: "Climb the BFSI Landscape with Infoveave",
  unifySimplifyAmplify: [
    {
      title: "",
      description: "Centralize data to ensure compliance with regulatory standards and enhance risk management.",
    },
    {
      title: "",
      description: "Automate reporting processes to provide timely, accurate financial insights and accelerate service.",
    },
    {
      title: "",
      description: "Enhance risk management, drive compliance, and deliver personalized customer experiences.",
    },
  ],
  projects: [
    {
      title: "Fraud Detection and Prevention",
      description: [
        "Utilize real-time data analytics to identify suspicious transaction patterns and anomalies, enabling proactive measures to combat fraud and enhance security.",
      ],
    },
    {
      title: "Personalized Customer Experiences",
      description: [
        "Leverage customer data to tailor financial products and services, providing personalized recommendations that increase engagement and satisfaction.",
      ],
    },
    {
      title: "Risk Management and Compliance",
      description: [
        "Centralize and analyze regulatory data to ensure compliance with industry standards, automate reporting, and enhance risk assessment processes.",
      ],
    },
    {
      title: "Credit Scoring and Loan Approval",
      description: [
        "Use advanced analytics to assess creditworthiness by evaluating diverse data sources, streamlining the loan approval process while reducing default risk.",
      ],
    },
    {
      title: "Predictive Analytics for Customer Retention",
      description: [
        "Analyze customer behavior and transaction history to identify at-risk customers and implement targeted retention strategies, improving loyalty and reducing churn.",
      ],
    },
    {
      title: "Operational Efficiency Improvement",
      description: [
        "Automate workflows and optimize processes across departments, reducing operational costs and improving service delivery in areas like claims processing and customer support.",
      ],
    },
  ],
};

//Banking Infoboard Iframe Section
export const bankingInfoboardIframeSection: InfoboardIframeSectionProps = {
  heading: "Visualize your insights",
  iFrameSrc: "https://acmebanking.infoveave.app/v8/View/YWNtZWJhbmtpbmd8MzViMzk3",
  image: BankIframeScreenshot,
};

//Banking "Call to Action" Section
export const bankingBookADemoSection: BookADemoSectionProps = {
  heading:
    "See how Infoveave empowered a financial institution to boost efficiency through real-time analytics, streamlining compliance, risk management, and customer insights.",
  buttonText: "Success Stories",
  href: "/success-stories",
};

//Healthcare Dashboard Screenshot Cards
export const healthCareDashboardScreenShots3DCards: Infoboard3DCardsProps = {
  heading: "Explore more dashboard examples",
  cards: [
    {
      id: 1,
      imageSrc: CustomerDemographics,
      title: "Customer Demographics",
    },
    {
      id: 2,
      imageSrc: RiskAndCompliance,
      title: "Risk & Compliance",
    },
    {
      id: 3,
      imageSrc: Stability,
      title: "Stability",
    },
  ],
  button: {
    text: "Get started with our templates - Sign up today!",
    href: "/sign-up",
  },
};

//Banking Kpis Know more grid section
export const bankingKPIsGridCardsSection: GridCardsSectionProps = {
  heading: "Unlock the Power of Your |Financial Data| with Infoveave ",
  description: "Integrate all your data sources, map them to your KPIs, analyze your data and visualize insights.",
  projects: [
    {
      title: "Net asset growth rate",
      description: ["The net asset growth rate measures the percentage change in a bank's total assets over time, accounting for liabilities and equity."],
      formula: "Net Asset Growth = (Current year’s total assets – Last year’s total assets) / Last year’s total assets",
    },
    {
      title: "Deposit Growth Rate",
      description: [
        "The deposit growth rate measures the percentage increase or decrease in a bank’s total deposits over a specific period, typically expressed on an annual basis.",
      ],
      formula: "Deposit Growth Rate = (Current year’s total deposits – Last year’s total deposits) / Last year’s total deposits",
    },
    {
      title: "Loan-To-Deposit Ratio ",
      description: [
        "The loan-to-deposit ratio indicates the percentage of deposits lent as loans, providing insights into a bank’s liquidity and risk exposure.",
      ],
      formula: "Loan-To-Deposit Ratio = (Total loans / Total deposits) x 100",
    },
    {
      title: "Loan Approval Rate",
      description: [
        "The loan approval rate measures the percentage of approved loan applications, indicating a bank's lending policies and customers' access to financing.",
      ],
      formula: "Loan Approval Rate = (Number of approved loans / Loan applications) x 100",
    },
    {
      title: "Loan Default Rate",
      description: [
        "The loan default rate measures the percentage of loans in a portfolio that have defaulted, reflecting borrowers' failure to repay obligations.",
      ],
      formula: "Loan Default Rate = (Number of loans defaulted / Number of loans issued) x 100",
    },
    {
      title: "Current Ratio",
      description: ["The current ratio is a metric used to assess a company’s short-term liquidity and its ability to meet immediate financial obligations."],
      formula: "Current Ratio = Current assets/ Current liabilities",
    },
  ],
  buttonPrimaryWhite: {
    text: "Know more",
    href: "/top-10-finance-kpis-to-track",
  },
};
