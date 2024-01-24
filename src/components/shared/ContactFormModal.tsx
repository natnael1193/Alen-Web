import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image'
import PersonIcon from '../../../public/images/person.svg'
import PhoneIcon from '../../../public/images/phone.svg'
import CloseIcon from '../../../public/images/close.svg'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
};

export default function ContactFormModal({ open, setOpen }) {

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                      <div className={"w-full font-montserrat bg-white"}>
                 <div className="w-full flex flex-row justify-center space-x-5">
                     <div className={"text-[24px] text-center w-96"}>Contact Form</div>
                     <Image src={CloseIcon} alt={"Close Icon"} onClick={handleClose} className={"w-[24px] h-[24px]"} />
         
                 </div>
                          <div className={"space-y-5"}>
                              <div className="space-y-2 mt-3">
                                  <div>Full Name</div>
                                  <div className={"flex flex-row border-[1px] border-[#DADADA] bg-[#F9F9F9] rounded-[5px] p-3 space-x-3"}>
                                      <Image src={PersonIcon} alt={"Person Icon"} />
                                      <input placeholder={"Abebe Bekele"} className={"w-full bg-[#F9F9F9]"}/> 
                                  </div>
                              </div>
                              <div className="space-y-2 mt-3">
                                  <div>Mobile Number</div>
                                  <div className={"flex flex-row border-[1px] border-[#DADADA] bg-[#F9F9F9] rounded-[5px] p-3 space-x-3"}>
                                      <Image src={PhoneIcon} alt={"Phone Icon"} />
                                      <input placeholder={"09090909"} className={"w-full bg-[#F9F9F9]"}/> 
                                  </div>
                              </div>
                              <div className="space-y-2 mt-3">
                                  <div>Message</div>
                                  <textarea className={"w-full bg-[#F9F9F9] border-[1px] border-[#DADADA] rounded-[5px] p-3"} rows={5} placeholder={"Your Message"}></textarea>
                              </div>
                              <button className={"w-full bg-black px-10 py-5 rounded-full text-white"}>Send Message</button>
                          </div>
             </div>
                </Box>
            </Modal>
        </div>
        );
}
