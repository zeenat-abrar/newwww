import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("community-health-monitoring-analysis");
}

//Content Area
const successStoryHeading = "|Community health| monitoring analysis";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Community health monitoring analysis",
    paragraph:
      "Health monitoring and supervision, have always been a challenge for most workers on-ground. The lack of facilities, infrastructure, training, and awareness on-ground poses a few of the many challenges.",
  },
  {
    id: 2,

    paragraph:
      "Leading humanitarian organizations are exploring their options to enhance the supervision programs. This would help to reach out to a greater audience with medical aids. CRS Catholic Relief Services is exploring ways to support scale-up programs for ASHA’s Accredited Social Health has tied up with Sarathi Development Foundation to support the scale-up programs under the aegis of the National Health Mission. ReMiND project aims to strengthen systematic supportive supervision of ASHAs. To help improve their performance by Improved knowledge and skills of ASHA Sangini. The technology helped strengthen supportive supervision by providing real-time data on ASHA performance. By supportive supervision, automated reports at different levels, Real-time evidence-based decision making. Thus, forming an efficient and transparent system.",
  },
  {
    id: 3,
    subHeading: "Business need for health monitoring solution",
    paragraph:
      "As part of its various healthcare initiatives, the client is working on an ICT-led solution. The community health monitoring analysis supports Community Health Worker Supervisors to guide performance improvements. The project involves training and supporting the 523 workers.",
  },
  {
    id: 4,
    paragraph:
      "Using the supportive community health monitoring analysis application to further guide 10,385 ground-level staff. This will improve their outreach to a population of 1.77 crores on key maternal and child health issues. The client needed to develop and maintain the ASHA Sangini Supportive Supervision Application dashboard. The purpose is to define roles and expected outcomes through this web-based project. Providing the NHM and project staff timely access to analyzed data on critical projects. Various indicators and data trends help them to make informed programmatic decisions. And to identify areas for improvements and do adaptive programming.",
  },
  {
    id: 5,
    subHeading: "The need for health monitoring analysis",
    bulletPoints: [
      "Analyzing various health parameters like Maternal health, Child health, death counts",
      "Consuming Supportive Supervision data of the healthcare workers to get critical and decision-making insights.",
      "Benchmarking to compare various project indicators by way of dashboards and reports",
      "Implementing the objectives of the scale up project to guide the performance.",
      "Sharing information on dashboard with users at various levels of organization hierarchy.",
    ],
  },
  {
    id: 6,
    subHeading: "Community health monitoring using infoveave",
    paragraph:
      "The need for easy access to analyzed data to different levels of the workforce was critical. As it would help in data-driven decisions making and adaptive programming. This involved various modules of Infoveave working together to meet client expectations. Data ingested from disparate databases into Infoveave data source. User type-specific indicators and their definitions with data defined. Required data pulled from the data dictionary to set up analysis algorithms. The dashboard houses analytics from data available from the program. Dashboard was set up with several navigation links and drag-down menus to sub-pages. Also including infographics with permitted logos and color schemes. Altogether making it a modern live interactive dashboard. Role-based accessibility is provided at various levels of the hierarchy. Various alert indicators to track and record the daily/weekly/monthly performance. Customized reports generated and shared with respective stakeholders. With insights gained and intelligent decision-making improvement measures rolled out to stakeholders. Entire structural documentation of the dashboard and source code prepared in parallel. This would help the agency to install and adapt the application.",
  },
  {
    id: 4,
    subHeading: "KPIs tracked by health monitoring systems",
    bulletPoints: [
      "Assessment at different user levels.",
      "User manual for the end-users",
      "System improvements based on the feedback from end-users.",
      "Multi-lingual support (for both English and Hindi).",
      "User-friendly interactive dashboard with visualization and description in different languages.",
      "A tabular report supporting the Govt norms and regulations.",
      "A visualization drill down showing time-specific views (be it weekly, monthly, or yearly).",
      "Enable customized view of the dashboard at various levels of the hierarchy.",
      "Role-based access to the dashboard.",
    ],
  },
  {
    id: 5,
    subHeading: "Performance analysis using health monitoring systems",
    bulletPoints: [
      "Increased efficiency:| by removing away manual intervention. Process efficiency improved, which was otherwise prone to errors or missing out on monitoring.",
      "Enhanced visibility:| The performance analysis and customized insights helped in Visibility to block development officers, govt officials, CRS (the one giving the funding), and SDF (ground implementation partner).",
      "Benchmarking project indicators:| Agency agents have access to the dashboard. This helped in quicker response to critical needs.",
    ],
  },
];

const RetailersNeedUnifiedDataPlatform = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default RetailersNeedUnifiedDataPlatform;
