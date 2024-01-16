import Image from 'next/image'
import AwashLogo from '../../../public/images/awash.svg'
import HayatRegencyLogo from '../../../public/images/hayat_regency.svg'
import EthiopianAgricultureLogo from '../../../public/images/ethiopian_agriculture.svg'
const Partners = () => {
    return(
        <div>
            <div className="font-montserrat text-[36px] lg:text-[56px]">
                Our Partners
            </div>
           <div className="w-full flex flex-row space-x-10 mt-10 no-scrollbar overflow-x-auto">
               <Image src={AwashLogo} alt={"Awash Logo"} />
               <Image src={HayatRegencyLogo} alt={"HayatRegency Logo"} />
               <Image src={EthiopianAgricultureLogo} alt={"EthiopianAgricultur Logo"} />
               <Image src={AwashLogo} alt={"Awash Logo"} />
               <Image src={HayatRegencyLogo} alt={"HayatRegency Logo"} />
               <Image src={EthiopianAgricultureLogo} alt={"EthiopianAgricultur Logo"} />
               <Image src={AwashLogo} alt={"Awash Logo"} />
               <Image src={HayatRegencyLogo} alt={"HayatRegency Logo"} />
               <Image src={EthiopianAgricultureLogo} alt={"EthiopianAgricultur Logo"} />
           </div>
        </div>
    )
}

export default Partners;