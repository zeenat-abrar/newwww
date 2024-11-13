import BlogsInnerPage from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-design";
import { BlogContentType } from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-grid-layout";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("the-oee-loss-tree-addressing-the-six-big-losses");
}

//Content Area
const blogHeading = "The |OEE loss tree|: addressing the six big losses";

const blogContent: BlogContentType[] = [
  {
    id: 1,
    heading: "Tackle the 6 big OEE losses",
    paragraph:
      "OEE stands for overall equipment effectiveness. As the name suggests, the goal of OEE is to ensure the maximum efficiency of a manufacturing equipment while minimizing waste. Minimizing waste in terms of raw materials, time invested and resources. However, manufacturing plants are often plagued by instances of downtime, machine failure, or producing goods at a reduced speed. These instances of inefficiency are collecting referred to as the six OEE losses.",
  },
  {
    id: 2,

    paragraph:
      "Inability to counter the six losses in OEE can result in a significant loss of time, money and effort. According to Deloitte research, unplanned stoppages result in a $50 billion loss for the manufacturing industry every year. Also known as the six losses in lean manufacturing, they are directly linked with the three OEE components of availability, performance and quality.",
  },
  {
    id: 3,
    heading: "What are the six big OEE losses?",
    paragraph:
      "The six big OEE losses are an effective and sustainable approach to identifying the manufacturing inefficiencies on the shop floor. Manufacturing equipment is the bedrock of your production facility. When the machine underperforms in any of the three OEE components, it hampers efficiency and results in revenue leakage. The six losses in OEE originate from the world of TPM (Total Productive Maintenance) and was developed by Seiichi Nakajima to increase equipment efficiency.",
  },
  {
    id: 4,
    list: ["Availability loss"],
    bulletPoints: ["Equipment failure", "Set up and adjustments"],
  },
  {
    id: 5,
    list: ["Performance loss"],
    bulletPoints: ["Minor stops", "Reduced speed"],
  },
  {
    id: 6,
    list: ["Quality loss"],
    bulletPoints: ["Process defects", "Reduced yield"],
  },
  {
    id: 7,
    paragraph:
      "A Senseye report highlights the true of machine downtime across sectors. Unavailability, both due to planned or unpredictable circumstances leads to huge loss in revenue.  A single energy company suffered an annual loss of $84 million. However, automotive manufacturer witnessed a revenue drag of around $468 million.",
  },
  {
    id: 8,
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/02/OEE-loss-tree-1.jpeg?resize=1536%2C864&ssl=1",
    paragraph:
      "The OEE calculation is based on three factors- availability, performance and quality. We can further divide these three components into the six big OEE losses. In lean manufacturing, one of the core business goals is to reduce and eliminate these six losses.",
  },
  {
    id: 9,
    subHeading: "Availability losses",
    paragraph:
      "For maximized OEE efficiency, an equipment must perform at its full intended capacity. If we plan to run for 12 hours straight, then it should run for 12 hours without interruptions. Yet, stoppages (both planned and unplanned) are quite natural for industrial equipment. Especially for equipment that produce assets in high output. Availability losses can be further classified into:",
  },
  {
    id: 10,
    list: ["Breakdown/ equipment failure"],
    paragraph:
      "Also known as unplanned stoppages, these include equipment breakdown or failures. A machine that is not running within scheduled hours results in downtime. For instance, let’s say an equipment is set to run for 6 hours straight but due to sudden failures, it only ran for 4 hours. Here, breakdown is the unplanned activity that resulted in 2 hours of downtime. Equipment failure or unplanned stops are common woe for manufacturers worldwide. The reasons may vary but the outcome remains the same.",
  },
  {
    id: 11,
    paragraph:
      "International society of automation states that factories lose from 5-20% of productivity due to downtime caused over equipment failure. Old equipment, inadequate preventive maintenance, constant reconfiguration, etc., are some of the common reasons for equipment failure. To solve the problem of unplanned stops, the first step is to identify the reasons behind the stoppages. Digitalizing your manufacturing unit would be the first step to combat this issue. It help organizations proactively identify failure patterns.",
  },
  {
    id: 12,
    list: ["Setup and changeover"],
    paragraph:
      "While breakdown refers to unplanned halts, setup or changeovers come under planned stoppages. Cleaning, adjustments and maintenance are necessary for machinery health. However, if these activities take place during scheduled hours, they come under downtime. This is because of the waiting time during maintenance halting the production process. Making even the smallest of adjustments in machinery means taking a pause. Yet, the duration to startup, once the issue has been resolved, may vary. Repeated instances of minute repairs end up taking a dent in your total productivity.",
  },
  {
    id: 13,
    paragraph:
      "There can be various reasons behind these planned stops, such as equipment cleaning, changeovers, inspection, or maintenance. Manufacturing operators must always have transparent visibility into the machine’s health. OEE alerts via integrated platforms can help track down any pertinent issues at the earliest. OEE software allows businesses to track downtime in real time. Moreover, the technician is also notified for instant redressal and minimizing downtime.",
  },
  {
    id: 14,
    subHeading: "Performance losses",
    paragraph:
      "Performance loss refers to when an equipment is not running at its highest capacity. For instance, minor stops may occur due to temporary blockages in equipment. A lack of technical understanding among workers or operators are also common causes. ",
  },
  {
    id: 15,
    list: ["Minor stoppages"],
    paragraph:
      "Manufacturing equipment, however expensive or advanced, may experience small halts. It is normal for businesses to go through a short duration of reduced outputs. Also referred to as idling, they can be immediately resolved by a technician. Blockages in equipment, power failure, inefficient management, etc., are some of the common causes.",
  },
  {
    id: 16,
    paragraph:
      "Technical issues may arise from time to time in equipment. Delays to minute stoppages are common in manufacturing plants. But the issues can turn serious if not treated on time. Moreover, if these stops happen more often, maximizing OEE efficiency becomes an uphill task.  Data on equipment health enables businesses to predict future events with greater accuracy. For example, machinery may be shutting down with greater frequency than normal. Data visualization via dashboards highlights the frequency of machine idling or minor stops. They can take apt measures to provide maintenance to underperforming machinery. This is critical to ensure that the equipment is in good shape and does not affect productivity.",
  },
  {
    id: 17,
    list: ["Reduced cycles  "],
    paragraph:
      "One of the six big OEE losses in manufacturing is ‘reduced speed.’ This happens when the actual operating pace is slower than the design speed of the machine. Moreover, machine wear and tear are common instances that affect the cycle time of the equipment. Other reasons for reduced performance of the equipment also include poor planning, under design capacity, poor lubrication, and mismanagement by the operator. Measuring and improving OEE is not an easy task. Whenever a problem arises, it impacts efficiency, resulting in slow cycles. Insights and metrics via OEE intelligence empower manufacturers to make real-time adjustments.",
  },
  {
    id: 18,
    subHeading: "Quality loss",
    paragraph:
      "A necessary step to improving your OEE is always ensuring high-quality output. But sometimes the manufactured goods do not meet the quality standards or may need rework. Both rejected goods or items needing rework come under quality loss. ",
  },
  {
    id: 19,
    list: ["Quality defects"],
    paragraph:
      "It is not unusual that a few products turn out defective during production. Production rejections directly affects quality, hampering the OEE score of a manufacturing unit. Wrong equipment settings, errors in handling, or mismanagement by the operator are some of the common culprits. Defective items are a loss in revenue. Moreover, reworking those products costs extra money and is a time-consuming process. Data automation enables manufacturers to identify defects during the assembly line process. In this way, businesses can prevent a high output of defective products. Additionally, this means there would be a lesser possibility of material shortages.",
  },
  {
    id: 20,
    list: ["Startup defects/reduced yield"],
    paragraph:
      "Startup losses are common discrepancies in the manufacturing industry. While machines warm up to begin production, it is normal to produce startup waste until reaching the ideal production stage. Additionally, running industrial equipment requires formal training. Without the technical know-how of running the equipment, it can result in defective products and decreased output.",
  },
  {
    id: 21,
    paragraph:
      "Companies must always try to keep the startup rejects to a minimum. The lower the rejects, the lower the Total Cost of Operations. Businesses must be able to visualize data and measure the losses in real time. A dashboard highlighting the frequency of rejects can assist in identifying patterns. This helps manufacturers identify any recurring flaws in the production facilities.",
  },
  {
    id: 22,
    subHeading: "Accelerate productivity, expand business profits with Infoveave®",
    paragraph:
      "Manufacturers must make use of real-time data to assess equipment health over time. Unnecessary maintenance costs can be heavy on your wallet. Infoveave’s data automation and business intelligence offerings help you achieve your goals. Our new-age capabilities unlock a 360-degree view for holistic equipment monitoring. With Infoveave by your side stay ahead of the six big OEE losses with end-to-end automation of your production unit. Attain intelligent insights, recognize flaws better, and rise above the competition.",
  },
  {
    id: 23,
    paragraph:
      "Get ready-to-use, gleaned insights on your screen at all times. Customize our intelligent solution as per business requirements and receive real-time OEE computation.",
  },
];

const OEELossTree = () => {
  return <BlogsInnerPage heading={blogHeading} content={blogContent} />;
};

export default OEELossTree;
