import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("automotive-dealer-performance-analytics");
}

//Content Area
const successStoryHeading = "Auto dealer |performance analytics|";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Boost automotive dealer performance",
    paragraph:
      "The automobile manufacturer aims to achieve a good review across its dealers to maintain consistent and high-quality customer experience across all its dealerships. To ensure this, every dealer partner needs to follow certain standard operations. Dealer performance analysis is crucial as it helps to maintain the operational standard across all outlets.",
  },
  {
    id: 2,
    paragraph:
      "The business needs to establish a strong focus on people and processes. For this to work, one needs to set the right expectations with the dealers. This accompanied by timely evaluation and feedback helps dealers making necessary improvements. Thus, improving efficiency and standardizing the processes.",
  },
  {
    id: 3,
    subHeading: "Key challenges in dealer performance analysis ",
    paragraph:
      "The client collects sales, service, people, and process-related information for every dealership. This data is then analyzed to get insights into the dealer’s performance. This includes the KRAs, areas of concern or improvements, and training needs. With a growing dealership network, the performance evaluation and feedback took much time. There are about 50+ KPIs that gets calculated and tracked using spreadsheets. This process was slow and cumbersome. As a result, feedback & training gets delayed and improvements were less visible.",
  },
  {
    id: 4,
    subHeading: "Dealer performance analytics using Infoveave",
    paragraph:
      "Infoveave has the ability to bring in all the parameters from various departments to measure the KPIs. This accompanied with timely analysis and reporting, lead to efficient and effective communications with the dealerships. Infoveave data sources connect with all the sources of Dealer, Sales, and Service data. Additionally, Customer Satisfaction Survey, Voice of Customer data gets pulled in. All these data get uploaded to Infoveave through various files.",
  },
  {
    id: 5,
    paragraph:
      "All Sales & service metrics related to Dealer performance and process adherence are configured. An interactive dashboard shows compelling and meaningful visualizations. These visualizations show data at various levels National, Regional and Zonal, and individual. Infoveave allows to data for different time periods. This can be monthly, quarterly, or annual comparisons.",
  },
  {
    id: 6,

    paragraph:
      "Thus, providing peer-to-peer comparison and benchmark to the dealers. Automation of customized reports and scheduling managed by the reports module. Infoveave then sends out effective and timely communication to dealers. This helps in ensuring dealers can take necessary action to make improvements.",
  },

  {
    id: 11,
    subHeading: "Visibility of dealer performance data across levels",
    bulletPoints: [
      "Standardization of dealer operations:| Standard formats of data for collection, sharing, and evaluation. This results in more relevant and meaningful inputs.",
      "Timely feedback:| Dealer receives timely feedback throughout the year at intervals.",
      "Increased visibility:| A web-based solution made the performance and dealership data visible. This visibility of data was at Regional, Zonal Managers levels all in one go.",
      "Improved data quality:| Anomalies & missing data gets highlighted. Avoid manual data entry errors.",
    ],
  },
];

const AutomotiveDealerPerformanceAnalytics = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default AutomotiveDealerPerformanceAnalytics;
