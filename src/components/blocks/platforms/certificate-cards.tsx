import React from "react";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import MainHeading from "@/components/ui/headings/main-heading";

interface CardProps {
  id: number;
  title: string;
  content: string;
}

interface CertificatesCardSectionProps {
  cards: CardProps[];
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }} className="bg-white rounded-lg p-10">
      <h1 className="text-xl text-center font-semibold mb-5">{title}</h1>
      <p className="text-black text-center text-base">{content}</p>
    </div>
  );
};

const CertificatesCardSection: React.FC<CertificatesCardSectionProps> = ({ cards }) => {
  return (
    <div className="3xl:max-w-[100rem] px-[3%] xl:px-[180px] 3xl:px-[260px] py-20 ">
      {/* Text Section */}
      <div className="text-center mb-10">
        {/* <MainHeading text={heading} alignText="left" /> */}
        <MainHeading text="Building Trust and Compliance" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <PrimaryButton text="Visit Trust" href="/data-security" />
      </div>
    </div>
  );
};

export default CertificatesCardSection;
