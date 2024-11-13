import VideoPlayer from "@/components/ui/video-page/video-player-pop-up";

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

const VideoGridLayout = () => {
  return (
    <section className="text-black pt-20 pb-32 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Video */}
        <div className="col-span-2 relative border border-gray-300 rounded-xl p-5 shadow-xl">
          <div className="relative">
            <VideoPlayer videoLink="https://www.youtube.com/watch?v=ch0K70OVMw4" />
          </div>
          <div className="mt-4">
            <span className="text-gray-400 uppercase text-base">Infoveave Charts and Visualization</span>
            <h2 className="text-2xl font-bold mt-2">Make your own dashboard using dynamic templates</h2>
          </div>
        </div>

        {/* Video List Sidebar */}
        <div className="space-y-6">
          {gridSideCardsData.map((video, index) => (
            <div key={index} className="flex items-center md:space-x-4 border border-gray-300 rounded-xl p-2 shadow-xl gap-4 md:gap-0">
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
      </div>
    </section>
  );
};

export default VideoGridLayout;
