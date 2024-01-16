import Image from 'next/image'
import Logo from '../../../public/images/logo.png'
import {HappyClientsData} from "@/utils/uiData";
const HappyClients = () => {
    return(
        <div className={"mt-10"}>
            <div className="font-montserrat text-[36px] lg:text-[56px]">
                Voice of Our Happy Clients
            </div>
            <div className="flex flex-col bg-white m-auto p-auto lg:mt-10">
            <div
                className="flex overflow-x-scroll pb-10 no-scrollbar"
                >
                <div
                    className="flex flex-nowrap "
                    >
                        {
                        HappyClientsData.map((clients, index) => {
                        return(
                            <div className="inline-block px-3" key={index}>
                            <div
                                className="bg-[#1A1A1A] px-[16px] py-[32px] font-montserrat w-96 min-h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out lg:w-[90rem] lg:max-w-6xl"
                                >
                                <div className={"text-white text-[24px] lg:text-[36px]"}>I am a father of two girls and I always find nani on alen solution. It is a convenient and reliable service that has made my life so much easier. I highly recommend it to other parents.</div>
                                <div className={"flex flex-row mt-3 space-x-3"}>
                                    <Image src={Logo} alt={"User Image"} className={"w-[60px] h-[60px]"} />
                                    <div className={"font-montserrat text-white"}>
                                        <div className={"text-[20px]"}>{clients.user}</div>
                                        <div className={"text-[14px]"}>Father of 2 Girls</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                        })
                        }
                     
                </div>
            </div>
            </div>
        </div>
    )
}
export default HappyClients