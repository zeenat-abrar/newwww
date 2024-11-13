import Image from "next/image";

export function ImageSection() {
  return (
    <div className="flex justify-center content-center py-20">
      <Image src="https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/Infoveave-Team.png?w=1536&ssl=1" width={1000} height={1000} alt="image" />;
    </div>
  );
}
