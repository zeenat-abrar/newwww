"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ExportExcellenceAward2023 from "@/assets/awards/export-excellence-award-2023.webp";
import FKCCI2022 from "@/assets/awards/FKCCI-2022.webp";
import fkcci2023 from "@/assets/awards/fkcci-2023.webp";
import FKCCIAward2022 from "@/assets/awards/FKCCI-award-2022.webp";
import FKCCIAward2023 from "@/assets/awards/FKCCI-Award-2023.webp";
import FKCCIExportAwardFalicitation2022 from "@/assets/awards/FKCCI-export-award-falicitation-2022.webp";
import NASSCOMHICInfoveave from "@/assets/awards/NASSCOM-HIC-Infoveave.webp";
import NASSCOMHIC from "@/assets/awards/NASSCOM-HIC.webp";
import NIPPGCCFintechChallenge2022Certificate from "@/assets/awards/NIPP-GCC-Fintech-Challenge-2022-certificate.webp";
import NIPPGCCFintech from "@/assets/awards/NIPP-GCC-Fintech.webp";
import VendorOfTheQuater2024Team1 from "@/assets/awards/Vendor-of-the-quater-2024-team1.jpg";
import VendorOfTheQuater2024Team2 from "@/assets/awards/Vendor-of-the-quater-2024-team2.jpg";
import { cn } from "@/lib/utils";

const modalData: ModalData[] = [
  {
    modalTitle: "Noesys Software Achieves Vendor of the Quarter by ENGIE - 2024",
    modalHeading: "Vendor of the Quarter Award by ENGIE - 2024",
    modalImages: [VendorOfTheQuater2024Team1, VendorOfTheQuater2024Team2],
    modalDescription:
      "We are thrilled and honored to announce that Noesys Software Pvt. Ltd. has been named Vendor of the Quarter by ENGIE. Thank you to the ENGIE team for this recognition and for trusting us to be part of your journey. Here’s to even more shared successes as we continue to innovate, grow, and create value together!",
  },
  {
    modalTitle: "Noesys Software Achieves Second Consecutive Gold at the FKCCI Awards 2023",
    modalHeading: "Best services exporter award (IT) - Gold",
    modalImages: [ExportExcellenceAward2023, FKCCIAward2023, fkcci2023],
    modalDescription:
      "Noesys Software Pvt. Ltd proudly announces its second consecutive Gold Win in the Best Services Exporter Award in the Information Technology Small category at the prestigious 18th FKCCI Export Excellence Awards held in September 2023. Federation of Karnataka Chambers of Commerce and Industry annually hosts the Export Excellence Awards, a flagship event designed to honor and recognize outstanding exporters in various categories. The IT exports category stands as one of the most prestigious segments, and Noesys’s repeated success at these awards is a testament to it’s dedication to excellence and innovation. Noesys Software Pvt. Ltd. has established a formidable presence in the global market, particularly in the United States (US), Australia, and Singapore, showcasing remarkable expertise in Information Technology exports. The company’s flagship product, Infoveave®, offers a diverse range of services, including Data Engineering & Management, Data Visualization & Analytics Services, Business Intelligence, Information Technology & Services, Data Warehousing, and Robotic Process Automation (RPA).",
  },
  {
    modalTitle: "Noesys Software Pvt. Ltd. Wins the FinTech 2022 Challenge",
    modalHeading: "Noesys received recognition for offering the best data intelligence platform",
    modalImages: [NIPPGCCFintech, NIPPGCCFintechChallenge2022Certificate],
    modalDescription:
      "The 10000 Start Ups, a NASSCOM incubator hub program, presented NIPP GCC FinTech Award-2022, to Noesys Software Pvt. Ltd., the parent company of “Infoveave,” the data automation and decision intelligence platform. Noesys Software Pvt. Ltd. won the award for the best startup on Data Intelligence Platform – Use Case.",
  },
  {
    modalTitle: "Noesys Software Pvt. Ltd. wins the FKCCI 2022 awards (IT Service Exporter)",
    modalHeading: "Best services exporter award (IT) - Gold",
    modalImages: [FKCCI2022, FKCCIAward2022, FKCCIExportAwardFalicitation2022],
    modalDescription:
      "Federation of Karnataka Chambers of Commerce and Industry awarded Noesys Software Pvt. Ltd. the Gold Winner title in the IT exports category at the 17th FKCCI Export Excellence Awards in September 2022. The FKCCI 2022 Awards are one of the flagship events conducted annually by FKCCI, to recognize and felicitate the exporters of Karnataka in various categories. The IT exports category is one of the most prestigious categories in the FKCCI 2022 Awards, and Noesys Software Pvt. Ltd.’s win is a testament to their outstanding achievement in the industry. Noesys Software Pvt. Ltd has the IT exports spread across United States (US), Australia and Singapore. Through their product Infoveave, Noesys Software Pvt. Ltd. provides services in several categories, including Data Engineering & Management, Data Visualization & Analytics Services, Business Intelligence, Product Lifecycle Management, Information Technology & Services, Data Warehousing, and Robotic Process Automation (RPA). The FKCCI 2022 Awards are a great opportunity for companies like Noesys Software Pvt. Ltd. to showcase their excellence in the industry, and to gain recognition for their hard work and dedication.",
  },
  {
    modalTitle: "Infoveave Wins 2022 Healthcare Innovation Challenge (HIC)",
    modalHeading: "Infoveave receives recognition from NASSCOM in two categories for its contributions to healthcare innovation.",
    modalImages: [NASSCOMHIC, NASSCOMHICInfoveave],
    modalDescription:
      "“Infoveave, the data automation and decision intelligence platform” was named as the Winner by NASSCOM, Centre of Excellence (COE)- IOT & AI, of the “NASSCOM Healthcare Innovation Challenge (HIC)-3, 2022”. Infoveave won two awards for their innovative use case solution to Automated Credit Payment Settlement (ACS) & Integration of Multiple Data Sources to Create a Data Lake (CDL). The challenge was themed “Growing Role of Data in Enabling Affordable and Accessible Healthcare.”",
  },
];

