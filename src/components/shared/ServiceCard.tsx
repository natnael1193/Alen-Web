import { serviceTags } from '../../utils/uiData'
import ServiceSlider from "@/components/home/ServiceSlider";

const ServiceCard = () => {
    return(
            <div className={"w-full mt-16 rounded-2xl rounded-t-none lg:w-[32%]"}>
                <ServiceSlider />
                <div className="border-[1px] border-t-0 rounded-lg -mt-4">
                    <div className="px-5 py-8">
                        <div className="font-montserrat text-xl  font-semibold">
                            Televsion maintenance
                        </div>
                        <div className="flex flex-row space-x-5 mt-2">
                            {
                    serviceTags.map((tags, index) => {
                        return (
                            <div key={index} className="bg-black text-white font-montserrat p-3 rounded-[6px]">
                                {tags}
                            </div>
                            )
                    })
                  }                  
                        </div>
                        <div className="mt-5">
                            <div className="font-montserrat text-[16px]">The process of keeping your television in good condition and preventing problems from developing.</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ServiceCard;