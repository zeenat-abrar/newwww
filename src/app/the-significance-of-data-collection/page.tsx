import { Metadata } from "next";
import BlogsInnerPage from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-design";
import { BlogContentType } from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-grid-layout";

//Metadata
export const metadata: Metadata = {
  title: "Realizing the Importance of Data Collection: Key Reasons",
  description: "Know the Importance of data collection and how it empowers businesses to make smarter decisions, improve operations & gain a competitive edge.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Realizing the Importance of Data Collection: Key Reasons",
    description:
      "Know the Importance of data collection and how it empowers businesses to make smarter decisions, improve operations & gain a competitive edge.",
    url: "https://infoveave.com/the-significance-of-data-collection/",
    siteName: "Infoveave",
    images: [
      {
        url: "https://infoveave.com/wp-content/uploads/2022/04/Data-collection.jpeg",
        width: 1200,
        height: 630,
        alt: "Infoveave - Realizing the Importance of Data Collection: Key Reasons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Est. reading time",
  },
};

const blogHeading = "Realizing the importance of |data collection| & the reasons behind";

const blogContent: BlogContentType[] = [
  {
    id: 1,
    paragraph:
      "In the modern civilized world that we live in, data collection or the phrase “This app is collecting your Data” comes much often. So, what exactly has changed? Ever wondered How, and more importantly Why the same social media apps, shopping apps, and even gaming apps are capturing your data suddenly? The answer lies in the way in which the so called apps use the data. Unrelated, irrelevant facts become information when processed accurately. With all the collected data, it builds our profile based on that user data. This processed information is then used to deliver you several ads related to products and services of your interest.",
  },
  {
    id: 2,
    heading: "What are the Data Collection Techniques?",
    paragraph: "The purpose of data collection determines the technique. Data collection methodologies can be broadly classified into two categories :",
  },
  {
    id: 3,
    list: ["Primary Data Collection Technique"],
    paragraph:
      "Primary data collection focuses on first-hand data collection that is relevant for the needed research. This technique does not use past data and utilizes several methods for data collection such as Surveys, Forms, Questionnaires, Observations, Interviews, etc.",
    bulletPoints: [
      "Quantitative data collection techniques| are for the market research using various statistical tools. In this demand or other factors are foreseen over the set of historical data. Techniques such as Time Series Analysis, Smoothing Techniques and Barometric Method are examples of quantitative data collection methods.",
      "Qualitative data collection techniques| comes into play when the historical data is not available or when the statistical data is not required, when there’s a need for non-quantifiable data such as emotions, judgments, experience, etc. Surveys, polls, interviews, focus groups, the Delphi technique and questionnaires are some techniques used.",
    ],
  },
  {
    id: 4,
    list: ["Secondary Data Collection Technique"],
    paragraph:
      "Secondary data refers to data that is historical or from the past and is being used. This data can be from both internal sources of the organization such as the Organization’s health records, Financial Records, CRM software, and Sales Reports or external sources such as Press Releases, Business Journals, and Third-Party Organizations, Govt. reports, etc.",
  },
  {
    id: 5,
    paragraph:
      "Infoveave’s NGauge helps you develop your software and human capabilities to collect, merge, manage and analyze large data held throughout the business. For example, you can’t improve decision-making if procurement and production don’t share data. NGauge forms simplify all the data collection procedure simple for your business. NGuage forms can be created using the measures and dimensions used in the original data source. This automatically triggers an update on the need of additional columns to the datasource.",
    image: {
      image: "https://i0.wp.com/infoveave.com//srv/htdocs/wp-content/uploads/2022/04/Method-of-data-collection.jpg?ssl=1",
      className: "w-full md:w-[50%]",
    },
  },
  {
    id: 6,
    heading: "Most common use cases for NGauge forms:",
    bulletPoints: [
      "CRM Solutions:| NGauge forms are typically used as CRM solutions for tracking and measuring sales targets. Since it provides a list view and dashboards/reports can be created using these forms, sales managers find good value from these forms.",
      "Shop Floor Data Entries solutions:| Typically, the process followed on the shop floor involves the line operator making sampling and quality control entries on a piece of paper. Digitization of this process using a NGauge form would save time and capture data accurately. The time can contribute in updating the data source, and formulate dashboards with effective and quantifiable insights.",
      "Training and Engagement Solutions:| You may utilize NGauge forms to collect information on training needs and engagements, and then use that information to generate automated insights. This will help the team members experience, and ultimately, your bottom line, with digital training, engagement, and incentivization programs.",
      "Compliance solutions:| By creating clear expectations, verifying compliance, and lowering risk in real-time, NGauge forms enable you to collect data to ensure quality assurance on protocols in every location.",
    ],
  },
];

const SignificanceOfDataCollection = () => {
  return <BlogsInnerPage heading={blogHeading} content={blogContent} />;
};

export default SignificanceOfDataCollection;
