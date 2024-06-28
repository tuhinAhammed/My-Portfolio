import React from 'react'
import Exprience from '../../Layout/Exprience'
const data = [
  {
    title: "years of exprience",
    value: "+2"
  },
  {
    title: "Total Project",
    value: "+53"
  },
  {
    title: "CLENTS WORLDWIBE",
    value: "25"
  },
]
const ExprienceSection = () => {
  return (
    <div>
      {
        data.map((item) => (
          <Exprience number={item.value} text={item.title} />
        ))
      }
    </div>
  )
}

export default ExprienceSection