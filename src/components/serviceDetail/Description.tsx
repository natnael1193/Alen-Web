import Image from 'next/image'
import EmployeeImage from '../../../public/images/service_detail.svg'
const Description = () => {
    return(
        <div className={"mt-10"}>
            <div className="text-[36px] font-semibold">
                The process of fixing your expensive electronics devices 
            </div>
            
      <div className={"space-y-3 mt-5"}>
          <div>ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet gaps present in informal work sectors. ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet.</div>
          <div>ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet gaps present in informal work sectors. ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet.</div>
          <div>ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet gaps present in informal work sectors. ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet.</div>
      </div>
            <div className={"py-5 mt-5"}>
                <Image  src={EmployeeImage} alt={"Service Image"} className={""}/>
            </div>
            
            <div className="text-[36px] font-semibold">
                The process of fixing your expensive electronics devices 
            </div>
            <div className={"space-y-3 mt-5"}>
                <div>ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet gaps present in informal work sectors. ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet.</div>
                <div>ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet gaps present in informal work sectors. ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet.</div>
                <div>ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet gaps present in informal work sectors. ALEN is a start-up that focuses on creating opportunities for talents of all background - from gig workers to certified professionals as we look to meet.</div>
            </div>
        </div>
    )
}
export default Description;