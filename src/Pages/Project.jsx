import React, { useEffect, useState } from 'react'
import Container from "../Layout/Container"
import img from "../assets/profile.jpeg"
import Button from '../Layout/Button'
import MinTitle from '../Layout/MinTitle'
import { projectButton, projectData } from "../Components/Project/ProjectData"
console.log(projectButton, projectData);
const Project = () => {
  const [active , setActive] = useState(false)
  const [filterProject , setFilterProject] = useState(null)
  useEffect(() => {
    setFilterProject(projectData)
  },[])
  const handleButton = (e) => {
    console.log(e.target.value);
    const activeBtn = (e.target.value);
    setActive(activeBtn)
    const newFilterProject = projectData.filter((item) => item.category === activeBtn)
    activeBtn === "all" ? setFilterProject(projectData) : setFilterProject(newFilterProject)
    // setFilterProject(newFilterProject);
    // console.log(filterProject);
  }
  return (
    <div>
      <Container>

        {/* buttons  */}
        <div  className="md:w-[70%] w-full m-auto btn md:flex justify-center items-center grid grid-cols-2 lg:grid-cols-5 md:py-6 py-0 gap-2 lg:gap-4">
          {projectButton.map((item, id) => {
            const { name, value } = item
            return <Button onClick={handleButton} key={id} value={value} text={name} className={`${active === value ? "!bg-theme !text-primary" : ""} bg-transparent hover:!bg-theme hover:!text-primary text-theme`} />
          })}
        </div>

        {/* project gallary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-6">
        {
          filterProject &&
          filterProject.map((item, id) => {
            const { projectImage, projectName, projectDesc, liveLink, sourceLink, category } = item
            return (
              <div key={id} className='w-full lg:w-[350px] overflow-hidden relative rounded-lg  group '  >
                <div className='after w-full h-full bg-[#00000080] text-primary absolute top-[100%] group-hover:top-0 left-0 opacity-100  transition-all duration-300 ease-in-out p-4 rounded-lg '>
                <MinTitle text={projectName} className="projectName text-center  pb-6" />
                  <MinTitle text={projectDesc} className="hidden lg:contents description lg:h-[100px] pt-6" />
                  <div className="h-full buttonList md:flex justify-center lg:justify-between items-center  gap-6 pt-8 text-center">
                    <Button directLink={liveLink} text="Live View" className="!rounded-md !px-1 !py-1 lg:!px-2 lg:!py-2 hover:!border-primary hover:!text-primary" />
                    <Button directLink={sourceLink} text="Source Code" className="!rounded-md !px-1 !py-1 lg:!px-2 lg:!py-2 hover:!border-primary hover:!text-primary md:mt-0 mt-4"  />
                  </div>
                </div>
                <img src={projectImage} alt="" className='h-[250px] w-full lg:w-[350px]' />
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