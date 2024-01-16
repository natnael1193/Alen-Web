import Image from 'next/Image'
import Link from 'next/link'
import DownloadAppImageOne from '../../../public/images/dowload_app_one.svg'
import DownloadAppImageTwo from '../../../public/images/download_app_two.svg'
import DownloadAppImageThree from '../../../public/images/download_app_three.svg'
import {DownloadApps} from "@/utils/uiData";
const DownloadApp = () => {
    return(
        <div className="bg-[#191919] p-5 lg:flex lg:flex-row lg:p-20">
            <div className="w-full space-x-5 flex flex-row overflow-x-auto no-scrollbar lg:space-x-10 lg:w-1/2">
                <Image src={DownloadAppImageOne} alt={"Download App"} className={""} />
                <Image src={DownloadAppImageTwo} alt={"Download App"} className={""} />
                <Image src={DownloadAppImageThree} alt={"Download App"} className={""} />
            </div>
            <div className="w-full space-y-5 lg:w-1/2 lg:p-10">
                <div className="text-[#D7272A] font-montserrat">
                    DOWNLOAD & ENJOY 
                </div>
                <div className="font-montserrat text-white text-[36px] lg:w-[60%]">
                    Book professionals from 
                    your phone
                </div>
                <div className="p-3 space-y-3">
                    <div className="text-white font-montserrat font-light">Enter your mobile number to get the App download link.</div>
                    <div className="flex flex-row bg-white w-full p-5 rounded-lg divide-x divide-[#E2E2E2] space-x-2">
                        <div className="flex items-center font-montserrat text-[16px]">
                            +251
                        </div>
                        <div className="w-full">
                        <input className="bg-white w-full h-full" />
                        </div>
                        <button className="bg-[#212121] text-white p-3 w-28 rounded-lg">
                            Send
                        </button>
                    </div>
                </div>
                <div className="flex flex-row space-x-3 p-3">
                    {
                   DownloadApps.map((apps, i) => {
                       return (
                           <Link href={apps.link} className={"font-jost text-[17px]"} key={i}>
                               <Image src={apps.image} alt={"App Icons"} />
                           </Link>
                           )
                   })}
                </div>
            </div>
            
        </div>
    )
}

export default DownloadApp;