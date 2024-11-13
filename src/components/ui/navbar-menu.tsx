"use client";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@/components/ui/icon";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div onMouseEnter={() => setActive(item)} className="relative mt-2">
      <motion.p
        transition={{ duration: 0.8 }}
        className="cursor-pointer font-normal text-black dark:text-white hover:text-white hover:bg-ivviolet-800 px-4 py-1.5 rounded-md"
        onMouseEnter={() => setHovered(item)}
        onMouseLeave={() => setHovered(null)}
      >
        {item}{" "}
        {item === "Home" ? (
          <></>
        ) : (
          <FontAwesomeIcon icon={hovered === item ? faAngleUp : faAngleDown} className={`${hovered === item ? "text-white" : "text-black"} text-[12px]`} />
        )}
      </motion.p>
      {active !== null && children && (
        <motion.div initial={{ opacity: 0, scale: 0.85, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={transition}>
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 -translate-x-1/2 pt-0">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-lg overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }: { setActive: (item: string | null) => void; children: React.ReactNode }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent bg-white shadow-input flex justify-center xl:space-x-4 px-8 pt-0 pb-2"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, href, icon }: { title: string; href: string; icon: IconName }) => {
  return (
    <Link key={title} href={href} passHref>
      <div key={title} className="col-span-1 flex flex-col gap-4 items-start hover:bg-accent cursor-pointer">
        <Icon icon={["fal", icon]} size="2x" className="duoIcon" />
        <div className="font-semibold text-base">{title}</div>
      </div>
    </Link>
  );
};
