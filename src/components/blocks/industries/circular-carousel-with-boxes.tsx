"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Infoveaveflower from "@/assets/homepage/circular-slider-icons/carousel/InfoveaveFlower_Logo.png";

interface CircularCarouselWithBoxesProps {
  radius: number;
  duration: number;
  descriptions: string[];
  labels: string[];
}

const CircularCarouselWithBoxes: React.FC<CircularCarouselWithBoxesProps> = ({ radius, duration, descriptions, labels }) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, duration / 360);
    return () => clearInterval(interval);
  }, [duration]);

  const numIcons = descriptions.length;
  const iconAngleStep = 360 / numIcons;
  const largeCircleRadius = radius * 2;
  const centerX = largeCircleRadius; // Center X position
  const centerY = largeCircleRadius; // Center Y position
  const iconRadius = 125; // Radius of the icon container (half of width/height)

  // Arrow line adjustments based on marginLeft changes
  const getAdjustedX = (x: number, index: number) => {
    if (index === 0) {
      return x + largeCircleRadius * 0.25; // 25% margin for index 0
    }
    if (index === 3) {
      return x - largeCircleRadius * 0.25; // Negative margin for index 3
    }
    if (index === 1 || index === 5) {
      return x + 25; // Add 25px for index 1 and 5
    }
    if (index === 2 || index === 4) {
      return x - 25; // Subtract 25px for index 2 and 4
    }
    return x; // No adjustment for other indices
  };

  return (
    <div className="relative rounded-full" style={{ width: `${largeCircleRadius * 2}px`, height: `${largeCircleRadius * 2}px` }}>
      {/* SVG to draw the arrows */}
      <svg
        className="absolute inset-0"
        viewBox={`0 0 ${largeCircleRadius * 2} ${largeCircleRadius * 2}`}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      >
        {descriptions.map((_, index) => {
          const angle = index * iconAngleStep;
          const rad = (angle * Math.PI) / 180;

          // Adjust x and y to stop the line before the outer div (icons)
          let x = Math.cos(rad) * (largeCircleRadius - iconRadius) + centerX;
          const y = Math.sin(rad) * (largeCircleRadius - iconRadius) + centerY;

          // Adjust x based on marginLeft adjustments
          x = getAdjustedX(x, index);

          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="black"
              strokeWidth="2"
              markerEnd="url(#arrowhead)" // Adding arrowhead at the end of the line
            />
          );
        })}
        {/* Define the arrowhead marker */}
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="black" />
          </marker>
        </defs>
      </svg>

      {/* Logo in the Center */}
      <Image
        src={Infoveaveflower}
        alt="Infoveave-logo"
        width={110}
        height={110}
        className="absolute rounded-full p-3"
        style={{
          background: "white",
          objectFit: "contain",
          top: "50%",
          left: "50%",
          backgroundColor: "white",
          borderRadius: "50%",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Icons and Labels Around the Border */}
      {descriptions.map((desc, index) => {
        const angle = index * iconAngleStep;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * largeCircleRadius;
        const y = Math.sin(rad) * largeCircleRadius;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center border"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: "translate(-50%, -50%)",
              width: "250px",
              padding: "10px 15px",
              border: "none",
              marginLeft: index === 0 ? "25%" : index === 3 ? "-25%" : index === 1 || index === 5 ? "25px" : index === 2 || index === 4 ? "-25px" : "0px",
            }}
          >
            <h6
              className={`text-center font-bold text-base ${
                index == 0 || index == 1 ? "text-green-500" : index == 3 || index == 4 ? "text-purple-600" : index == 5 ? "text-ivviolet-700" : "text-teal-600"
              }`}
            >
              {labels[index]}
            </h6>
            <p className="text-black text-center text-sm mt-1">{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CircularCarouselWithBoxes;
