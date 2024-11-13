import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("monitoring-risks-and-compliance");
}

//Content Area
const successStoryHeading = "|Monitoring risks| and compliance";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Risk & compliance in food distribution",
    paragraph:
      "For food distribution systems, performing a quality check of food is mandatory. Food quality check is one of the critical KPI to measure. Monitoring risks and compliance management systems help in maintaining food quality and delivery standards.",
  },
  {
    id: 2,

    paragraph:
      "Quality checks and management is present throughout the food supply chain. Performing a QC in distribution is as important as performing QC in production. There are various risk factors involved in the distribution of food across geographies. Quality check and management help oversee the red flags, beforehand and mitigate them. A real-time monitoring system would be the best fit for such requirements. With an advantage minimal manual intervention process. It can support the management and reporting of food distribution across geographies. Thus, ensuring safety for customers by enhancing the control and management.",
  },
  {
    id: 3,
    subHeading: "Business concerns on risk analysis",
    paragraph:
      "The client-focused on the success of their food monitoring program. As per the program, the client provides free food across geographies. This program focuses on monitoring the food distribution to over 3 million constituents.",
  },
  {
    id: 4,
    paragraph:
      "To enable monitoring risks and compliance till last mile of food distribution. There is a need to assess the level of service provided at every possible checkpoint. There is a lot of risk associated with delivering food and relief it becomes crucial to track. With various distribution points across geographies, for tracking and maintenance becomes more complex.",
  },
  {
    id: 5,
    paragraph:
      "A risk analysis and management model was the need of client. From collecting field data on food distribution, to publishing reports as executive dashboards. An end-to-end tracking, analyzing, and reporting solution to support the program. Digital transformation aided by live interactive dashboards solved the issue. Infoveave helped support the client’s food distribution monitoring program.",
  },
  {
    id: 6,
    subHeading: "The need for risk analysis",
    bulletPoints: [
      "Manage and process large volumes of customer data spread across tables",
      "Support different formulas based on customer profile and usage",
      "Ability to simulate varied offers and concession calculation metrics",
      "Ability to track the revenue collections and discount offers applied",
      "Extensible to allow integration with other organizational portals and services",
    ],
  },
  {
    id: 7,
    subHeading: "Risk analysis and compliance by infoveave",
    paragraph:
      "The solution was to digitize end-to-end food distribution process flow. This included collecting field data to publishing reports as an executive dashboard. This involved various modules and features of Infoveave working together.",
  },
  {
    id: 8,
    paragraph:
      "Infoveave collected data from various external systems and ingested it into Data Sources. This field data, location data warehouse management data. Along with others, which are as follows:",
    bulletPoints: [
      "Warehouse to a market location,",
      "Local distribution channels,",
      "Food to population ratio,",
      "Quality of storage,",
      "No checkpoints in the food distribution process flow.",
    ],
  },
  {
    id: 9,
    paragraph: "A Risk management model designed to flag and mitigate potential risk factors. To forecast risks the required analysis metrics studied were:",
    bulletPoints: ["Supply/demand ratio,", "Risk analysis and management,", "Total revenue from food distribution"],
  },
  {
    id: 10,
    paragraph:
      "Customized reports generated and sent to concerned stakeholders. The generated risk analysis reports alert the client to take necessary steps in mitigation. Be it relocation of the workforce, or rearrangement of resources. This helps the client to be proactive in addressing issues. Digitizing the data collection and management makes real-time monitoring possible. Highlighting any data discrepancies, data approval workflow and alert them to respective stakeholders. And live interactive dashboards give better visibility to the food distribution program.",
  },
  {
    id: 11,
    subHeading: "Overall visibility an advantage of risk analysis",
    bulletPoints: [
      "Increased efficiency:| By removing away manual intervention. Process efficiency is improved, that was otherwise prone to errors.",
      "Real time monitoring:| Live dashboards and interactive visualizations aids to better visibility. Thus, helps in monitoring the real time field data.",
      "Reduced costs:| Digital transformation reduced implementation costs. Thus, aiding the program with better quality checks and risk analysis, along with overall visibility to various stakeholders.",
      "Improved Risk analysis:| With enriched data analysis, forecasting of potential risk was made easier. This helped in improved quality of services.",
      "Enhanced integration:| Between Infoveave and the 3rd party data management systems. This made the process seamless yet non-intrusive.",
    ],
  },
];

const RetailersNeedUnifiedDataPlatform = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default RetailersNeedUnifiedDataPlatform;
