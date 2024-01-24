import { serviceTags } from '../../utils/uiData'
import ServiceSlider from "@/components/home/ServiceSlider";
import Link from 'next/link'
import Image from 'next/image'
import EmployeeImage from '../../../public/images/employee_service.svg'



const ServiceDetailCard = () => {
    return(
        <Link href={"/service/3"} className={"mt-10 w-full mb-0 rounded-2xl rounded-t-none lg:w-[23%] lg:mt-0"}>
            <Image src={EmployeeImage} alt={"Employee Image"} className={"w-full"} />
            <div className="border-[1px] border-t-0 rounded-lg -mt-4">
                <div className="px-5 py-8">
                    <div className={"flex justify-between"}>
                        <div className="font-montserrat text-[16px] font-bold">
                            Televsion maintenance
                        </div>
                        <div className="font-montserrat text-[16px] text-[#D7272A] font-bold">
                          200 Birr
                        </div>
                    </div>
                 
                    <div className="mt-2">
                        <div className="font-montserrat text-[16px]">The process of keeping your television in good condition and preventing problems from developing.</div>
                    </div>
                    <div className="flex flex-row justify-between mt-3">
                        <Link href={"service/detail/5"} className="bg-[#D7272A] px-[34px] py-[10px] text-white rounded-full">
                            Order Now
                        </Link>
                        <Link href={"detail/5"} className="text-[#D7272A]">
                           Read More
                        </Link>
                    </div>
                    
                </div>
            </div>
        </Link>
        )
}

export default ServiceDetailCard;