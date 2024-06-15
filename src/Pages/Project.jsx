import React, { useState } from 'react'
import Container from "../Layout/Container"
import img from "../assets/profile.jpeg"
import Button from '../Layout/Button'
import MinTitle from '../Layout/MinTitle'
import { projectButton, projectData } from "../Components/Project/ProjectData"
console.log(projectButton, projectData);
const Project = () => {
  const [active , setActive] = useState(false)
  const handleButton = (e) => {
    console.log(e.target.value);
    const activeBtn = (e.target.value);
    setActive(activeBtn)
  }
  return (
    <div>
      <Container>

        {/* buttons  */}
        <div  className="md:w-[70%] w-full m-auto btn grid grid-cols-3 lg:grid-cols-5 md:py-6 py-0 gap-2">
          {projectButton.map((item, id) => {
            const { name, value } = item
            return <Button onClick={handleButton} key={id} value={value} text={name} className={`${active === value ? "!bg-theme !text-primary" : ""} !bg-transparent hover:!bg-theme hover:!text-primary text-theme`} />
          })}
        </div>

        {/* project gallary */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-6">
        {
          projectData.map((item, id) => {
            const { projectImage, projectName, projectDesc, liveLink, sourceLink, category } = item
            return (
              <div key={id} className=' lg:h-[250px] overflow-hidden relative rounded-lg  group '  >
                <div className='after w-full h-full bg-[#00000080] text-primary absolute top-[100%] group-hover:top-0 left-0 opacity-100  transition-all duration-300 ease-in-out px-4 py-4 rounded-lg '>
                <MinTitle text={projectName} className="projectName text-center  pb-6" />
                  <MinTitle text={projectDesc} className="hidden lg:contents description lg:h-[100px] pt-6" />
                  <div className="buttonList md:flex justify-between items-center mt-4 gap-6 justify-center">
                    <Button directLink={liveLink} text="Live View" className="!rounded-md !px-2 !py-2 hover:!border-primary hover:!text-primary" />
                    <Button directLink={sourceLink} text="Source Code" className="!rounded-md !px-2 !py-2 hover:!border-primary hover:!text-primary md:mt-0 mt-2"  />
                  </div>
                </div>
                <img src={projectImage} alt="" className='' />
              </div>
            )
          })
        }
        </div>

      </Container>
    </div>
  )
}

export default Project