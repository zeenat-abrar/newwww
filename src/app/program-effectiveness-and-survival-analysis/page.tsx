import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("program-effectiveness-and-survival-analysis");
}

import SuccessStoryInnerPage from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-design";
import { SuccessStoryContentType } from "@/components/blocks/success-stories/inner-page-layout/success-story-inner-page-grid-layout";

//Content Area
const successStoryHeading = "|Program effectiveness| and survival analysis";

const successStoryContent: SuccessStoryContentType[] = [
  {
    id: 1,
    heading: "Program effectiveness case study",
    paragraph:
      "Worldwide organizations conduct camps and other programs on specific diseases. Their mission to spread awareness and check the outbreak of any disease. Review and feedback analysis for such program effectiveness and survival analysis is crucial.",
  },
  {
    id: 2,
    paragraph:
      "The lack of a centralized system many geographies for data collection is an area of concern. As there is no way to make comprehensive analysis and comparisons. On which health managers must rely on for better decision making. With daily growing data sets for healthcare programs. Need for simple approach to analyze and study the data is also growing. An easy access to patient-level data can help to make informed decisions. With a live dashboard showing the complete picture of program stats and insights. To how best channel human and material resources in improving health services outcomes.",
  },
  {
    id: 3,
    subHeading: "Program effectiveness analysis",
    paragraph:
      "The business need for comprehensive analysis system was critical. As it would help in comparative study and analysis using patient-level data. On which health managers must rely on for making informed decisions. The client wanted to develop a web-based system capturing all electronic patient-level data.",
  },
  {
    id: 4,
    paragraph:
      "An interactive dashboard showing live data would enable health managers to assess key health parameters. These indicators include various disease care and treatment plans across their patient database. And aid to a comparative study across various regions by age, sex, etc.",
  },
  {
    id: 5,
    paragraph: "Program effectiveness and survival analysis by Infoveave aided to the client’s requirements. The proposed solution was in two phases:",
    bulletPoints: [
      "Create a common-format data dictionary to ingest patient-level data.",
      "A low code, user friendly data visualization dashboard, to showcase the KPIs tracked. And sends customized reports to respective stakeholders.",
    ],
  },
  {
    id: 6,
    paragraph:
      "Enabling easy access to patient level data by health officers, was the solution. A visualization dashboard set up by Infoveave, addressed all the pain points. Facilitating enhanced patient level data analyses.",
  },
  {
    id: 7,
    paragraph:
      "With data collection and analysis to the last mile. Infoveave was able to summarize large amount of disease related data. This helped in better decision making and a complete visibility of the impacts.",
  },
  {
    id: 8,
    paragraph:
      "Flexibility of Infoveave allowed data ingested to scale as per the data availability. The dataset can be from single healthcare unit or a country wide, for instance. With customized alerts and targets, it was possible to schedule routines follow ups. With easy display of use case specific maps, and charts in dashboards. One can configure customized charts and graphs as per the need. This enhanced real time monitoring to the next level. Also, assisted health officers with up-to-date data. Thus, providing a centralized view across geographies. Filtering of the required data facilitates in better decision making.",
  },
  {
    id: 9,
    subHeading: "Enhanced comparative study using program effectiveness",
    bulletPoints: [
      "Increased scalability:| Robustness of the tool is its adaptability to volumes of data. This makes it compatible for both small chunks to large volumes of data processing.",
      "Better comparative study:| By analysis of data from various regions, gender, age groups and medication facilities provided. With rich data and multiple combinations yields better insights and end results.",
      "High quality visualizations:| To access various parameters of patient data. Efficient differentiation and storytelling through rich visualizations.",
      "Feasibility of data:| Ease to access and use, the tool for analytical study of data. Also helps in better understanding the counter measures through enhanced research.",
      "Enhanced data usage – Without requiring expertise into statistics and related technology.",
    ],
  },
];

const ProgramEffectivenessAndSurvivalAnalysis = () => {
  return <SuccessStoryInnerPage heading={successStoryHeading} content={successStoryContent} />;
};

export default ProgramEffectivenessAndSurvivalAnalysis;
