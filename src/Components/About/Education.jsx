// import React from 'react'
// import MidTitle from '../../Layout/MidTitle'
// import MinTitle from '../../Layout/MinTitle'
// import Flex from '../../Layout/Flex'

// const Education = () => {
//   return (
//     <div>
//         <MidTitle text ="Education"/>
//         <Flex className=" grid lg:grid-cols-4 justify-between gap-4 md:gap-1 lg:gap-1">
//         <div className="innerEducation lg:col-span-2 ">
//             <MinTitle text ="(SSC) Pragati bidda-Niketan"/>
//             <MinTitle text ="(2021) - Jessore , Bangladesh " className="text-textSecondary italic text-sm"/>
//         </div>
//         <div className="innerEducation lg:col-span-2 ">
//             <MinTitle text ="(MERN Stack Development) Creative It Institute"/>
//             <MinTitle text ="(2023 - 2024) - Dhaka , Bangladesh" className="text-textSecondary italic text-sm"/>
//         </div>

//         </Flex>
//         <Flex className=" grid lg:grid-cols-4 justify-between gap-2 md:gap-1 lg:gap-1 mt-4 lg:mt-2">
//         <div className="innerEducation lg:col-span-2">
//             <MinTitle text ="(Diploma in Computer Science) SIPI Institute"/>
//             <MinTitle text ="(Running) - Dhaka , Bangladesh" className="text-textSecondary italic text-sm"/>
//         </div>

//         <div className="innerEducation lg:col-span-2">
//             <MinTitle text ="(Web Development) Shikhbe Shobay Institute"/>
//             <MinTitle text ="(2022 - 2023) - Dhaka , Bangladesh" className="text-textSecondary italic text-sm"/>
//         </div>
//         </Flex>
//     </div>
//   )
// }

// export default Education

import React from 'react'
import Flex from '../../Layout/Flex'
import MinTitle from '../../Layout/MinTitle'
import MidTitle from '../../Layout/MidTitle'
const CertificateData = [
    {
        name : "Secondary School Certificate - (Pragati bidda-Niketan)" ,
        year : "(2022 - 2023) - Dhaka , Bangladesh"
    },
    {
        name : "Diploma in Computer Science - (SIPI Institute)" ,
        year :"(Running) - Dhaka , Bangladesh"
    },

]
const Education = () => {
    return (
        <div>
            <MidTitle text="Education" className="lg:mb-4 mb-3" />
            {
                CertificateData.map((item) => (
                <div className="innerEducation lg:col-span-2 mb-2 lg:mb-3">
                    <MinTitle text={item.name} />
                    <MinTitle text={item.year} className="text-textSecondary italic !text-sm" />
                </div>
                ))
            }
        </div>
    )
}

export default Education