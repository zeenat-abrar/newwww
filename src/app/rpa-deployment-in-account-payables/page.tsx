import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("rpa-deployment-in-account-payables");
}

import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";

//Content Area
const successStoryHeading = "|Monitoring risks| and compliance";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Streamlining accounts payable with RPA",
    paragraph:
      "The company is a house-hold name in the retail energy sector in Australia. They serve over 700,000 customer accounts across the country, solidifying their position as a leading energy retailer. They had implemented a discount program to incentivize on-time customer payments, crucial for maintaining cash flow. However, the system wasn’t functioning as intended. Infoveave was approached by the company to help them implement the incentive system properly. This success story explores how Infoveave leveraged RPA technology to overcome these challenges and achieve efficient, accurate discount application.",
  },
  {
    id: 2,
    subHeading: "The problem faced",
    paragraph:
      "To incentivize timely bill payments the company offered discounts for payments made by the due date. The discount offers for payments made by the ‘due date’ went a long way towards retaining customers.",
  },
  {
    id: 3,

    paragraph:
      "However, customers who cleared the invoice on time with the discount percentage availed, were still seeing the discounted amount as balance due.",
  },
  {
    id: 4,
    paragraph:
      "At times, discounts were not being applied in the system due to longer processing times due to holidays and unresponsive payment gateways, which were taking the invoice payment “past the due date”. ",
  },
  {
    id: 5,
    paragraph:
      "This discrepancy led to the back-office team in the organization manually verifying the accounts to ascertain whether or not the customer was eligible for the discount offer.",
  },
  {
    id: 6,
    paragraph:
      "This verification process burned several man-hours that could have otherwise been put to better use.The discrepancies that could not be verified led to customer dissatisfaction and eventual customer churn and loss in revenue.",
  },
  {
    id: 7,

    paragraph:
      "Here’s where robotic process automation (RPA) entered the picture. RPA utilizes software “bots” to automate repetitive tasks, freeing up human employees for more strategic work. Infoveave implemented RPA to do the following – ",
    bulletPoints: [
      "Identify eligible customers:| The bots scanned through customer accounts to identify those who had made payments with the discount applied to the invoice. This automated process eliminated the risk of human error in manually identifying eligible customers.",
      "Filter out late payments:| The bots filtered out any customers whose payments were received after the designated “due date” to ensure they weren’t mistakenly flagged for a discount issue. This function streamlined the process, saving time and resources compared to manual filtering.",
      "Calculate discrepancies :| For qualifying payments, the bots compared the invoice ID with the payment received date. This allowed it to calculate any discrepancies between the expected due date and the actual payment receipt. Traditionally, this verification would have required manual effort by an employee. Automating this task significantly reduced the workload on the back-office team.",
      "Generate customer alerts:| Based on the calculated discrepancies, the bot created a list of customers whose payments deviated from the expected timeframe. It then automatically triggered customer alerts reminding them of any outstanding balance due. This ensured timely communication with customers, preventing confusion and potential frustration.",
    ],
  },
  {
    id: 8,
    paragraph:
      "By partnering with Infoveave, the company transformed its discount program, ensuring seamless and accurate application of discounts for timely bill payments. The implementation of RPA allowed the company to automate the verification and application of discounts, effectively eliminating manual errors and reducing the workload on their back-office team. This led to significant improvements in operational efficiency and customer satisfaction.",
  },
  {
    id: 9,
    formula:
      "Ready to see how Infoveave can revolutionize your business operations? Book a demo today and discover the benefits of our cutting-edge RPA solutions",
  },
];

const RetailersNeedUnifiedDataPlatform = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default RetailersNeedUnifiedDataPlatform;
