import energyKpi from "@/assets/kpi-liabrary/top-10-kpis-for-energy-retailers-to-track.webp";
import KpisInnerPage from "@/components/blocks/kpis/inner-page-layout/kpi-inner-page-design";
import { kpisContentType } from "@/components/blocks/kpis/inner-page-layout/kpis-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("top-10-kpis-for-energy-retailers-to-track");
}

const top10EnergyKpisHeading = "KPIs for |Energy Retailers| to track";

const top10EnergyKpisContent: kpisContentType[] = [
  {
    paragraph: [
      "In the dynamic retail energy sector, understanding and leveraging key performance indicators (KPIs) is crucial for success. These KPIs provide measurable insights into how effectively a retail energy business is achieving its objectives, covering aspects such as customer distribution and contract types, smart meter penetration, energy consumption, financial performance, and customer service quality. By analysing these metrics, retail energy providers can make informed decisions to drive growth, increase customer experience, and optimize operational efficiency.",
    ],
  },
  {
    heading: "Why are retail energy KPIs important?",
    paragraph: [
      "Retail energy KPIs are important for measuring and enhancing the performance of an retail energy business. These metrics provide clear, quantifiable insights into various aspects such as operational efficiency, financial health, customer satisfaction, and regulatory compliance. By tracking and analysing KPIs, retail energy providers can make data-driven decisions that optimize resource allocation.",
      "KPIs help retailers understand customer needs and preferences, enabling tailored services and improved retention. Consistently monitoring and improving on KPIs, retail energy providers can gain a competitive edge.",
    ],
  },
  {
    heading: "10 Important KPIs to track in retail energy",
    bulletPoints: [
      {
        listHeading: "1. Percentage Of Customers On Standard Retail Contracts",
        listParagraph: [
          "The proportion of customers who have opted for conventional, non-customized agreements or packages offered by the business is a crucial metric for retail energy providers. This KPI helps the business gauge the popularity and attractiveness of its standard offerings.",
          "High percentages of standard packages show that the offerings align with customer needs and preferences, indicating effective initial product development and market positioning.",
          "Low percentages of standard packages show need for re-evaluate its standard offerings and explore enhancements or alternatives that could appeal more broadly.",
        ],
        formula: "Percentage Of Customers On Standard Retail Contracts = (Customers on standard retail contracts / Total customers) x 100",
      },
      {
        listHeading: "2. Percentage Of Customers Switching Contracts",
        listParagraph: [
          "The proportion of customers who have transitioned from one type of contract or agreement to another within a specified period is a crucial metric that offers deep insights into customer behaviour, preferences, and satisfaction levels with existing offerings.",
          "A high switching percentage shows that customers are actively seeking better deals, more flexible terms, or enhanced services, suggesting that the current offerings may not fully meet their needs or expectations.",
        ],
        formula: "Percentage Of Customers Switching Contracts =(Customers who moved from standard to market retail contracts / Total customers) x 100",
      },
      {
        listHeading: "3. Debt Repayment Rate",
        listParagraph: [
          "The percentage of debts that have been repaid within a specified period is a critical metric for retail energy providers, reflecting the effectiveness of their debt collection efforts and the financial health of their customers.",
          "A high repayment rate shows that customers are generally able to meet their financial obligations, suggesting that the retailer’s payment plans, and debt recovery strategies are effective.",
          "A low repayment rate shows challenges in the debt collection process, or financial difficulties faced by customers. This can lead to increased bad debt write-offs and impact the retailer’s revenue and profitability.",
        ],
        formula: "Debt Repayment Rate = (Amount of debt repaid by customers/ Total amount of debt) x 100",
      },
      {
        listHeading: "4. Customer Disconnection Rate",
        listParagraph: [
          "The percentage of customers whose service has been disconnected due to non-payment or other reasons within a specific period is a crucial metric for retail energy providers. This KPI provides insight into the effectiveness of billing and collection processes, highlighting areas where improvements may be necessary to reduce disconnections.",
          "A high disconnection rate show issues with the billing system, such as inaccuracies or inefficiencies, which can lead to customer dissatisfaction and financial challenges.",
          "A low disconnection rate shows that the billing and collection processes are functioning well, and that customers are generally able to meet their payment obligations, indicating higher levels of customer satisfaction and financial stability.",
        ],
        formula: "Customer Disconnection Rate = (Number of customers disconnected/ Total customers) x 100",
      },
      {
        listHeading: "5. Customer Reconnection Rate",
        listParagraph: [
          "The percentage of customers whose service has been reinstated after being disconnected is a critical metric that reflects the effectiveness of an retail energy providers reconnection processes and the success of its efforts to address customer issues and restore service.",
          "A high reconnection rate shows that the company is efficient in resolving the issues that led to disconnection, such as payment difficulties or technical problems, and is proactive in helping customers regain access to their energy services.",
          "A low reconnection rate may suggest inefficiencies in the reconnection process, potential barriers for customers to get reconnected, or unresolved customer issues.",
        ],
        formula: "Customer Reconnection Rate = (Number of customers reconnected/ Number of customers disconnected) x 100",
      },
      {
        listHeading: "6. Best Offer Notification Rate",
        listParagraph: [
          "The percentage of customers who have been informed that they are not currently on their retailer’s best available offer is a significant metric for retail energy providers, reflecting their commitment to transparency and customer care.",
          "A high percentage shows proactive communication efforts by the retailer, demonstrating a dedication to helping customers save money and maximize the value of their service.",
          "A low percentage shows that many customers are left unaware of potential savings or benefits, potentially leading to dissatisfaction and a higher likelihood of switching to competitors.",
        ],
        formula: "Best Offer Notification Rate = (Number of customers receiving information on the best offer/ Total customers) x 100",
      },
      {
        listHeading: "7. Deferred Payment Rate",
        listParagraph: [
          "The percentage of customers who chose to delay paying their bills within a specific period is an important metric for retail energy providers, providing insight into the financial strain experienced by their customer base and the effectiveness of available payment deferral options.",
          "A high percentage of deferred payments shows that a significant number of customers are experiencing financial difficulties, suggesting that the economic environment or individual circumstances are impacting their ability to pay on time.",
          "A low percentage of deferred payments shows that most customers can meet their payment obligations, suggesting a relatively stable and financially healthy customer base.",
        ],
        formula: "Deferred Payment Rate = (Number of customers made deferred payments/ Total customers) x 100",
        listImage: energyKpi,
      },
      {
        listHeading: "8. Average Hardship Program Customers Transferred",
        listParagraph: [
          "The average number of customers within the hardship program who have transferred from one retail contract to another over a specified period provides valuable insight into how frequently these customers change their contract terms or arrangements to manage their financial difficulties.",
          "A higher rate shows that customers are actively seeking better-suited contract terms to improve their financial burdens, suggesting that the retailer offers flexible and supportive options to assist these customers.",
          "A lower rate shows that hardship customers are less likely to switch contracts, which could either indicate potential barriers to accessing better options.",
        ],
        formula:
          "Average Hardship Program Customers Transferred = Number of hardship program customers transferred/ Total number of hardship program customers",
      },
      {
        listHeading: "9. Average Connection Setup Time",
        listParagraph: [
          "The average duration taken by a retail energy company to set up new connections for customers is a crucial KPI that sheds light on the efficiency and effectiveness of the connection setup process.",
          "A shorter setup time typically shows a streamlined, well-coordinated process, reflecting positively on the company’s operational efficiency and its ability to promptly meet customer needs.",
          "A longer setup duration shows underlying inefficiencies, such as procedural bottlenecks, insufficient staffing, or technical challenges, which can lead to customer frustration and dissatisfaction.",
        ],
        formula: "Average Connection Setup Time = Time taken to set up connections/ Connection set ups",
      },
      {
        listHeading: "10. Energy Per Customer",
        listParagraph: [
          "The average amount of energy consumed by each customer within a specific period is a vital metric that offers deep insights into the energy consumption behaviour of individual customers or households. By analysing this KPI, retail energy providers can gain a clearer understanding of typical usage patterns, which is essential for anticipating demand fluctuations and ensuring a reliable supply. For instance, customers with higher-than-average consumption might benefit from energy efficiency programs, tailored advice on reducing usage, or specialized high-usage plans that offer better rates. Customers with lower consumption might be more interested in cost-saving plans or incentives for using renewable energy sources.",
        ],
        formula: "Energy Per Customer = Consumption/ Total customers",
      },
    ],
  },
];

const formHeading = "Get the complete list of Energy Retailers KPIs";

const Top10KPIForEnergyRetail = () => {
  return <KpisInnerPage heading={top10EnergyKpisHeading} content={top10EnergyKpisContent} formHeading={formHeading} />;
};

export default Top10KPIForEnergyRetail;
