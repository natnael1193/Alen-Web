import GetAppButton from "./GetAppButton";

const BecomeServiceProvider = () => {
    return(
        <div className="mt-10 lg:mt-0">
            <div className="w-full text-white font-montserrat bg-[#1A1A1A] rounded-3xl p-10 lg:flex lg:flex-row lg:justify-between">
                <div className="lg:w-2/3">
                    <div className="text-[24px] lg:text-[56px]">Became a Service Provider</div>
                    <div className="text-[16px] lg:text-[24px]">You can register as a service provider to Increase your income. Download the app Now and start working NOW !</div>
                </div>
                <div className="mt-3 lg:w-1/3 lg:flex lg:items-center lg:mt-0">
                    <div className="w-full lg:flex lg:justify-end">
                        <GetAppButton name={"Get the App"} url={""} /> 
                    </div>
            
                </div>
            </div>
            
        </div>
    )
}
export default BecomeServiceProvider;