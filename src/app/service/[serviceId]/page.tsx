import Hero from "@/components/service/detail/Hero";
import AboutService from "@/components/service/detail/AboutService";
import ServiceList from "@/components/service/detail/ServiceList";

const page = () => {
  return(
    <div className="font-montserrat">
      <Hero />
      <div className="p-10 lg:p-20">
        <AboutService />
        <ServiceList />
      </div>

    </div>
  )
}
export default page;