import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import DataSecurityHeroSectionImage from "@/assets/data-security/data-security-hero-section-image.webp";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import IndustriesPageHeroSection from "@/components/blocks/industries/industry-page-hero-section";
import CertificatesCardSection from "@/components/blocks/platforms/certificate-cards";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("data-security");
}

//Hero Section Props
const retailHeroSectionHeading = "Unlock the Power of Data. |Without Fear|";
const retailHeroSectionDescription = "Infoveave secures your data while unlocking its potential for informed decision-making";
const subDescription =
  "We understand the critical importance of data security for your business intelligence operations. Our comprehensive approach ensures that your BI data remains safe and secure at all times.";

const dataSecurityHeroSectionButtons = [{ text: "Contact sales", href: "/about-us#contactus" }];

// Grid Cards Section
const gridCardHeading = "Comprehensive Protection for your organization";

const projects = [
  {
    title: "Custom user roles",
    description:
      "Create custom user roles tailored to the unique needs of your organization. This allows you to define specific sets of permissions & access rights based on roles, departments, or functions.",
  },
  {
    title: "Row-Level Security",
    description:
      "Define access permissions at the row level. Different users or groups can only view or modify specific rows of data based on their authorization level. Ensure that sensitive information is protected.",
  },
  {
    title: "Encryption",
    description:
      "We employ data encryption to ensure your information is secure both in transit & at rest. Ensure your data stays secure & uncompromised from unauthorized access & breaches.",
  },
  {
    title: "Data Masking",
    description:
      "Masking sensitive information, allows you to work with realistic data sets without exposing confidential details. This ensures privacy & security, enabling safe data processing & analysis.",
  },
  {
    title: "Data Retention",
    description:
      "We enforce strict data retention policies, ensuring data is securely stored only for necessary periods. This compliance with regulations optimizes storage and protects sensitive information.",
  },
  {
    title: "Data Resiliency",
    description:
      "We ensure continuous data access & reliability even in the face of disruptions. Our systems safeguard against data loss, maintaining seamless business operations.",
  },
];

// Grid Non - gradient Cards Section
const gridNonGradientCardHeading = "Secure Access and Identity Management";

const projectsNonGradient = [
  {
    title: "Single Sign On",
    description: "Facilitate seamless access to the platform using existing credentials through SSO, powered by SAML & OAuth2.",
  },
  {
    title: "MFA",
    description: "Enhance security with MFA, requiring users to provide multiple authentication factors for access using Okta & Entra.",
  },
  {
    title: "Logging & audits",
    description: "Get real-time visibility into user activities, enhancing transparency and facilitating compliance reporting.",
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
        heading={retailHeroSectionHeading}
        description={retailHeroSectionDescription}
        buttons={dataSecurityHeroSectionButtons}
        imageSrc={DataSecurityHeroSectionImage}
        subDescription={subDescription}
        alt="Infoveave-data-security"
      />
      <GridCardsSection projects={projects} heading={gridCardHeading} gradientBackground={true} />
      <section className="mb-[-80px]">
        <GridCardsSection projects={projectsNonGradient} heading={gridNonGradientCardHeading} gradientBackground={false} />
      </section>
      <div className="pb-20">
        <CertificatesCardSection cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default LastMileDataCollection;
