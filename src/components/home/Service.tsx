"use client"
import React from "react";
import Title from "../shared/Title";
import TextButton from "../shared/TextButton";
import IconButton from "../shared/IconButton";
import { serviceTags } from '../../utils/uiData'
import ServiceSlider from "@/components/home/ServiceSlider";

const Service = () => {

  return (
    <div>
      <div className="flex flex-row justify-between">
        <Title name="Popular services" />
        <div className="flex">
          <div className="hidden lg:visible">
            <TextButton name="Search For Services" />
          </div>
          <div className="visible lg:hidden">
            <IconButton.SearchIconButton />
          </div>
        </div>
      </div>
     
      <div>
        <div className="mt-10 space-y-16 lg:mt-16 lg:flex lg:flex-wrap lg:justify-between">
          <div className={"w-full mt-16 rounded-2xl rounded-t-none lg:w-[22%]"}>
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
          <div className={"w-full rounded-2xl rounded-t-none lg:w-[22%]"}>
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
          <div className={"w-full rounded-2xl rounded-t-none lg:w-[22%]"}>
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
          <div className={"w-full rounded-2xl rounded-t-none lg:w-[22%]"}>
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
          
          <div className={"w-full rounded-2xl rounded-t-none lg:w-[22%]"}>
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
          <div className={"w-full rounded-2xl rounded-t-none lg:w-[22%]"}>
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
          <div className={"w-full rounded-2xl rounded-t-none lg:w-[22%]"}>
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
          <div className={"w-full rounded-2xl rounded-t-none lg:w-[22%]"}>
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

          
        </div>
      </div>
    </div>
  );
};

export default Service;
