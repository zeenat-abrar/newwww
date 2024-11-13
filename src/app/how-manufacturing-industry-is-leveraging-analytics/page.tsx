import { Metadata } from "next";
import BlogsInnerPage from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-design";
import { BlogContentType } from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-grid-layout";

//Metadata
export const metadata: Metadata = {
  title: "How Data Analytics is Revolutionizing the Manufacturing Industry",
  description: "Discover the transformative power of analytics in manufacturing. Improve productivity, optimize processes, predict maintenance needs & more!",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "How Data Analytics is Revolutionizing the Manufacturing Industry",
    description: "Discover the transformative power of analytics in manufacturing. Improve productivity, optimize processes, predict maintenance needs & more!",
    url: "https://infoveave.com/how-manufacturing-industry-is-leveraging-analytics/",
    siteName: "Infoveave",
    images: [
      {
        url: "https://infoveave.com/wp-content/uploads/2022/02/Analytics-in-the-Manufacturing-Sector.jpeg",
        width: 1200,
        height: 630,
        alt: "Infoveave - How Data Analytics is Revolutionizing the Manufacturing Industry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Est. reading time",
  },
};

const blogHeading = "Making use of analytics in the |manufacturing sector|";

const blogContent: BlogContentType[] = [
  {
    id: 1,
    heading: "Analytics in Manufacturing Industry",
    paragraphArray: [
      "Data analytics can spell the difference between success and failure in a variety of industries in today’s digital environment. One of these industries is manufacturing, where companies are constantly seeking for methods to improve profitability and performance by implementing creative solutions that will set them apart from their competition. Implementing a manufacturing analytics solution that provides visibility into your goods, processes, workforce, and Supply chain allows you to quickly gather and comprehend information about your organization and make better decisions about how to improve it.",
      "In this article, we’ll look at some of the ways analytics is transforming the manufacturing industry and how it can help your company reach its goals and objectives in 2022 and beyond. In the manufacturing industry, data analytics can take numerous forms, including predictive maintenance, process optimization, and supply chain management. This can be accomplished by obtaining data from equipment’s, sensors, and ERPs etc. or acquiring market intelligence on current trends to increase efficiency.",
      "Data analytics gives organizations a shot at success, regardless of how they use it. It allows them to make informed decisions based on acquired data rather than depending entirely on industry predictions. What you can achieve with analytics is virtually limitless in manufacturing industry.",
    ],
  },
  {
    id: 2,
    heading: "Role of Analytics in Transforming Manufacturing Industry",
    paragraph:
      "Data analytics has been revolutionary for manufacturing companies. The main reason? It has vastly improved productivity and bottom-line performance by providing visibility on process. Most companies are drowning in data, but what if they could use all that information to make their business better? With sophisticated analytics approaches like predictive modelling, prescriptive analytics, and machine learning, we can now precisely do that, thanks to breakthroughs in computer science and technology. The options are limitless! Here are seven most common ways that data analytics is helping in transforming manufacturing industry :",
    bulletPoints: [
      "Discrete Event Simulation :| Discrete event simulation (DES) is a useful method for simulating today’s increasingly complicated manufacturing processes. For example, a truck can arrive at a warehouse, proceed to an unloading gate, unload, and then leave. This will be represented in DES models as sequences of events occurring at distinct time intervals, thereby simulating the operations of a factory in a virtual world.",
      "Product Quality Analytics : Data analytics techniques are focused on the continuous improvement of product quality attributes. Providing high-quality products is the foundation for any manufacturing company’s long-term success. With product quality analytics, quality checks may be sped up, and possible downstream quality concerns can be discovered ahead of time to notify operators.",
      "Productivity Analytics :| The use of data analytics to ensure that a manufacturing plant functions as smoothly as possible is referred to as productivity analytics. This involves avoiding issues that have a large impact on a manufacturing company’s profitability, such as unplanned machine downtime or managing overall equipment effectiveness (OEE).",
      "Throughput Optimization :| Even if a facility is running well with few or no unplanned downtimes, it may be inefficient. Manufacturers can now discover inefficiencies and bottlenecks that are limiting First time throughput with more data. Data analytics can aid in determining necessary adjustments to production parameters to First time throughput .",
      "Manufacturing Yield Optimization :| It refers to the percentage of non-defective things among all manufactured items and is commonly represented by the ratio of non-defective items to made items. Real time analytics systems will help operator to predict the check points and variables for wastage reductions, minimize rework and improve the yield.",
      "Production Scheduling :| A production schedule specifies the order in which activities should be carried out at the material and equipment levels to generate completed goods. Most typical schedules are inefficient or time-consuming. Data analytics can help fill in the blanks when it comes to creating production schedules. Production schedules outperform rule-based heuristics when domain knowledge is supplemented with data analytics. Furthermore, these strategies are effective and produce results quickly, making near-real-time application much easier.",
      "Predictive Maintenance :| The financial and operational implications of machine and equipment failure are significant. But it can be prevented with analytics. The probability of a machine breaking down can be predicted using machine sensor data combined with statistical and artificial intelligence algorithms. Methods such as time-to-failure analysis can be used to dynamically schedule machine maintenance. Failures can be avoided, interruptions can be minimized, and plant output can be maximized.",
      "Supplier performance review :| Data on procurement numbers and vendors is only acquired for a few actions in the procurement cycle in many organizations. Supply data, on the other hand, goes beyond the traditional expenditure analysis and yearly supplier performance evaluation. Supply operations can be detected in real time on a transactional basis to detect deviations from usual delivery patterns. Predictive risk management is also becoming more popular among businesses.",
      "Margin growth :| By leading sales teams to make smarter decisions, well-designed analytics tools may result in considerable top-line and margin increase. But that can only happen if firms focus on the areas where analytics can add the greatest value and deploy them intelligently to avoid revenue leakages.",
      "Cost Overruns :| Problem-solving in finance is shifting from reactive to proactive. Financial analytics helps you spot trends in your financial data and predict future occurrences that can be handled now. You can immediately detect where cost overruns or leakages and other symptoms of poor performance using the newest cloud-based analytics solutions, such as Infoveave.",
    ],
  },
  {
    id: 3,
    heading: "Conclusion",
    paragraph:
      "The implications of these changes will be felt across all aspects of manufacturing, from operations and sales to marketing and product development. In a world where data reigns supreme, companies who fail to leverage analytics will be left behind. The only question that remains is: How are you planning to make analytics work for your business? Learn about Infoveave OEE solution .",
  },
];

const HowManufacturingIndustryLeveragingAnalytics = () => {
  return <BlogsInnerPage heading={blogHeading} content={blogContent} />;
};

export default HowManufacturingIndustryLeveragingAnalytics;
