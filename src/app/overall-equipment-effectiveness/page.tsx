import { Metadata } from "next";
import BlogsInnerPage from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-design";
import { BlogContentType } from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-grid-layout";

//Metadata
export const metadata: Metadata = {
  title: "What is What-If Analysis Modelling and Why It is Important?",
  description: "Discover the importance of What-If Analysis Modeling in business strategy to forecast outcomes, assess risks, and make data-driven decisions.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "What is What-If Analysis Modelling and Why It is Important?",
    description:
      "Discover the importance of What-If Analysis Modeling in business strategy to forecast outcomes, assess risks, and make data-driven decisions.",
    url: "https://infoveave.com/what-if-analysis-modeling-and-why-it-is-important/",
    siteName: "Infoveave",
    images: [
      {
        url: "https://infoveave.com/wp-content/uploads/2022/02/What-if-analysis.jpeg",
        width: 1200,
        height: 630,
        alt: "Infoveave - What is What-If Analysis Modelling and Why It is Important?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Est. reading time",
  },
};

const blogHeading = "|Overall equipment effectiveness|: How to make an industry-wide calculation?";

const blogContent: BlogContentType[] = [
  {
    id: 1,
    heading: "Guide to OEE Efficiency Calculation",
    paragraph:
      "In manufacturing, Overall Equipment Effectiveness (OEE) is a key KPI derived from 3 underlying metrics, Availability, Performance and Quality. An OEE score of 100% would mean production, with no downtime, at standard credit hours , and no defects. What this means for an organization, is that its delivering top notch quality to its consumers and has its core costs and efficiencies under control.",
  },
  {
    id: 2,
    paragraph:
      "OEE is the industry norm for manufacturing and is a critical success factor for the business. At a basic level OEE is not difficult to understand, its rather common sensical. Everyone knows it is needed and knows its benefits. However, in order to keep it under control , one must be able to measure, and in order to measure , one must be able to collect the relevant data points. Once the data acquisition process can be established there are scores of tools that can use this information to provide meaningful insights. The key to OEE is “eliminating waste”. Eliminating waste of time, material and resources. OEE = (Good Count x Ideal Cycle Time)/Planned Production Time The above should give the same result as the multiplication of three underlying factors : Availability , Performance and Quality. OEE = Availability x Performance x Quality",
    image: "https://i0.wp.com/infoveave.com//srv/htdocs/wp-content/uploads/2023/02/OEE-Executive-DB.png?ssl=1",
  },
  {
    id: 3,
    heading: "Availability",
    paragraph: "What Overall Equipment Effectiveness does not provide is the reasons for loss in production, these must be derived from the underlying metrics",
    formulaArrayWithClass: [
      { formula: "Availability = Uptime Time / Planned Production Time", className: "text-green-700 text-xl mt-5" },
      { formula: "Lost Hours = Planned Production Time - Uptime Time", className: "text-red-500 text-xl mt-2" },
    ],
  },
  {
    id: 4,
    paragraph:
      "Lost hours can be categorized under reasons which provide deeper insights into why there is a lower Uptime time. Whether the lost hours were due material not being available, machine breakdown or planned change overs.",
  },
  {
    id: 5,
    heading: "Performance",
    formulaArrayWithClass: [{ formula: "Performance = (Ideal Cycle Time x Total Count)/ Uptime Time", className: "text-green-700 text-xl mt-5" }],
  },
  {
    id: 6,
    paragraph:
      "This key metric helps establish a benchmark. The Ideal Cycle Time is the best and the fastest time the process allows to create 1 product. Which essentially means that the",
  },
  {
    id: 7,
    formulaArrayWithClass: [
      { formula: "Optimal Production Quantity = Ideal Cycle Time x Planned Production Time.", className: "text-ivviolet-900 text-xl mt-5" },
    ],
  },
  {
    id: 8,
    paragraph:
      "Technically there is noise or unaccounted losses , and one can argue that the Planned Production Quantity will always be lesser than the Optimal Production Quantity. However this noise is factored into the “Ideal Cycle Time”. Performance gives insight into the efficiency of the line to produce products at the same rate.",
  },
  {
    id: 9,
    heading: "Quality",
    formulaArrayWithClass: [
      { formula: "Quality = Good Count / Total Count", className: "text-green-700 text-xl mt-5" },
      { formula: "Rejected Count = Total Count — Good Count", className: "text-red-500 text-xl mt-2" },
    ],
  },
  {
    id: 10,
    paragraph:
      "Rejected count can provide insights into why products are being rejected. Could be due to “Material Rejection” or “Process Rejection”. Rejections are pure rejects , Re-workable items are not marked as “Rejects”, however add to the woes of production planning as they need to be slotted into an already lean schedule. ",
    image: { image: "https://i0.wp.com/infoveave.com//srv/htdocs/wp-content/uploads/2022/02/iot.png?ssl=1", className: "w-full md:w-[80%] mt-8" },
  },
];

const OverallEquipmentEffectiveness = () => {
  return <BlogsInnerPage heading={blogHeading} content={blogContent} />;
};

export default OverallEquipmentEffectiveness;
