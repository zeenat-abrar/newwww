import digitalMarketing from "@/assets/kpi-liabrary/top-10-digital-marketing-kpis.webp";
import KpisInnerPage from "@/components/blocks/kpis/inner-page-layout/kpi-inner-page-design";

import { kpisContentType } from "@/components/blocks/kpis/inner-page-layout/kpis-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("top-10-digital-marketing-kpis");
}

const top10DigitalMarketingKpisHeading = "|Digital marketing| KPIs to track";

const top10DigitalMarketingKpisContent: kpisContentType[] = [
  {
    paragraph: [
      "Digital marketing key performance indicators (KPIs) are essential metrics used to evaluate the effectiveness and efficiency of various online marketing activities. These KPIs help businesses track and measure their performance across different digital channels, such as social media, email, search engines, and websites. By monitoring metrics like cost-per-click, conversion rate, return on ad spend, and customer acquisition cost, organizations can gain insights into the success of their marketing campaigns, optimize their strategies, and make data-driven decisions to improve overall marketing outcomes. Effective use of digital marketing KPIs enables businesses to understand customer behaviour, enhance engagement, and drive growth.",
    ],
  },
  {
    heading: "Why is Digital marketing KPI important?",
    paragraph: [
      "KPIs for digital marketing are essential since they offer quantifiable information on how successful online marketing campaigns are. By tracking these metrics, businesses can evaluate campaign performance, optimize strategies, and understand customer behaviour, allowing for more targeted and effective marketing. KPIs also help allocate resources efficiently, ensuring optimal use of marketing budgets. They facilitate setting and achieving goals by providing clear objectives and tracking progress.",
      " These KPIs improve decision-making by offering data-driven insights and measuring ROI to assess the financial impact of marketing efforts and enhance customer engagement and drive continuous improvement.",
    ],
  },
  {
    heading: "10 Important digital marketing KPIs to track",
    bulletPoints: [
      {
        listHeading: "1. Cost-per-click",
        listParagraph: [
          "The amount that an advertiser pays each time a user clicks on an advertisement is known as cost-per-click. This metric helps businesses evaluate the cost-effectiveness of their advertising campaigns, as it directly correlates with the efficiency of their ad spend.",
          "CPC allows businesses to optimize their campaigns by focusing on ads that yield higher click-through rates, ultimately improving the return on investment (ROI). Tracking and analyzing CPC is essential for making data-driven decisions and achieving better advertising outcomes.",
        ],
        formula: "Cost-Per-Click = Advertisement cost / Number of clicks",
      },
      {
        listHeading: "2. Click-through rate",
        listParagraph: [
          "The Click-Through Rate (CTR) measures the effectiveness of an ad or link by calculating the percentage of viewers who click on it. This metric is crucial for understanding how well an ad captures the audience’s attention and drives engagement.",
          "A high CTR shows that the ad is relevant and compelling to the target audience, suggesting that the messaging, creative, or placement is well-aligned with their interests.",
          "A low CTR show that the ad is not resonating with viewers, possibly due to unappealing visuals, unclear messaging, or poor targeting. ",
        ],
        formula: "Click-Through Rate = (Number of clicks / Number of impressions) x 100",
      },
      {
        listHeading: "3. Cost per lead",
        listParagraph: [
          "The Cost per Lead (CPL) represents the amount spent on marketing or advertising to acquire a single lead. This metric is essential for businesses to evaluate the efficiency and effectiveness of their lead-generation campaigns.",
          "A low CPL shows that the marketing campaigns are successfully generating leads at a lower cost, suggesting efficient use of marketing resources and effective targeting strategies.",
          "A high CPL shows that the current marketing efforts are expensive relative to the number of leads generated.",
        ],
        formula: "Cost Per Lead = Advertisement cost / Number of acquired leads",
      },
      {
        listHeading: "4. Cost per mille",
        listParagraph: [
          "CPM, also known as Cost Per Thousand Impressions, measures the cost incurred by an advertiser to reach one thousand impressions or views of an advertisement. This metric is crucial for businesses to evaluate the cost-effectiveness of their advertising campaigns in terms of exposure and brand visibility.",
          "A low CPM shows that the advertising campaign is achieving a broad reach at a lower cost, which is advantageous for brand awareness and exposure.",
          "A high CPM shows that inefficiencies in the campaign or that the chosen ad placements are more expensive.",
        ],
        formula: "Cost Per Mille = Cost of campaign / Number of impressions x 1000",
      },
      {
        listHeading: "5. Open rate",
        listParagraph: [
          "The percentage of receivers who open an email out of all those delivered is known as the open rate. This metric shows the effectiveness of email subject lines and the initial interest of recipients, helping businesses optimize their email campaigns for higher engagement and better communication with their audience.",
          "A high open rate shows that the subject line and the sender’s name are compelling enough to prompt recipients to open the email.",
          "A low open rate shows that the subject line is not resonating with recipients, the timing of the email may be suboptimal, or the sender’s reputation could be affecting the campaign’s performance.",
        ],
        formula: "Open Rate = (Number of emails opened / Number of emails delivered) x 100",
      },
      {
        listHeading: "6. Signup rate",
        listParagraph: [
          "The signup rate is the percentage of visitors who complete a signup process, such as registering for a service or subscribing to a newsletter, out of the total number of visitors who were exposed to the signup opportunity. This metric provides valuable insights into the effectiveness of a website or marketing campaign in converting casual visitors into committed leads or subscribers.",
          "A high signup rate shows that the signup process is engaging and compelling, and that the value proposition of the service or offer is clear and attractive to visitors.",
          "A low signup rate shows point to potential issues with the signup process, such as a complicated form, a lack of perceived value, or a poorly executed call-to-action.",
        ],
        formula: "Signup Rate = (Number of signups / Visits) x 100",
      },
      {
        listHeading: "7. Bounce rate",
        listParagraph: [
          "The bounce rate is the percentage of visitors who leave a website after viewing only one page, without navigating to additional pages or engaging further with the site. This metric provides valuable insights into the effectiveness of landing pages and the overall user engagement with the website.",
          "A high bounce rate shows that visitors are not finding the content or experience on the landing page compelling or relevant enough to explore further.",
          "A low bounce rate shows that visitors are engaging with the content and are motivated to explore additional pages or offers on the site.",
        ],
        formula: "Bounce Rate = (Single page visits / Visits) x 100",
        listImage: digitalMarketing,
      },
      {
        listHeading: "8. Average session duration",
        listParagraph: [
          "The average length of time visitors spend on a website in a single visit is measured by the average session duration. This measure is essential for comprehending user involvement and assessing how well the site’s content and user interface work.",
          "A longer average session duration shows that visitors are finding the website’s content engaging, valuable, or interesting, leading them to spend more time exploring various pages and features.",
          "A shorter average session duration shows issues such as irrelevant or unengaging content, difficult navigation, or a lack of compelling reasons for users to stay on the site.",
        ],
        formula: "Average Session Duration = Time on site / Number of sessions",
      },
      {
        listHeading: "9. Cost per action",
        listParagraph: [
          "The cost associated with each completed action or conversion, such as a purchase, sign-up, or download, is known as Cost Per Action (CPA). This metric evaluates the efficiency of marketing expenditures by measuring how much is spent to achieve a specific outcome or conversion.",
          "A lower CPA shows that the campaign is cost-effective and efficiently driving conversions.",
          "A higher CPA shows that the marketing strategy needs adjustment to reduce costs and improve performance.",
        ],
        formula: "Cost Per Action = Advertisement cost / Number of actions completed",
      },
      {
        listHeading: "10. Organic traffic",
        listParagraph: [
          "The percentage of visitors who arrive at a website through unpaid search engine results, often referred to as organic traffic, measures the effectiveness of a site’s search engine optimization (SEO) efforts and the relevance of its content to search queries.",
          "Users that discover a website through search engines like Google, Bing, or Yahoo who are not influenced by sponsored adverts are referred to as organic traffic. This metric is crucial for assessing how well a website’s content and structure align with search engine algorithms and user search intent.",
          "A high volume of organic traffic shows that the website is effectively optimized for relevant keywords and phrases, allowing it to rank higher in search engine results pages.",
        ],
      },
    ],
  },
];

const formHeading = "Get the complete list of Digital Marketing KPIs";

const Top10KPIForColdCall = () => {
  return <KpisInnerPage heading={top10DigitalMarketingKpisHeading} content={top10DigitalMarketingKpisContent} formHeading={formHeading} />;
};

export default Top10KPIForColdCall;
