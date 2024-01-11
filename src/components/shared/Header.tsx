"use client"
import React from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false)
   const showMenuHandler = () => {
        setShowMenu(!showMenu)
    }
    return(
        <div className="w-full bg-white min-h-[86px]">
            <div className={"w-full flex flex-row justify-between px-10 py-5"}>
                <div className={"text-black"}>
                    Image
                </div>
                <div>
                    <div className={""}>
                        
                    </div>
                    <div className={"hidden text-black lg:flex lg:flex-row"}>
                        <div>Content</div>
                        <div>Content</div>
                        <div>Content</div>
                        <div>Content</div>
                    </div>
                    {/*<button onClick={showMenuHandler} className={"text-black lg:hidden"}>*/}
                    {/*    Icon*/}
                    {/*</button>*/}
                    <div className={"text-black lg:hidden"}>
                        <MobileMenu />
                        </div>
                </div>
                
            </div>
            <Link href={"blog"}>
                Blog
                </Link>
        </div>
    )
}
export default Header;