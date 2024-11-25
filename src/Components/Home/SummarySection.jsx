import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import MinTitle from '../../Layout/MinTitle'
import { FaDownload } from 'react-icons/fa6'
// react toastify
import { Bounce, Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import resume from "../../assets/tuhinResume.pdf"
const SummarySection = () => {
  // const handleDownload = () => {
  //   // toast.success("Download successfully done!", {
  //   //   position: "bottom-center",
  //   //   autoClose: 10000,
  //   //   hideProgressBar: false,
  //   //   closeOnClick: true,
  //   //   pauseOnHover: true,
  //   //   draggable: true,
  //   //   progress: undefined,
  //   //   theme: "dark",
  //   //   transition: Bounce,
  //   // });

  // }
  return (
    <div className='color-primary '>
      <MidTitle text="Title" className="group-hover:text-theme text-theme " />
      <MidTitle text="MERN Stack" className=" text-3xl group-hover:text-theme duration-300" />
      <MidTitle text="Developer" className="text-right text-3xl opacity-[0.5] z-auto pb-7" />
      <a href={resume} download >
        <div className="resume cursor-pointer flex justify-between items-center  group transition  delay-1000">
          <MinTitle text="My Resume" className="group-hover:text-theme duration-300" />
          <FaDownload className='text-2xl animate-bounce text-primary group-hover:text-theme' />
        </div>

      </a>
      {/* <ToastContainer 
        position="bottom-center"
        autoClose={10000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      /> */}
    </div>
  )
}

export default SummarySection