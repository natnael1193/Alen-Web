import Image from 'next/image'
import Logo from '../../../public/images/logo.png'
import {DownloadTransparentApps, SocialMediaIcons} from "@/utils/uiData";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return(
        <div className={"w-full h-full lg:h-[30rem] bg-black bg-contain bg-pattern_image"}
            >
            
            <div className="lg:flex lg:flex-row p-10 lg:p-20">
                <div className="w-full lg:w-1/3">
                    <div className={"flex flex-row space-x-3"}>
                        <Image src={Logo} alt={"Logo Image"} className={"w-[49px] h-[49px]"} />
                        <div className={"flex items-center text-[24px] text-white font-montserrat"}>
                            Alen
                            </div>
                    </div>
                    <div className="font-montserrat text-white space-x-3">
                        <div>
                            <div>Call us</div>
                            <div>+251915251966</div>
                        </div>
                        <div className={"mt-3"}>
                            <div>Bole, near awash bank, Addis Ababa</div>
                            <div>Ethiopia</div>
                            <div>support@alen.com</div>
                        </div>   
                    </div>
                  
                </div>
                <div className="w-full mt-10 text-white font-montserrat flex flex-wrap lg:w-2/3 lg:mt-0">
                    <div className={"w-1/2 lg:w-1/4"}>
                        <div className={"text-[24px]"}>For Candidates</div>
                        <ul className={"mt-5 space-y-5"}>
                            <li>Browse Jobs</li>
                            <li>Browse Jobs</li>
                            <li>Browse Jobs</li>
                        </ul>
                    </div>
                    <div className={"w-1/2 lg:w-1/4"}>
                        <div className={"text-[24px]"}>For Employers</div>
                        <ul className={"mt-5 space-y-5"}>
                            <li>All Employers</li>
                            <li>Employer Dashboard</li>
                            <li>Submit Job</li>
                        </ul>
                    </div>
                    <div className={"mt-10 w-1/2 lg:w-1/4 lg:mt-0"}>
                        <div className={"text-[24px]"}>About Us</div>
                        <ul className={"mt-5 space-y-5"}>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className={"mt-10 w-1/2 lg:w-1/4 lg:mt-0"}>
                        <div className={"text-[24px]"}>Mobile Apps</div>
                        <div className={"mt-5"}>Click and Get started in seconds</div>
                        <ul className={"mt-5"}>
                            {
                            DownloadTransparentApps.map((apps, index) => {
                                return <Image src={apps.image} alt={"Download Apps"} className={""} key={index} />
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-white font-montserrat lg:flex lg:flex-row lg:justify-between px-10 lg:px-20">
                <div>© 2023 Alen. All Right Reserved.</div>
                <div className={"pb-5 mt-3 flex flex-row space-x-5 lg:pb-0 lg:mt-0"}>
                    <FacebookIcon />
                    <XIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </div>
            </div>
        </div>
    )
}

export default Footer;