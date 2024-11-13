"use client";
import Link from "next/link";
import { useState } from "react";
import { resourcesMenuItems } from "@/components/blocks/mega-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

interface ResourcesMenuProps {
  closeMenu: () => void;
}

export const ResourcesMenu = ({ closeMenu }: ResourcesMenuProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid w-[872px] grid-cols-[161px_135px_135px_135px_135px_142px] px-4">
      <div className="col-span-6 py-3">
        <h2 className="font-secondary text-xl font-semibold">Resources</h2>
      </div>
      {/* <div className="col-start-5 col-end-7 row-start-1 row-end-6 bg-gradient-to-b from-white to-ivviolet-200 flex flex-col ml-5 border border-ivviolet-300 rounded-lg">
        <Image
          src={hoveredIndex == null ? industriesMenuContent[0].imageUrl : industriesMenuContent[hoveredIndex].imageUrl}
          alt="Description of image"
          layout="responsive"
          width={2048}
          height={1804}
          className="rounded-lg md:rounded-t-none p-4"
          style={{ height: "100px", width: "100%" }}
        />
        <div id="content" className="px-4 font-semibold text-sm text-left transition-all">
          {hoveredIndex == null ? <div>{industriesMenuContent[0].heading}</div> : <div>{industriesMenuContent[hoveredIndex].heading}</div>}
        </div>
        <div className="px-4 py-2 flex flex-col gap-2 text-left text-sm">
          {hoveredIndex == null ? <div>{industriesMenuContent[0].description}</div> : <div>{industriesMenuContent[hoveredIndex].description}</div>}
        </div>
      </div> */}
      {resourcesMenuItems.map(({ icon, label, href }, index) => (
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
      <div className="border-t border-ivviolet-700 col-span-6"></div>
      <div className="col-span-6 my-5 -ml-4 flex gap-4">
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
