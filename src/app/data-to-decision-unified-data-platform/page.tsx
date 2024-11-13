import BlogsInnerPage from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-design";
import { BlogContentType } from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("data-to-decision-unified-data-platform");
}

const blogHeading = "Go from data to decision in one |unified platform|";

const blogContent: BlogContentType[] = [
  {
    id: 1,
    heading: "Data to decisions: UDP",
    paragraph:
      "According to IDC’s january 2022 Worldwide CEO survey, 65% of organizations are using at least 10 different data engineering and intelligence tools to integrate data. This encompasses enterprise data that is coming from or going to atleast ten different data management systems and technologies. For enterprises, this results in a colossal waste of time, resources and money and above all, it is cumbersome working with a complex patch work of motley tools, each promising a different capability of its own. Today’s enterprises need a modern, intelligent platform that has built-in capabilities to integrate, manage, make sense of and visualize all the data under one common architecture –a unified data platform .",
  },
  {
    id: 2,
    subHeading: "What is a unified data platform?",
    paragraph:
      "A unified data platform as its name indicates is an all-in-one platform that can weave dynamic, diverse and distributed data efficiently, assimilate it, transform it and provide a secure, scalable architecture to analyze that data. It also offers the most intuitive technologies to understand the data and finally compose it into coherent, intelligent and clear visualization of information for businesses to make informed decisions.",
  },
  {
    id: 3,
    subHeading: "Why do we need unified data platform?",
    paragraph:
      "Enterprise applications and data are in a highly fragmented state residing in several departmental silos that separate them. In their quest to unify the data and integrate applications enterpise teams are having to work with a plethora of tools. As they focus on mission critical use cases they are beset with insurmountable data quality and data governance issues arising from the complexity of working with these multiple set of tools.From data ingestion, to data prep to data automation and organization to analytics to visualization, data professionals are working with a variety of tools offered by different vendors that are inextricably tied to their respective cloud environments. This has resulted in precious waste of time, resources and costs in arriving at critical information needed by business leaders to make informed decisions. Internal teams in the organizations are exhausted playing the system-integrator role in addition to their core responsibilities.",
  },
  {
    id: 4,
    subHeading: "Enterprise teams and the complexity of data and analytics tools",
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
      "A unified data platform solves this hairball of a problem by serving as a common, unified architecture to bring the various tools necessary for enterprises to make their journey from data to the right decision offering the following benefits:",
    bulletPoints: [
      "Data access and integration:| Easily connect, combine and assimilate data sets collected from diverse sources under one architecture to make informed decisions.",
      "Automation of data integration and management:| Cost-effective and simplified data acquisition, unification and structuring without complex operations and/or huge engineering teams of engineers to reformat acquired data sets.",
      "Data availability and seamless search:| Structured and unified data makes search far easier through queries human-generated and algorithmic.",
      "Data analytics:| Analytics from structured, organized data allows databases to remain scalable when the business demands increase.",
      "Advanced analytics:| Integrated and structured data allows enterprises to deploy ML algorithms and AI-driven analytics to uncover patterns, identify anomalies, and generate predictive insights.",
      "Improved enterprise intelligence:| Collaboration and productivity that results in all-round enterprise performance and optimization through readily available analysis of data in consumable format",
    ],
  },
  {
    id: 8,
    subHeading: "Infoveave – A unified data platform for data automation & decision intelligence",
    paragraph:
      "Infoveave is an end-to-end unified data platform that comes with native, fully developed individual components that offer these four fundamental capabilities and fit together as four seamless, integral modules of the Infoveave product. The four modules that are the core building blocks of Infoveave are as follows:",
    bulletPoints: [
      "Insights:| Transform your data into actionable insights with interactive visualizations. Craft compelling narratives tailored for impact.",
      "SciPyR:|Explore patterns, predict outcomes, and conduct impactful analyses using What-If, AutoML & Python.",
      "FuseData:| Streamline your processes and enhance data flows effortlessly. Set up intelligent data pipes, reducing manual tasks and paving the way for seamless operations.",
      "NGauge:| Create data apps to enable last-mile data collection, link seamlessly to automations, and trigger actions.",
    ],
  },
  {
    id: 9,
    paragraph:
      "These four modules of Infoveave can be used individually or as a combination of two or more, depending on the needs of each enterprise or initiative.",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/01/New4Pillars-Titles-1.png?w=1500&ssl=1",
  },
  {
    id: 10,
    subHeading: "The Infoveave difference",
    paragraph:
      "In a cluttered and chaotic market full of data product offerings from companies that have managed the expedient feat of assembling them into their stacks through multiple product acquisitions, Infoveave stands out as a unique and only product developed from the ground up over the years, with each one of these modules built natively into the Infoveave stack.",
  },
  {
    id: 11,
    subHeading: "Bringing in the Infoveave unified governance framework",
    paragraph:
      "The immediate milestone on the Infoveave product roadmap is the Unified Governance Framework built into Infoveave’s foundational layer with its critical components of Data Quality, Data Observability and Data Lineage.",
    bulletPoints: [
      "Unify all your cloud data governance capabilities in one platform.",
      "Catalog, cleanse, and protect your data on-prem and on the Cloud.",
      "Mitigate risk and ensure ISO SOC2 compliance and regulatory requirements.",
      "Drive business insights with an easy access self-service data marketplace.",
    ],
  },
  {
    id: 12,
    subHeading: "Embark on your enterprise data journey with Infoveave",
    paragraph:
      "Simplify, optimize, and automate your data pipelines. Narrate simple, yet insightful stories from your raw data with Infoveave. Make informed decisions.",
  },
];

const DataToDecision = () => {
  return <BlogsInnerPage heading={blogHeading} content={blogContent} />;
};

export default DataToDecision;
