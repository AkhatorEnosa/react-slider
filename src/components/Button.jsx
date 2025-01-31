import React from 'react'

const Button = ({bgColor}) => {
  return (
    <div style={{backgroundColor: `${bgColor}`}} className="w-fit mt-4 px-3 py-2 cursor-pointer">Explore Now</div>
  )
}

export default Button