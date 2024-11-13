import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("competitive-pricing-intelligence");
}

//Content Area
const successStoryHeading = "|Competitive pricing| intelligence";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Competitive pricing",
    paragraph:
      "Product pricing is a critical function for the automotive industry. With fierce competition and customers’ options, pricing intelligence is the key to profits. A minor change in the price can have a major impact on the bottom line. To respond to the changing market, regulations & competitor price, pricing team needed an immediate technology-driven approach. An agile method for responding to these price changes would be beneficial. This should also keep a close tab on margins and other business parameters. A cost-plus approach is used to arrive at the on-road price. Parameters like dealer margins, federal and state taxes & cess, transportation charges, insurance, discounts, and others add to the complexity of the problem. The analysis becomes further cumbersome when it involves many variables. They include location, fuel type, vehicle color, vehicle type, road taxes based on jurisdiction.",
  },
  {
    id: 2,
    subHeading: "Business concerns with pricing intelligence",
    paragraph:
      "The key concern of the business was that it could not respond to the changing market needs at speed. Adding a new tax component, changing in competitor’s price consumed a lot of works hours. This led to the Pricing team taking at least a month for the announcement of new prices.",
  },
  {
    id: 3,

    paragraph:
      "The usage of spreadsheets to calculate the price made the process slow. The increasing number of variant combinations made it even more unmanageable. Running various scenarios for different combinations of price points was not easy. With changing variables in run time to see the impact on price added to the complexity. This forced the client to peg the price to one jurisdiction. Thus, eliminating the differentiated pricing support to its customers. With increasing data and scenarios, spreadsheets failed to support. This led to a lot of re-work, inconsistencies, and delays. This was a sign of inefficiency and unproductive of the pricing team. The team wanted a solution that could help them to perform analysis. Send reports and insights to dealers right away. And announce the pricing amendments on their website, share with media, all in one go. Data automation aided by decision intelligence supported the team’s requirements on competitive pricing intelligence.",
  },
  {
    id: 4,
    subHeading: "Why pricing intelligence?",
    bulletPoints: [
      "Ability to respond to market quickly in publishing new prices.",
      "Supporting complex algorithms with various parameters like vehicle configurations & location.",
      "Running multiple pricing simulations on the fly.",
      "Saving data for past comparison, analysis and benchmark the prices.",
      "Effective and timely communication to dealers.",
    ],
  },
  {
    id: 5,
    subHeading: "Pricing intelligence using infoveave",
    paragraph:
      "By employing Infoveave, the client was able to measure the factors impacting pricing. Infoveave also provided an end-to-end solution to the problem at hand and much more. Infoveave’s module allowed to connect to sources of data. This helped to fetch all the information on prices, models, and dealers. This also includes competitor data to compare against their prices. The What-If Analysis module configured the pricing algorithms within. This includes over 40+ variables that determine the price.",
  },
  {
    id: 6,
    paragraph:
      "The user can run the scenarios within the What-If Analysis & Goal Seeking. Scenarios had different combinations of State, Model, Dealer, Vehicle Type, Fuel Type, Color. Infoveave also does a single-step goal seeking. By which the user can set an optimal goal price and work backward to arrive at the component prices.",
  },
  {
    id: 7,
    paragraph:
      "Once completed, the price that best fits the need gets stored back into the data source. This forms the new baseline for prices and all the simulations that follow. The Address Book feature of the Reporting module ensures on-time delivery of reports. This report that reaches all 200 + dealers is precise and with no information overlap.",
  },
  {
    id: 8,
    subHeading: "Competitor analysis gained with pricing intelligence",
    bulletPoints: [
      "Improved time to market:| Simulations for new launches were much lesser. As Infoveave ran simulations in minutes rather than days.",
      "Deeper insights:| Provided on how often prices changed. Also, the correlations to sales associated with price change and timing of the change.",
      "Increased coverage:| Earlier one state was the central point to determine the pricing. With Infoveave, it was possible to achieve differentiated pricing across jurisdictions.",
      "Improved market intelligence:| Perform peer group benchmarking & assess prices against segments and states. This helped in competitive pricing analysis across geographies.",
    ],
  },
];

const RetailersNeedUnifiedDataPlatform = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default RetailersNeedUnifiedDataPlatform;
