"use client";

import { usePathname } from "next/navigation";
import MegaMenu from "@/components/blocks/mega-menu";

export default function ConditionalMegaMenu() {
  const pathname = usePathname();

  const hideMegaMenu = pathname === "/manage/meta" || pathname === "/manage/login" || pathname === "/manage/editable-metadata";

  return !hideMegaMenu ? <MegaMenu /> : null;
}
