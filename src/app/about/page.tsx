import AboutUs from '@/components/about/AboutUs'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import TheFounderNote from '@/components/about/TheFounderNote'
import MeetTheTeam from '@/components/about/MeetTheTeam'
import BecomeServiceProvider from '@/components/shared/BecomeServiceProvider'

const page = () => {
    return(
        <>
        <div className="p-5 lg:p-10">
            <AboutUs />
            </div>
           <WhyChooseUs />
        <div className="p-5 lg:p-10">
        <TheFounderNote />
            </div>
        <MeetTheTeam />
        <div className="p-5 lg:p-10">
        <BecomeServiceProvider />
            </div>
        </>
    )
}
export default page;