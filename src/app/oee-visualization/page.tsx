import BlogsInnerPage from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-design";
import { BlogContentType } from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("oee-visualization");
}

//Content Area
const blogHeading = "Leveraging |OEE visualization| to enhance productivity";

const blogContent: BlogContentType[] = [
  {
    id: 1,
    paragraph:
      "OEE by itself does not automatically solve any manufacturing problems. Rather, it is a gateway to identify inefficiencies and the causes behind them. Yet, calculating OEE has become a tedious task for manufacturers. There is too much company data floating around for every enterprise. Verifying every piece of information manually is slow, tiring and prone to errors. Investing in smart manufacturing capabilities has become a necessity for forward-looking enterprises. With an OEE dashboard enterprises can recognize real-time OEE scores via visual representations. Businesses get access to a comprehensive, easy-to-understand portrayal of shop floor data. It becomes easier to make informed decisions and plan strategies to improve the OEE.",
  },
  {
    id: 2,
    subHeading: "Improved personal communication",
    paragraph:
      "For any industry running 24*7 straight, better shop floor communication is the key. A shift handover report becomes critical to ensure uninterrupted production during handovers. A shift handover is the passing of information between outgoing and incoming personnel. The report includes information on KPIs, product defects, unplanned stops, etc. A digital shift handover report enables the seamless transfer of knowledge between two work shifts.  The person taking over the next shift can get visibility into shifts, personnel and line reports.Digitizing businesses can now ensure that workers do not miss out on any critical information. The swift handover of information digitally enables operators to maintain equipment productivity levels. Digitalization of your manufacturing plant enables the real-time collection of data.  Dashboards are a useful tool to navigate and drill down into the data you really want to see. Take Infoveave’s Shift Handover Analytics capabilities as an example, operators can gain updated information on defects, production waste or the OEE score. Personnel across shifts, departments or hierarchies can now maintain manufacturing continuity across handovers",
  },
  {
    id: 3,
    paragraph: "Infoveave’s live wallboards highlight the efficiency of the unit across assembly lines.",
  },
  {
    id: 4,
    paragraph: "Learn more about Infoveave's live wallboards",
  },
  {
    id: 5,
    subHeading: "Effective monitoring of KPIs",
    paragraph:
      "With data visualization, businesses are able to check critical production KPIs via a centralized dashboard. A robust OEE dashboards provide a detailed view of production efficiency based on selected parameters.Infoveave’s OEE Executive Dashboard provides a holistic KPI monitoring of every single process via a single screen. Operators can view the OEE score, number of rejected items as well as output per employee. This helps them identify any underperforming areas, develop frameworks and analyze their progress. Creating a digital ecosystem within the facility enables informed decision-making. A decision-making process that is backed by real-time facts and not based on guesswork.",
  },
  {
    id: 6,
    paragraph:
      "Infoveave’s live wallboards highlight the efficiency of the unit across assembly lines. The dashboards help visualize the overall, KPIs along with the OEE score of the production facility. The dashboards can also view the efficiency of each assembly line under an operator if required.",
  },
  {
    id: 7,
    subHeading: "Increased return on investment (ROI)",
    paragraph:
      "Businesses spend large sums of money when purchasing manufacturing equipment. When the machinery does not perform within the desired levels, it means you have an OEE problem. These challenges come under either availability, performance, or quality issues. With an OEE dashboard, manufacturers can view the production data and check whether things are moving in the right direction. Plant operators can get detailed perspectives into the number of good parts produced and rejected products. Apart from rejected items, they can also view products that require rework. By reworking and improving products, they can cut losses and improve the ROI.",
  },
  {
    id: 8,
    paragraph:
      "Manufacturers can identify any deviations in production performance and quality with OEE scores. They can leverage historical data to benchmark production efficiency by setting goals and KPIs. Whether it is for a single equipment, an assembly line or the whole facility. Managers receive alerts and notifications whenever there is a shift or a decrease in OEE levels. With insights, they can decide on the changes to be made to the machinery and how to go about it. Thus, manufacturers don’t have to spend regularly on buying new piece of equipment. By optimizing the efficiency of their existing investment, they can improve the returns.",
  },
  {
    id: 9,
    subHeading: "Informed preventive maintenance",
    paragraph:
      "Preventive maintenance refers to extending the equipment lifecycle via routine management. In your ideal scenario, every equipment will perform to its maximum capacity. That too without suffering any breakdowns or stoppages. But, the reality is actually quite different. So, preventive maintenance aims to fix issues before they result in equipment failures.Preventive maintenance, like many frameworks, is not free from errors. A manual approach to preventive maintenance can be costly and impact on business revenue. Often, manufacturers spend excessive time on maintenance on a single piece of equipment. They might also constantly check for issues that do not even exist. Additionally, the manual approach involves human intervention. The decisions are sometimes based on gut and ineffective in predicting unplanned failures.",
  },
  {
    id: 10,
    paragraph: "With smart automation,",
    bulletPoints: [
      "Detect potential issues at early stages.",
      "Planned maintenance schedules before a breakdown occurs.",
      "Increase the equipment availability and uptime.",
    ],
  },
  {
    id: 11,
    paragraph:
      "With Infoveave’s smart automation visualization, the industry can now review large data sets within minutes. They can improve the asset availability and reliability along with other advantages.",
  },
];

const OEEVisualization = () => {
  return <BlogsInnerPage heading={blogHeading} content={blogContent} />;
};

export default OEEVisualization;
