import Search from "@/components/service/Search";
import ServiceList from "@/components/service/ServiceList";
import BecomeServiceProvider from "@/components/shared/BecomeServiceProvider";

const page = () => {
    return(
        <div>
            <Search />
            <div className="p-10 space-y-10 lg:p-20">
                <ServiceList />
                <BecomeServiceProvider />
            </div>
        </div>
    )
}


export default page;