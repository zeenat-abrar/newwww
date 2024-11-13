import RetailImage from "@/assets/retail/hero-section/retail.webp";
import InfoveaveFootprint from "@/assets/retail/image-section/Infoveaves-footprint-in-retail.webp";
import { BookADemoSectionProps } from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSectionProps } from "@/components/blocks/industries/grid-card-view";
import { InfoboardIframeSectionProps } from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import { IndustriesPageHeroSectionProps } from "@/components/blocks/industries/industry-page-hero-section";
import { ImageSectionProps } from "@/components/blocks/platforms/image-section";
import CallCenterInsights from "@/assets/Dashboard-cards/Call-Center-Insights.webp";
import CustomerChurn from "@/assets/Dashboard-cards/Customer-Churn.webp";
import EnergyRetail from "@/assets/Dashboard-cards/Energy-Sales.webp";
import { Infoboard3DCardsProps } from "@/components/blocks/industries/infoboards-cards-section";
import RetailDashboardScreenShot from "@/assets/Iframe-dashboard-screenshots/Retail-Iframe-Dashboard-screenshot.png";

export const retailPageHeroSectionDetails: IndustriesPageHeroSectionProps = {
  heading: "Navigate |Retail challenges| with Unified Data Platform",
  bulletPoints: [
    "Integrate data from all retail channels for a complete view of your operations and customer behavior.",
    "Streamline inventory management, logistics, and staffing to enhance operational efficiency and reduce costs.",
    "Access real-time insights to track sales, inventory, and customer trends for faster, informed decisions.",
  ],
  buttons: [
    { text: "Schedule demo", href: "/book-a-demo" },
    { text: "Contact sales", href: "/about-us#contactus" },
  ],
  imageSrc: RetailImage,
  alt: "Infoveave- retail image",
};

//Retail Know more grid section
export const retailGridCardsSection: GridCardsSectionProps = {
  heading: "Maximize Retail Efficiency with Infoveave",
  unifySimplifyAmplify: [
    {
      title: "",
      description: "Unify data across all your retail platforms, vendors, warehouses, stores and get a complete view of your retail business.",
    },
    {
      title: "",
      description: "Automate invoicing , feedback collection, customer interactions, etc and reduce and increase efficiency.",
    },
    {
      title: "",
      description: "Analyse product performance and pricing strategies & future demand. With alerts keep track of targets on all important KPIs.",
    },
  ],
  projects: [
    {
      title: "Marketplace Visibility",
      description: [
        "Integrate all your data sources with Infoveave to get a complete view of all channels, product performance, regional trends, etc. on visual dashboards & automated reports. Understand buying patterns and customer behaviour to arrive at discount and campaign plans.",
      ],
    },
    {
      title: "Product Performance Analysis",
      description: [
        "Analyze retail data over time, across departments, & by product category. Identify top-selling & underperforming products, seasonal fluctuations. Simulate different discount patterns & observe impact on sales using what-if analysis. Identify correlation with various selling & buying attributes.",
      ],
    },
    {
      title: "Product Pricing Optimization",
      description: [
        "Analyze pricing data, competitor pricing, & customer behavior to optimize pricing through simulations. Predict future demand by analyzing historical sales data, seasonal trends, external factors. Find cost associated with production, storage, distribution & inventory management.",
      ],
    },
    {
      title: "New Merchandise Planning",
      description: [
        "Automate simulations on new products, offers & product bundles to assess commercial. Centralized API & Content Aggregator for integrating with online stores for consistent product information across platforms. Forecast trends & styles & plan procurement of merchandise.",
      ],
    },
    {
      title: "Revenue Assurance",
      description: [
        "Analyze trends & anomalies indicating potential revenue leakage, such as discrepancies in pricing or underperforming products. Set alerts for early detection of cash overruns or irregularities in revenue collection. Detect fraudulent activities for mitigating revenue losses due to fraud.",
      ],
    },
    {
      title: "Shipment & Logistics Optimization ",
      description: [
        "Monitor shipments down to the last mile, identifying causes of delays and complaints through API integrations with delivery partners. Conduct automated reconciliations to compare actual costs against budgets and contracts. Evaluate variable expenses related to distance, weight, handling charges, and commissions within the supply chain for optimized operations.",
      ],
    },
  ],
};

//Retail Infobard Iframe Section
export const retailInfoboardIframeSection: InfoboardIframeSectionProps = {
  heading: "Visualize your retail insights",
  iFrameSrc: "https://acmeretail.infoveave.app/v8/View/YWNtZXJldGFpbHxmZThlMTA=/Desktop/600",
  image: RetailDashboardScreenShot,
};

