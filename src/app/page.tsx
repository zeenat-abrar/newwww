// import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import { Metadata } from "next";
import { StaticImageData } from "next/image";
import Arc from "@/assets/homepage/infoveave-client-logos/Arc-360-logo.png";
import Catholic from "@/assets/homepage/infoveave-client-logos/Logo-CRS.webp";
import Feedback from "@/assets/homepage/infoveave-client-logos/Logo-Feedback.webp";
import Icap from "@/assets/homepage/infoveave-client-logos/Logo-ICAP.webp";
import NCDC from "@/assets/homepage/infoveave-client-logos/Logo-NCDC.webp";
import NationalHealth from "@/assets/homepage/infoveave-client-logos/Logo-NHM.webp";
import ProjectBalance from "@/assets/homepage/infoveave-client-logos/Logo-ProjectBalance.png";
import Quadgen from "@/assets/homepage/infoveave-client-logos/Logo-Quadgen.png";
import Kenye from "@/assets/homepage/infoveave-client-logos/Logo-RepublicKenya.webp";
import Sarathi from "@/assets/homepage/infoveave-client-logos/Logo-SDF.png";
import Toyota from "@/assets/homepage/infoveave-client-logos/Logo-Toyota.webp";
import Zipform from "@/assets/homepage/infoveave-client-logos/Logo-Zipform-Digital.png";
import NationalTree from "@/assets/homepage/infoveave-client-logos/Logo_NationalTree.webp";
import NsrclLogo from "@/assets/homepage/infoveave-client-logos/Logo_NSRCL.png";
import Opel from "@/assets/homepage/infoveave-client-logos/Opel-consulting-logo.png";
import Sharp from "@/assets/homepage/infoveave-client-logos/Sharp-Electronics-Singapore-Device-Business-1.png";
import Stanley from "@/assets/homepage/infoveave-client-logos/Stanley-black-and-decker-Logo.webp";
import Westbury from "@/assets/homepage/infoveave-client-logos/westbury-kommerece.png";
import SpiderDiagram from "@/assets/homepage/mega-image/Infoveave-Spider-diagram.webp";
import { ClientsMovingCards } from "@/components/blocks/company/client-carousel";
// import AlertBanner from "@/components/blocks/home/alert-banner";
// import { CircularCarouselSection } from "@/components/blocks/home/circular-carousal-section";
import { BlackAndWhiteClientLogos } from "@/components/blocks/home/black-and-white-client-logos";
import HomeHeroSection from "@/components/blocks/home/home-hero-section";
// import IndustriesSection from "@/components/blocks/home/industries-section";
import InsightsAndAutomationSection from "@/components/blocks/home/home-page-circular-swap";
import IndustriesSectionWithCircularCarousal from "@/components/blocks/home/industries-section-with-circular-carousal";
// import { ClientsMovingLogos } from "@/components/blocks/home/infinite-moving-logos";
import OnePlatform from "@/components/blocks/home/one-platform";
import { RevenueGrowthCounter } from "@/components/blocks/home/revenue-growth-section";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { Footer } from "@/components/ui/footer";

//MetaData Information

export const metadata: Metadata = {
  title: "Unified Data Platform: Data Automation & Decision Intelligence",
  description:
    "Transform your retail business with Infoveave® - a unified data platform that simplifies data automation, engineering, and decision intelligence. Book a demo today to start your digital transformation journey.",
  openGraph: {
    title: "Unified Data Platform: Data Automation & Decision Intelligence",
    description: "Elevate your data strategy with Infoveave, our unified platform for automation and decision intelligence. Get insights for decision-making.",
    siteName: "Infoveave",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png",
        width: 237,
        height: 212,
        type: "image/png",
      },
    ],
    url: "https://infoveave.com/",
  },
  twitter: {
    card: "summary_large_image",
    images: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&amp;ssl=1",
  },
};

//ALert banner section
// const alertSectionHeading = "Transform your retail business with data-driven insights.";
// const alertSectionLinkText = "Explore our solutions >";

//Hero section props
const HeroSectionHeading = "|Unified| Data Platform";
const HeroSectionDescription = "for Data Automation & Decision Intelligence";
const HeroSectionFirstButtonText = "SCHEDULE DEMO";
const heroSectionFirstButtonHref = "/book-a-demo";
const HeroSectionSecondButtonText = "CONTACT SALES";
const HeroSectionSecondButtonHref = "/about-us#contactus";

//Carousel-section props
const knowMoreButtonHref = "/unified-data-platform";

//clientmovinghead
const clientMovingCardsHeading = "What our |clients| say";

