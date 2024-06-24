import React from 'react'
import Flex from '../../Layout/Flex'

import SocialHover from "../../assets/social-hover.png"
import SkiledItemIcon from '../../Layout/SkiledItemIcon'
import { FaFacebookF, FaGithub, FaInstagram, FaLink, FaLinkedinIn } from 'react-icons/fa6'
import MidTitle from '../../Layout/MidTitle'
import { Link } from 'react-router-dom'
import { CiLinkedin } from 'react-icons/ci'
import { TbBrandYoutube } from 'react-icons/tb'
// import Flex from '../../Layout/Flex'
const socialPlatforms = [
    {
        socialPlatformName: 'Facebook',
        socialPlatformLink: 'https://www.facebook.com/objectJS',
        socialPlatformIcon: <FaFacebookF />
    },
    {
        socialPlatformName: 'Instagram',
        socialPlatformLink: 'https://www.instagram.com/tuhin_ahammed_himu/',
        socialPlatformIcon: <FaInstagram />
    },
    {
        socialPlatformName: 'LinkedIn',
        socialPlatformLink: 'https://www.linkedin.com/in/tuhin-ahammed/',
        socialPlatformIcon: <CiLinkedin />
    },
    {
        socialPlatformName: 'Varcel',
        socialPlatformLink: 'https://vercel.com/tuhin-ahammeds-projects',
        socialPlatformIcon: <FaLink />
    },
    {
        socialPlatformName: 'Youtube',
        socialPlatformLink: 'https://www.youtube.com/channel/UCFTWIjZ1pAjZUO9DCFlxFhA',
        socialPlatformIcon: <TbBrandYoutube />
    }
];
const gridNumber = socialPlatforms.length
console.log(gridNumber);

const SocialLink = (className) => {

    return (
        <div className={`${className}`}>
            <Flex className={`items-center grid gap-1 sm:gap-2 md:gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${gridNumber}`}>
                {
                    socialPlatforms.map((item , index) => (

                        <Link to={item.socialPlatformLink} key={index} target="_blank">
                            <Flex className="items-center gap-2 group border-[1px] sm:border-[1px] lg:border-2 border-theme rounded-full  pr-5">
                                <div  className='relative group transition-transform '>
                                    <div className='w-[121%] lg:top-[-7px] lg:left-[-7px] sm:top-[-4px] sm:left-[-4px] top-[-4px] left-[-4px] absolute   '>
                                        <img src={SocialHover} alt="" className='rounded-full animate-spin-slow duration-500 ' />
                                    </div>
                                    <div className='text-primary text-xl sm:text-2xl md:text-2xl lg:text-3xl  rounded-full group-hover:text-theme p-2 md:p-4 lg:p-4'>
                                        {item.socialPlatformIcon}
                                    </div>
                                </div>
                                <MidTitle text={item.socialPlatformName} className="!text-sm !sm:text-lg !md:text-xl !lg:text-2xl"/>
                            </Flex>
                        </Link>

                    ))
                }
            </Flex>

        </div>
    )
}

export default SocialLink