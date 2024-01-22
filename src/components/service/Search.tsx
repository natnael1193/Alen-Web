import Image from 'next/image';
import SettingsIcon from '@mui/icons-material/Settings';
import WhiteTextButton from "@/components/shared/WhiteTextButton";
import IconButton from "../shared/IconButton";
import ServiceImageOne from '../../../public/images/service_image_one.svg'
import ServiceImageTwo from '../../../public/images/service_image_two.svg'
import ServiceImageThree from '../../../public/images/service_image_three.svg'
const Search = () => {
    return(
        <div className={"w-full font-montserrat bg-white_pattern_big_image lg:min-h-[405px]"}>
            <div className="p-5 space-y-5 lg:flex lg:flex-row lg:space-y-0 lg:px-20">
                <div className={"w-full space-y-5 lg:w-1/2 lg:pt-10 lg:space-y-10"}>
                    <div className={"text-[36px] lg:text-[56px]"}>We have Solution <br className="hidden lg:flex" />
                        What are you looking for</div>
                    <div className="flex flex-row bg-[#F1F1F1] w-full justify-between items-center p-5 border-[1px] border-black rounded-full lg:px-10 lg:py-5">
                        <div className={"flex flex-row items-center lg:space-x-5"}>
                            <SettingsIcon style={{
                                color: "#5C5555"
                            }} />
                            <input className={"w-fit bg-transparent lg:w-96 p-2"} placeholder={"Service Title, Keyword"}/>
                        </div>
                        <div className={"flex flex-col justify-center items-center"}>
                            <div className="hidden lg:flex">
                                <WhiteTextButton name="Search For Services" />
                            </div>
                            <div className="flex lg:hidden">
                                <IconButton.SearchWhiteIconButton  />
                            </div>
                        </div>
                    </div>
                    <div className={"lg:flex"}>
                        <div className={"text-black text-semibold text-[20px]"}>People also search for:  </div>
                        <div className={"flex items-center pl-3 space-x-3"}>
                            <div className={"text-[#D7272A]"}>TV Maintenance</div>
                            <div className={"text-[#D7272A]"}>TV Maintenance</div>
                            <div className={"text-[#D7272A]"}>TV Maintenance</div>
                        </div>
                    </div>
                </div>
                <div className={"w-full lg:w-1/2 lg:flex lg:flex-row lg:justify-center lg:space-x-5"}>
                    <div className={"lg:space-y-5"}>
                        <Image src={ServiceImageOne} alt={"Service Image"} className={"w-full mt-3 lg:mt-0"} />
                        <Image src={ServiceImageTwo} alt={"Service Image"} className={"w-full mt-3 lg:mt-0"} />
                    </div>
                    <div className={"lg:flex lg:items-center"}>
                        <Image src={ServiceImageThree} alt={"Service Image"} className={"w-full mt-3 lg:mt-0"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;