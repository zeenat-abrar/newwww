import VideoPlayer from "@/components/ui/video-page/video-player-pop-up";
import { cn } from "@/lib/utils";

const allVideosCardsData = [
  {
    tips: "Infoveave - Designer",
    title: "How to visualize data using Infoveave Charts",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
  {
    tips: "Infoveave - Workflow",
    title: "Automate task using new workflow",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
  {
    tips: "Infoveave - Query Builder",
    title: "Find a new way of writing queries",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
  {
    tips: "Infoveave - Job",
    title: "Link tasks to automate your business needs",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
  {
    tips: "Infoveave - Workflow",
    title: "Automate task using new workflow",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
  {
    tips: "Infoveave - Query Builder",
    title: "Find a new way of writing queries",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
  {
    tips: "Infoveave - Job",
    title: "Link tasks to automate your business needs",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
];

const gridSideCardsData = [
  {
    tips: "Infoveave - Designer",
    title: "How to visualize data using Infoveave Charts",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
  {
    tips: "Infoveave - Workflow",
    title: "Automate task using new workflow",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
  {
    tips: "Infoveave - Query Builder",
    title: "Find a new way of writing queries",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
  {
    tips: "Infoveave - Job",
    title: "Link tasks to automate your business needs",
    image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Flower-Logo.png?fit=237%2C212&ssl=1",
    video: "https://www.youtube.com/watch?v=bzpDCiw5yrQ",
  },
];

const AllVideosSection = () => {
  return (
    <section className="text-black pb-40 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left List Sidebar */}
        <div className="space-y-6 md:sticky md:top-10 md:self-start">
          <h1 className={`font-secondary text-2xl font-bold mb-5 text-left`}>
            <span className="text-ivviolet-500">Important</span> topics
          </h1>
          {gridSideCardsData.map((video, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center md:space-x-4 border border-gray-300 rounded-xl p-2 shadow-xl gap-4 md:gap-0 bg-white bg-opacity-50",
                "bg-opacity-50"
              )}
            >
              <div className="relative w-1/3 h-24">
                <VideoPlayer
                  imageClassName="h-[95px] md:h-[95px]"
                  playButtonClassName="size-[30px] md:size-[30px]"
                  playButtonSize="12"
                  videoLink={video.video}
                />
              </div>
              <div className="flex flex-col gap-8 w-2/3">
                <span className="text-gray-400 uppercase text-base">{video.tips}</span>
                <h3 className="text-sm font-bold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right side section */}
        <div className="col-span-2 relative flex flex-col gap-6">
          <h1 className={`font-secondary text-2xl font-bold text-left`}>
            Our <span className="text-ivviolet-500">Videos</span>
          </h1>
          {allVideosCardsData.map((video, index) => (
            <div key={index} className={cn("w-full border border-gray-300 rounded-xl p-5 shadow-xl flex gap-5 bg-white bg-opacity-50", "bg-opacity-50")}>
              <div className="w-1/2">
                <VideoPlayer
                  videoLink="https://www.youtube.com/watch?v=ch0K70OVMw4"
                  imageClassName="md:h-[210px]"
                  playButtonClassName="size-[50px] md:size-[50px]"
                  playButtonSize="16"
                />
              </div>
              <div className="w-1/2">
                <span className="text-gray-400 uppercase text-base">{video.tips}</span>
                <h2 className="text-xl font-bold mt-2">{video.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllVideosSection;
