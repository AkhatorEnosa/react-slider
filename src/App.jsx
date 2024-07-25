import { useState } from "react";

const App = () => {
  
  const slides = [
    {
      url: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
    {
      url: 'https://img.freepik.com/premium-photo/beautiful-lake-natural-landscape-photography-wallpaper-relax-joyful-illustration_327903-1578704.jpg',
    },

    {
      url: 'https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp',
    },
    {
      url: 'https://res.cloudinary.com/jerrick/image/upload/v1707195361/65c1bbe184fa66001d1faa64.jpg',
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
            {slides.map((slide, slideIndex) => (<span key={slideIndex} className={currIndex === slideIndex ? "w-4 h-4 border-2 border-black bg-white rounded-full duration-150 cursor-pointer" : "w-3 h-3 bg-white rounded-full hover:w-4 hover:h-4 duration-150 cursor-pointer"} onClick={() => gotoSlide(slideIndex)}></span>))}
        </div>
      </div>
    </div> 
  )
}

export default App