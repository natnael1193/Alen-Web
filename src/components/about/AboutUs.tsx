import Image from 'next/image'
import AboutUsImage from '../../../public/images/about_us.svg';
import StarIcon from '@mui/icons-material/Star';
const AboutUs = () => {
    return(
        <div>
            <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
                <div className="mt-5 font-montserrat lg:w-2/3 lg:pr-10 lg:mt-0">
                    <div className="text-[36px] lg:text-[56px]">About Us</div>
                    <div className="text-[20px]">ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet gaps present in informal work sectors.</div>
                    <div className="space-y-5 mt-10 lg:flex lg:flex-row lg:justify-between lg:space-x-10 lg:space-y-0">
                        <div className="lg:w-1/2">
                            <div className="text-[24px]">Our Vision</div>
                            <div className="mt-3">ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet gaps present in informal work sectors.</div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="text-[24px]">Our Mission</div>
                            <div className="mt-3">ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet gaps present in informal work sectors.</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <Image src={AboutUsImage} alt={"About Us"} />
                </div>
            </div>
            <div className="flex flex-row justify-between mt-10 w-full font-montserrat">
                <div className="w-1/2 text-[#555555] flex flex-col items-center lg:w-1/4">
                    <div className="font-semibold text-[28px]">
                        4500+
                    </div>
                    <div className="text-[18px]">Trained Professionals</div>
                </div>
                <div className="w-1/2 text-[#555555] flex flex-col items-center lg:w-1/4">
                    <div className="font-semibold text-[28px]">
                        25,000+
                    </div>
                    <div className="text-[18px]">Happy Customers</div>
                </div>
                <div className="w-1/2 text-[#555555] flex flex-col items-center lg:w-1/4">
                    <div className="font-semibold text-[28px]">
                        14
                    </div>
                    <div className="text-[18px]">Regions in Addis</div>
                </div>
                <div className="w-1/2 text-[#555555] flex flex-col items-center lg:w-1/4">
                    <div className="font-semibold text-[28px]">
                        5 <StarIcon style={{
                            color: "#f0ad4e"
                        }} />
                    </div>
                    <div className="text-[18px]">From 700+ reviews</div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;