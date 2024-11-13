import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Infoveaveflower from "@/assets/homepage/circular-slider-icons/carousel/InfoveaveFlower_Logo.png";

interface CircularCarouselProps {
  radius: number;
  duration: number;
  itemRadius: number;
  icons: StaticImageData[];
  labels: string[];
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({ radius, duration, itemRadius, icons, labels }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, duration / 360);
    return () => clearInterval(interval);
  }, [duration]);

  const numIcons = icons.length;
  const iconAngleStep = 360 / numIcons;
  const largeCircleRadius = radius * 2;

  return (
    <div className="relative border-2 border-gray-100 rounded-full" style={{ width: `${largeCircleRadius * 2}px`, height: `${largeCircleRadius * 2}px` }}>
      {/* Black Circle */}
      <div
        className="absolute border-2 border-ivindigo-500 rounded-full flex justify-center items-center"
        style={{ width: `${radius * 2}px`, height: `${radius * 2}px`, top: `calc(50% - ${radius}px)`, left: `calc(50% - ${radius}px)`, zIndex: 2 }}
      >
        {/* Logo in the Center */}
        <Image
          src={Infoveaveflower}
          alt="Infoveave-logo"
          width={110}
          height={110}
          className="absolute rounded-full p-2"
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

        {/* Inner Circle with Revolving Items */}
        <div className="absolute flex justify-center items-center" style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}>
          {/* Two Revolving Circles */}
          {/* <div
            className="absolute rounded-full border-2 border-purple-900 bg-transparent"
            style={{
              width: `${itemRadius * 1.5}px`,
              height: `${itemRadius * 1.5}px`,
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              transformOrigin: "center center",
              animation: `rotate ${duration}ms linear infinite`,
            }}
          ></div>
          <div
            className="absolute rounded-full border-2 border-purple-900 bg-transparent"
            style={{
              width: `${itemRadius * 1.5}px`,
              height: `${itemRadius * 1.5}px`,
              transform: `rotate(${angle + 180}deg) translateY(-${radius}px)`,
              transformOrigin: "center center",
              animation: `rotate ${duration}ms linear infinite`,
            }}
          ></div> */}
        </div>
      </div>

      {/* Icons and Labels Around the Border */}
      {icons.map((iconSrc, index) => {
        const angle = index * iconAngleStep;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * largeCircleRadius;
        const y = Math.sin(rad) * largeCircleRadius;
        return (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              marginTop: "15px",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              maxWidth: "100px",
            }}
          >
            <Image
              src={iconSrc}
              alt={`Icon ${index}`}
              style={{
                width: `${itemRadius * 6}px`,
                height: `${itemRadius * 6}px`,
                background: "white",
                borderRadius: "50%",
                objectFit: "contain",
                padding: "5px",
                marginTop: "35px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            />
            <h6 className="text-black font-bold text-sm mt-2">{labels[index]}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default CircularCarousel;
