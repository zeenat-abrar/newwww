import manufacturingKpi from "@/assets/kpi-liabrary/top-10-kpis-for-manufacturers-to-track.webp";
import KpisInnerPage from "@/components/blocks/kpis/inner-page-layout/kpi-inner-page-design";
import { kpisContentType } from "@/components/blocks/kpis/inner-page-layout/kpis-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("top-10-kpis-for-manufacturers-to-track");
}

const top10ManufacturingKpisHeading = "|Manufacturing| KPIs to track";

const top10ManufacturingKpisContent: kpisContentType[] = [
  {
    paragraph: [
      "Key Performance Indicators (KPIs) are essential for evaluating and optimizing manufacturing processes. This list of manufacturing KPIs covers various aspects such as production efficiency, workforce management, maintenance, and cost control. By systematically monitoring these KPIs, manufacturing businesses can make data-driven decisions to enhance productivity, reduce costs, and maintain high standards of product quality and operational performance. Explore our comprehensive guide on manufacturing KPIs to discover how to effectively track and utilize these metrics.",
    ],
  },
  {
    heading: "Why are manufacturing KPIs important?",
    paragraph: [
      "Manufacturing KPIs are crucial for optimizing manufacturing operations’ efficiency, productivity, and profitability. They provide a clear and quantifiable way to monitor various aspects of the production process, such as performance, machine utilisation, and labour productivity, ensuring smooth and effective operations. By tracking KPIs manufacturers can identify inefficiencies and bottlenecks, enabling targeted improvements. Data-driven decision-making is facilitated by KPIs, providing accurate information for resource allocation and strategic planning. KPIs help set and track goals, benchmark against industry standards, manage risks, and ensure sustainability by monitoring energy consumption and material costs.",
    ],
  },
  {
    heading: "10 Important KPIs to track in manufacturing",
    bulletPoints: [
      {
        listHeading: "1. Overall Equipment Effectiveness",
        listParagraph: [
          "Overall Equipment Effectiveness is a metric used to evaluate the efficiency and performance of manufacturing equipment. It provides a comprehensive assessment by considering three critical factors: availability, performance, and quality. A high rate shows that manufacturing equipment is operating efficiently, with minimal downtime, optimal performance speed, and a low defect rate. A low rate shows frequent equipment downtime, slow performance, and high defect rates, resulting in inefficiencies, higher operational costs, and reduced production output.",
        ],
        formula: "Overall Equipment Effectiveness = (Availability) × (Performance) × (Quality)",
      },
      {
        listHeading: "2. Throughput",
        listParagraph: [
          "Throughput is the rate at which a facility can produce a product within a specific period. It measures the speed and efficiency of production, reflecting the capacity of the production system to meet demand.",
          "High throughput shows that the production processes are well-optimized, allowing the facility to manufacture products quickly and efficiently, thus meeting customer demands and maximizing revenue.",
          "Low throughput shows bottlenecks, inefficiencies, or equipment issues, which can hinder the facility’s ability to fulfil orders on time and reduce overall profitability.",
        ],
        formula: "Throughput = Produced quantity / Time (hour or day)",
      },
      {
        listHeading: "3. Cycle Time",
        listParagraph: [
          "Cycle time is the total time required to complete a single production cycle or unit of output within a manufacturing process, from start to finish. It encompasses all phases of production, including setup, actual processing, and any delays or downtime. Monitoring this helps businesses identify opportunities for process improvement and streamline operations by pinpointing inefficiencies and bottlenecks.",
          "By reducing cycle time, companies can increase throughput, enabling them to produce more units in a given period, better meet customer demand, and enhance overall operational efficiency and profitability.",
        ],
        formula: "Cycle Time = (Current year’s total deposits – Last year’s total deposits) / Last year’s total deposits",
      },
      {
        listHeading: "4. Takt Time",
        listParagraph: [
          "Takt time refers to the pace or rhythm at which a product needs to be produced to meet customer demand. This metric provides a standardized measure for balancing production rates with customer demand, ensuring that the production process is synchronized with market requirements.",
          "By adhering to takt time, manufacturers can align their production schedules to produce just enough products to fulfil customer orders without creating excess inventory or experiencing shortages. This balance helps in optimizing resource utilization, reducing waste, and maintaining lean operations. Takt time is crucial for maintaining production efficiency, meeting customer expectations, and achieving sustainable operational performance.",
        ],
        formula: "Takt Time =  Available time / Customers daily demand",
      },
      {
        listHeading: "5. Cost Per Unit",
        listParagraph: [
          "The cost per unit is the total cost incurred by a business to produce one unit of a product. This comprehensive cost includes direct materials, direct labour, and manufacturing overhead expenses associated with the production process.",
          "This is crucial for making informed pricing decisions, ensuring that products are competitively priced while still generating a profit. Analyzing this cost can help identify opportunities for cost reduction, such as optimizing resource usage, improving labour productivity, or renegotiating supplier contracts.",
        ],
        formula: "Cost Per Unit = Production cost / Produced quantity",
      },
      {
        listHeading: "6. Downtime Percentage",
        listParagraph: [
          "The downtime is the proportion of total available time that manufacturing equipment or systems are non-operational due to maintenance activities. This metric provides crucial insights into the reliability and efficiency of manufacturing operations.",
          "A high downtime percentage shows frequent interruptions in production, which can stop equipment failures, unscheduled maintenance, or other operational issues.",
          "A low downtime percentage is essential for maximizing equipment utilization, improving production efficiency, and ensuring timely fulfillment of customer orders, ultimately contributing to enhanced operational performance and profitability.",
        ],
        formula: "Downtime Percentage = (Downtime / Operating time) × 100",
      },
      {
        listHeading: "7. Scrap Rate",
        listParagraph: [
          "Scrap rate is the proportion of products that are discarded or scrapped due to quality issues during the manufacturing process. This is crucial for businesses as it provides a direct measure of manufacturing efficiency and quality control effectiveness.",
          "A high scrap rate shows inefficiencies in production, such as defects, errors, or inconsistencies in manufacturing processes, which lead to the disposal of potentially usable materials or products.",
          "A low scrap rate shows that the percentage of products discarded due to quality issues is minimal, reflecting high precision and consistency in manufacturing operations.",
        ],
        formula: "Scrap Rate = (Scrap / Produced quantity) × 100",
        listImage: manufacturingKpi,
      },
      {
        listHeading: "8. First Pass Yield",
        listParagraph: [
          "First Pass Yield is the percentage of units or products that pass through the entire manufacturing process without requiring rework or repair. This is crucial for assessing the efficiency and effectiveness of manufacturing operations.",
          "A high yield shows that most products meet quality standards on the first attempt, minimizing the need for rework, scrap, or additional manufacturing steps.",
          "A low yield shows that a significant portion of units or products do not meet quality standards on the first attempt and require rework or repair. This increases production costs and extends production time.",
        ],
        formula: "First Pass Yield = Good produced quantity / Produced quantity",
      },
      {
        listHeading: "9. Production Schedule Attainment",
        listParagraph: [
          "Production schedule attainment is the degree to which a business successfully meets its planned production targets within a specified time frame. This is crucial for assessing the efficiency and reliability of manufacturing operations.",
          "A high production schedule attainment shows that the business can effectively plan and execute production activities, meeting or exceeding planned targets without significant delays or disruptions.",
          "A low production schedule attainment shows challenges such as production bottlenecks, equipment breakdowns, material shortages, or inefficiencies in workflow management",
        ],
        formula: "Production Schedule Attainment = Current assets/ Current liabilities",
      },
      {
        listHeading: "10. Avoided Cost",
        listParagraph: [
          "This is the financial savings or reductions in costs achieved by implementing preventive maintenance measures or proactive actions to prevent equipment breakdowns and operational disruptions.",
          "It reduces the need for emergency repairs and replacement parts, which are often more expensive and disruptive to operations. Avoided cost contributes to operational efficiency and profitability by optimizing resource utilization and extending the lifespan of equipment.",
        ],
        formula: "Avoided Cost =  Assumed repair cost + Performance losses – Preventative maintenance cost",
      },
    ],
  },
];

const formHeading = "Get the complete list of Manufacturing KPIs";

const Top10KPIForManufacturing = () => {
  return <KpisInnerPage heading={top10ManufacturingKpisHeading} content={top10ManufacturingKpisContent} formHeading={formHeading} />;
};

export default Top10KPIForManufacturing;
