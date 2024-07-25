import React from 'react'
import SlideContainer from './SlideContainer'

const All = ({img1, img2, img3, img4, handlePrev}) => {
  return (
    <div className="w-full h-full">
        <SlideContainer 
            img1={img1} 
            img2={img2} 
            img3={img3} 
            img4={img4} 
        />

       <div className="buttons">
        <button id="prev" onClick={handlePrev}>{'<'}</button>
        <button id="next">{'>'}</button>
       </div>
    </div>
  )
}

export default All