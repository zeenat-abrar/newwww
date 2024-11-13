"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Automotive from "@/assets/navbar-icons/automotive.png";
import Banking from "@/assets/navbar-icons/banking.png";
import Energy from "@/assets/navbar-icons/energy.png";
import Healthcare from "@/assets/navbar-icons/healthcare.png";
import Manufacturing from "@/assets/navbar-icons/manufacturing.png";
import Retail from "@/assets/navbar-icons/retail.png";
import SupplyChain from "@/assets/navbar-icons/supply-chain.png";
import Telecom from "@/assets/navbar-icons/telecom.png";
import { industriesMenuItems } from "@/components/blocks/mega-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

interface IndustriesMenuProps {
  closeMenu: () => void;
}

const industriesMenuContent = [
  {
    heading: "Transform Customer Experiences with Infoveave",
    description: "Unify data across channels, enhance decision-making, streamline operations, and improve customer experiences.",
    imageUrl: Retail,
  },
  {
    heading: "Simplifying Energy Management with Infoveave",
    description: "Our platform gives energy retailers real-time insights to optimize pricing, automate billing, and ensure compliance.",
    imageUrl: Energy,
  },
  {
    heading: "Enhancing Patient Outcomes through Data-Driven Insights",
    description: "Unify patient data, operational metrics, and clinical information to drive better healthcare decisions.",
    imageUrl: Healthcare,
  },
  {
    heading: "Unifying Financial Data for Better Management",
    description: "Unify financial data, streamline compliance, and enhance customer experience through real-time insights.",
    imageUrl: Banking,
  },
  {
    heading: "Driving Innovation and Operational Excellence",
    description: "Unify production, sales, and maintenance data to optimize operations and customer experiences.",
    imageUrl: Automotive,
  },
  {
    heading: "Boosting Efficiency with Integrated Data Solutions",
    description: "Streamline production, supply chain and operations by unifying data for predictive maintenance.",
    imageUrl: Manufacturing,
  },
  {
    heading: "Optimize Supply Chain and Logistics with Infoveave",
    description: "Unify data across systems, enhance decision-making, boost supply chain efficiency and logistics performance.",
    imageUrl: SupplyChain,
  },
  {
    heading: "Optimizing Network Management with Infoveave",
    description: "Unify data across networks and customer interactions to transform telecom operations, enhancing service performance.",
    imageUrl: Telecom,
  },
];

export const IndustriesMenu = ({ closeMenu }: IndustriesMenuProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid w-[880px] grid-cols-[140px_140px_150px_140px_280px] pl-4">
      <div className="col-span-4 py-3">
        <h2 className="font-secondary text-xl font-semibold">Industry solutions</h2>
      </div>
      <div className="col-start-5 col-end-7 row-start-1 row-end-6 bg-gradient-to-b from-white from-10% via-white via-45% to-ivviolet-300 to-90% border border-ivviolet-300 flex flex-col ml-5 rounded-lg">
        <Image
          src={hoveredIndex == null ? industriesMenuContent[0].imageUrl : industriesMenuContent[hoveredIndex].imageUrl}
          alt="Description of image"
          layout="responsive"
          width={2048}
          height={1804}
          className="rounded-xl md:rounded-t-none p-1 pb-4"
          style={{ height: "100px", width: "100%" }}
        />
        <div id="content" className="px-4 font-semibold text-sm text-left transition-all">
          {hoveredIndex == null ? <div>{industriesMenuContent[0].heading}</div> : <div>{industriesMenuContent[hoveredIndex].heading}</div>}
        </div>
        <div className="px-4 py-2 flex flex-col gap-2 text-left text-sm">
          {hoveredIndex == null ? <div>{industriesMenuContent[0].description}</div> : <div>{industriesMenuContent[hoveredIndex].description}</div>}
        </div>
      </div>
      {industriesMenuItems.map(({ icon, label, href }, index) => (
        <Link
          key={label}
          href={href}
          className="col-span-1 flex flex-col gap-4 p-4 items-center cursor-pointer transition-transform duration-200 hover:scale-[115%]"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={closeMenu} // Close the menu when clicking an item
        >
          <Icon icon={["fal", icon]} size="2x" className="text-ivviolet-600" />
          {/* <Icon icon={["fal", icon]} size="2x" className="duoIcon" /> */}
          {hoveredIndex === index ? (
            <div className="font-semibold text-center text-ivindigo-1000">{label}</div>
          ) : (
            <div className="font-semibold text-center">{label}</div>
          )}
        </Link>
      ))}
      <div className="border-t border-ivviolet-700 col-span-4"></div>
      <div className="col-span-4 my-5 -ml-4 flex gap-4">
        {/* <Button>
          <Icon icon={["fal", "arrow-right-to-bracket"]} />
          Sign up for Trial
        </Button> */}
        <div></div>
        <Link href="/book-a-demo">
          <Button variant="outline" onClick={closeMenu}>
            <Icon icon={["fal", "calendar"]} /> Schedule Demo
          </Button>
        </Link>
      </div>
    </div>
  );
};
