import Image from "next/image";
import BlogsBookADemo from "@/components/blocks/blogs/blogs-book-a-demo-form";
import SingleLineList from "@/components/blocks/blogs/single-list";
import RecentSuccessStoryCard from "@/components/blocks/success-stories/recent-success-stories-card";
import { cn } from "@/lib/utils";

type ImageWithClass = {
  image: string;
  className?: string;
};

export type SuccessStoryContentType = {
  id?: number;
  heading?: string;
  subHeading?: string;
  list?: string[];
  paragraph?: string;
  formula?: string;
  bulletPoints?: string[];
  image?: string | ImageWithClass;
  listImage?: string;
};

export interface SuccessStoryInnerPageGridLayoutProps {
  content: SuccessStoryContentType[];
}

const SuccessStoryInnerPageGridLayout = ({ content }: SuccessStoryInnerPageGridLayoutProps) => {
  return (
    <div className="my-16 grid grid-cols-4 xl:gap-5 px-[3%] xl:px-[104px] 3xl:max-w-[100rem] xl:mx-auto">
      {/* Left Column: 75% Width */}
      <div className="col-span-4 xl:col-span-3 xl:mr-8">
        {/* Content for the left column goes here */}
        {content.map((ele, index) => (
          <div key={index} className="mb-10">
            {ele.heading && <h2 className="text-xl font-semibold my-4">{ele.heading}</h2>}
            {ele.subHeading && <h2 className="text-xl font-semibold my-4">{ele.subHeading}</h2>}
            {ele.list && Array.isArray(ele.list) && (
              <ol className="list-disc text-base space-y-5 pl-5 font-semibold my-4">
                {ele.list.map((bulletPoint: string, index: number) => (
                  <SingleLineList text={bulletPoint} key={index} />
                ))}
              </ol>
            )}
            {ele.listImage && (
              <Image src={ele.listImage} height={600} width={900} className="w-full object-cover group-hover/card:shadow-xl my-5" alt="blog-list-image" />
            )}
            {ele.paragraph && <p className="text-base">{ele.paragraph}</p>}
            {ele.formula && <p className="text-base font-semibold text-center">{ele.formula}</p>}
            {ele.bulletPoints && Array.isArray(ele.bulletPoints) && (
              <ol className="list-disc text-base space-y-5 pl-5 my-4">
                {ele.bulletPoints.map((bulletPoint: string, index: number) => (
                  <SingleLineList text={bulletPoint} key={index} />
                ))}
              </ol>
            )}
            {ele.image && (
              <Image
                src={typeof ele.image === "object" ? ele.image.image : ele.image}
                height={600}
                width={900}
                className={cn("w-full object-cover group-hover/card:shadow-xl my-5 mx-auto", typeof ele.image === "object" ? ele.image.className : "")}
                alt="success-stories-image"
              />
            )}
          </div>
        ))}
      </div>

      {/* Right Column: 25% Width */}
      <div className="col-span-4 xl:col-span-1 xl:sticky xl:top-20 xl:self-start">
        <BlogsBookADemo />
        <RecentSuccessStoryCard />
      </div>
    </div>
  );
};

export default SuccessStoryInnerPageGridLayout;