//Image section props
const onedescription =
  "With Infoveave®, it’s easy to collaborate, engineer, analyze, and automate your important tasks and projects all in one place. Plus, it’s a great way to streamline your processes and get things done more efficiently.";
const oneheading = "|One| platform, endless data opportunities";
const oneVideoSrc = "https://infoveave.com/wp-content/uploads/2024/10/Infoveave-product-video.mp4";

//Book a demo

const bookADemoHeading = "Start your digital transformation journey with Infoveave® today";
const bookADemoButtonText = "Book a demo";
const bookADemoHref = "/book-a-demo";

//Logo Slider props

// const logoSliderSectionDescription = "Our clients";
const logoSliderSectionHeading = "|Trusted| by";

// //logos 1
// const logos1 = [NationalTree, NsrclLogo, Arc, Stanley, Sharp, Zipform];

// //logos 2
// const logos2 = [Toyota, Sarathi, Kenye, Quadgen, ProjectBalance, NationalHealth];

// //logos3
// const logos3 = [NCDC, Icap, Feedback, Catholic, Opel, Westbury];

//clients black and white logo

const logos: { image: StaticImageData; className: string }[] = [
  { image: NationalTree, className: "" },
  { image: NsrclLogo, className: "" },
  { image: Arc, className: "" },
  { image: Stanley, className: "" },
  { image: Sharp, className: "" },
  { image: Zipform, className: "" },
  { image: Toyota, className: "" },
  { image: Sarathi, className: "h-7 xl:h-10" },
  { image: Kenye, className: "" },
  { image: Quadgen, className: "" },
  { image: ProjectBalance, className: "" },
  { image: NationalHealth, className: "" },
  { image: NCDC, className: "" },
  { image: Icap, className: "" },
  { image: Feedback, className: "" },
  { image: Catholic, className: "" },
  { image: Opel, className: "xl:w-[90%]" },
  { image: Westbury, className: "" },
];

//industries section props
const heading = "Industries";
const description =
  "Infoveave® makes it simple to collect, automate, and analyze data and be data-driven. With Infoveave®, gain deeper insights into your business operations and make better data-driven decisions.";
const rightHeading = "Moving the needle on OEE";
const rightDescription = "Learn how a leading machine tool manufacturing company uses Infoveave to keep track of their factory operations.";
const customerStoryButtonHref = "/how-a-leading-manufacturing-plant-improved-their-oee";
const industryButtonHref = "/industry-solutions";

export default function Home() {
  return (
    <section
    // style={{
    //   backgroundImage: `url(${BackgroundGradient.src})`,
    //   backgroundSize: "cover",
    //   backgroundAttachment: "fixed",
    // }}
    >
      {/* <AlertBanner heading={alertSectionHeading} linkText={alertSectionLinkText} /> */}
      <HomeHeroSection
        heading={HeroSectionHeading}
        description={HeroSectionDescription}
        firstButtonText={HeroSectionFirstButtonText}
        firstButtonHref={heroSectionFirstButtonHref}
        secondButtonText={HeroSectionSecondButtonText}
        secondButtonHref={HeroSectionSecondButtonHref}
        imageSrc={SpiderDiagram}
      />
      {/* <CircularCarouselSection knowMoreButtonHref={knowMoreButtonHref} /> */}
      <InsightsAndAutomationSection
        knowMoreButtonHref={knowMoreButtonHref}
        rightdescription={rightDescription}
        rightheading={rightHeading}
        customerStoryButtonHref={customerStoryButtonHref}
      />
      <OnePlatform description={onedescription} heading={oneheading} videoSrc={oneVideoSrc} />
      <RevenueGrowthCounter />
      <BlackAndWhiteClientLogos heading={logoSliderSectionHeading} logos={logos} />
      {/* <ClientsMovingLogos heading={logoSliderSectionHeading} logos1={logos1} logos2={logos2} logos3={logos3} /> */}
      <section className="pb-8 sm:pb-20">
        <ClientsMovingCards heading={clientMovingCardsHeading} />
      </section>
      <BookADemoSection heading={bookADemoHeading} buttonText={bookADemoButtonText} href={bookADemoHref} />
      <section className="pb-20">
        {/* <IndustriesSection
          description={description}
          heading={heading}
          rightdescription={rightDescription}
          rightheading={rightHeading}
          customerStoryButtonHref={customerStoryButtonHref}
          industryButtonHref={industryButtonHref}
        /> */}
        <IndustriesSectionWithCircularCarousal
          description={description}
          heading={heading}
          rightdescription={rightDescription}
          rightheading={rightHeading}
          customerStoryButtonHref={customerStoryButtonHref}
          industryButtonHref={industryButtonHref}
        />
      </section>
      <Footer />
    </section>
  );
}
