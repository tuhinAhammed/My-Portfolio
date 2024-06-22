import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import MinTitle from '../../Layout/MinTitle'

const AboutSummary = ({ className }) => {
    return (
        <div className={`${className} ` }>
            <MidTitle text="Hello," />
            <MidTitle text="I am Tuhin Ahammed Shuvo," />
            <MinTitle className="!text-textSecondary pt-1" text="Accomplished Full Stack Web Developer with a strong foundation in both frontend and backend development. With 4
years of experience in web design and 2 years specializing in MERN stack development, I possess a diverse skill set
and a passion for leveraging technology to solve complex problems. As a proactive learner, I am constantly exploring
new technologies and best practices to stay ahead in the ever-evolving field of web development. Skilled in MongoDB,
Express.js, React.js, and Node.js, I am well-equipped to deliver high-quality, scalable solutions that exceed client
expectations."/>
        </div>
    )
}

export default AboutSummary