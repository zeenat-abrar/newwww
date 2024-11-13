import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("best-offer-pricing-with-a-unified-data-platform");
}

//Content Area
const successStoryHeading = "Best offer pricing with a |unified data platform|";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Best offer pricing",
    paragraph:
      "In the competitive australian energy market, a leading retail energy provider has supplied electricity and gas to over 700,000 accounts. They faced significant challenges in offering the best pricing to their customers. Mandated by the regulated bodies to provide optimal pricing, the company struggled with fragmented data, making analysis and accurate pricing offers difficult. ",
  },
  {
    id: 2,
    subHeading: "The challenge: fragmented data and regulatory demands",
  },
  {
    id: 3,
    list: ["Data silos and complexity"],
    paragraph:
      "The energy provider’s data was dispersed across multiple system. Accessing and analyzing historical usage, plan changes, and rate variations for over 700,000 accounts across different fuel types and jurisdictions required significant data processing effort. ",
  },
  {
    id: 4,
    list: ["Regulatory compliance"],
    paragraph:
      "Accurate and precise calculations were necessary to meet regulatory requirements. Ensuring compliance while managing vast amounts of data posed a considerable challenge, demanding an efficient and reliable solution. ",
  },
  {
    id: 5,
    list: ["Turnaround time"],
    paragraph: "The turnaround time to complete the project was critical to meet the deadlines given by the authorities to launch the ‘Deemed Best Offer’.",
  },
  {
    id: 6,
    heading: "The solution- implementing Infoveave’s unified data automation & decision intelligence platform",
  },
  {
    id: 7,
    list: ["Data integration and automation"],
    paragraph:
      "The data coming from customer accounts, billing, meter read etc was integrated into Infoveave using connectors. When the project began, the company did not have access to the past 365 days of their customers’ consumption data. Infoveave’s team came up with  the idea to extract this data from invoice payloads available at the printhouse.Infoveave’s custom file parser was helpful to convert the unstructured data of these bills to structured data. It extracted key information such as consumption, current offers, and concessions.",
  },
  {
    id: 8,
    list: ["Advanced analytics"],
    paragraph:
      "Simulations were built to explore various pricing scenarios to recommend the best offers for customers. It considered parameters like current pricing plans, consumption data of the last 365 days, concessions, subsidies, and rebates to provide personalized best offers for each consumer. FuseData automated the regular extraction and parsing of invoice data, triggering the What-If Analysis upon completion. ",
  },
  {
    id: 9,
    list: ["Insightful dashboards"],
    paragraph:
      "Actionable dashboards provided deep insights into consumption, top 5 offers customer data, highlighting those on optimal offers and those who were not, thereby enablied better decision-making.",
  },
  {
    id: 10,
    list: ["Enhancing efficiency and accuracy"],
    paragraph:
      "The objective was to streamline data extraction, run precise pricing simulations, and produce detailed reports, thus improving operational efficiency and ensuring regulatory compliance. ",
  },
  {
    id: 11,
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/06/Infoveave-Deemed-Best-Offer-1.png?w=1522&ssl=1",
  },
  {
    id: 12,
    heading: "The result– transformative benefits with Infoveave",
  },
  {
    id: 13,
    list: ["Enhanced financial control"],
    paragraph: "The platform enabled simulations for new rates and offers, optimizing gross margins before launch, thus improving financial control.",
  },
  {
    id: 14,
    list: ["Increased operational efficiency"],
    paragraph: "The new offer launch times were reduced by over 50%, significantly increasing operational efficiency.",
  },
  {
    id: 15,
    list: ["Cost reduction "],
    paragraph:
      "By identifying and rectifying issues with invoice data, the platform reduced inbound calls and customer queries about incorrect or missing information, leading to cost savings. ",
  },
  {
    id: 16,
    list: ["Improved governance "],
    paragraph: "Automated scheduling of internal and regulatory reports ensured compliance and accuracy, enhancing governance.",
  },
  {
    id: 17,
    list: ["Seamless integration "],
    paragraph:
      "Infoveave provided additional support to other business systems, such as the website and call center support, ensuring a cohesive operational ecosystem. ",
  },
  {
    id: 18,
    subHeading: "Conclusion",
    paragraph:
      "Leveraging Infoveave’s advanced data processing and analytical capabilities, the energy provider successfully navigated the complexities of pricing optimization. The integration not only resolved immediate data accessibility and analysis issues but also introduced automation and integration that significantly improved operational efficiency and financial control. This case study exemplifies how a unified data automation and decision intelligence platform can address industry-specific challenges, leading to substantial business improvements and regulatory compliance. ",
  },
];

const RetailersNeedUnifiedDataPlatform = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default RetailersNeedUnifiedDataPlatform;
