import productPricing from "@/assets/blogs/Product-pricing.webp";
import KpisInnerPage from "@/components/blocks/kpis/inner-page-layout/kpi-inner-page-design";
import { kpisContentType } from "@/components/blocks/kpis/inner-page-layout/kpis-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("top-10-cold-call-kpis");
}

const top10ColdCallKpisHeading = "|Cold call| KPIs to track";

const top10ColdCallKpisContent: kpisContentType[] = [
  {
    paragraph: [
      "These KPIs cover various aspects of the cold calling process, from the number of calls made and connection rates to more nuanced metrics like voicemail response and follow-up success rates. By tracking these indicators, businesses can gain insights into the efficiency of their sales teams, understand customer engagement, and make informed decisions to improve conversion rates, reduce call abandonment, and ultimately drive revenue growth.",
    ],
  },
  {
    heading: "Why is cold call KPI important?",
    paragraph: [
      "Cold call KPIs are important as they provide valuable insights into the effectiveness of a company’s outbound sales efforts. By tracking these metrics, businesses can assess how well their sales teams are performing, identify areas for improvement, and optimize their strategies to increase conversion rates. Cold call KPIs help in understanding customer engagement, managing resources efficiently, and ensuring that sales efforts are aligned with business goals. They also enable companies to measure their cold calling activities’ return on investment (ROI), leading to better decision-making and ultimately driving revenue growth.",
    ],
  },
  {
    heading: "10 Important cold call KPIs to track",
    bulletPoints: [
      {
        listHeading: "1. Number of calls made",
        listParagraph: [
          "The total number of cold calls made by the sales team is a key metric that measures the volume of outreach efforts. This metric crucial for assessing the productivity of the sales team and ensuring that they are engaging in sufficient activity to generate leads and meet sales targets. By tracking the total number of cold calls, businesses can gauge whether their sales team is putting in the necessary effort to reach potential customers. This data also provides insights into the relationship between call volume and sales success, helping to optimize strategies for better performance.",
        ],
      },
      {
        listHeading: "2. Call connection rate",
        listParagraph: [
          "The percentage of cold calls that successfully connect with the intended recipient. This metric is crucial for evaluating the effectiveness of the sales team’s outreach efforts and the quality of contact lists.",
          "A high call connection rate shows that the sales team is effectively reaching prospects, which suggests that the contact lists are accurate, and the timing of the calls is well-planned.",
          "A low connection rate shows wasted effort, lower productivity, and missed opportunities, making it essential to analyze and improve the factors affecting it.",
        ],
        formula: "Call Connection Rate = (Connected calls / Number of calls made) x 100",
      },
      {
        listHeading: "3. Average call duration",
        listParagraph: [
          "The amount of time spent on each cold call by the sales team. This metric provides insights into the quality and depth of the conversations with potential customers.",
          "A longer call duration shows more engaging and meaningful interactions, suggesting that the sales team is effectively communicating the value proposition and addressing customer needs.",
          "A very short call shows a lack of engagement or ineffective pitching, businesses can assess the effectiveness of their sales approach, refine their pitch strategies, and improve overall customer engagement during cold calls.",
        ],
        formula: "Average Call Duration = Call time / Number of calls made",
      },
      {
        listHeading: "4. Voicemail drop rate",
        listParagraph: [
          "The percentage of total calls that result in leaving a voicemail message after the call goes unanswered. This metric is crucial for understanding how often sales representatives are unable to reach prospects directly and instead must rely on voicemail to convey their message.",
          "A high voicemail drop rate shows that a significant portion of cold calls are going to voicemail instead of being answered by prospects.",
          "A low voicemail drop rate shows that most calls are being answered directly, which is generally positive, as it means more opportunities for live interactions.",
        ],
        formula: "Voicemail Drop Rate = (Voicemails dropped / Number of calls made) x 100 ",
      },
      {
        listHeading: "5. Follow-up call rate",
        listParagraph: [
          "The percentage of initial cold calls that require a follow-up call is an important metric in assessing the effectiveness of the initial outreach efforts.",
          "A higher follow-up call rate shows that many prospects did not convert or provide a decisive response during the first call, necessitating further engagement.",
          "A lower follow-up call rate shows that the initial call is more effective in achieving its objectives, whether that’s securing a meeting, generating interest, or closing a deal.",
        ],
        formula: "Follow-Up Call Rate = (Follow-up calls / Number of calls made) x 100",
      },
      {
        listHeading: "6. Cost per lead",
        listParagraph: [
          "The average cost incurred to generate a single lead from cold calls is a critical metric for evaluating the cost-efficiency of a sales team’s outreach efforts.",
          "A high cost per lead shows that cold calling efforts may not be as effective, possibly due to low conversion rates, inefficient targeting, or excessive time spent on calls that do not yield results.",
          "A low cost per lead shows that cold calling is an efficient method of generating leads, with effective strategies and well-targeted outreach efforts that convert prospects into leads at a lower expense.",
        ],
        formula: "Cost Per Lead = Cold call cost / Leads generated",
      },
      {
        listHeading: "7. Revenue per call",
        listParagraph: [
          "The average revenue generated from each cold call is a key metric for assessing the financial return on cold calling efforts.",
          "A high average revenue per call shows that the sales strategies employed during cold calls are effective, leading to successful conversions and higher sales.",
          "A low average revenue per cold call could indicate inefficiencies in the cold calling process.",
        ],
        formula: "Revenue Per Call = Revenue from calls / Number of calls made",
        listImage: productPricing,
      },
      {
        listHeading: "8. Call-to-deal ratio",
        listParagraph: [
          "The number of cold calls required to close one deal is a crucial metric that reflects the efficiency of the cold-calling process in converting outreach efforts into actual sales.",
          "A high number of cold calls per deal shows that it takes a significant amount of effort and time to secure a sale, which can signal inefficiencies in the sales strategy. High call-to-deal ratios can lead to longer sales cycles and increased costs.",
          "A low number of cold calls per deal shows a highly efficient sales process where fewer calls are needed to close a sale. A low call-to-deal ratio is desirable as it shortens the sales cycle and reduces costs.",
        ],
        formula: "Call-To-Ratio = Number of calls made / Deals closed",
      },
      {
        listHeading: "9. Referral rate",
        listParagraph: [
          "The percentage of cold calls that result in a referral to another potential lead or decision-maker is an important metric that gauges the effectiveness of a sales team’s outreach in generating new opportunities.",
          "A high referral rate shows that the sales team is not only connecting with the right prospects but also building enough trust and rapport during the initial call to be recommended to others.",
          "A low referral rate shows that the cold calls are not resonating with prospects, possibly due to issues like lack of relevance, weak value propositions, or ineffective communication.",
        ],
        formula: "Referral Rate = (Referrals generated / Number of calls made) x 100",
      },
      {
        listHeading: "10. Number of calls rang but no response",
        listParagraph: [
          "The total number of cold calls that rang but were not answered by the prospect, resulting in either a voicemail or an abandoned call, is a crucial metric for understanding the effectiveness of a sales outreach strategy.",
          "A high number of unanswered calls shows that calls are being made at times when prospects are less likely to be available or that the contact list needs refinement to target more responsive leads.",
          "A lower number of unanswered calls show that the sales team is effectively reaching prospects at the right times or using better-targeted lists.",
        ],
      },
    ],
  },
];

const formHeading = "Get the complete list of Cold Call KPIs";

const Top10KPIForColdCall = () => {
  return <KpisInnerPage heading={top10ColdCallKpisHeading} content={top10ColdCallKpisContent} formHeading={formHeading} />;
};

export default Top10KPIForColdCall;
