import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("telecom-network-performance-analysis");
}

//Content Area
const successStoryHeading = "|Telecom network| performance analysis";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Network performance analysis by Infoveave",
    paragraph:
      "Monitoring an operational network is a major KPI for telecom. Network Performance analysis and real time monitoring aids the operational teams in ways. With evolution in the regulatory mandates, network governance has been more crucial. Increasing complexity in today’s IT work ecosystems, have added risk factors for network. Making it even more important to have a risk governance process flow in place. Automation, data collection, management, monitoring and reporting potential risks to stakeholders. All forms a complete network performance monitoring work flow. A risk and compliance management system with real time monitoring can show a better impact. Thus, increasing customer and client trust with data security. Data automation and intelligent decision-making systems can support the need.",
  },
  {
    id: 2,
    subHeading: "Business concerns with network performance",
    paragraph:
      "Data from the wi fi network was growing fast as the network deployed new access points every day. Current approach of using spreadsheets was becoming cumbersome. With as close to 200,000 CDRs were being processed every day and this was growing. No historical data was being captured for analysis. As a result, in time of reporting data was not possible. Change in personnel meant that there was a learning curve for new employees. Outbound reporting to stakeholders was critical as this involved government agencies. With limited Management insights of whatever data was being projected. Errors in reporting and calculations increased data quality issues due to manual intervention.",
  },
  {
    id: 3,
    subHeading: "Network performance analysis using infoveave",
    paragraph:
      "Infoveave as a solution addressed all their pain points in less than 4 weeks. Daily data from various access points pushed to a common FTP server. Files cleansed and loaded into Infoveave. The data received grouped as follows:",
    bulletPoints: [
      "AP status:| This holds information on the APs, their location, their go live date, and their status. Also classifying whether they are bulk or retail hotspots.",
      "Voucher data:| This holds information on vouchers sold on the network, both pre or postpaid.",
      "CDR data:| This holds information on the network usage – users, data and time.",
    ],
  },
  {
    id: 4,
    paragraph:
      "Users get access to the processed data as live interactive dashboard. The metrics tracked calculated and presented as dashboard, reporting analysis and insights. Infoveave helped business to track revenues, connections sold on the network. Other datapoints include popular hotspots, network usages and new and repeat users. Report module automated periodic outbound reporting of critical information to stakeholders. The client gained visibility of operational data across business function. Some of the major reporting metrics:",
    bulletPoints: [
      "Executive dashboards",
      "Agency reports",
      "Top hotSpots reports",
      "Revenue reports",
      "Sessions reports",
      "User analysis reports",
      "Device per user analysis reports",
    ],
  },
  {
    id: 5,
    subHeading: "Why monitor network performance?",
    bulletPoints: [
      "Monitor large volumes of daily browsing data",
      "Current approach of using spreadsheets were inefficient to support the increasing daily counts of data",
      "No historic data was captured to show analysis reports",
      "Management insights were limited",
      "Change in personnel adding to the complex curve",
      "User behavior analysis for both new and subscribed users.",
      "Device per user analysis",
    ],
  },
  {
    id: 6,
    subHeading: "Monitoring risk and compliance from network analysis",
    paragraph:
      "A key success factor was to understand customer behavior and activity patterns on its network. Infoveave supported the client’s needs and helped client gain valuable insights. Adding to it was the following benefits as well.",
    bulletPoints: [
      "Accessibility of processed data:| Users can access the processed data. Data is present as live dashboard, with various analysis metrics and reports.",
      "Increase in efficiency:| with reduction in time to process data. Thus, providing streamlined analysis with minimal human intervention.",
      "Improved customer satisfaction:| by tracking the KPIs of network usage. It was possible to fine tune the data usage and network performance.",
    ],
  },
];

const TelecomNetworkPerformanceAnalysis = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default TelecomNetworkPerformanceAnalysis;
