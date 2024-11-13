import BlogsInnerPage from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-design";
import { BlogContentType } from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("why-to-overcome-the-six-big-oee-losses");
}

//Content Area
const blogHeading = "Why keep your |OEE loss factors| as low as possible?";

const blogContent: BlogContentType[] = [
  {
    id: 1,
    heading: "Conquer OEE losses for better profits",
    paragraph:
      "Wastage and inefficiency of any kind results in losses and impacts on business revenue. Manufacturers need to identify the pitfalls in their production to ensure quality output. If left unresolved, the six OEE losses increase liability risk and missed deadlines. Overcoming the OEE pain points presents many benefits for businesses. We have listed some of them below.",
  },
  {
    id: 2,
    list: ["Improved ROI"],
    paragraph:
      "Industrial technology is expensive. Manufacturing plants make heavy financing to bring in the best machinery. Now, if that machine breaks down often or isn’t taken care of, it becomes a dent on your investment. Data automation enables users to identify recurring problems in the equipment’s health. OEE calculations help in comparing performances over time whenever new equipment is added. Businesses can resolve issues immediately, with the machine running to their greatest capacity. At the end of the day, manufacturers can make the most of their investment.",
  },
  {
    id: 3,
    list: ["Staying relevant to evolving trends"],
    paragraph:
      "The manufacturing industry is a sphere of continuous innovation. Additionally, it is a highly competitive space. Consumer preferences and market prices are always changing. Now, if your machinery fails, you are not able to meet your consumer’s needs. Along with your revenue, customer loyalty also takes a hit. Moreover, you pose a risk of losing out on new prospects to competitors.",
  },
  {
    id: 4,
    paragraph:
      "Businesses need to know which of the six big OEE losses is impacting their bottom line. An OEE calculation aims to highlight the areas that need improvement. It helps manufacturers streamline their production better and at reduced costs. Production units can improve the product quality due to increased efficiency. As a result, businesses deliver value to consumers, and that too at affordable rates.",
  },
  {
    id: 5,
    list: ["Reduced maintenance costs"],
    paragraph:
      "As mentioned above, it is the aim of any business to get positive returns from their assets. OEE enables manufacturers to understand the working of a machinery in greater detail. Users can now compare equipment performance over longer durations. It becomes easier for them to identify underlying patterns. In this way, they can predict future events better. With preventive maintenance, businesses spot issues at the earliest for instant redressal. With OEE, manufacturers can proactively plan maintenance strategies instead of waiting for failures. Since minute repairs are not heavy on the wallet, they reduce the TCO by considerable margins.",
  },
  {
    id: 6,
    list: ["Bringing idling stops to a minimum"],
    paragraph:
      "Idling and small stops can be a drag. Regular idling can result in a huge loss of time. Moreover, the machine takes time to start every time it shuts down. Manufacturers often ignore these events of idling to focus on other matters. But this ignorance often results in bigger problems in the future.",
  },
  {
    id: 7,
    paragraph:
      "Data automation enables manufacturers to collect production data at every step. Plus, OEE dashboards help visualize the manufacturing journey for enhanced transparency. Operators get a clearer view into the stoppages and pick out patterns for recurring events. Equipment that faces constant problems can be treated immediately to prevent failures. In this manner, manufacturers can anticipate potential failures. The machinery is always running to the greatest capacity for an uninterrupted supply chain flow.",
  },
  {
    id: 8,
    list: ["Unlocking continuous improvement"],
    paragraph:
      "The key to continuous improvement is not only maximizing efficiency. But it is also about knowing your hidden losses. The six big OEE losses often play spoilsport for businesses in achieving higher profits. Knowing your losses is the first step towards mitigating manufacturing blockages. Your equipment might not be performing to its greatest capacity. With OEE intelligence, you can find out why.",
  },
  {
    id: 9,
    paragraph:
      "End-to-end data automation collects equipment information at every step. This includes information on rejected parts or the downtime period. Thus, companies are able to detect business roadblocks with greater accuracy. Be it production capacity, downtime, sudden stops, or availability. In this way, manufacturers can make the invisible loss visible.",
  },
  {
    id: 10,
    paragraph:
      "Moreover, the insights enable businesses to get a better grip on understanding the recurring issues. Manufacturers can leverage this information to train their workers better for continuous improvement.",
  },
  {
    id: 11,
    heading: "Conclusion",
    paragraph:
      "A new era of intelligent manufacturing is here. Real-time data must be used by manufacturers to monitor equipment health over time. Unneeded maintenance expenses can be expensive. You must have the ability to maximize your current technical investment. You may accomplish these objectives with the aid of Infoveave’s data automation and business intelligence solutions.",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/02/Why-minimize-the-OEE-loss-factors.jpeg?w=1280&ssl=1",
  },
];

const DataToDecision = () => {
  return <BlogsInnerPage heading={blogHeading} content={blogContent} />;
};

export default DataToDecision;
