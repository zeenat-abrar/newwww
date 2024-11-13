import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import InfoveaveDataDrivenAppsImages from "@/assets/data-driven-apps/mega-image/Infoveave-data-driven-app.jpg";
import NgaugeForm from "@/assets/data-driven-apps/mega-image/Nguage-forms.png";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import NguageImageSection from "@/components/blocks/platforms/data-driven-apps/NguageImageSection";
import { GradientTextCardSection } from "@/components/blocks/platforms/gradient-cards";
import ImageSection from "@/components/blocks/platforms/image-section";
import PlatformPageHeroSection from "@/components/blocks/platforms/platform-page-hero-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("last-mile-data-collection");
}

//Hero Section Props
const platformPageHeroSectionHeading = "Simplifying your |data collection|";
const platformPageHeroSectionDescription = "Easily collect the last mile data and get instant insights as the data comes in.";
const platformPageHeroSectionBulletPoints = [
  "Effortlessly capture last-mile data and access real-time insights.",
  "Set up and configure data collection with ease.",
  "Manage your master data with NGauge.",
];
const platformPageHeroSectionFirstButtonText = "Book a demo";
const platformPageHeroSectionFirstButtonHref = "/book-a-demo";
const platformPageHeroSectionSecondButtonText = "Contact sales";
const platformPageHeroSectionSecondButtonHref = "/about-us#contactus";
const platformPageHeroSectionVideoSrc = "https://infoveave.com//srv/htdocs/wp-content/uploads/2022/10/NGuage-forms-1.mp4";

// Non Gradient Cards Props
const nonGradientCardsHeading = "Smarter data for accurate decisions";

const nonGradientCardsDescription = "";

const nonGradientCardsContent = [
  {
    id: 1,
    title: "Trigger Job Executions",
    description: "Tigger the related jobs directly from the NGauge forms & reduce complexity.",
  },
  {
    id: 2,
    title: "In-depth modification",
    description: "View & update data from the very microscopic level & improve quality.",
  },
  {
    id: 3,
    title: "Field validation",
    description: "Automate data validation as new data is added or updated in the NGauge form.",
  },
  {
    id: 4,
    title: "Deletion Control",
    description: "Give ability to delete individual column fields based on user job role.",
  },
];

//Contact Sales

const caseStudyHeading = "Convert your excel-based workflow to an online one";
const caseStudyButtonText = "Contact sales";
const caseStudyButtonHref = "/about-us#contactus";

// Grid Cards Section
const gridCardHeading = "Effectively manage your master data";
const gridCardDescription =
  "Use NGuage forms to implement master data management (MDM) in your company to get a reliable, up-to-date picture of the data for better reporting, decision-making and process effectiveness";

const projects = [
  {
    title: "Increase effectiveness",
    description: "Boost your business effectiveness with a centralized master data and a zero chance of data duplications.",
  },
  {
    title: "Economize resources",
    description: "Save your time and resources with fully automated & well maintained master data management.",
  },
  {
    title: "Establish Hierarchies",
    description: "Create multiple master datasource & link them together in a hierarchy, as needed, using NGauge forms.",
  },
  {
    title: "Strengthen business agility",
    description: "Manage, streamline & analyze larger volumes of data more efficiently and effortlessly for quick analysis.",
  },
  {
    title: "Enhance data Optimization",
    description: "Improve the data quality with accurate, and consistent data across all systems and applications.",
  },
  {
    title: "Inspect & Monitor Data Inputs",
    description: "Track and monitor your system or process performance effectively with continuous data monitoring.",
  },
];

//Quick Demo

const quickDemoHeading = "Learn how a fortune 500 company enhanced their shopfloor visibility with NGauge forms";
const quickDemoButtonText = "Case study";
const quickDemoButtonHref = "/digitizing-shopfloor-analytics-with-unified-data-platform";

//Ngauge form props
const NgaugeFormHeading = "Customizable |Data Apps|";
const NgaugeFormImage = NgaugeForm;
const NgaugeFormBulletPoints = [
  "Design fully customizable forms tailored to your specific business needs.",
  "Link NGauge forms to your business applications for seamless data collection, analysis, tracking & updates.",
  "Easily embed data collection into your existing workflows for a smooth and streamlined experience.",
  "Customize forms with logos, branding, and visual elements to ensure they align with your business identity.",
];

const LastMileDataCollection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <PlatformPageHeroSection
        heading={platformPageHeroSectionHeading}
        description={platformPageHeroSectionDescription}
        bulletPoints={platformPageHeroSectionBulletPoints}
        firstButtonText={platformPageHeroSectionFirstButtonText}
        firstButtonHref={platformPageHeroSectionFirstButtonHref}
        secondButtonText={platformPageHeroSectionSecondButtonText}
        secondButtonHref={platformPageHeroSectionSecondButtonHref}
        videoSrc={platformPageHeroSectionVideoSrc}
      />
      <GradientTextCardSection
        cards={nonGradientCardsContent}
        numberOfCardsInARow={4}
        gradientBackground={true}
        heading={nonGradientCardsHeading}
        description={nonGradientCardsDescription}
        cardBackgroundClassName="bg-ivindigo-500 h-[275px]"
      />
      <NguageImageSection heading={NgaugeFormHeading} bulletPoints={NgaugeFormBulletPoints} imageSrc={NgaugeFormImage} />
      <BookADemoSection heading={caseStudyHeading} buttonText={caseStudyButtonText} href={caseStudyButtonHref} />
      <ImageSection imageSrc={InfoveaveDataDrivenAppsImages} alt="Infoveave-smarter data image" mainBackground="bg-white" />
      <BookADemoSection heading={quickDemoHeading} buttonText={quickDemoButtonText} href={quickDemoButtonHref} />
      <GridCardsSection projects={projects} heading={gridCardHeading} description={gridCardDescription} />
      {/* <BookADemoSection heading={talkToOurExpertsHeading} buttonText={talkToOurExpertsButtonText} href={talkToOurExpertsButtonHref} /> */}
      <Footer />
    </section>
  );
};

export default LastMileDataCollection;
