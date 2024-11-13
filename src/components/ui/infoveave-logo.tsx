import Image from "next/image";
import React from "react";
import InfoveaveLightBg from "../../assets/infoveave_lightbg.svg";
export interface InfoveaveLogoProps {
  darkBackground?: boolean;
  multiplier?: number;
  onClick?: () => unknown;
  className?: string;
}

export const InfoveaveLogo = function InfobveaveLogo({ onClick, className, multiplier = 1 }: InfoveaveLogoProps) {
  return (
    <Image
      src={InfoveaveLightBg}
      alt="Infoveave"
      onClick={onClick}
      className={className}
      data-src={InfoveaveLightBg}
      data-src-retina={InfoveaveLightBg}
      width={130 * multiplier}
      height={28 * multiplier}
    />
  );
};
