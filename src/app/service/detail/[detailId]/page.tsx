import Hero from "@/components/serviceDetail/Hero";
import Description from "@/components/serviceDetail/Description";

const page = () => {
    return(
        <div className="font-montserrat p-10 pt-0 lg:py-20 lg:px-36 lg:pt-0">
            <Hero />
            <Description />
        </div>
    )
}

export default page;