import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("revenue-assurance-with-unified-data-platform");
}

//Content Area
const successStoryHeading = "|Australian energy retailer| enhances revenue assurance with Infoveave’s unified data platform";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Revenue assurance with unified data",
    paragraph:
      "The concept of OEE originated in an era of manufacturing that didn’t deal with smart technologies. Today, capabilities like AI, ML, and IIoT allow companies to track machine health and performance in real time. This allows manufacturers to improve equipment reliability and unlock continuous improvement. Manufacturers are always on the lookout to improve productivity and prevent revenue leakage. And maximizing the OEE efficiency is critical to achieve the above objectives.",
  },
  {
    id: 2,
    paragraph: "But, the question remains, how can manufacturers improve their OEE?",
  },
  {
    id: 3,
    paragraph: "The answer- By leveraging the power of data.",
  },
  {
    id: 4,
    paragraph:
      "According to allied market research, the use of analytics in manufacturing is fast-growing at a CAGR (Central Aggregate Growth Rate) of 16.5%. In fact, the global analytics manufacturing market is set to reach $28,443.7 million by 2026. This blog focuses on what OEE is and how businesses can achieve higher OEE levels. But before that, let us explore the importance of OEE in manufacturing.",
  },
  {
    id: 5,
    heading: "The importance of OEE In manufacturing",
    paragraph:
      "OEE is an industry standard metric to measure the efficiency of manufacturing equipment. It helps businesses identify what part of their manufacturing activity is truly productive. With OEE, companies can identify how an equipment is performing compared to their full potential. Companies can increase production capacity, improve quality and reduce costs by improving OEE. Moreover, operators can identify machine health risks and take early preventive measures.",
  },
  {
    id: 6,
    paragraph: "Manufacturing companies can also use OEE as a benchmark to:",
    bulletPoints: [
      "Track equipment performance and progress over time.",
      "Identify and cut the additional losses during production.",
      "See how their unit is performing compared to similar businesses.",
    ],
  },
  {
    id: 7,
    subHeading: "Conclusion",
    paragraph:
      "Today, manufacturing companies are investing in innovative solutions to streamline the production process. Equipment health and performance can be now tracked in real-time. Manufacturers are able to identify pitfalls via patterns and improve asset reliability.",
  },
  {
    id: 8,
    paragraph: "Maximizing OEE efficiency brings in many benefits for manufacturing companies, such as:",
    bulletPoints: [
      "Ensuring every equipment is running to the highest capacity.",
      "Preventing overspending on any asset.",
      "Gaining a 360-degree of the entire production process.",
      "Locating and understanding problems for quick redressal.",
      "Categorizing the primary losses in terms of equipment usage, efficiency and standard of products.",
      "Identifying reasons behind each loss.",
    ],
  },
  {
    id: 9,
    heading: "Challenges to OEE",
    paragraph:
      "The OEE calculation, is based on three factors- availability, performance and quality. We can further divide these three components into the six big OEE losses. In lean manufacturing, one of the core business goals is to reduce and eliminate these six losses. The six big losses are",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/02/Six-Big-OEE-Losses.jpeg?w=1280&ssl=1",
  },
  {
    id: 10,
    paragraph:
      "The manufacturing industry is always on the verge of disruption. Manufacturers are always innovating new products and services to meet shifting consumer demands. Failure to do results in loss of sales and revenue leakage. The approach to maximizing OEE efficiency is not a one-stop solution. Instead, it involves a detailed orientation of every facet of your manufacturing unit. Identifying pitfalls and improving efficiency at every step is crucial for manufacturing success. Improve your OEE with Infoveave®.",
  },
];

const RevenueAssuranceWithUnifiedData = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default RevenueAssuranceWithUnifiedData;
