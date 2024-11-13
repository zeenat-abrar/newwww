import supplyChainKpi from "@/assets/kpi-liabrary/top-10-supply-chain-kpis-to-track.webp";
import KpisInnerPage from "@/components/blocks/kpis/inner-page-layout/kpi-inner-page-design";
import { kpisContentType } from "@/components/blocks/kpis/inner-page-layout/kpis-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("top-10-supply-chain-kpis-to-track");
}

const top10SupplyChainKpisHeading = "|Supply chain| KPIs to track";

const top10SupplyChainKpisContent: kpisContentType[] = [
  {
    paragraph: [
      "Effective supply chain management is essential for achieving operational excellence and customer satisfaction. Key Performance Indicators (KPIs) are vital for measuring and optimizing supply chain performance. Our comprehensive list of supply chain KPIs covers various metrics, including shipping times, inventory turnover, and cost management. By tracking these indicators, organizations can identify inefficiencies, streamline processes, and enhance decision-making. Utilize these metrics to optimize operations and improve productivity, ultimately driving continuous improvement and achieving your business objectives.",
    ],
  },
  {
    heading: "Why are supply chain KPIs important?",
    paragraph: [
      "Supply chain KPIs are important because they provide organizations with measurable insights into their operational efficiency and effectiveness within the supply chain. By tracking these key metrics, businesses can identify bottlenecks, streamline processes, and enhance overall supply chain performance. KPIs enable informed decision-making, allowing companies to respond quickly to fluctuations in demand and supply. They also help optimize inventory levels, reduce logistics costs, and improve order fulfillment rates, ultimately leading to increased profitability and customer satisfaction. In a dynamic market, effective use of supply chain KPIs is crucial for sustained success.",
    ],
  },
  {
    heading: "10 Important KPIs to track in supply chain",
    bulletPoints: [
      {
        listHeading: "1. Inventory Turnover",
        listParagraph: [
          "Inventory turnover measures how often a company sells and replaces its inventory within a specific period. This helps businesses as it indicates how efficiently inventory is managed.",
          "A higher inventory turnover rate shows that a company is selling inventory quickly, leading to reduced holding costs and increased cash flow. A lower turnover rate shows excess inventory, weak demand, prompting a reassessment of inventory management strategies.",
        ],
        formula: "Inventory Turnover = Cost of Goods Sold / {(Opening Stock - Closing Stock) / 2}",
      },
      {
        listHeading: "2. On-Time Delivery Rate",
        listParagraph: [
          "The on-time delivery rate measures the percentage of customer orders delivered on or before the promised delivery date. This KPI is critical for assessing customer service performance and supply chain efficiency.",
          "A higher on-time delivery rate shows a reliable supply chain and effective logistics management, which fosters customer trust. A lower rate may reveal issues such as logistical delays or inefficiencies in order processing, prompting a need for improvement in delivery operations.",
        ],
        formula: "On-Time Delivery Rate = (Number of on time deliveries/ Number of deliveries) x 100",
      },
      {
        listHeading: "3. Days Sales Outstanding",
        listParagraph: [
          "Days Sales Outstanding measures the average number of days it takes a company to collect payment after a sale is made. This KPI is crucial for managing cash flow and assessing the efficiency of accounts receivable processes.",
          "A lower days sales outstanding shows that a business effectively collects payments, improving liquidity and reducing financing costs. A higher days sales outstanding shows issues with credit policies or customer payment behaviors, prompting a review of credit terms or collection practices.",
        ],
        formula: "Days Sales Outstanding = (Account receivables / Credit Sales) x Number of Days",
      },
      {
        listHeading: "4. Fill Rate",
        listParagraph: [
          "The fill rate measures the percentage of customer orders that are completely fulfilled from available inventory. This KPI is essential for assessing inventory management and customer satisfaction.",
          "A higher fill rate shows efficient inventory management and fulfillment processes, leading to improved customer satisfaction. A lower fill rate shows stockouts or inadequate inventory planning, prompting a reassessment of inventory levels and ordering strategies.",
        ],
        formula: "Fill Rate = ((Total Number of Items – Number of Shipped Items) / Total Number of Items) x 100",
      },
      {
        listHeading: "5. Freight Bill Accuracy",
        listParagraph: [
          "Freight bill accuracy evaluates the correctness of freight bills by comparing billed amounts against agreed rates and services. This KPI is important for cost control and reducing disputes with logistics providers.",
          "A higher freight bill accuracy rate shows effective cost management and fewer billing discrepancies, leading to stronger vendor partnerships. A lower rate shows issues in billing processes or contract compliance, prompting a review of freight contracts and billing practices.",
        ],
        formula: "Freight Bill Accuracy = (Number of Correct Freight Bills / Total Freight Bills) x 100",
      },
      {
        listHeading: "6. Average Transit Time",
        listParagraph: [
          "Average transit time measures the average time goods spend in transit from the supplier to the customer. This KPI is essential for assessing the efficiency of logistics operations and ensuring timely deliveries.",
          "A shorter average transit time shows efficient logistics and effective transportation management, leading to improved customer service. A longer transit time shows inefficiencies in transportation routes or processes, prompting a need for optimization in logistics operations.",
        ],
        formula: "Average Transit Time = Transit time/ Number of deliveries",
      },
      {
        listHeading: "7. Supplier Defect Rate",
        listParagraph: [
          "The supplier defect rate measures the percentage of defective products received from suppliers compared to the total products received. This KPI is critical for quality control in procurement and can impact production efficiency and customer satisfaction.",
          "A lower supplier defect rate shows effective supplier quality management and reliable sourcing, leading to reduced rework and customer complaints. A higher defect rate shows issues with supplier quality assurance, necessitating a review of supplier relationships and quality control processes.",
        ],
        formula: "Supplier Defect Rate = (Number of defective products received/ Number of products received) x 100",
        listImage: supplyChainKpi,
      },
      {
        listHeading: "8. Warehouse Efficiency Index",
        listParagraph: [
          "Assesses the productivity and efficiency of warehouse operations, often calculated based on metrics such as throughput and space utilization. This KPI is vital for optimizing warehouse operations and improving inventory management, directly impacting overall supply chain performance.",
          "A higher warehouse efficiency index shows effective space utilization and streamlined processes, leading to lower operating costs and improved order fulfillment rates. A lower index shows inefficiencies in warehouse operations, prompting a need for process improvements and staff training.",
        ],
        formula: "Warehouse Efficiency Index = (Output value/ Input value) x 100",
      },
      {
        listHeading: "9. Cost per Mile",
        listParagraph: [
          "This evaluates the transportation costs incurred for each mile travelled in delivering goods to customers. This KPI is essential for optimizing logistics expenses and assessing the overall efficiency of transportation operations.",
          "A lower cost per mile shows effective route planning and fuel efficiency, contributing to improved profitability. A higher cost shows inefficiencies in transportation management, prompting a need for re-evaluation of logistics strategies and carrier agreements.",
        ],
        formula: "Cost per Mile = Transportation costs/ Miles Travelled",
      },
      {
        listHeading: "10. Perfect Order Rate",
        listParagraph: [
          "The perfect order rate measures the percentage of orders delivered to customers that are complete, on time, and undamaged. This KPI is essential for evaluating overall supply chain performance and customer satisfaction.",
          "A higher perfect order rate reflects a well-managed supply chain, leading to enhanced customer trust and loyalty. A lower rate shows inefficiencies in order processing, fulfillment, prompting a need for improvements in supply chain operations to meet customer expectations consistently.",
        ],
        formula: "Perfect Order Rate = (Number of perfect orders/ Number of orders) x 100",
      },
    ],
  },
];

const formHeading = "Get the complete list of Supply Chain KPIs";

const Top10KPIForSupplyChain = () => {
  return <KpisInnerPage heading={top10SupplyChainKpisHeading} content={top10SupplyChainKpisContent} formHeading={formHeading} />;
};

export default Top10KPIForSupplyChain;
