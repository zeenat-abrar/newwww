import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import { AwardsCardsType } from "@/components/blocks/awards-and-updates/awards-card-hover-effect";
import { AwardsGridCardsSection } from "@/components/blocks/awards-and-updates/awards-grid-card";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import { Footer } from "@/components/ui/footer";
const gridCardHeading = "Learn about what's latest at Infoveave";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("infoveave-new-and-updates");
}

const projects = [
  {
    title: "Noesys Software Pvt. Ltd. shifts to new office",
    description: "Noesys Software Pvt. Ltd. takes up a new office The management of Noesys Software Pvt. Ltd. would soon leave its current location",
  },
  {
    title: "Noesys Joins the Indo-Australian Chamber of Commerce",
    description:
      "Noesys Joins the Indo-Australian Chamber of Commerce and Celebrates Director Smitha Bopanna’s Prestigious Award Noesys Software Pvt. Ltd. is delighted to announce",
  },
  {
    title: "Nortak and Noesys Software Pvt. Ltd. signs partnership agreement",
    description:
      "Nortak signed a partnership agreement with Noesys Software for the Infoveave Visual Analytics Studio. Nortak Software Ltd. is a Canadian based private",
  },
  {
    title: "Infoveave collaborates with Project Balance & Catholic Relief Services (CRS)",
    description:
      "Project balance is powered by Infoveave’s Advanced Analytics, to help CRS create an advanced risk management system. Ethiopia Joint Emergency Operation Program",
  },
  {
    title: "Infoveave builds dashboards for ICAP to monitor HIV care & treatment in Kenya.",
    description:
      "Infoveave provides dashboard for HIV patient level data visualization to enable quick and simple analysis President’s Emergency Plan for AIDS Relief (PEPFAR)ICAP",
  },
  {
    title: "Noesys announces the launch of Infoveave V8 – Unified Data Platform",
    description:
      "Changing Data Dynamics: Infoveave V8 Unleashes Transformative Features for Data-Driven Success In the relentless pursuit of data-driven success, Infoveave V8 takes center",
  },
];

//awards section props
const awardsHeading = "|Awards| and recognitions";

const awardsCards: AwardsCardsType[] = [
  {
    title: "Noesys Software Achieves Vendor of the Quarter by ENGIE - 2024",
    description:
      "We are thrilled and honored to announce that Noesys Software Pvt. Ltd. has been named Vendor of the Quarter by ENGIE. We continue to innovate, grow, and create value together!",
  },
  {
    title: "Noesys Software Achieves Second Consecutive Gold at the FKCCI Awards 2023",
    description:
      "Noesys Software Achieves Second Consecutive Gold at the FKCCI Awards 2023 Best services exporter award (IT) – Gold Noesys Software Pvt. Ltd proudly announces",
  },
  {
    title: "Noesys Software Pvt. Ltd. Wins the FinTech 2022 Challenge",
    description:
      "Noesys received recognition for offering the best data intelligence platform. Use-case: data intelligence platformThe 10000 Start Ups, a NASSCOM incubator hub program",
  },
  {
    title: "Noesys Software Pvt. Ltd. wins the FKCCI 2022 awards (IT Service Exporter)",
    description:
      "Noesys Software Pvt. Ltd. received the 17th Edition of the FKCCI Export Excellence Awards-2022. Best services exported award (IT) – Gold Federation of",
  },
  {
    title: "Infoveave Wins 2022 Healthcare Innovation Challenge (HIC)",
    description:
      "Infoveave receives recognition from NASSCOM in two categories for its contributions to healthcare innovation. Automated Credit Payment Settlement (ACS)Integration of multiple data",
  },
  {
    title: "Infoveave®, in the 19th Edition of NASSCOM Product Conclave",
    description:
      "Noesys exhibits Infoveave® at NASSCOM Product Conclave 19th Edition NASSCOM Product Connect is a platform that fosters, nurtures, and promotes Indian-based software",
  },
];

const MediaRoomPage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <AwardsGridCardsSection heading={awardsHeading} projects={awardsCards} />
      {/* <BeTheFuture heading={Bethefutureheading} /> */}
      <div className="mt-[-100px]">
        <GridCardsSection heading={gridCardHeading} projects={projects} />
      </div>
      <Footer />
    </section>
  );
};

export default MediaRoomPage;
