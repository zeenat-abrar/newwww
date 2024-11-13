import Alert from "@/assets/actionable-insights/alert.svg";
import Board from "@/assets/actionable-insights/board.svg";
import Chart from "@/assets/actionable-insights/charts.svg";
import Jobs from "@/assets/actionable-insights/job.svg";
import Report from "@/assets/actionable-insights/report.svg";
import Target from "@/assets/actionable-insights/target.svg";
import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import ActionalInsights from "@/assets/data-driven-apps/mega-image/Infoveave-NGauge.webp";
import { ActionableInsightsCounter } from "@/components/blocks/actionable-insights/counter-section";
import IframeSection from "@/components/blocks/actionable-insights/iframe-section";
import TurningPattern from "@/components/blocks/actionable-insights/turning-patterns-section";
import BlogSection from "@/components/blocks/industries/blog-section";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import ImageSection from "@/components/blocks/platforms/image-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("actionable-insights");
}

//hero section props
const heading = "Empowering business with actionable insights";
const subheading =
  "Get advanced data analytics and business intelligence solutions with Infoveave®. Our platform offers customizable benchmarks and automated notifications, freeing up your team to focus on data analysis and insights for business growth. Get actionable insights from your data to help your decision makers take actions faster.";
const description = "Transforming your business data into actionable insights with automated visualizations and alerts.";
const iframe = "https://templates.infoveave.net/v8/View/dGVtcGxhdGVzfGQyNWFhNw==";

//grid card section props
const projects = [
  {
    title: "Board expressions",
    description:
      "Quickly identify successes and critical areas by setting up custom visualizations depending on targets and thresholds. enhance data readability and aid in more efficient decision-making.",
    link: "https://stripe.com",
    imageUrl: Board,
  },
  {
    title: "Sub views",
    description:
      "Get detailed insights into specific data segments & enhance overall data comprehension by breaking down complex information into manageable parts. Drill down without cluttering the main view.",
    link: "https://netflix.com",
    imageUrl: Chart,
  },
  {
    title: "Reports",
    description:
      "Create customized reports in Infoveave using SQL queries or MS Office templates. Create custom reports on PowerPoint, Excel, & Word using Infoveave's integrations.",
    link: "https://google.com",
    imageUrl: Report,
  },
  {
    title: "Jobs & Tasks",
    description:
      "Create tasks and jobs to automate all business processes and reduce manual effort and minimizing human error. Free up resources for more strategic activities improve productivity and decrease costs.",
    link: "https://google.com",
    imageUrl: Jobs,
  },
  {
    title: "Targets & Thresholds",
    description:
      "Set alerts to trigger notifications for critical events, edit target and threshold configurations to fine-tune your analysis. Add additional information for better context & share valuable insights with relevant people.",
    link: "https://google.com",
    imageUrl: Target,
  },
  {
    title: "Alerts & Notifications",
    description:
      "Set alerts for the targets and thresholds you have created based on datasource and its dimensions. Add a task or jobs, which will be executed when target and thresholds meets the specified condition.",
    link: "https://google.com",
    imageUrl: Alert,
  },
];
const gridCardHeading = "Designer dashboards with Infoveave®";
const gridCardDescription =
  "Create intuitive and visually appealing dashboards & combine powerful analytics with sleek, customizable interfaces. Dive into our feature-rich environment and discover how you can effortlessly create beautiful, informative dashboards that drive actionable insights and enhance decision-making.";

//highlight section props
const bookADemoHeading = "Actionable Insights for competitive pricing intelligence";
const bookADemoButtonText = "Customer stories";

export default function ActionableInsights() {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <IframeSection description={description} heading={heading} subDescription={subheading} iframe={iframe} firstButtonText="Contact sales" />
      <ActionableInsightsCounter />
      <GridCardsSection projects={projects} heading={gridCardHeading} description={gridCardDescription} />
      <section className="-mt-20">
        <TurningPattern heading="Turning |patterns| into insights" />
      </section>
      <ImageSection imageSrc={ActionalInsights} alt="Infoveave-data-driven-insights" />
      <BookADemoSection heading={bookADemoHeading} buttonText={bookADemoButtonText} href="/book-a-demo" />
      <BlogSection />
      <Footer />
    </section>
  );
}
