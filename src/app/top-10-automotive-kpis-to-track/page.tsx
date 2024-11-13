import manufacturingKpi from "@/assets/kpi-liabrary/top-10-kpis-for-manufacturers-to-track.webp";
import KpisInnerPage from "@/components/blocks/kpis/inner-page-layout/kpi-inner-page-design";
import { kpisContentType } from "@/components/blocks/kpis/inner-page-layout/kpis-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("top-10-automotive-kpis-to-track");
}

const top10AutomotiveKpisHeading = "|Automotive| KPIs to track";

const top10AutomotiveKpisContent: kpisContentType[] = [
  {
    paragraph: [
      "In the automotive industry, tracking key performance indicators (KPIs) is essential for optimizing business operations and improving customer satisfaction. Automotive KPIs provide critical insights into vehicle sales, market share, loan processing, after-sales support, service efficiency, and more. By analyzing these metrics, automotive businesses can assess their performance across sales, customer service, product innovation, and operational efficiency. These KPIs enable organizations to make data-driven decisions that refine sales strategies, enhance customer loyalty, and streamline after-sales services, ensuring consistent profitability and operational excellence.",
    ],
  },
  {
    heading: "Why are automotive KPIs important?",
    paragraph: [
      "Automotive KPIs are important because they provide measurable insights into key areas of the business, enabling organizations to monitor performance, identify inefficiencies, and make informed decisions. By tracking KPIs like vehicle sales, market share, service efficiency, and customer satisfaction, automotive companies can optimize operations, enhance customer experiences, and drive profitability. KPIs help businesses stay competitive by facilitating timely adjustments to sales strategies, improving after-sales support, and ensuring product innovation, all of which contribute to long-term growth and sustainability in the automotive industry.",
    ],
  },
  {
    heading: "10 Important KPIs to track in automotive",
    bulletPoints: [
      {
        listHeading: "1. Market Share",
        listParagraph: [
          "Market share is the percentage of an industry’s total sales that is earned by a particular company over a specified period. It helps businesses understand their position in the market relative to competitors and indicates how well they are performing in terms of capturing customer demand.",
          "A higher market share shows the company is outperforming competitors and successfully attracting more customers. A lower market shares shows a loss of competitive advantage or declining customer interest.",
        ],
        formula: "Market share = (Company vehicle sales / Industry vehicle sales) x 100",
      },
      {
        listHeading: "2. Sales Forecast Accuracy",
        listParagraph: [
          "Sales forecast accuracy is the percentage difference between actual sales and predicted sales, measuring the precision of sales predictions. This KPI helps businesses manage inventory, resources, and budgets more effectively by ensuring demand is accurately anticipated.",
          "A higher forecast accuracy shows that the company's predictions are closely aligned with actual sales, optimizing resource allocation. A lower forecast accuracy shows misalignment, leading to either overstocking or stockouts and inefficient resource management.",
        ],
        formula: "Sales Forecast Accuracy = (Actual sales - Forecasted sales) / Forecasted sales",
      },
      {
        listHeading: "3. Test Drive Conversion Rate",
        listParagraph: [
          "The test drive conversion rate is the percentage of test drives that result in a sale. This KPI highlights the effectiveness of the sales process and customer experience in converting potential buyers into actual customers.",
          "A higher conversion rate shows that the company’s sales efforts are persuasive, and customers are more likely to make purchases after a test drive. A lower conversion rate shows issues in the sales process or that the vehicles aren't meeting customer expectations during the test drive.",
        ],
        formula: "Test Drive Conversion Rate = (No. of test drives resulting in a sale / No. of test drives) x 100",
      },
      {
        listHeading: "4. Loan Approval Rate",
        listParagraph: [
          "Loan approval rate is the percentage of loan applications that are approved by financial institutions. It reflects the financial accessibility of the company's vehicles for customers and the strength of partnerships with lenders.",
          "A higher loan approval rate shows that customers find it easier to obtain financing, potentially driving more sales. A lower approval rate shows barriers in financing, reducing the pool of eligible buyers and slowing sales.",
        ],
        formula: "Loan Approval Rate = (No. of approved loans / Loan applications) x 100",
      },
      {
        listHeading: "5. Product Innovation Rate",
        listParagraph: [
          "Product innovation rate is the percentage of new products developed in relation to the total number of products offered by the company. This KPI measures a company's ability to innovate and meet changing customer demands, staying competitive in the market.",
          "A higher innovation rate shows that the company is actively developing new products, which may attract more customers and increase market share. A lower innovation rate shows stagnation in development, making it harder to keep up with competitors and shifting consumer preferences.",
        ],
        formula: "Product Innovation Rate = (No. of new products/ No. of existing products) x 100",
      },
      {
        listHeading: "6. Warranty Claims Rate",
        listParagraph: [
          "Warranty claims rate is the number of warranty claims made per unit sold, measuring the reliability and quality of a company’s products. It indicates product quality and the effectiveness of the manufacturing process, impacting customer satisfaction and retention.",
          "A higher warranty claims rate shows potential product quality issues, which may lead to higher costs and lower customer satisfaction. A lower warranty claims rate shows strong product quality and manufacturing efficiency, contributing to customer loyalty and cost savings.",
        ],
        formula: "Warranty Claims Rate = (No. of warranty claims / Units sold) x 100",
      },
      {
        listHeading: "7. Service Contract Renewal Rate",
        listParagraph: [
          "Service contract renewal rate is the percentage of customers who renew their service contracts after the initial term ends. It reflects customer satisfaction with after-sales service and the company's ability to retain customers for long-term profitability.",
          "A higher renewal rate shows that customers are satisfied with the service and are likely to continue doing business with the company. A lower renewal rate shows dissatisfaction with after-sales services, leading to customer churn and lost revenue.",
        ],
        formula: "Service Contract Renewal Rate = (No. of renewed service contracts / No. of expiring service contracts) x 100",
        listImage: manufacturingKpi,
      },
      {
        listHeading: "8. First Time Fix Rate",
        listParagraph: [
          "First time fix rate measures the percentage of service issues resolved during the first service visit. This KPI demonstrates the efficiency of the service team and the quality of service provided, directly impacting customer satisfaction.",
          "A higher first time fix rate shows that service teams are well-prepared and efficient, leading to improved customer satisfaction and reduced costs. A lower first time fix rate shows inefficiencies in service operations, potentially causing customer frustration and increasing operational costs.",
        ],
        formula: "First Time Fix Rate = (No. of issues resolved on first visit / No. of service requests) x 100",
      },
      {
        listHeading: "9. Service Efficiency Ratio",
        listParagraph: [
          "The service efficiency ratio evaluates the overall efficiency of the service department in handling service requests and completing tasks within a specified period. This KPI is crucial for businesses to assess their operational effectiveness in delivering services to customers.",
          "A higher service efficiency ratio shows that the department is completing tasks efficiently and meeting customer demands promptly. A lower ratio shows delays, inefficiencies, or bottlenecks in service operations.",
        ],
        formula: "Service Efficiency Ratio = (Service hours / Billable hours) x 100",
      },
      {
        listHeading: "10. Absorption Ratio",
        listParagraph: [
          "Absorption ratio is the percentage of fixed expenses that are covered by the profits from the service and parts departments. This KPI helps businesses evaluate how well the service department can sustain operational costs, improving overall profitability.",
          "A higher absorption ratio shows that the service department is generating enough profit to cover its fixed costs, ensuring operational stability. A lower absorption ratio shows that the service department may be struggling to cover its costs, which could lead to financial strain on the business.",
        ],
        formula: "Absorption Ratio = (Gross profit from service/ Fixed cost of the service department) x 100",
      },
    ],
  },
];

const formHeading = "Get the complete list of Automotive KPIs";

const Top10KPIForAutomotives = () => {
  return <KpisInnerPage heading={top10AutomotiveKpisHeading} content={top10AutomotiveKpisContent} formHeading={formHeading} />;
};

export default Top10KPIForAutomotives;
