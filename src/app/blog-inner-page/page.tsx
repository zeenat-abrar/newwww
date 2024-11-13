import Image from "next/image";
import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import SingleLineList from "@/components/blocks/blogs/single-list";
import BlogSection from "@/components/blocks/industries/blog-section";
import { Footer } from "@/components/ui/footer";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("blog-inner-page");
}

const content = [
  {
    id: 1,
    paragraph:
      "According to IDC’s January 2022 Worldwide CEO Survey, 65% of organizations are using at least 10 different data engineering and intelligence tools to integrate data. This encompasses enterprise data that is coming from or going to atleast ten different data management systems and technologies. For enterprises, this results in a colossal waste of time, resources and money and above all, it is cumbersome working with a complex patch work of motley tools, each promising a different capability of its own. Today’s enterprises need a modern, intelligent platform that has built-in capabilities to integrate, manage, make sense of and visualize all the data under one common architecture a unified data platform .",
  },
  {
    id: 2,
    heading: "What is a Unified Data Platform?",
    paragraph:
      "A Unified Data Platform as its name indicates is an all-in-one platform that can weave dynamic, diverse and distributed data efficiently, assimilate it, transform it and provide a secure, scalable architecture to analyze that data. It also offers the most intuitive technologies to understand the data and finally compose it into coherent, intelligent and clear visualization of information for businesses to make informed decisions.",
  },
  {
    id: 3,
    heading: "Why do we need unified data platform?",
    paragraph:
      "Enterprise applications and data are in a highly fragmented state residing in several departmental silos that separate them. In their quest to unify the data and integrate applications enterpise teams are having to work with a plethora of tools. As they focus on mission critical use cases they are beset with insurmountable data quality and data governance issues arising from the complexity of working with these multiple set of tools. From data ingestion, to data prep to data automation and organization to analytics to visualization, data professionals are working with a variety of tools offered by different vendors that are inextricably tied to their respective cloud environments. This has resulted in precious waste of time, resources and costs in arriving at critical information needed by business leaders to make informed decisions. Internal teams in the organizations are exhausted playing the system-integrator role in addition to their core responsibilities.",
  },
  {
    id: 4,
    heading: "Enterprise teams and the complexity of data and analytics tools",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/02/blog-post-f.jpg?resize=1536%2C1201&ssl=1",
  },
  {
    id: 5,
    paragraph:
      "Data engineers and data stewards are coping with the tyranny of working across multiple tech stacks, resources and skillsets as well as multiple product licenses, multiple SLAs and the need to manage them. This has resulted in tedious, long drawn-out processes leading to delayed time-to-insights.",
  },
  {
    id: 6,
    paragraph:
      "For CIOs and other leadership at the decision making level this boils down to dealing with the economic consequences of high TCO incurred from the perspective of multiple licenses, procurement costs, resources deployed to configure these various tools as well the adverse time-to-market schedules caused by this unwieldy architecture. These leaders have been looking for a “holistic environment” that can tie all the core components needed to build a unified information architecture. In other words, a Unified Data Platform.",
  },
  {
    id: 7,
    paragraph:
      "A Unified Data Platform solves this hairball of a problem by serving as a common, unified architecture to bring the various tools necessary for enterprises to make their journey from data to the right decision offering the following benefits:",
    list: [
      "Data access and integration:| Easily connect, combine and assimilate data sets collected from diverse sources under one architecture to make informed decisions.",
      "Automation of data integration and management:| Cost-effective and simplified data acquisition, unification and structuring without complex operations and/or huge engineering teams of engineers to reformat acquired data sets.",
      "Data availability and seamless search:| Structured and unified data makes search far easier through queries human-generated and algorithmic.",
      "Data Analytics:| Analytics from structured, organized data allows databases to remain scalable when the business demands increase.",
      "Advanced Analytics:| Integrated and structured data allows enterprises to deploy ML algorithms and AI-driven analytics to uncover patterns, identify anomalies, and generate predictive insights.",
      "Improved enterprise intelligence:| Collaboration and productivity that results in all-round enterprise performance and optimization through readily available analysis of data in consumable format.",
    ],
  },
  {
    id: 8,
    heading: "Infoveave – A Unified Data Platform for Data Automation & Decision Intelligence",
    paragraph:
      "Infoveave is an end-to-end Unified Data Platform that comes with native, fully developed individual components that offer these four fundamental capabilities and fit together as four seamless, integral modules of the Infoveave product. The four modules that are the core building blocks of Infoveave are as follows:",
    list: [
      "Insights:| Transform your data into actionable insights with interactive visualizations. Craft compelling narratives tailored for impact.",
      "SciPyR:| Explore patterns, predict outcomes, and conduct impactful analyses using What-If, AutoML & Python.",
      "FuseData:| Streamline your processes and enhance data flows effortlessly. Set up intelligent data pipes, reducing manual tasks and paving the way for seamless operations.",
      "NGauge:| Create data apps to enable last-mile data collection, link seamlessly to automations, and trigger actions.",
    ],
  },
  {
    id: 9,
    paragraph:
      "These four modules of Infoveave can be used individually or as a combination of two or more, depending on the needs of each enterprise or initiative.",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/01/New4Pillars-Titles-1.png?w=1500&ssl=1",
    imageText: "Infoveave - A unified Platform for Data Automation and Decision Intelligence",
  },
  {
    id: 10,
    heading: "The Infoveave Difference",
    paragraph:
      "In a cluttered and chaotic market full of data product offerings from companies that have managed the expedient feat of assembling them into their stacks through multiple product acquisitions, Infoveave stands out as a unique and only product developed from the ground up over the years, with each one of these modules built natively into the Infoveave stack.",
  },
  {
    id: 11,
    heading: "Bringing in the Infoveave Unified Governance Framework",
    paragraph:
      "The immediate milestone on the Infoveave product roadmap is the Unified Governance Framework built into Infoveave’s foundational layer with its critical components of Data Quality, Data Observability and Data Lineage.",
    list: [
      "Unify all your cloud data governance capabilities in one platform.",
      "Catalog, cleanse, and protect your data on-prem and on the Cloud.",
      "Mitigate risk and ensure ISO SOC2 compliance and regulatory requirements.",
      "Drive business insights with an easy access self-service data marketplace.",
    ],
  },
];

