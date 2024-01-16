import Image from "next/image";
import Slider from "@/components/home/Slider";
import Service from "@/components/home/Service";
import DownloadApp from "@/components/home/DownloadApp";

export default function Home() {
  return (
    <>
      <Slider />
      <div className="p-5 lg:p-10">
        <Service />
      </div>
    <DownloadApp />
    </>
  );
}
