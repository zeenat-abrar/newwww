import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("how-a-leading-manufacturing-plant-improved-their-oee");
}

//Content Area
const successStoryHeading = "How a leading |manufacturing plant| improved their OEE";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Improving OEE in manufacturing",
    paragraph:
      "OEE Dashboard is a production visibility tool that displays real-time data. This provides review and status summary information for plant lines and units. One can identify production inefficiencies contributing to lower OEE reports.",
  },
  {
    id: 2,
    paragraph:
      "Operation managers need a good OEE dashboard. It is easy to pull up data and make it visible to everyone. This increases the visibility of the shop floor metrics and acts as an indicator to health of the line and the units as a whole. Aiding the management to make data driven decisions quicker.",
  },
  {
    id: 3,
    subHeading: "Challenges with oEE reporting",
    paragraph:
      "There can be various types of OEE dashboard. Granular for a single machine or holistic for the full machine shop. OEE is a KPI that represents the productivity of machines. Calculating and monitoring OEE at different levels can get complicated. Especially if you’re running manual time studies and recording on paper.",
  },
  {
    id: 4,
    paragraph:
      "The plant runs 9 assembly units with over 50+ machines and 200 employees. With 1500+ SKUs and increase in business, client was keen to reduce machine breaks down and loss hours. And getting a better understanding of the reasons behind it. A low-code digital dashboard solution on Infoveave can address the problem in hand.",
  },
  {
    id: 5,
    subHeading: "OEE dashboard and reporting with infoveave",
    paragraph: "With Infoveave, client could achieve digitization of data collection. And near real time decision making supported in growing business.",
  },
  {
    id: 6,

    paragraph:
      "Infoveave Data sources connect to sources for getting data. The data points are  Inventory,  Spares , Production  and  Maintenance,  Machine downtime data.",
  },
  {
    id: 7,
    paragraph:
      "Data is upload through Automated Tasks configured within Infoveave. Compelling and meaningful Visualizations on the Dashboard shows the factory performance. This makes monitoring of the real time production data at the shop floor possible. The data points include OEE, Performance, Availability, Quality. Thus, helping business get better visibility and more control.",
  },
  {
    id: 8,
    paragraph:
      "Maintenance schedules are planned better to reduce costs and scraps. This also gives flexibility to the extra shifts if needed. The business gets a clear and consistent view of Yield, labor and productivity, accompanied by utilization rates and shift efficiency. The team can view the Planned downtime and plan the daily activities accordingly.",
  },
  {
    id: 9,
    paragraph:
      "The reports module of Infoveave, automates and schedules reports. Infoveave sends out effective and timely communication to all stakeholders. This aids to taking necessary action to make improvements.",
  },
  {
    id: 10,
    subHeading: "OEE dashboard and reporting",
    bulletPoints: [
      "Manage and process large volumes of production unit’s data.",
      "Analyze the reporting metrics by ingesting them into a data dictionary.",
      "Visibility of real time production data to stakeholders.",
      "Ability to track and highlight issues that need improvements.",
      "Extensible to allow integration with other organizational portals and services.",
    ],
  },
  {
    id: 11,
    subHeading: "Visibility of production data through OEE dashboard",
    bulletPoints: [
      "Timely production information:| Information on Yield, OEE and Scrap. This is available to business near real time.",
      "Improved data quality:| Anomalies & missing data gets highlighted. Avoid manual data entry errors.",
      "Increased visibility:| With an online web-based solution. Aided by on TV screen on the shop floor all stakeholders. The staffs get clear visibility of production targets and actuals.",
      "IoT for real time data:| Move to IoT to read machine data to remove further human dependency.",
      "Centralized decision making:| Managing and monitoring of plant operations all in one place.",
    ],
  },
];

const RetailersNeedUnifiedDataPlatform = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default RetailersNeedUnifiedDataPlatform;
