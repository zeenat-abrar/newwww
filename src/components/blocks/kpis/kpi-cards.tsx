"use client";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import MainHeading from "@/components/ui/headings/main-heading";
import { cn } from "@/lib/utils";

interface blog {
  id: number;
  title: string;
  description: string;
  href: string;
}

interface KpiCardsProps {
  heading?: string;
  data: blog[];
}

const KpiCards = ({ data, heading }: KpiCardsProps) => {
  return (
    <section className="relative w-full pt-10 mb-[-70px] px-[3%] xl:px-[104px]">
      {heading && <MainHeading text="All Blogs" />}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {data.map((card) => (
          <Link href={card.href} key={card.id} className={cn("bg-white bg-opacity-25 border border-black/[0.1] rounded-xl pb-6")}>
            <CardContainer className="size-full">
              <CardBody className={cn("size-auto px-2 py-6", "bg-opacity-25")}>
                <CardItem translateZ="50" className="w-full text-left text-xl font-semibold text-black pt-4 px-4">
                  {card.title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="w-full text-left text-base max-w-sm pt-5 px-4">
                  {card.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default KpiCards;
