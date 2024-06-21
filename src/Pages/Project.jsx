import React, { useEffect, useState } from 'react'
import Container from "../Layout/Container"
import { projectButton, projectData } from "../Components/Project/ProjectData"
import GalleryItem from '../Components/Project/GalleryItem'
console.log(projectButton, projectData);

const Project = () => {
  const buttonLength = projectButton.length
  console.log(buttonLength);
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
        <div  className={`md:w-[80%] w-full m-auto btn md:flex justify-center items-center grid grid-cols-2 lg:grid-cols-${buttonLength} md:py-6 py-0 gap-2 lg:gap-4`}>
          {projectButton.map((item, id) => {
            const { name, value , } = item
            return <button onClick={handleButton} key={id} value={value}    className={`${active === value ? "!bg-theme !text-primary" : ""} px-4 py-1 md:px-6 md:py-3 lg:px-6 lg:py-3 rounded-full border-2 border-theme bg-transparent hover:!bg-theme hover:!text-primary text-theme`} > {name} </button>
          })}
        </div>

        {/* project gallary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-6">
        {
          filterProject &&
          filterProject.map((item, id) => {
            const { projectImage, projectName, projectDesc, liveLink, sourceLink, category } = item
            return (
              <GalleryItem projectImage={projectImage} projectName={projectName} projectDesc={projectDesc} liveLink={liveLink} sourceLink={sourceLink} category={category}/>
            )
          })
        }
        </div>

      </Container>
    </div>
  )
}

export default Project