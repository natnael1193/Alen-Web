"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import ContactFormModal from './ContactFormModal'
import {DownloadApps, HeaderData} from "@/utils/uiData";
import LogoIcon from '../../../public/images/logo.png'
const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false)
    const [open, setOpen] = React.useState(false);
   const showMenuHandler = () => {
        setShowMenu(!showMenu)
    }
    return(
        <>
        <header className="w-full bg-white sticky top-0 min-h-20 z-90"
            style={{
            zIndex: 100
        }}
            >
            <div className={"w-full h-20 flex flex-row justify-between items-center px-10"}>
                <div className={"flex items-center text-black font-jost"}>
                    <Image src={LogoIcon} alt={"Logo"} className={"w-20 h-20"}/>
                    <div className={"text-primary-color font-montserrat text-[24px] font-500"}>Alen</div>
                </div>
                <div className={"hidden text-black  lg:flex lg:flex-row lg:space-x-16"}>
                    {
                        HeaderData.map((header, i)=> {
                            return(
                                <Link href={header.path} className={"font-jost text-[17px]"} key={i}>{header.name}</Link>
                                )
                        })
                        }
                    <button onClick={ () => setOpen(true)} className={"font-jost text-[17px]"}>Contact US</button>
                </div>
                <div className={"hidden text-black lg:flex lg:flex-row lg:space-x-10"}>
                    {
                   DownloadApps.map((apps, i) => {
                       return (
                           <Link href={apps.link} className={"font-jost text-[17px]"} key={i}>
                               <Image src={apps.image} alt={"App Icons"} />
                           </Link>
                           )
                   })}
                </div>
                <div className={"text-black lg:hidden"}>
                    <MobileMenu {...{ open, setOpen }} />
                </div>
            </div>
        </header>
        <ContactFormModal {...{ open, setOpen }} />
        </>

    )
}
export default Header;