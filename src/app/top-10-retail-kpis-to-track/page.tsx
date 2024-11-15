import productPricing from "@/assets/blogs/Product-pricing.webp";
import KpisInnerPage from "@/components/blocks/kpis/inner-page-layout/kpi-inner-page-design";
import { kpisContentType } from "@/components/blocks/kpis/inner-page-layout/kpis-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("top-10-retail-kpis-for-to-track");
}

const top10RetailKpisHeading = "KPIs for |Retailers| to track";

const top10RetailKpisContent: kpisContentType[] = [
  {
    paragraph: [
      "In the retail landscape, understanding and leveraging key performance indicators (KPIs) is essential for success. It is a measurable value that indicates how effectively a retail business is achieving its key objectives. KPIs offer invaluable insights into every aspect of your business, from sales and customer satisfaction to inventory management and operational efficiency. By measuring and analyzing these metrics, you can make informed decisions that drive growth, enhance customer experience, and optimize your operations.",
    ],
  },
  {
    heading: "Why are retail KPIs important?",
    paragraph: [
      "Retail KPIs are necessary for measuring and managing the success of a retail business. They provide an objective to assess performance, facilitate data-driven decision-making, and help identify trends and patterns over time. By highlighting inefficiencies and enabling process optimization, KPIs contribute to improved operational efficiency and resource allocation. They offer valuable insights into customer satisfaction and behavior, allowing retailers to enhance the shopping experience and foster customer loyalty. KPIs provide a competitive advantage by keeping retailers agile and responsive to market changes, regular tracking, and analysis of KPIs lead continuous improvement, mitigate risks, and support growth.",
    ],
  },
  {
    heading: "10 Important KPIs to track in retail",
    bulletPoints: [
      {
        listHeading: "1. Net Sales",
        listParagraph: [
          "Net sales represent the total revenue generated by a company from its primary business activities after deducting discounts and allowances.",
          "This metric is crucial for understanding a company’s financial performance as it provides a clear picture of the actual income derived from core operations, excluding any reductions from sales discounts, returns, or allowances.",
        ],
        formula: "Net Sales = Sales – Discounts – Allowances ",
      },
      {
        listHeading: "2. Gross Profit Margin",
        listParagraph: [
          "Gross profit margin is the percentage of revenue retained by a company after removing the cost of goods sold from the net sales revenue. This metric is crucial for businesses as it directly measures the efficiency of production and the profitability of core operations.",
          "A higher gross profit margin shows that a business is effectively controlling its product costs and can retain more revenue from each dollar of sales. A lower gross profit margin may show issues like high production costs, inadequate pricing strategies, or declining sales efficiency.",
        ],
        formula: "Gross Profit Margin = ((Net sales - Cost of goods sold) / Net sales) x 100  ",
      },
      {
        listHeading: "3. Net profit margin",
        listParagraph: [
          "Net profit margin measures the percentage of net profit generated from a company’s total revenue. This ratio is crucial for businesses as it provides a clear indication of their profitability, efficiency in managing expenses, and overall financial health.",
          "A higher margin shows that a company is effectively controlling its costs and maximizing its revenue, which can be attributed to efficient operations, strong pricing strategies, and prudent expense management. A lower margin shows potential issues such as high operational costs, pricing challenges that need to be addressed to improve profitability. ",
        ],
        formula: "Net Profit Margin = (Net profit / Sales) x 100  ",
      },
      {
        listHeading: "4. Customer satisfaction score",
        listParagraph: [
          "Customer satisfaction score is a metric used to measure the level of satisfaction that customers have with a company’s products or services. This metric is derived from customer surveys where customers rate their satisfaction on a scale, such as 1 to 5 or 1 to 10.",
          "High scores shows that customers are happy with their purchases, which leads to increased customer loyalty, repeat business, and positive word-of-mouth referrals. Low scores reveal areas where customers feel dissatisfied, guiding businesses to identify specific pain points and areas for improvement.",
        ],
        formula: "Customer Satisfaction Score = (Number of satisfied customers / Number of respondents)",
      },
      {
        listHeading: "5. Customer retention rate",
        listParagraph: [
          "Customer retention rate is the percentage of customers that a business retains over a specific period, typically expressed on a monthly, quarterly, or annual basis. This metric is crucial for assessing a company’s ability to keep customers coming back and maintain long-term relationships.",
          "A high retention rate shows the effectiveness of customer service, product quality, and overall customer experience. Low retention rate may show issues such as poor customer service, low product satisfaction, or intense competition. ",
        ],
        formula: "Customer Retention Rate = (Total customers at the end of the period / Total customers at the start of the period)",
      },
      {
        listHeading: "6. Customer acquisition cost",
        listParagraph: [
          "Customer acquisition cost represents the amount of money spent on acquiring each new customer, encompassing expenses related to marketing campaigns, advertising, sales commissions, and any other costs directly associated with attracting and converting leads into paying customers. This is a crucial metric that businesses use to evaluate the efficiency and profitability of their marketing and sales efforts. ",
          "A higher cost shows inefficiencies in marketing or sales processes, prompting businesses to reassess their strategies to reduce acquisition costs while maintaining or increasing customer acquisition rates.  A lower cost shows that a business is acquiring customers at a lower cost, which can lead to higher profitability and improved return on investment.",
        ],
        formula: "Customer Acquisition Cost = (Sales & Marketing expenses / Number of new customers acquired)",
      },
      {
        listHeading: "7. Net promoter score",
        listParagraph: [
          "Net promoter score measures customer loyalty and satisfaction. It is based on a single, straightforward question posed to customers: “How likely are you to recommend our product to a friend or colleague?” Customers respond on a scale from 0 to 10, with 0 meaning “not at all likely” and 10 meaning “extremely likely.” This metric categorizes respondents into three groups: Promoters (scores 9-10), Passives (scores 7-8), and Detractors (scores 0-6).",
          "A high score shows strong customer loyalty and satisfaction, which are critical for fostering repeat business and generating positive word-of-mouth referrals. A low score shows that there may be significant issues impacting customer satisfaction, such as poor service quality, product deficiencies, or negative customer experiences. ",
        ],
        formula: "Net Promoter Score = Percentage of promoters – Percentage of detractors",
        listImage: productPricing,
      },
      {
        listHeading: "8. Inventory turnover ratio",
        listParagraph: [
          "The inventory turnover ratio measures the efficiency which a company manages its inventory by comparing the cost of goods sold to the average inventory level. This ratio is crucial for understanding how effectively a business is converting its inventory into sales. ",
          "A high ratio shows that a company is selling its inventory quickly and efficiently, suggesting strong demand for its products and effective inventory management practices. Low ratio shows overstocking, slow-moving inventory, or weak sales, which can lead to increased storage costs, potential obsolescence, and reduced profitability. ",
        ],
        formula: "Inventory Turnover Ratio = Cost of goods sold / Average inventory",
      },
      {
        listHeading: "9. Average order value ",
        listParagraph: [
          "Average order value measures the average amount of money customers spend per transaction within a specific timeframe, often monthly, quarterly, or annually. This metric is crucial for understanding customer spending behavior and the overall health of a business’s sales performance. ",
          "A high value shows that customers are making larger purchases, which can be indicative of effective pricing strategies, successful upselling or cross-selling efforts, and strong customer engagement. A low value shows potential issues with pricing competitiveness, product relevance, or customer service quality that need to be addressed to maintain or improve customer satisfaction levels.",
        ],
        formula: "Average Order Value = Sales / Number of orders",
      },
      {
        listHeading: "10. Sell through rate ",
        listParagraph: [
          "Sell-through rate measures the percentage of inventory sold during a specific period relative to the total inventory available for sale. This metric is crucial for assessing a business’s efficiency in inventory management and product sales. ",
          "A high rate shows effective inventory management, suggesting that products are in demand and well-received by the market. A low rate may highlight issues such as overstocking, inadequate marketing, or misalignment with customer preferences. ",
        ],
        formula: "Sell Through Rate = (Total units sold / Beginning inventory) x 100",
      },
    ],
  },
];

const formHeading = "Get the complete list of Retail KPIs";

const Top10RetailKPIToTrack = () => {
  return <KpisInnerPage heading={top10RetailKpisHeading} content={top10RetailKpisContent} formHeading={formHeading} />;
};

export default Top10RetailKPIToTrack;
