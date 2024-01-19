import IconsImage  from '../../../public/images/icons.svg'
import  EmployeeImage from '../../../public/images/employee.svg'
import logo  from '../../../public/images/logo.png'
const MeetTheTeam = () => {
    return(
        <div className="font-montserrat pb-10">
            <div className="flex flex-col items-center">
                <div className="text-[36px] font-bold lg:text-[56px]">Meet The Team</div>
                <div className="text-center text-[24px] w-full lg:w-1/2">Get help 24/7, with our award-winning support network of payments experts. Meet the team who made this happen  </div>
            </div>
            <div
                className="flex overflow-x-scroll mt-5 no-scrollbar"
                >
                <div className="flex flex-nowrap">
                    <div className="flex bg-gradient-to-r from-white to-transparent w-44 h-[330px] space-x-10 absolute left-0"></div>
                    {
                    [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,7,811].map((item, index) => {
                        return(
                            <div key={index} className={`flex flex-col mx-2 justify-end w-[330px] h-[330px] rounded-xl bg-[url('https://cdn.pixabay.com/photo/2023/11/22/15/20/books-8405721_1280.jpg')] overflow-hidden`}
                                >
                                <div className="flex flex-col justify-end h-[330px] px-3 pb-3 w-full">
                                    <div className="bg-white h-20"
                                        >
                                        <div className="h-20 w-full opacity-100 bg-white_pattern_image bg-cover p-3">
                                            <div className="font-semibold text-[20px]">SEYOUM TESFAYE</div>
                                            <div>Founder / CEO</div>
                                        </div>
                                    </div>
                             </div>
                            </div>
                        )
                    })
                    }

                    <div className="bg-gradient-to-l from-white to-transparent w-44 h-[330px] absolute right-0"></div>
                </div>
                </div>

        </div>
    )
}

export default MeetTheTeam;