import { Metadata } from "next";

import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata(): Promise<Metadata> {
  return generatemetadata("australian-utility-provider-uses-rpa-to-improve-billing-efficiency");
}

//Content Area
const successStoryHeading = "Australian utility provider uses RPA to improve |billing efficiency|";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Utility billing efficiency with RPA",
    paragraph:
      " This client of Infoveave is among the fastest-growing utility provider in Australia. A growing customer base and new connections bring in the need to effectively manage and monitor customer information, usage, and billing details. With new customers acquired or sites getting activated with supplies, there can be accounts not having customer information on it. This would mean that there are supply connections to the site but no named account holder leading to billing reconciliation issues and revenue leakage.",
  },
  {
    id: 2,
    subHeading: "Problem/ challenges faced",
    paragraph: "An occupant account refers to those accounts that are supplied with gas and electricity without a customer name present. ",
  },
  {
    id: 3,
    paragraph:
      "Such an account arises when the name of the person occupying the site is not known to the utility’s provider. This typically arises when there is a new homeowner for a particular unit where the supply connection is already present. In such cases, the service provider would not know the name to raise invoices apart from the supply of electricity and gas. ",
  },
  {
    id: 4,
    paragraph:
      "To verify who is living at the site, the company needs to undertake several checks to verify the account and ensure that there is continuity of supply.  If the company is unable to confirm the same, it will go ahead with the disconnection of the supply.  Various operational steps including sending out letters, physical verification, and calls by the call center  to confirm billing details for ensuring customer retention.  ",
  },
  {
    id: 5,
    paragraph:
      "The process of confirming the occupier and disconnection in case of inability to trace the occupier is tedious and long.  The manual process of verification, while effective, poses an additional cost to the company in terms of continuity of supply and servicing such accounts.",
  },
  {
    id: 6,
    subHeading: "Solution offered by Infoveave",
    paragraph:
      "The process illustrated above is highly tedious and is long drawn. At times, the supply to the site continues and hence unpaid invoices are mounting and no revenue coming in, something that is clearly a big cost to the company. Without proper intimation and timely reach out to the occupier, the company is providing supply to unoccupied accounts and loosing revenue. ",
  },
  {
    id: 7,
    paragraph:
      "Another challenge that presents itself is the retention of customers. While several service providers do address invoices to ‘Occupants’, a customer would feel more compelled to continue should his/her name be used. ",
  },
  {
    id: 8,
    paragraph:
      "While sending out letters to the address on the account, the company also must ensure prior notification is given as per the AEMO guidelines. This ensures that no incorrect disconnection orders are being sent out.  Sufficient time must be given to the occupier to respond to the letter and claim the account supplying a name and other details as asked.",
  },
  {
    id: 9,
    paragraph: "To bring down the turnaround time and reduce the workload, Infoveave built out an RPA to address the need. ",
  },
  {
    id: 10,
    subHeading: "Using Infoveave RPA BOT",
    bulletPoints: [
      "The BOT extracts rom the CRM access the list of accounts that are not tagged with a named account holder. AN RPA (Robotic Process Automation) bot is trained to weed out the homeowner’s addresses. This process helps create a list of homes that are either unoccupied or have new owners.",
      "The bot scans through the list created and proceeds to send out an LOI (Letter of Intent) to all the homes titled ‘Occupant’. If there is no response to the notification, the bot proceeds to send out the DOL (Disconnection Occupant Letter) in a few days.",
      "The list continues to get smaller, based on the responses received. A final DSO (Disconnection Service Order) notification is sent to those homes that have not communicated with the company.",
      "The process helped the service provider plug revenue leakage by weeding out unoccupied while retaining existing customers.",
    ],
  },
  {
    id: 11,
    subHeading: "Why use RPA",
    bulletPoints: [
      "Double down on the time spent executing manual tasks",
      "Save costs and capital on manpower otherwise deployed on rule-based tasks",
      "Running multiple bots and executing multiple tasks at once",
      "Effective and timely completion of tasks",
    ],
  },
  {
    id: 12,
    subHeading: "Result and outcomes",
    bulletPoints: [
      "The Infoveave RPA bot helped the company saving around  $4.6 Million in revenue by helping to disconnect supply to unoccupied accounts .",
      "36.5K accounts were found to be unoccupied and hence disconnected which lead to a considerable saving.",
      "50K accounts were rectified with proper information, lead to better customer reach out and engagement.",
      "160K letters were automated and sent out this process ensuring deliverability on time.",
    ],
  },
];

const AustralianEnergyRetailerEnhancesRevenueAssurance = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default AustralianEnergyRetailerEnhancesRevenueAssurance;
