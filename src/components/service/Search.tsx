import SettingsIcon from '@mui/icons-material/Settings';
const Search = () => {
    return(
        <div className={"w-full font-montserrat bg-white_pattern_big_image lg:min-h-[405px]"}>
            <div className="p-5 space-y-5 lg:flex lg:flex-row lg:space-y-0 lg:px-20">
                <div className={"w-full space-y-5 lg:w-1/2 lg:pt-10 lg:space-y-10"}>
                    <div className={"text-[36px] lg:text-[56px]"}>We have Solution <br className="hidden lg:flex" />
                        What are you looking for</div>
                    <div className="flex flex-row w-full justify-between items-center p-5 border-[1px] border-black rounded-full lg:px-10 lg:py-5">
                        <div className={"flex flex-row items-center lg:space-x-5"}>
                            <SettingsIcon style={{
                                color: "#5C5555"
                            }} />
                            <input className={"w-fit lg:w-96 p-2"} placeholder={"Service Title, Keyword"}/>
                        </div>
                   
                        <div>Buttonn</div>
                    </div>
                </div>
                <div className={"w-full lg:w-1/2"}>Two</div>
            </div>
        </div>
    )
}

export default Search;