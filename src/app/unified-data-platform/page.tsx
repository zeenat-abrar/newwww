import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import DataGovernanceAndSecurityImage from "@/assets/unified-data-platform/data-economy-isometric.webp";
import NewPillars from "@/assets/unified-data-platform/New4Pillars-Titles-1.webp";
import OnePlatform from "@/components/blocks/home/one-platform";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import IndustriesPageHeroSection from "@/components/blocks/industries/industry-page-hero-section";
import NguageImageSection from "@/components/blocks/platforms/data-driven-apps/NguageImageSection";
import { TabsSection } from "@/components/blocks/unified-data-platform-page/tabs-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("unified-data-platform");
}

//Hero Section Props
const unifiedDataHeroSectionHeading = "Unified Data Platform";
const unifiedDataHeroSectionDescription =
  "As enterprises focus on mission-critical use cases they are beset with numerous issues involving insurmountable data quality and data governance arising from the complexity of working with these multiple sets of tools.";
const unifiedDataHeroSectionButtons = [
  { text: "Get Started", href: "/sign-up" },
  { text: "Contact sales", href: "/about-us#contactus" },
];
const unifiedDataHeroSectionhImageSrc = NewPillars;
// grid card section props
const gridCardHeading = "Infoveave - |Unified Data Platform| Benefits";
const description = "Integrate all your data sources, map them to your KPIs, analyze your data and visualize insights.";
const projects = [
  {
    title: "Unified view of data",
    description:
      "The Infoveave UDP offers a unified view across data silos by providing a cohesive, stable environment and meaningful data for consuming applications and business services in one place.",
  },
  {
    title: "informed decision-making",
    description:
      "Empowers decision makers with one-stop location to perform a rapid SWOT analysis to visually exploring and understanding complex data patterns and trends on the state of their business and make winning decisions.",
  },
  {
    title: "Seamless collaboration",
    description:
      "Interactive dashboards with ability to share, annotate and alert users enables enterprise teams across departments to share and collaborate on critical insights, monitor business changes and make informed decisions.",
  },
  {
    title: "Built-in data governance",
    description:
      "Easy to configure & manage user permissions & govern user access to both data & reports. Manage reports, dashboards, monitor usage, & certify changes.",
  },
  {
    title: "Faster Time-to-Insight",
    description:
      "Data discovery tools for users to find & explore relevant data. Supports data visualization, for users to understand & interpret complex data sets, to explore patterns, trends, & insights in the data.",
  },
  {
    title: "Reduced TCO & rapid ROI",
    description:
      "Cost savings in terms of software licenses, maintenance, & training. Minimize redundancy & duplication of efforts, reducing costs associated with managing multiple data silos.",
  },
];
//one platform props
const unifiedheading = "One platform, endless data opportunities";
const unifieddescription =
  "With Infoveave®, it’s easy to collaborate, engineer, analyze, and automate your important tasks and projects all in one place. Plus, it’s a great way to streamline your processes and get things done more efficiently.";

//megasection props
const megasectionHeading = "Data governance & security";
const megasectionDescription = [
  "Manage & organize metadata across the entire data stack to ensure data quality & compliance.",
  "Access Control & Security Measures",
  "Implement security protocols to protect sensitive data & control access",
  "Unified Data Quality with centralized tools to ensure data accuracy, consistency, & reliability",
  "Visualizations highlight data quality issues, to address & improve the quality of the data within the UDP",
  "Provide full, end-to-end visibility into the health & performance of each data layer",
  "Provide a single point of access to all the data assets of the enterprise including files, databases, and more with a unified data catalog",
  "Master Data Management to manage and centrally consolidate critical data entities (master data)",
];
const megasectionImage = DataGovernanceAndSecurityImage;

//highlight section props
const readcaseHeading = "Learn how a fortune 500 company revolutionized their shop floor analytics with Infoveave";
const readcaseButtonText = "Read case study";

export default function UnifiedDataPage() {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <IndustriesPageHeroSection
        heading={unifiedDataHeroSectionHeading}
        description={unifiedDataHeroSectionDescription}
        descriptionClassName="font-normal"
        buttons={unifiedDataHeroSectionButtons}
        imageSrc={unifiedDataHeroSectionhImageSrc}
        alt="Infoveave- unified data image"
        imageClassName="xl:mt-[-50px]"
      />
      <section className="lg:mt-[-40px]">
        <OnePlatform description={unifieddescription} heading={unifiedheading} />
      </section>
      <TabsSection />
      <NguageImageSection heading={megasectionHeading} bulletPoints={megasectionDescription} imageSrc={megasectionImage} parentDivClassName="bg-white" />
      <BookADemoSection heading={readcaseHeading} buttonText={readcaseButtonText} href="/book-a-demo" />
      <GridCardsSection projects={projects} heading={gridCardHeading} description={description} />
      <Footer />
    </section>
  );
}
