import { Metadata } from "next";
import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";

//Metadata
export const metadata: Metadata = {
  title: "Infoveave Dashboard for ICAP: Enhancing HIV Care in Kenya",
  description: "Infoveave builds dashboards for ICAP in Kenya for HIV patient level data visualization to enable quick and simple analysis.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Infoveave Dashboard for ICAP: Enhancing HIV Care in Kenya",
    description: "Infoveave builds dashboards for ICAP in Kenya for HIV patient level data visualization to enable quick and simple analysis.",
    url: "https://infoveave.com/infoveave-creates-a-dashboard-for-icap-in-kenya-to-track-hiv-care-and-treatment/",
    siteName: "Infoveave",
    images: [
      {
        url: "https://infoveave.com/wp-content/uploads/2017/10/icap.jpg",
        width: 2240,
        height: 1260,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Est. reading time",
  },
};

//Content Area
const successStoryHeading = "Infoveave builds dashboards for |ICAP to monitor HIV care| & treatment in Kenya.";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 0,
    image: { image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2017/10/icap.jpg?w=225&ssl=1", className: "w-full md:w-[220px] my-[-40px]" },
  },
  {
    id: 1,
    heading: "President’s Emergency Plan for AIDS Relief (PEPFAR)",
    paragraph:
      "ICAP Global Health was the initiative of Columbia University’s Mailman School of Public Health to support HIV/AIDS Support all over the world. ICAP have their presence in more than 21 countries across 12000 sites. ICAP partners with governmental organizations, NGOs and MNCs to develop sustainable HIV/AIDS prevention & control, care, and treatment programs.",
  },
  {
    id: 2,
    paragraph:
      "In order to populate the data warehouse with current patient-level data, ICAP created an existing patient-level database and collaborated with NASCOP and five PEPFAR implementing partners working in Kenya.",
  },
  {
    id: 3,
    heading: "Contribution by Infoveave ",
    paragraph:
      "Infoveave partnered with ICAP to build the web-based HIV care and treatment dashboard using the Infoveave open-source version. The project aimed at creating a easy to use version of the software to access and compare patient-level data from the national database. Based on the data collected from the field combined with the existing dataset ICAP could create charts and tables to reflect the characteristics and results of patients receiving HIV care and treatment at facilities that have electronic patient-level data. Infoveave also provided the customization options for the widgets and the layout.  The dashboard projected the data in real-time based on the data collected and uploaded. Data interpretation with Infoveave was simple, for instance the graph widget showcased the difference in patient survival after the start of antiretroviral medication (ART) between men and women or to compare the percentage of patients receiving ART by location.",
  },
  {
    id: 4,
    heading: "Key Points",
    paragraph:
      "ICAP certified that the Infoveave open source version was reliable and user-friendly in their article on the subject that was published by Columbia University. ICAP examined the open source version of Infoveave and discovered that the front-end interface was excellent for visualizing information. They also believe that the tool has the potential to significantly improve the use of routinely collected, electronic patient-level data for HIV program monitoring, evaluation, and operations research. It could enable users to gain a more thorough understanding of HIV service delivery by creating custom data reports that are tailored to their particular needs. Courtesy: ICAP Global Health Read the full report.",
  },
  {
    id: 5,
    heading: "About Infoveave",
    paragraph: "Infoveave® provides insights to stakeholders by transforming data into visual and actionable information. Users of Infoveave® can",
    bulletPoints: [
      "Load data sources using an easy-to-use wizard.",
      "Create visual mashups from an array of interactive data visualisation options.",
      "Perform analysis and correlations across many data sources.",
      "Carry out Competitor Analysis, Customer Analysis, MTD, YTD Trends Analysis.",
      "Track Operational Efficiency & Effectiveness Risk & Compliance.",
      "Simulate What-if scenarios, Forecast and Predict trends on large datasets.",
      "Build historical data, discover patterns and gather deeper insights on demand.",
      "Share and collaborate with stakeholders and customers for quick action.",
    ],
  },
  {
    id: 6,
    formula:
      "Learn how Infoveave can assist you in reducing treatment costs, foreseeing disease outbreaks, preventing preventable illnesses, and improving the general standard of care and quality of life for patients.",
  },
];

const ICAPToMonitorHIVCare = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default ICAPToMonitorHIVCare;
