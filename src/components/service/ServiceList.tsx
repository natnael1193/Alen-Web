import CategoryServiceType from "../shared/CategoryServiceType";
import React from "react";
import Service from "@/components/home/Service";
import ServiceCard from "@/components/shared/ServiceCard";

const ServiceList = () => {
    return(
        <div className="font-montserrat">
            <div className="lg:flex">
                <div className="lg:w-1/6 lg:mt-28">
                    <CategoryServiceType /></div>
                <div className="mt-10 lg:w-5/6 lg:mt-0">
                    <div className="font-semibold text-[36px] lg:text-[48px]">All out services</div>
                    <div className="w-full space-x-3 mt-5 space-y-16 lg:flex lg:flex-wrap lg:justify-between">
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
             
                </div>
            </div>
         
        </div>
    )
}

export default ServiceList;