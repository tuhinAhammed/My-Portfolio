import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import SlidingSection from '../../Layout/SlidingSection'

import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go'
import Flex from '../../Layout/Flex'
import SkiledItemText from '../../Layout/SkiledItemText'
import LargeTitle from '../../Layout/LargeTitle'
import SkiledItemIcon from '../../Layout/SkiledItemIcon'

import HtmlIcon from "../../assets/html.png"
import CssIcon from "../../assets/css.png"
import BootstrapIcon from "../../assets/bootstrap.png"
import TailwindIcon from "../../assets/tailwind.png"
import JavascriptIcon from "../../assets/javascript.png"
import ReactIcon from "../../assets/react.png"
import ReduxIcon from "../../assets/redux.png"
import MongoDbIcon from "../../assets/mongodb.png"
import NodeJsIcon from "../../assets/node.png"
import NativeIcon from "../../assets/native.png"
import ExpressIcon from "../../assets/express.png"
import GithubIcon from "../../assets/github.png"
import FigmaIcon from "../../assets/figma.png"
import CanvaIcon from "../../assets/canva.png"
const iconData = [
    {
      icon: HtmlIcon,
    },
    {
      icon: CssIcon,
    },
    {
      icon: BootstrapIcon,
    },
    {
      icon: TailwindIcon,
    },
    {
      icon: JavascriptIcon,
    },
    {
      icon: ReactIcon,
    },
    {
      icon: ReduxIcon,
    },
    {
      icon: MongoDbIcon,
    },
    {
      icon: NodeJsIcon,
    },
    {
      icon: NativeIcon,
    },
    {
      icon: ExpressIcon,
    },
    {
      icon: GithubIcon,
    },
    {
      icon: FigmaIcon,
    },
    {
      icon: CanvaIcon,
    },
  ];
  
const skilledData = [
    {
        skilName: "HTML-5",
    },
    {
        skilName: "CSS",
    },
    {
        skilName: "Bootstrap",
    },
    {
        skilName: "Tailwind",
    },
    {
        skilName: "Bootstrap",
    },
    {
        skilName: "React JS",
    },
    {
        skilName: "Redux",
    },
    {
        skilName: "React Router",
    },
    {
        skilName: "Firebase",
    },
    {
        skilName: "MongoDB",
    },
    {
        skilName: "Node JS",
    },
    {
        skilName: "Express JS",
    },
    {
        skilName: "Rest API Development",
    },
    {
        skilName: "React Native",
    },
    {
        skilName: "Figma",
    },
    {
        skilName: "Canva",
    },
]
const SkilAndTools = ({ className }) => {
    return (
        <div className={`${className}`}>
            <MidTitle text="Skill & Tools" className=" duration-300" />
            <SlidingSection className="text py-5">
                <Flex className="items-center gap-4 mt-4">
                    {
                        skilledData.map((item , id) => {
                            const {skilName} = item
                            return (
                                <SkiledItemText text={skilName} className="" key={id}>
                                    {/* <GoMoveToEnd /> */}
                                </SkiledItemText>
                            )
                        })
                    }

                </Flex>
            </SlidingSection>
            <SlidingSection className="icon " direction="right" >
                <Flex className=" gap-4 mt-4 items-center">

                    {
                        iconData.map((item) => (
                            <img src={item.icon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />
                        ))

                    }
                </Flex>
            </SlidingSection>

        </div>
    )
}

export default SkilAndTools