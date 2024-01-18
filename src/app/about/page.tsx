import AboutUs from '@/components/about/AboutUs'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import TheFounderNote from '@/components/about/TheFounderNote'

const page = () => {
    return(
        <>
        <div className="p-5 lg:p-20">
            <AboutUs />
            </div>
           <WhyChooseUs />
        <div className="p-5 lg:p-20">
        <TheFounderNote />
            </div>
        </>
    )
}
export default page;