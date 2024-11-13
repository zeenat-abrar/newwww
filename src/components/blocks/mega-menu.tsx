"use client";
import { faAngleDown, faAngleUp, faBars, faTimes, IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import InfoveaveFlower from "@/assets/privacypolicy/infoveaveFlower.svg";
import { AboutUsMenu } from "@/components/blocks/aboutus-menu";
import { IndustriesMenu } from "@/components/blocks/industries-menu";
import { PlatformMenu } from "@/components/blocks/platform-menu";
import { ResourcesMenu } from "@/components/blocks/resources-menu";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import { Icon } from "@/components/ui/icon";
import { InfoveaveLogo } from "@/components/ui/infoveave-logo";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

interface menuItems {
  icon: IconName;
  label: string;
  href: string;
}

export const platformMenuItems: menuItems[] = [
  { icon: "arrow-progress", label: "Data Automation", href: "/data-automation" },
  { icon: "magnifying-glass-chart", label: "Data Analytics", href: "/data-analytics-machinelearning-python" },
  { icon: "chart-mixed", label: "Data Insights", href: "/insights-data-visualization" },
  { icon: "grid-2", label: "Data Applications", href: "/last-mile-data-collection" },
  { icon: "shield-check", label: "Data Quality", href: "/data-quality" },
  { icon: "building-columns", label: "Data Governance", href: "/data-governance" },
] as const;

export const industriesMenuItems: menuItems[] = [
  { icon: "cart-shopping", label: "Retail", href: "/retail-analytics-solutions" },
  { icon: "bolt", label: "Energy", href: "/energy-analytics-solutions" },
  { icon: "hand-holding-medical", label: "Healthcare", href: "/healthcare-analytics-solutions" },
  { icon: "building-columns", label: "Banking", href: "/banking-and-financial-services-industry-solutions" },
  { icon: "car-side", label: "Automotive", href: "/automotive-analytics-solutions" },
  { icon: "conveyor-belt-boxes", label: "Manufacturing", href: "/manufacturing-analytics-solutions" },
  { icon: "boxes-packing", label: "Supply Chain", href: "/supply-chain-solutions" },
  { icon: "tower-cell", label: "Telecom", href: "/telecom-industry-solutions" },
];

export const resourcesMenuItems: menuItems[] = [
  { icon: "trophy", label: "Success Stories", href: "/success-stories" },
  { icon: "pen-nib", label: "Blogs", href: "/blogs" },
  { icon: "book-sparkles", label: "KPI Library", href: "/kpi-library" },
  { icon: "circle-question", label: "Help", href: "https://help.infoveave.com/" },
  { icon: "headset", label: "Support", href: "/support" },
  { icon: "key-skeleton", label: "Data Security", href: "/data-security" },
  // { icon: "building-columns", label: "Academy", href: "" },
];

//Demo Purpose
export const aboutUsMenuItems: menuItems[] = [
  { icon: "building", label: "Company", href: "/about-us#company" },
  { icon: "laptop-mobile", label: "Brand", href: "/about-us#brand" },
  { icon: "award", label: "Awards", href: "/infoveave-awards-and-updates" },
  { icon: "handshake", label: "Partners", href: "/about-us#partners" },
  // { icon: "handshake", label: "Trust", href: "https://trust.infoveave.com/" },
  { icon: "suitcase", label: "Careers", href: "/about-us#careers" },
  { icon: "phone-volume", label: "Contact us", href: "/about-us#contactus" },
];

const MegaMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onToggleAccordion = (accordionName: string) => {
    setOpenAccordion(openAccordion === accordionName ? null : accordionName);
  };

  const closeMenu = () => {
    setActive(null);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg z-50 sticky top-0">
      <section className="px-[2%] md:px-[2.5%] xl:max-w-[100rem] xl:mx-auto xl:px-[104px] py-2 lg:py-0 flex justify-between items-center">
        <Link href="/" id="infoveave" className="xl:ml-[-5px] mb-[2px] lg:ml-0">
          <InfoveaveLogo multiplier={1.2} />
        </Link>
        <div id="nav-menu" className="hidden xl:flex gap-12">
          <Menu setActive={setActive}>
            <Link href="/">
              <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Platform">
              <PlatformMenu closeMenu={closeMenu} />
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Industries">
              <IndustriesMenu closeMenu={closeMenu} />
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Resources">
              <ResourcesMenu closeMenu={closeMenu} />
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="About us">
              <AboutUsMenu closeMenu={closeMenu} />
            </MenuItem>
          </Menu>
        </div>
        <div className="hidden xl:block">
          <PrimaryButton text="Sign up for a free trial" href="/sign-up" className="xl:px-6 2xl:px-10" />
        </div>
        <button onClick={onToggleMenu} className="py-2 px-1 xl:hidden">
          <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer text-gray-600" />
        </button>

        {/* Mobile navbar list */}
        <div
          id="nav-dialog"
          className={`fixed bg-white inset-0 px-[2%] lg:px-[2.5%] py-4 lg:py-2 overflow-y-auto transition-transform duration-300 ${menuOpen ? "block" : "hidden"}`}
          style={{ maxHeight: "100vh" }}
        >
          <div id="nav-bar" className="flex justify-between">
            <Link href="/" id="infoveave">
              <InfoveaveLogo multiplier={1.2} className="md:ml-1 lg:ml-0" />
            </Link>
            <button onClick={onToggleMenu} className="p-2 xl:hidden -mt-2">
              <FontAwesomeIcon icon={faTimes} className="text-2xl cursor-pointer text-gray-600" />
            </button>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/" className="text-base hover:text-ivviolet-800 p-3 font-semibold" onClick={closeMobileMenu}>
              Home
            </Link>

            {/* Accordion for "Platform" */}
            <div className="hover:bg-gray-50">
              <button
                onClick={() => onToggleAccordion("platform")}
                className="text-base hover:text-ivviolet-800 p-3 w-full text-left flex justify-between items-center font-semibold"
              >
                Platform
                <FontAwesomeIcon icon={openAccordion === "platform" ? faAngleUp : faAngleDown} className="ml-2 -mt-2" />
              </button>
              {openAccordion === "platform" && (
                <div className="px-8 text-sm text-gray-700">
                  <ol>
                    {platformMenuItems.map(({ icon, label, href }) => (
                      <Link key={label} href={href} passHref>
                        <li className="flex gap-6 items-center my-5" onClick={closeMobileMenu}>
                          {/* Center the icon using flex utilities */}
                          <div className="shrink-0 flex justify-center items-center size-6">
                            <Icon icon={["fal", icon]} size="xl" className="text-ivviolet-600" />
                          </div>
                          <div className="hover:text-ivviolet-900 font-semibold">{label}</div>
                        </li>
                      </Link>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Accordion for "Industries" */}
            <div className="hover:bg-gray-50">
              <button
                onClick={() => onToggleAccordion("industries")}
                className="text-base hover:text-ivviolet-800 p-3 w-full text-left flex justify-between items-center font-semibold"
              >
                Industries
                <FontAwesomeIcon icon={openAccordion === "industries" ? faAngleUp : faAngleDown} className="ml-2 -mt-2" />
              </button>
              {openAccordion === "industries" && (
                <div className="px-8 text-sm text-gray-700">
                  <ol>
                    {industriesMenuItems.map(({ icon, label, href }) => (
                      <Link key={label} href={href} passHref>
                        <li className="flex gap-6 items-center my-5" onClick={closeMobileMenu}>
                          {/* Center the icon using flex utilities */}
                          <div className="shrink-0 flex justify-center items-center size-6">
                            <Icon icon={["fal", icon]} size="xl" className="text-ivviolet-600" />
                          </div>
                          <div className="hover:text-ivviolet-900 font-semibold">{label}</div>
                        </li>
                      </Link>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Accordion for "Resources" */}
            <div className="hover:bg-gray-50">
              <button
                onClick={() => onToggleAccordion("resources")}
                className="text-base hover:text-ivviolet-800 p-3 w-full text-left flex justify-between items-center font-semibold"
              >
                Resources
                <FontAwesomeIcon icon={openAccordion === "resources" ? faAngleUp : faAngleDown} className="ml-2 -mt-2" />
              </button>
              {openAccordion === "resources" && (
                <div className="px-8 text-sm text-gray-700">
                  <ol>
                    {resourcesMenuItems.map(({ icon, label, href }) => (
                      <Link key={label} href={href} passHref>
                        <li className="flex gap-6 items-center my-5" onClick={closeMobileMenu}>
                          {/* Center the icon using flex utilities */}
                          <div className="shrink-0 flex justify-center items-center size-6">
                            <Icon icon={["fal", icon]} size="xl" className="text-ivviolet-600" />
                          </div>
                          <div className="hover:text-ivviolet-900 font-semibold">{label}</div>
                        </li>
                      </Link>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Accordion for "Company" */}
            <div className="hover:bg-gray-50">
              <button
                onClick={() => onToggleAccordion("company")}
                className="text-base hover:text-ivviolet-800 p-3 w-full text-left flex justify-between items-center font-semibold"
              >
                About us
                <FontAwesomeIcon icon={openAccordion === "company" ? faAngleUp : faAngleDown} className="ml-2 -mt-2" />
              </button>
              {openAccordion === "company" && (
                <div className="px-8 text-sm text-gray-700">
                  <ol>
                    {aboutUsMenuItems.map(({ icon, label, href }) => (
                      <Link key={label} href={href} passHref>
                        <li className="flex gap-6 items-center my-5" onClick={closeMobileMenu}>
                          {/* Center the icon using flex utilities */}

                          {label == "Brand" ? (
                            <Image src={InfoveaveFlower} alt="infoveave-logo" width={45} height={45} />
                          ) : (
                            <div className="shrink-0 flex justify-center items-center size-6">
                              <Icon icon={["fal", icon]} size="xl" className="text-ivviolet-600" />
                            </div>
                          )}

                          <div className={cn("hover:text-ivviolet-900 font-semibold", label == "Brand" ? "ml-[-21px]" : "ml-0")}>{label}</div>
                        </li>
                      </Link>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default MegaMenu;
