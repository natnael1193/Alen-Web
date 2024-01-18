import Image from 'next/image'
import TheFounderImage from '../../../public/images/the_founder.svg'
const TheFounderNote = () => {
    return(
        <div className={"font-montserrat"}>
            <div className="mt-5 space-x-0 space-y-5 lg:flex lg:flex-row lg:space-y-0 lg:space-x-20 lg:mt-0">
                <div className={"flex flex-row"}>
                    <div className={"w-full -ml-5 -mt-5 bg-black rounded-3xl"} >
                        <Image src={TheFounderImage} alt={"The Founder Image"} className={"ml-5 mt-5 -mb-5"}/>
                        </div>

                </div>

                <div className={"w-full lg:w-1/2 lg:space-y-5"}>
                    <div className={"text-[36px] lg:text-[56px]"}>
                        The Founder Note
                    </div>
                    <div>As the founder of alen PLC, I am proud to see how far we have come in such a short time. We are now the leading provider of nanny solutions in Ethiopia, and we have helped thousands of parents find qualified and experienced nannies for their children.
                        </div>
                    <div>
                        I started alen PLC because I saw a need for a better way to find nannies. I was frustrated with the traditional methods, such as word-of-mouth and online classifieds. It was difficult to find reliable information about nannies, and it was time-consuming to interview them.
                    </div>
                    <div>
                        alen PLC solves these problems by providing a convenient and reliable way to find nannies. Parents can browse our database of nannies who have been vetted by our team. They can read reviews from other parents, and they can schedule interviews with nannies without having to leave their homes.</div>
                </div>
            </div>
        </div>
    )
}

export default TheFounderNote;