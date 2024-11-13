import BlogsInnerPage from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-design";
import { BlogContentType } from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("oee-analytics");
}

//Content Area
const blogHeading = "|OEE analytics|: maximizing the production value";

const blogContent: BlogContentType[] = [
  {
    id: 1,
    heading: "Boost manufacturing with OEE analytics",
    paragraph:
      "An equipment challenge of any degree results in manufacturing downtime. Even a minor blockage in the equipment ends up hampering the manufacturing efficiency. And there is no guarantee that similar problems won’t occur again. So, how do businesses overcome these manufacturing hurdles?",
  },
  {
    id: 2,

    paragraph:
      "For years, manufacturers strived to improve their OEE efficiency with manual approaches. And this took a lot of company time and effort. However, all that was set to change with the arrival of Industry4.0 technologies such as AI, ML and IIoT. ",
  },
  {
    id: 3,

    paragraph:
      "Operators can schedule equipment maintenance to avoid repeated instances of unplanned downtime. Platforms like Infoveave provide greater transparency into the shop floor processes. Plant managers can now oversee the daily operations with greater agility and ease. After all, improving the OEE efficiency is more than increasing profits. It is also minimizing waste.",
  },
  {
    id: 4,
    paragraph:
      "Cloud-based OEE intelligence makes it easier to track KPIs and improve equipment performance. Operators can log in new data to update existing information via last mile data collection tools. Additionally, they can also use sensors to collect information in real-time. Managers can view equipment productivity in real-time with OEE dashboards. They can view data based on a single equipment, assembly lines or of the whole production unit. Making a production facility digital native is critical to maximizing OEE efficiency. With smart manufacturing, you can automate the collection, gleaning, and analysis of data. You can use statistical data and insights to understand the root cause of failures. Plant managers can also leverage the data for effective planning and scheduling of operations.",
  },
  {
    id: 5,

    paragraph:
      "The approach to maximizing OEE efficiency is not a one-stop solution. Instead, it involves a detailed orientation of every facet of your manufacturing unit. Identifying pitfalls and improving efficiency at every step is crucial for manufacturing success",
  },
  {
    id: 6,

    paragraph:
      "Get ready-to-use, gleaned insights on your screen at all times. Check out Infoveave OEE analytics, customize our intelligent solution as per business requirements and receive real-time OEE computation.",
  },
  {
    id: 7,
    paragraph:
      "With Infoveave’s OEE analytics, now share performance in real time with the concerned stakeholders. Our low-code no-code digital solution helps you identify recurring problems and their causes.",
  },
  {
    id: 8,
    paragraph:
      "Now unlock consistent production value by tracking plant operations on the go. And what’s more? You can do all this and more at competitive rates. Partner with Infoveave today and pave the way for a more efficient manufacturing process.",
  },
];

const DataToDecision = () => {
  return <BlogsInnerPage heading={blogHeading} content={blogContent} />;
};

export default DataToDecision;
