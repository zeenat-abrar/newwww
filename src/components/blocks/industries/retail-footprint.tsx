import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import React from "react";
import Image from "next/image";
import Infoveaveflower from "@/assets/homepage/circular-slider-icons/carousel/InfoveaveFlower_Logo.png";

const FootPrintComponent = () => {
  const content = [
    {
      color: "#1098ad",
      title: "Sales and Services",
      bulletPoints: ["Channel performance & incentives", "service performance", "customer satisfaction", "workflow analytics", "cancellations and refunds"],
      textColor: "#0b7285",
      mantineColorName: "cyan",
    },
    {
      color: "#0ca678",
      title: "Inventory & Supply chain",
      bulletPoints: [
        "Procurement optimization",
        "PO to GAR reconciliation",
        "Material demand prediction",
        "Vender analytics & benchmarking",
        "Inventory analysis",
      ],
      textColor: "#087f5b",
      mantineColorName: "teal",
    },
    {
      color: "#7048e8",
      title: "Finance",
      bulletPoints: ["Profitability analysis", "Revenue life cycle analysis", "Financial dashboards", "Executive dashboards", "Reconciliation"],
      textColor: "#5f3dc4",
      mantineColorName: "violet",
    },
    {
      color: "#ae3ec9",
      title: "Quality, Audit & Compliance",
      bulletPoints: ["Incoming goods quality", "FG quality", "Regulatory reporting", "EHS tracking"],
      textColor: "#862e9c",
      mantineColorName: "grape",
    },
    {
      color: "#4263eb",
      title: "Product Development",
      bulletPoints: ["Competitor intelligence", "Competitor analysis", "Consumer trends", "Product validation"],
      textColor: "#364fc7",
      mantineColorName: "indigo",
    },
    {
      color: "#74b816",
      title: "Marketing",
      bulletPoints: ["Market intelligence", "Market share", "Pricing analysis", "Customer segmentation", "Buying behaviour"],
      textColor: "#5c940d",
      mantineColorName: "lime",
    },
  ];
  const n = content.length;

  const articleStyle = (i: number): React.CSSProperties => ({
    transformStyle: "preserve-3d",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    padding: "0.125em",
    width: "11em",
    height: "11em",
    borderRadius: "50%",
    transform: `translate(-50%, -50%) rotate(${i / n}turn) translateY(calc(-0.125em - 100%)) rotate(${(i / n) * -1}turn)`,
    background: `linear-gradient(30deg, #fdfdfd, #e2e2e2) content-box, linear-gradient(30deg, rgba(253, 253, 253, 0.5), rgba(254, 254, 254, 0.8)) padding-box`,
    font: "1em/1.25 Poppins, sans-serif",
    textAlign: "center",
    color: content[i].color,
  });

  const beforeStyle = (i: number): React.CSSProperties => ({
    boxSizing: "inherit",
    position: "absolute",
    top: "-2.25em",
    right: "-2.25em",
    bottom: "-2.25em",
    left: "-2.25em",
    border: "solid 0.125em #fff",
    padding: "1.25em",
    borderRadius: "50%",
    transform: `translateZ(-20px) rotate(${i / n}turn) rotateX(${i % 2 === 0 ? "1deg" : "-1deg"})`,
    background: `radial-gradient(#fff calc(5.875em - 1px), rgba(255, 255, 255, 0) 5.875em) currentcolor`,
    WebkitMask: "linear-gradient(red, red) content-box, linear-gradient(red, red) border-box",
    WebkitMaskComposite: "xor" as string,
    mask: "linear-gradient(red, red) content-box, linear-gradient(red, red) border-box",
    maskComposite: "exclude" as string,
    content: '""',
  });

  return (
    <div className="xl:max-w-[100rem] xl:mx-auto mx-auto py-20">
      {/* Text Section */}
      <div className="w-full flex items-center justify-center rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <MainHeadingWithSpan firstText={"Our Footprint In "} specialText={"Retail"} lastText={""} />
      </div>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          overflowX: "hidden",
          height: "620px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Centered FontAwesome Icon */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <Image src={Infoveaveflower} alt="Infoveave-logo" width={100} height={100} className="p-2" />
        </div>

        {/* 3D Articles */}
        <div style={{ transformStyle: "preserve-3d" }}>
          {Array.from({ length: n }).map((_, i) => (
            <article key={i} style={articleStyle(i)}>
              {i == 1 ? (
                <>
                  <h3 className="font-bold text-black text-sm">Inventory and</h3>
                  <h3 className="font-bold text-black mb-2 text-sm">supply chain</h3>
                </>
              ) : (
                <h3 className="font-bold text-black mb-2 text-sm">{content[i].title}</h3>
              )}
              {content[i].bulletPoints.map((ele) => (
                <p key={ele} className="text-[12px]" style={{ color: content[i].textColor }}>
                  {ele}
                </p>
              ))}
              <div style={beforeStyle(i)} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FootPrintComponent;
