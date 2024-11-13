import { Metadata } from "next";
import BlogsInnerPage from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-design";
import { BlogContentType } from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-grid-layout";

//Metadata
export const metadata: Metadata = {
  title: "OEE Software: Boost Manufacturing Efficiency & Intelligence",
  description:
    "Infoveave® OEE-intelligence successfully drive your company's production efficiency. Elevate your OEE in manufacturing with our OEE Software.https://infoveave.com/oee-analysis/",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "OEE Software: Boost Manufacturing Efficiency & Intelligence",
    description:
      "Infoveave® OEE-intelligence successfully drive your company's production efficiency. Elevate your OEE in manufacturing with our OEE Software.https://infoveave.com/oee-analysis/",
    url: "https://infoveave.com/oee-analysis/",
    siteName: "Infoveave",
    images: [
      {
        url: "https://infoveave.com//srv/htdocs/wp-content/uploads/2022/10/icons8-data-sheet-60.png",
        width: 1200,
        height: 630,
        alt: "Infoveave - OEE Software: Boost Manufacturing Efficiency & Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Est. reading time",
  },
};

const blogHeading = "|OEE| intelligence";

const blogContent: BlogContentType[] = [
  {
    id: 0,
    heading: "Driving your production efficiency",
    paragraph: "Data intelligence and smart automation working in harmony to enhance equipment efficiency and effectiveness.",
  },
  {
    id: 1,
    paragraph:
      "Transform your production facility into a digital powerhouse with Infoveave® OEE Intelligence. Monitor your equipment’s performance in real-time and gain valuable insights to optimize your maintenance costs with our predictive analysis.",
  },
  {
    id: 2,
    video: "https://infoveave.com//srv/htdocs/wp-content/uploads/2023/04/OEE-Intelligence.mp4",
  },
  {
    id: 3,
    bulletPoints: ["27%| Manufacturing costs", "12%| Equipment uptime", "9%| Production quality", "87%| Average OEE"],
  },
  {
    id: 4,
    heading: "Are you ready for a productive business?",
    paragraph:
      "Managing real-time production statistics is best handled by Infoveave® OEE simulator, which is favored by the top manufacturing industries in the world. From work floor operators to top management personnel, our OEE intelligence tool is intended for all users inside your company.",
    bulletPoints: [
      "Understand :| Recognize the flaws in your production facilities that are causing your profit to disappear from your company.",
      "Measure & visualize :| Measure the six primary losses that contribute to OEE losses in most industrial facilities, including yours.",
      "Engineer better :| Engineer better with enhanced data capture, real-time OEE computation, and reporting of losses to the team.",
    ],
  },
  {
    id: 5,
    heading: "How we do it?",
    list: ["Configure Data Table"],
    paragraph: "Set up the data table to correspond to the information that will be gathered from the production facility.",
  },
  {
    id: 6,
    list: ["Configure the Datasource"],
    paragraph: "Create a master production datasource using the factory data set that has been predefined.",
  },
  {
    id: 7,
    list: ["Add calculated columns"],
    paragraph: "Define the calculated columns involved and determine the mathematical correlation.",
  },
  {
    id: 6,
    list: ["set up NGuage Forms"],
    paragraph: "Relay on Infoveave NGauge forms for the easy updates, data Insights, OEE & FTT estimation.",
  },
  {
    id: 7,
    list: ["Get Insights & reports"],
    paragraph: "Receive performance insights and reports in real time for your shop floor staff and management.",
  },
  {
    id: 8,
    video: "https://infoveave.com//srv/htdocs/wp-content/uploads/2023/04/OEE-Dashboards.mp4",
  },
  {
    id: 9,
    heading: "Our features to benefit",
    bulletPoints: [
      "Live Wallboards :| Project the insights in real-time on live wallboards.",
      "Easy Integration :| Get the OEE simulator integrated to your business platform.",
      "Simple Input :| Using the drop-down menu, quickly pick the input values.",
      "Build Hierarchies :| Build and establish link with multiple datasources to create hierarchies.",
      "Personalizations :| Customize the OEE simulator tool to meet your business requirements.",
      "CMMS integration :| Optimize maintenance processes & improve OEE over centralized system.",
      "Job Automation :| Automate the process of OEE and performance estimation.",
    ],
  },
  {
    id: 10,
    heading: "What does OEE intelligence mean?",
    paragraph:
      "Overall Equipment Effectiveness (OEE) analysis, a key metric in Total Productive Maintenance (TPM) and Lean Manufacturing programs. It helps to monitor and improve the efficiency and effectiveness of a manufacturing industry.",
  },
  {
    id: 11,
    heading: "How is OEE Calculated?",
    paragraph:
      "OEE is derived by the multiplication of three manufacturing productivity loss categories availability, performance, and quality. It provides a much richer understanding of wastage in the manufacturing process.",
  },
  {
    id: 12,
    heading: "What is difference between efficiency and OEE?",
    paragraph:
      "Overall equipment effectiveness refers to using machines to their maximum capacity; overall equipment efficiency refers to using machines to their maximum capacity while using the fewest resources possible.",
  },
];

const OEEAnalysis = () => {
  return <BlogsInnerPage heading={blogHeading} content={blogContent} />;
};

export default OEEAnalysis;
