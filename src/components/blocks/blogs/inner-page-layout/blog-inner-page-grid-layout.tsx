import Image from "next/image";
import BlogsBookADemo from "@/components/blocks/blogs/blogs-book-a-demo-form";
import RecentBlogsCard from "@/components/blocks/blogs/recent-blogs-card";
import SingleLineList from "@/components/blocks/blogs/single-list";
import { cn } from "@/lib/utils";

type ImageWithClass = {
  image: string;
  className?: string;
};

type FormulaWithClass = {
  formula: string;
  className?: string;
};

export type BlogContentType = {
  id?: number;
  heading?: string;
  subHeading?: string;
  list?: string[];
  paragraph?: string;
  paragraphArray?: string[];
  formulaArrayWithClass?: FormulaWithClass[];
  formula?: string;
  bulletPoints?: string[];
  image?: string | ImageWithClass;
  video?: string;
  listImage?: string;
};

export interface BlogInnerPageGridLayoutProps {
  content: BlogContentType[];
}

const BlogInnerPageGridLayout = ({ content }: BlogInnerPageGridLayoutProps) => {
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
            {ele.paragraphArray != undefined &&
              ele.paragraphArray.map((para, paraIndex) => (
                <p className="text-base mb-2" key={paraIndex}>
                  {para}
                </p>
              ))}
            {ele.formula && <p className="text-base font-semibold text-center">{ele.formula}</p>}
            {ele.formulaArrayWithClass &&
              ele.formulaArrayWithClass.map((formula, formulaIndex) => (
                <p key={formulaIndex} className={cn("text-base font-semibold text-center", formula.className)}>
                  {formula.formula}
                </p>
              ))}
            {ele.bulletPoints && Array.isArray(ele.bulletPoints) && (
              <ol className="list-square text-base space-y-5 pl-5 my-4 md:ml-6">
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
                alt="blog-image"
              />
            )}
            {ele.video && (
              <video
                src={ele.video}
                autoPlay // Autoplays the video
                loop // Loops the video
                muted // Mutes the video
                playsInline
                className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                preload="none" // Lazy load the video by not preloading it
              />
            )}
          </div>
        ))}
      </div>

      {/* Right Column: 25% Width */}
      <div className="col-span-4 xl:col-span-1 xl:sticky xl:top-20 xl:self-start">
        <BlogsBookADemo />
        <RecentBlogsCard />
      </div>
    </div>
  );
};

export default BlogInnerPageGridLayout;
