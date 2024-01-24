import Image from 'next/image'
import EmployeeImage from '../../../public/images/service_detail.svg'
const Hero = () => {
    return(
        <div className="w-full">
            <Image src={EmployeeImage} alt={"Employee Image"} className={"w-full"} />
        </div>
    )
}

export default Hero;