import BlogInnerPageGridLayout, { BlogContentType } from "@/components/blocks/blogs/inner-page-layout/blog-inner-page-grid-layout";
import { Footer } from "@/components/ui/footer";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

export interface BlogInnerPageGridLayoutProps {
  heading: string;
  content: BlogContentType[];
}

const BlogsInnerPage = ({ heading, content }: BlogInnerPageGridLayoutProps) => {
  const splitHeading = heading.split("|");
  return (
    <section className="pt-16">
      <div className="grid grid-cols-4 mb-[-20px] px-[3%] xl:px-[104px] 3xl:max-w-[100rem] xl:mx-auto">
        <div className="col-span-4 xl:col-span-3">
          <MainHeadingWithSpan firstText={splitHeading[0]} specialText={splitHeading[1]} lastText={splitHeading[2]} alignText="center" />
        </div>
        <div className="hidden xl:col-span-1"></div>
      </div>

      <BlogInnerPageGridLayout content={content} />
      <section className="pt-20">
        <Footer />
      </section>
    </section>
  );
};

export default BlogsInnerPage;
