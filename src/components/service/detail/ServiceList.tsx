import ServiceDetailCard from "@/components/shared/ServiceDetailCard";

const ServiceList = () => {
    return(
        <div className={"mt-5 lg:mt-10"}>
        <div className="text-[36px] lg:text-[48px]">Order Now</div>
            <div className="w-full gap-x-5 mt-10 gap-y-10 lg:flex lg:flex-wrap lg:space-y-0">
                        <ServiceDetailCard />
                        <ServiceDetailCard />
                        <ServiceDetailCard />
                        <ServiceDetailCard />
                        <ServiceDetailCard />
                        <ServiceDetailCard />
                    </div>
        </div>
    )
}

export default ServiceList;