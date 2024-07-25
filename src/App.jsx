import { useState } from "react";

const App = () => {
  
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currIndex,  setCurrIndex] = useState(0);

  const prevSlide = () => {

    if(currIndex === 0) {
      setCurrIndex(slides.length - 1)
    } else {
      setCurrIndex(currIndex - 1 )
    }
  }

  const nextSlide = () => {

    if(currIndex === slides.length-1) {
      setCurrIndex(0)
    } else {
      setCurrIndex(currIndex + 1 )
    }
  }

  const gotoSlide = (slideIndex) => {
    setCurrIndex(slideIndex)
  }

  return (
    <div className="relative w-screen h-screen justify-center items-center">
      <div style={{backgroundImage: `url(${slides[currIndex].url})`}} className="flex flex-col w-full h-full text-white justify-center items-center bg-center bg-cover duration-150">
        <div className="flex w-full justify-center items-center">
          <h1 className="bg-black/50 px-24 py-5 text-4xl font-thin">Do slides</h1>

          <div className="flex absolute w-full justify-between text-2xl">
            <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-black cursor-pointer hover:shadow-white hover:shadow-sm duration-100" onClick={prevSlide}>{'<'}</span>
            <span className="bg-white w-10 h-10 flex items-center justify-center rounded-full text-black cursor-pointer hover:shadow-white hover:shadow-sm duration-100" onClick={nextSlide}>{'>'}</span>
          </div>
        </div>
        <div className="absolute bottom-10 flex w-full items-end justify-center gap-4 z-50">
            {slides.map((slide, slideIndex) => (<span key={slideIndex} className={currIndex === slideIndex ? "w-4 h-4 border-1 border-black bg-white rounded-full duration-150 cursor-pointer" : "w-3 h-3 bg-white rounded-full hover:w-4 hover:h-4 duration-150 cursor-pointer"} onClick={() => gotoSlide(slideIndex)}></span>))}
        </div>
      </div>
    </div> 
  )
}

export default App