"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  imageSrc: string;
  href: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, imageSrc, href }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[30%]">
    <Link href={href}>
      <Image src={imageSrc} alt={title} width={500} height={500} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-gray-800">{title}</h3>
      </div>
    </Link>
  </div>
);

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Why is data analytics the one stop station for business growth",
      imageSrc: "https://i0.wp.com/infoveave.com/wp-content/uploads/2022/02/Data-analytics-business-growth.jpeg?w=560&ssl=1",
      href: "/blog/blog-post-1",
    },
    {
      id: 2,
      title: "Data monitoring capabilities of Infoveave’s NGauge forms",
      imageSrc: "https://i0.wp.com/infoveave.com/wp-content/uploads/2022/02/NGauge.jpeg?w=560&ssl=1",
      href: "/blog/blog-post-2",
    },
    {
      id: 3,
      title: "RPA’s impact on business: How it’s transforming the industry",
      imageSrc: "https://i0.wp.com/infoveave.com/wp-content/uploads/2022/02/RPAs-impact-on-business.jpeg?w=560&ssl=1",
      href: "/blog/blog-post-3",
    },
  ];

  return (
    <section className="py-20 my-10">
      <div className="xl:max-w-[100rem] xl:mx-auto px-[76px] mx-auto mb-5">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">All blogs</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        {/* Button group */}
        <div className="flex space-x-2 mt-14 justify-center">
          {/* Previous Button */}
          <button className="px-4 py-2 bg-ivindigo-700 text-white font-semibold rounded-l-md hover:bg-ivindigo-900 focus:outline-none focus:ring-2 focus:ring-ivindigo-300">
            Previous
          </button>

          {/* Numbered Buttons */}
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className="px-4 py-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ivindigo-300"
            >
              {num}
            </button>
          ))}

          {/* Next Button */}
          <button className="px-4 py-2 bg-ivindigo-700 text-white font-semibold rounded-r-md hover:bg-ivindigo-900 focus:outline-none focus:ring-2 focus:ring-ivindigo-300">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
