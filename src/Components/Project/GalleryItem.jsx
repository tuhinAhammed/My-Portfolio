import React from 'react'
import MinTitle from '../../Layout/MinTitle'
import Button from '../../Layout/Button'

const GalleryItem = ({id , projectName , projectDesc , liveLink , sourceLink , projectImage}) => {
  return (
    <div key={id} className='w-full lg:w-[400px] h-[230px]  overflow-hidden relative rounded-lg  group m-auto'  >
    <div className='after w-full h-full bg-[#00000080] text-primary absolute top-[100%] group-hover:top-0 left-0 opacity-100 group-hover:opacity-100 transition-all duration-300 ease-in-out p-4 rounded-lg '>
    <MinTitle text={projectName} className="projectName text-center  pb-2" />
      <MinTitle text={projectDesc} className="hidden lg:contents description !py-20 " />
      <div className=" buttonList md:flex justify-center lg:justify-between items-center  gap-6 pt-2 text-center">
        <Button directLink={liveLink} text="Live View" className="!rounded-md !px-1 !py-1 lg:!px-2 lg:!py-2 hover:!border-primary hover:!text-primary" />
        <Button directLink={sourceLink} text="Source Code" className="!rounded-md !px-1 !py-1 lg:!px-2 lg:!py-2 hover:!border-primary hover:!text-primary md:mt-0 mt-4"  />
      </div>
    </div>
    <img src={projectImage} alt="" className=' w-full h-full' />
  </div>
  )
}

export default GalleryItem