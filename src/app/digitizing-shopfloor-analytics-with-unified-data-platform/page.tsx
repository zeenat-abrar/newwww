import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("digitizing-shopfloor-analytics-with-unified-data-platform");
}

//Content Area
const successStoryHeading = "|Australian energy retailer| enhances revenue assurance with Infoveave’s unified data platform";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Digitizing shopfloor analytics",
    paragraph:
      "The company is a fortune 500 enterprise in the manufacturing industry, specializing in a wide range of tools, equipment, and solutions for professionals and consumers worldwide. They have established themselves as industry pioneers, driven by a steadfast commitment to excellence. ",
  },
  {
    id: 2,
    paragraph:
      "In response to the growth and expanded production capacity at one of their factories, the company recognized the need for a better process to increase efficiency. To address this, they decided to digitize their analytics processes. Previously, various teams tracked their tasks independently, leading to discrepancies in information. To streamline operations and eliminate the challenge of multiple versions of the truth, the company sought to digitize the tracking of their supply chain, planning, and production analytics. ",
  },
  {
    id: 3,
    heading: "Solution",
    subHeading:
      "Infoveave’s platform stitches shop floor production data from multiple systems into cohesive information for production performance optimization",
    paragraph:
      "With Infoveave, the company experienced a significant improvement in their operations. The platform seamlessly integrated data from various sources across the company, providing a unified view of critical information. ",
  },
  {
    id: 4,
    paragraph:
      "This integration also facilitated the digital capture of essential shop floor data. As a result, the accuracy of data collection increased, and production values could be immediately compared against targets, enabling timely decision-making. ",
  },
  {
    id: 5,
    paragraph:
      "Using Infoveave’s advanced analytics capabilities, stakeholders gained deeper insights into their operations. This comprehensive understanding empowered them to make more informed decisions and plan strategies effectively. ",
  },
  {
    id: 6,
    paragraph:
      "Infoveave’s intuitive designer dashboards simplified the visualization of key performance indicators (KPIs) and highlighted areas for improvement in real-time. This visibility enabled stakeholders to monitor progress and address challenges proactively.",
  },
  {
    id: 7,
    paragraph:
      "Additionally, Infoveave provided scalable and resilient storage capabilities to manage the vast volumes of data generated throughout the manufacturing processes effectively. ",
  },
  {
    id: 8,
    paragraph:
      "Furthermore, Infoveave ensured data security, compliance with industry regulations, and protection of intellectual property through robust data governance processes. This safeguarded the integrity and confidentiality of the company’s data assets, building trust in their data-driven initiatives. ",
  },
  {
    id: 9,
    subHeading: "Infoveave’s unified data platform empowered the business to",
    bulletPoints: [
      "Gain a holistic view:| Broke down data silos and achieved a comprehensive understanding of business operations.",
      "Increase production efficiency:| Identified and addressed production bottlenecks through real-time insights, optimizing resource allocation, minimizing downtime, and maximizing overall equipment effectiveness (OEE). This led to increased productivity and cost savings. ",
      "Empower stakeholder:| Provided self-service analytics capabilities to empower employees at all levels with access to relevant data, fostering a culture of data-driven decision-making and continuous improvement throughout the organization. ",
      "Reduce costs:| Streamlined processes, optimized production schedules, and minimized waste through data-driven insights. This led to reduced operating costs, improved profitability, and a more competitive cost structure in the market. ",
      "Make data-driven decisions:| Leveraged real-time insights to make informed choices across the organization, from production planning to resource allocation. ",
    ],
  },
  {
    id: 10,
    paragraph:
      "By implementing Infoveave’s unified data platform, the company digitized and improved their operations by bridging data silos, delivering real-time insights, and enabling data-driven decision-making.",
  },
  {
    id: 11,
    paragraph: "To learn how to optimize your shop floor operations cost-effectively sign up for a demo of Infoveave.  ",
  },
];

const RetailersNeedUnifiedDataPlatform = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default RetailersNeedUnifiedDataPlatform;
