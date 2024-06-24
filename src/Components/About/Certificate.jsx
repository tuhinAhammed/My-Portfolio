import React from 'react'
import Flex from '../../Layout/Flex'
import MinTitle from '../../Layout/MinTitle'
import MidTitle from '../../Layout/MidTitle'
const CertificateData = [
    {
        name : "Web Development - (Shikhbe Shobay Institute)" ,
        year : "(2022 - 2023) - Dhaka , Bangladesh"
    },
    {
        name : "MERN Stack Development - (Creative It Institute)" ,
        year :"(2023 - 2024) - Dhaka , Bangladesh"
    },

]
const Certificate = () => {
    return (
        <div>
            <MidTitle text="Certificate" className="lg:mb-4 mb-3" />
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

export default Certificate