type ModalData = {
  modalTitle: string;
  modalHeading: string;
  modalDescription: string;
  modalImages: StaticImageData[];
};

export type AwardsCardsType = {
  title: string;
  description: string[] | string;
};

export const AwardsHoverEffect = ({ items, className, gradientBackground }: { items: AwardsCardsType[]; className?: string; gradientBackground?: boolean }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedCardIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCardIndex(null);
  };

  const cardColor = gradientBackground ? "bg-white bg-opacity-100" : "bg-opacity-60";

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <section
          key={item.title}
          className="relative group block py-2 md:p-2 w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 size-full bg-gradient-to-br group-hover:bg-gradient-to-b group-hover:from-ivindigo-100 group-hover:to-ivindigo-300 block rounded-2xl"
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card className={cardColor}>
            <div onClick={idx != 4 ? () => openModal(idx) : () => {}} style={{ cursor: `${idx != 4 ? "pointer" : "default"}` }}>
              <CardTitle>{item.title}</CardTitle>
              {Array.isArray(item.description) ? (
                item.description.map((desc, index) => <CardDescription key={index}>{desc}</CardDescription>)
              ) : (
                <CardDescription>{item.description}</CardDescription>
              )}
            </div>
          </Card>
        </section>
      ))}

      {/* Render modal outside of the loop */}
      <AnimatePresence>
        {isModalOpen && selectedCardIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-[95%] md:w-[94%] xl:max-w-[70rem] p-6 bg-white rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between">
                <h5 className="font-semibold text-xl">{modalData[selectedCardIndex].modalTitle}</h5>
                <button type="button" className="text-neutral-500 hover:text-neutral-800" onClick={closeModal}>
                  <span className="inline-block [&>svg]:size-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="my-4 grid grid-cols-3 items-center xl:h-200px">
                {modalData[selectedCardIndex].modalImages.map((photo, photoIndex) => (
                  <Image key={photoIndex} src={photo} alt="image" width={100} height={100} className="xl:w-[250px]" />
                ))}
              </div>

              <div className="mt-8 my-2">
                <h2 className="font-semibold text-xl">{modalData[selectedCardIndex].modalHeading}</h2>
              </div>

              <div>
                <p className="text-sm h-[150px] overflow-y-auto md:h-auto">{modalData[selectedCardIndex].modalDescription}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Card component remains the same
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      className={cn(
        "rounded-xl z-10 bg-opacity-60 h-full w-full p-6 overflow-hidden bg-white backdrop-blur-[30px] backdrop-saturate-150 border border-white/20 duration-350 relative",
        "group-hover:bg-gradient-to-br group-hover:from-ivindigo-100 group-hover:to-ivindigo-300 group-hover:border group-hover:border-ivindigo-300",
        "transition-colors duration-350",
        className
      )}
    >
      <div className="relative">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-black font-semibold text-base text-center", className)}>{children}</h4>;
};

const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("text-black mt-4 text-sm text-center", className)}>{children}</p>;
};