const recentPosts = ["Product Pricing", "Thrive in a Data-Driven World", "Unified data platform?", "Top 10 cold call KPIs", "Top 10 KPIs best practices"];

// const recentPosts = [
//   "Product Pricing - Challenges, Best Practices, and Strategic Insights",
//   "Why Retailers Need a Unified Data Platform to Thrive in a Data-Driven World",
//   "How can a unified data platform help retailers with automation?",
//   "Top 10 cold call KPIs",
//   "Sales dashboards- Metrics to track, benefits & best practices",
// ];

const categories = ["Awards & Recognitions", "Blog", "Case Study", "KPI library", "News Report"];
// const categories = ["Awards & Recognitions", "Blog", "Case Study", "KPI library", "News Report", "OEE Articles"];

const BlogInnerPage = () => {
  return (
    <section
      className="pt-24"
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div>
        <MainHeadingWithSpan firstText="Go from data to decision in one" specialText="unified platform" lastText="" alignText="center" />
        <nav aria-label="breadcrumb" className="w-max m-auto">
          <ol className="flex flex-wrap items-center w-full px-4 py-2 rounded-md">
            <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-gray-900 hover:text-ivindigo-900">
              <a href="#" className="opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </a>
              <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-gray-400">/</span>
            </li>
            <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-gray-900 hover:text-ivindigo-900">
              <a href="/blogs" className="opacity-60">
                <span>Blogs</span>
              </a>
              <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-gray-500">/</span>
            </li>
            <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-ivviolet-500 hover:text-ivindigo-900">
              <a href="#">Go from data to decision in one unified platform</a>
            </li>
          </ol>
        </nav>
      </div>

      <div className="my-16 grid grid-cols-4 gap-5 px-[104px]">
        {/* Left Column: 75% Width */}
        <div className="col-span-3 ">
          {/* Content for the left column goes here */}
          {content.map((ele) => (
            <div key={ele.id} className="mb-10">
              {ele.heading && <h2 className="text-xl font-bold my-4">{ele.heading}</h2>}
              {ele.paragraph && <p className="text-base">{ele.paragraph}</p>}
              {ele.image && (
                <Image
                  src={ele.image}
                  height={600}
                  style={{ mixBlendMode: "multiply" }}
                  width={900}
                  className="w-full object-cover group-hover/card:shadow-xl my-5"
                  alt="blog-image"
                />
              )}
              {ele.imageText && <p className="text-base text-center text-gray-500">{ele.imageText}</p>}
              {ele.list && (
                <ol className="list-disc text-base space-y-5 pl-5 my-4">
                  {ele.list.map((bulletPoint, index) => (
                    <SingleLineList text={bulletPoint} key={index} />
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: 25% Width */}
        <div className="col-span-1 sticky top-7 self-start">
          <div className="bg-ivviolet-300 px-5 py-6 shadow-xl rounded-lg border border-ivviolet-300">
            <h2 className="text-xl font-bold text-left mb-4">Recent Posts</h2>
            <ol className="list-disc text-base space-y-5 pl-5">
              {recentPosts.map((bulletPoint, index) => (
                <li key={index}>{bulletPoint}</li>
              ))}
            </ol>
          </div>

          <div className="bg-ivindigo-300 px-5 py-6 mt-8 shadow-xl rounded-lg">
            <h2 className="text-xl font-bold text-left mb-4">Categories</h2>
            <ol className="list-disc text-base space-y-5 pl-5">
              {categories.map((bulletPoint, index) => (
                <li key={index}>{bulletPoint}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <BlogSection />
      <Footer />
    </section>
  );
};

export default BlogInnerPage;
