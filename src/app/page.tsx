import Image from "next/image";
import Slider from "@/components/home/Slider";
import Service from "@/components/home/Service";
import DownloadApp from "@/components/home/DownloadApp";
import Partners from "@/components/home/Partners";
import HappyClients from "@/components/home/HappyClients";

export default function Home() {
  return (
    <>
      <Slider />
      <div className="p-5 lg:p-10">
        <Service />
      </div>
    <DownloadApp />
    <div className="p-5 pr-0 lg:p-10">
      <Partners />
      <HappyClients />
    </div>
    </>
  );
}
