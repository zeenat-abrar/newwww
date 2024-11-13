import Image from "next/image";
import Link from "next/link";
import CareersAtInfoveaveImage from "@/assets/about-us/careers/careers-at-infoveave.svg";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

const CareersAtInfoveaveSection = () => {
  return (
    <section className="xl:max-w-[100rem] xl:mx-auto px-[3%] xl:px-[104px] mx-auto flex flex-col justify-center items-center md:flex-row pt-20 lg:py-10">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-between rounded-b-lg md:rounded-r-lg md:rounded-b-none">
        <div>
          <h2 className="text-sm font-semibold text-left">CAREERS AT INFOVEAVE</h2>
          <MainHeadingWithSpan firstText={""} specialText={"Work"} lastText={"with us"} />
          <p className="text-base text-left">
            At Infoveave® we think big; we give life to data. Transform your career with us. We believe that our people are our greatest asset. As a member of
            the Infoveave team, you’ll have the opportunity to work on cutting-edge data analytics solutions. You’ll be challenged to think creatively and
            collaborate with a diverse group of talented professionals.
          </p>
          <p className="text-base text-left mt-4">
            We welcome focused, driven and tech fanatics to take on the challenge. It’s not all work and no play – we value work-life balance and offer a range
            of perks and benefits to help you maintain a healthy and fulfilling lifestyle. If you’re ready to take your career to the next level and make a
            difference, join us at Infoveave. Apply now to become a part of our dynamic and growing team.
          </p>
          <h4 className="text-base text-black mt-5">
            Write to us{" "}
            <Link href="mailto:hr@infoveave.com" className="text-ivviolet-700">
              {" "}
              hr@infoveave.com
            </Link>
          </h4>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-end">
        <Image
          src={CareersAtInfoveaveImage}
          alt="Careers at Infoveave"
          width={2048}
          height={1804}
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full xl:w-[70%]"
        />
      </div>
    </section>
  );
};

export default CareersAtInfoveaveSection;
