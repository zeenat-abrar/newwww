import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import DashboardGalleryInfoboardSection from "@/components/blocks/dashboard-gallery/reverse-section";
import BlogSection from "@/components/blocks/industries/blog-section";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import PlatformPageHeroSection from "@/components/blocks/platforms/platform-page-hero-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("infoveave-dashboard-gallery");
}

//Hero Section Props
const platformPageHeroSectionHeading = "|Explore| the depth of your data";
const platformPageHeroSectionDescription =
  "Infoveave dashboards combine data storytelling and automation with complete design flexibility. You can accomplish tasks in a dashboard with improved flexibility and innovative functionality. Also, perfectly incorporate or construct Infoveave dashboards in to your business applications.";
const platformPageHeroSectionBulletPoints = [
  "Make better and faster decisions possible.",
  "Communicate complex data relationships and data-driven insights.",
  "Recognize patterns and trends in a dataset.",
];
const platformPageHeroSectionFirstButtonText = "Get started";
const platformPageHeroSectionFirstButtonHref = "/sign-up";
const platformPageHeroSectionSecondButtonText = "Contact Sales";
const platformPageHeroSectionSecondButtonHref = "/about-us#contactus";
const platformPageHeroSectionVideoSrc = "https://infoveave.com//srv/htdocs/wp-content/uploads/2023/01/Infoveave-Dashboard-Gallery.mp4";

//dashboard section props
const dashboardHeading = "Drive |continuous| improvement with our OEE dashboard";
const dashboardDescription =
  "Track the OEE key performance indicators such as availability, performance and quality effectively. We can help you identify opportunities for increased efficiency and reduced downtime. No matter your industry, our dashboard can help you make informed decisions. Use them to drive OEE intelligence successfully. With it’s intuitive interface and easy-to-use features, our OEE Dashboard is the perfect solution for you. Start boosting productivity today with our powerful and reliable tool.";
const dashboardImage = "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-OEE-executive-dasboard.png?w=1366&ssl=1";

//sales section props second
const salesHeading = "|Know| your sales with our executive dashboard";
const salesDescription =
  "With real-time data and customizable metrics, get a better view of your sales performance. Easily track the indicators like sales volume, conversion rates and customer satisfaction. We can can help you identify strengths and areas for improvement to drive growth. Our dashboard will help you enhance your sales strategy, and streamline the process.";
const salesImage = "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Sales-Summary.png?fit=1024%2C469&ssl=1";

//revenue section props
const revenueHeading = "|Maximize| revenue with our analysis dashboard";
const revenueDescription =
  "Infoveave’s revenue Analysis Dashboard helps you increase revenue and make better decisions. Track key performance indicators like sales volume and profitability. Identify new opportunities for growth and cost savings & is Suitable for any industry. Always make informed decisions with Infoveave dashboards.";
const revenueImage = "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Revenue-analysis-dashboard.png?w=1366&ssl=1";

//sales revenue section props
const salesRevenueHeading = "|Optimize| sales and drive revenue with our dashboard";
const salesRevenueDescription =
  "Whether you operate in B2B or B2C, our Sales Revenue Dashboard is the perfect solution for anyone looking to optimize their sales and achieve their business goals. With its user-friendly interface and customizable performance metrics, our dashboard is easy to use and reliable. Start optimizing your sales today with our powerful tool.";
const salesRevenueImage = "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Sales-Dashboard.png?fit=1024%2C469&ssl=1";

//book a demo props
const bookADemoHeading = "Elevate your analytics game with Infoveave® dashboards";
const bookADemoButtonText = "Book demo";

export default function DashboardGallery() {
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
      <DashboardGalleryInfoboardSection
        heading={dashboardHeading}
        description={dashboardDescription}
        imgSrc={dashboardImage}
        firstButtonText="OEE executive dashboard"
        descriptionClassName="font-normal"
      />
      <DashboardGalleryInfoboardSection
        heading={salesHeading}
        description={salesDescription}
        imgSrc={salesImage}
        firstButtonText="Sales executive summary dashboard"
        descriptionClassName="font-normal"
        flexClassName="md:flex-row-reverse"
      />
      <DashboardGalleryInfoboardSection
        heading={revenueHeading}
        description={revenueDescription}
        imgSrc={revenueImage}
        firstButtonText="Revenue analysis dashboard"
        descriptionClassName="font-normal"
      />
      <DashboardGalleryInfoboardSection
        heading={salesRevenueHeading}
        description={salesRevenueDescription}
        imgSrc={salesRevenueImage}
        firstButtonText="Sales revenue dashboard"
        descriptionClassName="font-normal"
        flexClassName="md:flex-row-reverse"
      />

      <BookADemoSection heading={bookADemoHeading} buttonText={bookADemoButtonText} href="/book-a-demo" />
      <BlogSection />
      <Footer />
    </section>
  );
}
