import { Metadata } from "next";
import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import DataQualityHeroSectionImage from "@/assets/data-quality/data-quality-hero-section-image.jpg";
import DataQualityImage from "@/assets/data-quality/data-quality.jpg";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import IndustriesPageHeroSection from "@/components/blocks/industries/industry-page-hero-section";
import NguageImageSection from "@/components/blocks/platforms/data-driven-apps/NguageImageSection";
import { Footer } from "@/components/ui/footer";

//MetaData Information

export const metadata: Metadata = {
  title: "Data Quality in Infoveave",
  description: "Learn how we ensure that your data is secure when you use Infoveave for your Business Intelligence process.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Data Quality in Infoveave",
    description: "Learn how we ensure that your data is secure when you use Infoveave for your Business Intelligence process.",
    url: "https://infoveave.com/data-governance/",
    siteName: "Infoveave",
    images: [
      {
        url: "https://infoveave.com/wp-content/uploads/2024/05/22111200_6538656-1024x1024.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Est. reading time",
  },
};

//Hero Section Props
const dataQualityHeroSectionHeading = "Ensure Data Quality from Source to Insight";
const dataQualityHeroSectionSubDescription =
  "Data quality is the foundation of reliable insights and efficient operations. At Infoveave, we prioritize robust data quality, helping organizations harness accurate, timely, and reliable data for impactful decision-making.";
const dataQualityHeroSectionButtons = [
  {
    text: "Get started",
    href: "/sign-up",
  },
  {
    text: "Contact sales",
    href: "/about-us#contactus",
  },
];
const retailHeroSectionhImageSrc = DataQualityHeroSectionImage;

// Grid Cards Section
const gridCardHeading = "Infoveave’s Approach to Data Quality";

const projects = [
  {
    title: "Accuracy",
    description: "We safeguard data integrity, so every data point reflects real-world truth, essential for dependable analytics and insights.",
  },
  {
    title: "Consistency",
    description: "Infoveave harmonizes data across sources, enabling seamless integration and eliminating confusion from discrepancies.",
  },
  {
    title: "Relevancy",
    description: "We focus on relevant data to streamline processes, ensuring every data point directly supports your strategic goals.",
  },
  {
    title: "Auditability",
    description: "With Infoveave, data transparency is paramount, providing detailed records of access, usage, and changes to ensure trust and accountability.",
  },
  {
    title: "Completeness",
    description: "Our platform actively addresses data gaps, so crucial information is always at hand, supporting comprehensive analyses.",
  },
  {
    title: "Timeliness",
    description: "Infoveave accelerates data availability, giving your teams access to fresh, real-time information when it matters most.",
  },
  {
    title: "Validity",
    description: "We enforce essential data rules to maintain high standards, making data consistently reliable for both internal and external use.",
  },
  {
    title: "Uniqueness",
    description: "Infoveave eliminates redundancies, preserving the most accurate version of each data record, so you can work with the clearest view.",
  },
];

//Ngauge form props
const dataQualityHeading = "|Building Trustworthy| Data with Infoveave";
const dataQualityDescription = "Explore how Infoveave  upholds the highest standards of data quality.";
const dataQualityImage = DataQualityImage;

const DataQuality = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <IndustriesPageHeroSection
        heading={dataQualityHeroSectionHeading}
        buttons={dataQualityHeroSectionButtons}
        imageSrc={retailHeroSectionhImageSrc}
        alt="Infoveave- data governance image"
        subDescription={dataQualityHeroSectionSubDescription}
        imageClassName="xl:mt-[-50px] xl:mb-[-30px] xl:w-[75%]"
      />
      <GridCardsSection projects={projects} heading={gridCardHeading} gradientBackground={true} />
      <div className="pb-20">
        <NguageImageSection heading={dataQualityHeading} description={dataQualityDescription} imageSrc={dataQualityImage} />
      </div>
      <Footer />
    </section>
  );
};

export default DataQuality;
