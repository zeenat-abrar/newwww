import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import DataGovernance from "@/assets/data-governance/herosection/datagovernance.webp";
import { gridButtonType, GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import IndustriesPageHeroSection from "@/components/blocks/industries/industry-page-hero-section";
import CertificatesCardSection from "@/components/blocks/platforms/certificate-cards";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("data-governance");
}

//Hero Section Props
const retailHeroSectionhHeading = "Your Data, Our Priority";
const retailHeroSectionDescription = "Building a Foundation of Data Governance";
const subDescription =
  "At Infoveave, we understand the importance of data governance in today’s digital landscape. Through stringent measures, industry best practices, and adherence to internationally recognized standards, we ensure that your data remains protected.";
const dataGovernanceHeroSectionButtons = [
  {
    text: "Get started",
    href: "/sign-up",
  },
  {
    text: "Contact sales",
    href: "/about-us#contactus",
  },
];
const retailHeroSectionhImageSrc = DataGovernance;

// Grid Cards Section
const gridCardHeading = "Reliable Data, Better Decisions";

const gridCardHeadingButton: gridButtonType = {
  text: "Know more",
  href: "/data-security",
};

const projects = [
  {
    title: "Data Quality",
    description:
      "Ensuring high data quality is critical for accurate and reliable business insights. At Infoveave, we prioritize data accuracy and completeness to enhance informed decision-making and strategic outcomes.",
  },
  {
    title: "Data Availability",
    description:
      "Continuous data availability allows seamless access to critical information whenever needed. This enables timely & effective decision-making, keeping your business operations running smoothly.",
  },
  {
    title: "Data Usability",
    description:
      "We make information easy to understand and actionable. By transforming complex data into clear, user-friendly insights, we empower our users to make informed decisions quickly and efficiently.",
  },
  {
    title: "Data Integrity",
    description:
      "We uphold data integrity to ensure information is accurate, consistent, & reliable across all platforms. We maintain rigorous standards for data validation & consistency.",
  },
  {
    title: "Data Security",
    description:
      "Define access permissions at the row level. Different users or groups can only view or modify specific rows of data based on their authorization level. Ensure that sensitive information is protected.",
  },
  {
    title: "Data Lineage",
    description:
      "Trace the journey of your data from its source to its current state. Understand how data flows through various systems, processes, & transformations, enabling better data governance & compliance",
  },
  {
    title: "Data Catalog",
    description:
      "Our data catalog organizes & indexes data assets, making it easy for users to discover and access information. This enhances data governance & promotes efficient data utilization across the organization.",
  },
];

// Special cards
const cards = [
  {
    id: 1,
    title: "ISO 27001 Certified",
    content:
      "We adhere to the rigorous ISO 27001 international standard for ISMS. This certification demonstrates our commitment to a systematic approach for managing information security risks.",
  },
  {
    id: 2,
    title: "SOC2 Compliant",
    content:
      "Independent verification of our security controls & compliance with industry best practices. We ensures the platform meets the strictest security requirements for data storage & processing.",
  },
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
      <IndustriesPageHeroSection
        heading={retailHeroSectionhHeading}
        description={retailHeroSectionDescription}
        buttons={dataGovernanceHeroSectionButtons}
        imageSrc={retailHeroSectionhImageSrc}
        alt="Infoveave- data governance image"
        subDescription={subDescription}
        imageClassName="mt-[-30px] xl:mt-[-100px] mb-[-70px]"
      />
      <GridCardsSection projects={projects} heading={gridCardHeading} gradientBackground={true} buttonPrimaryWhite={gridCardHeadingButton} />
      <div className="pb-20">
        <CertificatesCardSection cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default LastMileDataCollection;
