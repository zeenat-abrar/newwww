"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import MainHeading from "@/components/ui/headings/main-heading";
import { cn } from "@/lib/utils";

interface SuccessStory {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
}

interface SuccessStoriesCardsProps {
  heading?: string;
  data: SuccessStory[];
}

const SuccessStoriesCards = ({ data, heading }: SuccessStoriesCardsProps) => {
  return (
    <section className="relative xl:max-w-[100rem] xl:mx-auto px-[3%] xl:px-[104px] mx-auto flex flex-col md:flex-row py-14">
      {heading && <MainHeading text="All Blogs" />}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center mt-8">
        {data.map((card) => (
          <Link href={card.href} key={card.title} className={cn("bg-white bg-opacity-25 border border-black/[0.1] rounded-xl pb-4")}>
            <CardContainer key={card.id} className="size-full">
              <CardBody className={cn("size-auto px-2 py-6", "bg-opacity-25")}>
                <CardItem translateZ="50" className="h-[85px] w-full text-center text-xl font-semibold text-black px-4">
                  {card.title}
                </CardItem>
                <CardItem translateZ="50" className="w-full">
                  <Image
                    src={card.image}
                    height={600}
                    width={900}
                    className="h-64 w-full rounded-xl object-cover group-hover/card:shadow-xl border border-gray-300 mt-3"
                    alt="infoboard"
                  />
                </CardItem>
                <CardItem as="p" translateZ="60" className="w-full text-center text-sm max-w-sm pt-5 px-4 3xl:px-2 mx-auto">
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

export default SuccessStoriesCards;
