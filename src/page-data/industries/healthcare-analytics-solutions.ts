import CallCenterInsights from "@/assets/Dashboard-cards/Call-Center-Insights.webp";
import CustomerChurn from "@/assets/Dashboard-cards/Customer-Churn.webp";
import EnergyRetail from "@/assets/Dashboard-cards/Energy-Sales.webp";
import Healthcare from "@/assets/healthcare/herosection/Healthcare.webp";
import HealthCareIframeScreenshot from "@/assets/Iframe-dashboard-screenshots/Healthcare-Iframe-Dashboard-screenshot.png";
import { BookADemoSectionProps } from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSectionProps } from "@/components/blocks/industries/grid-card-view";
import { InfoboardIframeSectionProps } from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import { IndustriesPageHeroSectionProps } from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCardsProps } from "@/components/blocks/industries/infoboards-cards-section";

//Healthcare Hero Section
export const healthCarePageHeroSectionDetails: IndustriesPageHeroSectionProps = {
  heading: "Navigate |Healthcare Challenges| with Unified Data Platform",
  bulletPoints: [
    "Consolidate patient, clinical, and operational data to enhance care coordination and patient management.",
    "Monitor key performance metrics, such as bed utilization and treatment outcomes, in real time for better decision-making.",
    "Streamline hospital operations, reduce costs, and improve resource allocation with automated data workflows.",
  ],
  buttons: [
    { text: "Schedule demo", href: "/book-a-demo" },
    { text: "Contact sales", href: "/about-us#contactus" },
  ],
  imageSrc: Healthcare,
  alt: "Infoveave - healthcare image",
};

//Healthcare Know more grid section
export const healthCareGridCardsSection: GridCardsSectionProps = {
  heading: "Optimize Healthcare Performance with Infoveave",
  unifySimplifyAmplify: [
    {
      title: "",
      description: "Integrate all your data from EHRs, Billings, insurance, vendors, and patients to have a complete understanding of your healthcare system.",
    },
    {
      title: "",
      description: "Automate EMR workflows, insurance claims, document management, data transfer, and reduce human errors in critical places.",
    },
    {
      title: "",
      description: "Understand patient satisfaction levels, hospital efficiency and errors, improve resource management and drive revenue.",
    },
  ],
  projects: [
    {
      title: "Hospital Finance & Operations",
      description: [
        "Get a complete overview of hospital operations, finances. Make informed, data-driven decisions while ensuring compliance and regulations.",
      ],
    },
    {
      title: "Care Analytics",
      description: ["Get an understanding of patient care metrics and improve care quality, operational efficiency, and patient satisfaction."],
    },
    {
      title: "Physician Performance",
      description: [
        "Get insights into physician performance, patient caseloads, and utilization, enabling data-driven decisions that optimize patient care and operational efficiency.",
      ],
    },
    {
      title: "Community Health Monitoring",
      description: [
        "Track healthcare workers performance and  their role in community health through tracking visits, monitoring diseases, mortality rates, births, etc.",
      ],
    },
    {
      title: "Program Effectiveness & Survival Analysis",
      description: [
        "Assess characteristics and outcomes of patients enrolled in treatment programs. Understand patient responses to medicines and the effectiveness of the plan. ",
      ],
    },
    {
      title: "Surveillance program",
      description: ["Track outbreaks of communicable diseases, monitor lab reports, the spread of diseases, mortality rate and effectiveness of treatment."],
    },
  ],
};

//Healthcare Infoboard Iframe Section
export const healthCareInfoboardIframeSection: InfoboardIframeSectionProps = {
  heading: "Visualize healthcare insights",
  iFrameSrc: "https://templates.infoveave.net/v8/View/dGVtcGxhdGVzfDE4ZGJlNg==",
  image: HealthCareIframeScreenshot,
};

//Healthcare "Call to Action" Section
export const healthCareBookADemoSection: BookADemoSectionProps = {
  heading:
    "Learn how Infoveave's solution improved risk analysis and compliance for a food distribution client, saving $175K in three months through real-time monitoring and automation.",
  buttonText: "Customer story",
  href: "/monitoring-risks-and-compliance",
};

//Healthcare Dashboard Screenshot Cards
export const healthCareDashboardScreenShots3DCards: Infoboard3DCardsProps = {
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

//Healthcare Kpis Know more grid section
export const healthCareKPIsGridCardsSection: GridCardsSectionProps = {
  heading: "Your guide to better |Healthcare Analytics|",
  description: "Integrate all your data sources, map them to your KPIs, analyze your data and visualize insights.",
  projects: [
    {
      title: "Bed Occupancy Rate",
      description: [
        "Monitor bed occupancy rate to ensure efficient allocation of our beds & serve more patients in need. Improve operational efficiency & patient care.",
      ],
      formula: "Bed Turnover = (Number of discharges / Number of beds) x 100",
    },
    {
      title: "Average hospital stay",
      description: [
        "The average time patients spend in the hospital from admission to discharge reflects the efficiency of hospital operations and the complexity of medical cases being treated.",
      ],
      formula: "Average Hospital Stay = Stay duration / Number of patients",
    },
    {
      title: "Readmission rate",
      description: ["The percentage of patients who are readmitted to a healthcare facility within a specified period after their initial discharge."],
      formula: "Readmission Rate = (Number of readmissions / Number of discharges) x 100",
    },
    {
      title: "Average treatment charge",
      description: [
        "The average amount charged to patients for treatments reflects typical healthcare costs and provides insights into the pricing of services within a given timeframe.",
      ],
      formula: "Average Treatment Charge = Treatment charges / Number of treatment charges",
    },
    {
      title: "Average patient wait time",
      description: [
        "The average waiting time for services or procedures offers key insights into healthcare process efficiency and impacts the overall patient experience in the facility.",
      ],
      formula: "Average Patient Wait Time = Wait time / Number of patients",
    },
    {
      title: "Staff-to-patient ratio",
      description: [
        "Staff-to-patient ratio measures the relationship between the number of healthcare staff members and the number of patients they care for within a specified period. ",
      ],
      formula: "Staff-To-Patient Ratio = Number of staff: Number of patients",
    },
  ],
  buttonPrimaryWhite: {
    text: "Know more",
    href: "/top-10-kpis-for-healthcare-providers-to-track",
  },
};