//Retail Dashboard Screenshot Cards
export const retailDashboardScreenShots3DCards: Infoboard3DCardsProps = {
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

//Retail Big Image Section
export const retailImageSection: ImageSectionProps = {
  imageSrc: InfoveaveFootprint,
  alt: "Infoveave-footprint in retail image",
};

//Retail "Call to Action" Section
export const retailBookADemoSection: BookADemoSectionProps = {
  heading:
    "Discover how Infoveave streamlined procurement for a leading retailer in US, enhanced operational efficiency and enabled better purchase order tracking for all stakeholders involved. ",
  buttonText: "Customer Story",
  href: "/success-stories",
};

export const retailNonGradientGridSection: GridCardsSectionProps = {
  // Grid Cards Section
  heading: "Your key to |retail success|",
  description: "Integrate all your data sources, map them to your KPIs, analyze your data and visualize insights.",
  projects: [
    {
      title: "Sales Analysis",
      description: [
        "Analyze trends over time, across departments, & by product category. Identify top-selling & underperforming products, seasonal fluctuations, etc.",
      ],
    },
    {
      title: "Customer Segmentation",
      description: ["Segment customers based on demographics, purchase history, and behavior to personalize marketing and promotions."],
    },
    {
      title: "Price Optimization",
      description: ["Analyze price elasticity of products to determine the impact of price changes on sales and set optimal pricing strategies."],
    },
    {
      title: "Stock Levels",
      description: ["Analyze historical sales data & predict future demand to maintain optimal stock levels. Avoid stockouts & minimize storage costs."],
    },
    {
      title: "Financial Analysis",
      description: [
        "Track financial metrics such as profit margins, return on investment (ROI), & overall business performance. Generate financial reports & forecasts.",
      ],
    },
    {
      title: "Feedback Management",
      description: ["Collect feedback from your consumers and understand their pain points and interests. Analyze metrics like CSAT, NPS, CES."],
    },
  ],
};

export const retailKPICards: GridCardsSectionProps = {
  // Grid Cards Section
  heading: "Stay on Top of Every |Retail KPI| with Infoveave",
  description: "Integrate all your data sources, map them to your KPIs, analyze your data and visualize insights.",
  projects: [
    {
      title: "Gross Profit Margin",
      description: ["Gross profit margin is the percentage of revenue retained by a company after removing the cost of goods sold from the net sales revenue."],
      formula: "Gross Profit Margin = ((Net sales - Cost of goods sold) / Net sales) x 100",
    },
    {
      title: "Net Promoter Score",
      description: ["Net Promoter Score gauges customer loyalty by asking, 'How likely are you to recommend our product to a friend or colleague?'."],
      formula: "Net Promoter Score = Percentage of promoters – Percentage of detractors",
    },
    {
      title: "Inventory Turnover Ratio ",
      description: [
        "Inventory turnover ratio measures how efficiently a company manages inventory by comparing cost of goods sold to average inventory levels.",
      ],
      formula: "Inventory Turnover Ratio = Cost of goods sold / Average inventory",
    },
    {
      title: "Average Order Value",
      description: ["Average order value measures the average amount customers spend per transaction within a specific period, such as monthly or annually"],
      formula: "Average Order Value = Sales / Number of orders",
    },
    {
      title: "Sell Through Rate",
      description: [
        "Sell-through rate measures the percentage of inventory sold during a specific period relative to the total inventory available for sale. ",
      ],
      formula: "Sell Through Rate = (Total units sold / Beginning inventory) x 100",
    },
    {
      title: "Customer Satisfaction Score ",
      description: [
        "Customer satisfaction score is a metric used to measure the level of satisfaction that customers have with a company’s products or services.",
      ],
      formula: "CSAT Score = (Number of satisfied customers / Number of respondents)",
    },
  ],
  buttonPrimaryWhite: {
    text: "Know more",
    href: "/top-10-retail-kpis-for-to-track",
  },
};

// DownloadNowMiniForm
// const heading = "Maximize Your Retail Performance";
// const words = [
//   {
//     text: "Get ",
//   },
//   {
//     text: "Our ",
//   },
//   {
//     text: "Free ",
//   },
//   {
//     text: "KPI ",
//     className: "text-white dark:text-white",
//   },
//   {
//     text: "Encyclopedia!",
//     className: "text-white dark:text-white",
//   },
// ];
