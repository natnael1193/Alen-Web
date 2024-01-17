import ThunderBoltImage from '../../../public/images/thunder_bolt.svg'
import Image from 'next/image'
import GetAppButton from '../shared/GetAppButton';
const WhyChooseUs = () => {
    return(
        <div className="w-full text-white font-montserrat p-10 mb-10 bg-cover bg-pattern_image bg-no-repeat lg:p-20 lg:flex lg:flex-row"
            style={{ backgroundImage : `url("https://alenplc.com/images/Alen-Pattern-04.jpg")` }}
            >
            <div className="w-full lg:w-1/2">
                <div className={"text-[26px] lg:text-[56px]"}>Why Choose us?</div>
                <div className="my-5">
                    ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet gaps present in informal work sectors.
                </div>
                <GetAppButton name={"Contact Us"} url={""}/>
            </div>
            <div className="w-full space-y-10 mt-5 lg:w-1/2">
                <div className="space-y-5 space-x-0 w-full tex-white lg:flex lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-5">
                    <div className="flex flex-col space-y-3 items-center lg:w-1/2">
                        <Image src={ThunderBoltImage} alt={"Thunder Bolt Image"} />
                        <div className={"text-[24px] font-semibold"}>Win Win</div>
                        <div className={"text-center"}>We look to be the experts on addressing previously neglected unaddressed populations to create jobs and ensure quality of services rendered.</div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center lg:w-1/2">
                        <Image src={ThunderBoltImage} alt={"Thunder Bolt Image"} />
                        <div className={"text-[24px] font-semibold"}>Simplicity</div>
                        <div className={"text-center"}>With technology at the forefront of our operations, we must and will ensure that our product provides easier access to both sides of the coin, as a feasible tech solution <div>
                    </div>
                </div>
                    </div>
                </div>
                <div className="space-y-5 space-x-0 w-full tex-white lg:flex lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-5">
                    <div className="flex flex-col space-y-3 items-center lg:w-1/2">
                        <Image src={ThunderBoltImage} alt={"Thunder Bolt Image"} />
                        <div className={"text-[24px] font-semibold"}>Ownership</div>
                        <div className={"text-center"}>With much work done so far, we are proud of our proven track record where banks and investment entities can count on us as accountable entities in the job marketplace.</div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center lg:w-1/2">
                        <Image src={ThunderBoltImage} alt={"Thunder Bolt Image"} />
                        <div className={"text-[24px] font-semibold"}>Affordability</div>
                        <div className={"text-center"}>With technology on our side, there is no boundary to what we can provide. This means that we minimize our share in ensuring fair</div>
                    </div>
                </div>
            </div>
       
            </div>
    )
}

export default WhyChooseUs;